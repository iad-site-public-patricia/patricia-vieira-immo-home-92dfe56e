import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, FileCheck, Users, Home, ShoppingBag, Briefcase, ArrowRight, Star, Quote, Target, Sparkles, Megaphone, UserCheck, Shield, HandshakeIcon, MessageCircle, Zap, Award, MapPin, CheckCircle, ClipboardCheck } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import vendu1 from "@/assets/vendu-1.jpg";
import vendu3 from "@/assets/vendu-3.jpg";
import vendu4 from "@/assets/vendu-4.jpg";
import vendu5 from "@/assets/vendu-5.jpg";
import vendu6 from "@/assets/vendu-6.jpg";
import vendu7 from "@/assets/vendu-7.jpg";
import vendu8 from "@/assets/vendu-8.jpg";
import vendu9 from "@/assets/vendu-9.jpg";
import vendu5_2 from "@/assets/vendu-5-2.jpg";
import vendu10 from "@/assets/vendu-10.jpg";
import signatureNotaire from "@/assets/signature-notaire.jpg";
import signatureNotaire2 from "@/assets/signature-notaire-2.jpg";
import heroVideo from "@/assets/hero-desktop-v9.mp4.asset.json";
import heroPoster from "@/assets/poster-desktop-v4.jpg.asset.json";
import heroVideoTablet from "@/assets/hero-tablet-v9.mp4.asset.json";
import heroPosterTablet from "@/assets/poster-tablet-v4.jpg.asset.json";
import heroVideoMobile from "@/assets/hero-mobile-v9.mp4.asset.json";
import heroPosterMobile from "@/assets/poster-mobile-v4.jpg.asset.json";

const soldProperties = [
  { image: vendu1, type: "Maison familiale", location: "Lésigny 77", time: "Vendu en 1 mois" },
  { image: vendu8, type: "Appartement investisseur", location: "Bussy-Saint-Georges 77", time: "Vendu en 2 mois" },
  { image: vendu5_2, type: "Appartement", location: "Chevry-Cossigny 77", time: "Vendu en 1 jour" },
  { image: vendu6, type: "Appartement", location: "La Queue-en-Brie 94", time: "Vendu en 1 jour" },
  { image: vendu4, type: "Maison contemporaine", location: "Saint-Augustin 77", time: "Vendu en 8 mois" },
  { image: vendu5, type: "Appartement investisseur", location: "Noisy-le-Grand 93", time: "Vendu en 3 semaines" },
  { image: vendu7, type: "Maison", location: "Lagny-sur-Marne 77", time: "Vendu en 15 jours" },
  { image: vendu10, type: "Maison pour investisseur", location: "Saint-Maur-des-Fossés 94", time: "Vendu en 7 mois" },
];

const testimonials = [
  {
    name: "Olivier P.",
    text: "Patricia Vieira nous a accompagné tout au long de notre vente. Le dossier a parfaitement été géré. Je recommande totalement.",
    rating: 5,
    title: "Excellente prestation",
    source: "Immodvisor",
  },
  {
    name: "Coraline L.",
    text: "Vente de mon appartement en 1 semaine et au prix ! Je recommande les yeux fermés.",
    rating: 5,
    title: "Parfaite !",
    source: "Immodvisor",
  },
  {
    name: "Christine",
    text: "Personne très humaine et professionnelle, nous sommes ravis d'avoir été accompagnés par Mme Vieira. Merci pour tout !",
    rating: 5,
    title: "Agente de confiance",
    source: "Immodvisor",
  },
  {
    name: "KH",
    text: "Point de vue en tant qu'acheteur : Patricia a été toujours disponible et très réactive. De plus, elle est communicative et arrangeante. J'ai beaucoup apprécié son travail. Merci.",
    rating: 5,
    title: "Une professionnelle à l'écoute !",
    source: "Immodvisor",
  },
  {
    name: "Christophe",
    text: "C'est la 3ème fois que je sollicite Patricia, preuve de son sérieux et de la confiance que je lui témoigne. Patricia se montre toujours disponible, à l'écoute, réactive, elle accompagne ses clients dans les démarches administratives. Je la remercie pour sa bienveillance. Une vraie professionnelle qui m'a accompagné de A à Z avec sincérité et sérieux.",
    rating: 5,
    title: "Disponible, sérieuse, à l'écoute, humaine et de bons conseils",
    source: "Immodvisor",
  },
  {
    name: "Lisa",
    text: "Patricia c'est une main de fer dans un gant de velours. Déterminée en toutes circonstances, toujours disponible, à l'écoute et de bons conseils. Et de 3 Patricia bravo !! Très bonne continuation et encore merci pour tout.",
    rating: 5,
    title: "Main de fer dans un gant de velours",
    source: "Google",
  },
];

