import type { ReactNode } from 'react';
import { Container, type ContainerWidth } from '@/components/ui/Container';

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: 'default' | 'alt';
  /** `narrow` keeps long-form text at a readable line length. */
  width?: ContainerWidth;
  className?: string;
};

const TONES = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
} as const;

export function Section({
  children,
  id,
  tone = 'default',
  width = 'wide',
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-b border-line py-16 sm:py-24 ${TONES[tone]} ${className}`.trim()}
    >
      <Container width={width}>{children}</Container>
    </section>
  );
}
