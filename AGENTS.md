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
- `leads` — name, email (unique), source, language, notes (the optional project message from the form), created_at
- `email_templates` — `welcome` template with `{{name}}` / `{{email}}`

### Public lead capture
- Forms post to `POST /api/leads` with `{ name, email, message?, source?, language? }`; `message` is stored in `leads.notes` and appended on repeat submissions
- `LeadForm` (`src/components/lead/LeadForm.tsx`) is the form; `LeadEmailForm` wraps it in a section. Both default to `/api/leads` (optional `webhookUrl` still supported)

### Admin
- `/admin` dashboard
- `/admin/leads` table
- `/admin/users` list + manual create (`src/app/admin/users/actions.ts`)
- Access: Clerk signed-in user with `publicMetadata.role === "admin"` **or** email in `ADMIN_EMAILS` / `ADMIN_EMAIL`

### SEO / Search Console / AI discovery
- `src/app/sitemap.ts` → `/sitemap.xml` (locales, landings, blog; hreflang alternates)
- `src/app/robots.ts` → `/robots.txt` (blocks `/admin`, `/api`, auth; allows major AI crawlers)
- `src/app/llms.txt/route.ts` → `/llms.txt` (llmstxt.org summary; generated from landings + site copy)
- `src/app/llms-full.txt/route.ts` → `/llms-full.txt` (services + full blog index for assistants)
- `src/app/manifest.ts` → `/manifest.webmanifest`
- Root metadata: Open Graph, Twitter, optional `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` + `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- JSON-LD: Organization + WebSite + ProfessionalService; FAQ / Article / Breadcrumb / CollectionPage on key pages

To verify & index in Google Search Console:
1. Set `NEXT_PUBLIC_SITE_URL=https://www.conaisoft.com` (www host — apex redirects)
2. Add property → URL prefix `https://www.conaisoft.com` or Domain `conaisoft.com`
3. Verification: paste meta token into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (or HTML file / DNS TXT)
4. Deploy, confirm `<meta name="google-site-verification">` on a public page
5. Submit sitemap: `https://www.conaisoft.com/sitemap.xml`
6. Optional: URL Inspection → Request indexing for `/es` and top landings
7. Optional Bing: set `NEXT_PUBLIC_BING_SITE_VERIFICATION` and submit the same sitemap

### Env
Copy `.env.example` → `.env.local`. Neon project: `conaisoft` (`long-sound-52673896`).

Clerk / Neon / Resend are **optional at runtime**:
- Without Clerk keys → public site works; `/admin` and `/sign-in` show a setup message
- Without Neon → `POST /api/leads` still returns success (`stored: false`) so forms don't break
- Without Resend → leads can still be stored (`emailed: false`)

### Out of scope vs bachataamigos
Events, waitlist, passes, courses, cron reminders — not ported (marketing SaaS, not event registration).
