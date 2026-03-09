-- Create table to store contact messages and newsletter subscriptions
CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('contact', 'newsletter')),
  name TEXT,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit messages" ON public.messages
  FOR INSERT WITH CHECK (true);

-- Only service role can read
CREATE POLICY "Service role can read messages" ON public.messages
  FOR SELECT USING (false);