import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

const isExternal = (href?: string) => Boolean(href?.startsWith('http'));

export const blogMdxComponents: NonNullable<MDXRemoteProps['components']> = {
  h2: ({ children }) => (
    <h2 className="pt-4 text-xl sm:text-2xl font-bold text-ink">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="pt-2 text-lg sm:text-xl font-semibold text-ink">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-base sm:text-lg text-ink-soft leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-2 list-disc space-y-2 pl-5 text-ink-soft marker:text-accent">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-2 list-decimal space-y-2 pl-5 text-ink-soft marker:text-accent">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1 text-base leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-accent py-1 pl-4 text-base sm:text-lg text-ink [&>p]:text-ink">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent underline underline-offset-2 hover:text-accent-hover"
      rel={isExternal(href) ? 'noopener noreferrer' : undefined}
      target={isExternal(href) ? '_blank' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
};
