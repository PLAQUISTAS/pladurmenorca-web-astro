import { marked } from 'marked'

function getReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min de lectura`
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

function getSlugFromPath(filePath: string): string {
  return filePath.split('/').pop()!.replace('.mdx', '')
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const posts: BlogPostMeta[] = []

  for (const [filePath, rawContent] of Object.entries(blogFiles)) {
    const slug = getSlugFromPath(filePath)
    const { data, content } = parseFrontmatter(rawContent)
    posts.push({
      slug,
      title: (data.title as string) || '',
      description: (data.description as string) || '',
      date: (data.date as string) || '',
      updated: data.updated as string | undefined,
      author: (data.author as string) || 'Equipo Pladur Mallorca',
      authorBio: data.authorBio as string | undefined,
      category: (data.category as string) || 'Servicios de Pladur',
      keywords: (data.keywords as string[]) || [],
      image: (data.image as string) || '/images/blog-default.webp',
      readingTime: getReadingTime(content),
      excerpt: (data.excerpt as string) || content.slice(0, 200).replace(/[#*`]/g, '') + '...',
    })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = Object.keys(blogFiles).find((p) => getSlugFromPath(p) === slug)
  if (!filePath) return null

  const rawContent = blogFiles[filePath]
  const { data, content } = parseFrontmatter(rawContent)

  return {
    slug,
    title: (data.title as string) || '',
    description: (data.description as string) || '',
    date: (data.date as string) || '',
    updated: data.updated as string | undefined,
    author: (data.author as string) || 'Equipo Pladur Mallorca',
    authorBio: data.authorBio as string | undefined,
    category: (data.category as string) || 'Servicios de Pladur',
    keywords: (data.keywords as string[]) || [],
    image: (data.image as string) || '/images/blog-default.webp',
    readingTime: getReadingTime(content),
    excerpt: (data.excerpt as string) || content.slice(0, 200).replace(/[#*`]/g, '') + '...',
    content: await marked.parse(content),
  }
}

export async function generateStaticBlogParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
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
  'Zonas de Mallorca',
  'Guías y Consejos',
]
