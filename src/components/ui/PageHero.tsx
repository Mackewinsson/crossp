import type { ReactNode } from 'react';
import type { ContainerWidth } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

type PageHeroProps = {
  title: string;
  intro: string;
  width?: ContainerWidth;
  /** Optional call-to-action buttons. */
  children?: ReactNode;
};

/** Opening block for content pages: the page h1, one paragraph and optional actions. */
export function PageHero({ title, intro, width = 'wide', children }: PageHeroProps) {
  return (
    <Section width={width}>
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink text-balance">
          {title}
        </h1>
        <p className="mt-5 text-lg text-ink-soft leading-relaxed">{intro}</p>
        {children ? <div className="mt-8 flex flex-col sm:flex-row gap-3">{children}</div> : null}
      </div>
    </Section>
  );
}
