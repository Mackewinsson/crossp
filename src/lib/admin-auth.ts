import type { User } from '@clerk/nextjs/server';

const DEFAULT_ADMIN_EMAILS = ['mackewinsson@gmail.com'];

export function getAdminEmails(): string[] {
  const fromEnv = process.env.ADMIN_EMAILS || process.env.ADMIN_EMAIL || '';
  const parsed = fromEnv
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return parsed.length > 0 ? parsed : DEFAULT_ADMIN_EMAILS;
}

export function isAdminUser(user: User | null | undefined): boolean {
  if (!user) return false;
  if (user.publicMetadata?.role === 'admin') return true;
  const emails = user.emailAddresses.map((e) => e.emailAddress.toLowerCase());
  const allowlist = getAdminEmails();
  return emails.some((email) => allowlist.includes(email));
}
