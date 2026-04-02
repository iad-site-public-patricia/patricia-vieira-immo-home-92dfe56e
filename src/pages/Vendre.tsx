import { useState } from "react";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  CheckCircle, ClipboardList, Eye, Home, Handshake, FileSignature,
  Scale, Megaphone, Users, CreditCard, BookUser, HeartHandshake,
  CalendarCheck, Flame, Gavel, Network, Target, Rocket,
  Sparkles, UserCheck, Shield, MessageCircle, Zap, Award, Quote
} from "lucide-react";


const steps = [
  { icon: ClipboardList, title: "Estimation gratuite du bien", desc: "Une analyse complète pour déterminer la juste valeur de votre propriété." },
  { icon: Eye, title: "Mise en valeur et stratégie de vente personnalisée", desc: "Photos professionnelles, annonces ciblées et plan de commercialisation adapté." },
  { icon: Home, title: "Organisation des visites", desc: "Des visites qualifiées avec des acquéreurs sérieux et motivés." },
  { icon: Handshake, title: "Négociation", desc: "Je défends vos intérêts pour obtenir le meilleur prix." },
  { icon: FileSignature, title: "Accompagnement notaire", desc: "Je vous accompagne jusqu'à la signature de l'acte authentique." },
];

const atouts = [
  { icon: Scale, title: "Neutralité et crédibilité", desc: "Un regard objectif et professionnel pour inspirer confiance aux acquéreurs." },
  { icon: Megaphone, title: "Puissance marketing et visibilité", desc: "Des outils de diffusion performants pour une visibilité maximale de votre bien." },
  { icon: Users, title: "Connaissance fine des acheteurs", desc: "Je comprends les attentes et les comportements des acquéreurs pour mieux cibler." },
  { icon: CreditCard, title: "Connaissance des modalités de financement", desc: "Je maîtrise les solutions de financement pour faciliter les transactions." },
  { icon: BookUser, title: "Fichier acquéreurs qualifié", desc: "Un portefeuille d'acheteurs sérieux et prêts à s'engager." },
  { icon: HeartHandshake, title: "Rôle de tampon émotionnel", desc: "Je gère les émotions pour garantir des échanges sereins et constructifs." },
  { icon: CalendarCheck, title: "Organisation stratégique des visites", desc: "Des visites planifiées pour maximiser l'impact et l'intérêt des acquéreurs." },
  { icon: Flame, title: "Création d'émulation entre acheteurs", desc: "Une stratégie qui stimule la concurrence pour obtenir la meilleure offre." },
  { icon: Gavel, title: "Expertise juridique, réglementaire et technique", desc: "Un accompagnement sécurisé sur tous les aspects légaux et techniques." },
  { icon: Network, title: "Réseau professionnel solide", desc: "Un réseau étendu de partenaires pour faciliter chaque étape." },
  { icon: Target, title: "Maîtrise de la négociation", desc: "Des techniques éprouvées pour défendre au mieux vos intérêts financiers." },
  { icon: Rocket, title: "Capacité à vendre plus vite et mieux", desc: "Une méthode qui accélère la vente tout en optimisant le prix obtenu." },
];

const engagements = [
  { icon: Target, label: "Stratégie de vente personnalisée" },
  { icon: Sparkles, label: "Mise en valeur optimale de votre bien" },
  { icon: Megaphone, label: "Diffusion large et ciblée" },
  { icon: UserCheck, label: "Sélection rigoureuse des acquéreurs" },
  { icon: Shield, label: "Négociation défendant vos intérêts" },
  { icon: Handshake, label: "Accompagnement complet jusqu'à la signature" },
  { icon: MessageCircle, label: "Communication transparente et régulière" },
  { icon: Zap, label: "Disponibilité et réactivité" },
  { icon: Award, label: "Engagement basé sur la confiance et l'éthique" },
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
    <>
      <PageSEO
        title="Vendre Votre Bien Immobilier en Seine-et-Marne (77) | Patricia Vieira — IAD France"
        description="Vendez votre maison ou appartement en Seine-et-Marne avec Patricia Vieira, IAD France. Honoraires réduits, accompagnement personnalisé, estimation gratuite. Gretz-Armainvilliers et environs."
        canonical="/vendre"
      />
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
                  <p className="text-muted-foreground font-body text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ma méthode unique – 12 Atouts */}
      <section className="section-padding relative overflow-hidden" id="methode">
        {/* Subtle background illustration – strategic path to house */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M-50 450 C150 450, 200 300, 350 300 S550 200, 650 200 S800 150, 900 150 L1050 150"
            stroke="hsl(215 50% 28% / 0.06)"
            strokeWidth="2"
            strokeDasharray="12 8"
            fill="none"
          />
          <path
            d="M-50 500 C200 500, 250 350, 400 340 S600 250, 700 240 S850 180, 950 170 L1050 160"
            stroke="hsl(215 50% 28% / 0.04)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="350" cy="300" r="3" fill="hsl(215 50% 28% / 0.07)" />
          <circle cx="650" cy="200" r="3" fill="hsl(215 50% 28% / 0.07)" />
          <circle cx="900" cy="150" r="3" fill="hsl(215 50% 28% / 0.07)" />
          <g transform="translate(1050, 130)" stroke="hsl(215 50% 28% / 0.08)" strokeWidth="1.5" fill="none">
            <path d="M0 20 L20 0 L40 20" />
            <rect x="5" y="20" width="30" height="22" rx="1" />
            <rect x="15" y="28" width="10" height="14" />
          </g>
          <circle cx="100" cy="80" r="60" stroke="hsl(215 50% 28% / 0.03)" strokeWidth="1" fill="none" />
          <circle cx="1100" cy="500" r="80" stroke="hsl(215 50% 28% / 0.03)" strokeWidth="1" fill="none" />
        </svg>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-4">
            <p className="font-body text-sm md:text-base uppercase tracking-[0.2em] text-primary mb-3">
              Une approche structurée pour maximiser la réussite de votre vente.
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ma méthode unique
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
              12 atouts majeurs pour vendre votre bien le plus vite possible, le plus cher possible et dans les meilleures conditions.
            </p>
          </div>
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {atouts.map((atout, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border/40 hover:shadow-lg hover:border-primary/25 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <atout.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{atout.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{atout.desc}</p>
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
            <Button variant="hero" size="lg" type="submit" className="w-full text-sm sm:text-base px-4 py-3 whitespace-normal h-auto">
              Envoyer ma demande d'estimation
            </Button>
          </form>
        </div>
      </section>
    </div>
    </>
  );
};

export default Vendre;
