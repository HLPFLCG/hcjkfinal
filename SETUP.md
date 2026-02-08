# HCJK.org — Setup & Configuration Guide

Everything you need to get the site running, deploy it, and configure external services.

---

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The site runs on **Node.js 22** (pinned in `.node-version`).

---

## Deployment (Cloudflare Pages)

The site deploys automatically to Cloudflare Pages on every push to `main`.

### Required GitHub Secrets

Add these in your GitHub repo: **Settings > Secrets and variables > Actions**

| Secret | Where to find it |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Dashboard > My Profile > API Tokens > Create Token (use "Cloudflare Pages" template) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard > any domain > Overview > right sidebar under "API" |

### Cloudflare Pages Project Setup

1. Go to **Cloudflare Dashboard > Pages**
2. Create a new project named `hcjk-org`
3. Connect it to your GitHub repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `out`
   - **Node version:** `22`
5. Add your custom domain (`hcjk.org`):
   - Go to your Pages project > **Custom domains** > Add domain
   - Add a **CNAME** DNS record pointing `hcjk.org` to `hcjk-org.pages.dev`

---

## Forms (Formspree)

The contact form and newsletter signup use **Formspree** — a service that handles form submissions without a backend.

### Current Setup

- **Form ID:** `xblqjywk`
- Used by both the contact form (`components/contact-form.tsx`) and newsletter (`components/newsletter-signup.tsx`)
- Submissions go to whatever email is configured in the Formspree dashboard

