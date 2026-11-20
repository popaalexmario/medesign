import { getCollection } from 'astro:content';
import { servicePages } from './services';

// Întrebări frecvente folosite pe prima pagină și pe pagina de contact.
// Cifrele se calculează din portofoliu; celelalte răspunsuri sunt cele verificate
// de pe paginile de servicii sau afirmații deja făcute pe site.
export interface Faq { q: string; a: string; href?: string }

const pick = (slug: string, q: string): Faq => {
  const f = servicePages.find((s) => s.slug === slug)?.faq.find((x) => x.q === q);
  if (!f) throw new Error(`FAQ lipsă: ${slug} / ${q}`);
  return { ...f, href: `/servicii/${slug}/` };
};

export async function faqItems() {
  const portfolio = await getCollection('projects', ({ data }) => !data.draft);
  const judete = [...new Set(portfolio.map((p) => p.data.judet).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ro'));
  return {
    despre: {
      q: 'Ce face ME Design?',
      a: `Mario Engineering Design SRL este o firmă de proiectare infrastructură din București, înființată în decembrie 2018. Proiectăm drumuri, platforme și parcări, poduri, pasaje și pasarele, poduri de cale ferată, lucrări de sprijin și consolidări, intervenții la monumente istorice, expertize tehnice și amenajări hidrotehnice. Avem peste 200 de proiecte finalizate, iar ${portfolio.length} dintre ele sunt prezentate în portofoliu, cu faza de proiectare, beneficiarul și anul. Firma este certificată ISO 9001, ISO 14001 și ISO 45001.`,
      href: '/despre/',
    },
    zone: {
      q: 'În ce zone lucrați?',
      a: `În toată România. Proiectele din portofoliu sunt din ${judete.length} județe: ${judete.join(', ')}. Sediul este în București, iar pentru fazele determinante și asistența tehnică venim pe șantier.`,
      href: '/portofoliu/',
    },
    faze: {
      q: 'Ce faze de proiectare acoperiți?',
      a: 'Toate fazele: studiu de fezabilitate (SF), documentație de avizare a lucrărilor de intervenții (DALI), documentația pentru autorizarea construirii (PAC, fostul DTAC) și proiect tehnic de execuție (PTE). Facem și expertize tehnice la construcții existente și asigurăm asistența tehnică pe durata execuției, până la recepție.',
      href: '/servicii/',
    },
    ceTrimit: {
      q: 'Ce informații să trimit în prima solicitare?',
      a: 'Tipul lucrării (de exemplu acces și platformă pentru o hală, parcare, modernizare de drum, reparație de pod), localizarea (județ, localitate, numărul cadastral dacă îl ai), dacă e construcție nouă sau intervenție pe ceva existent, faza de proiectare de care ai nevoie, dacă o știi, și termenul dorit. Ajută mult și ce documente ai deja: extras de carte funciară, certificat de urbanism, ridicare topografică, studiu geotehnic, plan de situație.',
    },
    raspuns: {
      q: 'În cât timp primesc un răspuns?',
      a: 'Răspundem în cel mult o zi lucrătoare, prin formular, pe email la office@me-design.ro sau la telefon, la +40 746 784 156. Dacă trimiți și documentele pe care le ai, primul răspuns poate include deja ce mai lipsește și pașii următori.',
    },
    consultanta: {
      q: 'Prima discuție costă ceva?',
      a: 'Nu. Prima discuție și analiza cerințelor sunt gratuite. Oferta de preț o facem după ce vedem tema: faza de proiectare, studiile necesare și ce documente există deja. Nu dăm prețuri pe metru sau pe kilometru fără să știm despre ce lucrare e vorba.',
      href: '/blog/cat-costa-proiectarea-pod-drum/',
    },
    sistematizare: pick('proiectare-drumuri', 'Ce este sistematizarea verticală și când am nevoie de ea?'),
    acces: pick('proiectare-drumuri', 'Am nevoie de acordul administratorului drumului pentru un acces nou la proprietate?'),
    doarDrumuri: pick('proiectare-drumuri', 'Puteți face doar partea de drumuri dintr-un proiect de arhitectură?'),
    expertiza: pick('expertize-tehnice', 'Expertiza înlocuiește proiectul?'),
  } satisfies Record<string, Faq>;
}

export const faqLd = (id: string, items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': id,
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
