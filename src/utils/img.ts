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

/** Lățimea reală a cardurilor din grilele site-ului. */
export const CARD_SIZES = '(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw';
