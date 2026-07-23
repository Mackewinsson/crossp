import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { BlogContent } from '@/components/blog/BlogContent';
import { BlogShell } from '@/components/blog/BlogShell';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  extractFaqFromMdx,
  getAllBlogSlugs,
  getPostBySlug,
  normalizeBlogLocale,
} from '@/lib/blog';
import { absoluteUrl, getSiteUrl, SITE_NAME } from '@/lib/seo';

type BlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

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
    },
    twitter: {
      title: post.title,
      description: post.description,
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

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteUrl,
    },
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: locale,
    keywords: post.tags.join(', '),
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

  return (
    <BlogShell locale={locale}>
      <JsonLd data={articleLd} />
      {faqLd ? <JsonLd data={faqLd} /> : null}

      <article
        className="relative border-b border-slate-800/80"
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        <Container className="relative py-12 sm:py-16 max-w-3xl">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex text-sm text-cyan-400 hover:text-cyan-300 mb-8"
          >
            ← {locale === 'en' ? 'All articles' : 'Todos los artículos'}
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <time dateTime={post.publishedAt} itemProp="datePublished">
              {new Date(post.publishedAt).toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>
              {post.readingMinutes} {locale === 'en' ? 'min read' : 'min de lectura'}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 text-balance"
            itemProp="headline"
          >
            {post.title}
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed" itemProp="description">
            {post.description}
          </p>

          <div itemProp="articleBody">
            <BlogContent source={post.content} />
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-blue-950/40 via-slate-900/80 to-cyan-950/30 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-2">
                {locale === 'en' ? 'Ready to unblock your roadmap?' : '¿Listo para desbloquear tu roadmap?'}
              </h2>
              <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                {locale === 'en'
                  ? 'Book a free 15-minute call. We will review goals, flag technical risks early, and outline a realistic delivery plan.'
                  : 'Agenda una llamada gratuita de 15 minutos. Revisamos objetivos, riesgos técnicos y un plan de entrega realista.'}
              </p>
              <a
                href="https://calendly.com/mackewinsson/exploring-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 border border-cyan-400/40 min-h-12"
              >
                {locale === 'en' ? 'Book a 15-Min Call' : 'Agendar llamada de 15 min'}
              </a>
            </div>
          </div>
        </Container>
      </article>
    </BlogShell>
  );
}
