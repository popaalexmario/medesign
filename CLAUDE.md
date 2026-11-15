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

Workflow-ul `.github/workflows/sync-productie.yml` copiază orice push din `main`
în branch-ul de producție, ca pozele urcate din interfața GitHub să ajungă pe site.
La un proiect sau articol nou, creează și folderul lui în `poze/` cu un `.gitkeep`.

Paginile de serviciu și cele de zonă se generează din fișierele de date. Când
adaugi un serviciu, apare automat peste tot.

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
  Nu pune planșe CAD ca thumbnail, sunt ilizibile la dimensiunea cardului.

## Configurare externă

- `WEB3FORMS_KEY` în Cloudflare Pages → Settings → Variables (Production).
  Formularul e testat și livrează pe office@me-design.ro.
- Google Search Console: proprietate de tip Domeniu, verificată prin DNS,
  sitemap trimis.
- Google Analytics `G-ZYECGEV54N`, încărcat o singură dată din `Layout.astro`.

## Rămas de făcut

- Google Business Profile: categorie, website, zone deservite.
- Recomandări de la beneficiari (Lugoj, Craiova, Cozieni) — cel mai mare câștig
  de conversie disponibil.
- Codul poștal al sediului, pentru schema LocalBusiness.
- 26 de articole publicate la 15.11.2026.

## Surse online

`legislatie.just.ro` nu răspunde din containerul de lucru. Pentru linkuri se
folosesc paginile lege5.ro, testate cu curl înainte de publicare. Pagina
gratuită lege5 a CATUC conține textul integral în forma din Monitorul Oficial
(fără rectificări): se poate descărca și căuta local pentru verificări.
