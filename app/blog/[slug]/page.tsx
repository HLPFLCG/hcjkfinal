import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogSlugs, getBlogPostWithHtml, getReadingTime } from '@/lib/blog'
import { getBlogPostSchema } from '@/lib/structured-data'
import { ShareButtons } from '@/components/share-buttons'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostWithHtml(slug)
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://hcjk.org/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Heather Krystecki'],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPostWithHtml(slug)
  const readingTime = getReadingTime(post.content)

  const date = new Date(post.date + 'T00:00:00')
  const formatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogPostSchema(post)),
        }}
      />

      <div className="h-24" />

      {/* Header */}
      <section className="pt-20 md:pt-30 pb-12 px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <time className="text-[10px] tracking-super-wide uppercase text-stone/50">
            {formatted}
          </time>
          <span className="text-stone/20">&middot;</span>
          <span className="text-[10px] tracking-super-wide uppercase text-stone/50">
            {readingTime} min read
          </span>
        </div>
        <h1 className="font-serif text-display-sm md:text-display text-charcoal font-light mt-6">
          {post.title}
        </h1>
        <div className="divider mx-auto mt-10" />
      </section>

      {/* Content */}
      <section className="pb-20 px-8">
        <div
          className="max-w-prose-wide mx-auto blog-content"
          dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
        />
      </section>

      {/* Tags */}
      {post.tags.length > 0 && (
        <section className="pb-10 px-8">
          <div className="max-w-prose-wide mx-auto flex items-center justify-center gap-3 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] tracking-super-wide uppercase text-stone/40 border border-stone/15 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Share */}
      <section className="pb-16 px-8">
        <div className="max-w-prose-wide mx-auto">
          <div className="border-t border-stone/10 pt-10">
            <ShareButtons
              title={post.title}
              url={`/blog/${slug}/`}
              text={post.excerpt}
            />
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-30 px-8 text-center">
        <div className="divider mx-auto mb-12" />
        <Link href="/blog/" className="btn-secondary">
          Back to Journal
        </Link>
      </section>
    </article>
  )
}
