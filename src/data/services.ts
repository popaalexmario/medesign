export interface ServiceLink {
  slug: string;
  title: string;
  short: string;
}

/** Toate serviciile, în ordinea în care apar în liste. */
export const serviceLinks: ServiceLink[] = [
  { slug: 'proiectare-drumuri', title: 'Proiectare drumuri și platforme', short: 'Drumuri comunale, județene și naționale' },
  { slug: 'proiectare-poduri-pasaje', title: 'Proiectare poduri, pasaje, pasarele', short: 'Structuri de traversare rutiere și pietonale' },
  { slug: 'lucrari-consolidare', title: 'Lucrări de sprijin și consolidări', short: 'Ziduri de sprijin, versanți, taluzuri' },
  { slug: 'poduri-cale-ferata', title: 'Poduri și pasaje de cale ferată', short: 'Structuri peste și sub calea ferată' },
  { slug: 'monumente-istorice', title: 'Intervenții la monumente istorice', short: 'Poduri și structuri clasate' },
  { slug: 'expertize-tehnice', title: 'Expertize tehnice', short: 'Evaluarea construcțiilor existente' },
  { slug: 'amenajari-hidrotehnice', title: 'Amenajări hidrotehnice', short: 'Casetări, maluri, platforme portuare' },
];

export interface ServicePage extends ServiceLink {
  h1: string;
  lead: string;
  description: string;
  keywords: string[];
  image?: string;
  imageAlt?: string;
  intro: string[];
  lucrariTitlu: string;
  lucrari: { title: string; desc: string }[];
  experienta?: { titlu: string; text: string; href: string; link: string }[];
  faq: { q: string; a: string }[];
}

