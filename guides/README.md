# Site Editing Guide

Welcome! This guide will help you make changes to your website. Everything is organized into simple, step-by-step guides.

## Quick Links

| What you want to do | Guide |
|---|---|
| Change text on any page | [Editing Page Content](./editing-content.md) |
| Write a blog post | [Writing Blog Posts](./writing-blog-posts.md) |
| Add or change poems | [Managing Poems](./managing-poems.md) |
| Add or edit events | [Managing Events](./managing-events.md) |
| Update your bio or about info | [Editing Content](./editing-content.md#about-page) |
| Change links (B&N, Instagram, email, Amazon) | [Updating Links](./updating-links.md) |
| Update Instagram embed posts | [Updating Links](./updating-links.md#instagram-embedded-posts) |
| Manage the newsletter signup | [Updating Links](./updating-links.md#newsletter-signup) |
| Understand the site structure | [Site Structure Overview](./site-structure.md) |
| Deployment & going live | [Deployment Guide](./deployment.md) |

## How the Site Works (The Short Version)

Your website is built with **Next.js** and **Tailwind CSS**. It gets deployed automatically to **Cloudflare Pages** every time changes are pushed to the `main` branch on GitHub.

Content lives in two places:

**Markdown files** (for blog posts and poems):
```
content/blog/welcome.md           <- Blog posts (add new .md files here)
content/blog/on-writing-daily.md
content/poems/in-the-quiet-between-us.md  <- Poems (add new .md files here)
content/poems/what-i-was-looking-for.md
```

**Page files** (for everything else):
```
app/page.tsx          <- Home page
app/about/page.tsx    <- About page
app/shop/page.tsx     <- Shop page
app/contact/page.tsx  <- Contact page
app/events/page.tsx   <- Events page
app/book-club/page.tsx <- Book Club Guide
```

You can edit these files directly on GitHub (no coding software needed) -- just click the pencil icon on any file.

## Editing on GitHub (No Software Needed)

1. Go to your repository on GitHub
2. Navigate to the file you want to edit
3. Click the **pencil icon** (top right of the file view)
4. Make your changes
5. Click **"Commit changes"**
6. The site will automatically redeploy in ~2 minutes

## What's on the Site

Your site includes:
- **Home** -- Full-screen hero, featured poems, about teaser, book showcase, poem archive teaser, journal teaser, Instagram feed, newsletter signup
- **About** -- Your full bio, "On Writing" philosophy, HLPFL partnership, Press section
- **Poems** -- Archive of all poems, each with its own shareable page
- **Journal (Blog)** -- Blog posts written in markdown, newest first
- **Shop** -- Book covers (front & back), purchase buttons, reader praise, ISBN details, book club CTA
- **Events** -- Upcoming and past readings/events, "Invite Heather" section
- **Book Club Guide** -- 12 discussion questions, themes to explore, sharing CTA
- **Contact** -- Contact info, email, Instagram, and a contact form

Plus behind the scenes: SEO metadata, JSON-LD structured data, a dynamic sitemap, a loading screen, and security headers.
