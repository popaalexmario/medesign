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
- Asistența tehnică obligatorie: art. 521.
- Art. 577 alin. (1) listează cine rămâne sub **HG 907/2016**.
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
- Articole propuse și nescrise: ziduri de sprijin vs gabioane, poduri monument
  istoric.
