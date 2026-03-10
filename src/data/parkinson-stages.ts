export interface ParkinsonStage {
  stage: number;
  title: string;
  subtitle: string;
  description: string;
  symptoms: string[];
  management: string[];
  duration: string;
}

export interface ParkinsonCause {
  title: string;
  description: string;
  icon: string;
}

export interface ParkinsonSource {
  title: string;
  url: string;
  description: string;
  type: "organization" | "research" | "clinical";
}

export const parkinsonHistory = {
  discovery: "A doença de Parkinson foi descrita pela primeira vez em 1817 pelo médico britânico James Parkinson no seu ensaio 'An Essay on the Shaking Palsy'. No entanto, descrições de sintomas semelhantes já existiam na medicina ayurvédica indiana (Kampavata) há milhares de anos.",
  naming: "O nome 'doença de Parkinson' foi sugerido pelo neurologista francês Jean-Martin Charcot em homenagem a James Parkinson, reconhecendo o seu trabalho pioneiro na descrição da condição.",
  evolution: "Desde então, a compreensão da doença evoluiu enormemente. Em 1960, Oleh Hornykiewicz descobriu que a deficiência de dopamina no cérebro era a causa principal dos sintomas motores. Esta descoberta revolucionou o tratamento com a introdução da levodopa nos anos 1960.",
  current: "Atualmente, a doença de Parkinson é a segunda doença neurodegenerativa mais comum no mundo, afetando cerca de 10 milhões de pessoas globalmente. Em Portugal, estima-se que existam entre 20.000 a 30.000 pessoas diagnosticadas.",
};

export const parkinsonCauses: ParkinsonCause[] = [
  {
    title: "Genética",
    description: "Cerca de 10-15% dos casos têm uma componente genética identificável. Mutações nos genes LRRK2, PARK7, PINK1, PRKN e SNCA estão associadas a formas hereditárias da doença. Ter um familiar de primeiro grau com Parkinson aumenta o risco em 2 a 3 vezes.",
    icon: "🧬",
  },
  {
    title: "Fatores Ambientais",
    description: "A exposição prolongada a pesticidas (como rotenona e paraquat), herbicidas e solventes industriais está associada a um maior risco. Viver em áreas rurais com uso intensivo de agroquímicos pode aumentar o risco em até 70%.",
    icon: "🌍",
  },
  {
    title: "Envelhecimento",
    description: "A idade é o principal fator de risco. A incidência aumenta significativamente após os 60 anos. O envelhecimento natural provoca a perda gradual de neurónios dopaminérgicos na substância negra do cérebro.",
    icon: "⏳",
  },
  {
    title: "Alterações Cerebrais",
    description: "A acumulação de proteínas alfa-sinucleína (corpos de Lewy) nos neurónios é uma marca da doença. Estas proteínas danificam e destroem os neurónios produtores de dopamina na substância negra, reduzindo os níveis de dopamina no cérebro.",
    icon: "🧠",
  },
  {
    title: "Inflamação e Stress Oxidativo",
    description: "Processos inflamatórios crónicos no cérebro e o stress oxidativo (dano celular causado por radicais livres) contribuem para a degeneração dos neurónios. Investigações recentes sugerem que a inflamação intestinal pode preceder os sintomas motores.",
    icon: "🔬",
  },
  {
    title: "Fatores de Proteção",
    description: "Curiosamente, o consumo de cafeína, o tabagismo (apesar dos seus outros riscos) e o exercício físico regular parecem ter um efeito protetor. A atividade física intensa pode reduzir o risco em até 40%.",
    icon: "🛡️",
  },
];

