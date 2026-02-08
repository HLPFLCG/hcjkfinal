import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <article>
      <div className="h-24" />

      <section className="min-h-[70vh] flex flex-col items-center justify-center px-8 text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-10">
          Page Not Found
        </p>

        <h1 className="font-serif text-display text-charcoal font-light mb-8">
          Lost in the pages
        </h1>

        <div className="divider mx-auto mb-10" />

        <blockquote className="font-serif text-xl md:text-2xl text-stone font-light italic max-w-md leading-relaxed mb-16">
          some paths lead us
          <br />
          to unexpected places&mdash;
          <br />
          but this one leads
          <br />
          back home
        </blockquote>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <Link href="/poems" className="btn-secondary">
            Read the Poems
          </Link>
        </div>
      </section>
    </article>
  )
}
