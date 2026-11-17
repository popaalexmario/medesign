import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

// Pozele urcate în poze/proiecte/<slug>/ și poze/blog/<slug>/ sunt preluate
// automat la build. Originalele rămân în repo; pe site ajung doar variantele
// redimensionate (webp), generate de Astro.
type Mod = { default: ImageMetadata };

const projectImgs = import.meta.glob<Mod>(
  '/poze/proiecte/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);
const blogImgs = import.meta.glob<Mod>(
  '/poze/blog/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);

// Numele generate de telefon sau cameră nu spun nimic; nu le afișăm ca text.
// Un număr la început (01-, 02-) stabilește doar ordinea și nu se afișează.
const GENERIC = /^(img|dsc|dscn|pxl|photo|foto|image|whatsapp|screenshot|captura)|^[\d\W_]*$/i;

function captionFrom(file: string): string | undefined {
  const base = file.replace(/\.[^.]+$/, '').replace(/^\d+[-_ .]*/, '');
  if (GENERIC.test(base)) return undefined;
  // Nume generate automat (Facebook, WhatsApp, camere): aproape numai cifre.
  if ((base.match(/\p{L}/gu) ?? []).length < 3) return undefined;
  const text = base.replace(/[-_]+/g, ' ').trim();
  if (text.length < 3) return undefined;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// fit: 'cover' pentru fotografii, 'contain' pentru planșe și randări, care
// trebuie văzute întregi. name: numele fișierului urcat, ca să evităm dublurile.
export type Photo = { card: string; thumb: string; full: string; caption?: string; fit?: 'cover' | 'contain'; name?: string };

async function build(map: Record<string, Mod>, slug: string): Promise<Photo[]> {
  const entries = Object.entries(map)
    .filter(([p]) => p.split('/')[3] === slug)
    .sort(([a], [b]) => a.localeCompare(b, 'ro', { numeric: true }));

  return Promise.all(
    entries.map(async ([p, mod]) => {
      const img = mod.default;
      const thumb = await getImage({ src: img, width: Math.min(800, img.width), format: 'webp', quality: 78 });
      const card = await getImage({ src: img, width: Math.min(640, img.width), format: 'webp', quality: 72 });
      const full = await getImage({ src: img, width: Math.min(1600, img.width), format: 'webp', quality: 82 });
      const name = p.split('/').pop()!;
      return { card: card.src, thumb: thumb.src, full: full.src, caption: captionFrom(name), fit: 'cover' as const, name };
    })
  );
}

export const projectPhotos = (slug: string) => build(projectImgs, slug);
export const blogPhotos = (slug: string) => build(blogImgs, slug);
