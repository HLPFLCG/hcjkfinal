import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ReadingProgress } from "@/components/reading-progress"
import { BackToTop } from "@/components/back-to-top"
import { getPersonSchema, getWebsiteSchema } from "@/lib/structured-data"
import { SEO_KEYWORDS } from "@/lib/metadata"

export const metadata: Metadata = {
  metadataBase: new URL('https://hcjk.org'),
  title: {
    default: 'Heather Krystecki — Poet & Author | Mental Health, Addiction & Recovery',
    template: '%s | Heather Krystecki',
  },
  description:
    'Poetry about mental health, addiction, and recovery by Heather Krystecki. Read poems from I See You, I See Me — a collection about the darkest parts of the journey and the fight to come back.',
  keywords: SEO_KEYWORDS,
  authors: [{ name: 'Heather Krystecki', url: 'https://hcjk.org' }],
  creator: 'Heather Krystecki',
  openGraph: {
    title: 'Heather Krystecki — Poet & Author',
    description:
      'I See You, I See Me — poetry about mental health, addiction, and recovery. A collection by Heather Krystecki.',
    url: 'https://hcjk.org',
    siteName: 'Heather Krystecki',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heather Krystecki — Poet & Author',
    description:
      'I See You, I See Me — poetry about mental health, addiction, and recovery by Heather Krystecki.',
    creator: '@hcjk_collection',
  },
  alternates: {
    canonical: 'https://hcjk.org',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load fonts asynchronously — eliminates render-blocking */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-expect-error onLoad used for async font loading pattern
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
        />
      </head>
      <body className="bg-cream">
        {/* Skip to content - accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-charcoal focus:text-cream focus:text-sm focus:rounded"
        >
          Skip to content
        </a>

        {/* Loading Screen */}
        <div id="loading-screen" className="loading-screen">
          <div className="loading-content">
            <p className="loading-logo">Heather Krystecki</p>
            <p className="loading-subtitle">Poet & Author</p>
            <div className="loading-bar-track">
              <div className="loading-bar-fill" />
            </div>
          </div>
        </div>

        <ReadingProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />

        {/* Inline script to hide loading screen once DOM is ready */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function hideLoader() {
                  var loader = document.getElementById('loading-screen');
                  if (loader) {
                    setTimeout(function() {
                      loader.classList.add('loaded');
                      setTimeout(function() { loader.style.display = 'none'; }, 600);
                    }, 300);
                  }
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', hideLoader);
                } else {
                  hideLoader();
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
