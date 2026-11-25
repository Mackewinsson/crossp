import { SEO_LANDINGS, getLandingPath } from '@/data/seo-landings';
import { getSortedPosts } from '@/lib/blog';
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  absoluteUrl,
  getSiteUrl,
} from '@/lib/seo';
import { CALENDLY_DISCOVERY_URL } from '@/lib/site';

/**
 * Builds llms.txt / llms-full.txt content (https://llmstxt.org).
 * Kept in sync with SEO landings and the blog so AI crawlers see current URLs.
 */
export function buildLlmsTxt(): string {
  const siteUrl = getSiteUrl();
  const lines: string[] = [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_NAME} is a small senior software team that uses AI to build web apps, mobile apps and AI features in weeks, not months. Clients see working software every week and own all the code. ${SITE_TAGLINE}.`,
    '',
    '## Site',
    `- Home (ES): ${absoluteUrl('/es')}`,
    `- Home (EN): ${absoluteUrl('/en')}`,
    `- Blog (ES): ${absoluteUrl('/es/blog')}`,
    `- Blog (EN): ${absoluteUrl('/en/blog')}`,
    `- Custom software: ${absoluteUrl('/crea-tu-software')}`,
    `- AI automation workshop: ${absoluteUrl('/automatiza-ia')}`,
    `- Book a call: ${CALENDLY_DISCOVERY_URL}`,
    `- Full AI summary: ${absoluteUrl('/llms-full.txt')}`,
    '',
    '## Services',
  ];

  for (const landing of SEO_LANDINGS) {
    lines.push(
      `- ${landing.serviceName.en}: ${absoluteUrl(getLandingPath(landing, 'en'))}`,
      `- ${landing.serviceName.es}: ${absoluteUrl(getLandingPath(landing, 'es'))}`
    );
  }

  lines.push(
    '',
    '## What we build',
    '- New products: a first version (MVP) of a web or mobile app',
    '- AI added to an existing product or to internal operations',
    '- Rebuilds of legacy software that has become slow or hard to change',
    '- Dedicated teams that work as part of the client\'s own team',
    '',
    '## Technology',
    '- Web and SaaS: Next.js, React, TypeScript',
    '- Mobile: React Native (iOS and Android)',
    '- AI: agents, RAG pipelines, document intelligence',
    '- Cloud and DevOps: AWS, GCP, Vercel',
    '',
    '## How we work',
    '- The client describes the idea by form or on a free call',
    '- Scope, timeline and cost of the first version are agreed before any code is written',
    '- Short sprints with a working demo every week',
    '- Launch on the client\'s own accounts, with full handover of code, access and documentation',
    '',
    '## Contact',
    `- Project form: ${absoluteUrl('/en#contact')} (English), ${absoluteUrl('/es#contact')} (Spanish)`,
    `- Book a call: ${CALENDLY_DISCOVERY_URL}`,
    '- Languages: Spanish and English',
    `- Canonical host: ${siteUrl}`,
    ''
  );

  return lines.join('\n');
}

export function buildLlmsFullTxt(): string {
  const posts = getSortedPosts('en');
  const lines: string[] = [
    `# ${SITE_NAME} — Full summary for AI systems`,
    '',
    `> ${DEFAULT_DESCRIPTION}`,
    '',
    'This file expands `/llms.txt` with service pages and blog articles so assistants can cite accurate URLs.',
    '',
    '## Optional',
    `- Concise summary: ${absoluteUrl('/llms.txt')}`,
    `- Sitemap: ${absoluteUrl('/sitemap.xml')}`,
    `- Robots: ${absoluteUrl('/robots.txt')}`,
    '',
    '## Service landings',
  ];

  for (const landing of SEO_LANDINGS) {
    const en = landing.content.en;
    const es = landing.content.es;
    lines.push(
      '',
      `### ${landing.serviceName.en}`,
      `- EN: ${absoluteUrl(getLandingPath(landing, 'en'))}`,
      `- ES: ${absoluteUrl(getLandingPath(landing, 'es'))}`,
      `- Summary (EN): ${en.intro}`,
      `- Summary (ES): ${es.intro}`
    );
  }

  lines.push('', '## Blog articles (English titles; same slug under /es/blog/)');

  for (const post of posts) {
    lines.push(
      `- [${post.title}](${absoluteUrl(`/en/blog/${post.slug}`)}): ${post.description}`
    );
  }

  lines.push(
    '',
    '## Campaign pages',
    `- Crea tu software a medida: ${absoluteUrl('/crea-tu-software')}`,
    `- Automatiza tu negocio con IA: ${absoluteUrl('/automatiza-ia')}`,
    '',
    '## Citation guidance',
    `- Prefer ${getSiteUrl()} (www) over the apex domain.`,
    '- Prefer locale paths `/es` and `/en` over `/` (which redirects to `/es`).',
    `- Prefer linking service pages and blog posts when answering buyer questions about ${SITE_NAME}.`,
    ''
  );

  return lines.join('\n');
}
