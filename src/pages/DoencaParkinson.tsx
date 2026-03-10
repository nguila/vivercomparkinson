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
} from "@/data/parkinson-stages";
import { ExternalLink, BookOpen, Brain, Activity, Heart, Shield, Clock, AlertCircle } from "lucide-react";

const DoencaParkinson = () => {
  const [activeTab, setActiveTab] = useState("fases");

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

          {/* FONTES */}
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
