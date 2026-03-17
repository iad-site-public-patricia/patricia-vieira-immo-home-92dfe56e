import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  ArrowRight, Building2, Users, Briefcase, Heart,
  MapPin, Laptop, Star, GraduationCap, Wrench, UserPlus,
  CheckCircle2, Quote, ChevronRight
} from "lucide-react";

import heroImg from "@/assets/rejoindre-hero-cover.png";
import equipeImg from "@/assets/rejoindre-equipe.jpg";
import lifestyleImg from "@/assets/rejoindre-lifestyle.jpg";
import formationImg from "@/assets/rejoindre-formation.jpg";

const Rejoindre = () => {
  const [form, setForm] = useState({
    nom: "", prenom: "", telephone: "", email: "",
    ville: "", activite: "", message: "", motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Merci pour votre intérêt ! Je vous recontacte rapidement.");
    setForm({ nom: "", prenom: "", telephone: "", email: "", ville: "", activite: "", message: "", motivation: "" });
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Équipe de conseillers immobiliers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-navy/20" />
        <div className="relative container mx-auto max-w-4xl text-center py-24 px-4">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary-foreground/70 mb-6">
            Rejoignez l'aventure iad
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-navy-foreground leading-tight drop-shadow-lg">
            Et si votre prochaine vie professionnelle commençait ici ?
          </h1>
          <p className="font-body text-lg md:text-xl text-navy-foreground/90 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-sm">
            Depuis plus de 11 ans, j'accompagne celles et ceux qui veulent entreprendre dans l'immobilier, avec liberté, accompagnement et ambition.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="#formulaire" className="inline-flex items-center gap-2">
              Échanger avec moi <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* 2. À QUI S'ADRESSE CETTE OPPORTUNITÉ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              À qui s'adresse cette opportunité ?
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reconversion */}
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/40 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-5">
                Vous êtes en reconversion professionnelle
              </h3>
              <p className="font-body text-muted-foreground mb-5 leading-relaxed">
                Vous souhaitez :
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Entreprendre et créer votre activité",
                  "Gagner en liberté",
                  "Exercer un métier humain",
                  "Évoluer dans un environnement dynamique",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-accent/60 rounded-xl p-5 border-l-4 border-primary">
                <p className="font-body text-foreground text-sm leading-relaxed italic">
                  « Vous pouvez apprendre un nouveau métier et évoluer à votre rythme, avec un accompagnement solide. »
                </p>
              </div>
            </div>

            {/* Déjà dans l'immobilier */}
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/40 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-5">
                Vous êtes déjà dans l'immobilier
              </h3>
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                Aujourd'hui, vous avez de l'expérience… mais vous ressentez peut-être certaines limites :
              </p>
              <ul className="space-y-2 mb-5">
                {["Commissions plafonnées", "Dépendance à une structure", "Évolution limitée"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-body text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-body text-foreground font-medium mb-4">Avec le modèle iad, vous pouvez :</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Augmenter vos revenus",
                  "Travailler de manière indépendante",
                  "Développer votre propre équipe",
                  "Créer un revenu complémentaire",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-accent/60 rounded-xl p-5 border-l-4 border-navy">
                <p className="font-body text-foreground text-sm leading-relaxed italic">
                  « Vous ne repartez pas de zéro. Vous passez simplement à un modèle plus puissant. »
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LES 4 PILIERS */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-5">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Bien plus qu'un métier : un véritable projet entrepreneurial
            </h2>
            <p className="font-body text-navy-foreground/75 text-lg max-w-2xl mx-auto leading-relaxed">
              En rejoignant notre réseau, vous ne faites pas qu'exercer un métier. Vous construisez un véritable actif professionnel autour de 4 piliers :
            </p>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mb-14" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {[
              {
                icon: Laptop,
                title: "Votre agence immobilière dématérialisée",
                desc: "Vous développez votre activité sans agence physique, avec des outils digitaux performants."
              },
              {
                icon: Users,
                title: "Votre propre réseau de mandataires",
                desc: "Vous avez la possibilité de constituer et accompagner votre équipe."
              },
              {
                icon: Briefcase,
                title: "Un fonds de commerce cessible et transmissible",
                desc: "Vous construisez un patrimoine professionnel qui a de la valeur dans le temps."
              },
              {
                icon: Heart,
                title: "Une véritable communauté",
                desc: "Vous évoluez au sein d'un collectif dynamique, avec entraide, partage et énergie."
              },
            ].map((item, i) => (
              <div key={i} className="bg-navy-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-navy-foreground/10 hover:bg-navy-foreground/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-navy-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-display text-xl italic text-navy-foreground/85 max-w-xl mx-auto">
              « Vous ne développez pas seulement un chiffre d'affaires… vous construisez quelque chose qui vous appartient. »
            </p>
          </div>
        </div>
      </section>

      {/* Image bande équipe */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={equipeImg} alt="Événement équipe iad" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
      </div>

      {/* 4. OPPORTUNITÉ PARTOUT EN FRANCE */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Travaillez d'où vous voulez
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <ul className="space-y-5 mb-8">
                {[
                  { icon: MapPin, text: "Dans votre ville" },
                  { icon: MapPin, text: "Dans votre région" },
                  { icon: MapPin, text: "Partout en France" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-body text-lg text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="bg-accent/60 rounded-xl p-6 border-l-4 border-primary">
                <p className="font-body text-foreground leading-relaxed italic">
                  « Vous organisez votre activité librement et développez votre réseau là où vous le souhaitez. »
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={lifestyleImg} alt="Travailler de chez soi dans l'immobilier" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. MON APPROCHE */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">Mon approche</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            La vente inversée
          </h2>
          <div className="section-divider mb-10" />
          <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
            <p>
              Depuis plus de 11 ans, j'ai développé une approche basée sur la <strong className="text-foreground">vente inversée</strong>.
            </p>
            <p>
              Plutôt que d'attendre les acheteurs, j'active un réseau d'acquéreurs qualifiés et une stratégie digitale pour créer la rencontre entre les bonnes personnes et les bons biens.
            </p>
            <p>
              Cette approche permet souvent d'accélérer les ventes et d'apporter plus de sérénité.
            </p>
          </div>
        </div>
      </section>

      {/* 6. POURQUOI ME REJOINDRE */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg">
              <img src={formationImg} alt="Formation et accompagnement" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">L'accompagnement</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Pourquoi me rejoindre ?
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <ul className="space-y-5 mb-8">
                {[
                  { icon: Star, text: "Accompagnement personnalisé" },
                  { icon: GraduationCap, text: "Formations régulières" },
                  { icon: Wrench, text: "Outils performants" },
                  { icon: UserPlus, text: "Intégration dans une équipe dynamique" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-body text-lg text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="font-display text-lg italic text-foreground/80">
                « Vous êtes accompagné(e) à chaque étape de votre évolution. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UNE AUTRE APPROCHE DU RECRUTEMENT */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <Quote className="w-10 h-10 text-primary/60 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
            Ce ne sont pas les personnes que je vais chercher…
          </h2>
          <p className="font-body text-xl text-navy-foreground/80 leading-relaxed mb-6">
            Ce sont celles qui se reconnaissent dans cette vision qui viennent naturellement vers moi.
          </p>
          <p className="font-body text-lg text-navy-foreground/70 leading-relaxed">
            Mon rôle est ensuite de vous accompagner pour transformer cette envie en réussite.
          </p>
        </div>
      </section>

      {/* 8. PREUVE SOCIALE */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ils m'ont fait confiance
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Patricia m'a accompagnée avec bienveillance et professionnalisme. Grâce à elle, j'ai trouvé ma voie dans l'immobilier.",
                name: "Sophie M.",
                role: "Conseillère depuis 2 ans"
              },
              {
                quote: "Après 15 ans en entreprise, j'ai fait le grand saut. L'accompagnement de Patricia a fait toute la différence.",
                name: "Thomas R.",
                role: "Conseiller depuis 3 ans"
              },
              {
                quote: "Une manager à l'écoute, disponible et inspirante. Je recommande à tous ceux qui hésitent encore.",
                name: "Nadia K.",
                role: "Conseillère depuis 1 an"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border/40 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="font-body text-muted-foreground leading-relaxed italic flex-1 mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                  <p className="font-body text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL + FORMULAIRE */}
      <section className="section-padding bg-card" id="formulaire">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Et si on en parlait ?
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Que vous soyez en reconversion ou déjà dans l'immobilier, je serai ravie d'échanger avec vous.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-background rounded-2xl p-8 md:p-10 border border-border/40 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Nom" value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} required />
              <Input placeholder="Prénom" value={form.prenom} onChange={e => setForm({...form, prenom: e.target.value})} required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="tel" placeholder="Téléphone" value={form.telephone} onChange={e => setForm({...form, telephone: e.target.value})} required />
              <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
            </div>
            <Input placeholder="Ville" value={form.ville} onChange={e => setForm({...form, ville: e.target.value})} />
            <Input placeholder="Activité actuelle" value={form.activite} onChange={e => setForm({...form, activite: e.target.value})} />
            <Textarea
              placeholder="Qu'est-ce qui vous attire dans le métier immobilier ? (optionnel)"
              value={form.motivation}
              onChange={e => setForm({...form, motivation: e.target.value})}
              rows={3}
            />
            <Textarea placeholder="Votre message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Prendre contact <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Rejoindre;