### How to Set Up / Change Formspree

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form (you'll get an ID like `xblqjywk`)
3. Update the form ID in these files:
   - `components/contact-form.tsx` — line with `useForm("xblqjywk")`
   - `components/newsletter-signup.tsx` — line with `fetch('https://formspree.io/f/xblqjywk'`
4. (Optional) Create a **separate** form for newsletter signups so you can tell them apart from contact messages

### Creating a Separate Newsletter Form

1. Create a second form on Formspree specifically for newsletters
2. Update `components/newsletter-signup.tsx` with the new form ID
3. Newsletter submissions include `_subject: 'New Newsletter Signup'` to distinguish them

---

## Shop / Purchase Links

The shop page (`app/shop/page.tsx`) has three purchase buttons:

| Button | Current Status | How to Update |
|---|---|---|
| **Buy Direct from Author** | Links to IngramSpark | Update the `href` on the "Buy Direct" button |
| **Buy on Barnes & Noble** | Live | URL is in the `href` attribute |
| **Buy on Amazon** | Placeholder (`#`) | Replace `href="#"` with the Amazon listing URL when available |

### To Add a New Retailer

Add this HTML in the purchase section of `app/shop/page.tsx`:

```html
<a
  href="https://www.example.com/your-book"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-outline"
>
  Buy on Example Store
</a>
```

### To Set Up Stripe (Direct Sales)

If you want to sell directly with payment processing:

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Create a **Payment Link** for the book
3. Replace the "Buy Direct" button's `href` with the Stripe Payment Link URL
4. Alternatively, use Stripe's **Buy Button** embed code

---

## Instagram Embeds

The home page shows embedded Instagram posts.

### How to Update Which Posts Appear

1. Open `app/page.tsx`
2. Find the `InstagramEmbed` component
3. Replace the URLs with actual Instagram **post** URLs (not profile URLs):

```tsx
<InstagramEmbed
  postUrls={[
    'https://www.instagram.com/p/YOUR_POST_ID_1/',
    'https://www.instagram.com/p/YOUR_POST_ID_2/',
    'https://www.instagram.com/p/YOUR_POST_ID_3/',
  ]}
/>
```

**Important:** Use post URLs (containing `/p/`), not profile URLs, for embeds to work.

---

## Email

The email `heather@hcjk.org` appears in 3 places:

| File | Where |
|---|---|
| `app/contact/page.tsx` | Contact page (both `mailto:` link and display text) |
| `components/footer.tsx` | Footer email link |
| `lib/metadata.ts` | SEO constants |

Update all three if the email changes.

---

## Social Links

### Instagram (`@hcjk_collection`)

Appears in 5 places — search for `instagram.com/hcjk_collection`:

- `app/page.tsx` (home page Instagram section)
- `app/about/page.tsx` (about sidebar)
- `app/contact/page.tsx` (contact social section)
- `components/footer.tsx` (footer)
- `lib/metadata.ts` (SEO)

### Adding New Social Accounts

Add links to the footer (`components/footer.tsx`, "Connect" section) and optionally the contact page.

---

## Content Management

### Blog Posts

Add markdown files to `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2026-03-15"
excerpt: "A short preview for the blog index."
tags: ["writing", "poetry"]
featured: true
---

Your post content in markdown...
```

- Posts are sorted by date (newest first)
- `featured: true` shows the post on the home page (latest 2 featured posts)
- Filenames become URLs: `my-post.md` → `/blog/my-post/`

### Poems

Add markdown files to `content/poems/`:

```markdown
---
title: "your poem title"
collection: "I See You, I See Me"
order: 6
featured: true
---

first line of poem
second line
third line

blank line creates stanza break
```

- `order` controls display order on the poems index
- Each line break in the file becomes a line break in the rendered poem

### Events

Edit the `events` array directly in `app/events/page.tsx`:

```typescript
const events: AuthorEvent[] = [
  {
    date: '2026-08-15',
    title: 'Poetry Reading',
    location: 'Blue Door Books, Portland, OR',
    description: 'An evening of poetry and conversation.',
    link: 'https://example.com/event',
  },
]
```

Events are automatically split into "Upcoming" and "Past" based on date.

---

## SEO

### Central Constants

All SEO constants live in `lib/metadata.ts`:
- Site URL, author name, book title, ISBN
- Instagram handle, email, B&N URL
- Keywords array

### Per-Page SEO

Each page file has a `metadata` export at the top controlling title and description.

### Structured Data

`lib/structured-data.ts` generates JSON-LD schemas for:
- Person (poet/author)
- Book (with ISBN and purchase link)
- Website
- BlogPosting (per blog post)
- CreativeWork (per poem)
- BreadcrumbList

### Sitemap

`app/sitemap.ts` auto-generates `sitemap.xml` including all static pages, blog posts, and poems.

---

## Book Cover Images

The actual book cover images are in `public/images/`:
- `Image.jpeg` — front cover
- `Image 1.jpeg` — back cover

These are referenced on the home page and shop page.

---

## Security Headers

`public/_headers` configures security headers for Cloudflare Pages:
- Content Security Policy (allows Instagram, Formspree, Google Fonts)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff

If you add a new third-party service, add its domain to the CSP in this file.

---

## File Structure

```
hcjkfinal/
├── app/                          # Pages (Next.js App Router)
│   ├── layout.tsx                # Root layout (fonts, metadata, loading screen)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── not-found.tsx             # 404 page
│   ├── about/page.tsx            # About page
│   ├── shop/page.tsx             # Shop page
│   ├── contact/page.tsx          # Contact page
│   ├── events/page.tsx           # Events page
│   ├── book-club/page.tsx        # Book club guide
│   ├── poems/page.tsx            # Poems index
│   ├── poems/[slug]/page.tsx     # Individual poem pages
│   ├── blog/page.tsx             # Blog index
│   └── blog/[slug]/page.tsx      # Individual blog posts
│
├── components/                   # Reusable components
│   ├── header.tsx                # Navigation bar
│   ├── footer.tsx                # Site footer
│   ├── contact-form.tsx          # Formspree contact form
│   ├── newsletter-signup.tsx     # Newsletter email signup
│   ├── scroll-reveal.tsx         # Scroll animation wrapper
│   ├── reading-progress.tsx      # Reading progress bar
│   ├── back-to-top.tsx           # Back to top button
│   ├── share-buttons.tsx         # Social sharing buttons
│   ├── instagram-embed.tsx       # Instagram post embeds
│   ├── blog-card.tsx             # Blog post preview card
│   └── poem-card.tsx             # Poem preview card
│
├── content/                      # Markdown content
│   ├── blog/                     # Blog posts (.md files)
│   └── poems/                    # Poems (.md files)
│
├── lib/                          # Utilities
│   ├── blog.ts                   # Blog post parser
│   ├── poems.ts                  # Poem parser
│   ├── metadata.ts               # SEO constants
│   ├── structured-data.ts        # JSON-LD schemas
│   └── types.ts                  # TypeScript types
│
├── public/                       # Static assets
│   ├── images/                   # Book cover images
│   ├── _headers                  # Security headers
│   ├── robots.txt                # Crawl rules
│   ├── site.webmanifest          # PWA manifest
│   └── favicon files
│
├── guides/                       # Editing guides
│
├── .github/workflows/            # CI/CD
│   └── deploy-cloudflare.yml     # Auto-deploy to Cloudflare Pages
│
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── SETUP.md                      # This file
```
