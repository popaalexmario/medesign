# ME Design — context de proiect

Site de prezentare pentru **Mario Engineering Design SRL**, firmă de proiectare
infrastructură (drumuri, poduri, consolidări), înființată 12.12.2018, sediu în
București. Astro 4 + Tailwind, găzduit pe Cloudflare Pages.

## Deploy — citește asta întâi

Cloudflare Pages servește **din branch-ul `claude/remove-phone-production-3uuKc`**,
nu din `main`. Convenția stabilită: după fiecare commit se face push în ambele,
ca să rămână identice.

```
git push -u origin claude/remove-phone-production-3uuKc
git push origin HEAD:main
```

Domeniile `me-design.ro` și `www.me-design.ro` sunt amândouă custom domains pe
proiectul Pages `medesign`. Contul Cloudflare: `968493b1cd03d86452b1536d257b0e92`.

## Structura conținutului

| Unde | Ce |
|---|---|
| `src/content/blog/` | Articolele. Schema în `src/content/config.ts`. |
| `src/content/projects/` | Un fișier per proiect din portofoliu. |
| `src/data/services.ts` | Cele 7 servicii. Alimentează paginile, barele laterale și footerul. |
| `src/data/regions.ts` | Cele 5 regiuni pentru paginile `/zone`. |
| `src/utils/img.ts` | `cardSrcset()` pentru imaginile din carduri. |
| `functions/api/contact.js` | Backendul formularului. Vezi `functions/README.md`. |
| `poze/proiecte/<slug>/`, `poze/blog/<slug>/` | Poze urcate de Mario din GitHub. Apar automat în galeria paginii (`src/utils/autoGallery.ts`), redimensionate la build. Vezi `poze/README.md`. |

**Fișa de proiect** începe cu o galerie derulabilă (`PhotoGrid.astro`): coperta
(`image`), apoi imaginile din `gallery` (planșe CAD, randări, afișate întregi),
apoi pozele urcate în `poze/proiecte/<slug>/`. Planșele CAD nu se șterg niciodată
din fișă, chiar dacă nu mai sunt copertă (cerința lui Mario). Când coperta se
face dintr-o poză urcată, numele ei se trece în `coverFrom`, ca să nu apară dublat.

Workflow-ul `.github/workflows/sync-productie.yml` copiază orice push din `main`
în branch-ul de producție, ca pozele urcate din interfața GitHub să ajungă pe site.
La un proiect sau articol nou, creează și folderul lui în `poze/` cu un `.gitkeep`.

**Publicare programată.** Un articol cu `pubDate` în viitor nu apare nicăieri
(pagină, listă, RSS, sitemap), prin `src/utils/published.ts`. Workflow-ul
`.github/workflows/publicare-programata.yml` rulează zilnic la 05:07 UTC și, dacă
are ceva programat azi, face un commit gol în ambele branch-uri ca să pornească
build-ul. Articolele între ele se programează în ordinea linkurilor interne:
cel care e citat apare primul.

**Schițe.** Desenele SVG din articole sunt în `public/img/blog/schite/`, în
culorile site-ului, cu legendă numerotată și mențiunea „schiță de principiu”.
Schemele de tip flux/tabel/coloane se generează cu
`node scripts/schite/generate.mjs` din `scripts/schite/data.mjs`; textul din
ele se ia doar din articol. Desenele tehnice (secțiuni, profile) sunt făcute de
mână. Fiecare articol publicat are cel puțin o schiță.

**Fotografii de pe net.** Doar Wikimedia Commons cu licență liberă (CC0, CC BY,
CC BY-SA), verificată pe pagina fișierului. Sub poză: autorul și licența, cu
link. Se stochează în `public/img/blog/foto/`, webp ~1100px. API-ul Commons
limitează des cererile din container; paginile fișierelor se pot citi cu WebFetch.

Paginile de serviciu și cele de zonă se generează din fișierele de date. Când
adaugi un serviciu, apare automat peste tot.

## Versiunea în engleză

`/en/` acoperă prima pagină, serviciile, portofoliul, „Despre” și contactul.
Blogul, zonele, colaborările și paginile legale rămân doar în română.
Corespondența RO↔EN e în `src/i18n/paths.ts` (folosită de Header, Footer,
Layout pentru `hreflang` și butonul RO/EN). Serviciile EN: `src/data/services.en.ts`.
Proiectele EN: `src/content/projects-en/<slug>.md`, doar textul (titlu,
descriere, fază, localizare, beneficiar); pozele, categoriile și anul vin din
fișierul românesc. **La un proiect nou, adaugă și fișierul EN**, altfel nu apare
în portofoliul englez. Formularul EN trimite `lang=en`; emailul vine cu „[EN]”
în subiect.

