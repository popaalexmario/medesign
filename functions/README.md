# Cloudflare Pages Functions

## `/api/contact`

Primește formularul de pe `/contact`, validează datele și trimite mesajul
către adresa de contact.

### Variabile de mediu

Se configurează în Cloudflare Pages → proiectul `medesign` → **Settings** →
**Variables and secrets**, pe mediul **Production**. Modificările se aplică
abia la următorul deploy.

| Variabilă | Obligatorie | Rol |
|---|---|---|
| `WEB3FORMS_KEY` | una din cele două | Cheie de acces Web3Forms |
| `RESEND_API_KEY` | una din cele două | Cheie API Resend |
| `CONTACT_TO` | nu | Destinatar; implicit `office@me-design.ro` |
| `CONTACT_FROM` | nu | Expeditor, doar pentru Resend |

Dacă sunt setate ambele chei, se folosește Resend.

Fără nicio cheie, endpointul răspunde `503`, iar pagina de contact oferă
utilizatorului un `mailto` precompletat cu datele introduse — formularul
nu devine o cale moartă.

### Comportament

- Câmpuri obligatorii: `nume`, `email`, `mesaj`
- Câmpul `website` este honeypot: dacă vine completat, cererea e acceptată
  cu `200` și ignorată tăcut
- Adresa expeditorului se pune ca `reply-to`, deci se poate răspunde direct
  din inbox
