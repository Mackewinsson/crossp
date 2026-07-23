'use client';

import { ClerkProvider } from '@clerk/nextjs';

export function Providers({ children }: { children: React.ReactNode }) {
  const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  if (!clerkEnabled) {
    return <>{children}</>;
  }

  return <ClerkProvider>{children}</ClerkProvider>;
}
