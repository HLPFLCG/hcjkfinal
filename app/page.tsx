import Link from "next/link"
import type { Metadata } from "next"
import { InstagramEmbed } from "@/components/instagram-embed"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AMAZON_URL } from "@/lib/metadata"

export const metadata: Metadata = {
  title: 'Heather Krystecki — Poetry About Mental Health, Addiction & Recovery',
  description:
    'Discover the poetry of Heather Krystecki. Read poems from I See You, I See Me — a collection exploring mental health crises, addiction, and the journey of recovery.',
  alternates: { canonical: 'https://hcjk.org/' },
}

export default function Home() {
  return (
    <article>
      {/* Hero - Full viewport cinematic intro */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center relative">
        {/* Decorative floating lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-8 md:left-16 w-px h-32 bg-gradient-to-b from-transparent via-blush/30 to-transparent animate-float-slow" />
          <div className="absolute bottom-1/4 right-8 md:right-16 w-px h-32 bg-gradient-to-b from-transparent via-blush/30 to-transparent animate-float" />
          <div className="hidden md:block absolute top-1/3 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-blush/15 to-transparent animate-float-slow" />
        </div>

        <div className="animate-fade-up">
          <p className="text-[10px] tracking-super-wide uppercase text-stone mb-10">
            A Poetry Collection by Heather Krystecki
          </p>
        </div>

        <h1 className="font-serif text-display-lg text-charcoal font-light animate-fade-up-delay-1">
          I See You,
          <br />
          <em className="italic">I See Me</em>
        </h1>

        <div className="animate-fade-up-delay-2 mt-12 mb-12">
          <div className="divider mx-auto" />
        </div>

        <p className="font-serif text-xl md:text-2xl text-stone font-light italic max-w-md animate-fade-up-delay-2">
          A journey through mental health crises, addiction, and recovery.
        </p>

        <div className="animate-fade-up-delay-3 mt-14">
          <Link href="/shop" className="btn-primary">
            Order the Book
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in-slow">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] tracking-super-wide uppercase text-stone/40">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-stone/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Poem - Baby Steps */}
      <section className="py-30 md:py-40 px-8 bg-linen relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-blush/20" />
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto text-center">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12">
              From the Collection
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed poetry-text">
              baby steps
              <br />
              one foot forward
              <br />
              then the other&mdash;
              <br />
              some days that&apos;s enough
            </blockquote>
            <p className="text-[10px] tracking-super-wide uppercase text-stone/40 mt-8">
              &mdash; &ldquo;Baby Steps&rdquo;
            </p>
            <div className="divider mx-auto mt-12" />
          </div>
        </ScrollReveal>
      </section>

      {/* About the Poet */}
      <section className="py-30 md:py-40 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[3/4] bg-linen relative overflow-hidden">
                <img
                  src="/images/heather-krystecki.webp"
                  alt="Heather Krystecki in Thailand"
                  className="w-full h-full object-cover"
                  width={400}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-4 border border-cream/20" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div>
              <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
                About the Poet
              </p>
              <h2 className="font-serif text-display-sm text-charcoal font-light mb-8">
                Heather Krystecki
              </h2>
              <p className="text-base text-stone leading-relaxed mb-6">
                Heather is a poet and author whose debut collection explores the
                raw realities of mental health, addiction, and recovery. Her writing
                captures the darkest and most honest parts of her journey through
                her 20s&mdash;and the fight to come back to herself.
              </p>
              <p className="text-base text-stone leading-relaxed mb-10">
                She believes that sharing these experiences openly can break the
                stigma around mental health and show others they aren&apos;t alone.
              </p>
              <Link href="/about" className="btn-secondary">
                Read Her Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Book Showcase - with real cover */}
      <section className="py-30 md:py-40 px-8 bg-charcoal text-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <ScrollReveal>
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 blur-xl" />
                <img
                  src="/images/front-cover.webp"
                  alt="I See You, I See Me by Heather Krystecki — front cover"
                  className="w-64 md:w-72 shadow-2xl book-cover-hover"
                  width={288}
                  height={432}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <p className="text-[10px] tracking-super-wide uppercase text-cream/30 mb-8">
                The Debut Collection
              </p>
              <h2 className="font-serif text-display-sm font-light mb-8">
                Now Available Worldwide
              </h2>
              <p className="text-base text-cream/60 leading-relaxed mb-6">
                This book is a collection of the darkest parts of my mind throughout
                my 20s. The themes include addiction, withdrawal, mental health,
                and recovery.
              </p>
              <p className="text-base text-cream/60 leading-relaxed mb-10">
                I hope this collection shows others that they aren&apos;t alone.
                I see you and I believe in you.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 flex-wrap">
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-4 px-12 text-[11px] tracking-super-wide uppercase border border-cream/30 text-cream hover:bg-cream hover:text-charcoal transition-all duration-400"
                >
                  Buy on Amazon
                </a>
                <Link
                  href="/shop"
                  className="inline-block py-4 px-8 text-[11px] tracking-super-wide uppercase border border-cream/10 text-cream/60 hover:border-cream/30 hover:text-cream transition-all duration-400"
                >
                  All Options
                </Link>
              </div>
              <p className="text-[10px] tracking-wide text-cream/30 mt-2">
                Also on Barnes &amp; Noble &middot; Direct from Author
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hand-Painted Butterfly Cover Art */}
      <section className="py-30 md:py-40 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <ScrollReveal direction="right" delay={200}>
            <div>
              <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
                The Cover Art
              </p>
              <h2 className="font-serif text-display-sm text-charcoal font-light mb-8">
                Hand-Painted by the Author
              </h2>
              <p className="text-base text-stone leading-relaxed mb-6">
                The butterfly on the cover of <em className="font-serif italic">I See You, I See Me</em> was
                hand-painted by Heather herself. It represents transformation&mdash;the
                metamorphosis that comes from facing your darkest moments and emerging
                on the other side.
              </p>
              <p className="text-base text-stone leading-relaxed mb-6">
                Every detail of this book is personal. From the poems to the
                artwork, it was created with the intention of being completely
                authentic and real&mdash;just like the journey it represents.
              </p>
              <p className="text-base text-stone leading-relaxed">
                The butterfly symbolizes the beauty that can come from struggle,
                the strength found in vulnerability, and the possibility of
                starting over.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute -bottom-4 left-4 right-4 h-8 bg-charcoal/5 blur-xl" />
                <img
                  src="/images/front-cover.webp"
                  alt="Hand-painted butterfly artwork on the cover of I See You, I See Me"
                  className="w-64 md:w-72 shadow-xl book-cover-hover"
                  width={288}
                  height={432}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Second Poem - Functional */}
      <section className="py-30 md:py-40 px-8 bg-linen">
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed poetry-text">
              i learned to call it
              <br />
              functional&mdash;
              <br />
              as if surviving
              <br />
              and living
              <br />
              were the same thing
            </blockquote>
            <div className="divider mx-auto mt-12 mb-8" />
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50">
              &mdash; &ldquo;Functional&rdquo; from <em className="font-serif normal-case text-xs text-stone/40">I See You, I See Me</em>
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* As Seen In */}
      <section className="py-26 md:py-30 px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12">
              As Seen In
            </p>
            <div className="flex items-center justify-center gap-12 md:gap-20">
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-charcoal font-light italic">
                  The River
                </p>
                <p className="text-[10px] tracking-super-wide uppercase text-stone/40 mt-2">
                  Published Poet
                </p>
              </div>
            </div>
            <div className="divider mx-auto mt-12" />
          </div>
        </ScrollReveal>
      </section>

      {/* Read the Poems */}
      <section className="py-26 md:py-30 px-8 bg-linen text-center">
        <ScrollReveal>
          <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
            The Archive
          </p>
          <h2 className="font-serif text-display-sm text-charcoal font-light mb-6">
            Read the poems
          </h2>
          <p className="text-base text-stone leading-relaxed mb-10 max-w-prose-narrow mx-auto">
            Explore poems from the collection&mdash;raw, honest words about addiction, mental health, and finding yourself again.
          </p>
          <Link href="/poems" className="btn-primary">
            Browse Poems
          </Link>
        </ScrollReveal>
      </section>

      {/* Third Poem - Sunrise */}
      <section className="py-30 md:py-40 px-8">
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed poetry-text">
              the sunrise doesn&apos;t ask
              <br />
              if you&apos;re ready&mdash;
              <br />
              it just comes
              <br />
              and so does healing
            </blockquote>
            <div className="divider mx-auto mt-12 mb-8" />
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50">
              &mdash; &ldquo;Sunrise&rdquo; from <em className="font-serif normal-case text-xs text-stone/40">I See You, I See Me</em>
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Instagram Feed */}
      <section className="py-26 md:py-30 px-8 bg-linen">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
              Follow the Journey
            </p>
            <h2 className="font-serif text-display-sm text-charcoal font-light mb-6">
              New poems weekly
            </h2>
            <p className="text-base text-stone leading-relaxed mb-12 max-w-prose-narrow mx-auto">
              Follow along on Instagram for new poetry, behind-the-scenes moments,
              and the words that didn&apos;t make it into the book.
            </p>

            <InstagramEmbed
              postUrls={[
                'https://www.instagram.com/hcjk_collection/',
                'https://www.instagram.com/hcjk_collection/',
                'https://www.instagram.com/hcjk_collection/',
              ]}
            />

            <div className="mt-12">
              <a
                href="https://www.instagram.com/hcjk_collection/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                @hcjk_collection on Instagram
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Newsletter */}
      <section className="py-26 md:py-30 px-8">
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto text-center">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
              Stay Connected
            </p>
            <h2 className="font-serif text-display-sm text-charcoal font-light mb-6">
              New words, delivered
            </h2>
            <p className="text-base text-stone leading-relaxed mb-10">
              Join the mailing list for new poems, updates on upcoming projects,
              and the occasional letter from Heather.
            </p>
            <NewsletterSignup />
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="py-30 md:py-40 px-8 text-center">
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto">
            <p className="font-serif text-display text-charcoal font-light mb-6">
              I see you and I believe in you.
            </p>
            <div className="divider mx-auto mb-10" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Order on Amazon
              </a>
              <Link href="/shop" className="btn-secondary">
                All Purchase Options
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </article>
  )
}
