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

export interface MedicationCareSection {
  title: string;
  icon: string;
  items: { label: string; description: string }[];
}

export const medicationCare: MedicationCareSection[] = [
  {
    title: "Horários e Regularidade",
    icon: "⏰",
    items: [
      { label: "Tomar sempre à mesma hora", description: "A levodopa deve ser tomada a intervalos regulares (geralmente a cada 4-6 horas) para manter níveis estáveis de dopamina no cérebro. Use alarmes no telemóvel para não esquecer." },
      { label: "30-60 minutos antes das refeições", description: "A levodopa é melhor absorvida com o estômago vazio. Idealmente, tome 30 a 60 minutos antes das refeições principais ou 1-2 horas depois de comer." },
      { label: "Não partir ou esmagar comprimidos de libertação prolongada", description: "Os comprimidos de libertação prolongada (Sinemet CR, Madopar HBS) devem ser engolidos inteiros para garantir a libertação gradual do medicamento." },
      { label: "Primeira toma ao acordar", description: "A primeira dose da manhã é crucial. Tome a levodopa logo ao acordar, antes de se levantar da cama, com um copo de água. Espere 20-30 minutos antes de tomar o pequeno-almoço." },
      { label: "Manter um diário da medicação", description: "Registe os horários das tomas, os períodos ON/OFF e os sintomas. Esta informação é valiosa para o neurologista ajustar a medicação." },
    ],
  },
  {
    title: "Alimentos Aconselhados",
    icon: "✅",
    items: [
      { label: "Frutas e vegetais ricos em antioxidantes", description: "Mirtilos, morangos, espinafres, brócolos e couve são ricos em antioxidantes que podem ajudar a proteger os neurónios. Consuma pelo menos 5 porções por dia." },
      { label: "Alimentos ricos em fibra", description: "Aveia, leguminosas, sementes de linhaça e chia ajudam a combater a obstipação (muito comum no Parkinson) e melhoram a absorção da medicação a longo prazo." },
      { label: "Ómega-3 (peixes gordos)", description: "Salmão, sardinha, cavala e atum são ricos em ácidos gordos ómega-3, que têm propriedades anti-inflamatórias e podem ser neuroprotetores." },
      { label: "Hidratos de carbono complexos", description: "Arroz integral, batata-doce, quinoa e pão integral fornecem energia estável e não interferem com a absorção da levodopa." },
      { label: "Água e líquidos em abundância", description: "Beba 1.5 a 2 litros de água por dia. A desidratação pode agravar a obstipação e a hipotensão ortostática, além de afetar a absorção da medicação." },
      { label: "Favas e feijão-frade", description: "Contêm naturalmente levodopa em pequenas quantidades. Podem ser um complemento alimentar benéfico, mas não substituem a medicação." },
    ],
  },
  {
    title: "Alimentos Desaconselhados ou a Controlar",
    icon: "⚠️",
    items: [
      { label: "Proteínas em excesso junto à medicação", description: "As proteínas competem com a levodopa pela absorção no intestino. Evite refeições ricas em proteínas (carne, peixe, ovos, queijo) nos 30-60 minutos antes e depois de tomar a levodopa. Redistribua as proteínas para o jantar." },
      { label: "Leite e derivados junto à toma", description: "Os lacticínios são ricos em proteínas e cálcio, que podem interferir com a absorção da levodopa. Evite leite, iogurte e queijo próximo do horário da medicação." },
      { label: "Alimentos ricos em ferro", description: "Suplementos de ferro e alimentos muito ricos em ferro (fígado, morcela) podem reduzir a absorção da levodopa em até 50%. Separe a toma de ferro da levodopa por pelo menos 2 horas." },
      { label: "Vitamina B6 em doses elevadas", description: "Doses elevadas de vitamina B6 (piridoxina) podem reduzir a eficácia da levodopa quando tomada sem carbidopa. Com a combinação levodopa/carbidopa moderna, este efeito é minimizado, mas evite megadoses." },
      { label: "Álcool", description: "O álcool pode agravar a sonolência, as tonturas e a hipotensão ortostática causadas pela medicação. Se consumir, faça-o com muita moderação e nunca próximo da toma da medicação." },
      { label: "Excesso de açúcar e alimentos processados", description: "Alimentos muito açucarados podem provocar picos de glicemia que agravam as flutuações motoras. Prefira alimentos integrais e não processados." },
    ],
  },
  {
    title: "O Que Fazer em Caso de Esquecimento",
    icon: "🔔",
    items: [
      { label: "Esqueceu e lembrou-se pouco depois", description: "Se se lembrar dentro de 1 hora do horário previsto, tome a dose imediatamente. Retome depois o horário normal." },
      { label: "Esqueceu e já passou mais de 1 hora", description: "Se já passou mais de 1 hora, salte essa dose e tome a próxima no horário habitual. Nunca tome dose dupla para compensar — pode causar discinesias graves e outros efeitos secundários." },
      { label: "Esquecimentos frequentes", description: "Se os esquecimentos são recorrentes, considere usar uma caixa organizadora de medicação semanal, alarmes no telemóvel, ou peça ajuda a um familiar/cuidador. Fale com o neurologista sobre formulações de libertação prolongada." },
      { label: "Vómito após a toma", description: "Se vomitar nos 30 minutos seguintes à toma, pode repetir a dose. Se já passaram mais de 30 minutos, o medicamento já foi parcialmente absorvido — espere pela próxima toma regular." },
      { label: "Nunca interromper bruscamente", description: "A interrupção súbita da levodopa ou dos agonistas dopaminérgicos pode causar síndrome neuroléptica maligna, uma emergência médica. Reduza sempre a medicação gradualmente e sob orientação médica." },
    ],
  },
  {
    title: "Fatores que Reduzem a Eficácia da Medicação",
    icon: "❌",
    items: [
      { label: "Refeições ricas em proteínas", description: "Os aminoácidos das proteínas utilizam o mesmo sistema de transporte que a levodopa no intestino e na barreira hematoencefálica. Uma refeição rica em proteínas pode reduzir a absorção da levodopa em 30-50%." },
      { label: "Gastroparésia e trânsito intestinal lento", description: "O Parkinson frequentemente afeta o sistema digestivo. A levodopa é absorvida no intestino delgado — se o esvaziamento gástrico estiver atrasado, a absorção é irregular e imprevisível." },
      { label: "Interação com outros medicamentos", description: "Antipsicóticos, metoclopramida, antidepressivos IMAO não-seletivos e alguns anti-hipertensores podem reduzir a eficácia ou interagir perigosamente com a medicação anti-parkinsónica. Informe sempre o neurologista de todos os medicamentos que toma." },
      { label: "Stress e ansiedade", description: "O stress emocional pode aumentar o consumo de dopamina e agravar os sintomas motores, dando a impressão de que a medicação não está a funcionar. Técnicas de relaxamento podem ajudar." },
      { label: "Infeções e febre", description: "Doenças agudas, infeções urinárias e febre podem agravar dramaticamente os sintomas do Parkinson e reduzir a resposta à medicação. É essencial tratar rapidamente qualquer infeção." },
      { label: "Desidratação", description: "A falta de líquidos afeta a absorção intestinal da levodopa e pode agravar a hipotensão ortostática. Mantenha-se bem hidratado ao longo do dia." },
      { label: "Helicobacter pylori", description: "A infeção por H. pylori no estômago pode reduzir significativamente a absorção da levodopa. Se a medicação parece perder eficácia, peça ao médico para testar esta bactéria." },
    ],
  },
  {
    title: "Dicas Práticas para o Dia a Dia",
    icon: "💡",
    items: [
      { label: "Tenha sempre medicação de reserva", description: "Mantenha uma pequena reserva de medicação na mala, no carro e em casa de familiares. Nunca deixe a medicação acabar sem ter renovado a receita." },
      { label: "Viagens e fusos horários", description: "Em viagens, mantenha a medicação na bagagem de mão. Para fusos horários diferentes, ajuste os horários gradualmente (1 hora por dia). Leve sempre uma carta do médico com a lista de medicação." },
      { label: "Calor e armazenamento", description: "Guarde a medicação em local fresco e seco (15-25°C). O calor excessivo pode degradar a levodopa. Nunca deixe medicação dentro do carro ao sol." },
      { label: "Acompanhamento regular", description: "Consulte o neurologista a cada 3-6 meses para ajuste da medicação. Leve o diário de medicação e anote todas as dúvidas antes da consulta." },
      { label: "Envolver a família", description: "Eduque familiares e cuidadores sobre a medicação, horários e sinais de alerta. Uma rede de apoio informada é fundamental para uma gestão eficaz da doença." },
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

// ========== DIAGNÓSTICO ==========

export interface DiagnosticFact {
  title: string;
  description: string;
  icon: string;
}

export const diagnosticFacts: DiagnosticFact[] = [
  {
    title: "Cada caso é único",
    description: "Não existem dois doentes com Parkinson iguais. A combinação de sintomas, a velocidade de progressão e a resposta ao tratamento variam enormemente de pessoa para pessoa.",
    icon: "🧬",
  },
  {
    title: "Nem todos tremem",
    description: "Cerca de 30% dos doentes de Parkinson nunca desenvolvem tremor. O diagnóstico pode basear-se em rigidez, lentidão de movimentos ou instabilidade postural.",
    icon: "🤲",
  },
  {
    title: "Sintomas não-motores precedem os motores",
    description: "Perda de olfato, obstipação, perturbações do sono REM e depressão podem surgir 5 a 10 anos antes dos primeiros sinais motores.",
    icon: "🕐",
  },
  {
    title: "Diagnóstico clínico",
    description: "Não existe um exame laboratorial ou de imagem definitivo. O diagnóstico é essencialmente clínico, baseado na história e no exame neurológico, podendo ser complementado com DaTSCAN.",
    icon: "🩺",
  },
  {
    title: "Idade não é determinante",
    description: "Embora mais comum após os 60 anos, cerca de 5-10% dos casos são diagnosticados antes dos 50 (Parkinson de início jovem), com características clínicas distintas.",
    icon: "📅",
  },
  {
    title: "Sintomas flutuam",
    description: "Os sintomas podem variar ao longo do dia, de dia para dia, e ser influenciados por stress, fadiga, medicação e até condições meteorológicas.",
    icon: "📊",
  },
];

export const frequentSymptomsSummary = {
  motor: [
    { name: "Tremor em repouso", description: "Tremor rítmico, geralmente começando numa mão. Mais evidente em repouso e pode diminuir com o movimento voluntário.", frequency: "70%" },
    { name: "Bradicinesia", description: "Lentidão progressiva dos movimentos. Dificulta tarefas como abotoar roupa, escrever ou levantar-se de uma cadeira.", frequency: "80-90%" },
    { name: "Rigidez muscular", description: "Aumento do tónus muscular que causa resistência ao movimento passivo. Pode causar dor e limitar a amplitude de movimentos.", frequency: "75-90%" },
    { name: "Instabilidade postural", description: "Dificuldade em manter o equilíbrio, especialmente em fases mais avançadas. Aumenta o risco de quedas.", frequency: "40-70%" },
    { name: "Alterações na marcha", description: "Passos curtos e arrastados, festinação (aceleração involuntária), freezing (bloqueio súbito ao caminhar).", frequency: "60-80%" },
    { name: "Micrografia", description: "Letra progressivamente mais pequena e ilegível. Um dos primeiros sinais subtis da doença.", frequency: "50-60%" },
  ],
  nonMotor: [
    { name: "Perda de olfato", description: "Redução ou perda completa do olfato (anosmia/hiposmia). Frequentemente precede os sintomas motores em vários anos.", frequency: "70-90%" },
    { name: "Perturbações do sono", description: "Insónia, sonolência diurna, síndrome das pernas inquietas e distúrbio comportamental do sono REM.", frequency: "60-80%" },
    { name: "Depressão e ansiedade", description: "Podem ser sintomas da própria doença (não apenas reação ao diagnóstico) devido a alterações nos neurotransmissores.", frequency: "40-50%" },
    { name: "Obstipação", description: "Trânsito intestinal lento, frequentemente presente anos antes do diagnóstico. Relacionado com a patologia no sistema nervoso entérico.", frequency: "50-80%" },
    { name: "Fadiga", description: "Cansaço persistente não proporcional ao esforço. Um dos sintomas mais incapacitantes e subvalorizados.", frequency: "50-70%" },
    { name: "Alterações cognitivas", description: "Dificuldades de concentração, planeamento e memória de trabalho. Podem evoluir para demência em fases avançadas.", frequency: "20-40%" },
  ],
};

// ========== PRÉ-DIAGNÓSTICO (QUESTIONÁRIO) ==========

export interface PreDiagnosticQuestion {
  id: number;
  question: string;
  category: "motor" | "nonMotor" | "daily";
  weight: number;
}

export const preDiagnosticQuestions: PreDiagnosticQuestion[] = [
  { id: 1, question: "Notou tremor nas mãos, dedos ou queixo em repouso?", category: "motor", weight: 3 },
  { id: 2, question: "Sente que os seus movimentos estão mais lentos do que o habitual?", category: "motor", weight: 3 },
  { id: 3, question: "Tem dificuldade em levantar-se de uma cadeira ou da cama?", category: "motor", weight: 2 },
  { id: 4, question: "A sua letra ficou mais pequena e difícil de ler nos últimos meses?", category: "motor", weight: 2 },
  { id: 5, question: "Perdeu ou reduziu significativamente o sentido do olfato?", category: "nonMotor", weight: 3 },
  { id: 6, question: "Tem tido problemas de obstipação persistente sem outra causa aparente?", category: "nonMotor", weight: 2 },
  { id: 7, question: "O seu companheiro(a) refere que se agita, grita ou mexe muito durante o sono?", category: "nonMotor", weight: 3 },
  { id: 8, question: "Sente-se deprimido(a) ou ansioso(a) sem motivo aparente?", category: "nonMotor", weight: 1 },
  { id: 9, question: "A sua voz ficou mais baixa ou monocórdica?", category: "motor", weight: 2 },
  { id: 10, question: "Tem tido tonturas ou sensação de desmaio ao levantar-se?", category: "nonMotor", weight: 1 },
  { id: 11, question: "Nota rigidez nos braços, pernas ou pescoço que não melhora com o movimento?", category: "motor", weight: 3 },
  { id: 12, question: "Tem dificuldade em abotoar botões, usar talheres ou realizar tarefas motoras finas?", category: "daily", weight: 2 },
  { id: 13, question: "Sente que arrasta os pés ao caminhar ou dá passos mais curtos?", category: "motor", weight: 2 },
  { id: 14, question: "Tem dificuldade em manter o equilíbrio ou já sofreu quedas inexplicáveis?", category: "motor", weight: 2 },
  { id: 15, question: "Sente uma fadiga constante que não melhora com o descanso?", category: "nonMotor", weight: 1 },
];

export const preDiagnosticResults = {
  low: {
    title: "Risco Baixo",
    description: "Com base nas suas respostas, os indicadores sugerem um risco baixo. No entanto, se os sintomas persistirem ou se agravarem, consulte o seu médico para uma avaliação completa.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  moderate: {
    title: "Risco Moderado",
    description: "Algumas das suas respostas são compatíveis com possíveis sinais iniciais. Recomendamos que consulte o seu médico de família ou neurologista para uma avaliação clínica mais detalhada.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  high: {
    title: "Risco Elevado — Consulte um Especialista",
    description: "Vários dos seus sintomas são compatíveis com sinais típicos da doença de Parkinson. É fortemente recomendado que procure avaliação por um neurologista o mais brevemente possível.",
    color: "text-destructive",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
};

// ========== SOLUÇÕES E ALTERNATIVAS ==========

export interface SolutionCategory {
  title: string;
  description: string;
  icon: string;
  solutions: {
    name: string;
    description: string;
    benefits: string[];
    evidence: string;
  }[];
}

export const solutionCategories: SolutionCategory[] = [
  {
    title: "Competências Cognitivas",
    description: "Estratégias para manter e estimular a função cerebral, memória e capacidade de raciocínio.",
    icon: "🧠",
    solutions: [
      {
        name: "Jogos cognitivos e puzzles",
        description: "Palavras cruzadas, sudoku, jogos de memória, apps de treino cerebral (Lumosity, Peak). Estimulam diferentes áreas cerebrais e promovem a neuroplasticidade.",
        benefits: ["Melhora a memória de trabalho", "Estimula a atenção e concentração", "Promove a flexibilidade mental"],
        evidence: "Evidência moderada — estudos mostram benefício na manutenção cognitiva quando praticados regularmente.",
      },
      {
        name: "Aprendizagem de novas competências",
        description: "Aprender um instrumento musical, um novo idioma, pintura ou fotografia. A novidade e o desafio são fundamentais para a neuroplasticidade.",
        benefits: ["Cria novas conexões neuronais", "Aumenta a reserva cognitiva", "Proporciona satisfação e propósito"],
        evidence: "Evidência forte — meta-análises confirmam que a aprendizagem contínua reduz o declínio cognitivo.",
      },
      {
        name: "Leitura ativa e escrita",
        description: "Ler livros, participar em clubes de leitura, escrever um diário ou memórias. A leitura ativa (com reflexão) é mais benéfica que a passiva.",
        benefits: ["Mantém competências linguísticas", "Estimula a imaginação e memória", "Combate o isolamento social"],
        evidence: "Evidência moderada a forte — associada a menor risco de demência em vários estudos longitudinais.",
      },
      {
        name: "Terapia ocupacional cognitiva",
        description: "Sessões com terapeuta ocupacional focadas em estratégias compensatórias para dificuldades do dia a dia: organização, planeamento, gestão de tarefas.",
        benefits: ["Estratégias personalizadas", "Melhora a autonomia", "Adaptação do ambiente doméstico"],
        evidence: "Evidência forte — recomendada pelas guidelines europeias de Parkinson.",
      },
    ],
  },
  {
    title: "Competências Físicas",
    description: "Exercício e atividade física adaptada para manter mobilidade, força e equilíbrio.",
    icon: "💪",
    solutions: [
      {
        name: "Dança (especialmente Tango e Dança de Salão)",
        description: "A dança combina exercício aeróbico, equilíbrio, coordenação, ritmo e interação social. O Tango Argentino tem mostrado resultados particularmente promissores.",
        benefits: ["Melhora o equilíbrio e a marcha", "Reduz o freezing", "Benefícios sociais e emocionais"],
        evidence: "Evidência forte — múltiplos ensaios clínicos randomizados demonstram benefícios superiores ao exercício convencional.",
      },
      {
        name: "Tai Chi e Qi Gong",
        description: "Movimentos lentos, controlados e fluidos que melhoram o equilíbrio, a flexibilidade e a consciência corporal. Prática segura e acessível.",
        benefits: ["Reduz o risco de quedas", "Melhora a estabilidade postural", "Promove o relaxamento e reduz o stress"],
        evidence: "Evidência forte — recomendado pela Movement Disorder Society para melhoria do equilíbrio.",
      },
      {
        name: "Exercício aeróbico intenso",
        description: "Ciclismo, caminhada rápida, natação ou passadeira. O exercício intenso (60-80% frequência cardíaca máxima) tem mostrado efeitos neuroprotetores.",
        benefits: ["Potencial efeito neuroprotetor", "Melhora a capacidade cardiorrespiratória", "Reduz a fadiga e melhora o humor"],
        evidence: "Evidência forte — o estudo SPARX demonstrou que o exercício intenso pode retardar a progressão dos sintomas.",
      },
      {
        name: "Fisioterapia especializada (LSVT BIG)",
        description: "Programa de fisioterapia intensiva que treina movimentos amplos e exagerados para contrariar a tendência de redução de amplitude do Parkinson.",
        benefits: ["Melhora a amplitude dos movimentos", "Treina a velocidade e coordenação", "Resultados duradouros com prática"],
        evidence: "Evidência forte — programa validado cientificamente e recomendado por especialistas.",
      },
      {
        name: "Boxe sem contacto (Rock Steady Boxing)",
        description: "Treino inspirado no boxe, sem contacto, que trabalha agilidade, força, velocidade, coordenação e equilíbrio de forma motivante e social.",
        benefits: ["Treino intenso e motivante", "Melhora reflexos e coordenação", "Forte componente social e comunitária"],
        evidence: "Evidência moderada — crescente número de estudos mostra benefícios na mobilidade e qualidade de vida.",
      },
    ],
  },
  {
    title: "Saúde Mental e Emocional",
    description: "Abordagens para gerir o impacto psicológico da doença e promover o bem-estar emocional.",
    icon: "💚",
    solutions: [
      {
        name: "Mindfulness e meditação",
        description: "Prática regular de atenção plena (mindfulness-based stress reduction — MBSR). 10-20 minutos diários podem ter impacto significativo na ansiedade e qualidade de vida.",
        benefits: ["Reduz ansiedade e stress", "Melhora a qualidade do sono", "Aumenta a consciência corporal"],
        evidence: "Evidência moderada a forte — estudos específicos em Parkinson mostram melhoria na qualidade de vida.",
      },
      {
        name: "Terapia cognitivo-comportamental (TCC)",
        description: "Acompanhamento psicológico focado em identificar e modificar padrões de pensamento negativos. Particularmente eficaz na depressão e ansiedade associadas ao Parkinson.",
        benefits: ["Tratamento eficaz da depressão", "Estratégias de coping", "Melhoria da autoestima"],
        evidence: "Evidência forte — recomendada pelas guidelines internacionais como tratamento de primeira linha para a depressão no Parkinson.",
      },
      {
        name: "Grupos de apoio e pares",
        description: "Participação em grupos de doentes e cuidadores (presenciais ou online). Partilhar experiências reduz o isolamento e fornece informação prática.",
        benefits: ["Combate o isolamento", "Troca de experiências práticas", "Suporte emocional mútuo"],
        evidence: "Evidência moderada — estudos mostram melhoria no bem-estar e adesão ao tratamento.",
      },
      {
        name: "Musicoterapia",
        description: "Sessões com musicoterapeuta ou prática musical ativa (cantar, tocar instrumentos). A música ativa múltiplas áreas cerebrais simultaneamente.",
        benefits: ["Melhora o humor e a motivação", "Pode melhorar a fluência da fala", "Estimula a memória e emoções"],
        evidence: "Evidência moderada — benefícios documentados na fala, marcha e bem-estar emocional.",
      },
      {
        name: "Arteterapia e expressão criativa",
        description: "Pintura, escultura, escrita criativa, teatro. A expressão artística proporciona um canal para processar emoções e manter a identidade pessoal.",
        benefits: ["Canal de expressão emocional", "Mantém a motricidade fina", "Promove o sentido de propósito"],
        evidence: "Evidência emergente — estudos qualitativos mostram impacto positivo significativo no bem-estar.",
      },
    ],
  },
  {
    title: "Terapias Complementares",
    description: "Abordagens integrativas que podem complementar o tratamento convencional.",
    icon: "🌿",
    solutions: [
      {
        name: "Terapia da fala (LSVT LOUD)",
        description: "Programa intensivo de terapia da fala que treina o volume e a clareza vocal. Desenvolvido especificamente para o Parkinson.",
        benefits: ["Aumenta o volume da voz", "Melhora a articulação e a deglutição", "Resultados duradouros"],
        evidence: "Evidência forte — programa validado com décadas de investigação. Padrão de referência para a hipofonia no Parkinson.",
      },
      {
        name: "Hidroterapia",
        description: "Exercícios na água aquecida (32-34°C). A flutuabilidade reduz o impacto nas articulações enquanto a resistência da água fortalece os músculos.",
        benefits: ["Exercício de baixo impacto", "Melhora a mobilidade e o equilíbrio", "Efeito relaxante e analgésico"],
        evidence: "Evidência moderada — estudos mostram benefícios na mobilidade, equilíbrio e dor.",
      },
      {
        name: "Acupuntura",
        description: "Pode ajudar no controlo da dor, na insónia e na obstipação. Deve ser praticada por profissional qualificado e como complemento ao tratamento médico.",
        benefits: ["Pode aliviar a dor", "Pode melhorar o sono", "Geralmente segura como complemento"],
        evidence: "Evidência limitada mas promissora — alguns ensaios clínicos mostram benefícios em sintomas específicos.",
      },
      {
        name: "Yoga adaptado",
        description: "Yoga modificado para as capacidades do doente. Combina posturas, respiração e meditação. Existem programas específicos para Parkinson.",
        benefits: ["Melhora a flexibilidade e o equilíbrio", "Reduz o stress e a ansiedade", "Promove a consciência corporal"],
        evidence: "Evidência moderada — estudos mostram benefícios no equilíbrio, flexibilidade e qualidade de vida.",
      },
    ],
  },
];
