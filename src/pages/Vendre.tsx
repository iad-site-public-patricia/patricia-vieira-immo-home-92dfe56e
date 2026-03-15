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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video-vendre.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/35 to-navy/10" />
        <div className="relative container mx-auto max-w-3xl text-center py-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy-foreground drop-shadow-lg">Vendre son bien</h1>
          <p className="font-body text-lg md:text-xl text-navy-foreground/90 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Vendre un bien, c'est vendre le plus vite possible, le plus cher possible et dans les meilleures conditions.
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
              <div className="section-divider !mx-0 !w-12 mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Un bien surévalué reste trop longtemps sur le marché et perd en attractivité. Un bien sous-évalué, c'est de l'argent perdu. <strong className="text-foreground">La bonne estimation, c'est celle qui déclenche les visites et génère des offres rapidement.</strong>
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Grâce à ma connaissance approfondie du marché local et à des outils d'analyse performants, je vous propose une estimation fiable, argumentée et réaliste.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                <strong className="text-foreground">Résultat :</strong> un prix juste qui attire les bons acquéreurs et vous permet de vendre dans les meilleurs délais.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border/40 shadow-sm">
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
          <h2 className="font-display text-3xl font-semibold text-foreground text-center mb-4">
            Les étapes de la vente
          </h2>
          <div className="section-divider mb-12" />
          <div className="space-y-5">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 bg-background rounded-xl p-6 border border-border/40 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-navy-foreground font-display font-bold text-lg shrink-0 group-hover:bg-primary transition-colors">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
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
          <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-8 border border-border/40 shadow-sm">
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
