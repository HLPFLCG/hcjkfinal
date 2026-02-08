import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  featured: boolean
  content: string
  htmlContent?: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs()
  const posts = slugs.map((slug) => getBlogPostBySlug(slug))
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    featured: data.featured || false,
    content,
  }
}

export async function getBlogPostWithHtml(slug: string): Promise<BlogPost> {
  const post = getBlogPostBySlug(slug)
  const processedContent = await remark().use(html).process(post.content)
  return {
    ...post,
    htmlContent: processedContent.toString(),
  }
}

export function getFeaturedBlogPosts(limit: number = 3): BlogPost[] {
  const posts = getAllBlogPosts()
  const featured = posts.filter((p) => p.featured)
  if (featured.length >= limit) return featured.slice(0, limit)
  return posts.slice(0, limit)
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}