## Publicul-țintă al blogului (nov. 2026)

Pe lângă autoritățile publice, articolele noi țintesc: investitori privați care
au nevoie de sistematizare verticală, platforme, curți, parcări și accese la drum;
birouri de arhitectură care au nevoie doar de partea de drumuri; constructori de
lucrări mici care au nevoie de asistență tehnică, optimizare sau reproiectare.
Articolele din seria asta: lucrari-fara-proiect-fara-autorizatie, acces-drum-public, ape-pluviale, sistematizare-verticala,
proiectare-parcare (art. 406 CATUC), specialitatea-drumuri, optimizare-reproiectare.
Articolele NU descriu proiectele firmei (cerința lui Mario, nov. 2026): fără
exemple din portofoliu, ci explicații generale despre utilitatea proiectului
făcut de specialiști și a intrării în legalitate (art. 280, 301 CATUC).
OG 43/1997 art. 46 verificat pe legeaz.net (lege5 nu afișează articolul gratuit).

## Reguli de scriere pentru articole

Stabilite după ce textele inițiale au fost comparate cu ghidul Wikipedia
*Signs of AI writing* și rescrise integral. De respectat:

- **Fără em-dash** (—). Virgulă, punct, sau reformulare.
- **Bold rar.** Maximum câteva per articol, pentru termeni cheie.
- **Fără liste cu etichetă îngroșată** urmată de frază („**Faza.** Explicație...").
  Proză sau listă simplă.
- **Lungimi de frază variate.** Unele foarte scurte.
- **Finaluri diferite** de la articol la articol. Nu același șablon de CTA.
- Fără grupări de câte trei peste tot.
- Ton de inginer care a lucrat pe teren, nu de broșură.

## Reguli pentru afirmații tehnice și legale

Firma e condusă de un inginer atestat, iar cititorii sunt profesioniști. O
eroare se vede.

- **Nicio citare legală din memorie.** Se verifică în textul publicat.
- **Nicio soluție tehnică inventată.** Se scrie doar ce susțin datele proiectului.
- **Linkurile se testează înainte de publicare.** Ce nu răspunde se citează pe
  nume, fără hyperlink.
- Dacă o firmă terță nu se confirmă în surse, se descrie prin rol, nu prin nume.

## Repere legislative verificate

- **CATUC = Legea nr. 169/2026**, M. Of. Partea I nr. 661 din 10.08.2026, în
  vigoare **25.08.2026**. Rectificări în M. Of. nr. 862 din 14.10.2026.
- Stadiile 0–6 înlocuiesc fazele; art. 424 alin. (2) pune proiectantul pe 1–4.
- **PAC** înlocuiește DTAC, **PAD** înlocuiește DTAD.
- Clase de consecințe **CC1–CC4** (art. 370) în locul categoriilor A–D.
  Până la metodologie, încadrarea se face **exclusiv după anexa 6**.
- Asistența tehnică: art. 521 (obligatorie + opțională, rămâne la proiectant);
  activitățile obligatorii sunt art. 426 alin. (1) lit. e), h), i), j), k).
  Art. 426 alin. (4): proiectantul nu răspunde de controlul calității execuției.
- Expertiza obligatorie: art. 437 alin. (2); intervenții pe existent doar cu
  expertiză: art. 438. Foraje geotehnice fără AC: art. 299 alin. (9)–(10).
- NP 074-2022 (documentații geotehnice): Ordinul MDLPA nr. 27/2023, M. Of. 56/2023.
- Art. 577 alin. (1) listează cine rămâne sub **HG 907/2016**.
- **Legea 50/1991 abrogată integral** și **Legea 10/1995 abrogată aproape
  integral** (rămân doar art. 10 și 41) de CATUC, la 25.08.2026. Nu le cita ca
  drept în vigoare. Expertiza la intervenții: art. 285 alin. (2), extins la
  lucrări inginerești prin art. 327 alin. (2).
- Verificarea de proiect are 4 niveluri NVP1–NVP4 legate de CC1–CC4
  (art. 440–444). CC1 nu se mai verifică. NVP4: calcul paralel, abatere max 5%.
- Monumente istorice: expert și verificator cu atestare suplimentară MC
  (art. 436 alin. (2), art. 440 alin. (5)); avizul MC 15 zile la lucrări
  inginerești de interes local/județean (art. 316 alin. (3)).
- Termene: CU lucrări inginerești 15 zile lucrătoare (art. 258), AC 30 zile
  (art. 273), 15 zile la infrastructură de transport (art. 334).
