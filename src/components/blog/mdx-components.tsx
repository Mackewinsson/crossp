import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

export const blogMdxComponents: NonNullable<MDXRemoteProps['components']> = {
  h2: ({ children }) => (
    <h2 className="text-xl sm:text-2xl font-bold text-white pt-4 scroll-mt-28">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg sm:text-xl font-semibold text-white pt-2 scroll-mt-28">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-2 space-y-2 list-disc pl-5 marker:text-cyan-400 text-slate-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-2 space-y-2 list-decimal pl-5 marker:text-cyan-400 text-slate-300">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-sm sm:text-base leading-relaxed pl-1">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-cyan-500/60 pl-4 py-1 text-cyan-100/90 italic text-base sm:text-lg [&>p]:text-cyan-100/90 [&>p]:italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      target={href?.startsWith('http') ? '_blank' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
};
