// Generează coperțile ilustrate pentru articolele fără fotografie:
//   node scripts/covers/generate.mjs [slug ...]
// Ieșire: public/img/blog/cover-<slug>.webp (1200x630). Desenele sunt în scenes.mjs.
import { createRequire } from 'node:module';
// Playwright e instalat global în mediul de lucru (nu e dependență a site-ului).
const { chromium } = createRequire(import.meta.url)('playwright');
import sharp from 'sharp';
import { scenes } from './scenes.mjs';

const only = process.argv.slice(2);
const frame = (inner) => `<!doctype html><html><body style="margin:0">
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="85%" cy="0%" r="70%"><stop offset="0" stop-color="#f2c12e" stop-opacity=".22"/><stop offset="1" stop-color="#f2c12e" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="0%" cy="100%" r="60%"><stop offset="0" stop-color="#5b8fd0" stop-opacity=".16"/><stop offset="1" stop-color="#5b8fd0" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity=".045" stroke-width="1"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#121417"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#g1)"/><rect width="1200" height="630" fill="url(#g2)"/>
  ${inner}
  <text x="1170" y="606" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="15" fill="#ffffff" fill-opacity=".35">ilustrație · ME Design</text>
</svg></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [slug, { svg }] of Object.entries(scenes)) {
  if (only.length && !only.includes(slug)) continue;
  await page.setContent(frame(svg));
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await sharp(png).webp({ quality: 82 }).toFile(`public/img/blog/cover-${slug}.webp`);
  console.log('copertă', slug);
}
await browser.close();
