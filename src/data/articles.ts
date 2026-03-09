export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "001",
    title: "A Minha Jornada com Parkinson: Aprender a Viver de Novo",
    subtitle: "Como o diagnóstico mudou a minha vida e o que aprendi pelo caminho",
    category: "Histórias",
    date: "Mar 1, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1920&q=80",
    author: {
      name: "Carlos Mendes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Diagnosticado com Parkinson há 5 anos, partilha a sua experiência para ajudar outros",
    },
    content: {
      introduction: "Quando recebi o diagnóstico de Parkinson aos 58 anos, senti que o mundo parou. Mas com o tempo, aprendi que a vida não acaba com o diagnóstico — transforma-se. Esta é a minha história de adaptação, resiliência e redescoberta.",
      sections: [
        {
          heading: "O Dia do Diagnóstico",
          content: "Lembro-me de cada detalhe daquele dia. O tremor na mão direita que já não conseguia ignorar, a consulta com o neurologista, e as palavras que mudaram tudo: 'Doença de Parkinson'. O medo inicial foi avassalador. Pensei em tudo o que poderia perder — a capacidade de conduzir, de cozinhar, de abraçar os meus netos sem tremer.",
        },
        {
          heading: "Os Primeiros Meses",
          content: "A adaptação não foi linear. Houve dias bons e dias terríveis. Aprender sobre a medicação, os seus efeitos e horários tornou-se uma nova rotina. Mas o mais difícil foi aceitar que precisava de ajuda. Eu, que sempre fui independente, tive de aprender a pedir — e a aceitar quando ofereciam.",
        },
        {
          heading: "Encontrar uma Nova Normalidade",
          content: "Aos poucos, comecei a construir uma nova versão da minha vida. O exercício físico tornou-se o meu melhor aliado — caminhadas, natação, e até dança. Descobri que o movimento é medicina. Também encontrei conforto num grupo de apoio local, onde conheci pessoas que entendem exatamente o que sinto.",
        },
        {
          heading: "O Que Me Mantém em Frente",
          content: "A família é o meu pilar. Os meus netos dão-me razões para sorrir todos os dias. A música continua a ser a minha paixão — talvez toque piano de forma diferente agora, mas cada nota tem um significado mais profundo. Aprendi que viver com Parkinson não é sobreviver — é viver com mais intenção.",
        },
      ],
      conclusion: "Se pudesse dizer algo a quem acabou de receber o diagnóstico, seria isto: permita-se sentir medo, mas não deixe o medo definir a sua vida. Há muito para viver, muito para descobrir, e muito amor para receber e dar. O Parkinson é parte da minha história, mas não é toda a minha história.",
    },
    tags: ["parkinson", "diagnóstico", "resiliência", "história pessoal"],
  },
  {
    id: "002",
    title: "Exercício Físico e Parkinson: O Movimento como Medicina",
    subtitle: "Como a atividade física pode melhorar a qualidade de vida",
    category: "Saúde",
    date: "Mar 5, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
    author: {
      name: "Dra. Ana Ferreira",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Neurologista especializada em doenças do movimento",
    },
    content: {
      introduction: "A investigação científica tem demonstrado consistentemente que o exercício físico é uma das ferramentas mais poderosas no combate aos sintomas do Parkinson. Não substitui a medicação, mas complementa-a de forma extraordinária.",
      sections: [
        {
          heading: "O Que Diz a Ciência",
          content: "Estudos recentes mostram que o exercício regular pode atrasar a progressão dos sintomas motores, melhorar o equilíbrio e a coordenação, e até ter efeitos neuroprotetores. A atividade física estimula a produção de dopamina e promove a neuroplasticidade — a capacidade do cérebro se reorganizar.",
        },
        {
          heading: "Tipos de Exercício Recomendados",
          content: "Não existe um exercício único ideal. A variedade é fundamental: exercícios aeróbicos (caminhada, ciclismo, natação), treino de força, exercícios de equilíbrio, e atividades como yoga, tai chi e dança. Cada tipo oferece benefícios específicos. A dança, por exemplo, combina movimento, música e socialização.",
        },
        {
          heading: "Como Começar com Segurança",
          content: "O mais importante é começar devagar e com orientação. Consulte o seu médico antes de iniciar qualquer programa. Um fisioterapeuta especializado pode criar um plano adaptado às suas necessidades. Comece com 10 minutos por dia e aumente gradualmente. O objetivo é consistência, não intensidade.",
        },
        {
          heading: "Histórias de Sucesso",
          content: "Maria, 67 anos, começou a praticar tai chi seis meses após o diagnóstico. Hoje, dois anos depois, relata melhorias significativas no equilíbrio e uma redução nos episódios de rigidez. José, 72 anos, nunca tinha andado de bicicleta estática — agora pedala 30 minutos todos os dias e sente-se mais ágil do que nunca.",
        },
      ],
      conclusion: "O exercício não é uma cura, mas é uma das melhores prescrições que podemos dar a quem vive com Parkinson. Mexa-se ao seu ritmo, encontre atividades que lhe dêem prazer, e lembre-se: cada passo conta.",
    },
    tags: ["exercício", "saúde", "movimento", "qualidade de vida"],
  },
  {
    id: "003",
    title: "Cozinhar com Parkinson: Dicas Práticas para a Cozinha",
    subtitle: "Adaptações simples que fazem toda a diferença",
    category: "Dia a Dia",
    date: "Mar 8, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    author: {
      name: "Teresa Santos",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      bio: "Terapeuta ocupacional e cuidadora",
    },
    content: {
      introduction: "A cozinha é muitas vezes o coração da casa, e perder a capacidade de cozinhar pode ser emocionalmente difícil. Mas com algumas adaptações inteligentes, é possível continuar a preparar refeições com segurança e prazer.",
      sections: [
        {
          heading: "Utensílios Adaptados",
          content: "Existem hoje muitos utensílios desenhados para pessoas com dificuldades motoras: talheres com cabos grossos e antiderrapantes, abridores elétricos, tábuas de cortar com ventosas, e copos com duas asas. Estes pequenos investimentos podem fazer uma enorme diferença na autonomia.",
        },
        {
          heading: "Organização e Planeamento",
          content: "Prepare tudo antes de começar a cozinhar. Disponha os ingredientes, meça as quantidades, e tenha tudo ao alcance da mão. Cozinhe nos períodos do dia em que se sente melhor — geralmente quando a medicação está no pico de efeito. Simplifique receitas sem perder o sabor.",
        },
        {
          heading: "Segurança em Primeiro Lugar",
          content: "Use um avental antiderrapante, evite panelas muito pesadas, e prefira fogões com desligamento automático. Sente-se num banco alto enquanto prepara alimentos — não precisa de estar de pé todo o tempo. Peça ajuda para tarefas que envolvam líquidos quentes ou facas afiadas.",
        },
        {
          heading: "Cozinhar como Terapia",
          content: "Cozinhar pode ser terapêutico: envolve coordenação motora fina, planeamento, e estimulação sensorial. Cozinhe com família ou amigos — transforma a tarefa numa atividade social. Alguns grupos de apoio organizam sessões de culinária adaptada que são divertidas e educativas.",
        },
      ],
      conclusion: "Não deixe o Parkinson tirar-lhe o prazer de cozinhar. Com as adaptações certas e uma boa dose de criatividade, a cozinha pode continuar a ser o seu espaço de alegria e independência.",
    },
    tags: ["dia a dia", "cozinha", "adaptação", "autonomia"],
  },
  {
    id: "004",
    title: "O Papel do Cuidador: Cuidar de Quem Cuida",
    subtitle: "A importância de cuidar da saúde mental e física dos cuidadores",
    category: "Comunidade",
    date: "Mar 12, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=1920&q=80",
    author: {
      name: "Joana Oliveira",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
      bio: "Psicóloga clínica especializada em apoio a cuidadores",
    },
    content: {
      introduction: "Por trás de cada pessoa com Parkinson, há frequentemente um cuidador invisível — um cônjuge, filho ou amigo que dedica horas do seu dia a garantir o bem-estar do outro. Mas quem cuida do cuidador?",
      sections: [
        {
          heading: "O Peso Emocional",
          content: "Ser cuidador é um ato de amor, mas também de desgaste. A ansiedade, a culpa, a frustração e a solidão são sentimentos comuns. Muitos cuidadores negligenciam a própria saúde — física e mental — para cuidar do outro. É essencial reconhecer que esta exaustão é real e válida.",
        },
        {
          heading: "Sinais de Alerta",
          content: "Insónia persistente, irritabilidade constante, isolamento social, perda de interesse em atividades que antes davam prazer, e problemas de saúde recorrentes são sinais de que o cuidador precisa de ajuda. Ignorar estes sinais pode levar ao burnout — um estado de esgotamento total.",
        },
        {
          heading: "Estratégias de Autocuidado",
          content: "Reserve tempo para si — mesmo que sejam apenas 30 minutos por dia. Mantenha contacto com amigos. Procure ajuda profissional se necessário. Partilhe responsabilidades com outros familiares. Aceite ajuda quando oferecida. E lembre-se: cuidar de si não é egoísmo — é necessidade.",
        },
        {
          heading: "Recursos e Apoio",
          content: "Existem associações e grupos de apoio específicos para cuidadores de pessoas com Parkinson. Linhas de apoio telefónico, sessões de aconselhamento gratuitas, e programas de respiro (que oferecem cuidados temporários ao doente para dar descanso ao cuidador) são recursos valiosos que muitos desconhecem.",
        },
      ],
      conclusion: "Cuidar de alguém com Parkinson é um dos atos mais generosos que alguém pode fazer. Mas para cuidar bem, é preciso estar bem. Não tenha vergonha de pedir ajuda — merece-a tanto quanto a pessoa de quem cuida.",
    },
    tags: ["cuidador", "comunidade", "saúde mental", "apoio"],
  },
  {
    id: "005",
    title: "Dormir Melhor com Parkinson: Estratégias para Noites Tranquilas",
    subtitle: "Dicas práticas para melhorar a qualidade do sono",
    category: "Saúde",
    date: "Mar 15, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1515894203077-9cd36032142f?w=1920&q=80",
    author: {
      name: "Dr. Miguel Costa",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Especialista em medicina do sono e neurologia",
    },
    content: {
      introduction: "Os distúrbios do sono afetam até 75% das pessoas com Parkinson. Desde a insónia à síndrome das pernas inquietas, passando por sonhos vívidos e movimentos involuntários, as noites podem ser um verdadeiro desafio. Mas há estratégias que ajudam.",
      sections: [
        {
          heading: "Porque o Sono É Afetado",
          content: "O Parkinson afeta áreas do cérebro que regulam o sono. A diminuição de dopamina, os efeitos da medicação, a rigidez noturna, e a necessidade frequente de ir à casa de banho contribuem para noites fragmentadas. Compreender estas causas é o primeiro passo para melhorar.",
        },
        {
          heading: "Higiene do Sono",
          content: "Estabeleça uma rotina: deite-se e levante-se à mesma hora. Evite ecrãs uma hora antes de dormir. Mantenha o quarto fresco, escuro e silencioso. Limite a cafeína após as 14h. Um banho quente antes de dormir pode ajudar a relaxar os músculos rígidos.",
        },
        {
          heading: "Adaptações no Quarto",
          content: "Use lençóis de cetim para facilitar os movimentos na cama. Uma barra lateral pode ajudar a virar-se. Uma luz noturna com sensor de movimento facilita as idas à casa de banho. Um colchão adequado é um investimento na qualidade de vida.",
        },
        {
          heading: "Quando Procurar Ajuda Médica",
          content: "Se os problemas de sono persistem apesar das mudanças de hábitos, fale com o seu neurologista. Pode ser necessário ajustar a medicação ou investigar distúrbios específicos como a apneia do sono. Não normalize o mau sono — há soluções disponíveis.",
        },
      ],
      conclusion: "Uma boa noite de sono faz toda a diferença na qualidade de vida com Parkinson. Não é um luxo — é uma necessidade. Experimente estas estratégias e não hesite em procurar ajuda profissional.",
    },
    tags: ["sono", "saúde", "qualidade de vida", "dicas práticas"],
  },
  {
    id: "006",
    title: "Parkinson aos 40: Quando o Diagnóstico Chega Cedo",
    subtitle: "Histórias de pessoas diagnosticadas em idade jovem",
    category: "Histórias",
    date: "Mar 18, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",
    author: {
      name: "Sofia Almeida",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      bio: "Jornalista e ativista pela sensibilização do Parkinson jovem",
    },
    content: {
      introduction: "Quando pensamos em Parkinson, imaginamos idosos. Mas cerca de 10% dos diagnósticos ocorrem antes dos 50 anos. O chamado 'Parkinson de início jovem' traz desafios únicos: carreira ativa, filhos pequenos, e uma sociedade que não espera ver a doença nessa idade.",
      sections: [
        {
          heading: "A História do Ricardo",
          content: "Ricardo tinha 42 anos quando notou que a mão esquerda tremia ao segurar o telemóvel. Engenheiro, pai de dois filhos, pensou que era stress. Demorou um ano até ter o diagnóstico. 'O mais difícil foi explicar aos meus filhos. Como dizes a uma criança de 8 anos que o pai tem uma doença que não vai embora?'",
        },
        {
          heading: "Trabalho e Parkinson",
          content: "Manter a carreira é uma das maiores preocupações. A lei protege contra a discriminação, mas o estigma existe. Alguns optam por revelar o diagnóstico, outros não. Não há resposta certa. O importante é conhecer os seus direitos e procurar adaptações no local de trabalho quando necessário.",
        },
        {
          heading: "Relações e Intimidade",
          content: "O Parkinson pode afetar relações amorosas e a intimidade. A comunicação aberta com o parceiro é fundamental. Muitos casais encontram novas formas de conexão e descobrem que a doença, paradoxalmente, pode fortalecer a relação quando enfrentada em equipa.",
        },
        {
          heading: "Esperança na Investigação",
          content: "A investigação sobre Parkinson avança a um ritmo sem precedentes. Novas terapias, terapia génica, e avanços na estimulação cerebral profunda oferecem esperança real. Participar em ensaios clínicos é uma forma de contribuir para o futuro e, potencialmente, beneficiar de tratamentos inovadores.",
        },
      ],
      conclusion: "Ter Parkinson jovem é um desafio enorme, mas não é uma sentença. Com o apoio certo, informação adequada, e uma boa rede de suporte, é possível continuar a viver plenamente — com planos, sonhos e muito futuro pela frente.",
    },
    tags: ["parkinson jovem", "diagnóstico", "trabalho", "esperança"],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(currentId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentId);
  if (!currentArticle) return articles.slice(0, limit);
  
  const related = articles.filter(
    article => article.id !== currentId && article.category === currentArticle.category
  );
  
  if (related.length < limit) {
    const others = articles.filter(
      article => article.id !== currentId && article.category !== currentArticle.category
    );
    return [...related, ...others].slice(0, limit);
  }
  
  return related.slice(0, limit);
}