export const parkinsonStages: ParkinsonStage[] = [
  {
    stage: 1,
    title: "Fase Inicial (Hoehn & Yahr I)",
    subtitle: "Sintomas leves e unilaterais",
    description: "Os sintomas aparecem apenas num lado do corpo. A maioria das pessoas consegue continuar a viver normalmente com pouca ou nenhuma interferência nas atividades diárias. Esta fase pode durar vários anos antes de progredir.",
    symptoms: [
      "Tremor ligeiro numa mão ou perna (tremor de repouso)",
      "Alterações subtis na postura e expressão facial",
      "Diminuição do balanço de um braço ao caminhar",
      "Micrografia (letra cada vez mais pequena)",
      "Alterações no olfato (hiposmia)",
      "Distúrbios do sono REM",
      "Obstipação e lentidão digestiva",
    ],
    management: [
      "Consulta regular com neurologista para monitorização",
      "Início de exercício físico regular (30-60 min/dia)",
      "Fisioterapia preventiva focada em equilíbrio e marcha",
      "Terapia da fala preventiva (programa LSVT LOUD)",
      "Medicação: MAO-B inibidores (rasagilina, selegilina) ou agonistas dopaminérgicos",
      "Manutenção de uma dieta equilibrada rica em fibras",
      "Apoio psicológico para lidar com o diagnóstico",
    ],
    duration: "Esta fase pode durar entre 1 a 3 anos",
  },
  {
    stage: 2,
    title: "Fase Moderada Inicial (Hoehn & Yahr II)",
    subtitle: "Sintomas bilaterais sem comprometimento do equilíbrio",
    description: "Os sintomas passam a afetar ambos os lados do corpo. As atividades diárias tornam-se mais difíceis e demoradas, mas a pessoa continua a ser independente. É frequente que outros notem as alterações.",
    symptoms: [
      "Tremor e rigidez em ambos os lados do corpo",
      "Bradicinesia (lentidão dos movimentos) mais evidente",
      "Alterações na expressão facial (hipomimia ou 'face de máscara')",
      "Dificuldades na fala (voz mais baixa e monótona)",
      "Rigidez do pescoço e tronco, alterações posturais",
      "Fadiga mais frequente",
      "Perturbações do humor (ansiedade, depressão)",
    ],
    management: [
      "Ajuste da medicação: levodopa/carbidopa pode ser iniciada",
      "Fisioterapia regular 2-3x por semana",
      "Terapia ocupacional para adaptação de atividades diárias",
      "Exercícios de equilíbrio e coordenação (tai chi, dança)",
      "Terapia da fala para manter volume e clareza vocal",
      "Grupos de apoio e partilha de experiências",
      "Planeamento de atividades nos períodos ON da medicação",
    ],
    duration: "Esta fase pode durar entre 2 a 7 anos",
  },
  {
    stage: 3,
    title: "Fase Moderada (Hoehn & Yahr III)",
    subtitle: "Comprometimento do equilíbrio, independência mantida",
    description: "Esta é a fase de transição. O equilíbrio começa a ser afetado e as quedas tornam-se mais frequentes. A pessoa continua independente mas com mais dificuldades. Os sintomas não-motores podem intensificar-se.",
    symptoms: [
      "Instabilidade postural significativa",
      "Quedas mais frequentes, especialmente ao virar",
      "Congelamento da marcha (freezing of gait)",
      "Bradicinesia mais acentuada em todas as atividades",
      "Dificuldades na deglutição (disfagia ligeira)",
      "Problemas cognitivos leves (atenção, memória de trabalho)",
      "Perturbações do sono mais intensas",
      "Hipotensão ortostática (tonturas ao levantar)",
    ],
    management: [
      "Otimização da medicação dopaminérgica (dosagem e horários)",
      "Programa intensivo de fisioterapia (BIG therapy)",
      "Avaliação para estimulação cerebral profunda (DBS)",
      "Adaptações de segurança em casa (barras, tapetes antiderrapantes)",
      "Uso de auxiliares de marcha quando necessário",
      "Terapia cognitiva e exercícios mentais regulares",
      "Avaliação nutricional (proteínas e interação com levodopa)",
      "Monitorização da pressão arterial e ajuste medicação",
    ],
    duration: "Esta fase pode durar entre 2 a 5 anos",
  },
  {
    stage: 4,
    title: "Fase Avançada (Hoehn & Yahr IV)",
    subtitle: "Incapacidade severa, necessidade de assistência",
    description: "Os sintomas são severamente debilitantes. A pessoa pode conseguir ficar de pé e caminhar, mas com grande dificuldade. Necessita de ajuda significativa nas atividades do dia a dia.",
    symptoms: [
      "Dificuldade severa na marcha, necessidade de apoio",
      "Rigidez e bradicinesia muito acentuadas",
      "Flutuações motoras significativas (períodos ON/OFF)",
      "Discinesias (movimentos involuntários) por medicação",
      "Disfagia moderada a severa",
      "Problemas urinários (urgência, incontinência)",
      "Alterações cognitivas mais evidentes",
      "Alucinações visuais (podem ser efeito da medicação)",
      "Depressão e apatia mais pronunciadas",
    ],
    management: [
      "Reavaliação completa da medicação e regime terapêutico",
      "Estimulação cerebral profunda (DBS) se indicada",
      "Terapia com bomba de infusão de apomorfina ou levodopa/carbidopa intestinal",
      "Cuidador formal ou informal com formação adequada",
      "Fisioterapia domiciliária adaptada",
      "Terapia da fala intensiva e avaliação da deglutição",
      "Apoio psicológico para doente e cuidador",
      "Planeamento de cuidados avançados",
    ],
    duration: "Esta fase pode durar vários anos com cuidados adequados",
  },
  {
    stage: 5,
    title: "Fase Mais Avançada (Hoehn & Yahr V)",
    subtitle: "Dependência total, cuidados continuados",
    description: "A fase mais avançada da doença. A pessoa necessita de cadeira de rodas ou está acamada. Necessita de cuidados constantes. No entanto, muitas pessoas nesta fase mantêm a consciência e capacidade emocional.",
    symptoms: [
      "Incapacidade de ficar de pé ou andar sem ajuda",
      "Necessidade de cadeira de rodas ou acamamento",
      "Disfagia severa com risco de aspiração",
      "Demência associada a Parkinson (pode ocorrer)",
      "Dor crónica e desconforto",
      "Problemas respiratórios",
      "Instabilidade autónoma (temperatura, pressão arterial)",
      "Perturbações graves do sono",
    ],
    management: [
      "Cuidados paliativos especializados e de conforto",
      "Equipa multidisciplinar de cuidados",
      "Nutrição adaptada (dieta pastosa, suplementos)",
      "Posicionamento adequado para prevenir úlceras de pressão",
      "Fisioterapia de manutenção e mobilização passiva",
      "Comunicação alternativa se necessário",
      "Apoio espiritual e emocional ao doente e família",
      "Articulação com cuidados continuados e paliativos",
    ],
    duration: "Variável, com cuidados adequados pode ser prolongada",
  },
];

