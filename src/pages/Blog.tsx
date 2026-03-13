import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, categories } from "@/data/blogPosts";
import {
  ArrowLeft, BookOpen, LayoutGrid, Home, ClipboardCheck, ShoppingCart,
  GraduationCap, TrendingUp, MapPin, BarChart3, Gem, Newspaper
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
        <section className="bg-foreground text-primary-foreground section-padding">
          <div className="container mx-auto max-w-3xl">
            <Link to="/conseils-immobiliers" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-6 font-body">
              <ArrowLeft className="w-4 h-4" /> Retour aux conseils
            </Link>
            <span className="text-xs font-body font-medium bg-primary text-primary-foreground px-2 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">{post.title}</h1>
            <p className="font-body text-sm opacity-70">{post.date} · {post.readTime} de lecture</p>
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

  // Group by category for display
  const categoryCount = categories.reduce((acc, cat) => {
    if (cat === "Tous") {
      acc[cat] = blogPosts.length;
    } else {
      acc[cat] = blogPosts.filter((p) => p.category === cat).length;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <div>
      <section className="relative section-padding overflow-hidden">
        <img src={blogHeaderImg} alt="Conseils immobiliers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">Conseils immobiliers</h1>
          <p className="font-body text-lg opacity-90 max-w-2xl mx-auto text-primary-foreground">
            Guides pratiques, analyses de marché et conseils d'experte pour réussir vos projets immobiliers.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-14 justify-center">
            {categories.map((cat) => {
              const iconMap: Record<string, React.ReactNode> = {
                "Tous": <LayoutGrid className="w-5 h-5" />,
                "Vendre son bien": <Home className="w-5 h-5" />,
                "Diagnostics et obligations": <ClipboardCheck className="w-5 h-5" />,
                "Acheter un bien": <ShoppingCart className="w-5 h-5" />,
                "Primo-accédants": <GraduationCap className="w-5 h-5" />,
                "Investissement immobilier": <TrendingUp className="w-5 h-5" />,
                "Où investir": <MapPin className="w-5 h-5" />,
                "Marché immobilier local": <BarChart3 className="w-5 h-5" />,
                "Opportunités investisseurs": <Gem className="w-5 h-5" />,
                "Actualités immobilières": <Newspaper className="w-5 h-5" />,
              };
              const isHighlighted = cat === "Vendre son bien" || cat === "Diagnostics et obligations";
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl text-base font-display font-bold uppercase tracking-widest border-2 transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.04]"
                      : isHighlighted
                        ? "bg-terracotta-light text-primary border-primary/40 hover:border-primary hover:shadow-md ring-2 ring-primary/20"
                        : "bg-card text-foreground border-border hover:border-primary hover:shadow-md"
                  }`}
                >
                  {isHighlighted && activeCategory !== cat && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-body font-semibold px-2 py-0.5 rounded-full shadow-md">
                      Populaire
                    </span>
                  )}
                  {iconMap[cat]}
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.id}
                to={`/conseils-immobiliers/${post.id}`}
                className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-md transition-all"
              >
                <div className="h-2 bg-primary" />
                <div className="p-6">
                  <span className="text-xs font-body font-medium text-primary bg-terracotta-light px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h2 className="font-display text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground font-body text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 text-xs text-muted-foreground font-body">
                    {post.date} · {post.readTime} de lecture
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
