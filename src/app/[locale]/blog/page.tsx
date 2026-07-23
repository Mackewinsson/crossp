import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { BlogShell } from '@/components/blog/BlogShell';
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

  return (
    <BlogShell locale={locale}>
      <section className="relative border-b border-slate-800/80 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-5 uppercase tracking-wider">
              {locale === 'en' ? 'Insights for buyers' : 'Para quien contrata'}
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 text-balance">
              {locale === 'en'
                ? 'Answers for business people who hire development'
                : 'Respuestas para negocios que contratan desarrollo'}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {locale === 'en'
                ? 'Clear guidance on agencies, freelancers, in-house hiring, no-code limits, and how to choose a partner without getting locked in.'
                : 'Guía clara sobre agencias, freelancers, contratación in-house, límites del no-code y cómo elegir un partner sin quedar atrapado.'}
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </Container>
    </BlogShell>
  );
}
