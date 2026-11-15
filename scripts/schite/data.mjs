// Conținutul schemelor. Fiecare text vine din articolul în care apare schema;
// nu adăuga aici afirmații care nu sunt susținute în articol.
export const DIAGRAMS = [
  {
    file: 'sf-dali-alegere', kind: 'steps', cols: 1,
    title: 'SF sau DALI: drumul unei documentații',
    subtitle: 'Pentru proiectele rămase sub HG nr. 907/2016',
    steps: [
      { t: 'Nota conceptuală și tema de proiectare', s: 'beneficiarul spune ce vrea să obțină' },
      { t: 'Obiectiv nou → studiu de fezabilitate (SF)', s: 'pentru ce nu există încă: drum nou, pod nou' },
      { t: 'Construcție existentă → expertiză tehnică, apoi DALI', s: 'expertiza stabilește starea și soluțiile admisibile', hi: true },
      { t: 'Aprobarea indicatorilor tehnico-economici', s: 'prin hotărâre a autorității deliberative' },
      { t: 'Proiectul tehnic de execuție și documentația pentru autorizare', s: 'sub CATUC, DTAC a devenit PAC' },
      { t: 'Verificarea de proiect, apoi autorizația de construire' },
    ],
  },
  {
    file: 'drum-comunal-ordinea-documentelor', kind: 'steps', cols: 2,
    title: 'Modernizarea unui drum comunal, în ordine',
    subtitle: 'Pașii din articol, de la teren la autorizație',
    steps: [
      { t: 'Clarifici situația juridică a terenului', hi: true },
      { t: 'Soliciți certificatul de urbanism' },
      { t: 'Comanzi studiile de teren' },
      { t: 'Comanzi expertiza tehnică, dacă drumul există' },
      { t: 'Soliciți avizele din lista CU' },
      { t: 'Comanzi DALI sau SF' },
      { t: 'Aprobi indicatorii tehnico-economici' },
      { t: 'Comanzi proiectul tehnic și documentația pentru autorizare' },
      { t: 'Asiguri verificarea de proiect' },
      { t: 'Depui pentru autorizație' },
    ],
  },
  {
    file: 'expertiza-pod-cand-si-ordinea', kind: 'columns',
    title: 'Expertiza la un pod: când și în ce ordine',
    subtitle: 'Situațiile din articol și ordinea corectă a documentațiilor',
    cols: [
      { head: 'Când e obligatorie', rows: [
        'Reparație capitală', 'Consolidare', 'Schimbarea clasei de încărcare', 'Lărgire: benzi, trotuare, piste',
        'După viituri, impacturi, alunecări, seisme', 'Schimbarea regimului de exploatare',
      ] },
      { head: 'Ordinea corectă', color: '#d97706', rows: [
        { k: '1', v: 'Expertiza tehnică: starea reală și soluțiile posibile' },
        { k: '2', v: 'DALI: dezvoltă soluția recomandată, scoate indicatorii' },
        { k: '3', v: 'Proiectul tehnic: detaliază soluția aprobată' },
        { k: 'Greșeala frecventă', v: 'DALI contractat înaintea expertizei: proiectul stă luni de zile' },
      ] },
    ],
  },
  {
    file: 'catuc-stadii-0-6', kind: 'timeline',
    title: 'Cele șapte stadii ale unei investiții după CATUC',
    subtitle: 'Stadiile înlocuiesc vechile faze de proiectare',
    span: { from: 1, to: 4, label: 'Proiectantul răspunde de stadiile 1–4 (art. 424)' },
    items: [
      { n: 0, t: 'Definirea strategică', s: 'stadiul beneficiarului' },
      { n: 1, t: 'Tema și fezabilitatea', s: 'CU, studii de amplasament' },
      { n: 2, t: 'Conceptul' },
      { n: 3, t: 'Soluțiile de bază și autorizarea', s: 'PAC, autorizație' },
      { n: 4, t: 'Dezvoltarea tehnică', s: 'proiectul tehnic' },
      { n: 5, t: 'Execuția', s: 'asistență tehnică', hi: true },
      { n: 6, t: 'Predarea' },
    ],
  },
  {
    file: 'fara-autorizatie-trei-intrebari', kind: 'steps', cols: 1,
    title: 'Ai nevoie de autorizație? Trei întrebări',
    subtitle: 'Pentru lucrări la infrastructura de transport, după CATUC',
    steps: [
      { t: 'Ce natură are lucrarea, potrivit reglementărilor tehnice?', s: 'întreținere periodică și reparații curente, în ciclul normal de exploatare, pot intra în regimul fără formalități' },
      { t: 'Atinge structura de rezistență, geometria sau capacitatea portantă?', s: 'dacă da, e intervenție și cere autorizație: structura rutieră refăcută, profil modificat, structura unui pod', hi: true },
      { t: 'Unde e amplasată?', s: 'zone protejate și imobile clasate au regim propriu, mai restrictiv, nu mai permisiv' },
    ],
    footer: 'Exemple care intră de regulă la întreținere: plombări, marcaje, curățarea șanțurilor, semnalizare, întreținerea curentă a podețelor. La cazurile de graniță, întreabă din timp autoritatea emitentă.',
  },
  {
    file: 'cost-proiectare-factori', kind: 'steps', cols: 1,
    title: 'Ce decide prețul unei proiectări',
    subtitle: 'Cei cinci factori din articol, în ordinea importanței',
    steps: [
      { t: 'Faza', s: 'expertiză, SF și proiect tehnic sunt livrabile de volum complet diferit', hi: true },
      { t: 'Ce proiectezi', s: 'lucrările de artă, intersecțiile și zonele instabile cântăresc mai mult decât kilometrii' },
      { t: 'Construcție nouă sau intervenție', s: 'intervenția cere expertiză, relevare, investigații asupra materialelor' },
      { t: 'Studiile incluse sau nu', s: 'topo, geo, hidro, trafic: verifică dacă ofertele le cuprind pe toate' },
      { t: 'Regimul amplasamentului', s: 'zonă protejată, monument, cale ferată, curs de apă: avize în plus' },
    ],
  },
  {
    file: 'finantare-depunere-vs-contract', kind: 'columns',
    title: 'Ce trebuie la depunere, ce poate aștepta',
    subtitle: 'Documentația tehnică într-un dosar de finanțare pentru infrastructură',
    cols: [
      { head: 'La depunere', rows: [
        'Documentația tehnico-economică aprobată prin hotărâre, nu doar recepționată',
        'Indicatorii tehnico-economici, corelați cu bugetul cererii',
        'Situația juridică a terenului clarificată',
        'Studiile de fundamentare: topografic, geotehnic, după caz hidrologic și de trafic',
        'Expertiza tehnică, pentru intervențiile pe construcții existente',
      ] },
      { head: 'După contractare', color: '#d97706', rows: [
        'Proiectul tehnic de execuție și detaliile',
        'Documentația pentru autorizare și autorizația',
        'Verificarea tehnică a proiectului',
        'Procedura de achiziție a execuției',
      ] },
    ],
  },
  {
    file: 'roluri-proiectant-expert-verificator', kind: 'columns',
    title: 'Trei roluri care nu se pot înlocui unul pe altul',
    subtitle: 'Fiecare cere altă atestare',
    cols: [
      { head: 'Proiectantul', rows: [
        { k: 'Ce face', v: 'Elaborează documentația' },
        { k: 'Pe șantier', v: 'Asigură asistența tehnică' },
      ] },
      { head: 'Expertul tehnic', color: '#334155', rows: [
        { k: 'Ce face', v: 'Expertizele la construcții existente' },
        { k: 'Atestat', v: 'Nominal, de ministerul de resort' },
        { k: 'Independență', v: 'Nu expertizează un proiect făcut sau verificat de el (art. 435)' },
      ] },
      { head: 'Verificatorul', color: '#d97706', rows: [
        { k: 'Ce face', v: 'Verifică proiectul pe cerințele fundamentale' },
        { k: 'Atestat', v: 'Separat de expert' },
        { k: 'Monumente', v: 'Atestare suplimentară obligatorie (art. 440 alin. (5))' },
      ] },
    ],
  },
  {
    file: 'categorii-vs-clase-consecinte', kind: 'columns', joiner: ['→'],
    title: 'Din categorii de importanță în clase de consecințe',
    subtitle: 'Ce s-a schimbat la 25 august 2026',
    cols: [
      { head: 'Până acum: punctaj', color: '#334155', rows: [
        { k: 'Metoda', v: '6 factori × 3 criterii, punctaj 0, 1, 2, 4 sau 6' },
        { k: 'A, excepțională', v: 'peste 30 de puncte' },
        { k: 'B, deosebită', v: '18…29' },
        { k: 'C, normală', v: '6…17' },
        { k: 'D, redusă', v: 'sub 5' },
      ] },
      { head: 'CATUC: anexa 6', color: '#1e3a5f', rows: [
        { k: 'Metoda', v: 'Încadrarea se face exclusiv după anexa 6 (art. 370 alin. (16))' },
        { k: 'Clase', v: 'CC1, CC2, CC3, CC4' },
        { k: 'Dacă nu e în anexă', v: 'Proiectantul o asimilează celei mai apropiate clase (art. 370 alin. (17))' },
        { k: 'Consecință', v: 'Clasa decide nivelul verificării de proiect' },
      ] },
    ],
  },
  {
    file: 'stas-eurocod-hibrid', kind: 'columns', joiner: ['+'],
    title: 'Podurile existente: abordarea hibridă',
    subtitle: 'Metodologia din 20.09.2022, M. Of. nr. 988 bis',
    cols: [
      { head: 'Încărcări: convoaiele vechi', color: '#334155', rows: [
        { k: 'Sursa', v: 'STAS 3221-86, clasa E (standard anulat la 31.07.2018)' },
        { k: 'De ce', v: 'Structura a fost concepută pe aceste ipoteze' },
      ] },
      { head: 'Verificare: Eurocodurile', color: '#1e3a5f', rows: [
        { k: 'Ce se verifică', v: 'Materialele, beton și metal, după Eurocoduri' },
        { k: 'De ce merge', v: 'Ambele sisteme se bazează pe metoda stărilor limită' },
      ] },
    ],
    footer: 'Limite: metodologia se aplică numai suprastructurii, în gruparea fundamentală. Siguranța la seism nu e acoperită.',
  },
  {
    file: 'monument-ordinea-pasilor', kind: 'steps', cols: 1,
    title: 'Pod monument istoric: ordinea care economisește timp',
    subtitle: 'Legea nr. 422/2001 și CATUC',
    steps: [
      { t: 'Verifici statutul în Lista Monumentelor Istorice', s: 'și dacă podul e în zona de protecție a unui monument' },
      { t: 'Expertiză de la un expert atestat suplimentar pentru monumente', s: 'art. 436 alin. (2) din CATUC' },
      { t: 'Discuți soluția cu direcția județeană pentru cultură', s: 'înainte să o dezvolți în detaliu' },
      { t: 'Documentația de avizare și avizul Ministerului Culturii', s: '15 zile pentru lucrări inginerești de interes local și județean', hi: true },
      { t: 'Verificare de un verificator atestat suplimentar', s: 'art. 440 alin. (5) din CATUC' },
      { t: 'Autorizația de construire', s: 'emisă fără avizul Ministerului Culturii, e nulă de drept' },
    ],
  },
  {
    file: 'niveluri-verificare-nvp', kind: 'table',
    title: 'Patru niveluri de verificare a proiectului',
    subtitle: 'CATUC, art. 440–444',
    widths: [0.7, 0.9, 2.4],
    head: ['Clasa', 'Nivel', 'Ce face verificatorul'],
    rows: [
      ['CC1', 'NVP1', 'Nu există verificare obligatorie. Răspund proiectanții.'],
      ['CC2', 'NVP2', 'Verificare calitativă: date de intrare, ipoteze, constructibilitate, conținutul proiectului.'],
      ['CC3', 'NVP3', 'Plus verificare cantitativă: revizuiește toate calculele proiectantului.'],
      { cells: ['CC4', 'NVP4', 'Calcul paralel independent. Diferența față de proiectant: maximum 5%.'], hi: true },
    ],
  },
  {
    file: 'categorii-drumuri-administratori', kind: 'columns',
    title: 'Cine deține și cine administrează drumul',
    subtitle: 'OG nr. 43/1997 privind regimul drumurilor',
    cols: [
      { head: 'Drum național', rows: [
        { k: 'Proprietar', v: 'Statul' },
        { k: 'Administrator', v: 'Ministerul Transporturilor, direct sau prin CNAIR' },
        { k: 'Excepție', v: 'În intravilanul municipiilor: consiliul local' },
      ] },
      { head: 'Drum județean', color: '#334155', rows: [
        { k: 'Proprietar', v: 'Județul' },
        { k: 'Administrator', v: 'Consiliul județean' },
        { k: 'Excepție', v: 'În intravilanul localităților urbane: consiliul local' },
      ] },
      { head: 'Drum de interes local', color: '#d97706', rows: [
        { k: 'Proprietar', v: 'Comuna, orașul sau municipiul' },
        { k: 'Tipuri', v: 'Comunale, vicinale, străzi, piste de biciclete' },
        { k: 'Administrator', v: 'Consiliul local, care îl și clasifică prin hotărâre' },
      ] },
    ],
  },
  {
    file: 'termene-legale-autorizare', kind: 'steps', cols: 1,
    title: 'Termenele pe care le fixează legea',
    subtitle: 'CATUC, de la certificatul de urbanism la autorizație',
    steps: [
      { t: 'Certificat de urbanism pentru lucrări inginerești: 15 zile lucrătoare', s: 'fără drept real asupra imobilelor (art. 258)' },
      { t: 'Avize: completări cerute o singură dată, în 5 zile lucrătoare', s: 'după aceea nu se mai pot cere (art. 316)' },
      { t: 'Avizul Ministerului Culturii, unde e cazul: 15 zile', s: 'pentru lucrări inginerești de interes local și județean' },
      { t: 'Autorizația de construire: 30 de zile calendaristice', s: '15 zile la infrastructura de transport (art. 273, 334)', hi: true },
      { t: 'Regim de urgență: 7 zile lucrătoare', s: 'cu taxă specială (art. 273 alin. (2))' },
    ],
    footer: 'Termenele curg de la documentația completă. Actele autorității de mediu au procedura lor.',
  },
];
