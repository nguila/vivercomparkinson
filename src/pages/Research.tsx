import { useState } from "react";
import Header from "@/components/Header";
import { researchItems } from "@/data/research";
import { useLiveResearch } from "@/hooks/use-live-research";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { FlaskConical, ExternalLink, ArrowUpRight, Filter, Radio, RefreshCw, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const categoryColors: Record<string, string> = {
  "Terapias": "bg-[hsl(var(--tag-saude))] text-primary",
  "Medicamentos": "bg-[hsl(var(--tag-diadia))] text-primary",
  "Investigação": "bg-[hsl(var(--tag-historias))] text-primary",
  "Ensaios Clínicos": "bg-[hsl(var(--tag-comunidade))] text-primary",
};

const categories = ["Todos", "Terapias", "Medicamentos", "Investigação", "Ensaios Clínicos"];

const Research = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const { data: liveItems, isLoading, isError, refetch, isFetching, dataUpdatedAt } = useLiveResearch();

  const items = liveItems && liveItems.length > 0 ? liveItems : researchItems;
  const isLive = !isError && liveItems && liveItems.length > 0 && liveItems[0]?.isLive;

  const filteredItems = activeCategory === "Todos"
    ? items
    : items.filter(item => item.category === activeCategory);

  const lastUpdate = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })
    : null;

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="mb-16 text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Investigação & Avanços
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Os últimos avanços em terapias, medicamentos, pesquisas e ensaios clínicos na luta contra a doença de Parkinson. 
            Informação baseada em fontes científicas fidedignas, atualizada automaticamente via PubMed.
          </p>
        </div>

        {/* Live Feed Status */}
        <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 mb-8 animate-slide-up stagger-2">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {isLive ? (
                  <>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <Wifi className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">Feed em tempo real — Europe PMC / PubMed</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">A mostrar dados editoriais</span>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {isLive
                  ? `Artigos científicos atualizados automaticamente. Última atualização: ${lastUpdate || "agora"}`
                  : "Não foi possível ligar ao feed. A mostrar artigos curados pela equipa editorial."}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
                disabled={isFetching}
                className="gap-2"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isFetching ? "animate-spin" : ""}`} />
                {isFetching ? "A atualizar..." : "Atualizar"}
              </Button>
              <div className="flex flex-wrap gap-2">
                {["PubMed", "Europe PMC"].map(source => (
                  <Badge key={source} variant="outline" className="text-xs">
                    {source}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-10 animate-slide-up stagger-3">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filtrar por categoria</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat}
                {cat !== "Todos" && (
                  <span className="ml-1.5 opacity-70">
                    ({items.filter(i => i.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-card border border-border">
                <div className="grid md:grid-cols-3 gap-0">
                  <Skeleton className="h-64" />
                  <div className="md:col-span-2 p-6 md:p-8 space-y-4">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-20 w-full" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Research Items */}
        {!isLoading && (
          <div className="space-y-8">
            {filteredItems.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg">Nenhum artigo encontrado nesta categoria.</p>
              </div>
            ) : (
              filteredItems.map((item, index) => (
                <article
                  key={item.id}
                  id={item.id}
                  className={`rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/20 transition-all duration-300 animate-slide-up stagger-${Math.min(index + 1, 6)}`}
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <Badge className={`${categoryColors[item.category] || "bg-muted text-foreground"} text-xs font-medium border-0`}>
                          {item.category}
                        </Badge>
                        {(item as any).isLive && (
                          <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm border-green-500/30 text-green-700 gap-1">
                            <Radio className="w-3 h-3" />
                            Live
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                          <span>{item.date}</span>
                          <span>·</span>
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {item.source}
                          </a>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                          {item.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {item.content || item.summary}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                        {item.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          Ler fonte original
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        )}

        {/* Inspirational CTA */}
        <div className="mt-16 rounded-2xl bg-muted p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            A ciência avança todos os dias 💚
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Cada novo estudo, cada ensaio clínico, cada descoberta traz-nos mais perto de tratamentos melhores e, um dia, de uma cura. 
            Há razões para ter esperança.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.michaeljfox.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Michael J. Fox Foundation
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.parkinson.org/advancing-research"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/30 font-medium hover:bg-muted transition-colors"
            >
              Parkinson's Foundation Research
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="pt-0 text-center text-sm text-muted-foreground">
            <p>© 2026 Viver com Parkinson. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Research;
