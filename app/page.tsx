import Link from "next/link"
import type { Metadata } from "next"
import { InstagramEmbed } from "@/components/instagram-embed"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ScrollReveal } from "@/components/scroll-reveal"
import { getFeaturedBlogPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"

export const metadata: Metadata = {
  title: 'Heather Krystecki — Raw Poetry About Love, Loss & Self-Discovery',
  description:
    'Discover the emotional, healing poetry of Heather Krystecki. Read poems from I See You, I See Me — a modern poetry collection exploring mental health, love, and the courage of being truly seen.',
  alternates: { canonical: 'https://hcjk.org/' },
}

export default function Home() {
  const recentPosts = getFeaturedBlogPosts(2)

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
          A journey through love, loss, and the quiet courage of being truly seen.
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

      {/* Featured Poem */}
      <section className="py-30 md:py-40 px-8 bg-linen relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-blush/20" />
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto text-center">
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12">
              From the Collection
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed poetry-text">
              in the quiet between us
              <br />
              i found the words
              <br />
              i had been searching for&mdash;
              <br />
              the ones that sound like home
            </blockquote>
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-12">
                    <p className="font-serif text-4xl md:text-5xl font-light text-charcoal/10 leading-tight italic">
                      &ldquo;some things
                      <br />
                      are too true
                      <br />
                      to say out loud&rdquo;
                    </p>
                  </div>
                </div>
                <div className="absolute inset-4 border border-blush/20" />
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
                Heather writes about the spaces between people&mdash;the tender,
                unspoken moments where we truly see one another. Her raw, emotional
                poetry traces the contours of love, vulnerability, mental health,
                and the quiet revelations that emerge when we let ourselves be known.
              </p>
              <p className="text-base text-stone leading-relaxed mb-10">
                Through spare, honest language, she invites readers into the
                intimate geography of human connection and self-discovery.
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
                  src="/images/Image.jpeg"
                  alt="I See You, I See Me by Heather Krystecki — front cover"
                  className="w-64 md:w-72 shadow-2xl book-cover-hover"
                  width={288}
                  height={432}
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
                A poetry collection about the act of truly seeing&mdash;others,
                ourselves, and the quiet revelations that emerge when we
                let ourselves be known.
              </p>
              <p className="text-base text-cream/60 leading-relaxed mb-10">
                These poems move through love, solitude, healing, and the
                small sacred moments that make up a life.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/shop"
                  className="inline-block py-4 px-12 text-[11px] tracking-super-wide uppercase border border-cream/30 text-cream hover:bg-cream hover:text-charcoal transition-all duration-400"
                >
                  Get Your Copy
                </Link>
                <span className="text-[10px] tracking-wide text-cream/30 self-center">
                  Barnes &amp; Noble &middot; Amazon &middot; Direct
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Second Poem */}
      <section className="py-30 md:py-40 px-8">
        <ScrollReveal>
          <div className="max-w-prose-narrow mx-auto text-center">
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
            <div className="divider mx-auto mt-12 mb-8" />
            <p className="text-[10px] tracking-super-wide uppercase text-stone/50">
              From &ldquo;I See You, I See Me&rdquo;
            </p>
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
            Explore a growing collection of poems — from the pages of the book and beyond.
          </p>
          <Link href="/poems" className="btn-primary">
            Browse Poems
          </Link>
        </ScrollReveal>
      </section>

      {/* Latest from the Journal */}
      {recentPosts.length > 0 && (
        <section className="py-26 md:py-30 px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
                From the Journal
              </p>
              <h2 className="font-serif text-display-sm text-charcoal font-light mb-16">
                Recent reflections
              </h2>
              <div className="grid md:grid-cols-2 gap-16 text-left">
                {recentPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              <div className="mt-16">
                <Link href="/blog" className="btn-secondary">
                  Read the Journal
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

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
              Let the words find you.
            </p>
            <div className="divider mx-auto mb-10" />
            <Link href="/shop" className="btn-secondary">
              Order Now
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </article>
  )
}
