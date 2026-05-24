import { useState } from "react";
import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  ArrowRight, Heart, Users, Trophy, Target, HandHeart, Rocket,
  Sparkles, GraduationCap, Compass, Feather, Facebook, Instagram, Linkedin,
  Building2, TrendingUp, Flame,
} from "lucide-react";

import heroImg from "@/assets/equipe-celebration.jpg";
import formationImg from "@/assets/equipe-formation.jpg";
import seminaireImg from "@/assets/equipe-seminaire.jpg";
import mentoratImg from "@/assets/equipe-mentorat.jpg";
import challengeImg from "@/assets/equipe-challenge.jpg";
import terrainImg from "@/assets/equipe-terrain.jpg";
import rejoindreEquipeImg from "@/assets/rejoindre-equipe.jpg";
import rejoindreLifestyleImg from "@/assets/rejoindre-lifestyle.jpg";

const galleryItems = [
  { src: seminaireImg, label: "Séminaire d'équipe" },
  { src: formationImg, label: "Formation collective" },
  { src: challengeImg, label: "Challenges & récompenses" },
  { src: mentoratImg, label: "Accompagnement individuel" },
  { src: terrainImg, label: "Sur le terrain" },
  { src: rejoindreEquipeImg, label: "Événements conviviaux" },
  { src: rejoindreLifestyleImg, label: "Moments de partage" },
  { src: heroImg, label: "Réussites célébrées" },
];

