import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getSql } from '@/lib/db';
import {
  compileLeadTemplate,
  getAdminLeadNotificationHtml,
  getDefaultWelcomeEmailHtml,
  type LeadLanguage,
} from '@/emails/leadEmails';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function getFromAddress() {
  return process.env.RESEND_FROM_EMAIL || 'ConaiSoft <onboarding@resend.dev>';
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const source = typeof body.source === 'string' ? body.source.trim() : 'website';
    const language: LeadLanguage = body.language === 'en' ? 'en' : 'es';

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    if (!process.env.NEON_DATABASE_URL) {
      console.warn('NEON_DATABASE_URL missing — lead accepted but not stored');
      return NextResponse.json({
        success: true,
        stored: false,
        emailed: false,
        message: 'Lead accepted. Configure Neon + Resend to persist and email.',
      });
    }

    const sql = getSql();
    await sql`
      INSERT INTO leads (name, email, source, language)
      VALUES (${name}, ${email}, ${source}, ${language})
      ON CONFLICT (email) DO UPDATE SET
        name = EXCLUDED.name,
        source = EXCLUDED.source,
        language = EXCLUDED.language
      RETURNING id
    `;

    const resend = getResend();
    if (!resend) {
      console.warn('RESEND_API_KEY missing — lead saved without email');
      return NextResponse.json({ success: true, stored: true, emailed: false });
    }

    let welcomeSubject =
      language === 'en' ? 'Thanks for contacting ConaiSoft' : 'Gracias por contactar a ConaiSoft';
    let welcomeHtml = getDefaultWelcomeEmailHtml(name, language);

    try {
      const templates = await sql`SELECT * FROM email_templates WHERE id = 'welcome' LIMIT 1`;
      if (templates.length > 0) {
        const t = templates[0] as {
          subject_es: string;
          subject_en: string;
          body_es: string;
          body_en: string;
        };
        const compiled = compileLeadTemplate(
          language === 'en' ? t.body_en : t.body_es,
          language === 'en' ? t.subject_en : t.subject_es,
          { name, email }
        );
        welcomeSubject = compiled.subject;
        welcomeHtml = compiled.html;
      }
    } catch (templateErr) {
      console.error('Failed loading welcome template:', templateErr);
    }

    const { error: welcomeError } = await resend.emails.send({
      from: getFromAddress(),
      to: email,
      subject: welcomeSubject,
      html: welcomeHtml,
    });

    if (welcomeError) {
      console.error('Resend welcome error:', welcomeError);
    }

    try {
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail) {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://conaisoft.com';
        await resend.emails.send({
          from: getFromAddress(),
          to: adminEmail,
          subject: `New lead: ${name}`,
          html: getAdminLeadNotificationHtml({
            name,
            email,
            source,
            language,
            adminUrl: `${siteUrl}/admin/leads`,
          }),
        });
      }
    } catch (adminErr) {
      console.error('Failed sending admin lead notification:', adminErr);
    }

    return NextResponse.json({ success: true, stored: true, emailed: !welcomeError });
  } catch (error) {
    console.error('POST /api/leads error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
