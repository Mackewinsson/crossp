import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

const clerkEnabled = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
);

const isProtectedRoute = createRouteMatcher(['/admin(.*)']);
const isClerkRoute = createRouteMatcher([
  '/admin(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

function redirectRootToEs(req: NextRequest) {
  if (req.nextUrl.pathname !== '/') return null;
  const url = req.nextUrl.clone();
  url.pathname = '/es';
  return NextResponse.redirect(url, 308);
}

const clerkHandler = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const localeRedirect = redirectRootToEs(req);
  if (localeRedirect) return localeRedirect;

  // Keep Clerk off marketing pages so they stay cacheable and never inherit
  // development-instance X-Robots-Tag: noindex.
  if (clerkEnabled && isClerkRoute(req)) {
    return clerkHandler(req, event);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
