import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Sparkles, Compass, Heart, Users, Trophy, Globe,
  Smartphone, Video, Handshake, Home, Ear, HeartHandshake, Repeat,
  Clock, Shield, Quote, Calendar, MapPin, MessageCircle, Star,
  TrendingUp, BookOpen, Award,
} from "lucide-react";

import patriciaPortrait from "@/assets/patricia-vieira-portrait.png.asset.json";
import patriciaAssise from "@/assets/patricia-vieira-portrait-assise.png.asset.json";
import visiteImgAsset from "@/assets/equipe-terrain.png.asset.json";
const visiteImg = visiteImgAsset.url;
import estimationImg from "@/assets/cover-estimation.jpg";
import equipeImg from "@/assets/equipe-celebration.jpg";
import lifestyleImgAsset from "@/assets/rejoindre-lifestyle.png.asset.json";
const lifestyleImg = lifestyleImgAsset.url;




const sections = [
  { id: "reconversion", label: "Un métier qui attire en reconversion" },
  { id: "liberte", label: "La liberté a un prix : celui de la régularité" },
  { id: "metier-change", label: "Le métier immobilier a profondément changé" },
  { id: "digital", label: "Le digital ne remplacera jamais l'humain" },
  { id: "reseaux", label: "Pourquoi les réseaux de mandataires se développent" },
  { id: "long-terme", label: "Construire une activité sur le long terme" },
  { id: "qualites", label: "Les qualités qui font la différence" },
  { id: "conclusion", label: "Conclusion : un métier enrichissant" },
];

const reconversionCards = [
  { icon: Sparkles, title: "Plus de liberté" },
  { icon: Compass, title: "Plus d'autonomie" },
  { icon: Trophy, title: "Plus de reconnaissance" },
  { icon: Heart, title: "Une activité qui a du sens" },
];

const disciplineCards = [
  { icon: Clock, title: "Gérer son temps" },
  { icon: Calendar, title: "Organiser ses journées" },
  { icon: TrendingUp, title: "Développer sa visibilité" },
  { icon: Sparkles, title: "Entretenir sa motivation" },
  { icon: Shield, title: "Rester constant" },
];

const chiffresCles = [
  { icon: Globe, label: "Internet" },
  { icon: Smartphone, label: "Réseaux sociaux" },
  { icon: Video, label: "Vidéo immobilière" },
  { icon: Handshake, label: "Relation humaine" },
  { icon: Home, label: "Accompagnement personnalisé" },
];

const competencesModerne = [
  { icon: HeartHandshake, title: "Relation humaine" },
  { icon: Smartphone, title: "Communication digitale" },
  { icon: MapPin, title: "Présence terrain" },
  { icon: Star, title: "Accompagnement personnalisé" },
];

const clientsRecherche = [
  { icon: Ear, title: "Qui les écoute" },
  { icon: Shield, title: "Qui les rassure" },
  { icon: MessageCircle, title: "Qui les conseille avec sincérité" },
  { icon: Heart, title: "Qui reste présent" },
];

const reseauxAttraits = [
  { icon: Sparkles, title: "Retrouver davantage de liberté" },
  { icon: Award, title: "Développer leur propre image" },
  { icon: TrendingUp, title: "Bénéficier d'outils modernes" },
  { icon: Compass, title: "Travailler plus librement" },
  { icon: Users, title: "Construire leur propre équipe" },
];

const ambassadeurs = [
  { icon: Users, title: "Vous recommander à son entourage" },
  { icon: Clock, title: "Vous rappeler plusieurs années plus tard" },
  { icon: Star, title: "Devenir un véritable ambassadeur" },
];

const qualites = [
  { icon: Ear, title: "Écoute", desc: "Comprendre avant de proposer." },
  { icon: HeartHandshake, title: "Empathie", desc: "Se mettre à la place de l'autre." },
  { icon: Repeat, title: "Capacité d'adaptation", desc: "S'ajuster à chaque profil." },
  { icon: Clock, title: "Régularité", desc: "Bâtir dans la durée." },
  { icon: Shield, title: "Résilience", desc: "Tenir face aux imprévus." },
  { icon: Sparkles, title: "Authenticité", desc: "Être soi, sincèrement." },
];

