import { absoluteUrl, SITE_NAME, SITE_TAGLINE, getSiteUrl } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { CALENDLY_DISCOVERY_URL } from '@/lib/site';

export function SiteJsonLd() {
  const siteUrl = getSiteUrl();

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteUrl,
    logo: absoluteUrl('/favicon.ico'),
    description: SITE_TAGLINE,
    email: process.env.ADMIN_EMAIL || undefined,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: CALENDLY_DISCOVERY_URL,
        availableLanguage: ['Spanish', 'English'],
      },
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: siteUrl,
    inLanguage: ['es', 'en'],
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteUrl,
    },
  };

  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: siteUrl,
    image: absoluteUrl('/favicon.ico'),
    description:
      'Software and AI engineering partner for web platforms, mobile apps, RAG systems, and custom AI agents.',
    areaServed: 'Worldwide',
    serviceType: [
      'Custom software development',
      'Dedicated development team',
      'Legacy software rebuild',
      'AI integration',
      'Web and SaaS platforms',
      'React Native mobile apps',
      'Cloud and DevOps',
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: CALENDLY_DISCOVERY_URL,
    },
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
      <JsonLd data={professionalService} />
    </>
  );
}
