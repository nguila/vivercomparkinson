import { useState } from "react";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  parkinsonHistory,
  parkinsonCauses,
  parkinsonStages,
  commonSymptoms,
  managementStrategies,
  reliableSources,
  treatments,
  medicationCare,
  diagnosticFacts,
  frequentSymptomsSummary,
  preDiagnosticQuestions,
  preDiagnosticResults,
  solutionCategories,
} from "@/data/parkinson-stages";
import { ExternalLink, BookOpen, Brain, Activity, Heart, Shield, Clock, AlertCircle, Pill, Zap, UtensilsCrossed, Timer, Apple, Ban, BellRing, TrendingDown, Lightbulb, GlassWater, Fish, Wheat, Leaf, Bean, AlarmClock, NotebookPen, Sunrise, Tablets, Grape, Milk, FlaskConical, Wine, Candy, CircleAlert, RotateCcw, Siren, ThermometerSun, Stethoscope, Plane, Users, Package, Fingerprint, ClipboardCheck, Sparkles, CheckCircle2, XCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const DoencaParkinson = () => {
  const [activeTab, setActiveTab] = useState("fases");
  const [selectedAnswers, setSelectedAnswers] = useState<Set<number>>(new Set());
  const [showResult, setShowResult] = useState(false);

  const toggleAnswer = (id: number) => {
    const next = new Set(selectedAnswers);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedAnswers(next);
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    preDiagnosticQuestions.forEach((q) => {
      if (selectedAnswers.has(q.id)) score += q.weight;
    });
    return score;
  };

  const getResult = () => {
    const score = calculateScore();
    const maxScore = preDiagnosticQuestions.reduce((a, q) => a + q.weight, 0);
    const pct = (score / maxScore) * 100;
    if (pct < 25) return { ...preDiagnosticResults.low, pct };
    if (pct < 55) return { ...preDiagnosticResults.moderate, pct };
    return { ...preDiagnosticResults.high, pct };
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1.5">
            <Brain className="w-4 h-4 mr-1.5" />
            Guia Completo
          </Badge>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6">
            Compreender a Doença de{" "}
            <span className="text-primary">Parkinson</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Informação detalhada sobre as fases da doença, possíveis causas,
            sintomas, evolução e estratégias de gestão — baseada em fontes
            científicas e clínicas atualizadas.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/50 p-1.5 rounded-2xl mb-10">
            <TabsTrigger value="fases" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Clock className="w-4 h-4 mr-1.5" />
              Fases
            </TabsTrigger>
            <TabsTrigger value="causas" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <AlertCircle className="w-4 h-4 mr-1.5" />
              Causas
            </TabsTrigger>
            <TabsTrigger value="historia" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BookOpen className="w-4 h-4 mr-1.5" />
              História
            </TabsTrigger>
            <TabsTrigger value="sintomas" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Activity className="w-4 h-4 mr-1.5" />
              Sintomas
            </TabsTrigger>
            <TabsTrigger value="gestao" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Heart className="w-4 h-4 mr-1.5" />
              Gestão
            </TabsTrigger>
            <TabsTrigger value="tratamentos" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Pill className="w-4 h-4 mr-1.5" />
              Tratamentos
            </TabsTrigger>
            <TabsTrigger value="medicacao" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <UtensilsCrossed className="w-4 h-4 mr-1.5" />
              Medicação
            </TabsTrigger>
            <TabsTrigger value="diagnostico" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Fingerprint className="w-4 h-4 mr-1.5" />
              Diagnóstico
            </TabsTrigger>
            <TabsTrigger value="pre-diagnostico" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <ClipboardCheck className="w-4 h-4 mr-1.5" />
              Pré-Diagnóstico
            </TabsTrigger>
            <TabsTrigger value="solucoes" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Sparkles className="w-4 h-4 mr-1.5" />
              Soluções
            </TabsTrigger>
            <TabsTrigger value="fontes" className="flex-1 min-w-[120px] rounded-xl py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Shield className="w-4 h-4 mr-1.5" />
              Fontes
            </TabsTrigger>
          </TabsList>

          {/* FASES */}
          <TabsContent value="fases" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">As 5 Fases da Doença de Parkinson</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Classificação segundo a escala de Hoehn & Yahr, a referência internacional para estadiamento da doença.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block" />
              
              {parkinsonStages.map((stage, index) => (
                <div key={stage.stage} className="relative sm:pl-20 mb-8">
                  {/* Stage number circle */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-16 h-16 bg-primary text-primary-foreground rounded-2xl items-center justify-center text-2xl font-bold font-serif shadow-lg">
                    {stage.stage}
                  </div>

                  <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="sm:hidden w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {stage.stage}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif">{stage.title}</h3>
                        <p className="text-primary font-medium text-sm mt-1">{stage.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-5 leading-relaxed">{stage.description}</p>
                    
                    <Badge variant="outline" className="mb-5 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {stage.duration}
                    </Badge>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-destructive mb-3 flex items-center gap-1.5">
                          <Activity className="w-4 h-4" />
                          Sintomas Típicos
                        </h4>
                        <ul className="space-y-2">
                          {stage.symptoms.map((symptom, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="w-1.5 h-1.5 bg-destructive/60 rounded-full mt-1.5 flex-shrink-0" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3 flex items-center gap-1.5">
                          <Heart className="w-4 h-4" />
                          Estratégias de Gestão
                        </h4>
                        <ul className="space-y-2">
                          {stage.management.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* CAUSAS */}
          <TabsContent value="causas" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">Possíveis Causas e Fatores de Risco</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A causa exata do Parkinson ainda não é totalmente conhecida, mas a investigação identificou vários fatores contributivos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {parkinsonCauses.map((cause, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <span className="text-4xl mb-4 block">{cause.icon}</span>
                  <h3 className="text-lg font-bold font-serif mb-2">{cause.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cause.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* HISTÓRIA */}
          <TabsContent value="historia" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">História da Doença de Parkinson</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                De 1817 até hoje — a evolução do conhecimento sobre esta condição neurológica.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { title: "A Descoberta (1817)", content: parkinsonHistory.discovery, year: "1817", icon: "📜" },
                { title: "O Nome", content: parkinsonHistory.naming, year: "1872", icon: "✍️" },
                { title: "A Revolução da Dopamina", content: parkinsonHistory.evolution, year: "1960", icon: "🔬" },
                { title: "Situação Atual", content: parkinsonHistory.current, year: "Hoje", icon: "🌍" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 sm:gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    {index < 3 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <div className="bg-card rounded-2xl border border-border p-6 flex-1 mb-2">
                    <Badge variant="outline" className="mb-2 text-xs">{item.year}</Badge>
                    <h3 className="text-lg font-bold font-serif mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* SINTOMAS */}
          <TabsContent value="sintomas" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">Sintomas Mais Frequentes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                O Parkinson manifesta-se através de sintomas motores e não-motores. A prevalência varia entre doentes.
              </p>
            </div>

            <div className="space-y-10">
              {/* Motor Symptoms */}
              <div>
                <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Sintomas Motores
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {commonSymptoms.motor.map((symptom, index) => (
                    <div key={index} className="bg-card rounded-2xl border border-border p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-bold text-sm">{symptom.name}</h4>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">
                          {symptom.prevalence}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{symptom.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-Motor Symptoms */}
              <div>
                <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Sintomas Não-Motores
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {commonSymptoms.nonMotor.map((symptom, index) => (
                    <div key={index} className="bg-card rounded-2xl border border-border p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-bold text-sm">{symptom.name}</h4>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">
                          {symptom.prevalence}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{symptom.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* GESTÃO */}
          <TabsContent value="gestao" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">Como Atenuar os Sintomas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estratégias baseadas em evidência científica para melhorar a qualidade de vida com Parkinson.
              </p>
            </div>

            <Accordion type="multiple" className="space-y-3">
              {managementStrategies.map((group, index) => (
                <AccordionItem
                  key={index}
                  value={`strategy-${index}`}
                  className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-lg font-bold font-serif hover:no-underline py-5">
                    {group.category}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="space-y-3">
                      {group.strategies.map((strategy, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* TRATAMENTOS */}
          <TabsContent value="tratamentos" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">Tratamentos Medicamentosos e Cirúrgicos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Informação detalhada sobre os principais tratamentos disponíveis — desde medicamentos dopaminérgicos até intervenções cirúrgicas e terapias emergentes.
              </p>
            </div>

            {(["dopaminergic", "non-dopaminergic", "surgical", "emerging"] as const).map((cat) => {
              const catTreatments = treatments.filter((t) => t.category === cat);
              if (catTreatments.length === 0) return null;
              const catLabels = {
                dopaminergic: { label: "Terapias Dopaminérgicas", icon: <Brain className="w-5 h-5 text-primary" />, desc: "Medicamentos que aumentam ou imitam a dopamina no cérebro." },
                "non-dopaminergic": { label: "Terapias Não-Dopaminérgicas", icon: <Pill className="w-5 h-5 text-primary" />, desc: "Medicamentos com mecanismos alternativos." },
                surgical: { label: "Intervenções Cirúrgicas e Dispositivos", icon: <Zap className="w-5 h-5 text-primary" />, desc: "Procedimentos para doença avançada." },
                emerging: { label: "Terapias Emergentes e em Investigação", icon: <Activity className="w-5 h-5 text-primary" />, desc: "Abordagens inovadoras em desenvolvimento." },
              };
              const info = catLabels[cat];
              return (
                <div key={cat} className="mb-10">
                  <div className="flex items-center gap-2 mb-1">
                    {info.icon}
                    <h3 className="text-xl font-bold font-serif">{info.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 ml-7">{info.desc}</p>

                  <Accordion type="multiple" className="space-y-3">
                    {catTreatments.map((treatment, index) => (
                      <AccordionItem
                        key={index}
                        value={`treatment-${cat}-${index}`}
                        className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                      >
                        <AccordionTrigger className="text-base font-bold font-serif hover:no-underline py-5">
                          {treatment.name}
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 space-y-5">
                          <p className="text-sm text-muted-foreground leading-relaxed">{treatment.description}</p>

                          <div className="bg-muted/50 rounded-xl p-4">
                            <h5 className="font-semibold text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
                              <Brain className="w-3.5 h-3.5 text-primary" />
                              Mecanismo de Ação
                            </h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">{treatment.mechanism}</p>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                              <h5 className="font-semibold text-xs uppercase tracking-wide text-primary mb-3 flex items-center gap-1.5">
                                <Heart className="w-3.5 h-3.5" />
                                Indicações
                              </h5>
                              <ul className="space-y-2">
                                {treatment.indications.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-xs uppercase tracking-wide text-destructive mb-3 flex items-center gap-1.5">
                                <AlertCircle className="w-3.5 h-3.5" />
                                Efeitos Secundários
                              </h5>
                              <ul className="space-y-2">
                                {treatment.sideEffects.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 bg-destructive/60 rounded-full mt-1.5 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                            <h5 className="font-semibold text-xs uppercase tracking-wide mb-2">📝 Notas Importantes</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">{treatment.notes}</p>
                          </div>

                          <a
                            href={treatment.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Ver fonte e mais informação
                          </a>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}

            <div className="bg-muted/50 rounded-2xl border border-border p-6 mt-6">
              <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                <strong>⚕️ Aviso:</strong> A escolha do tratamento deve ser sempre individualizada e decidida em conjunto com o neurologista. Nunca altere a medicação sem orientação médica.
              </p>
            </div>
          </TabsContent>


          {/* MEDICAÇÃO - Cuidados na Toma */}
          <TabsContent value="medicacao" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">Cuidados na Toma da Medicação</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Orientações práticas sobre horários, alimentação e fatores que influenciam a eficácia dos medicamentos para o Parkinson.
              </p>
            </div>

            <div className="space-y-6">
              {medicationCare.map((section, sectionIndex) => {
                const sectionIcons: Record<number, React.ReactNode> = {
                  0: <Timer className="w-6 h-6 text-primary" />,
                  1: <Apple className="w-6 h-6 text-green-600" />,
                  2: <Ban className="w-6 h-6 text-destructive" />,
                  3: <BellRing className="w-6 h-6 text-amber-500" />,
                  4: <TrendingDown className="w-6 h-6 text-destructive" />,
                  5: <Lightbulb className="w-6 h-6 text-primary" />,
                };

                const itemIcons: Record<string, React.ReactNode> = {
                  // Horários
                  "med-0-0": <AlarmClock className="w-4 h-4 text-primary flex-shrink-0" />,
                  "med-0-1": <UtensilsCrossed className="w-4 h-4 text-primary flex-shrink-0" />,
                  "med-0-2": <Tablets className="w-4 h-4 text-primary flex-shrink-0" />,
                  "med-0-3": <Sunrise className="w-4 h-4 text-primary flex-shrink-0" />,
                  "med-0-4": <NotebookPen className="w-4 h-4 text-primary flex-shrink-0" />,
                  // Aconselhados
                  "med-1-0": <Grape className="w-4 h-4 text-green-600 flex-shrink-0" />,
                  "med-1-1": <Wheat className="w-4 h-4 text-green-600 flex-shrink-0" />,
                  "med-1-2": <Fish className="w-4 h-4 text-green-600 flex-shrink-0" />,
                  "med-1-3": <Leaf className="w-4 h-4 text-green-600 flex-shrink-0" />,
                  "med-1-4": <GlassWater className="w-4 h-4 text-green-600 flex-shrink-0" />,
                  "med-1-5": <Bean className="w-4 h-4 text-green-600 flex-shrink-0" />,
                  // Desaconselhados
                  "med-2-0": <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-2-1": <Milk className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-2-2": <FlaskConical className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-2-3": <Pill className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-2-4": <Wine className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-2-5": <Candy className="w-4 h-4 text-destructive flex-shrink-0" />,
                  // Esquecimento
                  "med-3-0": <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />,
                  "med-3-1": <CircleAlert className="w-4 h-4 text-amber-500 flex-shrink-0" />,
                  "med-3-2": <RotateCcw className="w-4 h-4 text-amber-500 flex-shrink-0" />,
                  "med-3-3": <Activity className="w-4 h-4 text-amber-500 flex-shrink-0" />,
                  "med-3-4": <Siren className="w-4 h-4 text-amber-500 flex-shrink-0" />,
                  // Fatores
                  "med-4-0": <UtensilsCrossed className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-4-1": <Activity className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-4-2": <Pill className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-4-3": <Brain className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-4-4": <ThermometerSun className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-4-5": <GlassWater className="w-4 h-4 text-destructive flex-shrink-0" />,
                  "med-4-6": <FlaskConical className="w-4 h-4 text-destructive flex-shrink-0" />,
                  // Dicas
                  "med-5-0": <Package className="w-4 h-4 text-primary flex-shrink-0" />,
                  "med-5-1": <Plane className="w-4 h-4 text-primary flex-shrink-0" />,
                  "med-5-2": <ThermometerSun className="w-4 h-4 text-primary flex-shrink-0" />,
                  "med-5-3": <Stethoscope className="w-4 h-4 text-primary flex-shrink-0" />,
                  "med-5-4": <Users className="w-4 h-4 text-primary flex-shrink-0" />,
                };

                return (
                  <div key={sectionIndex}>
                    <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                      {sectionIcons[sectionIndex]}
                      {section.title}
                    </h3>
                    <Accordion type="multiple" className="space-y-3">
                      {section.items.map((item, itemIndex) => {
                        const iconKey = `med-${sectionIndex}-${itemIndex}`;
                        return (
                          <AccordionItem
                            key={itemIndex}
                            value={iconKey}
                            className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                          >
                            <AccordionTrigger className="text-base font-bold font-serif hover:no-underline py-5">
                              <span className="flex items-center gap-2.5">
                                {itemIcons[iconKey]}
                                {item.label}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="pb-5">
                              <p className="text-sm text-muted-foreground leading-relaxed ml-6">{item.description}</p>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </div>
                );
              })}
            </div>

            <div className="bg-muted/50 rounded-2xl border border-border p-6 mt-8">
              <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                <strong>⚕️ Aviso:</strong> Estas orientações são gerais e educativas. Cada doente é único — consulte sempre o seu neurologista antes de alterar horários, doses ou hábitos alimentares relacionados com a medicação.
              </p>
            </div>
          </TabsContent>

          {/* DIAGNÓSTICO */}
          <TabsContent value="diagnostico" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">Diagnóstico Individual</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                O diagnóstico da doença de Parkinson é complexo e difere de pessoa para pessoa. Nem todos os doentes apresentam os mesmos sintomas.
              </p>
            </div>

            <div className="bg-accent/30 rounded-2xl border border-border p-6 mb-8">
              <div className="flex items-start gap-3">
                <Fingerprint className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold font-serif text-lg mb-2">Cada caso é único</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A doença de Parkinson manifesta-se de forma diferente em cada pessoa. A combinação de sintomas, a ordem em que surgem, 
                    a velocidade de progressão e a resposta ao tratamento são altamente individuais. Por isso, dois doentes com o mesmo 
                    diagnóstico podem ter experiências completamente distintas. É fundamental não comparar a sua situação com a de outros doentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {diagnosticFacts.map((fact, index) => (
                <div key={index} className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <span className="text-4xl mb-4 block">{fact.icon}</span>
                  <h3 className="text-lg font-bold font-serif mb-2">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold font-serif mb-6 text-center">Sintomas Mais Frequentes — Resumo</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Sintomas Motores
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {frequentSymptomsSummary.motor.map((s, i) => (
                    <div key={i} className="bg-card rounded-2xl border border-border p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h5 className="font-bold text-sm">{s.name}</h5>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">{s.frequency}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Sintomas Não-Motores
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {frequentSymptomsSummary.nonMotor.map((s, i) => (
                    <div key={i} className="bg-card rounded-2xl border border-border p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h5 className="font-bold text-sm">{s.name}</h5>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">{s.frequency}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl border border-border p-6 mt-8">
              <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                <strong>⚕️ Importante:</strong> A presença de um ou mais destes sintomas não significa necessariamente que tem Parkinson. 
                Muitos destes sintomas podem ter outras causas. Apenas um neurologista pode fazer um diagnóstico correto após avaliação clínica completa.
              </p>
            </div>
          </TabsContent>

          {/* PRÉ-DIAGNÓSTICO */}
          <TabsContent value="pre-diagnostico" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">Questionário Pré-Diagnóstico</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Este questionário <strong>não substitui</strong> uma consulta médica. É apenas uma ferramenta de rastreio para ajudar a identificar sinais que justifiquem uma avaliação neurológica.
              </p>
            </div>

            <div className="bg-accent/30 rounded-2xl border border-border p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Aviso:</strong> Este teste não é um instrumento clínico validado. Serve apenas como orientação para decidir se deve procurar 
                  avaliação médica. Muitos destes sintomas podem ter outras causas não relacionadas com o Parkinson.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4 mb-8">
                {preDiagnosticQuestions.map((q) => {
                  const categoryLabels = { motor: "Motor", nonMotor: "Não-Motor", daily: "Dia a Dia" };
                  const categoryColors = { motor: "bg-primary/10 text-primary", nonMotor: "bg-accent text-accent-foreground", daily: "bg-muted text-muted-foreground" };
                  return (
                    <div
                      key={q.id}
                      className={`bg-card rounded-2xl border border-border p-5 hover:shadow-md transition-all cursor-pointer ${selectedAnswers.has(q.id) ? "border-primary shadow-md" : ""}`}
                      onClick={() => toggleAnswer(q.id)}
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={selectedAnswers.has(q.id)}
                          onCheckedChange={() => toggleAnswer(q.id)}
                          className="mt-0.5"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium leading-relaxed">{q.question}</p>
                          <Badge variant="outline" className={`mt-2 text-xs ${categoryColors[q.category]}`}>
                            {categoryLabels[q.category]}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button onClick={() => setShowResult(true)} size="lg" className="rounded-xl">
                  <ClipboardCheck className="w-5 h-5 mr-2" />
                  Ver Resultado
                </Button>
                <Button variant="outline" onClick={() => { setSelectedAnswers(new Set()); setShowResult(false); }} size="lg" className="rounded-xl">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Recomeçar
                </Button>
              </div>

              {showResult && (() => {
                const result = getResult();
                return (
                  <div className={`rounded-2xl border-2 p-8 ${result.bgColor} ${result.borderColor}`}>
                    <div className="text-center mb-4">
                      <h3 className={`text-2xl font-bold font-serif ${result.color}`}>{result.title}</h3>
                    </div>
                    <Progress value={result.pct} className="h-3 rounded-full mb-4" />
                    <p className="text-sm text-center leading-relaxed mb-4">{result.description}</p>
                    <p className="text-xs text-center text-muted-foreground">
                      Selecionou {selectedAnswers.size} de {preDiagnosticQuestions.length} sintomas ({Math.round(result.pct)}% de indicadores positivos)
                    </p>
                  </div>
                );
              })()}
            </div>

            <div className="bg-muted/50 rounded-2xl border border-border p-6 mt-8">
              <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                <strong>⚕️ Lembre-se:</strong> Este questionário é meramente indicativo. Um diagnóstico correto requer avaliação clínica 
                presencial por um neurologista, incluindo exame neurológico, história clínica detalhada e, possivelmente, exames complementares.
              </p>
            </div>
          </TabsContent>

          {/* SOLUÇÕES */}
          <TabsContent value="solucoes" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">Soluções e Alternativas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estratégias baseadas em evidência para melhorar competências cognitivas, físicas e mentais, 
                atenuando o impacto da progressão da doença.
              </p>
            </div>

            {solutionCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold font-serif">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <Accordion type="multiple" className="space-y-3 mt-4">
                  {category.solutions.map((solution, solIndex) => (
                    <AccordionItem
                      key={solIndex}
                      value={`sol-${catIndex}-${solIndex}`}
                      className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-base font-bold font-serif hover:no-underline py-5">
                        <span className="flex items-center gap-2.5">
                          <Star className="w-4 h-4 text-primary flex-shrink-0" />
                          {solution.name}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                        
                        <div>
                          <h5 className="font-semibold text-xs uppercase tracking-wide text-primary mb-3 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Benefícios
                          </h5>
                          <ul className="space-y-2">
                            {solution.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 flex-shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                          <h5 className="font-semibold text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-primary" />
                            Evidência Científica
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{solution.evidence}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="bg-muted/50 rounded-2xl border border-border p-6 mt-6">
              <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                <strong>💡 Nota:</strong> Estas soluções são complementares ao tratamento médico e não o substituem. 
                Consulte sempre a sua equipa médica antes de iniciar qualquer nova atividade ou terapia.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="fontes" className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">Fontes Fidedignas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Organizações, centros de investigação e fontes clínicas de referência para informação atualizada sobre Parkinson.
              </p>
            </div>

            {["organization", "research", "clinical"].map((type) => (
              <div key={type} className="mb-8">
                <h3 className="text-lg font-bold font-serif mb-4 flex items-center gap-2">
                  {type === "organization" && <Heart className="w-5 h-5 text-primary" />}
                  {type === "research" && <BookOpen className="w-5 h-5 text-primary" />}
                  {type === "clinical" && <Shield className="w-5 h-5 text-primary" />}
                  {type === "organization" && "Organizações de Apoio"}
                  {type === "research" && "Investigação e Ciência"}
                  {type === "clinical" && "Fontes Clínicas"}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {reliableSources
                    .filter((s) => s.type === type)
                    .map((source, index) => (
                      <a
                        key={index}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-card rounded-2xl border border-border p-5 hover:shadow-lg hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-bold text-sm group-hover:text-primary transition-colors">
                            {source.title}
                          </h4>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{source.description}</p>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* Disclaimer */}
        <div className="mt-16 bg-muted/50 rounded-2xl border border-border p-6 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <strong>Nota importante:</strong> Esta informação é educativa e não substitui o aconselhamento médico profissional.
            Consulte sempre o seu neurologista ou médico assistente para decisões sobre diagnóstico e tratamento.
            Última atualização das fontes: Março 2026.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 Viver com Parkinson. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default DoencaParkinson;
