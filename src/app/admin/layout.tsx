import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isClerkEnabled } from '@/lib/env';
import { isAdminUser } from '@/lib/admin-auth';
import { AdminUserButton } from '@/components/admin/AdminUserButton';

const NAV = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/leads', label: 'Leads' },
  { href: '/admin/users', label: 'Users' },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!isClerkEnabled()) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-3">
          <h1 className="text-xl font-bold text-white">Admin not configured yet</h1>
          <p className="text-sm text-slate-400">
            Add Clerk keys (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`) to enable the admin panel.
          </p>
          <Link href="/" className="inline-block text-sm text-cyan-400 hover:underline">
            ← Back to site
          </Link>
        </div>
      </main>
    );
  }

  const { currentUser } = await import('@clerk/nextjs/server');
  const user = await currentUser();
  if (!isAdminUser(user)) {
    redirect('/');
  }

  return (
    <div className="min-h-[100dvh] bg-slate-950 text-slate-100">
      <div className="flex min-h-[100dvh]">
        <aside className="hidden md:flex w-56 flex-col border-r border-slate-800 bg-slate-900/80">
          <div className="px-4 py-4 border-b border-slate-800">
            <p className="text-sm font-semibold text-white">ConaiSoft</p>
            <p className="text-xs text-slate-400 mt-0.5">Admin</p>
          </div>
          <nav className="flex-1 p-3 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-4 py-3">
            <div className="flex items-center gap-3 md:hidden">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="text-xs text-slate-300 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <span className="hidden md:block text-sm text-slate-400">Admin panel</span>
            <AdminUserButton />
          </header>
          <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-24 md:pb-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
