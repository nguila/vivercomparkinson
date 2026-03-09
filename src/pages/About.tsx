import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Sobre o Viver com Parkinson
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Um espaço de partilha, informação e esperança para quem vive com a doença de Parkinson.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">A Nossa História</h2>
          <p>
            O Viver com Parkinson nasceu de uma necessidade sentida: a de criar um espaço em português 
            onde pessoas com Parkinson, os seus cuidadores e familiares possam encontrar informação fiável, 
            histórias inspiradoras e uma comunidade de apoio.
          </p>
          <p>
            Acreditamos que o diagnóstico de Parkinson não é o fim — é o início de uma nova forma de viver. 
            Com informação adequada, apoio emocional e dicas práticas, é possível manter uma vida rica e significativa.
          </p>
          <p>
            A nossa equipa é composta por profissionais de saúde, cuidadores experientes e pessoas que vivem 
            com Parkinson. Cada artigo é escrito com rigor científico e sensibilidade humana, porque sabemos 
            que por trás de cada diagnóstico há uma pessoa com medos, esperanças e muita força.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">A Nossa Missão</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Queremos ser a referência em língua portuguesa para quem vive com Parkinson. 
              A nossa missão é:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Partilhar histórias reais que inspiram e dão esperança</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Oferecer dicas práticas para o dia a dia com Parkinson</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Informar sobre tratamentos, investigação e novidades médicas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Criar uma comunidade solidária e acolhedora</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Apoiar cuidadores e familiares na sua jornada</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Os Nossos Valores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Empatia</h3>
              <p className="text-muted-foreground">
                Cada pessoa é única e cada jornada com Parkinson é diferente. Ouvimos, compreendemos e respeitamos.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Rigor</h3>
              <p className="text-muted-foreground">
                A informação que partilhamos é baseada em evidência científica e revista por profissionais de saúde.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Esperança</h3>
              <p className="text-muted-foreground">
                Acreditamos que é possível viver bem com Parkinson. Cada história partilhada é uma semente de esperança.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Comunidade</h3>
              <p className="text-muted-foreground">
                Ninguém precisa de enfrentar o Parkinson sozinho. Juntos somos mais fortes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Junte-se à Nossa Comunidade</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscreva para receber as nossas últimas histórias, dicas e recursos diretamente no seu email.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Mail className="mr-2 h-4 w-4" />
            Subscrever
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
