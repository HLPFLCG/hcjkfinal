import type { Metadata } from 'next'
import Link from 'next/link'
import type { AuthorEvent } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Events & Readings',
  description:
    'Find upcoming readings, book signings, and appearances by poet Heather Krystecki, author of I See You, I See Me.',
  alternates: { canonical: 'https://hcjk.org/events/' },
}

// ============================================
// Edit the events array below to add, remove,
// or update events. Newest first.
// ============================================
const events: AuthorEvent[] = [
  // {
  //   date: '2026-03-15',
  //   title: 'Book Signing',
  //   location: 'Your Local Bookshop',
  //   description: 'Meet the author and get your copy signed.',
  //   link: '',
  // },
]

function isUpcoming(date: string): boolean {
  return new Date(date + 'T23:59:59') >= new Date()
}

function formatDate(date: string): string {
  return new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function EventsPage() {
  const upcoming = events.filter((e) => isUpcoming(e.date))
  const past = events.filter((e) => !isUpcoming(e.date))

  return (
    <article>
      <div className="h-24" />

      {/* Hero */}
      <section className="pt-20 md:pt-30 pb-16 px-8 text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8 animate-fade-up">
          Readings & Appearances
        </p>
        <h1 className="font-serif text-display text-charcoal font-light animate-fade-up-delay-1">
          Events
        </h1>
        <div className="divider mx-auto mt-10 animate-fade-up-delay-2" />
      </section>

      {/* Upcoming Events */}
      <section className="pb-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-10">
            Upcoming
          </h2>

          {upcoming.length === 0 ? (
            <div className="py-16 text-center border border-stone/10 rounded">
              <p className="font-serif text-2xl text-charcoal/30 font-light italic mb-4">
                No upcoming events scheduled
              </p>
              <p className="text-sm text-stone/50">
                Follow{' '}
                <a
                  href="https://www.instagram.com/hcjk_collection/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blush hover:text-charcoal transition-colors"
                >
                  @hcjk_collection
                </a>{' '}
                for announcements
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {upcoming.map((event, i) => (
                <div key={i} className="border-l-2 border-blush/40 pl-8 py-2">
                  <time className="text-[10px] tracking-super-wide uppercase text-stone/50 block mb-2">
                    {formatDate(event.date)}
                  </time>
                  <h3 className="font-serif text-2xl text-charcoal font-light mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-stone mb-1">{event.location}</p>
                  <p className="text-sm text-stone/60 leading-relaxed">{event.description}</p>
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary mt-4 inline-block"
                    >
                      Details
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {past.length > 0 && (
        <section className="pb-20 px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-10">
              Past Events
            </h2>
            <div className="space-y-6 opacity-60">
              {past.map((event, i) => (
                <div key={i} className="pl-8 py-2">
                  <time className="text-[10px] tracking-super-wide uppercase text-stone/50 block mb-1">
                    {formatDate(event.date)}
                  </time>
                  <h3 className="font-serif text-xl text-charcoal font-light">
                    {event.title}
                  </h3>
                  <p className="text-sm text-stone">{event.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Invite CTA */}
      <section className="py-26 md:py-30 px-8 bg-linen text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8">
          Book a Reading
        </p>
        <h2 className="font-serif text-display-sm text-charcoal font-light mb-6">
          Invite Heather to your event
        </h2>
        <p className="text-sm text-stone max-w-md mx-auto mb-10 leading-relaxed">
          Available for readings, book signings, book club visits, workshops, and speaking
          engagements. In person or virtual.
        </p>
        <Link href="/contact/" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </article>
  )
}
