import type { MetadataRoute } from 'next';
import { routes, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => {
    const url = r.path === '/' ? site.url : `${site.url}${r.path}`;
    return {
      url,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates: { languages: { en: url, 'x-default': url } },
    };
  });
}
