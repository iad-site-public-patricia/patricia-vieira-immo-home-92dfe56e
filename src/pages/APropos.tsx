import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Sparkles, ArrowRight } from "lucide-react";

const APropos = () => {
  return (
    <div>
      {/* Hero with warm gradient */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-navy via-navy/90 to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.15),_transparent_70%)]" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy-foreground">À propos</h1>
          <p className="font-body text-lg text-navy-foreground/85 leading-relaxed">
            Découvrez mon parcours et ma vision du métier de conseiller immobilier.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6 font-body text-muted-foreground leading-relaxed">
              <h2 className="font-display text-3xl font-semibold text-foreground">Patricia Vieira</h2>
              <div className="section-divider !mx-0 !w-12" />
              <p>
                Passionnée par l'immobilier et les relations humaines, j'exerce le métier de conseillère immobilier indépendante en partenariat avec le réseau IAD France.
              </p>
              <p>
                Ce que j'aime par-dessus tout dans ce métier, c'est l'accompagnement. Accompagner un propriétaire dans la vente de son bien, aider un acquéreur à trouver son futur chez-soi, ou guider une personne vers une nouvelle carrière dans l'immobilier : chaque projet est unique et chaque rencontre est enrichissante.
              </p>
              <p>
                Je crois profondément que la relation humaine est au cœur de ce métier. L'écoute, la transparence et la bienveillance sont les valeurs qui guident mon quotidien. Mon objectif n'est pas simplement de vendre un bien, mais de créer une expérience positive pour chacun de mes clients.
              </p>
              <p>
                Au fil des années, j'ai également développé une activité d'accompagnement de nouveaux conseillers immobiliers. Transmettre mon expérience, partager les bonnes pratiques et voir des personnes s'épanouir dans ce métier est une source de satisfaction immense.
              </p>
            </div>

            <div className="md:col-span-2 space-y-4">
              {[
                { icon: Award, title: "Expérience", desc: "Plusieurs années d'expertise dans l'immobilier local." },
                { icon: Heart, title: "Passion", desc: "Un métier que j'exerce avec cœur et engagement." },
                { icon: Users, title: "Accompagnement", desc: "Des dizaines de clients satisfaits et des conseillers formés." },
                { icon: Sparkles, title: "Vision", desc: "Un immobilier plus humain, plus transparent, plus accessible." },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-5 border border-border/40 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-terracotta-light flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                Me contacter <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;
