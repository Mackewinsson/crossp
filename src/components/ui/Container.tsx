import React from 'react';

export type ContainerWidth = 'wide' | 'narrow';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /** `narrow` is a centred column sized for reading. */
  width?: ContainerWidth;
}

// Width is a prop, not a className override: two max-width utilities on one
// element do not reliably resolve to the one written last.
const WIDTHS: Record<ContainerWidth, string> = {
  wide: 'max-w-7xl',
  narrow: 'max-w-3xl',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  width = 'wide',
}) => {
  return (
    <Component className={`${WIDTHS[width]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </Component>
  );
};
