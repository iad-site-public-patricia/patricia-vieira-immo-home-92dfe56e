import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, FileCheck, Users, Home, ShoppingBag, Briefcase, ArrowRight, Star, Quote, Target, Sparkles, Megaphone, UserCheck, Shield, HandshakeIcon, MessageCircle, Zap, Award, MapPin, CheckCircle, ClipboardCheck } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import vendu1 from "@/assets/vendu-1.png";
import vendu3 from "@/assets/vendu-3.png";
import vendu4 from "@/assets/vendu-4.png";
import vendu5 from "@/assets/vendu-5.png";
import vendu6 from "@/assets/vendu-6.png";
import vendu7 from "@/assets/vendu-7.png";
import vendu8 from "@/assets/vendu-8.png";
import vendu9 from "@/assets/vendu-9.png";
import vendu5_2 from "@/assets/vendu-5-2.png";
import vendu10 from "@/assets/vendu-10.png";
import signatureNotaire from "@/assets/signature-notaire.jpg";
import signatureNotaire2 from "@/assets/signature-notaire-2.png";

const soldProperties = [
  { image: vendu1, type: "Maison familiale", location: "Lésigny 77", time: "Vendu en 1 mois" },
  { image: vendu8, type: "Appartement investisseur", location: "Bussy-Saint-Georges 93", time: "Vendu en 2 mois" },
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
  "Gretz-Armainvilliers", "Ozoir-la-Ferrière", "Tournan-en-Brie",
  "Brie-Comte-Robert", "Roissy-en-Brie", "Pontault-Combault",
  "Presles-en-Brie", "Lésigny",
];

const Index = () => {
  return (
    <div>
      {/* Hero Section — 3 CTA */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/30 to-transparent" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in">
              <span className="text-navy-foreground drop-shadow-lg">Patricia Vieira</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium mt-3 italic text-navy-foreground/90 drop-shadow-md">
                Votre conseillère immobilier en Seine-et-Marne
              </span>
            </h1>
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <p className="text-navy-foreground/90 font-body text-lg md:text-xl leading-relaxed drop-shadow-sm">
                Vente · Achat · Estimation gratuite<br />
                Gretz-Armainvilliers et alentours (30 km)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/estimation-immobiliere#formulaire" className="inline-flex items-center gap-2">
                  Estimer mon bien gratuitement <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="border-navy-foreground text-navy-foreground hover:bg-navy-foreground hover:text-navy" asChild>
                <Link to="/acheter">Acheter un bien</Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="border-navy-foreground text-navy-foreground hover:bg-navy-foreground hover:text-navy" asChild>
                <Link to="/rejoindre">Rejoindre mon équipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau de confiance — Chiffres clés */}
      <section className="bg-navy text-navy-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "11 ans", label: "d'expérience" },
              { value: "+200", label: "biens vendus" },
              { value: "5★", label: "avis clients" },
              { value: "30 km", label: "autour de Gretz" },
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
                  <Link to="/estimation-immobiliere#formulaire" className="inline-flex items-center gap-2">
                    Estimer mon bien gratuitement <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/vendre-son-bien">Découvrir ma méthode de vente</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img src={vendu1} alt="Bien vendu à Lésigny" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img src={vendu5_2} alt="Bien vendu à Chevry-Cossigny" className="w-full h-32 object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img src={vendu6} alt="Bien vendu à La Queue-en-Brie" className="w-full h-32 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img src={vendu7} alt="Bien vendu à Lagny-sur-Marne" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Acheteurs */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img src={vendu8} alt="Appartement à Bussy-Saint-Georges" className="w-full h-56 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md mt-8">
                  <img src={vendu4} alt="Maison à Saint-Augustin" className="w-full h-56 object-cover" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Acheteurs</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Vous cherchez un bien en Seine-et-Marne ?
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Maison, appartement, investissement locatif… Je vous aide à trouver le bien qui correspond à vos critères et votre budget sur tout mon secteur.
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
          </div>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {sectorCities.map((city) => (
              <Link
                key={city}
                to={`/secteur/${city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 justify-center bg-card rounded-xl px-4 py-4 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-body text-sm font-medium text-foreground group-hover:text-primary transition-colors">{city}</span>
              </Link>
            ))}
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/secteur" className="inline-flex items-center gap-2">
              Voir toutes les villes de mon secteur <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
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
              <Link to="/vendre-son-bien">Découvrir ma méthode</Link>
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
                <Link to="/rejoindre" className="inline-flex items-center gap-2">
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

      {/* Biens vendus récemment */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Biens vendus récemment
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Des résultats concrets qui témoignent de mon engagement et de mon efficacité.
            </p>
          </div>
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {soldProperties.slice(0, 6).map((property, i) => (
              <div key={i} className="group bg-background rounded-xl overflow-hidden border border-border/40 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img src={property.image} alt={`${property.type} – ${property.location}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">{property.type}</h3>
                  <p className="text-muted-foreground font-body text-sm mt-1">{property.location}</p>
                  <p className="text-primary font-body font-semibold text-sm mt-2">{property.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Derniers articles */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Derniers conseils immobiliers
            </h2>
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
              <Link to="/estimation-immobiliere#formulaire" className="inline-flex items-center gap-2">
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
  );
};

export default Index;
