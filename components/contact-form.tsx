"use client"

import { useForm, ValidationError } from '@formspree/react'

export function ContactForm() {
  const [state, handleSubmit] = useForm("xblqjywk")

  if (state.succeeded) {
    return (
      <div className="py-20 text-center animate-fade-up">
        <div className="divider mx-auto mb-8" />
        <p className="font-serif text-display-sm text-charcoal mb-4">
          Thank you
        </p>
        <p className="text-sm text-stone leading-relaxed">
          Your message has been received. I&apos;ll be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="group">
        <label
          htmlFor="name"
          className="block text-[10px] tracking-super-wide uppercase text-stone/60 mb-3"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-transparent border-b border-stone/20 px-0 py-3 text-charcoal text-base focus:border-blush focus:outline-none transition-colors duration-500 placeholder:text-stone/30"
          placeholder="Your name"
        />
      </div>

      <div className="group">
        <label
          htmlFor="email"
          className="block text-[10px] tracking-super-wide uppercase text-stone/60 mb-3"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-transparent border-b border-stone/20 px-0 py-3 text-charcoal text-base focus:border-blush focus:outline-none transition-colors duration-500 placeholder:text-stone/30"
          placeholder="your@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="group">
        <label
          htmlFor="subject"
          className="block text-[10px] tracking-super-wide uppercase text-stone/60 mb-3"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-transparent border-b border-stone/20 px-0 py-3 text-charcoal text-base focus:border-blush focus:outline-none transition-colors duration-500 placeholder:text-stone/30"
          placeholder="What is this regarding?"
        />
      </div>

      <div className="group">
        <label
          htmlFor="message"
          className="block text-[10px] tracking-super-wide uppercase text-stone/60 mb-3"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-transparent border-b border-stone/20 px-0 py-3 text-charcoal text-base focus:border-blush focus:outline-none transition-colors duration-500 resize-none placeholder:text-stone/30"
          placeholder="Your message..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={state.submitting}
          className={`btn-primary w-full ${
            state.submitting ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  )
}
