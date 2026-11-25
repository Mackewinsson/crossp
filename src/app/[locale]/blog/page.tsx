import type { Metadata } from 'next';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { BlogShell } from '@/components/blog/BlogShell';
import { BLOG_COPY } from '@/components/blog/blogCopy';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { getSortedPosts, normalizeBlogLocale } from '@/lib/blog';
import { absoluteUrl, defaultOgImage, SITE_NAME } from '@/lib/seo';

type BlogIndexPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: BlogIndexPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = normalizeBlogLocale(raw);
  const title =
    locale === 'en'
      ? 'Blog for business leaders hiring software teams'
      : 'Blog para líderes que contratan desarrollo de software';
  const description =
    locale === 'en'
      ? 'Practical guides on agencies, freelancers, hiring, no-code limits, and how to evaluate software partners — written for founders and operators.'
      : 'Guías prácticas sobre agencias, freelancers, contratación, límites del no-code y cómo evaluar partners de software — para founders y operadores.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        es: '/es/blog',
        en: '/en/blog',
        'x-default': '/es/blog',
      },
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: absoluteUrl(`/${locale}/blog`),
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      images: [defaultOgImage(title)],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [absoluteUrl('/og.png')],
    },
  };
}

export default async function BlogIndexPage({ params }: BlogIndexPageProps) {
  const { locale: raw } = await params;
  const locale = normalizeBlogLocale(raw);
  const posts = getSortedPosts(locale);
  const copy = BLOG_COPY[locale];
  const blogUrl = absoluteUrl(`/${locale}/blog`);

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: copy.indexTitle,
    description: copy.indexIntro,
    url: blogUrl,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: absoluteUrl(`/${locale}`),
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(`/${locale}/blog/${post.slug}`),
        name: post.title,
      })),
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE_NAME,
        item: absoluteUrl(`/${locale}`),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: blogUrl,
      },
    ],
  };

  return (
    <BlogShell locale={locale}>
      <JsonLd data={collectionLd} />
      <JsonLd data={breadcrumbLd} />
      <PageHero title={copy.indexTitle} intro={copy.indexIntro} />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </Section>
    </BlogShell>
  );
}
