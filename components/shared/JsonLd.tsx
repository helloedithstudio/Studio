import { site } from '@/lib/site';

// Organization + WebSite structured data, sitewide. Only facts that are on the site itself.
export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${site.url}/#organization`,
        name: site.name,
        alternateName: 'edith.',
        url: site.url,
        slogan: site.tagline,
        description: site.description,
        email: site.email,
        image: `${site.url}${site.ogImage}`,
        founder: { '@type': 'Person', name: site.founder },
        areaServed: 'Worldwide',
        availableLanguage: 'English',
        sameAs: [site.instagram],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: site.locale,
        publisher: { '@id': `${site.url}/#organization` },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\u003c') }} />;
}