- STAS 3221-86 anulat 31.07.2018. Pentru poduri existente se aplică
  Metodologia din 20.09.2022 (M. Of. nr. 988 bis): convoaie vechi clasa E +
  verificare după Eurocoduri.

## Convenții în date

- `beneficiarPrin` pe un proiect = contractul nu a fost direct cu beneficiarul
  final. Se afișează „Beneficiar final" plus veriga. Folosit la DN7, Pasaj A0,
  Gurasada.
- Imagini: maximum 1600px lățime, variantă de 800px în `sm/` pentru `srcset`.
  Cardurile din portofoliu folosesc varianta de 640px din `card/` (webp): după o
  copertă sau planșă nouă rulează `node scripts/card-images.mjs`. În carusel, pozele
  2, 3... se descarcă doar la interacțiune (`CardSlides.astro`).
  Nu pune planșe CAD ca thumbnail, sunt ilizibile la dimensiunea cardului.

## Vizibilitate în asistenții AI

- `public/robots.txt` are `Content-Signal: search=yes, ai-input=yes, ai-train=no`
  (nu depindem de blocul Cloudflare, care nu-l mai include). Permite explicit boții AI de căutare (OAI-SearchBot,
  ChatGPT-User, PerplexityBot, Claude-SearchBot etc.).
- Datele structurate: AboutPage (Despre), ContactPage, CollectionPage cu ItemList
  (Portofoliu), FAQPage pe servicii, BlogPosting pe articole. Întrebările frecvente
  din `services.ts` apar și în `/llms.txt`.
- `public/_headers` (Cloudflare Pages) pune pe `/` și `/en/` antetul
  `Link: </llms.txt>; rel="describedby"` (RFC 8288), cerut de verificatorul
  isitagentready.com. Nu declarăm api-catalog: nu avem API public.
- **Agenți AI (isitagentready.com).** Implementate doar cele reale: antetul `Link`,
  WebMCP (`src/components/AgentTools.astro`: list_services, search_projects,
  get_contact, open_page; doar citire și navigare; date din `/agents/projects.json`)
  și skill-ul `public/.well-known/agent-skills/me-design-request-quote/SKILL.md`,
  cu `index.json` generat la build de `scripts/agent-skills.mjs` (amprenta SHA-256).
  NU publicăm api-catalog, OAuth/OIDC, A2A, MCP server card, DNS-AID sau ACP:
  ar descrie servicii care nu există (fără API, fără autentificare, fără magazin).
- **Markdown for Agents** (fără plan Pro): la build, `scripts/markdown-pages.mjs`
  scrie `index.md` lângă fiecare `index.html` (fără header/footer/scripturi);
  `functions/_middleware.js` îl servește la `Accept: text/markdown` (noindex, Vary: Accept).
  `public/_routes.json` scoate imaginile, fonturile, scripturile, .txt/.xml din funcții.
  Testat local cu `wrangler pages dev dist`.
- `src/pages/llms.txt.ts` generează `/llms.txt` la fiecare build din servicii,
  proiecte și articolele publicate. Nu se editează de mână.
- Cloudflare (verificat nov. 2026): AI Crawler and Agent access policies = Search
  Allow, Training Disallow, Agents Allow; Bot Fight Mode pornit (protejează formularul).
  PerplexityBot primește 403 din cauza Bot Fight Mode (probabil nu e bot verificat);
  Perplexity-User trece. Decizie: rămâne așa.
- Cloudflare adaugă peste robots.txt un bloc „Cloudflare Managed content” care
  blochează boții de training și poate da 403 boților AI. Se controlează din
  dashboard (AI Crawl Control / Bots), nu din repo.

## Culori și prima pagină

