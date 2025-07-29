import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for public files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // Check if the pathname has a locale
  const pathnameHasLocale = /^\/(?:es|en)(?:\/|$)/.test(pathname);

  if (pathnameHasLocale) return;

  // Only redirect if we're at the root path
  if (pathname === '/') {
    // Redirect to Spanish (default locale)
    const locale = 'es';
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|.*\\..*).*)',
  ],
}; 