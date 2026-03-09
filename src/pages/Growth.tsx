import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Comunidade = () => {
  const comunidadeArticles = articles.filter(article => 
    article.category.toLowerCase() === "comunidade"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Comunidade
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Cuidadores, familiares, grupos de apoio e recursos comunitários. 
            Porque enfrentar o Parkinson em conjunto faz toda a diferença.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comunidadeArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Juntos Somos Mais Fortes</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                O apoio comunitário é essencial na jornada com o Parkinson. Grupos de apoio, associações de doentes, 
                e redes de cuidadores oferecem um espaço seguro para partilhar experiências, aprender e encontrar conforto.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Comunidade;
