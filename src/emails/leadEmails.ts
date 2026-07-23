export type LeadLanguage = 'es' | 'en';

export function compileLeadTemplate(
  body: string,
  subject: string,
  vars: { name: string; email: string }
): { html: string; subject: string } {
  const replace = (input: string) =>
    input
      .replaceAll('{{name}}', vars.name)
      .replaceAll('{{email}}', vars.email);

  return {
    subject: replace(subject),
    html: replace(body),
  };
}

export function getDefaultWelcomeEmailHtml(name: string, language: LeadLanguage): string {
  if (language === 'en') {
    return `
      <div style="font-family: sans-serif; line-height: 1.6; color: #111; max-width: 560px; margin: 0 auto;">
        <h2 style="margin-bottom: 8px;">Thanks for reaching out, ${name}</h2>
        <p>We received your message. A ConaiSoft engineer will reply within 24 hours to review your goals and next steps.</p>
        <p style="color: #555;">No commitment — just a clear technical conversation.</p>
        <p>— ConaiSoft</p>
      </div>
    `;
  }

  return `
    <div style="font-family: sans-serif; line-height: 1.6; color: #111; max-width: 560px; margin: 0 auto;">
      <h2 style="margin-bottom: 8px;">Gracias por escribirnos, ${name}</h2>
      <p>Recibimos tu mensaje. Un ingeniero de ConaiSoft te responderá en menos de 24 horas para revisar objetivos y siguientes pasos.</p>
      <p style="color: #555;">Sin compromiso — solo una conversación técnica clara.</p>
      <p>— ConaiSoft</p>
    </div>
  `;
}

export function getAdminLeadNotificationHtml(input: {
  name: string;
  email: string;
  source: string;
  language: string;
  adminUrl: string;
}): string {
  const { name, email, source, language, adminUrl } = input;
  return `
    <div style="font-family: sans-serif; line-height: 1.5; color: #222; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="margin-top: 0; color: #0e7490;">New lead — ConaiSoft</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Source</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${source}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Language</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${language.toUpperCase()}</td>
        </tr>
      </table>
      <p style="text-align: center; margin-top: 24px;">
        <a href="${adminUrl}" style="background: #0e7490; color: #fff; padding: 10px 18px; text-decoration: none; border-radius: 8px; font-weight: bold;">Open admin</a>
      </p>
    </div>
  `;
}
