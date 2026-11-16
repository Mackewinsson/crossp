import type { ElementType, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function Card({ children, as: Component = 'div', className = '' }: CardProps) {
  return (
    <Component
      className={`rounded-2xl border border-line bg-surface p-6 sm:p-8 ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
