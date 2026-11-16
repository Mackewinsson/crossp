import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';

type HeroProps = {
  title: string;
  titleAccent: string;
  subtitle: string;
  proof: { title: string; description: string }[];
  /** Call-to-action buttons. */
  children: ReactNode;
};

/** Large opening block for a page that sells: headline, one paragraph, actions, proof. */
export function Hero({ title, titleAccent, subtitle, proof, children }: HeroProps) {
  return (
    <section className="border-b border-line bg-bg">
      <Container className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink text-balance">
            {title} <span className="block text-accent">{titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-ink-soft leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">{children}</div>
        </div>

        <dl className="mt-14 sm:mt-20 grid gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-10">
          {proof.map((item) => (
            <div key={item.title}>
              <dt className="text-lg font-semibold text-ink">{item.title}</dt>
              <dd className="mt-1 text-base text-ink-muted leading-relaxed">{item.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
