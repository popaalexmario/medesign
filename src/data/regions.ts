export type RegionId = 'muntenia' | 'oltenia' | 'dobrogea' | 'transilvania' | 'moldova';

export interface Region {
  id: RegionId;
  name: string;
  shortName: string;
  judete: string[];
  acces: string;
  intro: string;
}

export const regions: Region[] = [
  {
    id: 'muntenia',
    name: 'Muntenia și București',
    shortName: 'Muntenia',
    judete: ['Argeș', 'Brăila', 'Buzău', 'Călărași', 'Dâmbovița', 'Giurgiu', 'Ialomița', 'Ilfov', 'Prahova', 'Teleorman', 'București'],
    acces: 'A1, A2, A3 și centura București (A0)',
    intro:
      'Regiunea în care avem cele mai multe proiecte și cea mai rapidă capacitate de intervenție. Sediul nostru este în București, iar deplasările pentru ridicări în teren, verificări și asistență tehnică se fac în aceeași zi.',
  },
  {
    id: 'oltenia',
    name: 'Oltenia',
    shortName: 'Oltenia',
    judete: ['Dolj', 'Gorj', 'Mehedinți', 'Olt', 'Vâlcea'],
    acces: 'A1 până la Pitești, apoi DN6 și DN7',
    intro:
      'Zonă în care am lucrat atât pe infrastructură urbană de anvergură, cât și pe lucrări de protecție a versanților pe drum național, în condiții de relief dificil.',
  },
  {
    id: 'dobrogea',
    name: 'Dobrogea',
    shortName: 'Dobrogea',
    judete: ['Constanța', 'Tulcea'],
    acces: 'A2 București – Constanța',
    intro:
      'Acces direct pe autostrada A2. Experiență pe infrastructură portuară și platforme, într-un context cu cerințe specifice de trafic greu și mediu agresiv.',
  },
  {
    id: 'transilvania',
    name: 'Transilvania și Banat',
    shortName: 'Transilvania',
    judete: ['Alba', 'Arad', 'Bistrița-Năsăud', 'Brașov', 'Caraș-Severin', 'Cluj', 'Covasna', 'Harghita', 'Hunedoara', 'Maramureș', 'Mureș', 'Sălaj', 'Sibiu', 'Timiș'],
    acces: 'A1 prin Valea Oltului și A3',
    intro:
      'Regiune în care am elaborat documentații pentru structuri complexe, inclusiv poduri clasate ca monumente istorice și pasaje pe infrastructura feroviară majoră.',
  },
  {
    id: 'moldova',
    name: 'Moldova',
    shortName: 'Moldova',
    judete: ['Bacău', 'Botoșani', 'Galați', 'Iași', 'Neamț', 'Suceava', 'Vaslui', 'Vrancea'],
    acces: 'A7 și DN2',
    intro:
      'Zonă în care ne extindem activitatea, cu proiecte de modernizare a infrastructurii urbane. Odată cu deschiderea A7, deplasările devin considerabil mai rapide.',
  },
];

export const regionById = (id: string): Region | undefined => regions.find((r) => r.id === id);