const PourquoiImmobilierIndependant = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <PageSEO
        title="Pourquoi j'ai choisi l'immobilier indépendant : bien plus qu'un métier, une aventure humaine"
        description="Découvrez pourquoi le métier de conseiller immobilier indépendant attire de plus en plus de professionnels en reconversion. Liberté, entrepreneuriat, relation humaine, immobilier digital et développement personnel."
        canonical="/pourquoi-j-ai-choisi-l-immobilier-independant"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Conseils immobiliers", url: "/conseils-immobiliers" },
          { name: "Pourquoi j'ai choisi l'immobilier indépendant", url: "/pourquoi-j-ai-choisi-l-immobilier-independant" },
        ]}
      />

      {/* Barre de progression */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div className="h-full bg-primary transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <article className="text-foreground bg-warm-white">
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-navy">
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary))_0%,transparent_50%),radial-gradient(circle_at_80%_70%,hsl(var(--gold))_0%,transparent_50%)]" />
          <div className="relative z-10 container mx-auto max-w-7xl px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1 animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-primary" />
                  <p className="font-body text-[11px] uppercase tracking-[0.4em] text-primary">Le journal · Édition personnelle</p>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] font-semibold text-navy-foreground leading-[1.05]">
                  Pourquoi j'ai choisi <span className="italic text-primary">l'immobilier indépendant</span>
                  <span className="block text-navy-foreground/85 text-2xl md:text-3xl lg:text-4xl font-normal italic mt-4">
                    bien plus qu'un métier, une aventure humaine
                  </span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#article">Lire l'article <ArrowRight className="ml-2 w-4 h-4" /></a>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent text-navy-foreground border-navy-foreground/40 hover:bg-navy-foreground hover:text-navy" asChild>
                    <Link to="/contact">Échanger avec Patricia</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 relative animate-fade-in">
                <div className="relative mx-auto max-w-md">
                  <div className="absolute -inset-3 rounded-[2rem] border border-primary/40" />
                  <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl">
                    <img src={patriciaAssise.url} alt="Patricia Vieira" className="w-full h-auto object-cover" loading="eager" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTA */}
        <section className="border-y border-border/40 bg-sand/50">
          <div className="container mx-auto max-w-5xl px-4 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-center">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">📖 Lecture · 7 min</span>
            <span className="hidden md:inline h-4 w-px bg-border" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">✍️ Par Patricia Vieira</span>
            <span className="hidden md:inline h-4 w-px bg-border" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Personal Branding · Immobilier</span>
          </div>
        </section>

        {/* SOMMAIRE */}
        <section className="bg-warm-white">
          <div className="container mx-auto max-w-4xl px-4 py-12">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-4 text-center">Sommaire</p>
            <ol className="grid md:grid-cols-2 gap-3">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-sand/60 transition-colors">
                    <span className="font-display italic text-primary text-lg shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-body text-foreground group-hover:text-primary transition-colors">{s.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="article" className="py-16 md:py-20">
          <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed">
            <p className="first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]">
              Quand on parle d'immobilier, beaucoup imaginent immédiatement des visites, des panneaux "À vendre" ou encore des négociations.
            </p>
            <p>Mais avec les années, j'ai compris une chose essentielle : l'immobilier n'est pas simplement un métier de transaction. C'est avant tout un métier profondément humain.</p>
            <p>Derrière chaque vente, chaque achat ou chaque projet, il y a une histoire de vie, des émotions, des changements importants et parfois même de véritables tournants personnels.</p>
            <p>C'est précisément cette dimension humaine qui m'a toujours passionnée dans ce métier.</p>
            <p>Aujourd'hui, le métier de conseiller immobilier indépendant évolue énormément. Les clients changent, les outils changent, les habitudes changent… et notre manière de travailler évolue elle aussi.</p>
            <p>Nous sommes entrés dans une nouvelle génération de l'immobilier : plus digitale, plus libre, plus humaine et surtout beaucoup plus proche des besoins réels des clients.</p>
          </div>
        </section>

        {/* CARTE AUTEUR — juste après le paragraphe "nouvelle génération" */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-[900px] bg-white rounded-3xl shadow-xl overflow-hidden border border-border/40 animate-fade-in">
              <div className="grid md:grid-cols-[280px_1fr] gap-0">
                <div className="relative bg-sand">
                  <img src={patriciaPortrait.url} alt="Patricia Vieira" className="w-full h-full object-cover aspect-square md:aspect-auto" loading="lazy" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <p className="font-body text-[11px] uppercase tracking-[0.3em] text-primary mb-3">L'auteure</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-1">Patricia Vieira</h2>
                  <p className="font-body text-base text-foreground/80">Conseillère immobilier indépendante</p>
                  <p className="font-body text-base text-foreground/80 mb-5">Manager et formatrice</p>
                  <div className="h-px w-12 bg-primary mb-5" />
                  <p className="font-display italic text-lg md:text-xl text-foreground/90 leading-relaxed">
                    « Depuis de nombreuses années, j'accompagne vendeurs, acquéreurs et futurs conseillers immobiliers dans leurs projets immobiliers et professionnels. »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE — rendez-vous client */}
        <FullImage src={visiteImg} alt="Rendez-vous client immobilier" />

        {/* H2 — RECONVERSION */}
        <SectionH2 id="reconversion" eyebrow="01 · Reconversion" title="Un métier qui attire de plus en plus de personnes en reconversion" />
        <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed">
          <p>Depuis plusieurs années, je rencontre énormément de personnes qui souhaitent changer de vie professionnelle.</p>
          <p>Certaines viennent du commerce, d'autres du salariat, de la restauration, du management ou encore de l'entrepreneuriat.</p>
          <p>Beaucoup recherchent finalement la même chose :</p>
        </div>
        <div className="container mx-auto max-w-5xl px-4 mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {reconversionCards.map(({ icon: Icon, title }) => (
            <Card key={title} icon={Icon} title={title} />
          ))}
        </div>
        <div className="container mx-auto max-w-3xl px-4 mt-10 space-y-5 font-body text-lg leading-relaxed pb-20">
          <p>L'immobilier indépendant attire aujourd'hui parce qu'il permet de construire quelque chose qui nous ressemble.</p>
          <p>Mais il faut être honnête :<br />ce métier demande aussi beaucoup d'implication personnelle.</p>
        </div>

        {/* BANDEAU PLEINE LARGEUR — La liberté a un prix */}
        <section id="liberte" className="w-full bg-navy py-20 md:py-32 text-center">
          <div className="container mx-auto max-w-5xl px-4">
            <Quote className="w-12 h-12 text-primary mx-auto mb-8 opacity-60" />
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-navy-foreground leading-[1.1]">
              La liberté a un prix :<br /><span className="italic text-primary">celui de la régularité</span>
            </h2>
          </div>
        </section>

        <div className="container mx-auto max-w-3xl px-4 py-16 space-y-5 font-body text-lg leading-relaxed">
          <p>Quand on devient conseiller immobilier indépendant, personne ne nous impose nos horaires.</p>
          <p>Et c'est justement là toute la différence.</p>
          <p>Cette liberté est incroyable… mais elle demande aussi énormément de discipline.</p>
          <p>Dans ce métier, il faut apprendre à :</p>
        </div>
        <div className="container mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-5 gap-4 pb-16">
          {disciplineCards.map(({ icon: Icon, title }) => (
            <Card key={title} icon={Icon} title={title} compact />
          ))}
        </div>
        <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed pb-20">
          <p>Les personnes qui réussissent durablement dans l'immobilier sont rarement celles qui cherchent des résultats rapides.</p>
          <p>Ce sont souvent celles qui construisent leur réputation avec patience, honnêteté et régularité.</p>
        </div>

        {/* IMAGE — visite immobilière */}
        <FullImage src={estimationImg} alt="Visite immobilière" />

        {/* H2 — METIER A CHANGE */}
        <SectionH2 id="metier-change" eyebrow="02 · Évolution" title="Le métier immobilier a profondément changé" />
        <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed">
          <p>L'époque où une simple vitrine d'agence suffisait à générer des contacts est largement révolue.</p>
          <p>Aujourd'hui, les vendeurs et les acquéreurs recherchent principalement leurs informations :</p>
        </div>
        <div className="container mx-auto max-w-6xl px-4 mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {chiffresCles.map(({ icon: Icon, label }) => (
            <Card key={label} icon={Icon} title={label} compact />
          ))}
        </div>
        <div className="container mx-auto max-w-3xl px-4 mt-10 space-y-5 font-body text-lg leading-relaxed">
          <p>Le conseiller immobilier moderne doit donc être capable d'allier :</p>
        </div>
        <div className="container mx-auto max-w-5xl px-4 mt-6 grid grid-cols-2 lg:grid-cols-4 gap-5 pb-16">
          {competencesModerne.map(({ icon: Icon, title }) => (
            <Card key={title} icon={Icon} title={title} />
          ))}
        </div>

        {/* BANNIÈRE PLEINE LARGEUR — Le digital ne remplacera jamais l'humain */}
        <section id="digital" className="relative w-full overflow-hidden py-24 md:py-36">
          <div className="absolute inset-0">
            <img src={lifestyleImg} alt="" className="w-full h-full object-cover" aria-hidden />
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-md" />
          </div>
          <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center">
            <Heart className="w-14 h-14 text-primary mx-auto mb-8" strokeWidth={1.5} />
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-navy-foreground leading-[1.1]">
              Le digital ne remplacera<br /><span className="italic text-primary">jamais l'humain</span>
            </h2>
          </div>
        </section>

        <div className="container mx-auto max-w-3xl px-4 py-16 space-y-5 font-body text-lg leading-relaxed">
          <p>Même si les outils évoluent très vite, une chose ne changera jamais :<br />les clients ont besoin de confiance.</p>
          <p>Acheter ou vendre un bien immobilier représente souvent un moment important dans une vie.</p>
          <p>Les clients ne recherchent pas simplement un professionnel capable de publier une annonce.</p>
          <p>Ils recherchent surtout quelqu'un :</p>
        </div>
        <div className="container mx-auto max-w-5xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-5 pb-16">
          {clientsRecherche.map(({ icon: Icon, title }) => (
            <Card key={title} icon={Icon} title={title} />
          ))}
        </div>
        <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed pb-20">
          <p>C'est cette proximité humaine qui fait, selon moi, toute la beauté du métier.</p>
        </div>

        {/* IMAGE — accompagnement client */}
        <FullImage src={equipeImg} alt="Accompagnement client" />

        {/* H2 — RÉSEAUX */}
        <SectionH2 id="reseaux" eyebrow="03 · Réseaux" title="Pourquoi les réseaux de mandataires immobiliers se développent autant ?" />
        <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed">
          <p>Les réseaux immobiliers indépendants séduisent aujourd'hui énormément de professionnels.</p>
          <p>Et cela s'explique assez facilement.</p>
          <p>Beaucoup de conseillers souhaitent :</p>
        </div>
        <div className="container mx-auto max-w-6xl px-4 mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 pb-12">
          {reseauxAttraits.map(({ icon: Icon, title }) => (
            <Card key={title} icon={Icon} title={title} compact />
          ))}
        </div>
        <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed pb-20">
          <p>Ce modèle entrepreneurial correspond davantage aux nouvelles attentes du monde du travail.</p>
        </div>

        {/* H2 — LONG TERME */}
        <SectionH2 id="long-terme" eyebrow="04 · Durabilité" title="Construire une activité sur le long terme" />
        <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed">
          <p>Ce que j'aime particulièrement dans l'immobilier indépendant, c'est la possibilité de construire une activité durable.</p>
          <p>Avec le temps, la confiance des clients, les recommandations et le bouche-à-oreille deviennent une véritable force.</p>
          <p>Un client satisfait peut :</p>
        </div>
        <div className="container mx-auto max-w-5xl px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 pb-12">
          {ambassadeurs.map(({ icon: Icon, title }) => (
            <Card key={title} icon={Icon} title={title} />
          ))}
        </div>
        <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed pb-20">
          <p>Dans ce métier, la réputation reste l'un des plus beaux leviers de développement.</p>
        </div>

        {/* H2 — QUALITÉS */}
        <SectionH2 id="qualites" eyebrow="05 · Qualités" title="Les qualités qui font vraiment la différence dans l'immobilier" />
        <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg leading-relaxed">
          <p>Contrairement à ce que l'on pourrait croire, réussir dans l'immobilier ne dépend pas uniquement du talent commercial.</p>
          <p>Les qualités les plus importantes sont souvent :</p>
        </div>
        <div className="container mx-auto max-w-5xl px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {qualites.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <p className="font-display text-xl font-semibold text-foreground mb-1">{title}</p>
              <p className="font-body text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="container mx-auto max-w-3xl px-4 mt-10 space-y-5 font-body text-lg leading-relaxed pb-20">
          <p>Les clients ressentent immédiatement quand une relation est sincère.</p>
          <p>Et c'est souvent cette sincérité qui crée les plus belles collaborations.</p>
        </div>

        {/* SÉPARATEUR PREMIUM — CONCLUSION */}
        <section id="conclusion" className="w-full bg-sand/70 py-20 md:py-28 border-y border-border/40">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-primary" />
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="h-px w-12 bg-primary" />
            </div>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-6">Conclusion</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1]">
              Un métier exigeant<br /><span className="italic text-primary">mais profondément enrichissant</span>
            </h2>
          </div>
        </section>

        <div className="container mx-auto max-w-3xl px-4 py-16 space-y-5 font-body text-lg leading-relaxed">
          <p>L'immobilier indépendant n'est pas un métier "facile".</p>
          <p>C'est un métier qui demande du travail, de l'implication et une grande capacité relationnelle.</p>
          <p>Mais c'est aussi un métier incroyablement vivant, stimulant et humain.</p>
          <p>Chaque rencontre, chaque projet et chaque accompagnement rendent ce quotidien différent.</p>
          <p>Et pour toutes les personnes qui aiment le contact humain, l'autonomie et l'entrepreneuriat, l'immobilier peut devenir bien plus qu'un simple métier :<br />une véritable aventure de vie.</p>
        </div>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-primary/70" />
          <div className="relative z-10 container mx-auto max-w-4xl px-4 py-20 md:py-28 text-center">
            <Users className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy-foreground leading-tight">
              Et si votre prochaine aventure commençait aujourd'hui&nbsp;?
            </h2>
            <p className="font-body text-base md:text-lg text-navy-foreground/80 mt-6 max-w-2xl mx-auto">
              Je serais ravie d'échanger avec vous autour de vos projets immobiliers ou professionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Me contacter <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-navy-foreground border-navy-foreground hover:bg-navy-foreground hover:text-navy" asChild>
                <Link to="/a-propos">Découvrir mon parcours</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

const SectionH2 = ({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) => (
  <section id={id} className="pt-20 pb-10 scroll-mt-24">
    <div className="container mx-auto max-w-3xl px-4 text-center">
      <p className="font-body text-[11px] uppercase tracking-[0.4em] text-primary mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-[1.15]">
        {title}
      </h2>
      <div className="mx-auto mt-6 w-16 h-0.5 bg-gradient-to-r from-primary to-gold" />
    </div>
  </section>
);

const Card = ({ icon: Icon, title, compact = false }: { icon: any; title: string; compact?: boolean }) => (
  <div className={`group bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center ${compact ? "p-4" : "p-6"}`}>
    <div className={`rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors ${compact ? "w-10 h-10" : "w-12 h-12 mb-4"}`}>
      <Icon className={compact ? "w-5 h-5" : "w-6 h-6"} />
    </div>
    <p className={`font-display font-semibold text-foreground ${compact ? "text-sm md:text-base" : "text-lg"}`}>{title}</p>
  </div>
);

const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full overflow-hidden">
    <img src={src} alt={alt} className="w-full h-[40vh] md:h-[55vh] object-cover" loading="lazy" />
  </div>
);

export default PourquoiImmobilierIndependant;
