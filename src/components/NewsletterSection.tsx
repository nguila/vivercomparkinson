import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    const mailtoLink = `mailto:jonenguila@gmail.com?subject=${encodeURIComponent(
      "[Viver com Parkinson] Nova Subscrição Newsletter"
    )}&body=${encodeURIComponent(
      `Novo pedido de subscrição da newsletter.\n\nEmail: ${email}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      toast.success("Obrigado! O seu cliente de email foi aberto para confirmar a subscrição.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Fique informado.</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Subscreva para receber as nossas últimas histórias, dicas e recursos diretamente no seu email.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="O seu email"
            required
            className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all disabled:opacity-50"
          >
            {isSubmitting ? "A enviar..." : "Subscrever"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
