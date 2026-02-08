import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date + 'T00:00:00')
  const formatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}/`} className="block">
        <time className="text-[10px] tracking-super-wide uppercase text-stone/50">
          {formatted}
        </time>
        <h3 className="font-serif text-2xl md:text-3xl text-charcoal font-light mt-3 mb-4 group-hover:text-blush transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-sm text-stone leading-relaxed mb-4">
          {post.excerpt}
        </p>
        <span className="text-[10px] tracking-super-wide uppercase text-charcoal border-b border-charcoal pb-1 group-hover:border-blush group-hover:text-blush transition-colors duration-300">
          Read More
        </span>
      </Link>
    </article>
  )
}
