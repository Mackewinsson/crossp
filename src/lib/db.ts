import { neon } from '@neondatabase/serverless';

export function getSql() {
  const url = process.env.NEON_DATABASE_URL;
  if (!url) {
    throw new Error('NEON_DATABASE_URL is not configured');
  }
  return neon(url);
}
