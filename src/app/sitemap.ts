import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
    { path: '/es', changeFrequency: 'weekly', priority: 1 },
    { path: '/en', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/crea-tu-software', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/automatiza-ia', changeFrequency: 'monthly', priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates:
      route.path === '/es' || route.path === '/en'
        ? {
            languages: {
              es: `${siteUrl}/es`,
              en: `${siteUrl}/en`,
              'x-default': `${siteUrl}/es`,
            },
          }
        : undefined,
  }));
}
