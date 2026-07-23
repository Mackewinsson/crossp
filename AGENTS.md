# ConaiSoft agent notes

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

### Env
Copy `.env.example` → `.env.local`. Neon project: `conaisoft` (`long-sound-52673896`).

Clerk / Neon / Resend are **optional at runtime**:
- Without Clerk keys → public site works; `/admin` and `/sign-in` show a setup message
- Without Neon → `POST /api/leads` still returns success (`stored: false`) so forms don't break
- Without Resend → leads can still be stored (`emailed: false`)

### Out of scope vs bachataamigos
Events, waitlist, passes, courses, cron reminders — not ported (marketing SaaS, not event registration).
