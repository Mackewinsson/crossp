import { SEO_LANDINGS, getLandingPath, type SeoLandingDefinition } from '@/data/seo-landings';
import type { Locale } from '@/lib/locales';
import type { FaqId, ServiceId } from '@/translations/types';

type HomeLinkTarget =
  | { kind: 'landing'; id: SeoLandingDefinition['id'] }
  | { kind: 'blog'; slug: string };

/** Where each homepage service card sends readers who want more detail. */
export const SERVICE_LINKS: Record<ServiceId, HomeLinkTarget> = {
  'new-product': { kind: 'blog', slug: 'how-to-build-mvp-for-startup' },
  'add-ai': { kind: 'landing', id: 'add-ai' },
  'legacy-rebuild': { kind: 'landing', id: 'legacy-rebuild' },
  'dedicated-team': { kind: 'landing', id: 'dedicated-team' },
};

/** The longer article or page behind each homepage FAQ answer. */
export const FAQ_LINKS: Record<FaqId, HomeLinkTarget> = {
  cost: { kind: 'blog', slug: 'custom-software-cost-2026' },
  timeline: { kind: 'blog', slug: 'how-long-does-an-mvp-take' },
  ownership: { kind: 'blog', slug: 'who-owns-the-code-when-hiring' },
  idea: { kind: 'blog', slug: 'validate-software-idea-before-building' },
  'non-technical': { kind: 'blog', slug: 'manage-outsourced-development-team' },
  'after-launch': { kind: 'landing', id: 'dedicated-team' },
};

export function resolveHomeLink(target: HomeLinkTarget, locale: Locale): string {
  if (target.kind === 'blog') {
    return `/${locale}/blog/${target.slug}`;
  }

  const landing = SEO_LANDINGS.find((item) => item.id === target.id);
  if (!landing) {
    throw new Error(`Unknown SEO landing: ${target.id}`);
  }
  return getLandingPath(landing, locale);
}
