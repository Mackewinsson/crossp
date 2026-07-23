import { getSql } from '@/lib/db';
import { createLead } from './actions';

export const dynamic = 'force-dynamic';

type LeadRow = {
  id: string;
  name: string;
  email: string;
  source: string | null;
  created_at: string;
};

export default async function AdminUsersPage() {
  let users: LeadRow[] = [];

  try {
    const sql = getSql();
    users = (await sql`
      SELECT id, name, email, source, created_at
      FROM leads
      ORDER BY created_at DESC
    `) as LeadRow[];
  } catch (error) {
    console.error('Admin users DB error:', error);
  }

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <p className="text-sm text-slate-400 mt-1">
          Lead contacts stored in Neon (same records as Leads). Add a contact manually if needed.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-800">
            <h2 className="font-semibold text-white">Registered ({users.length})</h2>
          </div>
          <ul className="divide-y divide-slate-800">
            {users.length === 0 ? (
              <li className="px-5 py-10 text-center text-sm text-slate-400">No users yet.</li>
            ) : (
              users.map((user) => (
                <li key={user.id} className="px-5 py-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-white truncate">{user.name}</p>
                    <p className="text-xs text-slate-400 truncate">{user.email}</p>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/20 px-2 py-1 rounded">
                    {user.source || 'website'}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="font-semibold text-white mb-1">Add user</h2>
          <p className="text-xs text-slate-400 mb-4">Creates or updates a lead by email.</p>
          <form action={createLead} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-xs text-slate-400 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-slate-400 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-white"
              />
            </div>
            <div>
              <label htmlFor="source" className="block text-xs text-slate-400 mb-1">
                Source
              </label>
              <input
                id="source"
                name="source"
                defaultValue="admin"
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold py-2.5"
            >
              Save user
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
