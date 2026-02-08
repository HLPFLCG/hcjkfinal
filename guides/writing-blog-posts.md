# Writing Blog Posts (Journal)

How to add, edit, and manage blog posts on your site.

---

## Where Blog Posts Live

Blog posts are markdown files in the `content/blog/` directory:

```
content/blog/
├── welcome.md
├── on-writing-daily.md
└── your-new-post.md
```

Each file becomes a page at `/blog/your-file-name/`.

---

## Creating a New Post

1. Create a new `.md` file in `content/blog/`
2. Add the required frontmatter at the top
3. Write your post in markdown below the frontmatter
4. Commit and push — the site rebuilds automatically

### Frontmatter Template

Every post must start with this block between `---` lines:

```markdown
---
title: "Your Post Title"
date: "2025-06-15"
excerpt: "A one or two sentence preview that appears on the blog index page."
tags: ["writing", "poetry", "reflection"]
featured: true
---

Your post content goes here...
```

**Fields explained:**

| Field | Required | Description |
|---|---|---|
| `title` | Yes | The post title (shown on the page and in SEO) |
| `date` | Yes | Publication date in `YYYY-MM-DD` format |
| `excerpt` | Yes | Short preview text (1-2 sentences) for the blog index |
| `tags` | No | Array of tags (not currently displayed, but useful for organizing) |
| `featured` | No | Set to `true` to show on the home page (latest 2 featured posts appear) |

---

## Writing Post Content

Posts use standard markdown:

```markdown
## A Heading

Regular paragraph text. You can use **bold**, *italic*, and [links](https://example.com).

> A blockquote — great for highlighting a poem or quote.

- Bullet list item
- Another item

1. Numbered list
2. Another item

---

A horizontal rule above creates a visual divider.
```

### Styling Notes

The blog uses custom prose styles that match the site's design:
- Headings use the serif font (Cormorant Garamond)
- Body text is in the stone color with relaxed line spacing
- Blockquotes get a blush left border and italic serif text
- Links are underlined in blush and darken on hover

---

## Editing an Existing Post

1. Open the file in `content/blog/`
2. Change the content or frontmatter
3. Commit and push

If you change the filename, the URL changes too — old links will break.

---

## Featuring Posts on the Home Page

The home page shows the 2 most recent posts that have `featured: true` in their frontmatter. To feature a post, add or set:

```yaml
featured: true
```

To remove a post from the home page, set `featured: false` or remove the line.

---

## Post Ordering

Posts are automatically sorted by date (newest first) on the blog index page. No manual ordering needed.

---

## Tips

- Keep excerpts under 200 characters for the best appearance on the blog index
- Use the date field accurately — it controls sort order
- Filenames become URLs, so use lowercase with hyphens: `my-new-post.md` → `/blog/my-new-post/`
- You can write posts in advance by using a future date (they'll still show up since this is a static site)
- Preview your post locally with `npm run dev` before pushing if you have the dev environment set up
