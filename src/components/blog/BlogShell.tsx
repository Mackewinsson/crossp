import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import type { BlogLocale } from '@/lib/blog';

type BlogShellProps = {
  children: React.ReactNode;
  locale: BlogLocale;
};

export function BlogShell({ children, locale }: BlogShellProps) {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100">
      <Header />
      <main className="pb-16">{children}</main>
      <footer className="py-8 px-4 bg-[#05070a] border-t border-slate-800/80 text-center text-xs text-slate-500 font-mono">
        <p className="leading-relaxed text-balance mb-2">
          © 2026 ConaiSoft. All rights reserved.
        </p>
        <Link href={`/${locale}/blog`} className="text-cyan-500/80 hover:text-cyan-400">
          Blog
        </Link>
      </footer>
    </div>
  );
}
