import { existsSync } from 'node:fs';

/**
 * Variantele de 800px stau în `sm/`, lângă original. Verificarea pe disc se face
 * la build, deci o imagine fără variantă rămâne servită la dimensiunea originală
 * în loc să producă un 404 în srcset.
 */
export function cardSrcset(src?: string): string | undefined {
  if (!src) return undefined;
  const small = src.replace(/\/([^/]+)$/, '/sm/$1');
  if (!existsSync('public' + decodeURIComponent(small))) return undefined;
  return `${small} 800w, ${src} 1600w`;
}

/**
 * Varianta mică pentru carduri (640px, webp), generată de scripts/card-images.mjs
 * în `card/`, lângă original. Dacă lipsește, cade pe varianta din `sm/`, apoi pe original.
 */
export function cardImage(src: string): string {
  const m = src.match(/^(.*)\/([^/]+)\.[a-z0-9]+$/i);
  if (m) {
    const card = `${m[1]}/card/${m[2]}.webp`;
    if (existsSync('public' + decodeURIComponent(card))) return card;
  }
  const small = src.replace(/\/([^/]+)$/, '/sm/$1');
  return existsSync('public' + decodeURIComponent(small)) ? small : src;
}

/** Lățimea reală a cardurilor din grilele site-ului. */
export const CARD_SIZES = '(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw';
