import type { MetadataRoute } from 'next';
import { getSitemapPosts } from '@/lib/blog';
import { getSiteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/es`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${siteUrl}/es`,
          en: `${siteUrl}/en`,
          'x-default': `${siteUrl}/es`,
        },
      },
    },
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          es: `${siteUrl}/es`,
          en: `${siteUrl}/en`,
          'x-default': `${siteUrl}/es`,
        },
      },
    },
    {
      url: `${siteUrl}/crea-tu-software`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/automatiza-ia`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/es/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/es/blog`,
          en: `${siteUrl}/en/blog`,
          'x-default': `${siteUrl}/es/blog`,
        },
      },
    },
    {
      url: `${siteUrl}/en/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/es/blog`,
          en: `${siteUrl}/en/blog`,
          'x-default': `${siteUrl}/es/blog`,
        },
      },
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getSitemapPosts().flatMap((post) => [
    {
      url: `${siteUrl}/es/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/es/blog/${post.slug}`,
          en: `${siteUrl}/en/blog/${post.slug}`,
          'x-default': `${siteUrl}/es/blog/${post.slug}`,
        },
      },
    },
    {
      url: `${siteUrl}/en/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/es/blog/${post.slug}`,
          en: `${siteUrl}/en/blog/${post.slug}`,
          'x-default': `${siteUrl}/es/blog/${post.slug}`,
        },
      },
    },
  ]);

  return [...staticRoutes, ...blogRoutes];
}
