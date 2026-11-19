// Cloudflare Pages clonează repo-ul fără istoric complet (shallow). Datele
// „Actualizat” vin din git log (src/utils/pageDates.ts), deci aducem istoricul.
// Dacă nu merge, build-ul continuă, iar paginile nu afișează data de actualizare.
import { execSync } from 'node:child_process';
try {
  if (execSync('git rev-parse --is-shallow-repository').toString().trim() === 'true') {
    execSync('git fetch --unshallow --quiet', { stdio: 'inherit', timeout: 120000 });
    console.log('git-history: istoric complet adus');
  }
} catch (e) {
  console.log('git-history: nu am putut aduce istoricul (' + (e?.message ?? e) + ')');
}
