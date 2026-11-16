import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  buttonClassName,
  type ButtonSize,
  type ButtonVariant,
} from '@/components/ui/buttonStyles';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  id?: string;
  onClick?: () => void;
};

const isExternal = (href: string) => /^https?:\/\//.test(href);
const isRoute = (href: string) => href.startsWith('/') && !href.includes('#');

export function ButtonLink({
  href,
  children,
  variant,
  size,
  className,
  id,
  onClick,
}: ButtonLinkProps) {
  const classes = buttonClassName({ variant, size, className });

  if (isRoute(href)) {
    return (
      <Link href={href} className={classes} id={id} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const externalProps = isExternal(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} className={classes} id={id} onClick={onClick} {...externalProps}>
      {children}
    </a>
  );
}
