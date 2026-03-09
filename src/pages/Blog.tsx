import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, categories } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-6 font-body">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
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

  return (
    <div>
      <section className="bg-foreground text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="font-body text-lg opacity-85">
            Conseils, coulisses et actualités de l'immobilier.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-accent border border-border/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
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