- Varianta C, aleasă de Mario (nov. 2026): grafit (`brand-*`, #121417 etc.) și
  galben de marcaj (`accent-500` #f2c12e). `accent-600/700` sunt auriu închis,
  pentru text pe fundal deschis; pe butoanele galbene textul e închis (`text-brand-800`).
- Fundalul primei pagini: `public/img/hero-noapte.webp` (drum noaptea, din dronă),
  cu zoom lent (CSS). Bara de sus e albă cu text închis la derulare și
  transparentă cu text alb peste fundalul închis (`Header.astro`).
- Fundalul paginilor (varianta 3): `bg-page` #eef0f3 și `bg-page-alt` #e5e8ec în
  loc de alb/gri; cardurile rămân albe. Antetul paginilor interioare: clasa
  `page-hero` (grafit cu lumină galbenă difuză), definită în `Layout.astro`.
- Cifrele de pe prima pagină: pastilă translucidă (2018 / 200+), fără casete.
- Titlul de îndemn: „Ai nevoie de proiectare?” (nu „proiect de infrastructură”).
- Pagina /proba e doar pentru previzualizări (noindex, fără sitemap).

## SEO tehnic

- Linkurile interne primesc „/” final la build (`integrations/trailing-slash.mjs`),
  ca să nu treacă prin redirecționarea 308 a Cloudflare. URL-urile din schema
  JSON-LD se scriu tot cu „/” final.
- Proiectele au `seoTitle` (max ~52 caractere) în RO și EN; titlul lung rămâne
  în pagină. Titlurile care depășesc 65 de caractere cu sufix pierd „| ME Design”.
- Autorul: ing. Mario Popa, inginer CFDP, „peste 10 ani de experiență” (cerința lui;
  nu se mai menționează anul absolvirii; fără alte atestări declarate deocamdată). Apare pe „Despre” (#mario-popa), ca autor al articolelor
  și ca Person în schema globală. Nu adăuga atestări sau ani de experiență nedeclarați.
- Schema globală (WebSite, Organization, Person, ProfessionalService) e construită în
  `Layout.astro` din `services.ts`. `sameAs` al firmei e gol până primim profilurile firmei; Person are LinkedIn-ul lui Mario (LinkedIn răspunde 999 la curl, e normal).
- Sitemap cu `<lastmod>` pentru articole (din `astro.config.mjs`).
- IndexNow: `.github/workflows/indexnow.yml` anunță Bing la fiecare push în
  branch-ul de producție; cheia e fișierul din `public/<cheie>.txt`.

## Bara cu logouri

`src/components/LogoMarquee.astro` pe „Despre noi” (variant dark) și pe „Portofoliu”
(variant light, sub „Beneficiarii proiectelor noastre”), denumiri oficiale complete în
`src/data/clienti.ts`. Fiecare colaborator are folderul `poze/logouri/<id>/`:
fișierul urcat de Mario are prioritate, altfel `_site-oficial.png` (luat de pe
site-ul oficial sau Commons; stemele sunt simboluri oficiale, art. 9 din Legea
8/1996). Folder gol = apare numele pe card. Lipsesc: Perșinari, Romcargo Maritim, Compania de Apă Oradea, Scobinți.
Terminalul PL6 Constanța e pentru Romcargo Maritim S.A. (nu APM Constanța). Fetești: stema de pe Commons (Free Art License); Hidroelectrica:
logoul trimis de Mario.
Logoul CNAIR e emblema de pe andnet.ro (domeniul cnair.ro e al altei firme!).
„Marian Stanciu Internațional” (uzinator Gurasada) nu s-a confirmat în registre.

## Configurare externă

- `WEB3FORMS_KEY` în Cloudflare Pages → Settings → Variables (Production).
  Formularul e testat și livrează pe office@me-design.ro.
- Google Search Console: proprietate de tip Domeniu, verificată prin DNS,
  sitemap trimis.
- Google Analytics `G-ZYECGEV54N`, încărcat o singură dată din `Layout.astro`.
- Fonturile (Plus Jakarta Sans, Inter) sunt găzduite local prin `@fontsource`
  (importate în `Layout.astro`, licențe OFL în `public/fonts/`). Nu reintroduce
  linkuri către fonts.googleapis.com / fonts.gstatic.com.
- **Consimțământ.** Google Analytics și Clarity se încarcă doar după „Accept”
  (`window.meAnalytics.load()` din `Layout.astro`, apelat din `CookieConsent.astro`).
  Harta de pe prima pagină e afișată mereu (cerința lui Mario): dalele OSM vin
  prin proxy-ul `functions/tiles/[[path]].js`, cu cache, deci vizitatorul nu
  contactează OpenStreetMap. AOS și Leaflet sunt în `public/vendor/` (fără unpkg).
  Orice serviciu terț nou trebuie legat de consimțământ și trecut în cele două politici.

## Rămas de făcut

- Google Business Profile: categorie, website, zone deservite.
- Recomandări de la beneficiari (Lugoj, Craiova, Cozieni) — cel mai mare câștig
  de conversie disponibil.
- Codul poștal al sediului, pentru schema LocalBusiness.
- Articole programate până la 28.11.2026 (șase noi pentru publicul privat).

## Surse online

`legislatie.just.ro` nu răspunde din containerul de lucru. Pentru linkuri se
folosesc paginile lege5.ro, testate cu curl înainte de publicare. Pagina
gratuită lege5 a CATUC conține textul integral în forma din Monitorul Oficial
(fără rectificări): se poate descărca și căuta local pentru verificări.
