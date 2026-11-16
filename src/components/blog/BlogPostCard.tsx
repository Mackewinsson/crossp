import Link from 'next/link';
import { BLOG_COPY } from '@/components/blog/blogCopy';
import { Card } from '@/components/ui/Card';
import { TextLink } from '@/components/ui/TextLink';
import type { BlogLocale, BlogPostMeta } from '@/lib/blog';
import { formatDate } from '@/lib/dates';

type BlogPostCardProps = {
  post: BlogPostMeta;
  locale: BlogLocale;
};

const MAX_TAGS = 3;

export function BlogPostCard({ post, locale }: BlogPostCardProps) {
  const copy = BLOG_COPY[locale];
  const href = `/${locale}/blog/${post.slug}`;

  return (
    <Card as="article" className="flex h-full flex-col">
      <p className="text-sm text-ink-muted">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale, 'short')}</time>
        <span aria-hidden> · </span>
        {post.readingMinutes} {copy.minutesRead}
      </p>
      <h2 className="mt-3 text-xl font-bold leading-snug text-ink">
        <Link href={href} className="hover:text-accent transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-base text-ink-soft leading-relaxed">{post.excerpt}</p>
      <p className="mt-4 text-sm text-ink-muted">{post.tags.slice(0, MAX_TAGS).join(' · ')}</p>
      <div className="mt-auto pt-6">
        <TextLink href={href}>{copy.readArticle}</TextLink>
      </div>
    </Card>
  );
}
