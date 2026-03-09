import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const DiaDia = () => {
  const diaArticles = articles.filter(article => 
    article.category.toLowerCase() === "dia a dia"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Dia a Dia
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Dicas práticas para as tarefas do quotidiano — da cozinha à mobilidade, da higiene ao lazer. 
            Pequenas adaptações que fazem grandes diferenças.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diaArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Viver com Autonomia</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Manter a independência no dia a dia é uma prioridade para quem vive com Parkinson. 
                Com as adaptações certas, é possível continuar a fazer as atividades que gosta — 
                talvez de forma diferente, mas com a mesma satisfação.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DiaDia;
