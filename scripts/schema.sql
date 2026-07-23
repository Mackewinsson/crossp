-- ConaiSoft Neon schema (leads + email templates)
-- Project: conaisoft (long-sound-52673896)

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  source TEXT DEFAULT 'website',
  language TEXT DEFAULT 'es',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT leads_email_unique UNIQUE (email)
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);

CREATE TABLE IF NOT EXISTS email_templates (
  id TEXT PRIMARY KEY,
  subject_es TEXT NOT NULL,
  subject_en TEXT NOT NULL,
  body_es TEXT NOT NULL,
  body_en TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO email_templates (id, subject_es, subject_en, body_es, body_en)
VALUES (
  'welcome',
  'Gracias por contactar a ConaiSoft',
  'Thanks for contacting ConaiSoft',
  '<p>Hola {{name}},</p><p>Recibimos tu mensaje. Te contactaremos pronto para hablar de tu proyecto.</p><p>— Equipo ConaiSoft</p>',
  '<p>Hi {{name}},</p><p>We received your message. We will get back to you soon to discuss your project.</p><p>— ConaiSoft Team</p>'
)
ON CONFLICT (id) DO NOTHING;