export const commonSymptoms = {
  motor: [
    { name: "Tremor de Repouso", description: "Tremor rítmico involuntário que ocorre quando o membro está em repouso. Geralmente começa numa mão (movimento de 'contar moedas') e pode afetar pernas, mandíbula e lábios.", prevalence: "70-80%" },
    { name: "Bradicinesia", description: "Lentidão na iniciação e execução de movimentos voluntários. Afeta tarefas como abotoar roupa, escrever, levantar de uma cadeira. É frequentemente o sintoma mais incapacitante.", prevalence: "80-90%" },
    { name: "Rigidez Muscular", description: "Aumento do tónus muscular que provoca sensação de tensão e dor. Pode afetar qualquer parte do corpo e contribui para a postura curvada característica.", prevalence: "75-90%" },
    { name: "Instabilidade Postural", description: "Perda do reflexo de equilíbrio que leva a quedas. Aparece geralmente nas fases mais avançadas e é um dos sintomas mais perigosos.", prevalence: "40-70%" },
    { name: "Congelamento da Marcha", description: "Incapacidade súbita e temporária de iniciar ou continuar a andar. Os pés parecem 'colados ao chão'. Ocorre frequentemente ao passar portas ou mudar de direção.", prevalence: "30-60%" },
    { name: "Disartria", description: "Alterações na fala: voz mais baixa (hipofonia), monótona, com articulação imprecisa. A fala pode tornar-se rápida e arrastada.", prevalence: "60-90%" },
  ],
  nonMotor: [
    { name: "Depressão e Ansiedade", description: "Muito comuns e podem preceder os sintomas motores em anos. Resultam tanto da reação ao diagnóstico como de alterações químicas no cérebro.", prevalence: "40-50%" },
    { name: "Distúrbios do Sono", description: "Incluem insónia, síndrome das pernas inquietas, perturbação do comportamento do sono REM (movimentos violentos durante o sono), e sonolência diurna excessiva.", prevalence: "60-98%" },
    { name: "Obstipação", description: "Lentidão do trânsito intestinal que pode preceder o diagnóstico em 10-20 anos. Afeta a qualidade de vida e pode interferir com a absorção da medicação.", prevalence: "50-80%" },
    { name: "Perturbações Cognitivas", description: "Dificuldades na atenção, memória de trabalho, funções executivas e velocidade de processamento. A demência pode ocorrer nas fases mais avançadas.", prevalence: "20-40%" },
    { name: "Hiposmia", description: "Perda ou redução do olfato. É frequentemente um dos primeiros sintomas, podendo surgir anos antes dos sintomas motores.", prevalence: "70-90%" },
    { name: "Dor", description: "Pode ser musculoesquelética, neuropática ou distónica. Frequentemente subestimada e subtratada. Pode ser o sintoma mais incapacitante para alguns doentes.", prevalence: "40-85%" },
    { name: "Fadiga", description: "Cansaço extremo não proporcional à atividade realizada. É um dos sintomas mais relatados e com maior impacto na qualidade de vida.", prevalence: "50-70%" },
    { name: "Hipotensão Ortostática", description: "Queda da pressão arterial ao levantar, causando tonturas e risco de quedas. Pode ser agravada pela medicação dopaminérgica.", prevalence: "30-50%" },
  ],
};

