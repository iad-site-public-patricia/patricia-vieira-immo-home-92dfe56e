import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, FileCheck, Users, Home, ShoppingBag, Briefcase, ArrowRight, Star, Quote, Target, Sparkles, Megaphone, UserCheck, Shield, HandshakeIcon, MessageCircle, Zap, Award } from "lucide-react";
import MethodeEtapes from "@/components/MethodeEtapes";
import { blogPosts } from "@/data/blogPosts";
import vendu1 from "@/assets/vendu-1.png";
import vendu3 from "@/assets/vendu-3.png";
import vendu4 from "@/assets/vendu-4.png";
import vendu5 from "@/assets/vendu-5.png";
import vendu6 from "@/assets/vendu-6.png";
import vendu7 from "@/assets/vendu-7.png";
import signatureNotaire from "@/assets/signature-notaire.jpg";
import signatureNotaire2 from "@/assets/signature-notaire-2.png";

const soldProperties = [
  { image: vendu1, type: "Maison familiale", location: "Gretz-Armainvilliers", time: "Vendu en 1 mois" },
  { image: vendu3, type: "Appartement", location: "Gretz-Armainvilliers", time: "Vendu en 1 jour" },
  { image: vendu4, type: "Maison contemporaine", location: "Saint-Augustin 77", time: "Vendu en 8 mois" },
  { image: vendu5, type: "Appartement investisseur", location: "Noisy-le-Grand 93", time: "Vendu en 3 semaines" },
  { image: vendu6, type: "Appartement", location: "La Queue-en-Brie 94", time: "Vendu en 1 jour" },
  { image: vendu7, type: "Maison", location: "Seine-et-Marne", time: "Vendu en 15 jours" },
];

const testimonials = [
  {
    name: "Sophie & Marc L.",
    text: "Patricia nous a accompagnés avec beaucoup de professionnalisme et d'écoute. Notre maison a été vendue en un mois, au prix souhaité. Une expérience parfaite du début à la fin.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Julien D.",
    text: "Grâce à Patricia, j'ai trouvé l'appartement idéal en quelques semaines. Elle a su comprendre exactement ce que je recherchais et m'a guidé à chaque étape.",
    rating: 5,
    source: "Immodvisor",
  },
  {
    name: "Nathalie P.",
    text: "Un accompagnement humain et bienveillant. Patricia prend le temps d'expliquer chaque démarche et rassure tout au long du processus. Je la recommande sans hésiter.",
    rating: 5,
    source: "Google",
  },
];

