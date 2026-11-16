import { Header } from '@/components/layout/Header';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { BlogLocale } from '@/lib/blog';

type BlogShellProps = {
  children: React.ReactNode;
  locale: BlogLocale;
};

export function BlogShell({ children, locale }: BlogShellProps) {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
