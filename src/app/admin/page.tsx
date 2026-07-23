import Link from 'next/link';
import { getSql } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  let leadCount = 0;
  let latest: { name: string; email: string; created_at: string }[] = [];

  try {
    const sql = getSql();
    const countRows = await sql`SELECT COUNT(*)::int AS count FROM leads`;
    leadCount = (countRows[0] as { count: number })?.count || 0;
    latest = (await sql`
      SELECT name, email, created_at
      FROM leads
      ORDER BY created_at DESC
      LIMIT 5
    `) as { name: string; email: string; created_at: string }[];
  } catch (error) {
    console.error('Admin dashboard DB error:', error);
  }

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-slate-400 mt-1">Leads captured from the website and landing pages.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Total leads</p>
          <p className="text-3xl font-bold text-white mt-2">{leadCount}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Quick links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/admin/leads" className="text-slate-200 hover:text-cyan-300">
              View all leads →
            </Link>
            <Link href="/admin/users" className="text-slate-200 hover:text-cyan-300">
              Manage users →
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-800">
          <h2 className="font-semibold text-white">Latest leads</h2>
        </div>
        <ul className="divide-y divide-slate-800">
          {latest.length === 0 ? (
            <li className="px-5 py-8 text-sm text-slate-400 text-center">No leads yet.</li>
          ) : (
            latest.map((lead) => (
              <li key={`${lead.email}-${lead.created_at}`} className="px-5 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium text-white truncate">{lead.name}</p>
                  <p className="text-xs text-slate-400 truncate">{lead.email}</p>
                </div>
                <time className="text-xs text-slate-500 whitespace-nowrap">
                  {new Date(lead.created_at).toLocaleString()}
                </time>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
