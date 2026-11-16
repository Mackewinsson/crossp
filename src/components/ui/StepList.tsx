type StepListProps = {
  steps: { title: string; description: string }[];
};

const LARGE_SCREEN_COLUMNS: Record<number, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

/** Numbered steps in a row. Lays out three or four steps evenly on large screens. */
export function StepList({ steps }: StepListProps) {
  const columns = LARGE_SCREEN_COLUMNS[steps.length] ?? LARGE_SCREEN_COLUMNS[4];

  return (
    <ol className={`grid gap-10 sm:grid-cols-2 lg:gap-8 ${columns}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="border-t border-line-strong pt-6">
          <span className="text-sm font-semibold text-accent" aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
          <p className="mt-2 text-base text-ink-soft leading-relaxed">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
