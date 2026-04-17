import { siteConfig } from '@/data/site'

export interface PageMeta {
  title: string
  description: string
  canonical: string
  ogImage?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  articleSection?: string
  articleTags?: string[]
  preloadImage?: string
  noindex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = '/og/home.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
}: {
  title: string
  description: string
  path: string
  ogImage?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}): PageMeta {
  return {
    title,
    description,
    canonical: path,
    ogImage,
    type,
    publishedTime,
    modifiedTime,
  }
}
