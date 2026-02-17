import Link from "next/link"
import type { Metadata } from "next"
import { getBookSchema } from "@/lib/structured-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ShareButtons } from "@/components/share-buttons"

export const metadata: Metadata = {
  title: 'Shop — Buy I See You, I See Me',
  description:
    'Order I See You, I See Me by Heather Krystecki — a poetry collection about mental health, addiction, and recovery. Available on Barnes & Noble and direct from the author.',
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
                This book is a collection of the darkest parts of my mind throughout
                my 20s. The ebbs and flows of my mental health journey and the journey
                to coming back to myself again. The themes include addiction, withdrawal,
                mental health, and recovery.
              </p>
              <p>
                By sharing this I can release the feelings this journey brought up to
                move on into my future. I hope this collection of poems shows others
                that they aren&apos;t alone. There&apos;s still a stigma regarding mental health.
                It&apos;s hard for people to recognize what they cannot see, and mental health
                cannot always be seen. I see you and I believe in you.
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
                text="A poetry collection about mental health, addiction, and recovery. I see you and I believe in you."
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

      {/* Available Worldwide */}
      <section className="py-30 md:py-40 px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
              Distributed by IngramSpark
            </p>
            <h2 className="font-serif text-display-sm text-charcoal font-light mb-6">
              Available Worldwide
            </h2>
            <p className="text-base text-stone leading-relaxed mb-16 max-w-prose-narrow mx-auto">
              Distributed through IngramSpark&apos;s global network, <em className="font-serif italic">I See You, I See Me</em> can
              be ordered from bookstores and online retailers across the globe.
            </p>

            {/* World Map - SVG */}
            <div className="relative max-w-3xl mx-auto mb-16">
              <svg viewBox="0 0 1000 500" className="w-full h-auto" aria-label="World map showing book availability">
                {/* Simplified world map paths - major continents highlighted */}
                <defs>
                  <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c4a7a3" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#c4a7a3" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                {/* North America */}
                <path d="M 120 80 Q 150 60 200 70 L 260 90 Q 280 120 270 160 L 250 200 Q 230 220 200 230 L 170 220 Q 140 200 130 170 L 120 130 Z" fill="url(#mapGrad)" stroke="#c4a7a3" strokeWidth="1" />
                {/* South America */}
                <path d="M 220 260 Q 240 250 260 260 L 280 300 Q 290 340 280 380 L 260 420 Q 240 440 230 420 L 210 360 Q 200 320 210 290 Z" fill="url(#mapGrad)" stroke="#c4a7a3" strokeWidth="1" />
                {/* Europe */}
                <path d="M 440 80 Q 470 70 510 80 L 530 100 Q 540 120 530 140 L 510 150 Q 480 160 460 150 L 440 130 Q 430 110 440 90 Z" fill="url(#mapGrad)" stroke="#c4a7a3" strokeWidth="1" />
                {/* Africa */}
                <path d="M 470 180 Q 500 170 530 180 L 540 220 Q 550 270 540 320 L 520 370 Q 500 390 490 370 L 470 310 Q 460 260 465 220 Z" fill="url(#mapGrad)" stroke="#c4a7a3" strokeWidth="1" />
                {/* Asia */}
                <path d="M 560 70 Q 620 50 700 60 L 770 80 Q 810 100 800 140 L 760 180 Q 720 200 670 190 L 620 170 Q 580 150 560 120 Z" fill="url(#mapGrad)" stroke="#c4a7a3" strokeWidth="1" />
                {/* Australia */}
                <path d="M 760 320 Q 790 310 830 320 L 860 340 Q 870 360 860 380 L 830 390 Q 800 400 780 380 L 760 360 Q 750 340 760 320 Z" fill="url(#mapGrad)" stroke="#c4a7a3" strokeWidth="1" />

                {/* Highlight dots for key distribution countries */}
                <circle cx="190" cy="140" r="6" fill="#c4a7a3" opacity="0.9"><title>United States</title></circle>
                <circle cx="160" cy="120" r="4" fill="#c4a7a3" opacity="0.7"><title>Canada</title></circle>
                <circle cx="480" cy="110" r="5" fill="#c4a7a3" opacity="0.8"><title>United Kingdom</title></circle>
                <circle cx="510" cy="120" r="4" fill="#c4a7a3" opacity="0.7"><title>Germany</title></circle>
                <circle cx="460" cy="130" r="4" fill="#c4a7a3" opacity="0.7"><title>France</title></circle>
                <circle cx="530" cy="115" r="3" fill="#c4a7a3" opacity="0.6"><title>Poland</title></circle>
                <circle cx="810" cy="350" r="5" fill="#c4a7a3" opacity="0.8"><title>Australia</title></circle>
                <circle cx="860" cy="360" r="3" fill="#c4a7a3" opacity="0.6"><title>New Zealand</title></circle>
                <circle cx="680" cy="160" r="4" fill="#c4a7a3" opacity="0.7"><title>India</title></circle>
                <circle cx="240" cy="280" r="4" fill="#c4a7a3" opacity="0.7"><title>Brazil</title></circle>
                <circle cx="500" cy="220" r="3" fill="#c4a7a3" opacity="0.6"><title>South Africa</title></circle>
                <circle cx="760" cy="130" r="4" fill="#c4a7a3" opacity="0.7"><title>Japan</title></circle>
              </svg>
            </div>

            {/* Country Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                'United States', 'Canada', 'United Kingdom', 'Australia',
                'Germany', 'France', 'India', 'Brazil',
                'Japan', 'South Africa', 'New Zealand', 'Poland',
              ].map((country) => (
                <div key={country} className="text-center py-3 px-4 border border-stone/10 rounded">
                  <p className="text-sm text-charcoal">{country}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone/40 mt-8 italic">
              And 30+ additional countries through IngramSpark&apos;s global distribution network
            </p>
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
              baby steps
              <br />
              one foot forward
              <br />
              then the other&mdash;
              <br />
              some days that&apos;s enough
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
                  For anyone who has struggled with mental health&mdash;who knows
                  the weight of carrying something invisible and wants to feel seen.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-8 h-px bg-blush" />
                <p className="text-base text-stone leading-relaxed">
                  For those on a journey of recovery&mdash;who are finding their
                  way back to themselves and need to know they aren&apos;t alone.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-8 h-px bg-blush" />
                <p className="text-base text-stone leading-relaxed">
                  For readers who believe poetry can heal&mdash;that raw, honest
                  words have the power to break stigma and build connection.
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
            Available worldwide on Barnes &amp; Noble and direct from the author
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
