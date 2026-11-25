import {
  SITE_KNOWS_ABOUT,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_OG_IMAGE_PATH,
  SITE_TAGLINE,
  absoluteUrl,
  getSiteUrl,
} from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { CALENDLY_DISCOVERY_URL } from '@/lib/site';

export function SiteJsonLd() {
  const siteUrl = getSiteUrl();
  const logoUrl = absoluteUrl(SITE_LOGO_PATH);
  const imageUrl = absoluteUrl(SITE_OG_IMAGE_PATH);
  const orgId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE_NAME,
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
          width: 500,
          height: 500,
        },
        image: imageUrl,
        description: SITE_TAGLINE,
        email: process.env.ADMIN_EMAIL || undefined,
        knowsAbout: [...SITE_KNOWS_ABOUT],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            url: CALENDLY_DISCOVERY_URL,
            availableLanguage: ['Spanish', 'English'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: SITE_NAME,
        url: siteUrl,
        description: SITE_TAGLINE,
        inLanguage: ['es', 'en'],
        publisher: { '@id': orgId },
        potentialAction: {
          '@type': 'ReadAction',
          target: [absoluteUrl('/es'), absoluteUrl('/en')],
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#professional-service`,
        name: SITE_NAME,
        url: siteUrl,
        image: imageUrl,
        logo: logoUrl,
        description:
          'Software and AI engineering partner for web platforms, mobile apps, RAG systems, and custom AI agents.',
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide',
        },
        serviceType: [
          'Custom software development',
          'Dedicated development team',
          'Legacy software rebuild',
          'AI integration',
          'Web and SaaS platforms',
          'React Native mobile apps',
          'Cloud and DevOps',
        ],
        provider: { '@id': orgId },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          url: CALENDLY_DISCOVERY_URL,
        },
      },
    ],
  };

  return <JsonLd data={graph} />;
}
