import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/', '/sign-in', '/sign-up'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/', '/llms.txt'],
        disallow: ['/admin', '/api/', '/sign-in', '/sign-up'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/llms.txt'],
        disallow: ['/admin', '/api/', '/sign-in', '/sign-up'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
