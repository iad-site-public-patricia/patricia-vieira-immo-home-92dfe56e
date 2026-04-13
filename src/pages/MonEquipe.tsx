import { useState } from "react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  ArrowRight, Heart, Users, Briefcase, Star,
  CheckCircle2, Quote, Facebook, Linkedin, Building2, Laptop,
  MapPin, GraduationCap, UserPlus
} from "lucide-react";

import heroImg from "@/assets/rejoindre-hero-cover.jpg";
import equipeImg from "@/assets/rejoindre-equipe.jpg";
import lifestyleImg from "@/assets/rejoindre-lifestyle.jpg";
import formationImg from "@/assets/rejoindre-formation.jpg";

const MonEquipe = () => {
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
    <>
      <PageSEO
        title="Mon Équipe — Conseillers Immobiliers IAD France | Patricia Vieira"
        description="Découvrez l'équipe de Patricia Vieira, conseillers immobiliers IAD France. Rejoignez une équipe dynamique, bienveillante et ambitieuse. Accompagnement personnalisé."
        canonical="/mon-equipe"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Mon Équipe", url: "/mon-equipe" },
        ]}
      />
      <div>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <img src={heroImg} alt="Équipe de conseillers immobiliers" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-navy/20" />
          <div className="relative container mx-auto max-w-4xl text-center py-24 px-4">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary-foreground/70 mb-6">
              Une équipe, une vision
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-navy-foreground leading-tight drop-shadow-lg">
              Mon Équipe de Conseillers Immobiliers
            </h1>
            <p className="font-body text-lg md:text-xl text-navy-foreground/90 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-sm">
              Au-delà de mon activité, j'ai fait le choix de développer une équipe de conseillers immobiliers indépendants, partout en France.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="#formulaire" className="inline-flex items-center gap-2">
                Rejoindre l'équipe <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Présentation équipe */}
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Une équipe fondée sur des valeurs fortes
              </h2>
              <div className="section-divider !mx-0 !w-14" />
              <p className="text-lg text-foreground">
                Cette équipe repose sur des valeurs fortes : l'entraide, le partage, la montée en compétences et la réussite collective.
              </p>
              <p>
                Chaque conseiller est accompagné individuellement, avec pour objectif de lui permettre de développer son activité et d'atteindre ses propres objectifs.
              </p>
              <p>
                Aujourd'hui, mon équipe est composée de profils variés, tous animés par la même envie : accompagner leurs clients avec sérieux et professionnalisme.
              </p>
              <p>
                Être bien entouré est essentiel dans ce métier. C'est pourquoi je mets un point d'honneur à créer un environnement bienveillant, motivant et structurant.
              </p>
              <p>
                Si vous êtes en réflexion sur votre avenir professionnel ou simplement curieux de découvrir ce métier, je serai ravie d'échanger avec vous.
              </p>
            </div>
          </div>
        </section>

        {/* Valeurs en grid */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Entraide", desc: "On avance ensemble, jamais seul(e)." },
                { icon: Users, title: "Partage", desc: "Échanges réguliers et retours d'expérience." },
                { icon: GraduationCap, title: "Compétences", desc: "Formation continue et montée en compétences." },
                { icon: Star, title: "Réussite", desc: "Votre succès est aussi le nôtre." },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border/40 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* À qui s'adresse cette opportunité */}
        <section className="section-padding">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                À qui s'adresse cette opportunité ?
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/40 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-5">
                  Vous êtes en reconversion professionnelle
                </h3>
                <ul className="space-y-3 mb-6">
                  {["Entreprendre et créer votre activité", "Gagner en liberté", "Exercer un métier humain", "Évoluer dans un environnement dynamique"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/40 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-5">
                  Vous êtes déjà dans l'immobilier
                </h3>
                <p className="font-body text-foreground font-medium mb-4">Avec le modèle IAD, vous pouvez :</p>
                <ul className="space-y-3 mb-6">
                  {["Augmenter vos revenus", "Travailler de manière indépendante", "Développer votre propre équipe", "Créer un revenu complémentaire"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Les 4 piliers */}
        <section className="section-padding bg-navy text-navy-foreground">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-5">
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Bien plus qu'un métier : un véritable projet entrepreneurial
              </h2>
              <p className="font-body text-navy-foreground/75 text-lg max-w-2xl mx-auto leading-relaxed">
                En rejoignant notre réseau, vous construisez un véritable actif professionnel autour de 4 piliers :
              </p>
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Laptop, title: "Votre agence dématérialisée", desc: "Développez votre activité avec des outils digitaux performants." },
                { icon: Users, title: "Votre propre réseau", desc: "Constituez et accompagnez votre équipe de conseillers." },
                { icon: Briefcase, title: "Un fonds de commerce cessible", desc: "Construisez un patrimoine professionnel qui a de la valeur." },
                { icon: Heart, title: "Une vraie communauté", desc: "Évoluez au sein d'un collectif dynamique avec entraide et partage." },
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
          </div>
        </section>

        {/* Image bande */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img src={equipeImg} alt="Événement équipe IAD" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
        </div>

        {/* Pourquoi me rejoindre */}
        <section className="section-padding">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg">
                <img src={formationImg} alt="Formation et accompagnement" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">L'accompagnement</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Pourquoi me rejoindre ?
                </h2>
                <div className="section-divider !mx-0 mb-8" />
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>Rejoindre mon équipe, ce n'est pas simplement exercer un métier…</p>
                  <p className="font-medium text-foreground">C'est construire votre propre projet de vie, à votre rythme, avec un accompagnement réel.</p>
                  <p>Depuis plus de 11 ans, j'accompagne des femmes et des hommes à se lancer, évoluer et réussir dans l'immobilier.</p>
                  <p className="font-semibold text-primary">Ici, vous n'êtes jamais seul(e).</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: "Accompagnement humain", desc: "Je prends le temps de comprendre votre parcours, vos objectifs et vos freins." },
                { icon: Star, title: "Cadre pour réussir", desc: "Formations, outils, méthodes éprouvées pour monter en compétences rapidement." },
                { icon: Briefcase, title: "Projet entrepreneurial", desc: "Vous construisez votre propre activité avec un fonds de commerce qui vous appartient." },
                { icon: Users, title: "Équipe soudée", desc: "Entraide, partage d'expérience et énergie collective au quotidien." },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-2xl p-8 border border-border/40 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Ils m'ont fait confiance
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote: "Patricia est passionnée par son métier et ce qui fait d'elle une excellente formatrice habilitée au sein du réseau IAD. Merci à toi pour ton partage de connaissances et pour ce temps que tu passes gracieusement à nous former !",
                  name: "Laura B.",
                  role: "Conseillère depuis 2023",
                  stars: 5
                },
                {
                  quote: "Grâce à Patricia, j'ai pu me lancer sereinement dans le métier de conseiller immobilier. Son expérience et son accompagnement au quotidien m'ont permis de développer mon activité rapidement.",
                  name: "Sophie M.",
                  role: "Conseillère depuis 2022",
                  stars: 5
                },
                {
                  quote: "Patricia m'a tout de suite mis en confiance. Elle est disponible, bienveillante et toujours de bon conseil. Je recommande sans hésiter.",
                  name: "Thomas R.",
                  role: "Conseiller depuis 2024",
                  stars: 5
                },
                {
                  quote: "Patricia est toujours présente pour aider ses équipes, et met son dynamisme et sa volonté au service de notre réussite. C'est une chance de l'avoir comme manager.",
                  name: "Julien A.",
                  role: "Conseiller depuis 2018",
                  stars: 5
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-card rounded-2xl p-8 border border-border/40 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.stars }).map((_, s) => (
                      <span key={s} className="text-yellow-500 text-lg">★</span>
                    ))}
                  </div>
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

        {/* Formulaire */}
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
              <Textarea placeholder="Qu'est-ce qui vous attire dans le métier immobilier ? (optionnel)" value={form.motivation} onChange={e => setForm({...form, motivation: e.target.value})} rows={3} />
              <Textarea placeholder="Votre message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} />
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Prendre contact <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>

            <div className="flex items-center justify-center gap-4 mt-8">
              <a href="https://www.facebook.com/patriciavieiraimmobilier/" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 px-5 py-3 bg-card rounded-xl border border-border/40 text-sm font-body text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Facebook className="w-5 h-5" /> Facebook
              </a>
              <a href="https://www.linkedin.com/in/patriciavieiraiad/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-card rounded-xl border border-border/40 text-sm font-body text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MonEquipe;
