// Generează public/.well-known/agent-skills/index.json (Agent Skills Discovery v0.2.0)
// din folderele cu SKILL.md, cu amprenta SHA-256 a fiecărui fișier. Rulează la build.
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://me-design.ro';
const dir = 'public/.well-known/agent-skills';
const skills = [];
for (const name of readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort()) {
  const file = join(dir, name, 'SKILL.md');
  if (!existsSync(file)) continue;
  const buf = readFileSync(file);
  const desc = /^description:\s*(.+)$/m.exec(buf.toString('utf8'))?.[1].trim() ?? '';
  skills.push({
    name,
    type: 'skill-md',
    description: desc,
    url: `${SITE}/.well-known/agent-skills/${name}/SKILL.md`,
    digest: 'sha256:' + createHash('sha256').update(buf).digest('hex'),
  });
}
const index = { $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json', skills };
writeFileSync(join(dir, 'index.json'), JSON.stringify(index, null, 2) + '\n');
console.log(`agent-skills: ${skills.length} skill(s)`);