export const managementStrategies = [
  {
    category: "Exercício Físico",
    strategies: [
      "Exercício aeróbico 150 min/semana (caminhada, ciclismo, natação)",
      "Tai chi para equilíbrio (reduz quedas em 67% segundo estudos)",
      "Dança (tango, valsa) — melhora marcha e equilíbrio",
      "Boxe sem contacto (Rock Steady Boxing) — coordenação e força",
      "Yoga adaptado — flexibilidade e relaxamento",
      "Treino de força 2-3x/semana — mantém massa muscular",
    ],
  },
  {
    category: "Nutrição",
    strategies: [
      "Dieta mediterrânica rica em antioxidantes e ómega-3",
      "Gestão da interação proteínas-levodopa (proteínas ao jantar)",
      "Hidratação adequada (1.5-2L água/dia)",
      "Fibra abundante para combater obstipação (25-30g/dia)",
      "Vitamina D — frequentemente deficiente em doentes com Parkinson",
      "Evitar excesso de ferro (pode agravar stress oxidativo)",
    ],
  },
  {
    category: "Saúde Mental",
    strategies: [
      "Terapia cognitivo-comportamental para ansiedade e depressão",
      "Mindfulness e meditação — reduz stress e melhora sono",
      "Grupos de apoio presenciais e online",
      "Manutenção de hobbies e atividades sociais",
      "Treino cognitivo regular (puzzles, leitura, jogos mentais)",
      "Acompanhamento psicológico regular",
    ],
  },
  {
    category: "Terapias Complementares",
    strategies: [
      "Fisioterapia especializada (BIG therapy, LSVT BIG)",
      "Terapia da fala (LSVT LOUD — aumenta volume vocal em 15-20dB)",
      "Terapia ocupacional para adaptação do ambiente",
      "Musicoterapia — melhora marcha e estado emocional",
      "Acupuntura — pode ajudar no controlo da dor",
      "Hidroterapia — exercício em ambiente seguro e relaxante",
    ],
  },
];

export interface Treatment {
  name: string;
  category: "dopaminergic" | "non-dopaminergic" | "surgical" | "emerging";
  description: string;
  mechanism: string;
  indications: string[];
  sideEffects: string[];
  notes: string;
  sourceUrl: string;
}

