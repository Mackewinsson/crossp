type WordmarkProps = {
  href: string;
};

export function Wordmark({ href }: WordmarkProps) {
  return (
    <a href={href} className="text-xl font-bold tracking-tight text-ink">
      Conai<span className="text-accent">Soft</span>
    </a>
  );
}
