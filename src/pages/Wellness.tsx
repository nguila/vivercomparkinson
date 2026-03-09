import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Historias = () => {
  const historiasArticles = articles.filter(article => 
    article.category.toLowerCase() === "histórias"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Histórias de Vida
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Testemunhos reais de pessoas que vivem com Parkinson. Histórias de coragem, adaptação e esperança 
            que mostram que é possível viver plenamente com a doença.
          </p>
        </div>

        {/* Articles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historiasArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Partilhe a Sua História</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A sua experiência com o Parkinson pode ajudar outras pessoas. Quando partilhamos as nossas histórias, 
                criamos uma rede de apoio e compreensão que beneficia toda a comunidade.
              </p>
              <p>
                Se gostaria de contar a sua história ou a de alguém próximo, entre em contacto connosco. 
                Cada voz conta e cada experiência é valiosa.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Historias;