export const treatments: Treatment[] = [
  {
    name: "Levodopa / Carbidopa (Sinemet, Madopar)",
    category: "dopaminergic",
    description: "O tratamento mais eficaz e mais utilizado para a doença de Parkinson. A levodopa é convertida em dopamina no cérebro. A carbidopa (ou benserazida) impede a conversão periférica, reduzindo efeitos secundários.",
    mechanism: "A levodopa atravessa a barreira hematoencefálica e é convertida em dopamina pela enzima DOPA descarboxilase nos neurónios dopaminérgicos remanescentes da substância negra.",
    indications: [
      "Tratamento de primeira linha em doentes com mais de 70 anos",
      "Sintomas motores moderados a severos em qualquer idade",
      "Quando agonistas dopaminérgicos são insuficientes ou mal tolerados",
      "Formulações de libertação prolongada para flutuações motoras",
    ],
    sideEffects: [
      "Náuseas e vómitos (especialmente no início)",
      "Discinesias (movimentos involuntários) após uso prolongado",
      "Flutuações motoras (fenómeno ON/OFF) após 5-10 anos",
      "Hipotensão ortostática",
      "Sonolência e confusão (em idosos)",
    ],
    notes: "Após 5-10 anos de uso, cerca de 50-80% dos doentes desenvolvem flutuações motoras e discinesias. A interação com proteínas da dieta pode reduzir a absorção — recomenda-se tomar 30-60 min antes das refeições.",
    sourceUrl: "https://www.parkinson.org/understanding-parkinsons/treatment/prescription-medications/carbidopa-levodopa",
  },
  {
    name: "Agonistas Dopaminérgicos (Pramipexol, Ropinirol, Rotigotina)",
    category: "dopaminergic",
    description: "Medicamentos que imitam a ação da dopamina nos recetores cerebrais. Podem ser usados em monoterapia nas fases iniciais ou em combinação com levodopa nas fases mais avançadas.",
    mechanism: "Estimulam diretamente os recetores de dopamina D2 e D3 no estriado, sem necessidade de conversão enzimática. Têm uma semivida mais longa que a levodopa.",
    indications: [
      "Tratamento inicial em doentes mais jovens (<70 anos) para atrasar o uso de levodopa",
      "Terapia adjuvante à levodopa para reduzir flutuações motoras",
      "Rotigotina em adesivo transdérmico para administração contínua",
      "Apomorfina subcutânea para resgate rápido de episódios OFF",
    ],
    sideEffects: [
      "Náuseas, tonturas e sonolência diurna excessiva",
      "Edema periférico (inchaço das pernas)",
      "Distúrbios do controlo de impulsos (jogo patológico, compras compulsivas, hipersexualidade) em 15-20% dos doentes",
      "Alucinações visuais (mais frequentes em idosos)",
      "Síndrome de abstinência ao descontinuar",
    ],
    notes: "Os distúrbios do controlo de impulsos são um efeito secundário importante que deve ser monitorizado ativamente. A apomorfina é o único agonista que pode ser administrado por via subcutânea para alívio rápido.",
    sourceUrl: "https://www.michaeljfox.org/news/dopamine-agonists",
  },
  {
    name: "Inibidores da MAO-B (Rasagilina, Selegilina, Safinamida)",
    category: "dopaminergic",
    description: "Medicamentos que bloqueiam a enzima monoamina oxidase B (MAO-B), responsável pela degradação da dopamina no cérebro. Prolongam o efeito da dopamina disponível.",
    mechanism: "Inibem irreversivelmente (rasagilina, selegilina) ou reversivelmente (safinamida) a MAO-B, impedindo a degradação da dopamina e aumentando a sua disponibilidade sináptica.",
    indications: [
      "Monoterapia nas fases muito iniciais com sintomas leves",
      "Terapia adjuvante à levodopa para prolongar o efeito e reduzir períodos OFF",
      "Safinamida: também bloqueia canais de sódio e libertação de glutamato",
      "Possível efeito neuroprotetor (em investigação)",
    ],
    sideEffects: [
      "Insónia (especialmente selegilina)",
      "Cefaleias e tonturas",
      "Náuseas ligeiras",
      "Interações com antidepressivos (risco de síndrome serotoninérgica)",
      "Discinesias quando combinados com levodopa",
    ],
    notes: "A rasagilina é geralmente preferida à selegilina por ter menos efeitos secundários e interações. A safinamida é a mais recente e tem um duplo mecanismo de ação.",
    sourceUrl: "https://www.parkinsons.org.uk/information-and-support/mao-b-inhibitors",
  },
  {
    name: "Inibidores da COMT (Entacapona, Opicapona, Tolcapona)",
    category: "dopaminergic",
    description: "Bloqueiam a enzima catecol-O-metiltransferase (COMT) que degrada a levodopa no organismo, aumentando a sua biodisponibilidade e prolongando o seu efeito.",
    mechanism: "Ao inibir a COMT, impedem a degradação periférica da levodopa, permitindo que mais levodopa chegue ao cérebro. São sempre usados em combinação com levodopa.",
    indications: [
      "Adjuvante à levodopa em doentes com flutuações motoras (wearing-off)",
      "Opicapona: dose única diária, inibidor de terceira geração desenvolvido em Portugal",
      "Redução dos períodos OFF em 1-2 horas por dia",
      "Permitem reduzir a dose total de levodopa",
    ],
    sideEffects: [
      "Discinesias (por aumento do efeito da levodopa)",
      "Diarreia (especialmente entacapona)",
      "Coloração alaranjada da urina (inofensivo)",
      "Tolcapona: risco raro de hepatotoxicidade (requer monitorização hepática)",
      "Náuseas e dor abdominal",
    ],
    notes: "A opicapona (Ongentys®) foi desenvolvida pela empresa portuguesa BIAL e aprovada pela EMA em 2016. Representa um avanço significativo por necessitar de apenas uma toma diária.",
    sourceUrl: "https://www.parkinson.org/understanding-parkinsons/treatment/prescription-medications/comt-inhibitors",
  },
  {
    name: "Anticolinérgicos (Tri-hexifenidilo, Biperideno)",
    category: "non-dopaminergic",
    description: "Dos medicamentos mais antigos para o Parkinson. Bloqueiam a ação da acetilcolina, reequilibrando a relação dopamina/acetilcolina no estriado. Uso atualmente limitado.",
    mechanism: "Bloqueiam os recetores muscarínicos de acetilcolina no estriado. Com a redução de dopamina no Parkinson, a acetilcolina fica relativamente em excesso, e estes fármacos restauram o equilíbrio.",
    indications: [
      "Tremor de repouso predominante em doentes jovens",
      "Quando o tremor não responde adequadamente à levodopa",
      "Sialorreia (excesso de saliva)",
      "Uso cada vez mais raro devido aos efeitos secundários cognitivos",
    ],
    sideEffects: [
      "Boca seca, visão turva, obstipação, retenção urinária",
      "Confusão mental e alucinações (especialmente em idosos)",
      "Défice de memória e comprometimento cognitivo",
      "Contraindicados em doentes com glaucoma ou hiperplasia da próstata",
    ],
    notes: "Devido ao risco de efeitos cognitivos adversos, os anticolinérgicos são geralmente evitados em doentes com mais de 65 anos e nunca usados em doentes com demência.",
    sourceUrl: "https://www.parkinsons.org.uk/information-and-support/anticholinergics",
  },
  {
    name: "Amantadina",
    category: "non-dopaminergic",
    description: "Originalmente um antiviral, a amantadina tem múltiplos mecanismos de ação no Parkinson. É o único medicamento aprovado para o tratamento de discinesias induzidas pela levodopa.",
    mechanism: "Antagonista dos recetores NMDA de glutamato, aumenta a libertação de dopamina, bloqueia a recaptação de dopamina e tem propriedades anticolinérgicas leves.",
    indications: [
      "Tratamento de discinesias induzidas pela levodopa (formulação de libertação prolongada — Gocovri®)",
      "Monoterapia nas fases iniciais com sintomas leves",
      "Adjuvante para rigidez e bradicinesia",
      "Redução do congelamento da marcha em alguns doentes",
    ],
    sideEffects: [
      "Livedo reticularis (descoloração arroxeada da pele nas pernas)",
      "Edema dos tornozelos",
      "Insónia e alucinações visuais",
      "Confusão (em idosos)",
      "Deve ser descontinuada gradualmente",
    ],
    notes: "A formulação de libertação prolongada (Gocovri®) foi aprovada em 2017 especificamente para discinesias. Reduz as discinesias em cerca de 40% sem piorar o controlo motor.",
    sourceUrl: "https://www.michaeljfox.org/news/amantadine-and-parkinsons-disease",
  },
  {
    name: "Estimulação Cerebral Profunda (DBS)",
    category: "surgical",
    description: "Procedimento cirúrgico que implanta elétrodos em áreas específicas do cérebro (núcleo subtalâmico ou globo pálido interno) ligados a um neuroestimulador. Considerada a principal opção cirúrgica para Parkinson avançado.",
    mechanism: "Elétrodos implantados enviam impulsos elétricos contínuos de alta frequência que modulam a atividade neuronal anormal nos circuitos dos gânglios da base, reduzindo os sintomas motores.",
    indications: [
      "Flutuações motoras severas (ON/OFF) não controladas com medicação otimizada",
      "Discinesias incapacitantes induzidas pela levodopa",
      "Tremor severo refratário à medicação",
      "Doentes com boa resposta à levodopa (preditivo de bom resultado)",
      "Idade geralmente inferior a 70 anos, sem demência significativa",
    ],
    sideEffects: [
      "Riscos cirúrgicos: hemorragia intracraniana (1-2%), infeção (3-5%)",
      "Efeitos da estimulação: alterações na fala (disartria), parestesias",
      "Alterações de humor e comportamento em alguns doentes",
      "Necessidade de ajustes frequentes da programação",
      "Substituição da bateria do neuroestimulador a cada 3-5 anos (ou recarregável)",
    ],
    notes: "Em Portugal, a DBS está disponível em centros especializados (Hospital de Santa Maria, Hospital de São João, Hospital de Coimbra). Reduz a medicação em 50-60% e melhora os sintomas motores em 40-60%. O sistema adaptativo (aDBS), que ajusta automaticamente a estimulação, está em desenvolvimento.",
    sourceUrl: "https://www.parkinson.org/understanding-parkinsons/treatment/surgical-treatment/deep-brain-stimulation",
  },
  {
    name: "Terapias de Infusão (Duodopa, Apomorfina contínua)",
    category: "surgical",
    description: "Terapias de administração contínua para doentes com flutuações motoras severas. A Duodopa é um gel de levodopa/carbidopa administrado diretamente no jejuno. A apomorfina pode ser administrada por bomba subcutânea.",
    mechanism: "A administração contínua mantém níveis plasmáticos estáveis do fármaco, evitando os picos e vales que causam flutuações motoras e discinesias com a medicação oral.",
    indications: [
      "Flutuações motoras severas não controladas com medicação oral otimizada",
      "Alternativa à DBS em doentes não elegíveis para cirurgia cerebral",
      "Duodopa: requer gastrostomia percutânea (PEG-J)",
      "Bomba de apomorfina: administração subcutânea sem necessidade de cirurgia",
    ],
    sideEffects: [
      "Duodopa: complicações da sonda (deslocamento, obstrução, infeção local)",
      "Apomorfina: nódulos subcutâneos no local de injeção, náuseas",
      "Ambos: discinesias, alucinações",
      "Duodopa: polineuropatia (deficiência de vitamina B12 — requer suplementação)",
    ],
    notes: "A foslevodopa/foscarbidopa (Produodopa®) é uma nova formulação subcutânea aprovada em 2024 que elimina a necessidade de sonda jejunal, representando um grande avanço na conveniência para o doente.",
    sourceUrl: "https://www.parkinsons.org.uk/information-and-support/duodopa",
  },
  {
    name: "Terapias Emergentes e em Investigação",
    category: "emerging",
    description: "Várias abordagens inovadoras estão em desenvolvimento para modificar a progressão da doença, não apenas tratar sintomas. Incluem terapias génicas, imunoterapias e terapias com células estaminais.",
    mechanism: "Diferentes abordagens: anticorpos anti-alfa-sinucleína (prasinezumab), terapias génicas que aumentam a produção de dopamina, transplante de neurónios dopaminérgicos derivados de células estaminais, e agonistas GLP-1 (originalmente para diabetes).",
    indications: [
      "Prasinezumab (anti-alfa-sinucleína): resultados promissores em fase II — pode abrandar progressão motora",
      "Lixisenatida (agonista GLP-1): estudo LIXIPARK mostrou abrandamento da progressão em 2024",
      "Terapia génica (AAV-GAD, AAV-AADC): ensaios clínicos de fase I/II em curso",
      "Transplante de células estaminais: ensaios iniciais no Japão e EUA",
    ],
    sideEffects: [
      "Variáveis conforme a terapia — ainda em estudo",
      "Imunoterapias: reações de infusão, risco teórico de autoimunidade",
      "Terapia génica: riscos cirúrgicos da administração intracerebral",
      "GLP-1: náuseas, perda de peso (geralmente bem tolerados)",
    ],
    notes: "O estudo mais promissor recente é o LIXIPARK (2024, NEJM), que demonstrou que a lixisenatida (um agonista GLP-1 usado na diabetes) abrandou a progressão dos sintomas motores em 12 meses. Vários ensaios clínicos estão ativamente a recrutar em ClinicalTrials.gov.",
    sourceUrl: "https://clinicaltrials.gov/search?cond=Parkinson%20Disease&aggFilters=status:rec",
  },
];