const signatureMoments = [
  { image: signatureNotaire, caption: "Signature chez le notaire : l'aboutissement d'un projet immobilier." },
  { image: signatureNotaire2, caption: "Une nouvelle page qui s'ouvre pour mes clients." },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster=""
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/30 to-transparent" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in">
              <span className="text-navy-foreground drop-shadow-lg">Patricia Vieira</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium mt-3 italic text-navy-foreground/90 drop-shadow-md">
                Conseillère immobilier indépendante
              </span>
            </h1>
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <p className="text-navy-foreground font-display text-xl md:text-2xl font-semibold tracking-wide drop-shadow-md">
                Vente • Achat • Investissement immobilier
              </p>
              <p className="text-navy-foreground/90 font-body text-base md:text-lg mt-1 drop-shadow-sm">
                Seine-et-Marne • Val-de-Marne
              </p>
            </div>
            <div className="text-navy-foreground text-xl md:text-2xl font-body mb-10 animate-fade-in drop-shadow-sm" style={{ animationDelay: "0.25s" }}>
              <p className="font-display font-bold text-2xl md:text-3xl mb-3">Deux projets peuvent nous réunir :</p>
              <p className="text-navy-foreground/90 text-lg md:text-xl leading-relaxed">vendre ou acheter un bien immobilier,</p>
              <p className="text-navy-foreground/90 text-lg md:text-xl leading-relaxed">ou construire votre activité dans mon équipe.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/vendre">Votre projet immobilier</Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="border-navy-foreground text-navy-foreground hover:bg-navy-foreground hover:text-navy" asChild>
                <Link to="/rejoindre">Rejoindre mon équipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#111111' }}>
              Un accompagnement immobilier complet
            </h2>
            <p className="font-body text-lg leading-relaxed" style={{ color: '#111111' }}>
              Que vous souhaitiez vendre, acheter ou investir, chaque projet mérite une stratégie claire et un accompagnement personnalisé.
            </p>
            <p className="font-body text-lg leading-relaxed mt-4" style={{ color: '#111111' }}>
              J'interviens principalement en Seine-et-Marne et Val-de-Marne et j'accompagne également celles et ceux qui souhaitent développer leur activité immobilière partout en France.
            </p>
          </div>
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Stratégie personnalisée", desc: "Un suivi sur-mesure adapté à votre projet et vos besoins." },
              { icon: TrendingUp, title: "Expertise du marché local", desc: "Une connaissance approfondie du marché immobilier local." },
              { icon: FileCheck, title: "Accompagnement jusqu'à la signature", desc: "Je vous accompagne jusqu'à la signature chez le notaire." },
              { icon: Users, title: "Relation de confiance", desc: "La confiance et l'écoute sont au cœur de mon approche." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-border/40 group"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-terracotta-light flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: '#111111' }}>{item.title}</h3>
                <p className="font-body text-base leading-relaxed" style={{ color: '#111111' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ma méthode unique – Summary */}
      <section className="section-padding bg-card relative overflow-hidden">
        {/* Subtle background illustration – strategic path to house */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Flowing strategic path */}
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
          {/* Small dots along the path */}
          <circle cx="350" cy="300" r="3" fill="hsl(215 50% 28% / 0.07)" />
          <circle cx="650" cy="200" r="3" fill="hsl(215 50% 28% / 0.07)" />
          <circle cx="900" cy="150" r="3" fill="hsl(215 50% 28% / 0.07)" />
          {/* House icon at the end */}
          <g transform="translate(1050, 130)" stroke="hsl(215 50% 28% / 0.08)" strokeWidth="1.5" fill="none">
            <path d="M0 20 L20 0 L40 20" />
            <rect x="5" y="20" width="30" height="22" rx="1" />
            <rect x="15" y="28" width="10" height="14" />
          </g>
          {/* Decorative circles */}
          <circle cx="100" cy="80" r="60" stroke="hsl(215 50% 28% / 0.03)" strokeWidth="1" fill="none" />
          <circle cx="1100" cy="500" r="80" stroke="hsl(215 50% 28% / 0.03)" strokeWidth="1" fill="none" />
        </svg>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <p className="font-body text-sm md:text-base uppercase tracking-[0.2em] text-primary mb-3">
              Une approche structurée pour maximiser la réussite de votre vente.
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ma méthode unique
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Ma méthode repose sur une stratégie claire, un marketing puissant et un accompagnement complet pour vendre votre bien le plus cher possible, le plus vite possible et dans les meilleures conditions.
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
              <div
                key={i}
                className="flex items-center gap-4 bg-background rounded-xl px-6 py-5 border border-border/40 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
              >
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

      {/* Les 5 étapes de ma méthode */}
      <MethodeEtapes />

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
            {soldProperties.map((property, i) => (
              <div key={i} className="group bg-background rounded-xl overflow-hidden border border-border/40 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={property.image}
                    alt={`${property.type} – ${property.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-7 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <Quote className="w-8 h-8 text-primary/25 mb-4" />
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

      {/* Signature Moments Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Moments de signature
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Chaque signature chez le notaire est l'aboutissement d'un projet accompagné avec soin.
            </p>
          </div>
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {signatureMoments.map((moment, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent p-6">
                  <p className="text-navy-foreground font-body text-sm md:text-base italic drop-shadow-md">
                    {moment.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
            Mes services
          </h2>
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Vendre votre bien", desc: "Estimation gratuite, stratégie de commercialisation et accompagnement complet.", link: "/vendre" },
              { icon: ShoppingBag, title: "Acheter un bien", desc: "Recherche personnalisée et conseils experts pour trouver votre futur logement.", link: "/acheter" },
              { icon: Briefcase, title: "Découvrir le métier", desc: "Envie d'entreprendre ? Découvrez le métier de conseiller immobilier.", link: "/rejoindre" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group bg-card rounded-xl p-8 border border-border/40 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-light flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-navy group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body mb-5 leading-relaxed">{item.desc}</p>
                <span className="text-primary font-body font-medium text-sm flex items-center gap-1 group-hover:gap-2.5 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Derniers articles
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
                className="group bg-background rounded-xl overflow-hidden border border-border/40 hover:shadow-lg transition-all duration-300"
              >
                {post.coverImage && (
                  <div className="h-44 overflow-hidden">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-body font-medium text-navy bg-navy-light px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-base line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 text-xs text-muted-foreground font-body">
                    {post.date} · {post.readTime} de lecture
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Envie d'en discuter ?
          </h2>
          <p className="text-navy-foreground/80 font-body text-lg mb-8 max-w-xl mx-auto">
            Que ce soit pour un projet immobilier ou pour découvrir le métier, je suis à votre écoute.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Me contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
