// Generează schemele de tip flux / tabel / coloane din articole, în stilul site-ului.
// Rulare: node scripts/schite/generate.mjs   → scrie în public/img/blog/schite/
// Desenele tehnice (secțiuni, profile) sunt făcute de mână, nu aici.
import { writeFileSync } from 'node:fs';
import { DIAGRAMS } from './data.mjs';

const C = {
  bg: '#f8fafc', ink: '#0a1628', brand: '#1e3a5f', muted: '#64748b', soft: '#475569',
  line: '#cbd5e1', card: '#ffffff', accent: '#d97706', accentDark: '#b45309', red: '#b91c1c',
};
const W = 1200;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Împarte textul pe rânduri după o lățime aproximativă (Inter, ~0.53 em pe caracter).
function wrap(text, width, size) {
  const max = Math.max(8, Math.floor(width / (size * 0.53)));
  const words = String(text).split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) { if (cur) lines.push(cur); cur = w; }
    else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}
function textBlock(x, y, text, { width, size = 17, fill = C.ink, weight = 400, lh = 1.3, anchor = 'start' }) {
  const lines = wrap(text, width, size);
  const out = lines.map((l, i) =>
    `<text x="${x}" y="${y + i * size * lh}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(l)}</text>`).join('');
  return { svg: out, height: lines.length * size * lh };
}
function header(d) {
  let s = `<text x="40" y="52" font-size="30" font-weight="700" fill="${C.ink}">${esc(d.title)}</text>`;
  if (d.subtitle) s += `<text x="40" y="82" font-size="17" fill="${C.muted}">${esc(d.subtitle)}</text>`;
  return s;
}
function badge(cx, cy, n, color = C.brand, r = 16) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/><text x="${cx}" y="${cy + 5}" font-size="${r - 1}" font-weight="700" fill="#fff" text-anchor="middle">${esc(n)}</text>`;
}
function wrapSvg(body, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${h}" font-family="Inter, Arial, sans-serif"><rect width="${W}" height="${h}" fill="${C.bg}"/>${body}</svg>\n`;
}

// Pași numerotați, pe una sau două coloane, citiți de sus în jos.
function steps(d) {
  const cols = d.cols ?? (d.steps.length > 5 ? 2 : 1);
  const colW = (W - 80 - (cols - 1) * 30) / cols;
  const perCol = Math.ceil(d.steps.length / cols);
  let body = header(d);
  let maxY = 0;
  for (let c = 0; c < cols; c++) {
    let y = 120;
    for (let i = c * perCol; i < Math.min(d.steps.length, (c + 1) * perCol); i++) {
      const st = d.steps[i];
      const x = 40 + c * (colW + 30);
      const t = textBlock(x + 66, y + 34, st.t, { width: colW - 90, size: 19, weight: 600 });
      const s = st.s ? textBlock(x + 66, y + 34 + t.height + 2, st.s, { width: colW - 90, size: 15, fill: C.muted }) : { svg: '', height: 0 };
      const h = Math.max(64, 26 + t.height + s.height + 8);
      const hi = st.hi;
      body += `<rect x="${x}" y="${y}" width="${colW}" height="${h}" rx="12" fill="${C.card}" stroke="${hi ? C.accent : C.line}" stroke-width="${hi ? 2 : 1.5}"/>`;
      body += badge(x + 34, y + h / 2, st.n ?? i + 1, hi ? C.accent : C.brand, 17);
      body += t.svg + s.svg;
      y += h + 14;
    }
    maxY = Math.max(maxY, y);
  }
  if (d.footer) {
    const f = textBlock(40, maxY + 22, d.footer, { width: W - 80, size: 16, fill: C.soft });
    body += f.svg; maxY += 22 + f.height;
  }
  return wrapSvg(body, maxY + 30);
}

