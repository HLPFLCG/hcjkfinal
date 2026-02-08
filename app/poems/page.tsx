import type { Metadata } from 'next'
import { getAllPoems } from '@/lib/poems'
import { PoemCard } from '@/components/poem-card'

export const metadata: Metadata = {
  title: 'Poems',
  description:
    'Read the poetry of Heather Krystecki. A curated archive of poems from I See You, I See Me and beyond — raw, emotional poetry about love, loss, and self-discovery.',
  alternates: { canonical: 'https://hcjk.org/poems/' },
}

export default function PoemsPage() {
  const poems = getAllPoems()

  return (
    <article>
      <div className="h-24" />

      {/* Hero */}
      <section className="pt-20 md:pt-30 pb-16 px-8 text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8 animate-fade-up">
          The Archive
        </p>
        <h1 className="font-serif text-display text-charcoal font-light animate-fade-up-delay-1">
          Poems
        </h1>
        <div className="divider mx-auto mt-10 animate-fade-up-delay-2" />
        <p className="font-serif text-xl text-stone font-light italic max-w-md mx-auto mt-10 animate-fade-up-delay-2">
          Words that needed a place to live.
        </p>
      </section>

      {/* Poems Grid */}
      <section className="pb-30 px-8">
        <div className="max-w-4xl mx-auto">
          {poems.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-charcoal/30 font-light italic">
                Poems coming soon...
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {poems.map((poem) => (
                <PoemCard key={poem.slug} poem={poem} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-26 md:py-30 px-8 bg-linen text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
          The Collection
        </p>
        <h2 className="font-serif text-display-sm text-charcoal font-light mb-6">
          Read the full book
        </h2>
        <p className="text-sm text-stone max-w-md mx-auto mb-10 leading-relaxed">
          These poems and many more live inside <em className="font-serif italic">I See You, I See Me</em>.
        </p>
        <a href="/shop/" className="btn-primary">
          Order the Book
        </a>
      </section>
    </article>
  )
}
