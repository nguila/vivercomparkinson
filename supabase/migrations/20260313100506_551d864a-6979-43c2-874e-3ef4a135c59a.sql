
CREATE TABLE public.translation_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id text NOT NULL UNIQUE,
  original_title text NOT NULL,
  original_summary text NOT NULL,
  translated_title text NOT NULL,
  translated_summary text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.translation_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage translation cache"
ON public.translation_cache
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Anyone can read translation cache"
ON public.translation_cache
FOR SELECT
TO anon
USING (true);
