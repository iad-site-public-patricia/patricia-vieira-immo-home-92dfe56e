import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CheckCircle, ClipboardList, Eye, Home, Handshake, FileSignature } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Estimation du bien", desc: "Une analyse complète pour déterminer la juste valeur de votre propriété." },
  { icon: Eye, title: "Mise en valeur et stratégie", desc: "Photos professionnelles, annonces ciblées et plan de commercialisation adapté." },
  { icon: Home, title: "Organisation des visites", desc: "Des visites qualifiées avec des acquéreurs sérieux et motivés." },
  { icon: Handshake, title: "Négociation", desc: "Je défends vos intérêts pour obtenir le meilleur prix." },
  { icon: FileSignature, title: "Accompagnement notaire", desc: "Je vous accompagne jusqu'à la signature de l'acte authentique." },
];

const Vendre = () => {
  const [form, setForm] = useState({
    nom: "", prenom: "", telephone: "", email: "",
    ville: "", typeBien: "", surface: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande d'estimation a bien été envoyée ! Je vous recontacte rapidement.");
    setForm({ nom: "", prenom: "", telephone: "", email: "", ville: "", typeBien: "", surface: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-foreground text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Vendre son bien</h1>
          <p className="font-body text-lg opacity-85 leading-relaxed">
            Vendre un bien immobilier est une étape importante. Une estimation juste, une stratégie adaptée et un accompagnement humain font toute la différence pour réussir votre vente dans les meilleures conditions.
          </p>
        </div>
      </section>

      {/* Importance */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
                L'importance d'une estimation juste
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Une estimation précise est la clé d'une vente réussie. Un bien surévalué risque de rester trop longtemps sur le marché, tandis qu'un bien sous-évalué vous ferait perdre de l'argent.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Mon expertise du marché local me permet de vous proposer une estimation fiable et argumentée, basée sur une analyse rigoureuse de votre bien et des tendances du marché.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Mon accompagnement</h3>
              <ul className="space-y-3 font-body text-muted-foreground">
                {["Estimation gratuite et sans engagement", "Analyse complète du marché local", "Stratégie de mise en vente personnalisée", "Suivi régulier et transparent", "Disponibilité et réactivité"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-foreground text-center mb-12">
            Les étapes de la vente
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 bg-background rounded-xl p-6 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimation Form */}
      <section className="section-padding" id="estimation">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-foreground text-center mb-4">
            Demander une estimation
          </h2>
          <p className="text-muted-foreground font-body text-center mb-8">
            Je vous recontacte rapidement afin d'échanger sur votre projet immobilier.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-8 border border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Nom" value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} required />
              <Input placeholder="Prénom" value={form.prenom} onChange={e => setForm({...form, prenom: e.target.value})} required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="tel" placeholder="Téléphone" value={form.telephone} onChange={e => setForm({...form, telephone: e.target.value})} required />
              <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
            </div>
            <Input placeholder="Ville du bien" value={form.ville} onChange={e => setForm({...form, ville: e.target.value})} required />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Type de bien (maison, appartement...)" value={form.typeBien} onChange={e => setForm({...form, typeBien: e.target.value})} required />
              <Input placeholder="Surface approximative (m²)" value={form.surface} onChange={e => setForm({...form, surface: e.target.value})} />
            </div>
            <Textarea placeholder="Votre message (optionnel)" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Envoyer ma demande d'estimation
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Vendre;
