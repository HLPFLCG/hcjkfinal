import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Heather Krystecki — poet, author, and mental health advocate. Her debut collection I See You, I See Me explores addiction, recovery, and the journey back to yourself.',
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
          {/* Sidebar - Author Photo */}
          <div className="md:col-span-2 relative">
            <div className="sticky top-32">
              <div className="aspect-[3/4] bg-linen relative overflow-hidden mb-8">
                <img
                  src="/images/heather-thailand.jpeg"
                  alt="Heather Krystecki in Thailand"
                  className="w-full h-full object-cover"
                  width={400}
                  height={533}
                />
                <div className="absolute inset-4 border border-cream/20" />
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
                Heather Krystecki is a poet and author whose debut collection,
                <em className="font-serif italic"> I See You, I See Me</em>,
                is a raw and unflinching look at her mental health journey through
                her 20s&mdash;the darkness, the addiction, the withdrawal, and
                ultimately, the recovery.
              </p>

              <p>
                This book is a collection of the darkest parts of her mind&mdash;the
                ebbs and flows of a mental health journey and the fight to come back
                to herself again. The themes include addiction, withdrawal, mental
                health, and recovery. By sharing these experiences, Heather hopes to
                release the feelings this journey brought up and show others that
                they aren&apos;t alone.
              </p>

              <p>
                There&apos;s still a stigma regarding mental health. It&apos;s hard for
                people to recognize what they cannot see, and mental health cannot
                always be seen. Heather believes in breaking that stigma through
                honesty and vulnerability&mdash;through putting the words on the
                page that so many are afraid to say out loud.
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
                She shares her poetry on Instagram, where her words have found a
                home with readers who see their own stories reflected in her verses.
                Each poem is an invitation&mdash;to pause, to feel, to recognize
                that recovery is not linear and that asking for help is not weakness.
              </p>

              <p>
                The butterfly on the cover of the book was hand-painted by Heather
                herself&mdash;a symbol of transformation, of emerging from the darkest
                places and finding beauty on the other side. Every part of this book
                is deeply personal, from the words to the artwork.
              </p>

              <p>
                When she&apos;s not writing, Heather finds inspiration in travel and
                new experiences&mdash;the kind of moments that remind you the world
                is bigger than your pain and that there is always something worth
                coming back to.
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
                  Poetry, for Heather, is an act of survival&mdash;taking the things
                  we carry silently and giving them a form that others can recognize
                  in themselves. It&apos;s the bridge between isolation and connection,
                  between suffering alone and knowing someone else understands.
                </p>
                <p>
                  Her work doesn&apos;t try to be polished or performative. It&apos;s raw,
                  honest, and real&mdash;the kind of honesty that comes from having
                  lived through something and deciding to share it so that others
                  don&apos;t have to face it alone.
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

            {/* As Seen In */}
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
                <div className="h-20 border border-stone/10 rounded flex flex-col items-center justify-center">
                  <p className="font-serif text-xl text-charcoal font-light italic">The River</p>
                  <p className="text-[9px] tracking-super-wide uppercase text-stone/40 mt-1">Published Poet</p>
                </div>
                <div className="h-20 bg-linen flex items-center justify-center">
                  <p className="text-xs text-stone/30 italic">More coming soon</p>
                </div>
                <div className="h-20 bg-linen flex items-center justify-center">
                  <p className="text-xs text-stone/30 italic">More coming soon</p>
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
