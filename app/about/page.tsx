import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Heather Krystecki — poet, author, and voice behind I See You, I See Me. Her raw, emotional poetry explores self-discovery, mental health, and the quiet courage of human connection.',
  alternates: { canonical: 'https://hcjk.org/about/' },
}

export default function AboutPage() {
  return (
    <article>
      <div className="h-24" />

      {/* Hero */}
      <section className="pt-20 md:pt-30 pb-16 px-8 text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8 animate-fade-up">
          About the Author
        </p>
        <h1 className="font-serif text-display text-charcoal font-light animate-fade-up-delay-1">
          Heather Krystecki
        </h1>
        <div className="divider mx-auto mt-10 animate-fade-up-delay-2" />
      </section>

      {/* Bio */}
      <section className="pb-30 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16 md:gap-20">
          {/* Sidebar */}
          <div className="md:col-span-2 relative">
            <div className="sticky top-32">
              <div className="aspect-[3/4] bg-linen relative overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-10">
                    <p className="font-serif text-3xl font-light text-charcoal/15 leading-tight italic">
                      &ldquo;poetry lives
                      <br />
                      in the everyday&rdquo;
                    </p>
                  </div>
                </div>
                <div className="absolute inset-4 border border-blush/15" />
              </div>
              <div className="text-center">
                <a
                  href="https://www.instagram.com/hcjk_collection/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-super-wide uppercase text-stone/50 hover:text-charcoal transition-colors duration-300"
                >
                  @hcjk_collection
                </a>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-3">
            <div className="space-y-8 text-base leading-[1.9] text-stone">
              <p className="text-lg text-charcoal leading-[1.9] first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-charcoal first-letter:font-light">
                Heather Krystecki is a poet and writer whose work explores the intimate
                geography of human connection&mdash;the moments of recognition, vulnerability,
                and quiet understanding that define our deepest relationships.
              </p>

              <p>
                Her debut poetry collection, <em className="font-serif text-charcoal italic">I See You, I See Me</em>,
                is a meditation on seeing and being seen. Through spare, honest language,
                she traces the contours of love, loss, self-discovery, and the courage
                it takes to be truly known by another person.
              </p>

              <p>
                Heather&apos;s writing is rooted in the belief that the most profound truths
                live in the simplest moments&mdash;in the pauses between conversations,
                in the way light falls across a room, in the space between two people
                sitting quietly together. Her poems don&apos;t ask to be loud. They ask
                to be felt.
              </p>

              <div className="py-8">
                <div className="border-l-2 border-blush/40 pl-8 py-4">
                  <blockquote className="font-serif text-2xl text-charcoal font-light italic leading-relaxed">
                    i write because
                    <br />
                    some things are too true
                    <br />
                    to say out loud&mdash;
                    <br />
                    so i give them
                    <br />
                    to the page instead
                  </blockquote>
                </div>
              </div>

              <p>
                She shares her poetry on Instagram, where her words have found a home
                with readers who see their own stories reflected in her verses. Each
                poem is an invitation&mdash;to pause, to feel, to recognize ourselves
                in someone else&apos;s truth.
              </p>

              <p>
                When she&apos;s not writing, Heather finds inspiration in the quiet
                rhythms of everyday life&mdash;the conversations that linger, the
                moments that catch you off guard, and the kind of love that doesn&apos;t
                need to announce itself.
              </p>
            </div>

            {/* Philosophy */}
            <div className="mt-20 pt-16 border-t border-stone/10">
              <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
                Philosophy
              </p>
              <h2 className="font-serif text-display-sm text-charcoal font-light mb-8">
                On Writing
              </h2>
              <div className="space-y-6 text-base leading-[1.9] text-stone">
                <p>
                  Poetry, for Heather, is an act of translation&mdash;taking the
                  things we feel but cannot say and giving them a form that others
                  can hold. It&apos;s the bridge between the internal and the shared,
                  between solitude and belonging.
                </p>
                <p>
                  Her work resists the pressure to be performative. Instead, she
                  writes toward honesty&mdash;the kind of honesty that feels like a
                  deep breath, like the first moment of understanding after a long
                  silence.
                </p>
              </div>
            </div>

            {/* HLPFL Partnership */}
            <div className="mt-20 pt-16 border-t border-stone/10">
              <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
                Made Possible By
              </p>
              <p className="text-base text-stone leading-[1.9] mb-6">
                This book and everything around it was made possible through a partnership
                with{' '}
                <a
                  href="https://hlpfl.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal border-b border-blush/40 hover:border-blush transition-colors duration-300"
                >
                  HLPFL
                </a>
                {' '}&mdash; a team that handles branding, web, legal, and strategy
                for independent creators. They helped turn a dream into something real.
              </p>
            </div>

            {/* Press */}
            <div className="mt-20 pt-16 border-t border-stone/10">
              <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
                Press & Media
              </p>
              <h2 className="font-serif text-display-sm text-charcoal font-light mb-8">
                As Seen In
              </h2>
              <p className="text-base text-stone leading-[1.9] mb-8">
                For press inquiries, interview requests, or review copies, please{' '}
                <Link
                  href="/contact"
                  className="text-charcoal border-b border-blush/40 hover:border-blush transition-colors duration-300"
                >
                  get in touch
                </Link>.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="h-16 bg-linen flex items-center justify-center">
                  <p className="text-xs text-stone/30 italic">Coming soon</p>
                </div>
                <div className="h-16 bg-linen flex items-center justify-center">
                  <p className="text-xs text-stone/30 italic">Coming soon</p>
                </div>
                <div className="h-16 bg-linen flex items-center justify-center">
                  <p className="text-xs text-stone/30 italic">Coming soon</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 pt-16 border-t border-stone/10 text-center md:text-left">
              <p className="font-serif text-2xl text-charcoal font-light mb-8">
                Read the collection
              </p>
              <Link href="/shop" className="btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
