import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book Club Discussion Guide',
  description:
    'Discussion questions and conversation starters for I See You, I See Me by Heather Krystecki. Perfect for book clubs, reading groups, and classrooms.',
  alternates: { canonical: 'https://hcjk.org/book-club/' },
}

const questions = [
  'What does the title "I See You, I See Me" mean to you? How did your understanding of it change as you read?',
  'Which poem resonated with you the most, and why?',
  'How does Heather use everyday imagery to explore complex emotions? Can you point to specific examples?',
  'The collection moves through themes of love, loss, and self-discovery. Did you notice a progression or arc throughout the book?',
  'Many of the poems deal with mental health openly. How does poetry as a form create space for these conversations?',
  'The back cover reads: "This book holds the journey through my own mental health crisis." How does knowing this context shape the way you read the poems?',
  'Which poem would you share with someone who is struggling? Why that one?',
  'How does the use of lowercase and minimal punctuation affect the way you read and feel the poems?',
  'Are there poems that feel like they could be prayers, letters, or conversations? Which ones?',
  'The collection ends with a sense of hope and resilience. How does the final poem tie back to the beginning?',
  'If you could ask the poet one question, what would it be?',
  'Has this collection changed the way you think about vulnerability or self-expression?',
]

const themes = [
  { title: 'Mental Health & Healing', description: 'How the poems navigate darkness and the path toward light' },
  { title: 'Love & Connection', description: 'The quiet intimacy between people — what it means to truly see someone' },
  { title: 'Identity & Self-Discovery', description: 'Finding yourself through writing, through pain, through honesty' },
  { title: 'Vulnerability as Strength', description: 'Why sharing the hard things matters' },
]

export default function BookClubPage() {
  return (
    <article>
      <div className="h-24" />

      {/* Hero */}
      <section className="pt-20 md:pt-30 pb-16 px-8 text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8 animate-fade-up">
          For Reading Groups
        </p>
        <h1 className="font-serif text-display text-charcoal font-light animate-fade-up-delay-1">
          Book Club Guide
        </h1>
        <div className="divider mx-auto mt-10 animate-fade-up-delay-2" />
        <p className="font-serif text-xl text-stone font-light italic max-w-lg mx-auto mt-10 animate-fade-up-delay-2">
          Discussion questions and themes for <em>I See You, I See Me</em>
        </p>
      </section>

      {/* Introduction */}
      <section className="pb-20 px-8">
        <div className="max-w-prose-wide mx-auto">
          <p className="text-base text-stone leading-relaxed mb-6">
            Thank you for choosing <em className="font-serif italic">I See You, I See Me</em> for
            your book club, reading group, or classroom. These questions are designed to spark
            meaningful conversations about the themes in the collection — mental health, love,
            identity, and the courage it takes to be truly seen.
          </p>
          <p className="text-base text-stone leading-relaxed">
            There are no right or wrong answers. Take what resonates and leave the rest. The most
            important thing is that you feel safe enough to be honest.
          </p>
        </div>
      </section>

      {/* Discussion Questions */}
      <section className="py-26 md:py-30 px-8 bg-linen">
        <div className="max-w-prose-wide mx-auto">
          <h2 className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12 text-center">
            Discussion Questions
          </h2>
          <ol className="space-y-8">
            {questions.map((q, i) => (
              <li key={i} className="flex gap-6">
                <span className="font-serif text-3xl text-blush/40 font-light flex-shrink-0 w-8 text-right">
                  {i + 1}
                </span>
                <p className="text-base text-charcoal leading-relaxed pt-2">{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Themes to Explore */}
      <section className="py-26 md:py-30 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-12 text-center">
            Themes to Explore
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {themes.map((theme, i) => (
              <div key={i} className="border-l-2 border-blush/30 pl-8">
                <h3 className="font-serif text-xl text-charcoal font-light mb-3">
                  {theme.title}
                </h3>
                <p className="text-sm text-stone leading-relaxed">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="py-26 md:py-30 px-8 bg-charcoal text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-cream/30 mb-8">
          Share Your Discussion
        </p>
        <h2 className="font-serif text-display-sm text-cream font-light mb-6">
          I&apos;d love to hear from your group
        </h2>
        <p className="text-sm text-cream/50 max-w-md mx-auto mb-10 leading-relaxed">
          Tag <span className="text-cream/70">@hcjk_collection</span> on Instagram or reach out
          directly. Book club visits (virtual or in person) are always welcome.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/hcjk_collection/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary border-cream/30 text-cream hover:bg-cream hover:text-charcoal"
          >
            Follow on Instagram
          </a>
          <Link
            href="/contact/"
            className="btn-primary border-cream/30 text-cream hover:bg-cream hover:text-charcoal"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-26 md:py-30 px-8 text-center">
        <h2 className="font-serif text-display-sm text-charcoal font-light mb-6">
          Need copies for your group?
        </h2>
        <Link href="/shop/" className="btn-primary">
          Order the Book
        </Link>
      </section>
    </article>
  )
}
