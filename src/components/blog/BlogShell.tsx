import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import type { BlogLocale } from '@/lib/blog';
import { SEO_LANDINGS } from '@/data/seo-landings';

type BlogShellProps = {
  children: React.ReactNode;
  locale: BlogLocale;
};

export function BlogShell({ children, locale }: BlogShellProps) {
  const serviceLinks = SEO_LANDINGS.map((landing) => ({
    href: `/${locale}/${landing.slugs[locale]}`,
    label: landing.serviceName[locale],
  }));

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100">
      <Header />
      <main className="pb-16">{children}</main>
      <footer className="py-8 px-4 bg-[#05070a] border-t border-slate-800/80 text-center text-xs text-slate-500 font-mono">
        <p className="leading-relaxed text-balance mb-3">
          © 2026 ConaiSoft. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-3xl mx-auto">
          <Link href={`/${locale}/blog`} className="text-cyan-500/80 hover:text-cyan-400">
            Blog
          </Link>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cyan-500/80 hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
