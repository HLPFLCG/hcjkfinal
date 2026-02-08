import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog-card'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Reflections, new poems, and behind-the-scenes thoughts from poet Heather Krystecki, author of I See You, I See Me.',
  alternates: { canonical: 'https://hcjk.org/blog/' },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <article>
      <div className="h-24" />

      {/* Hero */}
      <section className="pt-20 md:pt-30 pb-16 px-8 text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8 animate-fade-up">
          Words & Reflections
        </p>
        <h1 className="font-serif text-display text-charcoal font-light animate-fade-up-delay-1">
          Journal
        </h1>
        <div className="divider mx-auto mt-10 animate-fade-up-delay-2" />
      </section>

      {/* Posts */}
      <section className="pb-30 px-8">
        <div className="max-w-3xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-charcoal/30 font-light italic">
                New entries coming soon...
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {posts.map((post) => (
                <div key={post.slug}>
                  <BlogCard post={post} />
                  <div className="divider mx-auto mt-16" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </article>
  )
}
