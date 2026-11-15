// Corespondența dintre paginile în română și cele în engleză.
// Blogul, zonele, colaborările și paginile legale există doar în română.

export type Lang = 'ro' | 'en';

export function langFromPath(pathname: string): Lang {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : 'ro';
}

const strip = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

const roToEnPrefix: [string, string][] = [
  ['/servicii', '/en/services'],
  ['/portofoliu', '/en/portfolio'],
  ['/despre', '/en/about'],
  ['/contact', '/en/contact'],
];

/** Pagina echivalentă în cealaltă limbă, sau null dacă nu există.
 *  Păstrează slash-ul final, ca hreflang să coincidă cu canonical. */
export function alternatePath(pathname: string): string | null {
  const r = alternateBare(pathname);
  if (r && pathname.length > 1 && pathname.endsWith('/') && !r.endsWith('/')) return r + '/';
  return r;
}

function alternateBare(pathname: string): string | null {
  const p = strip(pathname);
  if (langFromPath(p) === 'en') {
    if (p === '/en') return '/';
    for (const [ro, en] of roToEnPrefix) {
      if (p === en || p.startsWith(en + '/')) return ro + p.slice(en.length);
    }
    return null;
  }
  if (p === '/') return '/en/';
  for (const [ro, en] of roToEnPrefix) {
    if (p === ro || p.startsWith(ro + '/')) return en + p.slice(ro.length);
  }
  return null;
}

/** Linkul pentru butonul de limbă: pagina echivalentă sau prima pagină. */
export function switchLink(pathname: string): string {
  return alternatePath(pathname) ?? (langFromPath(pathname) === 'en' ? '/' : '/en/');
}

/** Categoriile de proiect, traduse. */
export const categoryEn: Record<string, string> = {
  Toate: 'All',
  Drumuri: 'Roads',
  Poduri: 'Bridges',
  Pasarele: 'Footbridges',
  Consolidări: 'Retaining & stabilisation',
  'Amenajări Hidrotehnice': 'Hydraulic works',
  'Monument Istoric': 'Historic monument',
  Parc: 'Parks',
};

export const regionEn: Record<string, string> = {
  muntenia: 'Muntenia & Bucharest',
  oltenia: 'Oltenia',
  dobrogea: 'Dobrogea',
  transilvania: 'Transylvania & Banat',
  moldova: 'Moldova',
};
