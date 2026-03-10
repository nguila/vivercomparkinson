import Header from "@/components/Header";
import { researchItems } from "@/data/research";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, ExternalLink, ArrowUpRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Terapias": "bg-[hsl(var(--tag-saude))] text-primary",
  "Medicamentos": "bg-[hsl(var(--tag-diadia))] text-primary",
  "Investigação": "bg-[hsl(var(--tag-historias))] text-primary",
  "Ensaios Clínicos": "bg-[hsl(var(--tag-comunidade))] text-primary",
};

const categories = ["Todos", "Terapias", "Medicamentos", "Investigação", "Ensaios Clínicos"];

const Research = () => {
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
            Informação baseada em fontes científicas fidedignas.
          </p>
        </div>

        {/* Trusted Sources Banner */}
        <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 mb-12 animate-slide-up stagger-2">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">📚 Fontes Científicas Verificadas</h3>
              <p className="text-sm text-muted-foreground">
                Todos os artigos são baseados em publicações de revistas científicas de referência como The Lancet, Nature Medicine, NEJM e JAMA.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["The Lancet", "Nature", "NEJM", "JAMA", "ClinicalTrials.gov"].map(source => (
                <Badge key={source} variant="outline" className="text-xs">
                  {source}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Research Items */}
        <div className="space-y-8">
          {researchItems.map((item, index) => (
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
                  <div className="absolute top-4 left-4">
                    <Badge className={`${categoryColors[item.category] || "bg-muted text-foreground"} text-xs font-medium border-0`}>
                      {item.category}
                    </Badge>
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
                      {item.content}
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
          ))}
        </div>

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
            <p>© 2025 Viver com Parkinson. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Research;
