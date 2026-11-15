/**
 * Beneficiarii și partenerii din proiectele portofoliului, pentru bara de pe
 * „Despre noi”. Logoul se ia din poze/logouri/<id>.(png|jpg|webp|svg); până
 * apare un fișier, se afișează numele, stilizat.
 */
export interface Client {
  id: string;
  /** Rândul mare */
  name: string;
  /** Rândul mic, opțional */
  sub?: string;
}

export const clienti: Client[] = [
  { id: 'cnair', name: 'CNAIR', sub: 'Infrastructură rutieră' },
  { id: 'cfr', name: 'CFR SA', sub: 'Infrastructură feroviară' },
  { id: 'hidroelectrica', name: 'Hidroelectrica', sub: 'Porțile de Fier' },
  { id: 'apm-constanta', name: 'Portul Constanța', sub: 'Administrația Porturilor Maritime' },
  { id: 'cj-prahova', name: 'Consiliul Județean', sub: 'Prahova' },
  { id: 'cj-maramures', name: 'Consiliul Județean', sub: 'Maramureș' },
  { id: 'craiova', name: 'Municipiul Craiova' },
  { id: 'lugoj', name: 'Municipiul Lugoj' },
  { id: 'sibiu', name: 'Municipiul Sibiu' },
  { id: 'alba-iulia', name: 'Municipiul Alba Iulia' },
  { id: 'onesti', name: 'Municipiul Onești' },
  { id: 'fetesti', name: 'Municipiul Fetești' },
  { id: 'aninoasa', name: 'Comuna Aninoasa', sub: 'Dâmbovița' },
  { id: 'persinari', name: 'Comuna Perșinari', sub: 'Dâmbovița' },
  { id: 'bughea-de-jos', name: 'Comuna Bughea de Jos', sub: 'Argeș' },
  { id: 'cozieni', name: 'Comuna Cozieni', sub: 'Buzău' },
  { id: 'ms-interproiect', name: 'MS Interproiect', sub: 'Engineering' },
];
