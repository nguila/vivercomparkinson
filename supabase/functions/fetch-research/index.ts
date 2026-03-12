const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const CATEGORY_QUERIES: Record<string, string> = {
  "Terapias": "parkinson therapy treatment",
  "Medicamentos": "parkinson drug medication pharmacology",
  "Investigação": "parkinson research biomarker pathology",
  "Ensaios Clínicos": "parkinson clinical trial",
};

const CATEGORY_IMAGES: Record<string, string> = {
  "Terapias": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
  "Medicamentos": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
  "Investigação": "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
  "Ensaios Clínicos": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { category, pageSize = 8 } = await req.json().catch(() => ({ category: undefined, pageSize: 8 }));

    // Build query - fetch from all categories or a specific one
    const categoriesToFetch = category && category !== "Todos"
      ? { [category]: CATEGORY_QUERIES[category] || "parkinson" }
      : CATEGORY_QUERIES;

    const allResults: any[] = [];

    for (const [cat, query] of Object.entries(categoriesToFetch)) {
      const perCategory = category ? pageSize : Math.ceil(pageSize / Object.keys(categoriesToFetch).length);
      
      const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=${perCategory}&sort=DATE_DESC&resultType=core`;

      console.log(`Fetching Europe PMC: ${cat} (${perCategory} results)`);
      
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`Europe PMC error for ${cat}: ${response.status}`);
        continue;
      }

      const data = await response.json();
      const results = data.resultList?.result || [];

      for (const article of results) {
        const dateStr = article.firstPublicationDate || article.dateOfCreation || "";
        const formattedDate = dateStr ? formatDate(dateStr) : "Data não disponível";

        allResults.push({
          id: `pubmed-${article.id || article.pmid || Math.random().toString(36).slice(2)}`,
          title: article.title?.replace(/<[^>]*>/g, '') || "Sem título",
          summary: truncate(article.abstractText?.replace(/<[^>]*>/g, '') || article.title || "", 200),
          category: cat,
          date: formattedDate,
          source: article.journalTitle || article.source || "Europe PMC",
          sourceUrl: article.doi
            ? `https://doi.org/${article.doi}`
            : article.pmid
              ? `https://pubmed.ncbi.nlm.nih.gov/${article.pmid}`
              : `https://europepmc.org/article/${article.source}/${article.id}`,
          image: CATEGORY_IMAGES[cat] || CATEGORY_IMAGES["Investigação"],
          content: truncate(article.abstractText?.replace(/<[^>]*>/g, '') || "", 500),
          tags: extractTags(article),
          isLive: true,
        });
      }
    }

    // Sort by date descending
    allResults.sort((a, b) => {
      const da = parsePortugueseDate(a.date);
      const db = parsePortugueseDate(b.date);
      return db - da;
    });

    console.log(`Returning ${allResults.length} results`);

    return new Response(
      JSON.stringify({ success: true, data: allResults, fetchedAt: new Date().toISOString() }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching research:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Failed to fetch' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}

function parsePortugueseDate(dateStr: string): number {
  try {
    const months: Record<string, number> = { "Jan": 0, "Fev": 1, "Mar": 2, "Abr": 3, "Mai": 4, "Jun": 5, "Jul": 6, "Ago": 7, "Set": 8, "Out": 9, "Nov": 10, "Dez": 11 };
    const parts = dateStr.replace(",", "").split(" ");
    if (parts.length === 3) {
      return new Date(parseInt(parts[2]), months[parts[0]] || 0, parseInt(parts[1])).getTime();
    }
  } catch {}
  return 0;
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

function extractTags(article: any): string[] {
  const tags: string[] = [];
  if (article.keywordList?.keyword) {
    tags.push(...article.keywordList.keyword.slice(0, 4));
  }
  if (tags.length === 0 && article.meshHeadingList?.meshHeading) {
    tags.push(...article.meshHeadingList.meshHeading.slice(0, 4).map((m: any) => m.descriptorName));
  }
  if (tags.length === 0) {
    tags.push("Parkinson", "investigação");
  }
  return tags;
}
