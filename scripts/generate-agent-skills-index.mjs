#!/usr/bin/env node
// Genera /.well-known/agent-skills/index.json (Agent Skills Discovery RFC v0.2.0)
// Recorre los SKILL.md de cada sub-carpeta, calcula sha256, escribe el index.
//
// Corre en post-build: los archivos están en dist/client/.well-known/agent-skills/
import { createHash } from 'node:crypto'
import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

// Read skills from public/ (source of truth) and write index.json to:
//  1. public/ — so Astro dev serves it durante desarrollo
//  2. dist/client/ — copia consumida en producción (también la genera Astro al copiar public/)
const SOURCE = 'public/.well-known/agent-skills'
const DEST_DIST = 'dist/client/.well-known/agent-skills'
const SITE = 'https://www.pladurmenorca.com'
const SCHEMA = 'https://agentskills.io/schemas/v0.2.0/index.json'

function parseFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const fm = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([a-zA-Z][a-zA-Z0-9_-]*)\s*:\s*(.+)$/)
    if (m) fm[m[1]] = m[2].trim().replace(/^["']|["']$/g, '')
  }
  return fm
}

try {
  const entries = await readdir(SOURCE, { withFileTypes: true })
  const skills = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const skillPath = join(SOURCE, entry.name, 'SKILL.md')
    try {
      await stat(skillPath)
    } catch {
      continue
    }

    const content = await readFile(skillPath, 'utf-8')
    const fm = parseFrontMatter(content)
    const sha256 = createHash('sha256').update(content).digest('hex')

    skills.push({
      name: fm.name || entry.name,
      type: 'skill.md',
      description: fm.description || fm.title || entry.name,
      url: `${SITE}/.well-known/agent-skills/${entry.name}/SKILL.md`,
      sha256,
      ...(fm.version ? { version: fm.version } : {}),
      ...(fm.language ? { language: fm.language } : {}),
    })
  }

  skills.sort((a, b) => a.name.localeCompare(b.name))

  const index = {
    $schema: SCHEMA,
    generated: new Date().toISOString(),
    publisher: {
      name: 'Pladur Menorca',
      url: SITE,
    },
    skills,
  }

  const content = JSON.stringify(index, null, 2) + '\n'
  // Escribir en public/ (Astro dev) y en dist/ (producción)
  await writeFile(join(SOURCE, 'index.json'), content, 'utf-8')
  try {
    await stat(DEST_DIST)
    await writeFile(join(DEST_DIST, 'index.json'), content, 'utf-8')
  } catch {
    // dist/ no existe (modo dev antes del primer build) — no pasa nada
  }
  console.log(`[agent-skills-index] ✓ ${skills.length} skills indexadas`)
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('[agent-skills-index] Sin skills (directorio no existe), saltando.')
  } else {
    console.error('[agent-skills-index] Error:', err)
    process.exit(1)
  }
}
