import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { researchItems, ResearchItem } from "@/data/research";

interface LiveResearchItem extends ResearchItem {
  isLive?: boolean;
}

async function fetchLiveResearch(): Promise<LiveResearchItem[]> {
  const { data, error } = await supabase.functions.invoke("fetch-research", {
    body: { pageSize: 12 },
  });

  if (error) {
    console.error("Error fetching live research:", error);
    throw error;
  }

  if (!data?.success || !data?.data) {
    throw new Error("Invalid response from research API");
  }

  return data.data as LiveResearchItem[];
}

export function useLiveResearch() {
  return useQuery({
    queryKey: ["live-research"],
    queryFn: fetchLiveResearch,
    staleTime: 1000 * 60 * 30, // 30 min
    gcTime: 1000 * 60 * 60, // 1 hour
    retry: 1,
    placeholderData: researchItems as LiveResearchItem[],
    meta: {
      errorMessage: "Não foi possível carregar artigos em tempo real. A mostrar dados estáticos.",
    },
  });
}
