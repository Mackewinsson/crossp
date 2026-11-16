type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl mb-10 sm:mb-14 ${className}`.trim()}>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-ink-soft leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
