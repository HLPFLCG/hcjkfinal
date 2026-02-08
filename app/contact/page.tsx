import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out to poet Heather Krystecki for readings, collaborations, press inquiries, or to connect about her poetry collection I See You, I See Me.',
  alternates: { canonical: 'https://hcjk.org/contact/' },
}

export default function ContactPage() {
  return (
    <article>
      <div className="h-24" />

      {/* Hero */}
      <section className="pt-20 md:pt-30 pb-16 px-8 text-center">
        <p className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8 animate-fade-up">
          Get in Touch
        </p>
        <h1 className="font-serif text-display text-charcoal font-light animate-fade-up-delay-1">
          Contact
        </h1>
        <div className="divider mx-auto mt-10 animate-fade-up-delay-2" />
      </section>

      {/* Contact Section */}
      <section className="pb-30 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16 md:gap-20">
          {/* Left - Info */}
          <div className="md:col-span-2">
            <div className="sticky top-32 space-y-12">
              <div>
                <p className="text-[10px] tracking-super-wide uppercase text-stone/40 mb-4">
                  Inquiries
                </p>
                <p className="text-base text-stone leading-relaxed">
                  For readings, collaborations, press inquiries,
                  or just to say hello&mdash;I&apos;d love to hear from you.
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-super-wide uppercase text-stone/40 mb-4">
                  Email
                </p>
                <a
                  href="mailto:heather@hcjk.org"
                  className="text-base text-charcoal hover:text-blush transition-colors duration-300"
                >
                  heather@hcjk.org
                </a>
              </div>

              <div>
                <p className="text-[10px] tracking-super-wide uppercase text-stone/40 mb-4">
                  Social
                </p>
                <a
                  href="https://www.instagram.com/hcjk_collection/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-charcoal hover:text-blush transition-colors duration-300"
                >
                  @hcjk_collection
                </a>
              </div>

              <div className="hidden md:block pt-8">
                <div className="aspect-square w-48 bg-linen relative">
                  <div className="absolute inset-0 flex items-center justify-center px-6">
                    <p className="font-serif text-lg text-charcoal/10 italic text-center leading-relaxed">
                      &ldquo;every word
                      <br />
                      is a bridge&rdquo;
                    </p>
                  </div>
                  <div className="absolute inset-3 border border-blush/10" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Bottom accent */}
      <section className="py-20 px-8 bg-linen text-center">
        <p className="font-serif text-2xl text-charcoal font-light italic">
          Every message is read, every word matters.
        </p>
      </section>
    </article>
  )
}
