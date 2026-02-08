import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PoemEntry {
  slug: string
  title: string
  collection: string
  order: number
  featured: boolean
  content: string
  htmlContent: string
}

const POEMS_DIR = path.join(process.cwd(), 'content', 'poems')

export function getAllPoemSlugs(): string[] {
  if (!fs.existsSync(POEMS_DIR)) return []
  return fs
    .readdirSync(POEMS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getAllPoems(): PoemEntry[] {
  const slugs = getAllPoemSlugs()
  const poems = slugs.map((slug) => getPoemBySlug(slug))
  return poems.sort((a, b) => a.order - b.order)
}

export function getPoemBySlug(slug: string): PoemEntry {
  const filePath = path.join(POEMS_DIR, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || slug,
    collection: data.collection || 'I See You, I See Me',
    order: data.order || 99,
    featured: data.featured || false,
    content: content.trim(),
    htmlContent: renderPoemHtml(content.trim()),
  }
}

export function getFeaturedPoems(limit: number = 3): PoemEntry[] {
  const poems = getAllPoems()
  const featured = poems.filter((p) => p.featured)
  if (featured.length >= limit) return featured.slice(0, limit)
  return poems.slice(0, limit)
}

export function getAdjacentPoems(slug: string): { prev: PoemEntry | null; next: PoemEntry | null } {
  const poems = getAllPoems()
  const index = poems.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? poems[index - 1] : null,
    next: index < poems.length - 1 ? poems[index + 1] : null,
  }
}

function renderPoemHtml(content: string): string {
  return content
    .split('\n')
    .map((line) => {
      const trimmed = line.trim()
      if (trimmed === '') return '<br />'
      return trimmed
    })
    .join('<br />\n')
}
