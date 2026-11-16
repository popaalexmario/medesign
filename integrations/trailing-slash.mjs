// Cloudflare Pages servește paginile la adrese cu „/” la final și redirecționează
// (308) varianta fără „/”. Linkurile interne sunt scrise fără „/”, deci fiecare
// click și fiecare link urmărit de Google trecea printr-o redirecționare.
// După build, adăugăm „/” la linkurile interne care duc la o pagină (folder cu
// index.html), ca să coincidă cu adresa canonică.
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

export default function trailingSlash() {
  return {
    name: 'trailing-slash-links',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const cache = new Map();
        const isPage = async (p) => {
          if (!cache.has(p)) {
            cache.set(p, await stat(path.join(root, p, 'index.html')).then(() => true, () => false));
          }
          return cache.get(p);
        };
        let changed = 0;
        for await (const file of htmlFiles(root)) {
          const html = await readFile(file, 'utf8');
          const re = /href="(\/[^"#?.]*[^"#?./])((?:[#?][^"]*)?)"/g;
          const targets = new Set([...html.matchAll(re)].map((m) => m[1]));
          const ok = new Set();
          for (const t of targets) if (await isPage(t)) ok.add(t);
          if (!ok.size) continue;
          const out = html.replace(re, (m, p, rest) => (ok.has(p) ? `href="${p}/${rest}"` : m));
          if (out !== html) { await writeFile(file, out); changed++; }
        }
        logger.info(`linkuri interne cu „/” final în ${changed} fișiere`);
      },
    },
  };
}
