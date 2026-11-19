import { execSync } from 'node:child_process';

/**
 * Data ultimei modificări reale a unor fișiere, din istoricul git (la build).
 * Într-o clonă superficială (shallow) istoricul nu e complet și data ar fi
 * a commitului curent, nu a modificării; atunci întoarce null și pagina
 * nu afișează nicio dată, în loc să afișeze una falsă.
 */
export function lastModified(files: string[]): string | null {
  try {
    if (execSync('git rev-parse --is-shallow-repository').toString().trim() === 'true') return null;
    const out = execSync(`git log -1 --format=%cI -- ${files.map((f) => `"${f}"`).join(' ')}`).toString().trim();
    return out ? out.slice(0, 10) : null;
  } catch {
    return null;
  }
}

export const formatRo = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Bucharest' });
