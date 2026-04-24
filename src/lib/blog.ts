import { marked } from 'marked'
import type { Lang } from '@/i18n'

function getReadingTime(text: string, lang: Lang = 'es'): string {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return lang === 'en' ? `${minutes} min read` : `${minutes} min de lectura`
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
  author: string
  authorBio?: string
  category: string
  keywords: string[]
  image: string
  readingTime: string
  excerpt: string
  content: string
  lang: Lang
  translationOf?: string
}

export interface BlogPostMeta extends Omit<BlogPost, 'content'> {}

const blogFiles = import.meta.glob('/src/content/blog/*.mdx', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const frontmatterStr = match[1]
  const content = match[2]
  const data: Record<string, unknown> = {}

  for (const line of frontmatterStr.split('\n')) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue
    const key = line.slice(0, colonIndex).trim()
    let value: unknown = line.slice(colonIndex + 1).trim()

    // Remove surrounding quotes
    if (typeof value === 'string' && ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))) {
      value = (value as string).slice(1, -1)
    }

    // Parse arrays (simple YAML inline arrays)
    if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((s: string) => {
        const trimmed = s.trim()
        if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
          return trimmed.slice(1, -1)
        }
        return trimmed
      })
    }

    data[key] = value
  }

  return { data, content }
}

/**
 * Extrae el slug base del path del fichero.
 * - `/src/content/blog/foo.mdx`     -> `foo` (ES por defecto)
 * - `/src/content/blog/foo.en.mdx`  -> `foo` (EN; el sufijo `.en` se elimina)
 *
 * El `.en` en el nombre es solo una convención de ficheros, el slug de URL
 * compartido sigue siendo el mismo para ES/EN.
 */
function getSlugFromPath(filePath: string): string {
  const base = filePath.split('/').pop()!.replace(/\.mdx$/, '')
  return base.endsWith('.en') ? base.slice(0, -3) : base
}

function getFileLang(filePath: string, frontmatterLang?: unknown): Lang {
  if (frontmatterLang === 'en' || frontmatterLang === 'es') return frontmatterLang
  const base = filePath.split('/').pop()!.replace(/\.mdx$/, '')
  return base.endsWith('.en') ? 'en' : 'es'
}

const DEFAULT_AUTHOR: Record<Lang, string> = {
  es: 'Equipo Pladur Menorca',
  en: 'Pladur Menorca team',
}

const DEFAULT_CATEGORY: Record<Lang, string> = {
  es: 'Servicios de Pladur',
  en: 'Drywall Services',
}

export async function getAllPosts(lang: Lang = 'es'): Promise<BlogPostMeta[]> {
  const posts: BlogPostMeta[] = []

  for (const [filePath, rawContent] of Object.entries(blogFiles)) {
    const { data, content } = parseFrontmatter(rawContent)
    const postLang = getFileLang(filePath, data.lang)
    if (postLang !== lang) continue

    const slug = getSlugFromPath(filePath)
    posts.push({
      slug,
      title: (data.title as string) || '',
      description: (data.description as string) || '',
      date: (data.date as string) || '',
      updated: data.updated as string | undefined,
      author: (data.author as string) || DEFAULT_AUTHOR[postLang],
      authorBio: data.authorBio as string | undefined,
      category: (data.category as string) || DEFAULT_CATEGORY[postLang],
      keywords: (data.keywords as string[]) || [],
      image: (data.image as string) || '/images/blog-default.webp',
      readingTime: getReadingTime(content, postLang),
      excerpt: (data.excerpt as string) || content.slice(0, 200).replace(/[#*`]/g, '') + '...',
      lang: postLang,
      translationOf: data.translationOf as string | undefined,
    })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string, lang: Lang = 'es'): Promise<BlogPost | null> {
  const filePath = Object.keys(blogFiles).find((p) => {
    const { data } = parseFrontmatter(blogFiles[p])
    const postLang = getFileLang(p, data.lang)
    return getSlugFromPath(p) === slug && postLang === lang
  })
  if (!filePath) return null

  const rawContent = blogFiles[filePath]
  const { data, content } = parseFrontmatter(rawContent)
  const postLang = getFileLang(filePath, data.lang)

  return {
    slug,
    title: (data.title as string) || '',
    description: (data.description as string) || '',
    date: (data.date as string) || '',
    updated: data.updated as string | undefined,
    author: (data.author as string) || DEFAULT_AUTHOR[postLang],
    authorBio: data.authorBio as string | undefined,
    category: (data.category as string) || DEFAULT_CATEGORY[postLang],
    keywords: (data.keywords as string[]) || [],
    image: (data.image as string) || '/images/blog-default.webp',
    readingTime: getReadingTime(content, postLang),
    excerpt: (data.excerpt as string) || content.slice(0, 200).replace(/[#*`]/g, '') + '...',
    content: await marked.parse(content),
    lang: postLang,
    translationOf: data.translationOf as string | undefined,
  }
}

/**
 * Devuelve el slug de la traducción disponible (si existe), o null.
 * Útil para generar `alternateEn` / `alternateEs` en metadata.
 */
export async function getTranslationSlug(slug: string, targetLang: Lang): Promise<string | null> {
  const match = Object.keys(blogFiles).find((p) => {
    const { data } = parseFrontmatter(blogFiles[p])
    const postLang = getFileLang(p, data.lang)
    return getSlugFromPath(p) === slug && postLang === targetLang
  })
  return match ? slug : null
}

export async function generateStaticBlogParams(lang: Lang = 'es') {
  const posts = await getAllPosts(lang)
  return posts.map((post) => ({ slug: post.slug }))
}

export function formatDate(dateString: string, lang: Lang = 'es'): string {
  const date = new Date(dateString)
  const locale = lang === 'en' ? 'en-GB' : 'es-ES'
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const blogCategories = [
  'Precios y Presupuestos',
  'Servicios de Pladur',
  'Aislamiento',
  'Reformas con Pladur',
  'Proyectos Realizados',
  'Zonas de Menorca',
  'Guías y Consejos',
]

export const blogCategoriesEn = [
  'Prices and Quotes',
  'Drywall Services',
  'Insulation',
  'Drywall Renovations',
  'Completed Projects',
  'Menorca Areas',
  'Guides and Tips',
]