/** Serviciile cu pagină generată dinamic. Primele trei au pagini proprii, scrise manual. */
export const servicePages: ServicePage[] = [
  {
    slug: 'poduri-cale-ferata',
    title: 'Poduri și pasaje de cale ferată',
    short: 'Structuri peste și sub calea ferată',
    h1: 'Poduri și pasaje<br />de cale ferată',
    lead: 'Structuri de traversare peste și pe sub calea ferată, proiectate pentru cerințele specifice ale infrastructurii feroviare.',
    description:
      'Proiectare poduri și pasaje de cale ferată: încărcări feroviare, gabarit de liberă trecere, linii electrificate și execuție fără oprirea circulației.',
    keywords: ['proiectare pod cale ferata', 'pasaj peste CF', 'gabarit liberă trecere', 'structuri metalice pod feroviar'],
    image: '/img/projects/Gurasada.png',
    imageAlt: 'Model 3D al structurii metalice pentru pasaj peste calea ferată',
    intro: [
      'Proiectarea unei structuri care traversează calea ferată nu este o variantă a proiectării rutiere. Încărcările au altă natură, gabaritul de liberă trecere este o condiție strictă, iar execuția se desfășoară, de regulă, fără întreruperea circulației feroviare.',
      'Elaborăm documentații pentru pasaje superioare și inferioare, poduri și structuri metalice uzinate, în toate fazele — de la soluție până la detaliile de uzinare pe baza cărora atelierul fabrică elementele.',
      'Lucrările de pe magistralele modernizate adaugă cerințele finanțatorului și standardele asumate prin contractul de finanțare, peste normativele naționale.',
    ],
    lucrariTitlu: 'Tipuri de structuri',
    lucrari: [
      { title: 'Pasaje superioare', desc: 'Structuri care supratraversează linia, cu gabaritul impus de electrificare și măsurile de protecție aferente.' },
      { title: 'Pasaje inferioare', desc: 'Subtraversări ale căii ferate, cu tehnologii care permit menținerea circulației pe durata execuției.' },
      { title: 'Structuri metalice uzinate', desc: 'Soluții realizate integral în atelier și montate într-o fereastră scurtă de închidere a liniei.' },
      { title: 'Detalii de uzinare', desc: 'Geometrie, toleranțe, detalii de îmbinare și succesiune de montaj, direct pentru atelierul executant.' },
      { title: 'Intervenții la structuri existente', desc: 'Evaluare și documentație de intervenție pentru poduri și pasaje feroviare aflate în exploatare.' },
      { title: 'Coordonare cu proiectul liniei', desc: 'Corelarea soluției cu documentația de modernizare a căii, elaborată de alte colective.' },
    ],
    experienta: [
      {
        titlu: 'Pasaj superior Gurasada–Simeria',
        text: 'Detalii de uzinare și execuție pentru pasajul de la km CF 506+217.83, parte din Tronsonul 3 al reabilitării liniei Frontieră–Curtici–Simeria, pe Coridorul IV Pan-European. Beneficiar final C.F.R. S.A.',
        href: '/portofoliu/pasaj-gurasada-hunedoara',
        link: 'Vezi proiectul',
      },
    ],
    faq: [
      {
        q: 'Ce diferă față de un pod rutier?',
        a: 'Încărcările feroviare sunt concentrate și repetitive, ceea ce face din oboseală un criteriu de dimensionare. La acestea se adaugă gabaritul de liberă trecere, cerințele de protecție la electrocutare pe linie electrificată și constrângerea execuției fără oprirea circulației.',
      },
      {
        q: 'De ce se folosesc frecvent structuri metalice?',
        a: 'Pentru că se realizează integral în atelier și se montează rapid, într-o fereastră scurtă de închidere a liniei. Pe magistralele cu trafic intens, închiderea prelungită este practic indisponibilă, iar soluția constructivă se alege în funcție de această constrângere.',
      },
      {
        q: 'Lucrați direct pentru CFR sau prin antreprenor?',
        a: 'Ambele variante sunt uzuale. Pe lucrările de modernizare a liniilor, documentația de detaliu se contractează frecvent de antreprenorul general sau de uzinatorul structurii metalice, beneficiarul final al lucrării rămânând administratorul infrastructurii feroviare.',
      },
    ],
  },
  {
    slug: 'monumente-istorice',
    title: 'Intervenții la monumente istorice',
    short: 'Poduri și structuri clasate',
    h1: 'Intervenții la<br />monumente istorice',
    lead: 'Expertiză, documentații și proiecte de execuție pentru poduri și structuri clasate, cu soluții compatibile cu valoarea de patrimoniu.',
    description:
      'Proiectare intervenții la poduri și structuri clasate ca monument istoric: expertiză, avize de patrimoniu, soluții compatibile și verificare atestată.',
    keywords: ['pod monument istoric', 'interventie constructie clasata', 'reabilitare pod vechi', 'avize patrimoniu constructii'],
    image: '/img/projects/POD%20LUGOJ.jpg',
    imageAlt: 'Pod de fier istoric reabilitat',
    intro: [
      'La o construcție clasată, soluțiile de intervenție nu se aleg exclusiv pe criterii tehnice. Elementele originale se conservă în măsura în care starea lor o permite, iar înlocuirile trebuie să fie compatibile cu alcătuirea istorică.',
      'Documentația parcurge un circuit suplimentar de avizare, iar potrivit CATUC verificarea tehnică a proiectelor de intervenție la construcții înscrise în Lista Monumentelor Istorice se face numai de verificatori atestați suplimentar în domeniul protejării monumentelor istorice.',
      'Am lucrat pe structuri metalice centenare și pe poduri urbane din zone protejate, unde organizarea execuției contează la fel de mult ca soluția în sine.',
    ],
    lucrariTitlu: 'Ce cuprinde intervenția',
    lucrari: [
      { title: 'Relevarea structurii', desc: 'Măsurarea efectivă a geometriei și identificarea alcătuirii reale, frecvent diferită de documentația arhivată.' },
      { title: 'Investigații asupra materialelor', desc: 'Determinarea caracteristicilor oțelului sau betonului vechi, care nu corespund standardelor actuale.' },
      { title: 'Evaluarea îmbinărilor', desc: 'Analiza comportării îmbinărilor nituite, diferită de cea a sudurilor sau șuruburilor de înaltă rezistență.' },
      { title: 'Verificarea la oboseală', desc: 'Evaluarea explicită a oboselii acumulate pe parcursul a zeci sau sute de ani de exploatare.' },
      { title: 'Soluții compatibile', desc: 'Intervenții care păstrează caracterul construcției și respectă cerințele de avizare specifice.' },
      { title: 'Etapizarea execuției', desc: 'Organizare de șantier și devieri de circulație gândite din faza de proiectare, nu lăsate pe seama execuției.' },
    ],
    experienta: [
      {
        titlu: 'Podul de Fier peste Râul Timiș, Lugoj',
        text: 'Grindă cu zăbrele parabolică de 64,00 m, construită în 1902. Documentație DALI, DTAC și proiect tehnic de execuție pentru reabilitare, pornind de la relevarea efectivă a structurii.',
        href: '/portofoliu/pod-fier-lugoj-timis',
        link: 'Vezi proiectul',
      },
      {
        titlu: 'Podul Maria Tereza, Sibiu',
        text: 'Reparație capitală la o structură din cartierul Terezian, cu soluții corelate cu valoarea de patrimoniu a zonei și cu accesul riveranilor pe durata lucrărilor.',
        href: '/portofoliu/pod-gladiolelor-sibiu',
        link: 'Vezi proiectul',
      },
    ],
    faq: [
      {
        q: 'Ce se poate și ce nu se poate modifica la o construcție clasată?',
        a: 'Regula generală este conservarea elementelor originale acolo unde starea lor o permite și compatibilitatea înlocuirilor cu alcătuirea istorică. Limitele concrete se stabilesc prin expertiză și prin avizele specifice de patrimoniu, de la caz la caz.',
      },
      {
        q: 'Cine poate verifica un astfel de proiect?',
        a: 'Potrivit CATUC, verificarea tehnică a proiectelor care vizează intervenții la construcții înscrise în Lista Monumentelor Istorice se face numai de verificatori de proiecte atestați suplimentar în domeniul protejării monumentelor istorice, atestare organizată de ministerul de resort din domeniul culturii.',
      },
      {
        q: 'Cât durează în plus față de un proiect obișnuit?',
        a: 'Diferența nu vine din proiectare, ci din circuitul de avizare specific patrimoniului, care se adaugă la avizele obișnuite. Acesta trebuie luat în calcul la planificarea calendarului, de la început.',
      },
    ],
  },
  {
    slug: 'expertize-tehnice',
    title: 'Expertize tehnice',
    short: 'Evaluarea construcțiilor existente',
    h1: 'Expertize tehnice<br />la construcții existente',
    lead: 'Evaluarea stării reale și a capacității portante, cu stabilirea soluțiilor de intervenție admisibile — punctul de pornire pentru orice lucrare la o construcție existentă.',
    description:
      'Expertiză tehnică la poduri, drumuri și lucrări de sprijin: stare reală, capacitate portantă, soluții admisibile și prelungirea duratei de existență.',
    keywords: ['expertiza tehnica pod', 'expertiza constructii existente', 'capacitate portanta', 'durata de existenta constructie'],
    image: '/img/projects/pod%20gogosu.jpg',
    imageAlt: 'Pod suspendat evaluat prin expertiză tehnică',
    intro: [
      'Intervențiile asupra construcțiilor existente se fac pe baza unei expertize tehnice întocmite de experți atestați. Logica este directă: nu poți proiecta o intervenție fără să cunoști starea reală a structurii asupra căreia intervii.',
      'Expertiza stabilește alcătuirea efectivă, starea materialelor, capacitatea portantă actuală și soluțiile de intervenție admisibile — iar atunci când situația o impune, măsurile imediate de restricționare a exploatării.',
      'Potrivit CATUC, rezultatul unei expertize poate fi și prelungirea duratei de existență proiectate a construcției, cu stabilirea unui program de urmărire în timp și a termenului până la o nouă evaluare.',
    ],
    lucrariTitlu: 'Ce cuprinde o expertiză',
    lucrari: [
      { title: 'Documentare preliminară', desc: 'Identificarea proiectului inițial, a istoricului intervențiilor și a condițiilor de exploatare.' },
      { title: 'Relevarea structurii', desc: 'Măsurarea geometriei și identificarea alcătuirii reale, acolo unde documentația lipsește sau nu corespunde.' },
      { title: 'Inventarierea degradărilor', desc: 'Cartarea fisurilor, a zonelor cu armătură expusă, a afuierilor și a degradărilor la aparate de reazem și rosturi.' },
      { title: 'Investigații și încercări', desc: 'Determinări asupra materialelor, identificarea armăturii, prelevare de probe și măsurători ale deformațiilor.' },
      { title: 'Verificare prin calcul', desc: 'Evaluarea capacității portante în starea actuală, raportată la încărcările normate aplicabile.' },
      { title: 'Concluzii și soluții', desc: 'Starea tehnică, variantele de intervenție și, după caz, măsurile imediate de restricționare.' },
    ],
    experienta: [
      {
        titlu: 'Pod suspendat peste brațul Gogoșu',
        text: 'Expertiză tehnică și documentație de avizare a lucrărilor de intervenție pentru un obiectiv al Hidroelectrica S.A. — Sucursala Hidrocentrale Porțile de Fier. La o structură suspendată, cablurile și ancorajele sunt elementele critice.',
        href: '/portofoliu/pod-gogosu-ostrovul-mare',
        link: 'Vezi proiectul',
      },
    ],
    faq: [
      {
        q: 'Când este obligatorie expertiza tehnică?',
        a: 'La orice intervenție asupra unei construcții existente — reparații capitale, consolidări, modificarea clasei de încărcare, lărgiri — precum și după evenimente excepționale, cum sunt viiturile, impacturile sau alunecările de teren în zona fundațiilor.',
      },
      {
        q: 'Expertiza înlocuiește proiectul?',
        a: 'Nu. Expertiza spune ce trebuie făcut și de ce; proiectul tehnic spune cum se execută, cu ce materiale, în ce ordine și în ce cantități. Ambele sunt necesare, iar una nu o substituie pe cealaltă.',
      },
      {
        q: 'Ce se întâmplă dacă nu există documentația inițială?',
        a: 'Nu este un impediment. Expertiza se bazează pe relevarea efectivă a structurii și pe investigații în teren. Volumul de investigații crește, deci și costul și durata, dar evaluarea rămâne posibilă.',
      },
    ],
  },
  {
    slug: 'amenajari-hidrotehnice',
    title: 'Amenajări hidrotehnice',
    short: 'Casetări, maluri, platforme portuare',
    h1: 'Amenajări<br />hidrotehnice',
    lead: 'Casetări de canale, amenajarea și protecția malurilor, platforme portuare — lucrări în care regimul apelor determină întreaga soluție.',
    description:
      'Proiectare amenajări hidrotehnice: casetare canale, protecția și amenajarea malurilor, platforme portuare și lucrări integrate cu infrastructura rutieră.',
    keywords: ['casetare canal', 'amenajare maluri', 'protectie mal eroziune', 'platforma portuara', 'amenajari hidrotehnice'],
    image: '/img/projects/PORT.png',
    imageAlt: 'Amenajare portuară la Dunăre',
    intro: [
      'În lucrările care implică apa, componenta hidrotehnică nu este o anexă a proiectului rutier — ea determină cotele, dimensionarea structurilor și modul în care amenajarea rămâne funcțională.',
      'Proiectăm casetări de canale sub artere de circulație, amenajări și protecții de maluri, platforme portuare și lucrări de colectare și evacuare a apelor, frecvent integrate cu componenta rutieră a aceluiași obiectiv.',
      'O soluție care tratează separat amenajarea de regimul apelor se dovedește, de regulă, nefuncțională la prima viitură.',
    ],
    lucrariTitlu: 'Tipuri de lucrări',
    lucrari: [
      { title: 'Casetarea canalelor', desc: 'Acoperirea canalelor deschise din zone urbane, dimensionată simultan la debitele de calcul și la încărcările din trafic.' },
      { title: 'Amenajarea malurilor', desc: 'Ziduri de sprijin și structuri de amenajare pentru maluri afectate de eroziune sau de viituri.' },
      { title: 'Protecții de maluri', desc: 'Lucrări împotriva eroziunii hidraulice, inclusiv gabioane și soluții flexibile adaptate regimului cursului de apă.' },
      { title: 'Platforme portuare', desc: 'Amenajări la malul cursurilor navigabile, cu cote stabilite în raport cu variația nivelurilor.' },
      { title: 'Colectarea apelor pluviale', desc: 'Șanțuri, rigole, podețe și racorduri la emisar, dimensionate pe baza studiului hidrologic.' },
      { title: 'Traversări de cursuri de apă', desc: 'Corelarea lucrărilor de artă cu regimul hidrologic și cu cerințele de avizare specifice.' },
    ],
    experienta: [
      {
        titlu: 'Casetarea canalului Craiovița',
        text: 'Casetarea canalului deschis pe 1.800 ml, sub o arteră nouă cu patru benzi, în cadrul închiderii inelului de trafic din zona de sud a Craiovei. Structura hidrotehnică devine parte din fundația drumului.',
        href: '/portofoliu/craiova-dolj',
        link: 'Vezi proiectul',
      },
      {
        titlu: 'Infrastructură verde-albastră, Bughea de Jos',
        text: 'Amenajarea malurilor cu ziduri de sprijin, trotuare și pasarele pentru continuitatea circulației, tratate integrat cu spațiul public adiacent.',
        href: '/portofoliu/bughea-de-jos-arges',
        link: 'Vezi proiectul',
      },
    ],
    faq: [
      {
        q: 'Ce avize sunt necesare pentru lucrări în zona unui curs de apă?',
        a: 'De regulă avizul administrației bazinale de apă și avizul de gospodărire a apelor, la care se adaugă, după caz, acordul de mediu. Lista exactă rezultă din certificatul de urbanism, iar aceste avize sunt frecvent cele care determină calendarul proiectului.',
      },
      {
        q: 'De ce contează variația nivelurilor la o platformă portuară?',
        a: 'Pentru că ea determină cotele de amenajare și soluția de protecție a malului. O platformă amenajată fără a ține cont de diferența dintre ape mari și ape mici devine inutilizabilă pe o parte din sezon.',
      },
      {
        q: 'Casetarea unui canal este lucrare hidrotehnică sau rutieră?',
        a: 'Ambele, iar asta este dificultatea. Caseta trebuie dimensionată simultan pentru debitele de calcul și pentru încărcările din traficul care circulă deasupra. O eroare într-una dintre cele două ipoteze compromite ambele funcțiuni.',
      },
    ],
  },
];
