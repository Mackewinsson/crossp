type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  /** Drop the bottom spacing when the heading sits beside its content, not above it. */
  flush?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  flush = false,
  className = '',
}: SectionHeadingProps) {
  const spacing = flush ? '' : 'mb-10 sm:mb-14';

  return (
    <div className={`max-w-2xl ${spacing} ${className}`.replace(/\s+/g, ' ').trim()}>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-ink-soft leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
