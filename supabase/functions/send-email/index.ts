import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { sendLovableEmail } from 'npm:@lovable.dev/email-js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const NOTIFICATION_EMAIL = 'geral@pintojo.pt';
const SITE_NAME = 'Viver com Parkinson';
const SENDER_DOMAIN = 'notify.viversomparkinson.pintojo.pt';
const FROM_DOMAIN = 'notify.viversomparkinson.pintojo.pt';

function buildContactNotificationHtml(name: string, email: string, subject: string, message: string): string {
  return `
<!DOCTYPE html>
<html lang="pt">
<head><meta charset="utf-8"></head>
<body style="background-color:#ffffff;font-family:Georgia,'Times New Roman',serif;padding:30px 25px;max-width:520px;margin:0 auto;">
  <p style="font-size:18px;font-weight:bold;color:hsl(175,35%,35%);margin:0 0 24px;">🌿 ${SITE_NAME}</p>
  <h1 style="font-size:22px;font-weight:bold;color:hsl(200,25%,15%);margin:0 0 16px;">Nova mensagem de contacto</h1>
  <table style="width:100%;border-collapse:collapse;margin:0 0 20px;">
    <tr><td style="padding:8px 0;color:hsl(200,10%,45%);font-size:14px;width:80px;vertical-align:top;"><strong>Nome:</strong></td><td style="padding:8px 0;color:hsl(200,25%,15%);font-size:14px;">${name}</td></tr>
    <tr><td style="padding:8px 0;color:hsl(200,10%,45%);font-size:14px;vertical-align:top;"><strong>Email:</strong></td><td style="padding:8px 0;color:hsl(200,25%,15%);font-size:14px;"><a href="mailto:${email}" style="color:hsl(175,35%,35%);">${email}</a></td></tr>
    <tr><td style="padding:8px 0;color:hsl(200,10%,45%);font-size:14px;vertical-align:top;"><strong>Assunto:</strong></td><td style="padding:8px 0;color:hsl(200,25%,15%);font-size:14px;">${subject}</td></tr>
  </table>
  <div style="background-color:#f5f9f8;border-radius:12px;padding:16px 20px;margin:0 0 24px;">
    <p style="font-size:14px;color:hsl(200,10%,45%);margin:0 0 8px;"><strong>Mensagem:</strong></p>
    <p style="font-size:15px;color:hsl(200,25%,15%);line-height:1.6;margin:0;white-space:pre-wrap;">${message}</p>
  </div>
  <p style="font-size:12px;color:#999999;margin:20px 0 0;">Este email foi enviado automaticamente pelo formulário de contacto do ${SITE_NAME}.</p>
</body>
</html>`;
}

function buildNewsletterNotificationHtml(email: string): string {
  return `
<!DOCTYPE html>
<html lang="pt">
<head><meta charset="utf-8"></head>
<body style="background-color:#ffffff;font-family:Georgia,'Times New Roman',serif;padding:30px 25px;max-width:520px;margin:0 auto;">
  <p style="font-size:18px;font-weight:bold;color:hsl(175,35%,35%);margin:0 0 24px;">🌿 ${SITE_NAME}</p>
  <h1 style="font-size:22px;font-weight:bold;color:hsl(200,25%,15%);margin:0 0 16px;">Nova subscrição de newsletter</h1>
  <p style="font-size:15px;color:hsl(200,10%,45%);line-height:1.6;">O email <a href="mailto:${email}" style="color:hsl(175,35%,35%);font-weight:bold;">${email}</a> subscreveu a newsletter.</p>
  <p style="font-size:12px;color:#999999;margin:20px 0 0;">Este email foi enviado automaticamente pelo ${SITE_NAME}.</p>
</body>
</html>`;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message, type } = await req.json();

    // Validate inputs
    if (!email || typeof email !== 'string' || email.length > 255 || !email.includes('@')) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email inválido' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (type === 'contact' && (!name || !subject || !message)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Todos os campos são obrigatórios' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Store in database using service role
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { error: dbError } = await supabaseAdmin
      .from('messages')
      .insert({
        type: type || 'contact',
        name: name || null,
        email,
        subject: subject || null,
        message: message || null,
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ success: false, error: 'Erro ao guardar mensagem' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Message stored: type=${type}, email=${email}`);

    // Send notification email to geral@pintojo.pt
    const apiKey = Deno.env.get('LOVABLE_API_KEY');
    if (apiKey) {
      try {
        const isContact = type === 'contact';
        const html = isContact
          ? buildContactNotificationHtml(name, email, subject, message)
          : buildNewsletterNotificationHtml(email);
        
        const text = isContact
          ? `Nova mensagem de contacto\n\nNome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`
          : `Nova subscrição de newsletter: ${email}`;

        await sendLovableEmail(
          {
            to: NOTIFICATION_EMAIL,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            sender_domain: SENDER_DOMAIN,
            subject: isContact 
              ? `[Contacto] ${subject}` 
              : `[Newsletter] Nova subscrição: ${email}`,
            html,
            text,
            purpose: 'transactional',
          },
          { apiKey }
        );

        console.log(`Notification email sent to ${NOTIFICATION_EMAIL}`);
      } catch (emailError) {
        // Log but don't fail - message is already stored in DB
        console.error('Failed to send notification email:', emailError);
      }
    } else {
      console.warn('LOVABLE_API_KEY not configured - skipping email notification');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: type === 'newsletter' 
          ? 'Subscrição registada com sucesso!' 
          : 'Mensagem enviada com sucesso!' 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
