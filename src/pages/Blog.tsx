import { useState } from "react";
import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
import { Link, useParams } from "react-router-dom";
import { blogPosts, categories } from "@/data/blogPosts";
import {
  ArrowLeft, LayoutGrid, Home, ClipboardCheck, ShoppingCart,
  GraduationCap, TrendingUp, MapPin, BarChart3, Gem, Newspaper, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import blogHeaderImg from "@/assets/blog-header.jpg";

const Blog = () => {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Single article view
  if (id) {
    const post = blogPosts.find((p) => p.id === id);
    if (!post) return <div className="section-padding container mx-auto">Article non trouvé.</div>;

    return (
      <div>
        <section className="relative section-padding overflow-hidden bg-gradient-to-br from-navy via-navy/90 to-primary/80">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.15),_transparent_70%)]" />
          <div className="container mx-auto max-w-3xl relative z-10">
            <Link to="/conseils-immobiliers" className="inline-flex items-center gap-1 text-sm text-navy-foreground/70 hover:text-navy-foreground mb-6 font-body transition-colors">
              <ArrowLeft className="w-4 h-4" /> Retour aux conseils
            </Link>
            <span className="text-xs font-body font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4 text-navy-foreground">{post.title}</h1>
            <p className="font-body text-sm text-navy-foreground/65">{post.date} · {post.readTime} de lecture</p>
          </div>
        </section>
        <section className="section-padding">
          <article className="container mx-auto max-w-3xl prose prose-lg font-body text-foreground">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h3 key={i} className="font-display text-xl font-semibold mt-8 mb-3">{para.replace(/\*\*/g, "")}</h3>;
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para.replace(/\*\*/g, "")}</p>;
            })}
          </article>
          <div className="container mx-auto max-w-3xl mt-12 text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Me contacter</Link>
            </Button>
          </div>
        </section>
      </div>
    );
  }

  // Blog list
  const filtered = activeCategory === "Tous" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageSEO
        title="Conseils Immobiliers Seine-et-Marne — Blog Patricia Vieira"
        description="Conseils et actualités immobilières en Seine-et-Marne par Patricia Vieira, conseillère IAD France. Prix, tendances, astuces pour vendre et acheter."
        canonical="/conseils-immobiliers"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/conseils-immobiliers" },
        ]}
      />
    <div>
      {/* Magazine-style header */}
      <section className="relative section-padding overflow-hidden">
        <img src={blogHeaderImg} alt="Conseils immobiliers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-navy-foreground">
            Patricia Vieira
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium mt-3 italic text-navy-foreground/90">
              Votre conseillère immobilier en Seine-et-Marne
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium mt-2 italic text-navy-foreground/90">
              Manager platinium associée
            </span>
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          {/* Categories - refined pills */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {categories.map((cat) => {
              const iconMap: Record<string, React.ReactNode> = {
                "Tous": <LayoutGrid className="w-4 h-4" />,
                "Vendre son bien": <Home className="w-4 h-4" />,
                "Diagnostics et obligations": <ClipboardCheck className="w-4 h-4" />,
                "Acheter un bien": <ShoppingCart className="w-4 h-4" />,
                "Primo-accédants": <GraduationCap className="w-4 h-4" />,
                "Investissement immobilier": <TrendingUp className="w-4 h-4" />,
                "Où investir": <MapPin className="w-4 h-4" />,
                "Marché immobilier local": <BarChart3 className="w-4 h-4" />,
                "Opportunités investisseurs": <Gem className="w-4 h-4" />,
                "Actualités immobilières": <Newspaper className="w-4 h-4" />,
              };
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-body font-semibold uppercase tracking-wide border-2 transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-navy text-navy-foreground border-navy shadow-md"
                      : "bg-white text-navy border-navy/80 hover:bg-navy/5 hover:shadow-sm"
                  }`}
                >
                  {iconMap[cat]}
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((post) => (
              <Link
                key={post.id}
                to={`/conseils-immobiliers/${post.id}`}
                className="group bg-card rounded-xl overflow-hidden border border-border/40 hover:shadow-xl transition-all duration-300"
              >
                {post.coverImage && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-body font-medium text-navy bg-navy-light px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h2 className="font-display text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground font-body text-base line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-body">
                      {post.date} · {post.readTime} de lecture
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Blog;
