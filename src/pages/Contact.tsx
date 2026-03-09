import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { sendEmail } from "@/lib/api/email";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail({
        ...formData,
        type: 'contact',
      });

      if (result.success) {
        toast.success("Mensagem enviada com sucesso! Responderemos em breve.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.error || "Erro ao enviar mensagem. Tente novamente.");
      }
    } catch {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Fale Connosco
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Tem uma questão, sugestão ou quer partilhar a sua história? Adoraríamos ouvir de si.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-card p-8">
            <h2 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up stagger-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="o.seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Sobre o que deseja falar?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Escreva aqui a sua mensagem..."
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6"
              >
                {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          <div className="mt-8 rounded-2xl bg-muted p-8">
            <h3 className="text-xl font-bold mb-4">Perguntas Frequentes</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-1">Posso partilhar a minha história?</h4>
                <p className="text-muted-foreground">
                  Sim! Encorajamos partilhas de experiências. Use o formulário acima para nos enviar a sua história.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Sou profissional de saúde. Posso contribuir?</h4>
                <p className="text-muted-foreground">
                  Com certeza. Valorizamos contribuições de neurologistas, fisioterapeutas e outros profissionais.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Onde encontro apoio presencial?</h4>
                <p className="text-muted-foreground">
                  A APDPk tem núcleos em várias cidades. Visite <a href="https://www.apparkinson.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">apparkinson.org</a> para encontrar o mais perto de si.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
