// Proxy pentru dalele hărții de pe prima pagină.
// Browserul vizitatorului cere imaginile doar de la me-design.ro; serverul
// Cloudflare le ia de la OpenStreetMap și le păstrează în cache. Astfel
// OpenStreetMap nu primește adresa IP a vizitatorului și harta nu are nevoie
// de consimțământ. Atribuirea „© OpenStreetMap contributors” rămâne pe hartă.

const UPSTREAM = 'https://tile.openstreetmap.org';
const MAX_ZOOM = 19;
const WEEK = 7 * 24 * 3600;

export async function onRequestGet({ request, params, waitUntil }) {
  const parts = Array.isArray(params.path) ? params.path : [params.path];
  const m = parts.join('/').match(/^(\d{1,2})\/(\d{1,7})\/(\d{1,7})\.png$/);
  if (!m) return new Response('Not found', { status: 404 });

  const [z, x, y] = m.slice(1).map(Number);
  const n = 2 ** z;
  if (z > MAX_ZOOM || x >= n || y >= n) return new Response('Not found', { status: 404 });

  const cache = caches.default;
  const key = new Request(new URL(`/tiles/${z}/${x}/${y}.png`, request.url).toString());
  const hit = await cache.match(key);
  if (hit) return hit;

  const upstream = await fetch(`${UPSTREAM}/${z}/${x}/${y}.png`, {
    headers: { 'User-Agent': 'me-design.ro project map (+https://me-design.ro)' },
    cf: { cacheTtl: WEEK, cacheEverything: true },
  });
  if (!upstream.ok) return new Response('Tile unavailable', { status: 502 });

  const res = new Response(upstream.body, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': `public, max-age=${WEEK}`,
      'Access-Control-Allow-Origin': 'https://me-design.ro',
    },
  });
  waitUntil(cache.put(key, res.clone()));
  return res;
}
