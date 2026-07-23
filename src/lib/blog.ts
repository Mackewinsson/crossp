import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogLocale = 'en' | 'es';

export type BlogFrontmatter = {
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  tags: string[];
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  locale: BlogLocale;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

function isLocale(value: string): value is BlogLocale {
  return value === 'en' || value === 'es';
}

function postPath(locale: BlogLocale, slug: string): string {
  return path.join(CONTENT_DIR, locale, `${slug}.mdx`);
}

function parsePostFile(locale: BlogLocale, slug: string, raw: string): BlogPost {
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;

  return {
    slug,
    locale,
    title: frontmatter.title,
    description: frontmatter.description,
    excerpt: frontmatter.excerpt,
    publishedAt: frontmatter.publishedAt,
    updatedAt: frontmatter.updatedAt,
    readingMinutes: frontmatter.readingMinutes,
    tags: frontmatter.tags ?? [],
    content: content.trim(),
  };
}

export function getAllBlogSlugs(): string[] {
  const enDir = path.join(CONTENT_DIR, 'en');
  if (!fs.existsSync(enDir)) return [];

  return fs
    .readdirSync(enDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostBySlug(locale: BlogLocale, slug: string): BlogPost | null {
  const filePath = postPath(locale, slug);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  return parsePostFile(locale, slug, raw);
}

export function getSortedPosts(locale: BlogLocale): BlogPostMeta[] {
  return getAllBlogSlugs()
    .map((slug) => getPostBySlug(locale, slug))
    .filter((post): post is BlogPost => post !== null)
    .map((post) => ({
      slug: post.slug,
      locale: post.locale,
      title: post.title,
      description: post.description,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      readingMinutes: post.readingMinutes,
      tags: post.tags,
    }))
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/** Unique slugs + dates for sitemap (uses EN metadata as the shared slug source). */
export function getSitemapPosts(): Array<{
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}> {
  return getAllBlogSlugs()
    .map((slug) => getPostBySlug('en', slug))
    .filter((post): post is BlogPost => post !== null)
    .map((post) => ({
      slug: post.slug,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
    }));
}

export function extractFaqFromMdx(source: string, fallbackAnswer: string) {
  const headings = [...source.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1].trim());
  if (headings.length < 2) return null;

  return headings.slice(0, 4).map((question) => {
    const escaped = question.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const section = new RegExp(
      `##\\s+${escaped}\\s*\\n([\\s\\S]*?)(?=\\n##\\s+|$)`,
      'm'
    );
    const match = source.match(section);
    const body = match?.[1]?.trim() ?? '';
    const paragraph = body
      .split('\n')
      .map((line) => line.replace(/^[-*]\s+/, '').trim())
      .filter(Boolean)
      .join(' ');

    return {
      question,
      answer: paragraph || fallbackAnswer,
    };
  });
}

export function normalizeBlogLocale(locale: string): BlogLocale {
  return isLocale(locale) ? locale : 'es';
}
