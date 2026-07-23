export function isClerkEnabled() {
  return Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
  );
}

export function isNeonEnabled() {
  return Boolean(process.env.NEON_DATABASE_URL);
}

export function isResendEnabled() {
  return Boolean(process.env.RESEND_API_KEY);
}
