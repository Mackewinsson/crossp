import { ButtonLink } from '@/components/ui/ButtonLink';
import { Hero } from '@/components/ui/Hero';
import { CALENDLY_DISCOVERY_URL, HOME_ANCHORS } from '@/lib/site';
import type { Dictionary } from '@/translations/types';

type HeroSectionProps = {
  copy: Dictionary['hero'];
};

export function HeroSection({ copy }: HeroSectionProps) {
  return (
    <Hero
      title={copy.title}
      titleAccent={copy.titleAccent}
      subtitle={copy.subtitle}
      proof={copy.proof}
    >
      <ButtonLink href={`#${HOME_ANCHORS.contact}`} size="lg">
        {copy.ctaPrimary}
      </ButtonLink>
      <ButtonLink href={CALENDLY_DISCOVERY_URL} variant="secondary" size="lg">
        {copy.ctaSecondary}
      </ButtonLink>
    </Hero>
  );
}
