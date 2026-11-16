import Link from 'next/link';
import { isClerkEnabled } from '@/lib/env';
import { SignUpClient } from '@/components/auth/SignUpClient';

export default function SignUpPage() {
  if (!isClerkEnabled()) {
    return (
      <main className="min-h-screen bg-bg flex items-center justify-center p-6 text-center">
        <div className="space-y-3">
          <h1 className="text-xl font-bold text-ink">Sign-up not configured</h1>
          <p className="text-sm text-ink-muted">Add Clerk keys to enable authentication.</p>
          <Link href="/" className="text-sm text-accent hover:underline">
            ← Back to site
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg flex items-center justify-center p-4">
      <SignUpClient />
    </main>
  );
}
