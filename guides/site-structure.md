# Site Structure Overview

A quick look at how the site is organized so you know where everything is.

---

## File Map

```
hcjkorg2/
├── app/                          <- All the pages
│   ├── page.tsx                  <- HOME page (hcjk.org/)
│   ├── layout.tsx                <- Shared wrapper (fonts, metadata, loading screen)
│   ├── globals.css               <- Global styles (colors, animations, buttons, blog prose)
│   ├── sitemap.ts                <- Auto-generated sitemap for SEO (includes blog + poem slugs)
│   ├── about/
│   │   └── page.tsx              <- ABOUT page (/about)
│   ├── shop/
│   │   └── page.tsx              <- SHOP page (/shop)
│   ├── blog/
│   │   ├── page.tsx              <- BLOG INDEX (/blog)
│   │   └── [slug]/
│   │       └── page.tsx          <- BLOG POST (/blog/post-name)
│   ├── poems/
│   │   ├── page.tsx              <- POEMS INDEX (/poems)
│   │   └── [slug]/
│   │       └── page.tsx          <- POEM PAGE (/poems/poem-name)
│   ├── events/
│   │   └── page.tsx              <- EVENTS page (/events)
│   ├── book-club/
│   │   └── page.tsx              <- BOOK CLUB GUIDE (/book-club)
│   └── contact/
│       └── page.tsx              <- CONTACT page (/contact)
│
├── components/                   <- Reusable pieces
│   ├── header.tsx                <- Navigation bar (top of every page)
│   ├── footer.tsx                <- Footer (bottom of every page)
│   ├── blog-card.tsx             <- Blog post preview card (used on home + blog index)
│   ├── poem-card.tsx             <- Poem preview card (used on poems index)
│   ├── contact-form.tsx          <- The contact form (used on /contact)
│   ├── instagram-embed.tsx       <- Instagram post embeds (used on home page)
│   └── newsletter-signup.tsx     <- Newsletter email signup form (used on home page)
│
├── content/                      <- Markdown content (blog posts & poems)
│   ├── blog/
│   │   ├── welcome.md            <- Blog post: "Welcome to My Corner..."
│   │   └── on-writing-daily.md   <- Blog post: "On Writing Daily"
│   └── poems/
│       ├── in-the-quiet-between-us.md
│       ├── what-i-was-looking-for.md
│       ├── too-true-to-say-out-loud.md
│       ├── not-alone.md
│       └── every-word-is-a-bridge.md
│
├── lib/                          <- Shared utilities
│   ├── blog.ts                   <- Blog system (read/parse markdown posts)
│   ├── poems.ts                  <- Poems system (read/parse markdown poems)
│   ├── metadata.ts               <- SEO constants (site URL, author name, ISBN, keywords)
│   ├── structured-data.ts        <- JSON-LD schemas (Person, Book, Website, BlogPosting)
│   └── types.ts                  <- TypeScript type definitions
│
├── public/                       <- Static files
│   ├── images/
│   │   ├── book-cover-front.svg  <- Book front cover (replace with real .jpg/.png)
│   │   └── book-cover-back.svg   <- Book back cover (replace with real .jpg/.png)
│   ├── _headers                  <- Security headers (CSP, etc.)
│   ├── robots.txt                <- Search engine crawl rules
│   ├── site.webmanifest          <- PWA manifest
│   ├── favicon.ico               <- Browser tab icon
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
│
├── guides/                       <- These guides you're reading now
│
├── tailwind.config.ts            <- Design system (colors, fonts, spacing)
├── next.config.mjs               <- Build configuration
├── .node-version                 <- Node.js version pin (22)
└── package.json                  <- Project dependencies
```

---

## The Pages

### Home (`app/page.tsx`)
The landing page. Sections from top to bottom:
1. **Hero** -- Full-screen title with "Order the Book" button
2. **Featured Poem** -- First poem on linen background
3. **About the Poet** -- Two-column: decorative quote + bio teaser
4. **Book Showcase** -- Dark charcoal section with real book cover image + info
5. **Second Poem** -- Another poem on cream background
6. **Read the Poems** -- Teaser linking to the poems archive
7. **Latest from the Journal** -- 2 most recent featured blog posts
8. **Instagram Feed** -- Embedded Instagram posts + follow button
9. **Newsletter Signup** -- Email signup form
10. **Final CTA** -- "Let the words find you."

### About (`app/about/page.tsx`)
Two-column editorial layout:
- **Left sidebar** -- Sticky decorative quote box + Instagram link
- **Right content** -- Full bio, pull quote poem, "On Writing" section, HLPFL partnership, Press & Media section, Shop CTA

### Poems Index (`app/poems/page.tsx`)
Grid of all poems from the `content/poems/` directory. Each poem links to its own page.

### Poem Page (`app/poems/[slug]/page.tsx`)
Full-page centered display of a single poem. Auto-generated from markdown files.

### Blog Index (`app/blog/page.tsx`)
List of all blog posts from `content/blog/`, sorted newest first. Each post shows title, date, and excerpt.

### Blog Post (`app/blog/[slug]/page.tsx`)
Individual blog post page with full rendered markdown content. Auto-generated from markdown files.

