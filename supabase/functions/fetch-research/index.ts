const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const CATEGORY_QUERIES: Record<string, string> = {
  "Terapias": '(TITLE:"parkinson*" OR TITLE:"parkinsonian") AND (therapy OR treatment OR rehabilitation OR stimulation) AND (SRC:MED)',
  "Medicamentos": '(TITLE:"parkinson*") AND (drug OR medication OR levodopa OR dopamine agonist) AND (SRC:MED)',
  "Investigação": '(TITLE:"parkinson*") AND (biomarker OR pathogenesis OR alpha-synuclein OR neurodegeneration) AND (SRC:MED)',
  "Ensaios Clínicos": '(TITLE:"parkinson*") AND ("clinical trial" OR "randomized" OR "phase II" OR "phase III") AND (SRC:MED)',
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

    const categoriesToFetch = category && category !== "Todos"
      ? { [category]: CATEGORY_QUERIES[category] || "parkinson" }
      : CATEGORY_QUERIES;

    const allResults: any[] = [];

    for (const [cat, query] of Object.entries(categoriesToFetch)) {
      const perCategory = category ? pageSize : Math.ceil(pageSize / Object.keys(categoriesToFetch).length);
      
      const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=${perCategory}&sort=CITED%20desc&resultType=lite`;

      console.log(`Fetching Europe PMC: ${cat}, URL: ${url}`);
      
      const response = await fetch(url);
      const text = await response.text();
      console.log(`Response status: ${response.status}, length: ${text.length}`);
      
      if (!response.ok) {
        console.error(`Europe PMC error for ${cat}: ${response.status} - ${text.substring(0, 200)}`);
        continue;
      }

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error(`JSON parse error for ${cat}: ${e}`);
        continue;
      }

      const results = data.resultList?.result || [];
      console.log(`Got ${results.length} results for ${cat}`);

      for (const article of results) {
        const dateStr = article.firstPublicationDate || article.dateOfCreation || "";
        const formattedDate = dateStr ? formatDate(dateStr) : "Data não disponível";

        const articleId = article.pmid || article.id || Math.random().toString(36).slice(2);

        allResults.push({
          id: `pubmed-${articleId}`,
          title: (article.title || "Sem título").replace(/<[^>]*>/g, ''),
          summary: truncate((article.abstractText || article.title || "").replace(/<[^>]*>/g, ''), 200),
          category: cat,
          date: formattedDate,
          source: article.journalTitle || article.source || "Europe PMC",
          sourceUrl: article.doi
            ? `https://doi.org/${article.doi}`
            : article.pmid
              ? `https://pubmed.ncbi.nlm.nih.gov/${article.pmid}`
              : `https://europepmc.org/article/MED/${articleId}`,
          image: CATEGORY_IMAGES[cat] || CATEGORY_IMAGES["Investigação"],
          content: truncate((article.abstractText || article.title || "").replace(/<[^>]*>/g, ''), 500),
          tags: extractTags(article, cat),
          isLive: true,
        });
      }
    }

    // Sort by date descending
    allResults.sort((a, b) => {
      const da = parseDate(a.date);
      const db = parseDate(b.date);
      return db - da;
    });

    console.log(`Returning ${allResults.length} total results`);

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
    if (isNaN(d.getTime())) return dateStr;
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}

function parseDate(dateStr: string): number {
  const months: Record<string, number> = { "Jan": 0, "Fev": 1, "Mar": 2, "Abr": 3, "Mai": 4, "Jun": 5, "Jul": 6, "Ago": 7, "Set": 8, "Out": 9, "Nov": 10, "Dez": 11 };
  const parts = dateStr.replace(",", "").split(" ");
  if (parts.length === 3) {
    const m = months[parts[0]];
    if (m !== undefined) return new Date(parseInt(parts[2]), m, parseInt(parts[1])).getTime();
  }
  return 0;
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

function extractTags(article: any, category: string): string[] {
  const tags: string[] = [];
  if (article.keywordList?.keyword) {
    tags.push(...article.keywordList.keyword.slice(0, 4));
  }
  if (tags.length === 0) {
    tags.push("Parkinson", category.toLowerCase());
  }
  return tags;
}
