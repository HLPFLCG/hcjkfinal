# Updating Links

This guide covers how to change URLs, social links, purchase links, and email addresses across the site.

---

## All Links in One Place

Here's every external link on the site and where to find it:

### Purchase Links

Three purchase buttons on the Shop page (`app/shop/page.tsx`):

| Button | Current URL | Status |
|---|---|---|
| **Buy Direct from Author** | `#` | Placeholder -- replace with Stripe link when ready |
| **Buy on Barnes & Noble** | `https://www.barnesandnoble.com/w/...` | Live |
| **Buy on Amazon** | `#` | Placeholder -- replace with Amazon link when ready |

**To activate the Stripe or Amazon button:** Open `app/shop/page.tsx`, find the button (search for "Buy Direct" or "Buy on Amazon"), and replace `href="#"` with the actual URL.

### Barnes & Noble Book Link

The B&N link appears in **3 places**:

| File | Section |
|---|---|
| `app/shop/page.tsx` | Shop -- "Buy on Barnes & Noble" button |
| `components/footer.tsx` | Footer -- "Barnes & Noble" link |
| `lib/structured-data.ts` | Book schema (for SEO) |

The current URL:
```
https://www.barnesandnoble.com/w/i-see-you-i-see-me-heather-krystecki/1149164117
```

**To update:** Search for `barnesandnoble.com` in each file and replace the URL.

---

### Instagram Link

Appears in **5 places**:

| File | Section |
|---|---|
| `app/page.tsx` | Home -- Instagram section "@hcjk_collection" button |
| `app/about/page.tsx` | About -- sidebar "@hcjk_collection" link |
| `app/contact/page.tsx` | Contact -- Social section |
| `components/footer.tsx` | Footer -- "Instagram" link |
| `lib/metadata.ts` | SEO constants |

The current URL:
```
https://www.instagram.com/hcjk_collection/
```

**To update:** Search for `instagram.com/hcjk_collection` in each file.

If you change your Instagram handle, also update the display text (`@hcjk_collection`).

---

### Instagram Embedded Posts

The home page shows embedded Instagram posts. These are configured in `app/page.tsx`, in the `InstagramEmbed` component:

```html
<InstagramEmbed
  postUrls={[
    'https://www.instagram.com/p/YOUR_POST_ID_1/',
    'https://www.instagram.com/p/YOUR_POST_ID_2/',
    'https://www.instagram.com/p/YOUR_POST_ID_3/',
  ]}
/>
```

**To change which posts appear:**
1. Go to the Instagram post you want to embed
2. Copy the post URL (it looks like `https://www.instagram.com/p/ABC123/`)
3. Replace one of the URLs in the array above
4. You can have any number of posts -- just add or remove URLs

**Note:** Currently the URLs point to the profile page as placeholders. Replace them with actual post URLs (the ones with `/p/` in them) for the embeds to display correctly.

---

### Email Address

Appears in **3 places**:

| File | Section |
|---|---|
| `app/contact/page.tsx` | Contact -- Email section |
| `components/footer.tsx` | Footer -- email link |
| `lib/metadata.ts` | SEO constants |

The current email:
```
heather@hcjk.org
```

Look for both:
- `href="mailto:heather@hcjk.org"` (the clickable link)
- `heather@hcjk.org` (the display text)

Update **both** when changing the email.

---

### HLPFL Link

Appears in **3 places**:

| File | Section |
|---|---|
| `app/about/page.tsx` | About -- "Made Possible By" section |
| `components/footer.tsx` | Footer -- "Built with HLPFL" credit |
| `lib/metadata.ts` | SEO constants |

The current URL:
```
https://hlpfl.org
```

---

## Newsletter Signup

The newsletter signup form on the home page is powered by **Formspree**. It currently shares the same form ID as the contact form (`xblqjywk`).

**To use a separate form for newsletter signups:**
1. Go to [formspree.io](https://formspree.io)
2. Create a new form specifically for newsletters
3. Copy the form ID
4. Open `components/newsletter-signup.tsx`
5. Replace `xblqjywk` in the fetch URL:
   ```
   fetch('https://formspree.io/f/YOUR_NEW_FORM_ID', {
   ```

Newsletter submissions include the email address and a subject line of "New Newsletter Signup" so you can tell them apart from contact form messages.

---

## Contact Form

The contact form is powered by **Formspree**. The form ID is `xblqjywk` and lives in `components/contact-form.tsx`.

If you need to change the Formspree form or create a new one:
1. Go to [formspree.io](https://formspree.io)
2. Create/find your form
3. Copy the form ID
4. Update this line in `components/contact-form.tsx`:
   ```
   const [state, handleSubmit] = useForm("xblqjywk")
   ```
   Replace `xblqjywk` with your new form ID.

Form submissions go to whatever email is configured in your Formspree dashboard.

---

## Adding a New Retailer Link (e.g., a different bookstore)

To add another purchase link on the Shop page, open `app/shop/page.tsx` and find the "Purchase Section" area. Add a new link below the existing buttons:

```html
<a
  href="https://www.example.com/your-book-link"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-outline"
>
  Buy on Example Store
</a>
```

---

## Adding a New Social Media Link

To add a new social link to the **footer**, open `components/footer.tsx` and find the "Connect" section. Add a new entry:

```html
<a
  href="https://www.tiktok.com/@your_handle"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
>
  TikTok
</a>
```

To add it to the **Contact page**, open `app/contact/page.tsx` and find the "Social" section.
