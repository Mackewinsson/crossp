import Link from 'next/link';
import type { BlogLocale, BlogPostMeta } from '@/lib/blog';

type BlogPostCardProps = {
  post: BlogPostMeta;
  locale: BlogLocale;
};

export function BlogPostCard({ post, locale }: BlogPostCardProps) {
  const href = `/${locale}/blog/${post.slug}`;

  return (
    <article className="glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-cyan-400 mb-3">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">
            {post.readingMinutes} {locale === 'en' ? 'min read' : 'min de lectura'}
          </span>
        </div>
        <h2 className="text-xl font-bold text-white mb-3 leading-snug">
          <Link href={href} className="hover:text-cyan-300 transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-5">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300"
      >
        {locale === 'en' ? 'Read article' : 'Leer artículo'}
        <span className="ml-1.5" aria-hidden>
          →
        </span>
      </Link>
    </article>
  );
}
