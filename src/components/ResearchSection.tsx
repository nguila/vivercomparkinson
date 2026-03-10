import { researchItems } from "@/data/research";
import { FlaskConical, ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categoryColors: Record<string, string> = {
  "Terapias": "bg-[hsl(var(--tag-saude))] text-primary",
  "Medicamentos": "bg-[hsl(var(--tag-diadia))] text-primary",
  "Investigação": "bg-[hsl(var(--tag-historias))] text-primary",
  "Ensaios Clínicos": "bg-[hsl(var(--tag-comunidade))] text-primary",
};

const ResearchSection = () => {
  const latestResearch = researchItems.slice(0, 4);

  return (
    <section className="py-16">
      <div className="flex items-center gap-3 mb-3 animate-slide-up">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <FlaskConical className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Últimos Avanços
        </h2>
      </div>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl animate-slide-up stagger-1">
        Terapias, medicamentos e investigação — o que há de novo na ciência do Parkinson.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {latestResearch.map((item, index) => (
          <a
            key={item.id}
            href={`/investigacao#${item.id}`}
            className={`group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-slide-up stagger-${Math.min(index + 2, 6)}`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <Badge className={`${categoryColors[item.category] || "bg-muted text-foreground"} text-xs font-medium border-0`}>
                  {item.category}
                </Badge>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <span>{item.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  {item.source}
                </span>
              </div>
              <h3 className="font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.summary}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <a
          href="/investigacao"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors px-6 py-3 rounded-full bg-primary/5 hover:bg-primary/10"
        >
          Ver todos os avanços
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default ResearchSection;
