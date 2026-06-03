import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Sparkles, Compass, Heart, Users, Trophy, Globe,
  Smartphone, Video, Handshake, Home, Ear, HeartHandshake, Repeat,
  Clock, Shield, Quote,
} from "lucide-react";

import heroImg from "@/assets/blog-header.jpg";
import patriciaPortrait from "@/assets/patricia-vieira-portrait.png.asset.json";
import visiteImg from "@/assets/equipe-terrain.jpg";
import estimationImg from "@/assets/cover-estimation.jpg";
import equipeImg from "@/assets/equipe-celebration.jpg";
import lifestyleImg from "@/assets/rejoindre-lifestyle.jpg";

const sections = [
  { id: "reconversion", label: "Un métier qui attire en reconversion" },
  { id: "metier-change", label: "Le métier immobilier a profondément changé" },
  { id: "reseaux", label: "Pourquoi les réseaux de mandataires se développent" },
  { id: "qualites", label: "Les qualités qui font la différence" },
  { id: "conclusion", label: "Conclusion : un métier enrichissant" },
];

const reconversionCards = [
  { icon: Sparkles, title: "Plus de liberté" },
  { icon: Compass, title: "Plus d'autonomie" },
  { icon: Trophy, title: "Plus de reconnaissance" },
  { icon: Heart, title: "Une activité qui a du sens" },
];

const chiffresCles = [
  { icon: Globe, label: "Internet" },
  { icon: Smartphone, label: "Réseaux sociaux" },
  { icon: Video, label: "Vidéo immobilière" },
  { icon: Handshake, label: "Relation humaine" },
  { icon: Home, label: "Accompagnement personnalisé" },
];

