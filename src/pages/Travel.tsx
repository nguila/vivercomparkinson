import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Saude = () => {
  const saudeArticles = articles.filter(article => 
    article.category.toLowerCase() === "saúde"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Saúde & Bem-Estar
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Informação médica acessível sobre tratamentos, exercício físico, sono e nutrição. 
            Conselhos práticos para melhorar a qualidade de vida com Parkinson.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saudeArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Informação de Confiança</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Todos os nossos artigos de saúde são revistos por profissionais médicos especializados em Parkinson. 
                A informação aqui partilhada não substitui o aconselhamento médico, mas ajuda a compreender 
                melhor a doença e as opções disponíveis.
              </p>
              <p>
                Consulte sempre o seu neurologista antes de fazer alterações ao seu tratamento ou rotina de exercício.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Saude;
