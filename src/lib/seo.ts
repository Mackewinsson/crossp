export const SITE_NAME = 'ConaiSoft';
export const SITE_TAGLINE = 'Software & AI Engineering Partner';

/** Square logo (≥112px) for Organization / publisher schema. */
export const SITE_LOGO_PATH = '/img/logo/light.png';

/** Default social share image (Open Graph / Twitter). */
export const SITE_OG_IMAGE_PATH = '/og.png';

export const SITE_KNOWS_ABOUT = [
  'Custom software development',
  'Dedicated development teams',
  'Legacy software rebuild',
  'AI agents and RAG pipelines',
  'Next.js and React SaaS',
  'React Native mobile apps',
  'Nearshore software engineering',
] as const;

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
  'A small senior team that uses AI to build your web app, mobile app or AI feature in weeks, not months. You see it working every week and you own all the code.';

export const DEFAULT_DESCRIPTION_ES =
  'Un equipo pequeño y senior que usa IA para construir tu aplicación web, app móvil o función de IA en semanas, no en meses. La ves funcionando cada semana y el código es tuyo.';

export const SEO_KEYWORDS = [
  'ConaiSoft',
  'equipo dedicado de desarrollo',
  'dedicated development team',
  'legacy software rebuild',
  'reconstruir software legacy',
  'software development',
  'AI engineering',
  'Next.js development',
  'custom software',
  'custom CRM cost',
  'SaaS development',
  'RAG',
  'AI agents',
  'React Native',
  'software consultancy',
  'nearshore software development',
  'desarrollo de software a medida',
  'automatización con IA',
];

export function absoluteUrl(path = '/') {
  const base = getSiteUrl();
  if (!path || path === '/') return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function defaultOgImage(alt = `${SITE_NAME} — ${SITE_TAGLINE}`) {
  return {
    url: absoluteUrl(SITE_OG_IMAGE_PATH),
    width: 1200,
    height: 630,
    alt,
  };
}
