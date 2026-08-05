export const SITE_NAME = 'ConaiSoft';
export const SITE_TAGLINE = 'Software & AI Engineering Partner';

// Vercel's domain config redirects the apex (conaisoft.com) to www.conaisoft.com
// at the edge (307, before Next.js runs). Canonical/OG/sitemap/robots URLs must
// point at the same host that is actually served, or Google treats them as a
// duplicate-without-user-selected-canonical / redirect-chain mismatch and skips
// indexing. Keep this in sync with the Vercel project's primary domain.
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.conaisoft.com';
  return raw.replace(/\/$/, '');
}

export const DEFAULT_DESCRIPTION =
  'Ship web platforms, mobile apps, and AI features with senior architecture, weekly deliverables, and 100% code ownership. Book a discovery call.';

export const DEFAULT_DESCRIPTION_ES =
  'Desarrollamos plataformas web, apps móviles y capacidades de IA con arquitectura senior, entregas semanales y propiedad total del código. Agenda una llamada.';

export const SEO_KEYWORDS = [
  'ConaiSoft',
  'software development',
  'AI engineering',
  'Next.js development',
  'custom software',
  'SaaS development',
  'RAG',
  'AI agents',
  'React Native',
  'software consultancy',
];

export function absoluteUrl(path = '/') {
  const base = getSiteUrl();
  if (!path || path === '/') return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