### Shop (`app/shop/page.tsx`)
Book showcase page:
1. **Book Covers** -- Front and back cover images
2. **Book Details** -- Title, description, 3 purchase buttons, metadata grid (format, genre, publisher, ISBN)
3. **Praise** -- "What Readers Are Saying" section with 3 testimonials
4. **Featured Poem** -- From the collection
5. **"Who is this book for?"** -- Three-column reader descriptions
6. **Book Club CTA** -- Link to the discussion guide
7. **Final CTA** -- Dark section with order button

### Events (`app/events/page.tsx`)
Events and readings page:
- Upcoming events displayed prominently
- Past events archive
- "Invite Heather" CTA

### Book Club Guide (`app/book-club/page.tsx`)
Discussion guide for reading groups:
- 12 discussion questions
- 4 themes to explore
- Sharing CTA

### Contact (`app/contact/page.tsx`)
Two-column layout:
- **Left** -- Inquiry info, email, Instagram, decorative element
- **Right** -- Contact form (Name, Email, Subject, Message)

---

## Design System

### Colors (defined in `tailwind.config.ts`)

| Name | Hex | Used For |
|---|---|---|
| `cream` | `#faf8f5` | Main background |
| `linen` | `#f5f0eb` | Alternate section backgrounds |
| `charcoal` | `#2a2a2a` | Primary text, dark sections |
| `stone` | `#8a8580` | Secondary/body text |
| `blush` | `#c4a7a3` | Accents, dividers, hover states |
| `rose` | `#d4b5b0` | Light accent |
| `warm` | `#b8a088` | Warm accent |

### Fonts
- **Headings & Poems:** Cormorant Garamond (serif)
- **Body text & UI:** Inter (sans-serif)

Both are loaded from Google Fonts in `app/layout.tsx`.

### Button Styles
- **`btn-primary`** -- Outlined button that fills on hover (main CTAs)
- **`btn-secondary`** -- Underlined text link (secondary actions)
- **`btn-outline`** -- Full-width outlined button (purchase links on shop page)

---

## What Each Component Does

### Header (`components/header.tsx`)
- Fixed to the top of the screen
- Turns from transparent to frosted glass on scroll
- Has a hamburger menu on mobile (animated X when open)
- Links: Home, About, Poems, Journal, Shop, Events, Contact

### Footer (`components/footer.tsx`)
- Dark charcoal background
- Three columns: Brand/tagline, Navigation links, Connect (Instagram, email, B&N)
- Navigate section includes all pages plus Book Club Guide
- Copyright line + "Built with HLPFL" credit at bottom

### Blog Card (`components/blog-card.tsx`)
- Reusable preview card for blog posts
- Shows date, title, excerpt, and "Read More" link
- Used on the home page (journal teaser) and blog index

### Poem Card (`components/poem-card.tsx`)
- Reusable preview card for poems
- Shows title, 4-line preview, and collection attribution
- Used on the poems index page

### Contact Form (`components/contact-form.tsx`)
- Powered by Formspree (no backend server needed)
- Fields: Name, Email, Subject, Message
- Shows a "Thank you" message after successful submission

### Instagram Embed (`components/instagram-embed.tsx`)
- Embeds real Instagram posts on the home page
- Uses Instagram's official embed.js script
- Loads lazily for performance
- Shows posts in a 3-column grid on desktop

### Newsletter Signup (`components/newsletter-signup.tsx`)
- Email signup form on the home page
- Sends to Formspree (shares the contact form ID for now)
- Shows "Thank you" after signup
- Can be switched to a dedicated Formspree form or other email service

---

## Content System

### Blog Posts (`content/blog/`)
- Markdown files with YAML frontmatter (title, date, excerpt, tags, featured)
- Parsed by `lib/blog.ts` at build time
- Each `.md` file generates a page at `/blog/filename/`
- See [Writing Blog Posts](./writing-blog-posts.md) for details

### Poems (`content/poems/`)
- Markdown files with YAML frontmatter (title, collection, order, featured)
- Parsed by `lib/poems.ts` at build time
- Line breaks are preserved (poems render with `<br />` between lines)
- Each `.md` file generates a page at `/poems/filename/`
- See [Managing Poems](./managing-poems.md) for details

---

## SEO & Structured Data

### Metadata (`lib/metadata.ts`)
Central place for all SEO constants -- site URL, author name, book title, ISBN, social links, and keywords. If any of these change, update them here and they'll update everywhere.

### Structured Data (`lib/structured-data.ts`)
JSON-LD schemas that help search engines understand the site:
- **Person** -- Heather Krystecki as a poet/author
- **Book** -- "I See You, I See Me" with purchase links, ISBN, and cover image
- **Website** -- Site-level metadata
- **BlogPosting** -- Schema for individual blog posts

### Sitemap (`app/sitemap.ts`)
Dynamically generates a sitemap.xml listing all static pages plus all blog post and poem URLs. Search engines use this to find and index every page.

---

## Loading Screen

The site shows a branded loading screen ("Heather Krystecki" + animated progress bar) while the page loads. The loading screen is defined in:
- **HTML:** `app/layout.tsx` (the `#loading-screen` div)
- **CSS:** `app/globals.css` (the `.loading-screen` styles)

It automatically fades out once the page is ready.
