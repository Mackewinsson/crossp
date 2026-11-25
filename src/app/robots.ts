import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

/** Private / auth surfaces — never crawl. */
const DISALLOW = ['/admin', '/admin/', '/api/', '/sign-in', '/sign-up'] as const;

/**
 * AI crawlers that should explicitly see marketing content + llms.txt.
 * Allowing them helps ChatGPT, Claude, Perplexity, Gemini training/search, etc.
 */
const AI_USER_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'Google-Extended',
  'GoogleOther',
  'ClaudeBot',
  'anthropic-ai',
  'Claude-Web',
  'PerplexityBot',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
  'cohere-ai',
  'Diffbot',
  'FacebookBot',
  'meta-externalagent',
] as const;

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [...DISALLOW],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [...DISALLOW],
      },
      ...AI_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: ['/', '/llms.txt', '/llms-full.txt', '/sitemap.xml'],
        disallow: [...DISALLOW],
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
