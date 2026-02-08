import {
  SITE_URL,
  AUTHOR_NAME,
  BOOK_TITLE,
  INSTAGRAM_URL,
  EMAIL,
  BN_URL,
  ISBN,
} from './metadata'

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR_NAME,
    url: SITE_URL,
    sameAs: [INSTAGRAM_URL],
    email: EMAIL,
    jobTitle: 'Poet & Author',
    description:
      'Poet and author of I See You, I See Me — exploring love, loss, self-discovery, and the quiet courage of being truly seen.',
  }
}

export function getBookSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: BOOK_TITLE,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
    },
    isbn: ISBN,
    image: `${SITE_URL}/images/book-cover-front.jpg`,
    bookFormat: 'https://schema.org/Paperback',
    genre: ['Poetry', 'Mental Health', 'Self-Discovery'],
    url: `${SITE_URL}/shop/`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: BN_URL,
    },
    description:
      'A poetry collection about the act of truly seeing — others, ourselves, and the quiet revelations that emerge when we let ourselves be known. Raw, emotional poetry about love, loss, healing, and mental health.',
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Heather Krystecki — Poet & Author',
    url: SITE_URL,
    description:
      'Official website of poet Heather Krystecki, author of I See You, I See Me. Raw, emotional poetry about love, loss, self-discovery, and mental health.',
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
    },
  }
}

export function getBlogPostSchema(post: {
  title: string
  date: string
  excerpt: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Person', name: AUTHOR_NAME },
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}/`,
    publisher: { '@type': 'Person', name: AUTHOR_NAME },
  }
}

export function getPoemSchema(poem: {
  title: string
  collection: string
  slug: string
  content: string
}) {
  const preview = poem.content.split('\n').filter((l: string) => l.trim()).slice(0, 3).join(' / ')
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: poem.title,
    author: { '@type': 'Person', name: AUTHOR_NAME },
    isPartOf: {
      '@type': 'Book',
      name: BOOK_TITLE,
      isbn: ISBN,
    },
    genre: 'Poetry',
    text: preview,
    url: `${SITE_URL}/poems/${poem.slug}/`,
    inLanguage: 'en',
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}
