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

/** Toate paginile de serviciu, generate din aceeași structură. */
export const servicePages: ServicePage[] = [
  {
    slug: "proiectare-drumuri",
    title: "Proiectare drumuri și platforme",
    short: "Drumuri comunale, județene și naționale",
    h1: "Proiectare Drumuri<br />și Platforme",
    lead: "Proiecte tehnice complete pentru drumuri comunale, județene și naționale — de la studii de fezabilitate la detalii de execuție.",
    description: "Proiectare drumuri comunale, județene și naționale: structuri rutiere, intersecții, sensuri giratorii, parcări și piste de biciclete.",
    keywords: ["proiectare drumuri", "modernizare drum comunal", "proiectare drum judetean", "sens giratoriu proiectare"],
    image: "/img/projects/proiectare-drumuri.png",
    imageAlt: "Proiectare drumuri și platforme",
    intro: [
      "ME Design oferă servicii integrate de proiectare pentru toate categoriile de drumuri publice din România, conform normativelor tehnice în vigoare (AND, SR, STAS). Echipa noastră acoperă întreg procesul de proiectare — de la studii preliminare și investigații de teren până la documentațiile necesare pentru autorizația de construire și proiectul de execuție.",
      "Fiecare proiect de drum este tratat individual, ținând cont de condițiile specifice ale terenului, volumul de trafic estimat, cerințele beneficiarului și reglementările locale și naționale. Colaborăm cu primării, consilii județene, beneficiari privați și constructori din toată țara.",
      "Asigurăm documentații complete în toate fazele: Studiu de Fezabilitate (SF), Documentație de Avizare a Lucrărilor de Intervenții (DALI), Proiect Tehnic (PT) și Detalii de Execuție (DDE), inclusiv asistență tehnică pe parcursul execuției.",
    ],
    lucrariTitlu: "Tipuri de lucrări",
    lucrari: [
      { title: "Drumuri comunale și județene", desc: "Modernizare, reabilitare și extindere drumuri locale cu finanțare din fonduri europene sau buget local." },
      { title: "Drumuri naționale", desc: "Proiectare și reabilitare drumuri naționale în conformitate cu normativele DRDP și CNAIR." },
      { title: "Intersecții și sensuri giratorii", desc: "Amenajare intersecții la nivel, sensuri giratorii, pasaje denivelate pentru fluența traficului." },
      { title: "Parcări și platforme", desc: "Proiectare parcări publice și private, platforme industriale, drumuri de acces." },
      { title: "Piste de biciclete", desc: "Amenajare piste ciclabile urbane și interurbane, cu sisteme de semnalizare specifice." },
      { title: "Lucrări de artă", desc: "Podețe, rigole, canalizare pluvială, semaforizare — integrate în proiectul de drum." },
    ],
    experienta: [
      {
        titlu: "Închidere inel de trafic, Municipiul Craiova",
        text: "Stradă nouă de 2,18 km cu patru benzi, trei sensuri giratorii, piste de biciclete și spații pietonale, împreună cu casetarea canalului Craiovița pe 1.800 ml.",
        href: "/portofoliu/craiova-dolj",
        link: "Vezi proiectul",
      },
      {
        titlu: "Drumuri locale în Comuna Cozieni, Buzău",
        text: "Treisprezece drumuri locale și comunale, însumând 10,35 km, tratate ca rețea într-o zonă de deal unde evacuarea apelor decide durata de viață a investiției.",
        href: "/portofoliu/cozieni-buzau",
        link: "Vezi proiectul",
      },
    ],
    faq: [
      {
        q: "Ce documente sunt necesare pentru un proiect de drum?",
        a: "Sunt necesare: extrasul de carte funciară, planul topografic actualizat, studiul geotehnic și, după caz, studiul de trafic. ME Design poate coordona obținerea acestora prin colaboratori autorizați.",
      },
      {
        q: "Cât durează elaborarea unui proiect tehnic de drum?",
        a: "În funcție de complexitate, un Proiect Tehnic complet pentru un drum județean de 5-10 km durează între 3 și 6 luni. Studiul de Fezabilitate poate fi finalizat în 4-8 săptămâni.",
      },
      {
        q: "Proiectați și drumuri cu finanțare europeană?",
        a: "Da, avem experiență cu documentații pentru proiecte finanțate din PNRR, POR, POIM și alte programe europene, inclusiv documentațiile specifice cerute de finanțatori.",
      },
    ],
  },
  {
    slug: "proiectare-poduri-pasaje",
    title: "Proiectare poduri, pasaje, pasarele",
    short: "Structuri de traversare rutiere și pietonale",
    h1: "Proiectare Poduri,<br />Pasaje și Pasarele",
    lead: "Structuri de traversare proiectate pentru orice tip de obstacol — de la cursuri de apă la căi ferate și artere rutiere.",
    description: "Proiectare poduri rutiere și pietonale, pasaje denivelate, pasarele și podețe. Soluții pentru traversări peste cursuri de apă, căi ferate și artere rutiere.",
    keywords: ["proiectare poduri", "pasaj denivelat", "pasarela pietonala", "proiectare pod rutier"],
    image: "/img/projects/pod.jpg",
    imageAlt: "Proiectare poduri și pasaje",
    intro: [
      "ME Design proiectează structuri de traversare pentru orice tip de obstacol — cursuri de apă, căi ferate, artere rutiere sau diferențe de nivel. Fiecare soluție tehnică este adaptată condițiilor specifice de amplasament, volumului de trafic, gabaritelor și condițiilor hidrologice sau geotehnice locale.",
      "Lucrăm cu autorități locale, consilii județene, beneficiari privați și antreprenori de construcții. Documentațiile pe care le elaborăm respectă normativele tehnice românești (NP, SR, AND) și standardele europene EN aplicabile structurilor de poduri.",
      "Serviciile noastre acoperă toate fazele de proiectare: Studiu de Fezabilitate (SF), Proiect Tehnic (PT) cu memorii tehnice, planuri și calcule de rezistență, Detalii de Execuție (DDE) și asistență tehnică pe șantier.",
    ],
    lucrariTitlu: "Tipuri de structuri proiectate",
    lucrari: [
      { title: "Poduri rutiere", desc: "Poduri din beton armat sau precomprimat pentru drumuri comunale, județene și naționale." },
      { title: "Poduri pietonale", desc: "Traversări pietonale în zone urbane și periurbane, cu design adaptat contextului arhitectural." },
      { title: "Pasaje denivelate", desc: "Structuri de supratraversare sau subtraversare a căilor ferate și arterelor rutiere principale." },
      { title: "Pasarele pietonale și cicliste", desc: "Pasarele ușoare din metal sau beton pentru traversarea cursurilor de apă și infrastructurii existente." },
      { title: "Podețe și podeturi", desc: "Lucrări de artă mici pentru scurgerea apelor de suprafață sub rambleele drumurilor." },
      { title: "Consolidări structuri existente", desc: "Evaluare structurală și proiectare lucrări de consolidare pentru poduri și pasaje existente." },
    ],
    experienta: [
      {
        titlu: "Pasaj pe A0 peste A2, km 53+069",
        text: "Detalii de uzinare și execuție pentru structura metalică a pasajului de pe centura de autostradă a Bucureștiului, executat fără întreruperea circulației pe autostrada traversată.",
        href: "/portofoliu/pasaj-a0-a2-bucuresti",
        link: "Vezi proiectul",
      },
      {
        titlu: "Pasaj „Clubul Văcarilor\", Baia Mare – Recea",
        text: "Studiu de fezabilitate pentru denivelarea intersecției DN1C cu varianta ocolitoare. Obiectivul a fost realizat prin PNRR și dat în circulație în iulie 2026.",
        href: "/portofoliu/pasaj-vacari-maramures",
        link: "Vezi proiectul",
      },
    ],
    faq: [
      {
        q: "Ce studii preliminare sunt necesare pentru proiectarea unui pod?",
        a: "Sunt necesare: studiu topografic, studiu geotehnic, studiu hidrologic/hidraulic (pentru traversări de cursuri de apă), avize de la administrația bazinală și, după caz, studiu de impact asupra mediului.",
      },
      {
        q: "Proiectați și poduri pe drumuri cu finanțare PNRR sau fonduri europene?",
        a: "Da, avem experiență cu documentații pentru proiecte co-finanțate din fonduri europene. Asigurăm întreaga documentație tehnică și economică necesară depunerii și implementării proiectelor.",
      },
      {
        q: "Care este diferența dintre un pasaj și o pasarelă?",
        a: "Un pasaj este o structură care permite traversarea pentru vehicule sau pietoni peste/pe sub o altă cale de comunicație (drum sau cale ferată). O pasarelă este destinată exclusiv traficului pietonal sau ciclistic.",
      },
    ],
  },
  {
    slug: "lucrari-consolidare",
    title: "Lucrări de sprijin și consolidări",
    short: "Ziduri de sprijin, versanți, taluzuri",
    h1: "Lucrări de Sprijin<br />și Consolidări",
    lead: "Soluții tehnice pentru stabilizarea terenurilor instabile și protejarea infrastructurii împotriva alunecărilor și eroziunii.",
    description: "Proiectare ziduri de sprijin, consolidări de versanți și taluzuri, gabioane, ancoraje și protecții de maluri pentru infrastructura rutieră.",
    keywords: ["ziduri de sprijin", "consolidare versanti", "consolidare taluz", "gabioane", "stabilizare teren"],
    image: "/img/projects/consolidare%20autostrada.jpg",
    imageAlt: "Lucrări de sprijin și consolidări",
    intro: [
      "ME Design proiectează lucrări de sprijin și consolidare pentru terenuri instabile, taluzuri și versanți afectați de alunecări, eroziune sau suprasarcini. Oferim soluții tehnice complete, de la investigarea cauzelor instabilității până la proiectarea și supravegherea execuției lucrărilor.",
      "Specializarea noastră acoperă atât lucrările de sprijin pentru infrastructura rutieră existentă sau nouă, cât și consolidarea terenurilor în zonele cu risc geotehnic ridicat. Colaborăm cu geotehnicieni autorizați pentru investigații de teren și elaborăm soluțiile optime tehnic și economic.",
      "Documentațiile noastre sunt elaborate conform normativelor NP 124, P 70, NP 112 și a ghidurilor tehnice aplicabile, asigurând conformitatea cu cerințele de autorizare și execuție.",
    ],
    lucrariTitlu: "Tipuri de lucrări de consolidare",
    lucrari: [
      { title: "Ziduri de sprijin", desc: "Ziduri din beton armat, beton ciclopian sau zidărie de piatră pentru susținerea taluzurilor și a terenurilor adiacente drumurilor." },
      { title: "Consolidări de versanți", desc: "Soluții complexe pentru stabilizarea versanților afectați de alunecări de teren, cu ancoraje și rețele de protecție." },
      { title: "Consolidări de taluzuri", desc: "Proiectare lucrări de consolidare a taluzurilor de debleu și rambleu pentru drumuri și căi ferate." },
      { title: "Gabioane", desc: "Structuri flexibile din coșuri metalice umplute cu piatră — soluție economică și ecologică pentru sprijiniri și protecții de maluri." },
      { title: "Ancore și micropiloti", desc: "Sisteme de ancorare profundă a terenului pentru stabilizarea structurilor și masivelor de pământ." },
      { title: "Protecții de maluri", desc: "Lucrări de protecție a malurilor cursurilor de apă împotriva eroziunii hidraulice, inclusiv gabioane și beton proiectat." },
    ],
    experienta: [
      {
        titlu: "Protecție versanți pe DN 7, Județul Vâlcea",
        text: "Proiect tehnic de execuție și asistență tehnică pe patru sectoare însumând peste 20 km, în defileul Oltului, cu soluții diferențiate pe fiecare versant.",
        href: "/portofoliu/dn7-versanti-valcea",
        link: "Vezi proiectul",
      },
      {
        titlu: "Amenajare maluri, Comuna Bughea de Jos",
        text: "Ziduri de sprijin pentru amenajarea și stabilizarea malurilor, tratate integrat cu trotuarele, pasarelele și spațiul public adiacent.",
        href: "/portofoliu/bughea-de-jos-arges",
        link: "Vezi proiectul",
      },
    ],
    faq: [
      {
        q: "Când este necesară o lucrare de consolidare a unui versant?",
        a: "O lucrare de consolidare este necesară când se constată semne de instabilitate a terenului: fisuri în teren sau construcții, tasări, deplasări vizibile ale masivului de pământ sau când urmează să se construiască infrastructură în zone cu risc geotehnic.",
      },
      {
        q: "Ce investigații sunt necesare înainte de proiectarea consolidărilor?",
        a: "Sunt necesare: studiu geotehnic detaliat (foraje, sondaje), studiu topografic, monitorizare deplasări (dacă există) și, în unele cazuri, studiu hidrologic. ME Design coordonează aceste investigații prin colaboratori specializați.",
      },
      {
        q: "Ce este mai avantajos: zid de sprijin din beton sau gabioane?",
        a: "Depinde de condițiile specifice ale amplasamentului. Gabioanele sunt mai economice, flexibile și ecologice, dar zidurile din beton armat sunt mai rezistente și necesită mai puțin spațiu. Vom recomanda soluția optimă după analiza condițiilor de teren.",
      },
    ],
  },
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
