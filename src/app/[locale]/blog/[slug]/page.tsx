import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { BlogContent } from '@/components/blog/BlogContent';
import { BlogShell } from '@/components/blog/BlogShell';
import { BLOG_COPY } from '@/components/blog/blogCopy';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card } from '@/components/ui/Card';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  extractFaqFromMdx,
  getAllBlogSlugs,
  getPostBySlug,
  normalizeBlogLocale,
} from '@/lib/blog';
import { SEO_LANDINGS } from '@/data/seo-landings';
import { formatDate } from '@/lib/dates';
import { getDictionary } from '@/lib/i18n';
import {
  SITE_LOGO_PATH,
  SITE_NAME,
  absoluteUrl,
  defaultOgImage,
  getSiteUrl,
} from '@/lib/seo';
import { CALENDLY_DISCOVERY_URL, HOME_ANCHORS } from '@/lib/site';

type BlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const BLOG_TO_LANDING: Record<string, (typeof SEO_LANDINGS)[number]['id']> = {
  'dedicated-development-team-explained': 'dedicated-team',
  'when-to-rebuild-legacy-software': 'legacy-rebuild',
  'add-ai-to-existing-software': 'add-ai',
  'manage-outsourced-development-team': 'dedicated-team',
  'fixed-price-vs-time-and-materials': 'dedicated-team',
  'how-to-build-mvp-for-startup': 'dedicated-team',
};

const RELATED_INTRO_LENGTH = 140;

export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return ['es', 'en'].flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = normalizeBlogLocale(raw);
  const post = getPostBySlug(locale, slug);
  if (!post) return {};

  const path = `/${locale}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: path,
      languages: {
        es: `/es/blog/${post.slug}`,
        en: `/en/blog/${post.slug}`,
        'x-default': `/es/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(path),
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      tags: post.tags,
      images: [defaultOgImage(post.title)],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [absoluteUrl('/og.png')],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale: raw, slug } = await params;
  const locale = normalizeBlogLocale(raw);
  const post = getPostBySlug(locale, slug);
  if (!post) notFound();

  const path = `/${locale}/blog/${post.slug}`;
  const siteUrl = getSiteUrl();
  const faqItems = extractFaqFromMdx(post.content, post.excerpt);
  const relatedLandingId = BLOG_TO_LANDING[post.slug];
  const relatedLanding = relatedLandingId
    ? SEO_LANDINGS.find((item) => item.id === relatedLandingId)
    : undefined;

  const articleUrl = absoluteUrl(path);
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    image: absoluteUrl('/og.png'),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(SITE_LOGO_PATH),
        width: 500,
        height: 500,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    inLanguage: locale,
    keywords: post.tags.join(', '),
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
        item: absoluteUrl(`/${locale}/blog`),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  const faqLd = faqItems
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  const copy = BLOG_COPY[locale];
  const { hero } = getDictionary(locale);

  return (
    <BlogShell locale={locale}>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      {faqLd ? <JsonLd data={faqLd} /> : null}

      <article className="border-b border-line" itemScope itemType="https://schema.org/Article">
        <Container width="narrow" className="py-12 sm:py-16">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex text-sm font-semibold text-accent hover:text-accent-hover"
          >
            <span aria-hidden>←&nbsp;</span>
            {copy.allArticles}
          </Link>

          <p className="mt-8 text-sm text-ink-muted">
            <time dateTime={post.publishedAt} itemProp="datePublished">
              {formatDate(post.publishedAt, locale)}
            </time>
            <span aria-hidden> · </span>
            {post.readingMinutes} {copy.minutesRead}
          </p>

          <h1
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink text-balance"
            itemProp="headline"
          >
            {post.title}
          </h1>
          <p className="mt-6 mb-10 text-lg text-ink-soft leading-relaxed" itemProp="description">
            {post.description}
          </p>

          <div itemProp="articleBody">
            <BlogContent source={post.content} />
          </div>

          <div className="mt-12 space-y-6 border-t border-line pt-8">
            {relatedLanding ? (
              <Card>
                <p className="text-sm text-ink-muted">{copy.relatedService}</p>
                <Link
                  href={`/${locale}/${relatedLanding.slugs[locale]}`}
                  className="mt-2 inline-flex text-lg font-semibold text-ink hover:text-accent transition-colors"
                >
                  {relatedLanding.serviceName[locale]}
                  <span aria-hidden>&nbsp;→</span>
                </Link>
                <p className="mt-2 text-base text-ink-soft leading-relaxed">
                  {relatedLanding.content[locale].intro.slice(0, RELATED_INTRO_LENGTH)}…
                </p>
              </Card>
            ) : null}

            <Card>
              <h2 className="text-xl font-bold text-ink">{copy.ctaTitle}</h2>
              <p className="mt-2 text-base text-ink-soft leading-relaxed">{copy.ctaBody}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`/${locale}#${HOME_ANCHORS.contact}`}>{hero.ctaPrimary}</ButtonLink>
                <ButtonLink href={CALENDLY_DISCOVERY_URL} variant="secondary">
                  {hero.ctaSecondary}
                </ButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </article>
    </BlogShell>
  );
}