// Coloane comparative cu antet colorat și rânduri.
function columns(d) {
  const n = d.cols.length;
  const gap = d.joiner ? 70 : 24;
  const colW = (W - 80 - (n - 1) * gap) / n;
  let body = header(d);
  let maxY = 0;
  d.cols.forEach((col, i) => {
    const x = 40 + i * (colW + gap);
    let y = 120;
    const head = textBlock(x + colW / 2, y + 34, col.head, { width: colW - 30, size: 20, weight: 700, fill: '#fff', anchor: 'middle' });
    const hh = 24 + head.height;
    let inner = `<rect x="${x}" y="${y}" width="${colW}" height="${hh}" rx="12" fill="${col.color ?? C.brand}"/>` + head.svg;
    y += hh + 10;
    for (const r of col.rows) {
      const isObj = typeof r === 'object';
      const label = isObj ? r.k : null;
      const val = isObj ? r.v : r;
      let ty = y + 28;
      let part = '';
      if (label) {
        const l = textBlock(x + 18, ty, label, { width: colW - 36, size: 14, fill: C.muted, weight: 600 });
        part += l.svg; ty += l.height;
      }
      const v = textBlock(x + 18, ty, val, { width: colW - 36, size: 17 });
      part += v.svg;
      const h = (ty - y) + v.height - 6;
      inner += `<rect x="${x}" y="${y}" width="${colW}" height="${h}" rx="10" fill="${C.card}" stroke="${C.line}" stroke-width="1.5"/>` + part;
      y += h + 10;
    }
    body += inner;
    if (d.joiner && i < n - 1) {
      body += `<text x="${x + colW + gap / 2}" y="${120 + 60}" font-size="44" font-weight="700" fill="${C.accent}" text-anchor="middle">${esc(d.joiner[i])}</text>`;
    }
    maxY = Math.max(maxY, y);
  });
  if (d.footer) {
    const f = textBlock(40, maxY + 26, d.footer, { width: W - 80, size: 16, fill: C.soft });
    body += f.svg; maxY += 26 + f.height;
  }
  return wrapSvg(body, maxY + 30);
}

// Tabel simplu cu antet.
function table(d) {
  const widths = d.widths;
  const total = widths.reduce((a, b) => a + b, 0);
  const scale = (W - 80) / total;
  const ws = widths.map((w) => w * scale);
  let body = header(d);
  let y = 120;
  const rowH = (cells, size, weight) => Math.max(...cells.map((c, i) => wrap(c, ws[i] - 32, size).length)) * size * 1.3 + 26;
  const drawRow = (cells, { size = 17, weight = 400, fill = C.card, color = C.ink, stroke = C.line, hi = false }) => {
    const h = rowH(cells, size, weight);
    let x = 40;
    let s = `<rect x="40" y="${y}" width="${W - 80}" height="${h}" rx="10" fill="${fill}" stroke="${hi ? C.accent : stroke}" stroke-width="${hi ? 2 : 1.5}"/>`;
    cells.forEach((c, i) => {
      s += textBlock(x + 16, y + 18 + size * 0.9, c, { width: ws[i] - 32, size, weight: i === 0 ? 700 : weight, fill: color }).svg;
      x += ws[i];
    });
    y += h + 8;
    return s;
  };
  body += drawRow(d.head, { size: 16, weight: 700, fill: C.brand, color: '#fff', stroke: C.brand });
  for (const r of d.rows) body += drawRow(r.cells ?? r, { hi: r.hi });
  if (d.footer) {
    const f = textBlock(40, y + 22, d.footer, { width: W - 80, size: 16, fill: C.soft });
    body += f.svg; y += 22 + f.height;
  }
  return wrapSvg(body, y + 30);
}

// Axă de timp cu repere și, opțional, o bandă care marchează un interval.
function timeline(d) {
  let body = header(d);
  const n = d.items.length;
  const x0 = 90, x1 = W - 90;
  const step = (x1 - x0) / (n - 1);
  const ay = 250;
  if (d.span) {
    const a = x0 + d.span.from * step - 30, b = x0 + d.span.to * step + 30;
    body += `<rect x="${a}" y="${ay - 112}" width="${b - a}" height="34" rx="17" fill="${C.accent}" opacity="0.15"/>`;
    body += `<text x="${(a + b) / 2}" y="${ay - 89}" font-size="16" font-weight="700" fill="${C.accentDark}" text-anchor="middle">${esc(d.span.label)}</text>`;
  }
  body += `<line x1="${x0 - 30}" y1="${ay}" x2="${x1 + 30}" y2="${ay}" stroke="${C.brand}" stroke-width="5"/>`;
  let maxY = ay;
  d.items.forEach((it, i) => {
    const x = x0 + i * step;
    body += badge(x, ay, it.n ?? i, it.hi ? C.accent : C.brand, 20);
    const t = textBlock(x, ay + 52, it.t, { width: step - 12, size: 17, weight: 700, anchor: 'middle', fill: it.hi ? C.accentDark : C.ink });
    const s = it.s ? textBlock(x, ay + 52 + t.height + 2, it.s, { width: step - 12, size: 14, fill: C.muted, anchor: 'middle' }) : { svg: '', height: 0 };
    body += t.svg + s.svg;
    maxY = Math.max(maxY, ay + 52 + t.height + s.height);
  });
  if (d.footer) {
    const f = textBlock(40, maxY + 40, d.footer, { width: W - 80, size: 16, fill: C.soft });
    body += f.svg; maxY += 40 + f.height;
  }
  return wrapSvg(body, maxY + 30);
}

const KINDS = { steps, columns, table, timeline };
for (const d of DIAGRAMS) {
  const svg = KINDS[d.kind](d);
  writeFileSync(new URL(`../../public/img/blog/schite/${d.file}.svg`, import.meta.url), svg);
  console.log('scris', d.file);
}
