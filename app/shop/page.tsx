import Link from "next/link"
import type { Metadata } from "next"
import { getBookSchema } from "@/lib/structured-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ShareButtons } from "@/components/share-buttons"

export const metadata: Metadata = {
  title: 'Shop — Buy I See You, I See Me',
  description:
    'Order I See You, I See Me by Heather Krystecki — a raw, emotional poetry collection about love, loss, healing, mental health, and self-discovery. Available on Barnes & Noble, Amazon, and direct from the author.',
  alternates: { canonical: 'https://hcjk.org/shop/' },
}

const praise = [
  {
    quote: 'A collection that wraps around you like a conversation you didn\'t know you needed.',
    source: 'Early Reader',
  },
  {
    quote: 'Raw, honest, and deeply human. These poems made me feel less alone.',
    source: 'Reader Review',
  },
  {
    quote: 'The kind of poetry that makes you stop scrolling and start feeling.',
    source: 'Instagram Reader',
  },
]

export default function ShopPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBookSchema()) }}
      />

      <div className="h-24" />

      {/* Hero */}
      <section className="pt-20 md:pt-30 pb-16 px-8 text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8 animate-fade-up">
          The Collection
        </p>
        <h1 className="font-serif text-display text-charcoal font-light animate-fade-up-delay-1">
          Shop
        </h1>
        <div className="divider mx-auto mt-10 animate-fade-up-delay-2" />
      </section>

      {/* Book Feature - Front Cover */}
      <section className="pb-30 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Book Covers */}
          <div className="flex flex-col items-center gap-12">
            {/* Front Cover */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -bottom-6 left-6 right-6 h-12 bg-charcoal/10 blur-2xl" />
                <img
                  src="/images/Image.jpeg"
                  alt="I See You, I See Me by Heather Krystecki — front cover featuring butterfly with lips artwork"
                  className="w-72 md:w-80 shadow-xl book-cover-hover"
                  width={320}
                  height={480}
                />
              </div>
            </ScrollReveal>
            {/* Back Cover */}
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -bottom-6 left-6 right-6 h-12 bg-charcoal/10 blur-2xl" />
                <img
                  src="/images/Image 1.jpeg"
                  alt="I See You, I See Me — back cover with poem about the mental health journey"
                  className="w-72 md:w-80 shadow-xl book-cover-hover"
                  width={320}
                  height={480}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Book Details */}
          <div className="space-y-8">
            <div>
              <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-4">
                Debut Collection
              </p>
              <h2 className="font-serif text-display-sm text-charcoal font-light mb-2">
                I See You, I See Me
              </h2>
              <p className="text-sm text-stone italic font-serif">
                by Heather Krystecki
              </p>
            </div>

            <div className="w-12 h-px bg-blush/40" />

            <div className="space-y-5 text-base leading-[1.9] text-stone">
              <p>
                A poetry collection about the act of truly seeing&mdash;others,
                ourselves, and the quiet revelations that emerge when we
                let ourselves be known.
              </p>
              <p>
                These poems move through love, solitude, healing, and the
                small sacred moments that make up a life. They are written
                for anyone who has ever felt the weight of being understood&mdash;
                and the freedom that comes with it.
              </p>
            </div>

            <div className="w-12 h-px bg-blush/40" />

            {/* Purchase Section */}
            <div className="space-y-4 pt-2">
              <p className="text-[10px] tracking-super-wide uppercase text-stone/40 mb-2">
                Where to Buy
              </p>

              <a
                href="https://shop.ingramspark.com/b/084?params=kBRanDfjtJKc122qtFtur05F8OXdx9W6V9fExyG0QHw"
                className="btn-primary block text-center w-full"
                aria-label="Buy direct from the author"
              >
                Buy Direct from Author
              </a>

              <a
                href="https://www.barnesandnoble.com/w/i-see-you-i-see-me-heather-krystecki/1149164117"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Buy on Barnes &amp; Noble
              </a>

              <a
                href="#"
                className="btn-outline"
                aria-label="Buy on Amazon (coming soon)"
              >
                Buy on Amazon
              </a>

              <p className="text-xs text-stone/40 text-center mt-4 italic">
                Buy direct to support the author at the best price
              </p>
            </div>

            {/* Book details */}
            <div className="pt-6 border-t border-stone/10">
              <dl className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <dt className="text-[10px] tracking-widest-plus uppercase text-stone/40 mb-1">
                    Format
                  </dt>
                  <dd className="text-sm text-charcoal">Paperback</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-widest-plus uppercase text-stone/40 mb-1">
                    Genre
                  </dt>
                  <dd className="text-sm text-charcoal">Poetry</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-widest-plus uppercase text-stone/40 mb-1">
                    Publisher
                  </dt>
                  <dd className="text-sm text-charcoal">Self-published</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-widest-plus uppercase text-stone/40 mb-1">
                    ISBN
                  </dt>
                  <dd className="text-sm text-charcoal">979-8-2954-8091-1</dd>
                </div>
              </dl>
            </div>

            {/* Share the book */}
            <div className="pt-6 border-t border-stone/10">
              <p className="text-[10px] tracking-super-wide uppercase text-stone/40 mb-4">
                Know someone who&apos;d love this?
              </p>
              <ShareButtons
                title="I See You, I See Me — by Heather Krystecki"
                url="/shop/"
                text="A raw, emotional poetry collection about love, loss, and the quiet courage of being truly seen."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Praise */}
      <section className="py-26 md:py-30 px-8 bg-linen">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12">
              What Readers Are Saying
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {praise.map((item, i) => (
                <div key={i} className="space-y-6">
                  <blockquote className="font-serif text-lg text-charcoal font-light italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <p className="text-[10px] tracking-super-wide uppercase text-stone/40">
                    &mdash; {item.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Poem */}
      <section className="py-30 md:py-40 px-8">
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto text-center">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12">
              A Poem from the Collection
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed poetry-text">
              you asked me
              <br />
              what i was looking for
              <br />
              and i said&mdash;someone
              <br />
              who makes the silence
              <br />
              feel like enough
            </blockquote>
            <div className="divider mx-auto mt-12" />
          </div>
        </ScrollReveal>
      </section>

      {/* Who is this book for */}
      <section className="py-30 md:py-40 px-8 bg-linen">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12">
              For the Reader
            </p>
            <h2 className="font-serif text-display-sm text-charcoal font-light mb-12">
              Who is this book for?
            </h2>
            <div className="grid md:grid-cols-3 gap-12 md:gap-8 text-left">
              <div className="space-y-4">
                <div className="w-8 h-px bg-blush" />
                <p className="text-base text-stone leading-relaxed">
                  For anyone who has loved quietly and deeply&mdash;who knows that
                  the most powerful moments often happen in silence.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-8 h-px bg-blush" />
                <p className="text-base text-stone leading-relaxed">
                  For those on a journey of self-discovery&mdash;who are learning
                  that seeing yourself clearly is the bravest thing you can do.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-8 h-px bg-blush" />
                <p className="text-base text-stone leading-relaxed">
                  For readers who believe that poetry should feel like a
                  conversation&mdash;intimate, honest, and true.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gift Section */}
      <section className="py-26 md:py-30 px-8 text-center">
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
              The Perfect Gift
            </p>
            <h2 className="font-serif text-display-sm text-charcoal font-light mb-6">
              Gift this book
            </h2>
            <p className="text-base text-stone leading-relaxed mb-10">
              For someone who needs to hear they&apos;re not alone. For a friend
              going through it. For the person who feels everything deeply.
              This book was written for them.
            </p>
            <a
              href="https://shop.ingramspark.com/b/084?params=kBRanDfjtJKc122qtFtur05F8OXdx9W6V9fExyG0QHw"
              className="btn-primary"
            >
              Order as a Gift
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Book Club CTA */}
      <section className="py-20 px-8 bg-linen text-center">
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-6">
              For Reading Groups
            </p>
            <h2 className="font-serif text-2xl text-charcoal font-light mb-4">
              Reading with a group?
            </h2>
            <p className="text-sm text-stone leading-relaxed mb-8">
              Download the free discussion guide with 12 conversation starters
              for your book club, reading group, or classroom.
            </p>
            <Link href="/book-club" className="btn-secondary">
              Book Club Guide
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="py-26 px-8 bg-charcoal text-cream text-center">
        <div className="max-w-prose-narrow mx-auto">
          <p className="font-serif text-display-sm font-light mb-4">
            Begin the journey
          </p>
          <p className="text-sm text-cream/50 mb-10">
            Available worldwide on Barnes &amp; Noble, Amazon, and direct from the author
          </p>
          <a
            href="https://www.barnesandnoble.com/w/i-see-you-i-see-me-heather-krystecki/1149164117"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-4 px-12 text-[11px] tracking-super-wide uppercase border border-cream/30 text-cream hover:bg-cream hover:text-charcoal transition-all duration-400"
          >
            Order Your Copy
          </a>
        </div>
      </section>
    </article>
  )
}
