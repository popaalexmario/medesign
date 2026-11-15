# Poze pentru site

Fiecare proiect din portofoliu și fiecare articol de pe blog are aici un folder
cu același nume ca adresa paginii.

| Folder | Pagina |
|---|---|
| `poze/proiecte/dn7-versanti-valcea/` | me-design.ro/portofoliu/dn7-versanti-valcea |
| `poze/blog/podete-tipuri-dimensionare/` | me-design.ro/blog/podete-tipuri-dimensionare |

Pozele puse într-un folder apar automat pe pagina respectivă, în secțiunea
„Imagini din proiect” (la articole, „Imagini”). Site-ul le redimensionează și le
comprimă singur, deci se pot urca direct din telefon, la mărimea originală.

## Cum urci poze

1. Deschide folderul proiectului pe github.com.
2. **Add file → Upload files**, alege pozele.
3. **Commit changes**.

În 2–3 minute pozele sunt pe site.

## Ordinea și textul de sub poză

- Ordinea e cea alfabetică a numelor: `01-...`, `02-...` le pune în ordinea dorită.
- Numele fișierului devine textul de sub poză:
  `02-pila-dupa-reabilitare.jpg` → „Pila dupa reabilitare”.
- Numele de telefon (`IMG_1234.jpg`) nu se afișează, poza apare fără text.

## Formate

`.jpg`, `.jpeg`, `.png`, `.webp`. Pozele HEIC de pe iPhone nu sunt acceptate:
la urcare din Safari, iPhone-ul le convertește de regulă singur în JPG.
Dacă nu, în Setări → Cameră → Formate alege „Cel mai compatibil”.

Nu pune planșe CAD aici, sunt ilizibile la dimensiunea din galerie.

## Grafice, infografice, schițe

Se urcă în același folder ca pozele și apar în aceeași galerie. Merg imagini
`.png` sau `.jpg` exportate din Excel, PowerPoint, Canva sau AutoCAD (ca imagine,
nu ca planșă întreagă).

Dacă vrei ca un grafic să apară **în interiorul textului**, la un anumit
paragraf, și nu în galeria de la final, urcă-l aici și spune-i lui Claude
unde să-l pună. Schițele desenate de Claude stau în
`public/img/blog/schite/`.
