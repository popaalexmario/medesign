// Desenele de copertă, câte unul pe articol (slug → SVG interior, pânză 1200x630).
// Linii simple, în culorile site-ului. Fără text, în afară de cifre de cotă.
const Y = '#f2c12e', L = '#cbd5e1', M = '#64748b', W = '#ffffff';
const s = (c = L, w = 3) => `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;

export const scenes = {
  'lucrari-fara-proiect-fara-autorizatie-riscuri': {
    alt: 'Ilustrație: plan de execuție cu soluția bifată, alături de o platformă turnată fără proiect, fisurată',
    svg: `
      <rect x="170" y="150" width="380" height="300" rx="10" ${s(L)}/>
      <path d="M210 210h300M210 250h220M210 290h260M210 330h180" ${s(M, 3)}/>
      <path d="M410 370l40 40 80-90" ${s(Y, 8)}/>
      <path d="M650 430h420" ${s(L, 4)}/>
      <path d="M680 430l30-70h300l30 70" ${s(L, 3)}/>
      <path d="M760 362l25 30-15 20 30 18" ${s(Y, 4)}/>
      <path d="M900 362l-20 28 25 16" ${s(Y, 4)}/>
      <path d="M700 470h360" ${s(M, 2)}/>
      <circle cx="870" cy="250" r="55" ${s(Y, 6)}/><path d="M832 288l76-76" ${s(Y, 6)}/>`,
  },
  'acces-drum-public-aviz-administrator': {
    alt: 'Ilustrație: drum public cu un acces nou spre o proprietate, poartă și podeț sub acces',
    svg: `
      <path d="M100 420h1000M100 520h1000" ${s(L, 4)}/>
      <path d="M100 470h1000" stroke="${W}" stroke-width="3" stroke-dasharray="30 26" fill="none"/>
      <path d="M100 400h1000" ${s(M, 2)} stroke-dasharray="6 8"/>
      <path d="M500 420L540 220M740 420L700 220" ${s(Y, 5)}/>
      <path d="M140 220h400M700 220h360" ${s(L, 4)}/>
      ${[180, 240, 300, 360, 420, 480, 760, 820, 880, 940, 1000].map((x) => `<path d="M${x} 220v-50" ${s(M, 3)}/>`).join('')}
      <path d="M540 220v-90M700 220v-90" ${s(Y, 5)}/>
      <path d="M545 140l70 40M695 140l-70 40" ${s(Y, 3)}/>
      <circle cx="620" cy="405" r="16" ${s(Y, 5)}/>
      <path d="M900 420v-120" ${s(L, 4)}/><path d="M870 300l30-50 30 50z" ${s(Y, 5)}/>`,
  },
  'ape-pluviale-platforme-curti-parcari': {
    alt: 'Ilustrație: platformă cu pantă, ploaie și apa colectată de o rigolă',
    svg: `
      ${[220, 330, 440, 550, 660, 770, 880, 990].map((x, i) => `<path d="M${x} ${120 + (i % 3) * 25}l-18 40" ${s(L, 3)}/>`).join('')}
      <path d="M150 380L950 330" ${s(L, 6)}/>
      <path d="M950 330h40v30h-40" ${s(Y, 5)}/>
      <path d="M300 345l-90 6M600 326l-90 6M880 309l-90 6" ${s(Y, 4)}/>
      <path d="M990 345c40 0 60 30 60 80" ${s(Y, 4)} stroke-dasharray="10 10"/>
      <path d="M150 380v60h800v-110" ${s(M, 2)}/>`,
  },
  'sistematizare-verticala-ce-este': {
    alt: 'Ilustrație: secțiune prin teren cu stradă, platformă în pantă și clădire, cu cote',
    svg: `
      <path d="M100 420h240l60-40 420-30h220" ${s(L, 6)}/>
      <path d="M100 450c200-10 400-80 700-120s250-20 300-20" ${s(M, 3)} stroke-dasharray="12 10"/>
      <rect x="840" y="220" width="200" height="130" ${s(L, 4)}/><path d="M830 220l110-60 110 60" ${s(L, 4)}/>
      <path d="M800 338v24M788 338h24M788 362h24" ${s(Y, 4)}/>
      <path d="M760 300l-300 25" ${s(Y, 4)}/><path d="M470 314l-12 12 16 4" ${s(Y, 4)}/>
      <path d="M420 384v30" ${s(Y, 4)}/><path d="M405 414h30" ${s(Y, 4)}/>`,
  },
  'specialitatea-drumuri-proiect-arhitectura': {
    alt: 'Ilustrație: plan de situație cu clădirea arhitectului și partea de drumuri: acces, platformă, parcare',
    svg: `
      <rect x="160" y="110" width="880" height="420" rx="10" ${s(M, 3)}/>
      <rect x="560" y="170" width="380" height="200" ${s(L, 5)}/>
      <path d="M560 170l380 200M940 170l-380 200" ${s(M, 1.5)}/>
      <path d="M160 460h880" ${s(L, 4)}/>
      <path d="M300 460v-260h220v260" ${s(Y, 5)}/>
      ${[0, 1, 2, 3].map((i) => `<path d="M${320 + i * 50} 230v80" ${s(Y, 3)}/>`).join('')}
      <path d="M520 400h420" ${s(Y, 5)}/>`,
  },
  'optimizare-reproiectare-proiect-existent': {
    alt: 'Ilustrație: planșă de proiect cu revizii marcate și o soluție înlocuită',
    svg: `
      <rect x="200" y="120" width="560" height="400" rx="10" ${s(L, 4)}/>
      <path d="M250 200h300M250 250h420M250 300h360M250 350h260M250 400h380" ${s(M, 3)}/>
      <path d="M240 290c80-30 300-30 400 0" ${s(Y, 5)}/>
      <ellipse cx="560" cy="250" rx="140" ry="40" ${s(Y, 4)}/>
      <path d="M850 160l-160 260-10 50 40-30 160-260z" ${s(Y, 5)}/>
      <path d="M830 190l40 25" ${s(Y, 4)}/>
      <path d="M880 420h160M880 460h120" ${s(L, 3)}/>`,
  },
  'teren-fara-acces-drum-public-servitute': {
    alt: 'Ilustrație: plan de parcele, cu un teren fără ieșire la drum și coridorul servituții de trecere',
    svg: `
      <path d="M120 470h960M120 540h960" ${s(L, 5)}/>
      <path d="M200 470V140h250v330M450 470V140h300v330M750 470V140h260v330" ${s(M, 3)}/>
      <path d="M200 300h810" ${s(M, 3)}/>
      <rect x="460" y="150" width="280" height="140" ${s(Y, 5)}/>
      <path d="M560 290v180M640 290v180" ${s(Y, 4)} stroke-dasharray="14 10"/>
      <path d="M600 450v-120" ${s(Y, 4)}/><path d="M585 345l15-20 15 20" ${s(Y, 4)}/>`,
  },
  'ridicare-topografica-ce-trebuie-sa-contina': {
    alt: 'Ilustrație: stație totală pe trepied și curbe de nivel ale terenului',
    svg: `
      ${[0, 1, 2, 3, 4].map((i) => `<path d="M120 ${360 + i * 40}c200 -${40 - i * 6} 420 ${30 - i * 4} 620 -${20 - i * 2}s260 ${30 - i * 3} 340 -${10 + i * 2}" ${s(i % 2 ? M : L, 3)}/>`).join('')}
      <path d="M760 320l-60 220M760 320l0 220M760 320l60 220" ${s(L, 4)}/>
      <rect x="725" y="240" width="70" height="80" rx="8" ${s(Y, 5)}/>
      <circle cx="760" cy="270" r="14" ${s(Y, 4)}/>
      <path d="M795 270h120" ${s(Y, 3)} stroke-dasharray="10 10"/>
      <path d="M930 200v120M915 200h30" ${s(L, 4)}/>`,
  },
  'certificat-urbanism-documentatii-complementare': {
    alt: 'Ilustrație: certificat de urbanism cu ștampilă și lista documentelor bifate',
    svg: `
      <rect x="300" y="140" width="380" height="400" rx="10" ${s(M, 3)}/>
      <rect x="260" y="110" width="380" height="400" rx="10" fill="#121417" ${s(L, 4)}/>
      ${[0, 1, 2, 3, 4].map((i) => `<path d="M300 ${190 + i * 60}l14 14 26-30" ${s(Y, 5)}/><path d="M360 ${190 + i * 60}h220" ${s(M, 3)}/>`).join('')}
      <circle cx="820" cy="320" r="90" ${s(Y, 5)}/><circle cx="820" cy="320" r="62" ${s(Y, 3)}/>
      <path d="M790 320l22 22 40-46" ${s(Y, 5)}/>`,
  },
  'constructie-langa-vecin-expertiza-vecinatati': {
    alt: 'Ilustrație: săpătură sprijinită la limita proprietății, lângă fundația unei clădiri vecine',
    svg: `
      <path d="M100 330h480v140h340V330h180" ${s(L, 5)}/>
      <rect x="200" y="170" width="300" height="160" ${s(L, 4)}/><path d="M190 170l160-70 160 70" ${s(L, 4)}/>
      <rect x="200" y="330" width="300" height="40" ${s(M, 3)}/>
      <path d="M560 300v200" ${s(Y, 8)}/>
      <path d="M500 370l60 100V370z" fill="${Y}" fill-opacity="0.18" ${s(Y, 3)} stroke-dasharray="10 8"/>
      <path d="M540 120v380" ${s(M, 2)} stroke-dasharray="12 10"/>`,
  },
  'organizare-de-santier-ce-contine': {
    alt: 'Ilustrație: șantier cu împrejmuire, poartă, rampă de spălare și macara',
    svg: `
      <path d="M120 470h960" ${s(L, 4)}/>
      <path d="M160 470V330M1040 470V330M160 330h340M700 330h340" ${s(M, 3)}/>
      ${[200, 240, 280, 320, 360, 400, 440, 480, 740, 780, 820, 860, 900, 940, 980, 1020].map((x) => `<path d="M${x} 470V330" ${s(M, 2)}/>`).join('')}
      <rect x="520" y="440" width="160" height="30" ${s(Y, 4)}/>
      <path d="M540 430c10-14 20-14 30 0M600 430c10-14 20-14 30 0" ${s(Y, 3)}/>
      <path d="M820 330V110h20v220M840 130h200M840 130l-60 0M1000 130v90" ${s(L, 4)}/>
      <rect x="985" y="220" width="30" height="24" ${s(Y, 3)}/>`,
  },
  'receptia-la-terminarea-lucrarilor': {
    alt: 'Ilustrație: platformă și clădire finalizate, cu procesul-verbal de recepție semnat',
    svg: `
      <path d="M120 450h620" ${s(L, 5)}/>
      <rect x="380" y="250" width="300" height="200" ${s(L, 4)}/><path d="M370 250l160-80 160 80" ${s(L, 4)}/>
      <path d="M140 430h220" ${s(M, 3)}/>
      <rect x="780" y="140" width="280" height="360" rx="12" ${s(Y, 4)}/>
      <rect x="870" y="120" width="100" height="40" rx="8" ${s(Y, 4)}/>
      ${[0, 1, 2].map((i) => `<path d="M820 ${220 + i * 60}h200" ${s(M, 3)}/>`).join('')}
      <path d="M840 430c30-40 50 20 80-10s40-20 60 0" ${s(Y, 4)}/>`,
  },

  'hale-peste-1000-mp-2027-acoperis-verde-parcare': {
    alt: 'Ilustrație: hală cu acoperiș verde și parcare cu arbori și copertine fotovoltaice',
    svg: `
      <rect x="160" y="230" width="460" height="200" ${s(L, 4)}/>
      <path d="M160 230h460" ${s(Y, 10)}/>
      ${[200, 260, 320, 380, 440, 500, 560].map((x) => `<path d="M${x} 222c8-22 16-22 24 0" ${s(Y, 3)}/>`).join('')}
      <rect x="250" y="330" width="90" height="100" ${s(M, 3)}/>
      <path d="M120 430h980" ${s(L, 4)}/>
      ${[0, 1, 2, 3].map((i) => `<path d="M${680 + i * 100} 430v-60" ${s(W, 2)}/>`).join('')}
      <path d="M660 300h360" ${s(Y, 5)}/><path d="M700 300v130M980 300v130" ${s(M, 3)}/>
      ${[690, 760, 830, 900, 970].map((x) => `<path d="M${x} 290l20-30" ${s(Y, 3)}/>`).join('')}
      <circle cx="1060" cy="360" r="34" ${s(Y, 4)}/><path d="M1060 394v36" ${s(L, 4)}/>`,
  },
  'bransamente-traversare-drum-acord-administrator': {
    alt: 'Ilustrație: secțiune prin drum cu un branșament trecut pe sub carosabil până la clădire',
    svg: `
      <path d="M120 300h300M780 300h300" ${s(L, 4)}/>
      <path d="M420 300h360" ${s(L, 8)}/>
      <path d="M560 300h40M650 300h40" stroke="${W}" stroke-width="3" fill="none"/>
      <path d="M120 300v200h960V300" ${s(M, 2)}/>
      <circle cx="220" cy="420" r="26" ${s(L, 4)}/>
      <path d="M246 420h560l60-60v-60" ${s(Y, 6)}/>
      <rect x="840" y="160" width="200" height="140" ${s(L, 4)}/><path d="M830 160l110-60 110 60" ${s(L, 4)}/>
      <rect x="196" y="270" width="48" height="30" ${s(Y, 3)}/>`,
  },
  'faze-determinante-santier-cine-semneaza': {
    alt: 'Ilustrație: straturi ale unei platforme înainte de acoperire și un proces-verbal semnat',
    svg: `
      <path d="M120 470h600" ${s(L, 4)}/>
      <rect x="160" y="400" width="520" height="70" ${s(M, 3)}/>
      <rect x="160" y="350" width="520" height="50" ${s(L, 3)}/>
      <rect x="160" y="320" width="380" height="30" ${s(Y, 4)}/>
      <path d="M560 300l60-40" ${s(Y, 4)}/><path d="M612 250l20 4-8 18" ${s(Y, 4)}/>
      <rect x="800" y="150" width="260" height="340" rx="12" ${s(Y, 4)}/>
      ${[0, 1, 2].map((i) => `<path d="M840 ${210 + i * 50}h180" ${s(M, 3)}/>`).join('')}
      ${[0, 1, 2].map((i) => `<path d="M840 ${380 + i * 30}c20-14 30 8 50-4" ${s(i === 2 ? Y : L, 3)}/>`).join('')}`,
  },
  'proiect-real-executat-as-built': {
    alt: 'Ilustrație: planșa proiectului tehnic suprapusă cu cotele măsurate după execuție',
    svg: `
      <rect x="180" y="120" width="560" height="380" rx="10" ${s(M, 3)}/>
      <path d="M220 400L460 360l220-20" ${s(M, 4)} stroke-dasharray="14 10"/>
      <path d="M220 410L460 375l220-30" ${s(Y, 5)}/>
      ${[[300, 398], [460, 375], [620, 352]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="${Y}"/>`).join('')}
      <path d="M230 200h200M230 240h150" ${s(L, 3)}/>
      <path d="M840 360l-50 140M840 360v140M840 360l50 140" ${s(L, 4)}/>
      <rect x="810" y="300" width="60" height="60" rx="8" ${s(Y, 4)}/>`,
  },
  'autorizatia-de-regularizare-pas-cu-pas': {
    alt: 'Ilustrație: platformă existentă, dosar cu pașii de regularizare și un calendar',
    svg: `
      <path d="M120 450h520" ${s(L, 5)}/>
      <path d="M160 450l30-60h360l30 60" ${s(L, 3)}/>
      <rect x="700" y="130" width="300" height="360" rx="12" ${s(L, 4)}/>
      ${[0, 1, 2, 3, 4].map((i) => `<circle cx="745" cy="${190 + i * 60}" r="14" ${s(Y, 4)}/><path d="M775 ${190 + i * 60}h180" ${s(M, 3)}/>`).join('')}
      <path d="M745 204v32M745 264v32M745 324v32M745 384v32" ${s(Y, 2)}/>
      <rect x="250" y="140" width="220" height="190" rx="10" ${s(Y, 4)}/>
      <path d="M250 190h220M300 120v40M420 120v40" ${s(Y, 4)}/>
      <path d="M330 250l30 30 50-60" ${s(L, 5)}/>`,
  },
  'drumuri-ansamblu-locuinte-privat-sau-public': {
    alt: 'Ilustrație: plan al unui ansamblu de case cu drumul privat legat de strada publică',
    svg: `
      <path d="M120 520h960" ${s(L, 6)}/>
      <path d="M560 520V200h80v320" ${s(Y, 5)}/>
      <circle cx="600" cy="170" r="60" ${s(Y, 5)}/>
      ${[[300, 230], [300, 360], [780, 230], [780, 360]].map(([x, y]) => `<rect x="${x}" y="${y}" width="130" height="90" ${s(L, 4)}/><path d="M${x + 130} ${y + 45}h${x < 600 ? 130 : -0}" ${s(M, 2)}/>`).join('')}
      <path d="M430 275h130M430 405h130M640 275h140M640 405h140" ${s(M, 3)} stroke-dasharray="10 8"/>
      <path d="M600 300v160" ${s(W, 2)} stroke-dasharray="18 14"/>`,
  },
  'contract-de-proiectare-ce-sa-cuprinda': {
    alt: 'Ilustrație: contract de proiectare cu lista de clauze bifate și semnătura',
    svg: `
      <rect x="380" y="100" width="440" height="440" rx="12" ${s(L, 4)}/>
      <path d="M430 160h260" ${s(L, 5)}/>
      ${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M430 ${220 + i * 45}l12 12 22-26" ${s(Y, 4)}/><path d="M480 ${220 + i * 45}h280" ${s(M, 3)}/>`).join('')}
      <path d="M600 500c30-40 50 20 80-10s40-20 60 0" ${s(Y, 4)}/>
      <path d="M900 200l-120 200-8 40 32-24 120-200z" ${s(Y, 4)}/>`,
  },
};