export const reliableSources: ParkinsonSource[] = [
  {
    title: "Michael J. Fox Foundation",
    url: "https://www.michaeljfox.org",
    description: "A maior fundação de investigação sobre Parkinson do mundo. Financia investigação e oferece recursos educativos extensos.",
    type: "organization",
  },
  {
    title: "Parkinson's Foundation",
    url: "https://www.parkinson.org",
    description: "Recursos abrangentes para doentes, cuidadores e profissionais. Inclui informação sobre ensaios clínicos e tratamentos.",
    type: "organization",
  },
  {
    title: "European Parkinson's Disease Association (EPDA)",
    url: "https://www.epda.eu.com",
    description: "Organização europeia que representa doentes de Parkinson em toda a Europa. Recursos em múltiplos idiomas.",
    type: "organization",
  },
  {
    title: "APDPk - Associação Portuguesa de Doentes de Parkinson",
    url: "https://parkinson.pt",
    description: "A principal associação portuguesa dedicada ao Parkinson. Grupos de apoio, informação e serviços em Portugal.",
    type: "organization",
  },
  {
    title: "Parkinson's UK",
    url: "https://www.parkinsons.org.uk",
    description: "Uma das maiores organizações de Parkinson do mundo. Excelente informação sobre sintomas, tratamentos e investigação.",
    type: "organization",
  },
  {
    title: "ClinicalTrials.gov",
    url: "https://clinicaltrials.gov/search?cond=Parkinson%20Disease",
    description: "Base de dados de ensaios clínicos em todo o mundo. Pesquise ensaios sobre Parkinson disponíveis em Portugal.",
    type: "research",
  },
  {
    title: "PubMed - Investigação sobre Parkinson",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=parkinson+disease",
    description: "Base de dados de artigos científicos. A fonte mais completa de investigação médica sobre Parkinson.",
    type: "research",
  },
  {
    title: "The Lancet Neurology",
    url: "https://www.thelancet.com/journals/laneur",
    description: "Revista científica de referência em neurologia. Publica as investigações mais recentes sobre doenças neurodegenerativas.",
    type: "research",
  },
  {
    title: "SNS 24 - Parkinson",
    url: "https://www.sns24.gov.pt",
    description: "Informação oficial do Serviço Nacional de Saúde Português. Linha de apoio: 808 24 24 24.",
    type: "clinical",
  },
  {
    title: "DGS - Direção-Geral da Saúde",
    url: "https://www.dgs.pt",
    description: "Normas clínicas e orientações oficiais para o diagnóstico e tratamento do Parkinson em Portugal.",
    type: "clinical",
  },
  {
    title: "Movement Disorder Society (MDS)",
    url: "https://www.movementdisorders.org",
    description: "Sociedade internacional de especialistas em distúrbios do movimento. Define critérios de diagnóstico e guidelines de tratamento.",
    type: "clinical",
  },
  {
    title: "World Parkinson Coalition",
    url: "https://www.worldpdcoalition.org",
    description: "Coligação mundial que organiza o World Parkinson Congress. Reúne investigadores, clínicos e doentes de todo o mundo.",
    type: "organization",
  },
];
