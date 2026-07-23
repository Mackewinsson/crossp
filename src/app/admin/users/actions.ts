'use server';

import { revalidatePath } from 'next/cache';
import { getSql } from '@/lib/db';
import { isAdminUser } from '@/lib/admin-auth';
import { isClerkEnabled, isNeonEnabled } from '@/lib/env';

export async function createLead(formData: FormData) {
  if (!isClerkEnabled() || !isNeonEnabled()) {
    throw new Error('Admin lead creation requires Clerk and Neon env vars');
  }

  const { currentUser } = await import('@clerk/nextjs/server');
  const user = await currentUser();
  if (!isAdminUser(user)) {
    throw new Error('Unauthorized');
  }

  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim().toLowerCase();
  const source = String(formData.get('source') || 'admin').trim() || 'admin';

  if (!name || !email) {
    throw new Error('Name and email are required');
  }

  const sql = getSql();
  await sql`
    INSERT INTO leads (name, email, source, language)
    VALUES (${name}, ${email}, ${source}, 'es')
    ON CONFLICT (email) DO UPDATE SET
      name = EXCLUDED.name,
      source = EXCLUDED.source
  `;

  revalidatePath('/admin/users');
  revalidatePath('/admin/leads');
  revalidatePath('/admin');
}
