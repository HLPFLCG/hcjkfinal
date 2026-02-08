import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        {/* Top section */}
        <div className="py-20 md:py-26 grid md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-3xl font-light mb-6">
              Heather Krystecki
            </p>
            <p className="text-sm text-cream/50 leading-relaxed max-w-xs">
              Poet, author, and believer in the beauty of quiet moments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-super-wide uppercase text-cream/30 mb-6">
              Navigate
            </p>
            <nav className="flex flex-col gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/poems", label: "Poems" },
                { href: "/blog", label: "Journal" },
                { href: "/shop", label: "Shop" },
                { href: "/events", label: "Events" },
                { href: "/book-club", label: "Book Club Guide" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] tracking-super-wide uppercase text-cream/30 mb-6">
              Connect
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/hcjk_collection/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="mailto:heather@hcjk.org"
                className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
              >
                heather@hcjk.org
              </a>
              <a
                href="https://www.barnesandnoble.com/w/i-see-you-i-see-me-heather-krystecki/1149164117"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
              >
                Barnes & Noble
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Heather Krystecki. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-xs text-cream/30">
              <em className="font-serif text-sm text-cream/40">I See You, I See Me</em>
            </p>
            <span className="text-cream/15">|</span>
            <a
              href="https://hlpfl.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream/25 hover:text-cream/50 transition-colors duration-300"
            >
              Built with HLPFL
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
