import Link from 'next/link'
import type { PoemEntry } from '@/lib/poems'

export function PoemCard({ poem }: { poem: PoemEntry }) {
  const lines = poem.content.split('\n').filter((l) => l.trim())
  const preview = lines.slice(0, 4).join(' / ')

  return (
    <article className="group text-center">
      <Link href={`/poems/${poem.slug}/`} className="block py-10 px-6 border border-transparent hover:border-blush/20 transition-all duration-500">
        <h3 className="font-serif text-xl md:text-2xl text-charcoal font-light italic mb-4 group-hover:text-blush transition-colors duration-300">
          {poem.title}
        </h3>
        <p className="text-sm text-stone/60 leading-relaxed italic">
          {preview}{lines.length > 4 ? ' ...' : ''}
        </p>
        {poem.collection && (
          <p className="text-[9px] tracking-super-wide uppercase text-stone/30 mt-6">
            From &ldquo;{poem.collection}&rdquo;
          </p>
        )}
      </Link>
    </article>
  )
}
