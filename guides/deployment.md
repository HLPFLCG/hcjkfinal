# Deployment Guide

How your site gets from code to live on the internet.

---

## How It Works

Your site is **automatically deployed** every time changes are pushed to the `main` branch on GitHub. You don't need to run any commands -- just commit your changes and the site updates itself.

**Two deployments run in parallel:**
1. **Cloudflare Pages** (primary) -- this is your main live site at hcjk.org
2. **GitHub Pages** (backup) -- secondary deployment

Both deploy from the same code automatically.

---

## Making Changes Live

### Option 1: Edit Directly on GitHub (Easiest)

1. Go to your repository: `github.com/HLPFLCG/hcjkorg2`
2. Navigate to the file you want to edit
3. Click the **pencil icon** (edit button)
4. Make your changes
5. Scroll down and click **"Commit changes"**
6. If you're on a branch other than `main`, create a **Pull Request** and merge it
7. The site will automatically redeploy in ~2-3 minutes

### Option 2: Through a Pull Request

If someone else is making changes for you (or you want to review before going live):

1. They create a branch and make changes
2. They open a **Pull Request** to `main`
3. You review and click **"Merge"**
4. Site redeploys automatically

---

## Cloudflare Pages Setup

Your site is deployed to Cloudflare Pages with these settings:

- **Project name:** `hcjk-org`
- **Build command:** `npm run build`
- **Output directory:** `./out`
- **Node version:** 20

The deployment is configured in `.github/workflows/deploy-cloudflare.yml`.

### Required Secrets (in GitHub repo settings)
- `CLOUDFLARE_API_TOKEN` -- Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` -- Your Cloudflare account ID

---

## GitHub Pages Setup

The backup GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

It sets `NEXT_PUBLIC_BASE_PATH=/hcjkorg2` during build because GitHub Pages serves the site at `username.github.io/hcjkorg2/` (a subdirectory, not root).

---

## Custom Domain

If you have a custom domain (like `hcjk.org` or `heatherkrystecki.com`):

### On Cloudflare Pages:
1. Go to Cloudflare Dashboard -> Pages -> your project
2. Click "Custom domains"
3. Add your domain
4. Update your domain's DNS to point to Cloudflare

### On your domain registrar:
- Add a **CNAME** record pointing to `hcjk-org.pages.dev`

---

## Security Headers

The file `public/_headers` controls security headers for the site. It includes:
- **Content Security Policy (CSP)** -- controls what scripts/styles/media can load
- **X-Frame-Options** -- prevents the site from being embedded in iframes
- **Referrer Policy** -- controls what info is sent when clicking links

The CSP is configured to allow Instagram embeds. If you add a new third-party service, you may need to add its domain to the CSP.

---

## Troubleshooting

### "The site looks unstyled / just plain text"
The CSS isn't loading. This usually means the `basePath` is wrong. Check `next.config.mjs`:
- For Cloudflare: `NEXT_PUBLIC_BASE_PATH` should **not** be set (defaults to empty)
- For GitHub Pages: `NEXT_PUBLIC_BASE_PATH` should be `/hcjkorg2`

### "My changes aren't showing up"
1. Check that you committed to the `main` branch (or merged your PR)
2. Go to GitHub -> Actions tab to see if the deploy workflow is running
3. Wait 2-3 minutes for the build + deployment
4. Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### "The deploy failed"
1. Go to GitHub -> Actions tab
2. Click the failed workflow run
3. Look at the error message in the build step
4. Common causes: typo in the code, missing closing tag, deleted a bracket

### "The contact form isn't working"
Check that the Formspree form ID (`xblqjywk`) in `components/contact-form.tsx` matches your Formspree account. Log into [formspree.io](https://formspree.io) to verify.

### "Instagram embeds aren't showing"
- Make sure you're using actual post URLs (with `/p/` in them), not just the profile URL
- The embeds require Instagram's embed.js script to load -- it may take a moment
- Check browser console for any CSP errors. If needed, update `public/_headers`

### "The loading screen won't go away"
The loading screen hides once the page fully loads. If it's stuck:
1. Hard refresh the page
2. Check the browser console for JavaScript errors
3. The timeout is set to ~2 seconds max -- if the page loads normally, it should disappear
