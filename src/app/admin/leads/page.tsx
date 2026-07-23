import { getSql } from '@/lib/db';

export const dynamic = 'force-dynamic';

type LeadRow = {
  id: string;
  name: string;
  email: string;
  source: string | null;
  language: string | null;
  created_at: string;
};

export default async function AdminLeadsPage() {
  let leads: LeadRow[] = [];

  try {
    const sql = getSql();
    leads = (await sql`
      SELECT id, name, email, source, language, created_at
      FROM leads
      ORDER BY created_at DESC
    `) as LeadRow[];
  } catch (error) {
    console.error('Admin leads DB error:', error);
  }

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Leads</h1>
        <p className="text-sm text-slate-400 mt-1">
          Contacts from landing forms. Welcome + admin emails send via Resend on each new submission.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-950/80 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Source</th>
                <th className="px-4 py-3 font-semibold">Lang</th>
                <th className="px-4 py-3 font-semibold">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-400">
                    No leads yet.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-800/40">
                    <td className="px-4 py-3 font-medium text-white">{lead.name}</td>
                    <td className="px-4 py-3">
                      <a href={`mailto:${lead.email}`} className="text-cyan-300 hover:underline">
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-slate-300">{lead.source || '—'}</td>
                    <td className="px-4 py-3 text-slate-300 uppercase">{lead.language || '—'}</td>
                    <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