const MonEquipe = () => {
  const [form, setForm] = useState({
    nom: "", prenom: "", telephone: "", email: "",
    ville: "", activite: "", motivation: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Merci pour votre intérêt ! Je vous recontacte rapidement.");
    setForm({ nom: "", prenom: "", telephone: "", email: "", ville: "", activite: "", motivation: "", message: "" });
  };

  return (
    <>
      <PageSEO
        title="Mon Équipe de Conseillers Immobiliers | Patricia Vieira"
        description="Rejoignez une équipe de conseillers immobiliers humaine, dynamique et ambitieuse. Accompagnement personnalisé, formations, challenges et esprit collectif avec Patricia Vieira."
        canonical="/mon-equipe"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Mon Équipe", url: "/mon-equipe" },
        ]}
      />

      <div className="text-foreground">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <img
            src={heroImg}
            alt="Équipe de conseillers immobiliers célébrant ensemble"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/55 to-navy/30" />
          <div className="relative container mx-auto max-w-5xl py-28 px-4 text-center">
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-6">
              Mon équipe de conseillers immobiliers
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-navy-foreground mb-8 drop-shadow-lg">
              Construire ensemble une aventure humaine et entrepreneuriale
            </h1>
            <div className="max-w-3xl mx-auto space-y-5 font-body text-base md:text-lg text-navy-foreground/95 leading-relaxed drop-shadow-sm">
              <p>
                Depuis plus de 11 ans, j'accompagne des femmes et des hommes dans le développement de leur activité immobilière.
              </p>
              <p>
                Au-delà du métier, mon objectif est d'aider chacun à construire une activité qui lui ressemble, à gagner en confiance, à évoluer à son rythme et à développer sa liberté professionnelle.
              </p>
              <p>
                Mon équipe est présente dans plusieurs régions de France et repose sur des valeurs fortes : <span className="font-semibold">l'accompagnement, le partage, l'évolution et l'humain</span>.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="hero" size="xl" asChild>
                <a href="#echanger" className="inline-flex items-center gap-2">
                  Échanger avec moi <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* UNE ÉQUIPE QUI AVANCE ENSEMBLE */}
        <section className="section-padding">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-4">
                Une équipe dynamique et motivante
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Une équipe qui avance ensemble
              </h2>
              <div className="section-divider mb-8" />
              <div className="space-y-4 font-body text-base md:text-lg text-foreground/90 leading-relaxed">
                <p>
                  Je crois profondément que la réussite se construit plus facilement lorsqu'on avance entouré(e), motivé(e) et soutenu(e).
                </p>
                <p>
                  C'est pourquoi j'accorde une place essentielle à la dynamique d'équipe, au partage d'expérience et à la valorisation des réussites de chacun.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  icon: Trophy,
                  emoji: "🏆",
                  title: "Challenges et récompenses",
                  desc: "Organisation régulière de challenges motivants récompensant les meilleurs chiffres d'affaires, les prises de mandats, les progressions, l'implication et les performances.",
                },
                {
                  icon: Target,
                  emoji: "🎯",
                  title: "Accompagnement personnalisé",
                  desc: "Chaque personne avance à son rythme avec un suivi humain, des conseils, des échanges réguliers et un véritable accompagnement terrain.",
                },
                {
                  icon: HandHeart,
                  emoji: "🤝",
                  title: "Synergie et partage d'expérience",
                  desc: "L'équipe fonctionne dans un esprit d'entraide, de partage et de motivation collective. Les expériences et réussites de chacun permettent à tous de progresser ensemble.",
                },
                {
                  icon: Rocket,
                  emoji: "🚀",
                  title: "Évolution et entrepreneuriat",
                  desc: "L'objectif est d'aider chacun à développer une activité durable, évoluer professionnellement et construire une véritable entreprise.",
                },
                {
                  icon: Feather,
                  emoji: "🌿",
                  title: "Liberté et indépendance",
                  desc: "Chaque conseiller immobilier indépendant reste totalement libre de construire son activité à sa manière et à son rythme. L'objectif n'est pas d'imposer un fonctionnement unique ou une pression collective, mais de permettre à chacun d'évoluer dans un environnement bienveillant, motivant et respectueux de sa personnalité. Chacun avance selon ses ambitions, ses objectifs et son équilibre de vie, tout en bénéficiant du soutien du collectif pour développer son activité et son entrepreneuriat immobilier en toute liberté professionnelle.",
                },
              ].map((item, i) => (
                <article
                  key={i}
                  className="group relative bg-card rounded-2xl p-8 md:p-10 border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5 mb-5">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug pt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-body text-foreground/85 leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LES 4 PILIERS */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-4">
                Notre dynamique
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                La dynamique de notre équipe c'est
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  icon: Heart,
                  title: "Accompagnement humain",
                  desc: "Un suivi réel, de proximité, avec écoute et bienveillance.",
                },
                {
                  num: "02",
                  icon: GraduationCap,
                  title: "Formation et progression",
                  desc: "Des formations, ateliers et échanges réguliers pour évoluer continuellement.",
                },
                {
                  num: "03",
                  icon: Users,
                  title: "Esprit collectif",
                  desc: "Une équipe soudée où l'entraide et le partage occupent une place centrale.",
                },
                {
                  num: "04",
                  icon: Compass,
                  title: "Liberté et évolution",
                  desc: "La possibilité de construire son activité à son rythme et selon ses ambitions.",
                },
              ].map((pillar, i) => (
                <div
                  key={i}
                  className="group bg-card rounded-2xl p-8 border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl text-primary/60 font-light">
                      {pillar.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 leading-snug text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-foreground/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POURQUOI REJOINDRE NOTRE RÉSEAU - 4 PILIERS IAD */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl relative">
            {/* Intro */}
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-5">
                Rejoindre le réseau iad
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-[1.15]">
                Pourquoi rejoindre notre réseau immobilier&nbsp;?
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mb-8" />
              <div className="space-y-5 font-body text-base md:text-lg text-foreground/90 leading-relaxed">
                <p>
                  Bien plus qu'un simple métier, le réseau iad permet de construire une véritable activité entrepreneuriale dans un environnement humain, dynamique et évolutif.
                </p>
                <p>
                  Depuis plus de 11 ans, j'accompagne des femmes et des hommes qui souhaitent développer leur activité immobilière, évoluer professionnellement et construire leur propre projet de vie.
                </p>
              </div>
            </div>

            {/* Sous-titre 4 piliers */}
            <div className="text-center mb-14">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-4">
                La force du modèle
              </p>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                Les 4 piliers qui font la force de notre réseau
              </h3>
            </div>

            {/* 4 grands blocs piliers - alternance image/texte */}
            <div className="space-y-10 md:space-y-16">
              {[
                {
                  num: "01",
                  emoji: "🏢",
                  icon: Building2,
                  title: "Créer sa propre agence immobilière dématérialisée",
                  desc: "Le modèle iad permet à chacun de développer sa propre activité immobilière indépendante sans avoir besoin d'ouvrir une agence physique traditionnelle. Grâce à des outils digitaux performants, des formations, un accompagnement humain et une organisation moderne, chacun peut gérer et développer son activité avec flexibilité et liberté. Le réseau permet de bénéficier de la puissance d'une structure nationale tout en conservant son indépendance.",
                  image: rejoindreLifestyleImg,
                  alt: "Conseiller immobilier travaillant avec ses outils digitaux",
                },
                {
                  num: "02",
                  emoji: "🤝",
                  icon: Users,
                  title: "Construire et accompagner sa propre équipe",
                  desc: "Au-delà de la transaction immobilière, chacun a la possibilité de développer sa propre équipe de mandataires et d'accompagner d'autres personnes dans leur évolution professionnelle. L'objectif n'est pas seulement de recruter, mais de transmettre, accompagner, faire évoluer et aider chacun à réussir à son rythme. Cette dimension humaine et entrepreneuriale apporte une vraie dynamique collective et permet de construire un projet évolutif sur le long terme.",
                  image: mentoratImg,
                  alt: "Équipe de conseillers immobiliers en échange et accompagnement",
                },
                {
                  num: "03",
                  emoji: "📈",
                  icon: TrendingUp,
                  title: "Développer un véritable fonds de commerce transmissible",
                  desc: "L'activité permet progressivement de construire un véritable patrimoine professionnel. Au fil du temps, chacun peut développer une activité durable, structurée et évolutive, avec une vision long terme. Cette approche entrepreneuriale permet de construire quelque chose de concret, valorisable et transmissible. Le modèle repose sur la création d'une activité pérenne et évolutive dans le temps.",
                  image: terrainImg,
                  alt: "Construction d'une activité immobilière durable",
                },
                {
                  num: "04",
                  emoji: "🔥",
                  icon: Flame,
                  title: "Évoluer dans une communauté dynamique et motivante",
                  desc: "Le réseau repose également sur une forte dynamique humaine et collective. Événements, formations, séminaires, challenges, échanges d'expériences, entraide et partage permettent à chacun d'évoluer dans une énergie positive et motivante. L'objectif est que personne ne reste seul dans son évolution. Les réussites des uns inspirent les autres et créent une véritable dynamique de progression collective.",
                  image: seminaireImg,
                  alt: "Séminaire d'équipe et événement collectif iad",
                },
              ].map((pillar, i) => (
                <article
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-gold/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                      <img
                        src={pillar.image}
                        alt={pillar.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                        <span className="font-display text-2xl text-primary font-semibold">
                          {pillar.num}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Texte */}
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 flex items-center justify-center">
                        <pillar.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-3xl" aria-hidden="true">{pillar.emoji}</span>
                    </div>
                    <h4 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-5 leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="font-body text-base md:text-lg text-foreground/85 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Section finale inspirante */}
            <div className="mt-24 relative">
              <div className="relative bg-gradient-to-br from-navy via-navy to-navy/90 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/40 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/40 blur-3xl" />
                </div>
                <div className="relative px-6 py-16 md:px-14 md:py-20 text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-6">
                    <Sparkles className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-foreground mb-6 leading-tight">
                    Et si vous construisiez vous aussi votre propre projet&nbsp;?
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mb-8" />
                  <p className="font-body text-base md:text-lg text-navy-foreground/90 leading-relaxed mb-10">
                    Que vous soyez en réflexion professionnelle, en reconversion ou déjà dans l'immobilier, je serai ravie d'échanger avec vous. Mon rôle est avant tout d'accompagner humainement les personnes qui souhaitent entreprendre, évoluer et construire une activité durable dans un environnement bienveillant et motivant.
                  </p>
                  <Button variant="hero" size="xl" asChild>
                    <a href="#echanger" className="inline-flex items-center gap-2">
                      Échanger avec moi <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MOMENTS D'ÉQUIPE - GALERIE */}
        <section className="section-padding">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-4">
                Galerie
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Nos moments d'équipe
              </h2>
              <div className="section-divider mb-8" />
              <p className="font-body text-base md:text-lg text-foreground/85 leading-relaxed">
                Séminaires, formations, challenges, événements et célébrations : autant de moments qui rythment la vie de l'équipe et nourrissent notre énergie collective.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
              {galleryItems.map((item, i) => {
                const spans = [
                  "row-span-2",
                  "",
                  "",
                  "row-span-2 col-span-1",
                  "",
                  "col-span-2",
                  "",
                  "",
                ];
                return (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-xl bg-muted ${spans[i] || ""}`}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-display text-navy-foreground text-sm md:text-base font-medium drop-shadow">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION FINALE */}
        <section id="echanger" className="section-padding bg-secondary/40 relative overflow-hidden">
          <div className="container mx-auto max-w-3xl relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Et si c'était aussi votre tour ?
              </h2>
              <div className="section-divider mb-8" />
              <div className="space-y-4 font-body text-base md:text-lg text-foreground/90 leading-relaxed">
                <p>
                  Que vous soyez en réflexion, en reconversion ou déjà dans l'immobilier, je serai ravie d'échanger avec vous.
                </p>
                <p>
                  Mon objectif n'est pas simplement de recruter. Je souhaite avant tout accompagner des personnes qui veulent <span className="font-semibold">évoluer, entreprendre et construire un projet durable</span> dans un environnement humain et motivant.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-card rounded-2xl p-8 md:p-10 border border-border/40 shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Nom" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} required />
                <Input placeholder="Prénom" value={form.prenom} onChange={e => setForm({ ...form, prenom: e.target.value })} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input type="tel" placeholder="Téléphone" value={form.telephone} onChange={e => setForm({ ...form, telephone: e.target.value })} required />
                <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
              <Input placeholder="Ville" value={form.ville} onChange={e => setForm({ ...form, ville: e.target.value })} />
              <Input placeholder="Activité actuelle" value={form.activite} onChange={e => setForm({ ...form, activite: e.target.value })} />
              <Textarea placeholder="Qu'est-ce qui vous attire dans le métier immobilier ? (optionnel)" value={form.motivation} onChange={e => setForm({ ...form, motivation: e.target.value })} rows={3} />
              <Textarea placeholder="Votre message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} />
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Échanger avec moi <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>

            <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
              <a href="https://www.facebook.com/patriciavieiraimmobilier/" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 px-5 py-3 bg-card rounded-xl border border-border/40 text-sm font-body text-foreground/80 hover:text-primary hover:border-primary/40 transition-all">
                <Facebook className="w-5 h-5" /> Facebook
              </a>
              <a href="https://www.instagram.com/patricia.vieira.immo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-card rounded-xl border border-border/40 text-sm font-body text-foreground/80 hover:text-primary hover:border-primary/40 transition-all">
                <Instagram className="w-5 h-5" /> Instagram
              </a>
              <a href="https://www.linkedin.com/in/patriciavieiraiad/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-card rounded-xl border border-border/40 text-sm font-body text-foreground/80 hover:text-primary hover:border-primary/40 transition-all">
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
