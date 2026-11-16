import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { serviceLinks } from '../data/services';
import { isPublished } from '../utils/published';

// Rezumat al site-ului pentru asistenții AI (convenția llms.txt).
// Se generează la fiecare build, deci include automat articolele și proiectele noi.
const SITE = 'https://me-design.ro';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', isPublished)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const projects = (await getCollection('projects', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order
  );

  const lines = [
    '# ME Design (Mario Engineering Design SRL)',
    '',
    '> Firmă românească de proiectare infrastructură, înființată în 2018, cu sediul în București: drumuri, poduri, pasaje, pasarele, poduri de cale ferată, lucrări de sprijin și consolidări, intervenții la monumente istorice, expertize tehnice și amenajări hidrotehnice. Lucrează pentru primării, consilii județene, administratori naționali de infrastructură și constructori, în toată România.',
    '',
    'Contact: office@me-design.ro · +40 746 784 156 · ' + SITE + '/contact/',
    '',
    '## Servicii',
    '',
    ...serviceLinks.map((s) => `- [${s.title}](${SITE}/servicii/${s.slug}/): ${s.short}`),
    '',
    '## Proiecte din portofoliu',
    '',
    ...projects.map((p) => {
      const d = p.data;
      const who = d.beneficiar
        ? d.beneficiarPrin
          ? `, beneficiar final ${d.beneficiar} (${d.beneficiarPrin})`
          : `, beneficiar ${d.beneficiar}`
        : '';
      return `- [${d.title}](${SITE}/portofoliu/${p.slug}/): ${d.location}, faza ${d.faza}, ${d.year}${who}`;
    }),
    '',
    '## Articole tehnice și ghiduri',
    '',
    ...posts.map((p) => `- [${p.data.title}](${SITE}/blog/${p.slug}/): ${p.data.description}`),
    '',
    '## Altele',
    '',
    `- [Despre noi](${SITE}/despre/)`,
    `- [Zone deservite](${SITE}/zone/)`,
    `- [Colaborări cu consultanți și constructori](${SITE}/colaborari/)`,
    '',
    '## English',
    '',
    `- [Home (English)](${SITE}/en/): infrastructure design in Romania for foreign contractors`,
    `- [Services](${SITE}/en/services/)`,
    `- [Portfolio](${SITE}/en/portfolio/): all projects, translated`,
    `- [About](${SITE}/en/about/)`,
    `- [Contact](${SITE}/en/contact/)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
