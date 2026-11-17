// Generează variantele mici pentru cardurile din portofoliu: 640px, webp,
// în public/img/projects/card/. Se rulează după ce adaugi o copertă nouă:
//   node scripts/card-images.mjs
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, parse } from 'node:path';

const dir = 'public/img/projects';
const out = join(dir, 'card');
mkdirSync(out, { recursive: true });
for (const f of readdirSync(dir)) {
  const src = join(dir, f);
  if (!statSync(src).isFile() || !/\.(png|jpe?g|webp)$/i.test(f)) continue;
  const dest = join(out, parse(f).name + '.webp');
  if (existsSync(dest) && statSync(dest).mtimeMs > statSync(src).mtimeMs) continue;
  await sharp(src).flatten({ background: '#ffffff' }).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 72 }).toFile(dest);
  console.log('card', f, Math.round(statSync(dest).size / 1024) + 'KB');
}
