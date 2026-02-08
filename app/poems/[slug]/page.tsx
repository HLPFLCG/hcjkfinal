import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPoemSlugs, getPoemBySlug, getAdjacentPoems } from '@/lib/poems'
import { getPoemSchema, getBreadcrumbSchema } from '@/lib/structured-data'
import { ShareButtons } from '@/components/share-buttons'

export async function generateStaticParams() {
  const slugs = getAllPoemSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const poem = getPoemBySlug(slug)
  const preview = poem.content.split('\n').filter((l) => l.trim()).slice(0, 2).join(' / ')
  return {
    title: poem.title,
    description: `"${preview}" — a poem by Heather Krystecki from ${poem.collection}.`,
    alternates: { canonical: `https://hcjk.org/poems/${slug}/` },
    openGraph: {
      title: `"${poem.title}" — Heather Krystecki`,
      description: `A poem from ${poem.collection}`,
      type: 'article',
    },
  }
}

export default async function PoemPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const poem = getPoemBySlug(slug)
  const { prev, next } = getAdjacentPoems(slug)
  const firstLine = poem.content.split('\n').find((l) => l.trim()) || poem.title

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPoemSchema(poem)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Poems', url: '/poems/' },
            { name: poem.title, url: `/poems/${slug}/` },
          ])),
        }}
      />

      <div className="h-24" />

      {/* Poem */}
      <section className="pt-20 md:pt-30 pb-20 px-8 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/40 mb-12">
          From &ldquo;{poem.collection}&rdquo;
        </p>

        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal font-light italic leading-relaxed poetry-text max-w-prose-narrow mx-auto">
          <span dangerouslySetInnerHTML={{ __html: poem.htmlContent }} />
        </blockquote>

        <div className="divider mx-auto mt-16 mb-8" />

        <p className="font-serif text-base text-stone italic mb-10">
          Heather Krystecki
        </p>

        {/* Share */}
        <ShareButtons
          title={poem.title}
          url={`/poems/${slug}/`}
          text={firstLine}
        />
      </section>

      {/* Prev / Next Navigation */}
      {(prev || next) && (
        <section className="pb-10 px-8">
          <div className="max-w-3xl mx-auto">
            <div className="border-t border-stone/10 pt-10 grid grid-cols-2 gap-8">
              <div className="text-left">
                {prev && (
                  <Link href={`/poems/${prev.slug}/`} className="group block">
                    <span className="text-[9px] tracking-super-wide uppercase text-stone/40 block mb-2">
                      Previous
                    </span>
                    <span className="font-serif text-lg text-charcoal font-light italic group-hover:text-blush transition-colors duration-300">
                      {prev.title}
                    </span>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {next && (
                  <Link href={`/poems/${next.slug}/`} className="group block">
                    <span className="text-[9px] tracking-super-wide uppercase text-stone/40 block mb-2">
                      Next
                    </span>
                    <span className="font-serif text-lg text-charcoal font-light italic group-hover:text-blush transition-colors duration-300">
                      {next.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="pb-30 px-8 text-center">
        <div className="flex items-center justify-center gap-8">
          <Link href="/poems/" className="btn-secondary">
            All Poems
          </Link>
          <Link href="/shop/" className="btn-secondary">
            Get the Book
          </Link>
        </div>
      </section>
    </article>
  )
}
