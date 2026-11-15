import type { CollectionEntry } from 'astro:content';

// Un articol apare pe site doar dacă nu e ciornă și data lui de publicare a
// trecut la momentul build-ului. Articolele programate pentru zilele următoare
// sunt publicate de workflow-ul .github/workflows/publicare-programata.yml,
// care declanșează un build nou în fiecare dimineață în care e ceva de publicat.
export const isPublished = ({ data }: CollectionEntry<'blog'>) =>
  !data.draft && data.pubDate.getTime() <= Date.now();
