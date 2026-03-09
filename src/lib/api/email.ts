import { supabase } from '@/integrations/supabase/client';

interface SendEmailParams {
  name?: string;
  email: string;
  subject?: string;
  message?: string;
  type: 'contact' | 'newsletter';
}

export async function sendEmail(params: SendEmailParams): Promise<{ success: boolean; error?: string }> {
  const { data, error } = await supabase.functions.invoke('send-email', {
    body: params,
  });

  if (error) {
    console.error('Edge function error:', error);
    return { success: false, error: error.message };
  }

  return data;
}
