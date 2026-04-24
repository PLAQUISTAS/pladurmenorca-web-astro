#!/usr/bin/env node
// Post-build: generate .md alongside each .html for agent content negotiation
// (Accept: text/markdown → served by nginx when the .md exists).
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const DIST = 'dist/client'

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
  hr: '---',
  linkStyle: 'inlined',
})
turndown.use(gfm)

// Strip non-content markup
turndown.remove(['script', 'style', 'noscript', 'svg', 'button', 'form', 'iframe'])

// Astro injects <astro-island>, <astro-static-slot>, etc. — treat as transparent
turndown.addRule('astroIslands', {
  filter: (node) => typeof node.nodeName === 'string' && node.nodeName.toLowerCase().startsWith('astro-'),
  replacement: (content) => content,
})

const MAIN_RE = /<main\b[^>]*>([\s\S]*?)<\/main>/i
const TITLE_RE = /<title>([^<]+)<\/title>/i
const DESC_RE = /<meta[^>]+name="description"[^>]+content="([^"]+)"/i
const CANONICAL_RE = /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const out = []
  for (const e of entries) {
    const path = join(dir, e.name)
    if (e.isDirectory()) out.push(...(await walk(path)))
    else if (e.name.endsWith('.html')) out.push(path)
  }
  return out
}

function quote(s) {
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

const htmlFiles = await walk(DIST)
let generated = 0
let skipped = 0

for (const htmlPath of htmlFiles) {
  const html = await readFile(htmlPath, 'utf-8')
  const mainMatch = html.match(MAIN_RE)
  if (!mainMatch) {
    skipped++
    continue
  }

  const body = turndown.turndown(mainMatch[1]).trim()
  if (!body) {
    skipped++
    continue
  }

  const fm = []
  const title = html.match(TITLE_RE)?.[1]?.trim()
  const desc = html.match(DESC_RE)?.[1]?.trim()
  const canonical = html.match(CANONICAL_RE)?.[1]?.trim()
  if (title) fm.push(`title: ${quote(title)}`)
  if (desc) fm.push(`description: ${quote(desc)}`)
  if (canonical) fm.push(`url: ${canonical}`)

  const out = fm.length ? `---\n${fm.join('\n')}\n---\n\n${body}\n` : `${body}\n`

  const mdPath = htmlPath.replace(/\.html$/, '.md')
  await writeFile(mdPath, out, 'utf-8')
  generated++
}

console.log(`[markdown-for-agents] Generated ${generated} .md files (skipped ${skipped} without <main>)`)