const signatureMoments = [
  { image: signatureNotaire, caption: "Signature chez le notaire : l'aboutissement d'un projet immobilier." },
  { image: signatureNotaire2, caption: "Une nouvelle page qui s'ouvre pour mes clients." },
];

const sectorCities = [
  { name: "Gretz-Armainvilliers", to: "/immobilier-gretz-armainvilliers" },
  { name: "Ozoir-la-Ferrière", to: "/immobilier-ozoir-la-ferriere" },
  { name: "Tournan-en-Brie", to: "/immobilier-tournan-en-brie" },
  { name: "Brie-Comte-Robert", to: "/immobilier-brie-comte-robert" },
  { name: "Pontault-Combault", to: "/immobilier-pontault-combault" },
];

const Index = () => {
  return (
    <>
      <PageSEO
        title="Conseils immobiliers Seine-et-Marne & Val-de-Marne | Patricia Vieira"
        description="Guides, analyses et conseils sur l'immobilier en Seine-et-Marne et Val-de-Marne : achat, vente, estimation, investissement, diagnostics, primo-accédants et métier de conseiller immobilier indépendant."
        canonical="/"
        ogTitle="Bienvenue dans les coulisses de l'immobilier — Patricia Vieira"
        ogDescription="Comprendre le marché, réussir son projet, construire son avenir : conseils immobiliers et accompagnement en Seine-et-Marne et Val-de-Marne."
      />

      <SchemaOrg breadcrumbs={[{ name: "Accueil", url: "/" }]} />
    <div>
      {/* Hero éditorial */}
      <section className="relative overflow-hidden bg-background min-h-[640px] md:min-h-[720px] lg:min-h-[85vh] flex items-center">
        {/* Vidéos de fond adaptées à chaque support — remplissage total, sans bandes */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            src={heroVideoMobile.url}
            poster={heroPosterMobile.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Patricia Vieira, conseillère immobilière en Seine-et-Marne, lors d'un rendez-vous client"
            className="md:hidden absolute inset-0 w-full h-full object-cover object-center [filter:brightness(1.04)_saturate(1.03)]"
          />
          <video
            src={heroVideoTablet.url}
            poster={heroPosterTablet.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Patricia Vieira, conseillère immobilière en Seine-et-Marne, lors d'un rendez-vous client"
            className="hidden md:block lg:hidden absolute inset-0 w-full h-full object-cover object-center [filter:brightness(1.04)_saturate(1.03)]"
          />
          <video
            src={heroVideo.url}
            poster={heroPoster.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Patricia Vieira, conseillère immobilière en Seine-et-Marne, accompagne un couple lors d'une visite puis d'une signature"
            className="hidden lg:block absolute inset-0 w-full h-full object-cover object-center [filter:brightness(1.04)_saturate(1.03)]"
          />
          {/* Voile clair quasi invisible : préserve la luminosité, améliore le contraste */}
          <div className="absolute inset-0 bg-background/12 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/85 via-background/55 to-background/15 lg:bg-gradient-to-r lg:from-background/95 lg:via-background/70 lg:to-transparent" />

        </div>


        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 lg:py-28">
          <div className="max-w-3xl lg:max-w-2xl animate-fade-in">
            <p className="font-display text-xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-[0.14em] text-navy leading-snug mb-8 md:mb-10">
              Le magazine immobilier<br className="hidden sm:block" /> de Patricia Vieira
            </p>
            <div className="w-24 h-px bg-primary mb-8 md:mb-10" />
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8 md:mb-10">
              Bienvenue dans les coulisses de l'immobilier
            </h1>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-navy/90 leading-relaxed mb-10 md:mb-12">
              <span className="block">Comprendre le marché.</span>
              <span className="block mt-1">Réussir son projet.</span>
              <span className="block mt-1">Construire son avenir.</span>
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/conseils-immobiliers" className="inline-flex items-center gap-2">
                  <Home className="w-5 h-5" /> Je suis propriétaire ou acquéreur <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="w-full sm:w-auto h-auto py-3 whitespace-normal">
                <Link to="/mon-equipe" className="inline-flex items-center gap-2 text-left">
                  <Briefcase className="w-5 h-5 shrink-0" /> Je découvre le métier de conseiller immobilier <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>





      {/* Bienvenue — introduction éditoriale */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Bienvenue</h2>
            <div className="section-divider mb-10" />
            <p className="font-body text-lg md:text-xl leading-relaxed text-foreground mb-6">
              Depuis plus de 11 ans, je partage mon expérience afin d'aider propriétaires, acquéreurs, investisseurs et futurs professionnels à mieux comprendre le marché immobilier.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed text-foreground">
              Vous trouverez ici des conseils concrets, des analyses de terrain, des retours d'expérience ainsi que des ressources utiles pour réussir vos projets immobiliers ou construire votre avenir professionnel.
            </p>
          </div>
        </div>
      </section>


      {/* Bandeau de confiance — Chiffres clés */}
      <section className="bg-navy text-navy-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "11 ans", label: "d'expérience" },
              { value: "+150", label: "biens vendus" },
              { value: "5★", label: "avis clients" },
              { value: "30 km", label: "autour de Gretz-Armainvilliers" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="font-body text-sm md:text-base opacity-80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Vendeurs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Propriétaires</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Vous souhaitez vendre votre bien ?
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Obtenez une estimation gratuite et précise de votre bien. Je vous accompagne de l'estimation à la signature chez le notaire avec une stratégie de vente sur-mesure.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Estimation gratuite et sans engagement",
                  "Stratégie de commercialisation personnalisée",
                  "Accompagnement complet jusqu'à la signature",
                  "Connaissance approfondie du marché local",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/estimation" className="inline-flex items-center gap-2">
                    Estimer mon bien gratuitement <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/vendre#methode">Découvrir ma méthode de vente</Link>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 text-center lg:text-left">Biens vendus récemment</h3>
              <p className="text-muted-foreground font-body text-sm mb-6 text-center lg:text-left">Des résultats concrets qui témoignent de mon engagement et de mon efficacité.</p>
              <div className="grid grid-cols-2 gap-4">
                {soldProperties.slice(0, 6).map((property, i) => (
                  <div key={i} className="group bg-card rounded-xl overflow-hidden border border-border/40 hover:shadow-md transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={property.image} alt={`${property.type} – ${property.location}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3">
                      <h4 className="font-display text-sm font-semibold text-foreground">{property.type}</h4>
                      <p className="text-muted-foreground font-body text-xs mt-0.5">{property.location}</p>
                      <p className="text-primary font-body font-semibold text-xs mt-1">{property.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Acheteurs */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Acheteurs</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Vous cherchez un bien en Seine-et-Marne et Val-de-Marne ?<br /><span className="font-normal text-2xl md:text-3xl">Ancien ou neuf ?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
            Maison, appartement, investissement locatif, terrain… Je vous aide à trouver le bien qui correspond à vos critères et votre budget sur tout mon secteur.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Recherche personnalisée selon vos critères",
              "Visites accompagnées avec conseil professionnel",
              "Analyse du marché et conseils sur le prix",
              "Accompagnement jusqu'à la remise des clés",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-body text-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button variant="hero" size="lg" asChild>
            <Link to="/acheter" className="inline-flex items-center gap-2">
              Me confier votre recherche <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Mon secteur — Maillage interne villes */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Mon secteur d'intervention</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Votre conseillère immobilier près de chez vous
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-4">
            J'interviens sur Gretz-Armainvilliers et dans un rayon de 30 km, en Seine-et-Marne et Val-de-Marne.
          </p>
          <div className="section-divider mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {sectorCities.map((city) => (
              <Link
                key={city.to}
                to={city.to}
                className="flex items-center gap-2 justify-center bg-card rounded-xl px-4 py-4 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-body text-sm font-medium text-foreground group-hover:text-primary transition-colors">{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Avis clients
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              La satisfaction de mes clients est ma plus belle récompense.
            </p>
          </div>
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background rounded-xl p-7 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <Quote className="w-8 h-8 text-primary/25 mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-3">{t.title}</h3>
                <p className="text-foreground font-body leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-foreground text-sm">{t.name}</span>
                  <span className="text-xs text-muted-foreground font-body bg-muted px-3 py-1 rounded-full">{t.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ma méthode unique */}
      <section className="section-padding bg-background relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M-50 450 C150 450, 200 300, 350 300 S550 200, 650 200 S800 150, 900 150 L1050 150" stroke="hsl(215 50% 28% / 0.06)" strokeWidth="2" strokeDasharray="12 8" fill="none" />
          <circle cx="350" cy="300" r="3" fill="hsl(215 50% 28% / 0.07)" />
          <circle cx="650" cy="200" r="3" fill="hsl(215 50% 28% / 0.07)" />
          <circle cx="900" cy="150" r="3" fill="hsl(215 50% 28% / 0.07)" />
          <g transform="translate(1050, 130)" stroke="hsl(215 50% 28% / 0.08)" strokeWidth="1.5" fill="none">
            <path d="M0 20 L20 0 L40 20" /><rect x="5" y="20" width="30" height="22" rx="1" /><rect x="15" y="28" width="10" height="14" />
          </g>
        </svg>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
              Une approche structurée pour maximiser la réussite de votre vente.
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ma méthode unique
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Ma méthode repose sur une stratégie claire, un marketing puissant et un accompagnement complet pour vendre votre bien le plus cher possible, le plus vite possible.
            </p>
          </div>
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Target, label: "Stratégie de vente personnalisée" },
              { icon: Sparkles, label: "Mise en valeur optimale de votre bien" },
              { icon: Megaphone, label: "Diffusion large et ciblée" },
              { icon: UserCheck, label: "Sélection rigoureuse des acquéreurs" },
              { icon: Shield, label: "Négociation défendant vos intérêts" },
              { icon: HandshakeIcon, label: "Accompagnement complet jusqu'à la signature" },
              { icon: MessageCircle, label: "Communication transparente et régulière" },
              { icon: Zap, label: "Disponibilité et réactivité" },
              { icon: Award, label: "Engagement basé sur la confiance et l'éthique" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-card rounded-xl px-6 py-5 border border-border/40 hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-foreground font-medium text-base leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/vendre">Découvrir ma méthode</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Recrutement — encart distinct */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Partout en France</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Envie de devenir conseiller immobilier indépendant ?
              </h2>
              <p className="font-body text-lg text-navy-foreground/85 leading-relaxed mb-6">
                Reconversion professionnelle ou expérience dans l'immobilier : je vous accompagne personnellement pour construire votre activité. Rejoignez une équipe humaine, formée et soudée.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Formation complète et accompagnement personnalisé",
                  "Activité flexible, partout en France",
                  "11 ans d'expérience à votre service",
                  "Rejoignez un réseau leader en France",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-navy-foreground/90">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" asChild>
                <Link to="/mon-equipe" className="inline-flex items-center gap-2">
                  En savoir plus <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {signatureMoments.map((moment, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                  <img src={moment.image} alt={moment.caption} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Centre de ressources */}
      <section id="ressources" className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div className="max-w-2xl">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Centre de ressources</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Guides, conseils et analyses du marché
              </h2>
              <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mt-3">
                Vente, achat, estimation, investissement, diagnostics, primo-accédants, immobilier neuf et ancien, marché local en Seine-et-Marne et Val-de-Marne : des contenus clairs pour décider en confiance.
              </p>
            </div>

            <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
              <Link to="/conseils-immobiliers" className="flex items-center gap-1">
                Voir tout <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="section-divider mb-12 !mx-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                to={`/conseils-immobiliers/${post.id}`}
                className="group bg-card rounded-xl overflow-hidden border border-border/40 hover:shadow-lg transition-all duration-300"
              >
                {post.coverImage && (
                  <div className="h-44 overflow-hidden">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-body font-medium text-navy bg-navy-light px-2.5 py-1 rounded-full">{post.category}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground font-body text-base line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 text-xs text-muted-foreground font-body">{post.date} · {post.readTime} de lecture</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Qui je suis — présentation après la valeur */}
      <section className="section-padding bg-sand/40">
        <div className="container mx-auto max-w-4xl">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Qui je suis</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Patricia Vieira, conseillère immobilier et manager platinium associée
          </h2>
          <div className="space-y-4 font-body text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              Depuis plus de 11 ans, j'accompagne des propriétaires, des acquéreurs et des investisseurs en Seine-et-Marne et en Val-de-Marne. Mon métier, c'est d'abord d'écouter, d'expliquer et de sécuriser chaque étape d'un projet de vie.
            </p>
            <p>
              J'anime également une équipe de conseillers immobiliers indépendants que je forme et accompagne au quotidien : reconversion professionnelle, entrepreneuriat immobilier, développement d'activité. Une aventure humaine autant que professionnelle.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/a-propos" className="inline-flex items-center gap-2">
                Découvrir mon parcours <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Échanger avec moi</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* CTA final */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Un projet immobilier ? Parlons-en.
          </h2>
          <p className="text-navy-foreground/80 font-body text-lg mb-8 max-w-xl mx-auto">
            Estimation, vente, achat ou envie de rejoindre mon équipe : je suis à votre écoute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/estimation" className="inline-flex items-center gap-2">
                 Estimer mon bien <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" className="border-navy-foreground text-navy-foreground hover:bg-navy-foreground hover:text-navy" asChild>
              <Link to="/contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index;
