/**
 * Beneficiarii și partenerii din proiectele portofoliului, pentru bara de pe
 * „Despre noi”. Fiecare are un folder poze/logouri/<id>/. Logoul urcat de Mario
 * acolo are prioritate; altfel se folosește `_site-oficial.png` (descărcat de pe
 * site-ul oficial sau Wikimedia Commons); dacă folderul e gol, apare doar numele.
 */
export interface Client {
  id: string;
  /** Denumirea oficială completă */
  name: string;
}

export const clienti: Client[] = [
  { id: 'cnair', name: 'Compania Națională de Administrare a Infrastructurii Rutiere S.A.' },
  { id: 'cfr', name: 'Compania Națională de Căi Ferate „CFR” S.A.' },
  { id: 'hidroelectrica', name: 'S.P.E.E.H. Hidroelectrica S.A.' },
  { id: 'romcargo-maritim', name: 'Romcargo Maritim S.A.' },
  { id: 'apa-oradea', name: 'Compania de Apă Oradea S.A.' },
  { id: 'cj-prahova', name: 'Consiliul Județean Prahova' },
  { id: 'cj-maramures', name: 'Consiliul Județean Maramureș' },
  { id: 'craiova', name: 'Municipiul Craiova' },
  { id: 'lugoj', name: 'Municipiul Lugoj' },
  { id: 'sibiu', name: 'Municipiul Sibiu' },
  { id: 'alba-iulia', name: 'Municipiul Alba Iulia' },
  { id: 'onesti', name: 'Municipiul Onești' },
  { id: 'fetesti', name: 'Municipiul Fetești' },
  { id: 'aninoasa', name: 'Comuna Aninoasa, județul Dâmbovița' },
  { id: 'persinari', name: 'Comuna Perșinari, județul Dâmbovița' },
  { id: 'bughea-de-jos', name: 'Comuna Bughea de Jos, județul Argeș' },
  { id: 'cozieni', name: 'Comuna Cozieni, județul Buzău' },
  { id: 'scobinti', name: 'Comuna Scobinți, județul Iași' },
  { id: 'ms-interproiect', name: 'MS Interproiect Engineering S.R.L.' },
];
