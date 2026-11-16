import type { Metadata } from 'next';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { BlogShell } from '@/components/blog/BlogShell';
import { BLOG_COPY } from '@/components/blog/blogCopy';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { getSortedPosts, normalizeBlogLocale } from '@/lib/blog';
import { absoluteUrl, SITE_NAME } from '@/lib/seo';

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
    },
  };
}

export default async function BlogIndexPage({ params }: BlogIndexPageProps) {
  const { locale: raw } = await params;
  const locale = normalizeBlogLocale(raw);
  const posts = getSortedPosts(locale);

  const copy = BLOG_COPY[locale];

  return (
    <BlogShell locale={locale}>
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
