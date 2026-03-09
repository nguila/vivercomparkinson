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
  {
    id: "007",
    title: "Alimentação e Parkinson: O Que Comer para Viver Melhor",
    subtitle: "Como a dieta pode influenciar os sintomas e a eficácia da medicação",
    category: "Saúde",
    date: "Mar 22, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&q=80",
    author: {
      name: "Dra. Mariana Lopes",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
      bio: "Nutricionista clínica com experiência em doenças neurodegenerativas",
    },
    content: {
      introduction: "A alimentação desempenha um papel crucial na gestão do Parkinson. Não só influencia o bem-estar geral, como pode afetar a absorção e eficácia da medicação, nomeadamente da levodopa. Saiba como adaptar a sua dieta.",
      sections: [
        {
          heading: "A Interação Entre Proteínas e Levodopa",
          content: "As proteínas competem com a levodopa pela absorção no intestino. Isto não significa eliminar proteínas, mas sim redistribuí-las: concentre o consumo de carne, peixe e lacticínios ao jantar, permitindo que a medicação atue melhor durante o dia. Consulte sempre o seu médico antes de fazer alterações.",
        },
        {
          heading: "Alimentos Anti-inflamatórios",
          content: "Uma dieta mediterrânica, rica em frutas, vegetais, azeite, nozes e peixe gordo, tem propriedades anti-inflamatórias e antioxidantes que podem ser benéficas. Alimentos como mirtilos, brócolos, cúrcuma e chá verde são particularmente recomendados pela sua ação neuroprotetora.",
        },
        {
          heading: "Hidratação e Fibras",
          content: "A obstipação é um dos sintomas mais comuns do Parkinson. Uma dieta rica em fibras (legumes, fruta, cereais integrais) combinada com uma boa hidratação (1,5 a 2 litros de água por dia) pode ajudar significativamente. Ameixas secas e sementes de linhaça são aliados naturais.",
        },
        {
          heading: "Dificuldades em Engolir",
          content: "A disfagia (dificuldade em engolir) pode surgir à medida que a doença avança. Alimentos com textura macia, sopas cremosas, purés e batidos são alternativas nutritivas e seguras. Um terapeuta da fala pode orientar sobre as texturas mais adequadas.",
        },
      ],
      conclusion: "A alimentação não cura o Parkinson, mas uma dieta bem planeada pode melhorar a eficácia da medicação, aliviar sintomas e aumentar a energia e bem-estar. Consulte um nutricionista que conheça a doença para um plano personalizado.",
    },
    tags: ["alimentação", "nutrição", "levodopa", "dieta"],
  },
  {
    id: "008",
    title: "Medicação para Parkinson: Guia Prático para Doentes e Famílias",
    subtitle: "Entenda os medicamentos, os seus efeitos e como gerir a toma diária",
    category: "Saúde",
    date: "Mar 25, 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
    author: {
      name: "Dr. Pedro Henriques",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
      bio: "Neurologista e investigador em farmacologia do Parkinson",
    },
    content: {
      introduction: "A medicação é o pilar principal do tratamento do Parkinson. Compreender os diferentes fármacos, os seus horários e efeitos secundários é essencial para uma boa gestão da doença. Este guia ajuda-o a navegar este mundo complexo.",
      sections: [
        {
          heading: "Levodopa: O Medicamento de Referência",
          content: "A levodopa continua a ser o tratamento mais eficaz. Converte-se em dopamina no cérebro, aliviando os sintomas motores. É combinada com carbidopa ou benserazida para evitar náuseas. Com o tempo, podem surgir flutuações motoras (períodos 'on' e 'off'), que requerem ajustes na dosagem.",
        },
        {
          heading: "Agonistas Dopaminérgicos e Outros Fármacos",
          content: "Medicamentos como pramipexol e ropinirol imitam a ação da dopamina. Inibidores da MAO-B (rasagilina, selegilina) e da COMT (entacapona) prolongam o efeito da levodopa. Cada um tem benefícios e efeitos secundários diferentes — a escolha é personalizada.",
        },
        {
          heading: "A Importância dos Horários",
          content: "Tomar a medicação à hora certa é crucial. Use alarmes no telemóvel, caixas organizadoras semanais, ou apps específicas. Nunca altere dosagens sem consultar o médico. Se se esquecer de uma toma, não duplique a seguinte — contacte o seu neurologista para orientação.",
        },
        {
          heading: "Efeitos Secundários e Como Lidar",
          content: "Náuseas, tonturas, sonolência, discinesias (movimentos involuntários) e alterações de humor são efeitos possíveis. Muitos diminuem com o tempo ou com ajustes na medicação. Registe num diário os sintomas e efeitos — é uma ferramenta valiosa nas consultas.",
        },
      ],
      conclusion: "A medicação para Parkinson é uma ciência em constante evolução. Mantenha uma comunicação aberta com a sua equipa médica, não tenha medo de fazer perguntas, e lembre-se: o objetivo é encontrar o equilíbrio que lhe dê a melhor qualidade de vida possível.",
    },
    tags: ["medicação", "levodopa", "tratamento", "farmacologia"],
  },
  {
    id: "009",
    title: "Fisioterapia e Parkinson: Recuperar o Movimento e a Confiança",
    subtitle: "O papel fundamental da reabilitação física na gestão da doença",
    category: "Saúde",
    date: "Mar 28, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
    author: {
      name: "Ft. Ricardo Sousa",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      bio: "Fisioterapeuta especializado em neurologia e reabilitação motora",
    },
    content: {
      introduction: "A fisioterapia é uma peça essencial no puzzle do tratamento do Parkinson. Ajuda a manter a mobilidade, melhorar o equilíbrio, prevenir quedas e preservar a independência. Quanto mais cedo começar, melhores os resultados.",
      sections: [
        {
          heading: "Objetivos da Fisioterapia no Parkinson",
          content: "O foco está em combater a rigidez muscular, melhorar a amplitude de movimento, treinar o equilíbrio e a marcha, e prevenir a perda de força. Programas como o LSVT BIG (focado em movimentos amplos) e o PWR! (Parkinson Wellness Recovery) são especificamente desenhados para esta doença.",
        },
        {
          heading: "Exercícios para Fazer em Casa",
          content: "Alongamentos suaves todas as manhãs, exercícios de equilíbrio (ficar num pé, caminhar em linha reta), treino de marcha com passos largos e exercícios de coordenação. A consistência é mais importante que a intensidade — 20 a 30 minutos diários fazem uma diferença enorme.",
        },
        {
          heading: "Prevenção de Quedas",
          content: "As quedas são uma das maiores preocupações no Parkinson. A fisioterapia ensina estratégias de prevenção: como virar-se na cama, levantar-se de uma cadeira, reagir ao desequilíbrio. Em casa, retire tapetes soltos, instale barras de apoio e garanta boa iluminação.",
        },
        {
          heading: "O Freezing e Como Ultrapassá-lo",
          content: "O 'freezing' (bloqueio da marcha) é quando os pés parecem colados ao chão. Técnicas como contar '1, 2, 3' antes de dar um passo, usar estímulos visuais (linhas no chão) ou auditivos (metrónomo) podem ajudar. Um fisioterapeuta pode treinar estas estratégias consigo.",
        },
      ],
      conclusion: "A fisioterapia não é opcional — é essencial. Encontre um profissional que conheça o Parkinson, seja consistente nos exercícios e celebre cada pequena conquista. O movimento é liberdade.",
    },
    tags: ["fisioterapia", "reabilitação", "exercício", "equilíbrio"],
  },
  {
    id: "010",
    title: "Direitos dos Doentes com Parkinson em Portugal",
    subtitle: "Conheça os apoios sociais, laborais e fiscais a que tem direito",
    category: "Comunidade",
    date: "Abr 1, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80",
    author: {
      name: "Dr.ª Isabel Pinto",
      avatar: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&q=80",
      bio: "Advogada especializada em direito da saúde e incapacidade",
    },
    content: {
      introduction: "Viver com Parkinson traz desafios que vão além da saúde. Conhecer os seus direitos é fundamental para garantir o acesso a apoios, proteções laborais e benefícios sociais. Este guia resume os principais direitos em Portugal.",
      sections: [
        {
          heading: "Atestado Multiusos e Grau de Incapacidade",
          content: "O Atestado Médico de Incapacidade Multiusos é o documento-chave para aceder a muitos benefícios. É emitido por uma junta médica e certifica o grau de incapacidade. Com 60% ou mais, tem direito a benefícios fiscais, isenção de taxas moderadoras e outros apoios. Peça ao seu médico para iniciar o processo.",
        },
        {
          heading: "Direitos Laborais",
          content: "A lei portuguesa protege trabalhadores com doença crónica: direito a horário flexível, redução do horário de trabalho, proteção contra despedimento discriminatório, e adaptação do posto de trabalho. Se a incapacidade for igual ou superior a 60%, pode beneficiar de isenções na tributação de rendimentos.",
        },
        {
          heading: "Apoios Sociais e Financeiros",
          content: "Complemento por dependência, prestação social para inclusão, comparticipação de medicamentos, isenção de taxas moderadoras, desconto no IRS e isenção de IUC são alguns dos apoios disponíveis. O Serviço de Segurança Social e a sua Junta de Freguesia podem ajudar com os processos.",
        },
        {
          heading: "Acessibilidade e Mobilidade",
          content: "Tem direito a dístico de estacionamento para pessoas com deficiência, isenção ou redução no ISV na compra de viatura, acesso a transportes adaptados e desconto em transportes públicos. Estas medidas são essenciais para manter a autonomia e a participação social.",
        },
      ],
      conclusion: "Conhecer os seus direitos é um passo importante para viver com mais dignidade e menos preocupações financeiras. Não hesite em procurar apoio jurídico e social — há recursos disponíveis que muitos desconhecem. A Associação Portuguesa de Doentes de Parkinson pode orientá-lo.",
    },
    tags: ["direitos", "apoios sociais", "legislação", "incapacidade"],
  },
  {
    id: "011",
    title: "Jogos e Exercícios Mentais: Manter o Cérebro Ativo com Parkinson",
    subtitle: "Atividades lúdicas que estimulam a cognição e trazem prazer",
    category: "Dia a Dia",
    date: "Abr 5, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1920&q=80",
    author: {
      name: "Dra. Beatriz Ramos",
      avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
      bio: "Neuropsicóloga especializada em estimulação cognitiva",
    },
    content: {
      introduction: "O Parkinson não afeta apenas o movimento — pode também impactar a memória, a concentração e a velocidade de raciocínio. A boa notícia é que o cérebro, como um músculo, pode ser treinado. Jogos e exercícios mentais são aliados poderosos.",
      sections: [
        {
          heading: "Puzzles e Palavras Cruzadas",
          content: "Palavras cruzadas, sudoku, puzzles e jogos de tabuleiro como Scrabble estimulam a memória, o vocabulário e o raciocínio lógico. Comece com níveis fáceis e aumente gradualmente. O importante é o prazer, não a perfeição. Apps como Lumosity e Peak oferecem treinos cognitivos personalizados.",
        },
        {
          heading: "Jogos de Cartas e Tabuleiro",
          content: "O bridge, xadrez, damas e jogos de cartas são excelentes para a estratégia e a socialização. Jogar com amigos ou família combina estimulação mental com interação social — dois fatores protetores da saúde cognitiva. Muitos centros de dia e associações organizam torneios adaptados.",
        },
        {
          heading: "Exercícios de Memória no Quotidiano",
          content: "Tente memorizar a lista de compras antes de a escrever. Reconte o enredo de um filme que acabou de ver. Aprenda uma palavra nova por dia. Estas pequenas práticas diárias mantêm a mente ativa sem exigir tempo extra. A música — ouvir, cantar ou tocar — é um estímulo cognitivo particularmente eficaz.",
        },
        {
          heading: "Tecnologia ao Serviço do Cérebro",
          content: "Tablets e smartphones oferecem centenas de apps de treino cognitivo adaptados. Jogos de realidade virtual estão a ser estudados como ferramenta de reabilitação. Videojogos simples podem melhorar a coordenação mão-olho e o tempo de reação. A tecnologia é uma aliada, não um substituto do convívio humano.",
        },
      ],
      conclusion: "Manter o cérebro ativo é tão importante como manter o corpo em movimento. Escolha atividades que lhe dêem prazer, varie os estímulos, e partilhe estes momentos com outras pessoas. A mente agradece — e a alma também.",
    },
    tags: ["jogos mentais", "cognição", "estimulação", "tecnologia"],
  },
  {
    id: "012",
    title: "Gestão Emocional: Lidar com a Ansiedade e Depressão no Parkinson",
    subtitle: "Estratégias para cuidar da saúde mental quando o corpo muda",
    category: "Comunidade",
    date: "Abr 8, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1920&q=80",
    author: {
      name: "Dr. António Silva",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      bio: "Psiquiatra com foco em saúde mental em doenças crónicas",
    },
    content: {
      introduction: "A depressão e a ansiedade afetam cerca de 40-50% das pessoas com Parkinson — não são apenas uma reação emocional ao diagnóstico, mas parte da própria doença, causadas pelas alterações químicas no cérebro. Reconhecê-las e tratá-las é essencial.",
      sections: [
        {
          heading: "Mais do Que Tristeza",
          content: "A depressão no Parkinson é frequentemente subdiagnosticada porque os seus sintomas (fadiga, insónia, perda de apetite, lentidão) sobrepõem-se aos da doença. Se sente uma tristeza persistente, perda de interesse nas coisas que antes lhe davam prazer, ou pensamentos negativos recorrentes, fale com o seu médico.",
        },
        {
          heading: "Ansiedade e Ataques de Pânico",
          content: "A ansiedade pode manifestar-se como preocupação constante, tensão muscular, palpitações e medo do futuro. Alguns doentes experienciam ataques de pânico nos períodos 'off' da medicação. Técnicas de respiração profunda, mindfulness e terapia cognitivo-comportamental são ferramentas eficazes.",
        },
        {
          heading: "Estratégias de Coping",
          content: "Mantenha uma rotina estruturada. Pratique exercício físico regularmente. Escreva um diário emocional. Participe em grupos de apoio. Cultive hobbies e relações sociais. A meditação guiada — mesmo 10 minutos por dia — pode reduzir significativamente os níveis de ansiedade.",
        },
        {
          heading: "Pedir Ajuda é Força",
          content: "Não há vergonha em procurar ajuda profissional. A psicoterapia e, quando necessário, a medicação antidepressiva podem fazer uma diferença enorme na qualidade de vida. Muitos antidepressivos são seguros e compatíveis com a medicação para Parkinson. Fale abertamente com a sua equipa médica.",
        },
      ],
      conclusion: "Cuidar da mente é tão importante como cuidar do corpo. A depressão e a ansiedade são tratáveis, e não precisa de enfrentá-las sozinho. Procure ajuda, aceite apoio, e lembre-se: a sua saúde emocional merece toda a atenção.",
    },
    tags: ["saúde mental", "depressão", "ansiedade", "gestão emocional"],
  },
  {
    id: "013",
    title: "Tecnologia Assistiva: Apps e Gadgets que Facilitam o Dia a Dia",
    subtitle: "Ferramentas digitais que aumentam a autonomia e segurança",
    category: "Dia a Dia",
    date: "Abr 12, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80",
    author: {
      name: "Eng. Tiago Ferreira",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      bio: "Engenheiro biomédico e consultor em tecnologia assistiva",
    },
    content: {
      introduction: "A tecnologia evolui rapidamente e oferece soluções cada vez melhores para quem vive com Parkinson. De apps que monitorizam sintomas a dispositivos que estabilizam o tremor, o futuro digital é um aliado da independência.",
      sections: [
        {
          heading: "Apps de Gestão da Medicação",
          content: "Apps como Medisafe e CareZone enviam lembretes para cada toma, registam a adesão ao tratamento e permitem partilhar relatórios com o médico. Algumas incluem diário de sintomas que ajuda a identificar padrões e ajustar tratamentos.",
        },
        {
          heading: "Dispositivos Anti-Tremor",
          content: "A colher Liftware estabiliza automaticamente para compensar o tremor, facilitando as refeições. Luvas com giroscópios (como a GyroGlove) estão em desenvolvimento. Teclados adaptados e canetas com peso extra ajudam na escrita e no uso do computador.",
        },
        {
          heading: "Monitorização e Telemedicina",
          content: "Smartwatches podem monitorizar o tremor, a marcha e padrões de sono, fornecendo dados objetivos ao neurologista. A telemedicina permite consultas de acompanhamento sem deslocação — especialmente útil em dias de maior dificuldade motora.",
        },
        {
          heading: "Assistentes de Voz e Casa Inteligente",
          content: "Alexa, Google Home e Siri permitem controlar luzes, televisão, temperatura e até fazer chamadas por voz — eliminando a necessidade de botões pequenos. Sensores de queda automáticos enviam alertas para familiares em caso de emergência.",
        },
      ],
      conclusion: "A tecnologia não substitui o cuidado humano, mas pode ampliar significativamente a autonomia e a segurança. Explore as opções, peça ajuda para configurar dispositivos, e abrace as ferramentas que tornam o dia a dia mais fácil.",
    },
    tags: ["tecnologia", "apps", "gadgets", "autonomia"],
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
