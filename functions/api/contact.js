const MAX = { nume: 120, email: 160, telefon: 40, organizatie: 160, locatie: 160, mesaj: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export async function onRequestPost({ request, env }) {
  let data;
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      data = await request.json();
    } else {
      data = Object.fromEntries(await request.formData());
    }
  } catch {
    return json(400, { ok: false, error: 'Cerere invalidă.' });
  }

  // Honeypot: completat doar de boți.
  if (data.website) return json(200, { ok: true });

  const f = {};
  for (const [k, limit] of Object.entries(MAX)) {
    f[k] = String(data[k] ?? '').trim().slice(0, limit);
  }

  const missing = ['nume', 'email', 'mesaj'].filter((k) => !f[k]);
  if (missing.length) {
    return json(400, { ok: false, error: 'Completează numele, emailul și mesajul.' });
  }
  if (!EMAIL_RE.test(f.email)) {
    return json(400, { ok: false, error: 'Adresa de email nu pare validă.' });
  }

  const to = env.CONTACT_TO || 'office@me-design.ro';
  const from = env.CONTACT_FROM || 'Formular site <formular@me-design.ro>';

  if (!env.RESEND_API_KEY) {
    return json(503, {
      ok: false,
      error: 'Formularul nu este încă activat. Scrie-ne direct la office@me-design.ro.',
    });
  }

  const rows = [
    ['Nume', f.nume],
    ['Email', f.email],
    ['Telefon', f.telefon],
    ['Organizație', f.organizatie],
    ['Localizare proiect', f.locatie],
  ].filter(([, v]) => v);

  const html = `
    <h2 style="font-family:system-ui,sans-serif;color:#1e3a5f;margin:0 0 16px">Solicitare nouă de pe site</h2>
    <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#64748b;vertical-align:top">${k}</td><td style="padding:6px 0"><strong>${esc(v)}</strong></td></tr>`
        )
        .join('')}
    </table>
    <p style="font-family:system-ui,sans-serif;font-size:14px;color:#64748b;margin:20px 0 6px">Mesaj</p>
    <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;white-space:pre-wrap;border-left:3px solid #d97706;padding-left:14px">${esc(f.mesaj)}</div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: f.email,
        subject: `Solicitare site — ${f.nume}${f.organizatie ? ` (${f.organizatie})` : ''}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend a respins cererea:', res.status, detail);
      return json(502, {
        ok: false,
        error: 'Mesajul nu a putut fi trimis. Scrie-ne direct la office@me-design.ro.',
      });
    }
  } catch (err) {
    console.error('Eroare la trimiterea emailului:', err);
    return json(502, {
      ok: false,
      error: 'Mesajul nu a putut fi trimis. Scrie-ne direct la office@me-design.ro.',
    });
  }

  return json(200, { ok: true });
}
