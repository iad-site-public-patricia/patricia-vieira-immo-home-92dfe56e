import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, FileCheck, Users, Home, ShoppingBag, Briefcase, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/15" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              <span className="text-primary-foreground drop-shadow-lg">Patricia Vieira</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium mt-3 italic text-primary-foreground/90 drop-shadow-md">
                Conseillère immobilier indépendante
              </span>
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl font-body leading-relaxed mb-10 animate-fade-in drop-shadow-sm" style={{ animationDelay: "0.2s" }}>
              J'accompagne vos projets immobiliers, de la vente à l'achat, et je partage ma passion avec celles et ceux qui souhaitent construire leur indépendance professionnelle au sein de mon équipe présente dans plusieurs régions en France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/vendre">Faire estimer mon bien</Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground" asChild>
                <Link to="/rejoindre">Découvrir le métier</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Pourquoi me faire confiance ?
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Chaque projet immobilier est unique. Mon rôle est d'accompagner mes clients
              avec écoute, transparence et professionnalisme à chaque étape de leur projet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Accompagnement personnalisé", desc: "Un suivi sur-mesure adapté à votre projet et vos besoins." },
              { icon: TrendingUp, title: "Expertise du marché", desc: "Une connaissance approfondie du marché immobilier local." },
              { icon: FileCheck, title: "Suivi complet", desc: "Je vous accompagne jusqu'à la signature chez le notaire." },
              { icon: Users, title: "Relation humaine", desc: "La confiance et l'écoute sont au cœur de mon approche." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border/50"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-terracotta-light flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Mes services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Vendre votre bien", desc: "Estimation gratuite, stratégie de commercialisation et accompagnement complet.", link: "/vendre" },
              { icon: ShoppingBag, title: "Acheter un bien", desc: "Recherche personnalisée et conseils experts pour trouver votre futur logement.", link: "/acheter" },
              { icon: Briefcase, title: "Découvrir le métier", desc: "Envie d'entreprendre ? Découvrez le métier de conseiller immobilier.", link: "/rejoindre" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group bg-card rounded-xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body mb-4">{item.desc}</p>
                <span className="text-primary font-body font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
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
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Derniers articles
            </h2>
            <Button variant="ghost" asChild>
              <Link to="/blog" className="flex items-center gap-1">
                Voir tout <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-background rounded-xl overflow-hidden border border-border/50 hover:shadow-md transition-all"
              >
                <div className="h-2 bg-primary" />
                <div className="p-6">
                  <span className="text-xs font-body font-medium text-primary bg-terracotta-light px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm line-clamp-2">{post.excerpt}</p>
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
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Envie d'en discuter ?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8 max-w-xl mx-auto">
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
