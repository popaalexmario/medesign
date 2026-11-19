// După build: pentru fiecare pagină HTML din dist/ scrie alături un index.md,
// versiunea curată pentru agenții AI. functions/_middleware.js o servește
// când cererea are „Accept: text/markdown” (Markdown for Agents).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { parseHTML } from 'linkedom';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const DIST = 'dist';
const SKIP = ['proba'];
const SITE = 'https://me-design.ro';

const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
td.use(gfm);
td.remove(['script', 'style', 'noscript', 'svg', 'iframe', 'template', 'button', 'form']);

function pages(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (dir === DIST && (name.startsWith('_') || name.startsWith('.') || SKIP.includes(name))) continue;
      pages(p, out);
    } else if (name === 'index.html') out.push(p);
  }
  return out;
}

let n = 0;
for (const file of pages(DIST)) {
  const { document } = parseHTML(readFileSync(file, 'utf8'));
  const title = document.querySelector('title')?.textContent?.trim() ?? '';
  const desc = document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() ?? '';
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';
  const body = document.body;
  body.querySelectorAll('header, footer, nav, [aria-hidden="true"], #cookie-banner, [data-slides] [data-prev], [data-slides] [data-next], .sr-only').forEach((el) => el.remove());
  // Cardurile cu link pe tot blocul: păstrăm conținutul și punem linkul pe titlu.
  body.querySelectorAll('a').forEach((a) => {
    if (!a.querySelector('h1, h2, h3, h4, p, div')) return;
    const href = a.getAttribute('href');
    const h = a.querySelector('h1, h2, h3, h4');
    if (h && href) h.innerHTML = `<a href="${href}">${h.textContent.trim()}</a>`;
    a.replaceWith(...a.childNodes);
  });
  // Spații între elemente alăturate (de ex. „2018” și „pe piață din”).
  body.querySelectorAll('span').forEach((s) => s.after(document.createTextNode(' ')));
  // Linkurile relative devin absolute, ca să funcționeze și în afara site-ului.
  body.querySelectorAll('a[href^="/"]').forEach((a) => a.setAttribute('href', SITE + a.getAttribute('href')));
  body.querySelectorAll('img[src^="/"]').forEach((i) => i.setAttribute('src', SITE + i.getAttribute('src')));
  let md = td.turndown(body.innerHTML)
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  const front = ['---', `title: ${JSON.stringify(title)}`, desc && `description: ${JSON.stringify(desc)}`, canonical && `url: ${canonical}`, '---']
    .filter(Boolean)
    .join('\n');
  writeFileSync(file.replace(/index\.html$/, 'index.md'), `${front}\n\n${md}\n`);
  n++;
}
console.log(`markdown-pages: ${n} pagini`);
