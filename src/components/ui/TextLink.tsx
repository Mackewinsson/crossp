import Link from 'next/link';
import type { ReactNode } from 'react';

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Inline "read more" link with a trailing arrow. */
export function TextLink({ href, children, className = '' }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors ${className}`.trim()}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
