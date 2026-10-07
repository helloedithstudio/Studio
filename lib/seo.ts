import type { Metadata } from 'next';
import { site } from '@/lib/site';

// Full per-page metadata: title, description, canonical, language alternates, Open Graph and Twitter cards.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = path === '/' ? site.url : `${site.url}${path}`;
  const verification = process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined;
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    applicationName: site.name,
    authors: [{ name: site.founder }],
    alternates: { canonical: url, languages: { en: url, 'x-default': url } },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: 'en',
      url,
      title,
      description,
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
    verification,
  };
}
