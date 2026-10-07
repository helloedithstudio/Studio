// One place for what search engines and social cards are told about the site.
// NEXT_PUBLIC_SITE_URL wins (set it when a custom domain goes live); on Vercel the production domain is provided at build time.
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: 'Edith Studio',
  url: (process.env.NEXT_PUBLIC_SITE_URL?.trim() || (vercel ? `https://${vercel}` : 'https://studio-omega-brown.vercel.app')).replace(/\/+$/, ''),
  tagline: 'Where AI agents and curious minds work in unison',
  description:
    'Edith is where AI agents and curious minds work in unison. An independent studio for design, art and technology, working with clients worldwide.',
  email: 'hello.edithstudio@gmail.com',
  founder: 'Kevin Andrew',
  instagram: 'https://www.instagram.com/edith_.studio/',
  ogImage: '/og/edith-og.jpg',
  locale: 'en',
} as const;

// Public routes, in sitemap order. `priority` is a hint only.
export const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/studio', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/unfolded', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/legal-notice', priority: 0.2, changeFrequency: 'yearly' as const },
];
