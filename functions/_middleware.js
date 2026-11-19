// Markdown for Agents: aceeași adresă, două formate. Cine trimite
// „Accept: text/markdown” primește index.md generat la build
// (scripts/markdown-pages.mjs); browserele primesc HTML, neschimbat.
// Imaginile, scripturile și fonturile nu trec pe aici (public/_routes.json).
export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const wantsMd = /\btext\/markdown\b/i.test(request.headers.get('Accept') || '');

  if (wantsMd && (request.method === 'GET' || request.method === 'HEAD') && !/\.[a-z0-9]+$/i.test(url.pathname)) {
    const base = url.pathname.endsWith('/') ? url.pathname : url.pathname + '/';
    const res = await env.ASSETS.fetch(new URL(base + 'index.md', url.origin));
    if (res.ok) {
      return new Response(request.method === 'HEAD' ? null : res.body, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'X-Robots-Tag': 'noindex',
          'Cache-Control': 'public, max-age=0, must-revalidate',
        },
      });
    }
  }

  const res = await next();
  const type = res.headers.get('Content-Type') || '';
  if (type.includes('text/html') || url.pathname.endsWith('/index.md')) {
    const out = new Response(res.body, res);
    if (type.includes('text/html')) out.headers.append('Vary', 'Accept');
    if (url.pathname.endsWith('/index.md')) out.headers.set('X-Robots-Tag', 'noindex');
    return out;
  }
  return res;
}
