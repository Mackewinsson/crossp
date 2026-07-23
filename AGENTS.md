# ConaiSoft agent notes

## Commits
Always run `npm run build` before committing. Fix any build/lint/type errors first; never commit a broken build.

## Leads / Admin / Email (ported from bachataamigos patterns)

### Stack
- **Auth**: Clerk (`/admin` protected via `src/middleware.ts`)
- **DB**: Neon Postgres via `@neondatabase/serverless` (`NEON_DATABASE_URL`)
- **Email**: Resend (`RESEND_API_KEY`) — welcome to lead + notify `ADMIN_EMAIL`

### Schema
See `scripts/schema.sql`
- `leads` — name, email (unique), source, language, created_at
- `email_templates` — `welcome` template with `{{name}}` / `{{email}}`

### Public lead capture
- Forms post to `POST /api/leads` with `{ name, email, source?, language? }`
- `LeadEmailForm` defaults to `/api/leads` (optional `webhookUrl` still supported)

### Admin
- `/admin` dashboard
- `/admin/leads` table
- `/admin/users` list + manual create (`src/app/admin/users/actions.ts`)
- Access: Clerk signed-in user with `publicMetadata.role === "admin"` **or** email in `ADMIN_EMAILS` / `ADMIN_EMAIL`

### SEO / Search Console
- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt` (blocks `/admin`, `/api`, auth)
- `public/llms.txt` → AI crawler summary
- Root metadata includes Open Graph, Twitter, and optional `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- JSON-LD: Organization + WebSite + ProfessionalService

To verify in Google Search Console:
1. Set `NEXT_PUBLIC_SITE_URL` to your live domain
2. Add property → URL prefix or Domain
3. Verification: paste meta token into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (or upload HTML file / DNS TXT)
4. Submit sitemap: `https://YOUR_DOMAIN/sitemap.xml`

### Env
Copy `.env.example` → `.env.local`. Neon project: `conaisoft` (`long-sound-52673896`).

Clerk / Neon / Resend are **optional at runtime**:
- Without Clerk keys → public site works; `/admin` and `/sign-in` show a setup message
- Without Neon → `POST /api/leads` still returns success (`stored: false`) so forms don't break
- Without Resend → leads can still be stored (`emailed: false`)

### Out of scope vs bachataamigos
Events, waitlist, passes, courses, cron reminders — not ported (marketing SaaS, not event registration).
