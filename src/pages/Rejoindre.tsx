import { useState } from "react";
import PageSEO from "@/components/PageSEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  ArrowRight, Building2, Users, Briefcase, Heart,
  MapPin, Laptop, Star, GraduationCap, Wrench, UserPlus,
  CheckCircle2, Quote, ChevronRight, Facebook, Linkedin
} from "lucide-react";

import heroImg from "@/assets/rejoindre-hero-cover.jpg";
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
    <>
      <PageSEO
        title="Devenir Conseiller Immobilier IAD France — Rejoindre l'Équipe Patricia Vieira"
        description="Envie de devenir conseiller immobilier indépendant ? Patricia Vieira vous accompagne dans votre reconversion avec IAD France. Formation, coaching, réseau national."
        canonical="/rejoindre"
      />
    <div>
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


      {/* 6. POURQUOI ME REJOINDRE */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          {/* Intro texte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg">
              <img src={formationImg} alt="Formation et accompagnement" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">L'accompagnement</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#111111] mb-6">
                Pourquoi me rejoindre ?
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <div className="space-y-4 font-body text-[#111111] leading-relaxed text-[1.05rem]">
                <p>Rejoindre mon équipe, ce n'est pas simplement exercer un métier…</p>
                <p className="font-medium">C'est construire votre propre projet de vie, à votre rythme, avec un accompagnement réel.</p>
                <p>Depuis plus de 11 ans, j'accompagne des femmes et des hommes à se lancer, évoluer et réussir dans l'immobilier.</p>
                <p>Mon rôle n'est pas seulement de vous former, mais de vous guider, vous soutenir et vous faire grandir à chaque étape.</p>
                <p className="font-semibold text-primary">Ici, vous n'êtes jamais seul(e).</p>
              </div>
            </div>
          </div>

          {/* 4 blocs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {[
              {
                icon: Heart,
                title: "Un accompagnement humain et personnalisé",
                desc: "Je prends le temps de comprendre votre parcours, vos objectifs et vos freins. Chaque personne est unique, et mon accompagnement s'adapte à vous, pas l'inverse."
              },
              {
                icon: Star,
                title: "Un cadre pour réussir et évoluer",
                desc: "Formations, outils, méthodes éprouvées : vous bénéficiez d'un environnement structuré pour monter en compétences rapidement et durablement."
              },
              {
                icon: Briefcase,
                title: "Un véritable projet entrepreneurial",
                desc: "Vous ne cherchez pas un emploi, vous construisez votre propre activité. Avec le modèle iad, vous développez un fonds de commerce qui vous appartient."
              },
              {
                icon: Users,
                title: "Une équipe qui avance ensemble",
                desc: "L'entraide, le partage d'expérience et l'énergie collective sont au cœur de notre fonctionnement. Vous évoluez entouré(e), jamais isolé(e)."
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border/40 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#111111] mb-3">{item.title}</h3>
                <p className="font-body text-[#111111]/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Phrase finale */}
          <div className="text-center">
            <p className="font-display text-xl italic text-[#111111]">
              « Votre réussite devient aussi la mienne. »
            </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "Patricia est passionnée par son métier et ce qui fait d'elle une excellente formatrice habilitée au sein du réseau IAD. Merci à toi pour ton partage de connaissances et pour ce temps que tu passes gracieusement à nous former ! Ton expérience et ta pédagogie sont précieux pour tous ceux qui, comme moi, souhaitent développer leurs compétences dans l'immobilier.",
                name: "Laura B.",
                role: "Conseillère depuis 2023",
                stars: 5
              },
              {
                quote: "Patricia est toujours présente pour aider ses équipes, et met son dynamisme et sa volonté au service de notre réussite. Elle est toujours en recherche de solutions pour fédérer et faire progresser ses équipes, c'est une chance de l'avoir comme manager. Je vous la recommande que ce soit pour un projet d'achat ou de vente sur Gretz-Armainvilliers et alentours ou pour vous accompagner dans votre reconversion professionnelle dans l'immobilier.",
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

      {/* ARTICLE PREMIUM */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <article className="prose-article">
            <header className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-5">Le métier</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight mb-6">
                Pourquoi j'ai choisi l'immobilier indépendant : bien plus qu'un métier, une aventure humaine
              </h2>
              <div className="section-divider" />
            </header>

            <div className="space-y-6 font-body text-[1.0625rem] md:text-[1.125rem] leading-[1.85] text-[#111111]">
              <p>Quand on parle d'immobilier, beaucoup imaginent immédiatement des visites, des panneaux « À vendre » ou encore des négociations.</p>
              <p>Mais avec les années, j'ai compris une chose essentielle : l'immobilier n'est pas simplement un métier de transaction. C'est avant tout un métier profondément humain.</p>
              <p>Derrière chaque vente, chaque achat ou chaque projet, il y a une histoire de vie, des émotions, des changements importants et parfois même de véritables tournants personnels.</p>
              <p>C'est précisément cette dimension humaine qui m'a toujours passionnée dans ce métier.</p>
              <p>Aujourd'hui, le métier de conseiller immobilier indépendant évolue énormément. Les clients changent, les outils changent, les habitudes changent… et notre manière de travailler évolue elle aussi.</p>
              <p>Nous sommes entrés dans une nouvelle génération de l'immobilier : plus digitale, plus libre, plus humaine et surtout beaucoup plus proche des besoins réels des clients.</p>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#111111] !mt-14 !mb-5">Un métier qui attire de plus en plus de personnes en reconversion</h2>
              <p>Depuis plusieurs années, je rencontre énormément de personnes qui souhaitent changer de vie professionnelle.</p>
              <p>Certaines viennent du commerce, d'autres du salariat, de la restauration, du management ou encore de l'entrepreneuriat.</p>
              <p>Beaucoup recherchent finalement la même chose :</p>
              <ul className="space-y-2 pl-6 list-disc marker:text-primary">
                <li>plus de liberté,</li>
                <li>plus d'autonomie,</li>
                <li>plus de reconnaissance,</li>
                <li>et une activité qui ait réellement du sens.</li>
              </ul>
              <p>L'immobilier indépendant attire aujourd'hui parce qu'il permet de construire quelque chose qui nous ressemble.</p>
              <p>Mais il faut être honnête : ce métier demande aussi beaucoup d'implication personnelle.</p>

              <h3 className="font-display text-xl md:text-2xl font-semibold text-[#111111] !mt-12 !mb-4">La liberté a un prix : celui de la régularité</h3>
              <p>Quand on devient conseiller immobilier indépendant, personne ne nous impose nos horaires.</p>
              <p>Et c'est justement là toute la différence.</p>
              <p>Cette liberté est incroyable… mais elle demande aussi énormément de discipline.</p>
              <p>Dans ce métier, il faut apprendre à :</p>
              <ul className="space-y-2 pl-6 list-disc marker:text-primary">
                <li>gérer son temps,</li>
                <li>organiser ses journées,</li>
                <li>développer sa visibilité,</li>
                <li>entretenir sa motivation,</li>
                <li>et surtout rester constant même quand tout ne va pas comme prévu.</li>
              </ul>
              <p>Les personnes qui réussissent durablement dans l'immobilier sont rarement celles qui cherchent des résultats rapides.</p>
              <p>Ce sont souvent celles qui construisent leur réputation avec patience, honnêteté et régularité.</p>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#111111] !mt-14 !mb-5">Le métier immobilier a profondément changé</h2>
              <p>L'époque où une simple vitrine d'agence suffisait à générer des contacts est largement révolue.</p>
              <p>Aujourd'hui, les vendeurs et les acquéreurs recherchent principalement leurs informations :</p>
              <ul className="space-y-2 pl-6 list-disc marker:text-primary">
                <li>sur internet,</li>
                <li>sur les réseaux sociaux,</li>
                <li>sur les portails immobiliers,</li>
                <li>ou via des vidéos et contenus digitaux.</li>
              </ul>
              <p>Le conseiller immobilier moderne doit donc être capable d'allier :</p>
              <ul className="space-y-2 pl-6 list-disc marker:text-primary">
                <li>relation humaine,</li>
                <li>communication digitale,</li>
                <li>présence terrain,</li>
                <li>et accompagnement personnalisé.</li>
              </ul>

              <h3 className="font-display text-xl md:text-2xl font-semibold text-[#111111] !mt-12 !mb-4">Le digital ne remplacera jamais l'humain</h3>
              <p>Même si les outils évoluent très vite, une chose ne changera jamais : les clients ont besoin de confiance.</p>
              <p>Acheter ou vendre un bien immobilier représente souvent un moment important dans une vie.</p>
              <p>Les clients ne recherchent pas simplement un professionnel capable de publier une annonce.</p>
              <p>Ils recherchent surtout quelqu'un :</p>
              <ul className="space-y-2 pl-6 list-disc marker:text-primary">
                <li>qui les écoute,</li>
                <li>qui les rassure,</li>
                <li>qui les conseille avec sincérité,</li>
                <li>et qui reste présent tout au long du projet.</li>
              </ul>
              <p>C'est cette proximité humaine qui fait, selon moi, toute la beauté du métier.</p>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#111111] !mt-14 !mb-5">Pourquoi les réseaux de mandataires immobiliers se développent autant ?</h2>
              <p>Les réseaux immobiliers indépendants séduisent aujourd'hui énormément de professionnels.</p>
              <p>Et cela s'explique assez facilement.</p>
              <p>Beaucoup de conseillers souhaitent :</p>
              <ul className="space-y-2 pl-6 list-disc marker:text-primary">
                <li>retrouver davantage de liberté,</li>
                <li>développer leur propre image,</li>
                <li>bénéficier d'outils modernes,</li>
                <li>travailler plus librement,</li>
                <li>et parfois même construire leur propre équipe.</li>
              </ul>
              <p>Ce modèle entrepreneurial correspond davantage aux nouvelles attentes du monde du travail.</p>

              <h3 className="font-display text-xl md:text-2xl font-semibold text-[#111111] !mt-12 !mb-4">Construire une activité sur le long terme</h3>
              <p>Ce que j'aime particulièrement dans l'immobilier indépendant, c'est la possibilité de construire une activité durable.</p>
              <p>Avec le temps, la confiance des clients, les recommandations et le bouche-à-oreille deviennent une véritable force.</p>
              <p>Un client satisfait peut :</p>
              <ul className="space-y-2 pl-6 list-disc marker:text-primary">
                <li>vous recommander à son entourage,</li>
                <li>vous rappeler plusieurs années plus tard,</li>
                <li>ou devenir un véritable ambassadeur de votre travail.</li>
              </ul>
              <p>Dans ce métier, la réputation reste l'un des plus beaux leviers de développement.</p>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#111111] !mt-14 !mb-5">Les qualités qui font vraiment la différence dans l'immobilier</h2>
              <p>Contrairement à ce que l'on pourrait croire, réussir dans l'immobilier ne dépend pas uniquement du talent commercial.</p>
              <p>Les qualités les plus importantes sont souvent :</p>
              <ul className="space-y-2 pl-6 list-disc marker:text-primary">
                <li>l'écoute,</li>
                <li>l'empathie,</li>
                <li>la capacité d'adaptation,</li>
                <li>la régularité,</li>
                <li>la résilience,</li>
                <li>et l'authenticité.</li>
              </ul>
              <p>Les clients ressentent immédiatement quand une relation est sincère.</p>
              <p>Et c'est souvent cette sincérité qui crée les plus belles collaborations.</p>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#111111] !mt-14 !mb-5">Conclusion : un métier exigeant… mais profondément enrichissant</h2>
              <p>L'immobilier indépendant n'est pas un métier « facile ».</p>
              <p>C'est un métier qui demande du travail, de l'implication et une grande capacité relationnelle.</p>
              <p>Mais c'est aussi un métier incroyablement vivant, stimulant et humain.</p>
              <p>Chaque rencontre, chaque projet et chaque accompagnement rendent ce quotidien différent.</p>
              <p className="font-display text-xl md:text-2xl italic text-primary !mt-10 leading-relaxed">
                Et pour toutes les personnes qui aiment le contact humain, l'autonomie et l'entrepreneuriat, l'immobilier peut devenir bien plus qu'un simple métier : une véritable aventure de vie.
              </p>
            </div>
          </article>
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

          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://www.facebook.com/patriciavieiraimmobilier/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-2 px-5 py-3 bg-card rounded-xl border border-border/40 text-sm font-body text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <Facebook className="w-5 h-5" /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/patriciavieiraiad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-card rounded-xl border border-border/40 text-sm font-body text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Rejoindre;
