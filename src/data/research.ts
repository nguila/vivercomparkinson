export interface ResearchItem {
  id: string;
  title: string;
  summary: string;
  category: "Terapias" | "Medicamentos" | "Investigação" | "Ensaios Clínicos";
  date: string;
  source: string;
  sourceUrl: string;
  image: string;
  content: string;
  tags: string[];
}

export const researchItems: ResearchItem[] = [
  {
    id: "r001",
    title: "Terapia Génica Mostra Resultados Promissores na Restauração de Dopamina",
    summary: "Ensaio clínico de fase II demonstra que a terapia génica pode restaurar parcialmente a produção de dopamina em doentes com Parkinson moderado.",
    category: "Terapias",
    date: "Mar 8, 2026",
    source: "The Lancet Neurology",
    sourceUrl: "https://www.thelancet.com/journals/laneur/home",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&q=80",
    content: "A terapia génica para Parkinson avançou significativamente nos últimos anos. Investigadores conseguiram inserir genes que promovem a produção de dopamina diretamente nas células cerebrais afetadas. Os resultados preliminares de ensaios clínicos de fase II mostram melhorias sustentadas nos sintomas motores durante pelo menos 12 meses após o tratamento, com redução média de 30% na dose de levodopa necessária. Embora ainda em fase experimental, esta abordagem representa uma das fronteiras mais promissoras da medicina regenerativa aplicada ao Parkinson. A equipa do Professor Roger Barker, da Universidade de Cambridge, lidera um dos estudos mais avançados nesta área.",
    tags: ["terapia génica", "dopamina", "ensaio clínico", "inovação"],
  },
  {
    id: "r002",
    title: "Novo Medicamento Oral Reduz Flutuações Motoras em 40%",
    summary: "Opicapona, desenvolvida pela farmacêutica portuguesa Bial, continua a mostrar eficácia superior na gestão dos períodos 'off'.",
    category: "Medicamentos",
    date: "Mar 5, 2026",
    source: "Movement Disorders Journal",
    sourceUrl: "https://movementdisorders.onlinelibrary.wiley.com",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=80",
    content: "A Opicapona (nome comercial Ongentys®), desenvolvida pela farmacêutica portuguesa Bial, consolidou-se como um dos avanços mais importantes no tratamento das flutuações motoras do Parkinson. Este inibidor da COMT de terceira geração, administrado uma vez por dia, demonstrou em estudos de longo prazo reduzir o tempo 'off' (quando a medicação perde efeito) em até 40%. Ao contrário de outros fármacos da mesma classe, não causa hepatotoxicidade, o que elimina a necessidade de monitorização hepática regular. A Opicapona está aprovada na Europa e nos Estados Unidos, representando um orgulho para a investigação farmacêutica portuguesa.",
    tags: ["opicapona", "bial", "medicamento", "flutuações motoras"],
  },
  {
    id: "r003",
    title: "Estimulação Cerebral Profunda Adaptativa: A Próxima Geração",
    summary: "Nova tecnologia de DBS adaptativa ajusta automaticamente a estimulação em tempo real, melhorando resultados e reduzindo efeitos secundários.",
    category: "Terapias",
    date: "Mar 3, 2026",
    source: "Nature Medicine",
    sourceUrl: "https://www.nature.com/nm/",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1920&q=80",
    content: "A Estimulação Cerebral Profunda (DBS) tem sido uma opção terapêutica fundamental para doentes com Parkinson avançado desde os anos 1990. Agora, uma nova geração de dispositivos — a DBS adaptativa (aDBS) — promete revolucionar o tratamento. Ao contrário dos sistemas convencionais que emitem estimulação constante, a aDBS monitoriza a atividade cerebral em tempo real e ajusta automaticamente a intensidade da estimulação conforme necessário. Estudos recentes publicados na Nature Medicine demonstram que esta tecnologia reduz as discinesias em 50% e melhora a qualidade de vida dos doentes. O Hospital de Santa Maria, em Lisboa, é um dos centros europeus a participar nos ensaios clínicos desta tecnologia.",
    tags: ["DBS", "estimulação cerebral", "tecnologia", "neurocirurgia"],
  },
  {
    id: "r004",
    title: "Biomarcadores no Sangue Permitem Diagnóstico Precoce do Parkinson",
    summary: "Investigadores identificam proteínas no sangue que podem detetar a doença de Parkinson até 7 anos antes dos primeiros sintomas motores.",
    category: "Investigação",
    date: "Feb 28, 2026",
    source: "Nature Communications",
    sourceUrl: "https://www.nature.com/ncomms/",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&q=80",
    content: "Um dos maiores desafios no tratamento do Parkinson é o diagnóstico tardio — quando os sintomas motores aparecem, já se perderam 60-80% dos neurónios dopaminérgicos. Uma equipa internacional de investigadores, com participação da Universidade de Coimbra, identificou um painel de biomarcadores proteicos no sangue que pode detetar a doença até 7 anos antes dos primeiros tremores. O estudo, publicado na Nature Communications, analisou amostras de sangue de mais de 10.000 participantes ao longo de 15 anos. As proteínas alfa-sinucleína e neurofilamentos leves mostraram-se particularmente promissoras. Este avanço pode abrir portas para tratamentos preventivos e neuroprotetores, mudando fundamentalmente a abordagem à doença.",
    tags: ["diagnóstico precoce", "biomarcadores", "investigação", "prevenção"],
  },
  {
    id: "r005",
    title: "Microbioma Intestinal: A Conexão Intestino-Cérebro no Parkinson",
    summary: "Estudos confirmam que alterações na flora intestinal podem preceder e influenciar o desenvolvimento do Parkinson, abrindo novas vias terapêuticas.",
    category: "Investigação",
    date: "Feb 25, 2026",
    source: "Cell Reports Medicine",
    sourceUrl: "https://www.cell.com/cell-reports-medicine/home",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&q=80",
    content: "A teoria de que o Parkinson pode começar no intestino antes de afetar o cérebro ganhou evidência robusta com novos estudos publicados na Cell Reports Medicine. Investigadores demonstraram que alterações específicas no microbioma intestinal estão presentes até 20 anos antes do diagnóstico de Parkinson. A chamada 'hipótese de Braak' sugere que a alfa-sinucleína patológica pode viajar do intestino para o cérebro através do nervo vago. Ensaios clínicos com probióticos específicos e transplante de microbiota fecal estão em curso em vários centros europeus, incluindo o Instituto de Medicina Molecular João Lobo Antunes, em Lisboa. Se confirmada, esta linha de investigação pode revolucionar tanto a prevenção como o tratamento do Parkinson.",
    tags: ["microbioma", "intestino-cérebro", "probióticos", "prevenção"],
  },
  {
    id: "r006",
    title: "Ultrassom Focado: Tratamento Não-Invasivo para o Tremor",
    summary: "Técnica de ultrassom focado de alta intensidade oferece alternativa à cirurgia para doentes com tremor resistente à medicação.",
    category: "Terapias",
    date: "Feb 20, 2026",
    source: "JAMA Neurology",
    sourceUrl: "https://jamanetwork.com/journals/jamaneurology",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80",
    content: "O ultrassom focado de alta intensidade (HIFU) emergiu como uma alternativa não-invasiva para tratar o tremor resistente à medicação no Parkinson. A técnica utiliza ondas de ultrassom convergentes para criar lesões precisas em áreas específicas do cérebro (como o tálamo), sem necessidade de incisões ou anestesia geral. Resultados de ensaios clínicos multicêntricos, publicados no JAMA Neurology, mostram redução do tremor superior a 60% em 76% dos doentes tratados, com efeitos mantidos após 3 anos. O procedimento é realizado com o doente acordado, dentro de um aparelho de ressonância magnética, e dura cerca de 3 horas. Em Portugal, o Hospital CUF Descobertas é pioneiro na utilização desta tecnologia.",
    tags: ["ultrassom focado", "tremor", "HIFU", "tratamento não-invasivo"],
  },
  {
    id: "r007",
    title: "Exercício Intensivo Pode Modificar a Progressão da Doença",
    summary: "Estudo SPARX3 confirma que exercício aeróbico de alta intensidade atrasa a progressão dos sintomas motores do Parkinson.",
    category: "Investigação",
    date: "Feb 15, 2026",
    source: "The New England Journal of Medicine",
    sourceUrl: "https://www.nejm.org",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1920&q=80",
    content: "O estudo SPARX3 (Study in Parkinson Disease of Exercise), o maior ensaio clínico sobre exercício e Parkinson, publicou resultados definitivos no New England Journal of Medicine. O estudo envolveu 370 participantes recém-diagnosticados em 25 centros nos EUA e Canadá, acompanhados durante 18 meses. Os resultados são inequívocos: exercício aeróbico de alta intensidade (80% da frequência cardíaca máxima, 4 vezes por semana) atrasou significativamente a progressão dos sintomas motores em comparação com exercício moderado ou nenhum exercício. Notavelmente, o grupo de exercício intensivo apresentou menor necessidade de iniciar ou aumentar medicação dopaminérgica. Este é o primeiro estudo de grande escala a demonstrar que o exercício pode ser considerado uma terapia modificadora da doença.",
    tags: ["exercício", "SPARX3", "progressão", "terapia modificadora"],
  },
  {
    id: "r008",
    title: "Anticorpos Monoclonais Anti-Alfa-Sinucleína em Ensaio de Fase III",
    summary: "Primeiro anticorpo monoclonal dirigido à alfa-sinucleína entra em fase III de ensaios clínicos, com resultados esperados em 2027.",
    category: "Ensaios Clínicos",
    date: "Feb 10, 2026",
    source: "ClinicalTrials.gov",
    sourceUrl: "https://clinicaltrials.gov",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80",
    content: "A acumulação de alfa-sinucleína mal dobrada no cérebro é considerada um dos mecanismos centrais do Parkinson. Pela primeira vez, um anticorpo monoclonal (prasinezumab) concebido para limpar estas proteínas tóxicas avançou para a fase III de ensaios clínicos, envolvendo mais de 1.500 participantes em 200 centros mundiais. Os resultados da fase II, publicados anteriormente, mostraram um abrandamento de 35% na progressão dos sintomas motores nos doentes tratados, especialmente nos que estavam em estadios iniciais da doença. Se a fase III confirmar estes resultados, poderá ser aprovado o primeiro tratamento verdadeiramente modificador da doença de Parkinson — um marco histórico na neurologia. Os resultados finais são esperados para 2027. Centros em Portugal, nomeadamente o Hospital de São João no Porto, participam ativamente neste ensaio.",
    tags: ["alfa-sinucleína", "anticorpo monoclonal", "ensaio clínico", "prasinezumab"],
  },
];

export function getResearchByCategory(category: string): ResearchItem[] {
  return researchItems.filter(item => item.category === category);
}
