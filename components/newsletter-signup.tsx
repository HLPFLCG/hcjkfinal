'use client'

import { useState } from 'react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    // TODO: Replace NEWSLETTER_FORM_ID with actual Formspree form ID
    // Create a new form at https://formspree.io for newsletter signups
    try {
      const response = await fetch('https://formspree.io/f/xblqjywk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _subject: 'New Newsletter Signup' }),
      })
      if (response.ok) {
        setSubmitted(true)
      }
    } catch {
      // Silently handle — form will just not submit
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-6 animate-fade-up">
        <p className="font-serif text-2xl text-charcoal font-light">Thank you</p>
        <p className="text-sm text-stone mt-3">You&apos;ll hear from me soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.com"
        className="flex-1 bg-transparent border-b border-stone/20 px-0 py-3 text-charcoal text-base focus:border-blush focus:outline-none transition-colors duration-500 placeholder:text-stone/30"
      />
      <button
        type="submit"
        disabled={sending}
        className={`btn-primary whitespace-nowrap ${sending ? 'opacity-40 cursor-not-allowed' : ''}`}
      >
        {sending ? 'Joining...' : 'Join'}
      </button>
    </form>
  )
}
