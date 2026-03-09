const IntroSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
          Um espaço de partilha, informação e esperança para quem vive com a doença de Parkinson.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          Aqui encontra histórias de quem enfrenta o Parkinson no dia a dia, conselhos práticos de profissionais 
          de saúde, e uma comunidade que compreende. Porque informação é poder, e partilha é conforto.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
