# Editing Page Content

This guide walks through how to change text on each page of your site.

---

## General Tips

- All page files end in `.tsx` -- don't worry about the extension, you're just editing the text inside
- Text is wrapped in HTML-like tags: `<p>your text here</p>`, `<h1>heading</h1>`, etc.
- **Don't delete the tags** -- only change the words between them
- Special characters:
  - `&mdash;` = em dash (-)
  - `&apos;` = apostrophe (')
  - `&ldquo;` / `&rdquo;` = curly quotes
  - `<br />` = line break (new line within a poem)

---

## Home Page

**File:** `app/page.tsx`

### Hero Section (the big title area)
Look for this near the top:
```
A Poetry Collection by Heather Krystecki
```
and
```
I See You,
I See Me
```
and the subtitle:
```
A journey through love, loss, and the quiet courage of being truly seen.
```

### Featured Poems
There are two poems on the home page. Search for `blockquote` tags -- poems live inside them:
```html
<blockquote>
  in the quiet between us
  <br />
  i found the words
  ...
</blockquote>
```
Each line of the poem is separated by `<br />` (line break). To change a poem, just swap the words -- keep the `<br />` between lines.

### About Teaser
The short bio blurb on the home page:
```
Heather writes about the spaces between people...
```

### Book Showcase
The dark charcoal section shows the real book cover image. The cover image is at `public/images/book-cover-front.svg`. See the [README](./README.md#book-cover-images) for how to replace with a real image.

### Read the Poems
```
Read the poems
```
and
```
Explore a growing collection of poems — from the pages of the book and beyond.
```

### Latest from the Journal
The 2 most recent featured blog posts appear here automatically. To control which posts show, set `featured: true` in the blog post's frontmatter. See [Writing Blog Posts](./writing-blog-posts.md).

### Instagram Section
```
New poems weekly
```
and
```
Follow along on Instagram for new poetry, behind-the-scenes moments...
```
The actual embedded posts are controlled by the `InstagramEmbed` component -- see the [Updating Links](./updating-links.md#instagram-embedded-posts) guide for how to change which posts appear.

### Newsletter Section
```
New words, delivered
```
and
```
Join the mailing list for new poems, updates on upcoming projects...
```

### Final Call-to-Action
```
Let the words find you.
```

---

## About Page

**File:** `app/about/page.tsx`

### Your Bio
The main bio text starts with:
```
Heather Krystecki is a poet and writer whose work explores the intimate
geography of human connection...
```
This is the largest block of text on the site. It's broken into several `<p>` paragraphs. Edit the text inside each `<p>...</p>` tag.

### Pull Quote (the indented poem)
```
i write because
some things are too true
to say out loud-
so i give them
to the page instead
```
This appears in a styled box with a blush-colored left border.

### "On Writing" Section
Your philosophy on writing -- two paragraphs starting with:
```
Poetry, for Heather, is an act of translation...
```

### HLPFL Partnership
This section credits HLPFL. The text reads:
```
This book and everything around it was made possible through a partnership
with HLPFL...
```
The HLPFL link points to `https://hlpfl.org`. To change it, update the `href` in this section.

### Press & Media
Currently has three "Coming soon" placeholder boxes. When you get press coverage, replace the placeholders with logos or text. See the file for the section labeled `{/* Press */}`.

---

## Shop Page

**File:** `app/shop/page.tsx`

### Book Covers
Front and back cover images are displayed. The images are at `public/images/book-cover-front.svg` and `public/images/book-cover-back.svg`. See the [README](./README.md#book-cover-images) for how to replace with real images.

### Book Title & Author
```
I See You, I See Me
by Heather Krystecki
```

### Book Description
Two paragraphs:
```
A poetry collection about the act of truly seeing-others,
ourselves, and the quiet revelations...
```

### Purchase Buttons
Three buttons in the "Where to Buy" section:
1. **Buy Direct from Author** -- currently links to `#` (placeholder for Stripe)
2. **Buy on Barnes & Noble** -- links to B&N page
3. **Buy on Amazon** -- currently links to `#` (placeholder)

To update these links, see the [Updating Links](./updating-links.md#purchase-links) guide.

### Reader Praise
The "What Readers Are Saying" section has 3 testimonials. These are defined in the `praise` array near the top of the file:
```typescript
const praise = [
  { quote: 'A collection that wraps around you...', source: 'Early Reader' },
  ...
]
```
Edit the `quote` and `source` values to change testimonials.

### Book Details Grid
Near the bottom of the book section, there's a grid with:
- **Format:** Paperback
- **Genre:** Poetry
- **Publisher:** Self-published
- **ISBN:** 979-8-2954-8091-1

Change any of these by finding the corresponding text.

### "Who is this book for?" Section
Three columns of text describing your ideal reader. Each starts after a `<div className="w-8 h-px bg-blush" />` line.

### Book Club CTA
Links to the `/book-club` discussion guide page.

### Featured Poem
Same format as the home page -- inside a `<blockquote>` tag.

---

## Events Page

**File:** `app/events/page.tsx`

Events are managed as a data array in this file. See [Managing Events](./managing-events.md) for full instructions.

---

## Book Club Guide

**File:** `app/book-club/page.tsx`

### Discussion Questions
12 questions in an ordered list. Edit the text inside each `<li>` tag.

### Themes to Explore
4 theme cards. Each has a title and description.

---

## Blog Posts

**Directory:** `content/blog/`

Blog posts are markdown files. See [Writing Blog Posts](./writing-blog-posts.md) for full instructions.

---

## Poems

**Directory:** `content/poems/`

Poems are markdown files. See [Managing Poems](./managing-poems.md) for full instructions.

---

## Contact Page

**File:** `app/contact/page.tsx`

### Intro Text
```
For readings, collaborations, press inquiries,
or just to say hello-I'd love to hear from you.
```

### Email Address
```
heather@hcjk.org
```
(This appears as both text and a `mailto:` link -- update both if your email changes.)

### Bottom Quote
```
Every message is read, every word matters.
```

---

## Header & Footer

### Header (Navigation)
**File:** `components/header.tsx`

The site name in the header:
```
Heather Krystecki
```

Navigation links: Home, About, Poems, Journal, Shop, Events, Contact

### Footer
**File:** `components/footer.tsx`

The footer tagline:
```
Poet, author, and believer in the beauty of quiet moments.
```

Navigation includes all pages plus Book Club Guide.

The bottom bar has:
- The book title: *I See You, I See Me*
- "Built with HLPFL" link (points to hlpfl.org)

---

## Loading Screen

**File:** `app/layout.tsx`

The loading screen shows:
```
Heather Krystecki
Poet & Author
```
with an animated loading bar. To change the text, look for `loading-logo` and `loading-subtitle` in the layout file.

---

## SEO Metadata

Each page has its own `metadata` export at the top of the file that controls:
- **title** -- What shows in the browser tab and search results
- **description** -- The snippet under the title in search results

To change a page's SEO title or description, edit the `metadata` object at the top of that page file.

For site-wide SEO constants (keywords, author name, ISBN, etc.), edit `lib/metadata.ts`.