const qualites = [
  { icon: Ear, title: "Écoute", desc: "Comprendre avant de proposer." },
  { icon: HeartHandshake, title: "Empathie", desc: "Se mettre à la place de l'autre." },
  { icon: Repeat, title: "Adaptation", desc: "S'ajuster à chaque profil." },
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

      {/* Barre de progression de lecture */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article className="premium-magazine text-foreground">
        {/* HERO */}
        <section className="relative w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Immobilier indépendant — Patricia Vieira"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/85" />
          <div className="relative z-10 container mx-auto max-w-4xl px-4 py-28 md:py-40 text-center animate-fade-in">
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-6">
              Réflexion · Métier · Aventure
            </p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-navy-foreground leading-tight">
              Pourquoi j'ai choisi l'immobilier indépendant : bien plus qu'un métier, une aventure humaine
            </h1>
            <p className="font-body text-base md:text-xl text-navy-foreground/85 mt-8 max-w-2xl mx-auto leading-relaxed">
              Une réflexion personnelle sur un métier qui a profondément changé ma vie professionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button variant="hero" size="lg" asChild>
                <a href="#article">Découvrir l'article <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-navy-foreground border-navy-foreground hover:bg-navy-foreground hover:text-navy" asChild>
                <Link to="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SOMMAIRE */}
        <section className="bg-sand/40 border-y border-border/40">
          <div className="container mx-auto max-w-4xl px-4 py-10">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-4 text-center">Sommaire</p>
            <ol className="grid md:grid-cols-2 gap-3">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-background transition-colors"
                  >
                    <span className="font-display text-primary text-lg shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-body text-foreground group-hover:text-primary transition-colors">{s.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="article" className="section-padding">
          <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <p>
              Quand on parle d'immobilier, beaucoup imaginent immédiatement des visites, des panneaux "À vendre" ou encore des négociations.
            </p>
            <p>
              Mais avec les années, j'ai compris une chose essentielle :
              l'immobilier n'est pas simplement un métier de transaction.
              C'est avant tout un métier profondément humain.
            </p>
            <p>
              Derrière chaque vente, chaque achat ou chaque projet, il y a une histoire de vie, des émotions, des changements importants et parfois même de véritables tournants personnels.
            </p>
            <p>
              C'est précisément cette dimension humaine qui m'a toujours passionnée dans ce métier.
            </p>
            <p>
              Aujourd'hui, le métier de conseiller immobilier indépendant évolue énormément. Les clients changent, les outils changent, les habitudes changent… et notre manière de travailler évolue elle aussi.
            </p>
            <p>
              Nous sommes entrés dans une nouvelle génération de l'immobilier : plus digitale, plus libre, plus humaine et surtout beaucoup plus proche des besoins réels des clients.
            </p>
          </div>
        </section>

        {/* PERSONAL BRANDING - PATRICIA */}
        <section className="pb-12">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="bg-sand/40 rounded-2xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row gap-8 items-center animate-fade-in">
              <img
                src={patriciaPortrait.url}
                alt="Patricia Vieira, conseillère immobilier indépendante"
                className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl shadow-md shrink-0"
                loading="lazy"
              />
              <div className="text-center md:text-left">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-1">Patricia Vieira</h2>
                <p className="font-body text-sm text-primary uppercase tracking-wider mb-4">
                  Conseillère immobilier indépendante · Manager et formatrice
                </p>
                <blockquote className="font-display italic text-lg md:text-xl text-foreground/85 leading-relaxed border-l-2 border-primary pl-4">
                  « J'accompagne depuis de nombreuses années des vendeurs, acquéreurs et futurs conseillers immobiliers dans la réalisation de leurs projets. »
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* PULL QUOTE 1 */}
        <PullQuote text="L'immobilier n'est pas simplement un métier de transaction." />

        {/* H2 - RECONVERSION */}
        <section id="reconversion" className="section-padding">
          <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2 leading-tight">
              Un métier qui attire de plus en plus de personnes en reconversion
            </h2>
            <div className="section-divider mb-8" />
            <p>Depuis plusieurs années, je rencontre énormément de personnes qui souhaitent changer de vie professionnelle.</p>
            <p>Certaines viennent du commerce, d'autres du salariat, de la restauration, du management ou encore de l'entrepreneuriat.</p>
            <p>Beaucoup recherchent finalement la même chose :</p>
          </div>

          <div className="container mx-auto max-w-5xl px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reconversionCards.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="group bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="font-display text-lg font-semibold text-foreground">{title}</p>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg text-foreground leading-relaxed mt-8">
            <p>L'immobilier indépendant attire aujourd'hui parce qu'il permet de construire quelque chose qui nous ressemble.</p>
            <p>Mais il faut être honnête :<br />ce métier demande aussi beaucoup d'implication personnelle.</p>
          </div>

          <BlockQuote text="« La confiance est la véritable monnaie de l'immobilier. »" />

          <div className="container mx-auto max-w-3xl px-4 mt-12 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-2">
              La liberté a un prix : celui de la régularité
            </h3>
            <p>Quand on devient conseiller immobilier indépendant, personne ne nous impose nos horaires.</p>
            <p>Et c'est justement là toute la différence.</p>
            <p>Cette liberté est incroyable… mais elle demande aussi énormément de discipline.</p>
            <p>Dans ce métier, il faut apprendre à :</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>gérer son temps,</li>
              <li>organiser ses journées,</li>
              <li>développer sa visibilité,</li>
              <li>entretenir sa motivation,</li>
              <li>et surtout rester constant même quand tout ne va pas comme prévu.</li>
            </ul>
            <p>Les personnes qui réussissent durablement dans l'immobilier sont rarement celles qui cherchent des résultats rapides.</p>
            <p>Ce sont souvent celles qui construisent leur réputation avec patience, honnêteté et régularité.</p>
          </div>
        </section>

        <PullQuote text="La liberté a un prix : celui de la régularité." />

        {/* Image entre sections */}
        <FullImage src={visiteImg} alt="Visite immobilière" />

        {/* H2 - METIER A CHANGE */}
        <section id="metier-change" className="section-padding">
          <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2 leading-tight">
              Le métier immobilier a profondément changé
            </h2>
            <div className="section-divider mb-8" />
            <p>L'époque où une simple vitrine d'agence suffisait à générer des contacts est largement révolue.</p>
            <p>Aujourd'hui, les vendeurs et les acquéreurs recherchent principalement leurs informations :</p>
          </div>

          {/* Bandeau chiffres clés */}
          <div className="container mx-auto max-w-6xl px-4 mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {chiffresCles.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-card rounded-xl p-5 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <Icon className="w-7 h-7 text-primary mx-auto mb-3" />
                <p className="font-body text-sm font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-3xl px-4 mt-10 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <p>Le conseiller immobilier moderne doit donc être capable d'allier :</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>relation humaine,</li>
              <li>communication digitale,</li>
              <li>présence terrain,</li>
              <li>et accompagnement personnalisé.</li>
            </ul>
          </div>

          <BlockQuote text="« L'immobilier n'est pas seulement une affaire de biens. C'est avant tout une affaire de personnes. »" />

          <div className="container mx-auto max-w-3xl px-4 mt-12 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-2">
              Le digital ne remplacera jamais l'humain
            </h3>
            <p>Même si les outils évoluent très vite, une chose ne changera jamais :<br />les clients ont besoin de confiance.</p>
            <p>Acheter ou vendre un bien immobilier représente souvent un moment important dans une vie.</p>
            <p>Les clients ne recherchent pas simplement un professionnel capable de publier une annonce.</p>
            <p>Ils recherchent surtout quelqu'un :</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>qui les écoute,</li>
              <li>qui les rassure,</li>
              <li>qui les conseille avec sincérité,</li>
              <li>et qui reste présent tout au long du projet.</li>
            </ul>
            <p>C'est cette proximité humaine qui fait, selon moi, toute la beauté du métier.</p>
          </div>
        </section>

        <PullQuote text="Le digital ne remplacera jamais l'humain." />

        <FullImage src={estimationImg} alt="Estimation immobilière" />

        {/* H2 - RÉSEAUX */}
        <section id="reseaux" className="section-padding">
          <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2 leading-tight">
              Pourquoi les réseaux de mandataires immobiliers se développent autant&nbsp;?
            </h2>
            <div className="section-divider mb-8" />
            <p>Les réseaux immobiliers indépendants séduisent aujourd'hui énormément de professionnels.</p>
            <p>Et cela s'explique assez facilement.</p>
            <p>Beaucoup de conseillers souhaitent :</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>retrouver davantage de liberté,</li>
              <li>développer leur propre image,</li>
              <li>bénéficier d'outils modernes,</li>
              <li>travailler plus librement,</li>
              <li>et parfois même construire leur propre équipe.</li>
            </ul>
            <p>Ce modèle entrepreneurial correspond davantage aux nouvelles attentes du monde du travail.</p>

            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-8 mb-2">
              Construire une activité sur le long terme
            </h3>
            <p>Ce que j'aime particulièrement dans l'immobilier indépendant, c'est la possibilité de construire une activité durable.</p>
            <p>Avec le temps, la confiance des clients, les recommandations et le bouche-à-oreille deviennent une véritable force.</p>
            <p>Un client satisfait peut :</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>vous recommander à son entourage,</li>
              <li>vous rappeler plusieurs années plus tard,</li>
              <li>ou devenir un véritable ambassadeur de votre travail.</li>
            </ul>
            <p>Dans ce métier, la réputation reste l'un des plus beaux leviers de développement.</p>
          </div>
        </section>

        <BlockQuote text="« Un client satisfait peut devenir un véritable ambassadeur de votre travail. »" />

        <FullImage src={equipeImg} alt="Équipe Patricia Vieira" />

        {/* H2 - QUALITÉS */}
        <section id="qualites" className="section-padding">
          <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2 leading-tight">
              Les qualités qui font vraiment la différence dans l'immobilier
            </h2>
            <div className="section-divider mb-8" />
            <p>Contrairement à ce que l'on pourrait croire, réussir dans l'immobilier ne dépend pas uniquement du talent commercial.</p>
            <p>Les qualités les plus importantes sont souvent :</p>
          </div>

          <div className="container mx-auto max-w-5xl px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {qualites.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="font-display text-xl font-semibold text-foreground mb-1">{title}</p>
                <p className="font-body text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-3xl px-4 mt-10 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <p>Les clients ressentent immédiatement quand une relation est sincère.</p>
            <p>Et c'est souvent cette sincérité qui crée les plus belles collaborations.</p>
          </div>
        </section>

        <FullImage src={lifestyleImg} alt="Lifestyle entrepreneur immobilier" />

        {/* CONCLUSION */}
        <section id="conclusion" className="section-padding">
          <div className="container mx-auto max-w-3xl px-4 space-y-5 font-body text-lg text-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2 leading-tight">
              Conclusion : un métier exigeant… mais profondément enrichissant
            </h2>
            <div className="section-divider mb-8" />
            <p>L'immobilier indépendant n'est pas un métier "facile".</p>
            <p>C'est un métier qui demande du travail, de l'implication et une grande capacité relationnelle.</p>
            <p>Mais c'est aussi un métier incroyablement vivant, stimulant et humain.</p>
            <p>Chaque rencontre, chaque projet et chaque accompagnement rendent ce quotidien différent.</p>
            <p>Et pour toutes les personnes qui aiment le contact humain, l'autonomie et l'entrepreneuriat, l'immobilier peut devenir bien plus qu'un simple métier :<br />une véritable aventure de vie.</p>
          </div>
        </section>

        <PullQuote text="Une véritable aventure de vie." />

        {/* CTA FINAL */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-primary/70" />
          <div className="relative z-10 container mx-auto max-w-4xl px-4 py-20 md:py-28 text-center">
            <Users className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy-foreground leading-tight">
              Et si votre prochaine aventure professionnelle commençait aujourd'hui&nbsp;?
            </h2>
            <p className="font-body text-base md:text-lg text-navy-foreground/80 mt-6 max-w-2xl mx-auto">
              Échangeons sur votre projet, vos envies et la manière dont je peux vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Échanger avec moi <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

const PullQuote = ({ text }: { text: string }) => (
  <section className="py-16 md:py-24 bg-sand/40">
    <div className="container mx-auto max-w-4xl px-4 text-center animate-fade-in">
      <p className="font-display italic text-2xl md:text-4xl lg:text-5xl text-foreground leading-snug">
        {text}
      </p>
    </div>
  </section>
);

const BlockQuote = ({ text }: { text: string }) => (
  <div className="container mx-auto max-w-3xl px-4 mt-10">
    <blockquote className="relative bg-primary/5 border-l-4 border-primary rounded-r-xl p-8 md:p-10">
      <Quote className="absolute -top-4 left-6 w-10 h-10 text-primary/30" />
      <p className="font-display italic text-xl md:text-2xl text-foreground leading-relaxed">
        {text}
      </p>
    </blockquote>
  </div>
);

const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full overflow-hidden">
    <img src={src} alt={alt} className="w-full h-[40vh] md:h-[55vh] object-cover" loading="lazy" />
  </div>
);

export default PourquoiImmobilierIndependant;
