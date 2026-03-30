import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import patriciaPhoto from "@/assets/patricia-vieira.png";

const APropos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageSEO
        title="À propos de Patricia Vieira – Conseillère immobilier en Seine-et-Marne"
        description="Découvrez le parcours de Patricia Vieira, conseillère immobilier indépendante iad en Seine-et-Marne. Proximité, écoute et expertise locale."
        canonical="/a-propos"
      />
    <div>
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${patriciaPhoto})`,
            backgroundPosition: "center 20%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto max-w-5xl pb-12 px-4 md:px-8 relative z-10">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              À propos
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              Découvrez mon parcours et ma vision du métier de conseiller immobilier.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Presentation */}
      <section className="section-padding">
        <div
          ref={sectionRef}
          className="container mx-auto max-w-5xl transition-all duration-700 ease-out opacity-0 translate-y-8"
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-6 font-body text-foreground leading-relaxed">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Patricia Vieira
              </h2>
              <div className="section-divider !mx-0 !w-14" />
              <p className="text-lg">
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

            {/* Right: Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-gold/20 rounded-2xl blur-sm" />
                <img
                  src={patriciaPhoto}
                  alt="Patricia Vieira, conseillère immobilier"
                  className="relative rounded-2xl shadow-xl w-full max-w-md object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div
          ref={valuesRef}
          className="container mx-auto max-w-5xl transition-all duration-700 ease-out delay-200 opacity-0 translate-y-8"
        >
          <h2 className="font-display text-3xl font-semibold text-foreground text-center mb-3">
            Mes valeurs
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Expérience", desc: "Plusieurs années d'expertise dans l'immobilier local." },
              { icon: Heart, title: "Passion", desc: "Un métier que j'exerce avec cœur et engagement." },
              { icon: Users, title: "Accompagnement", desc: "Des dizaines de clients satisfaits et des conseillers formés." },
              { icon: Sparkles, title: "Vision", desc: "Un immobilier plus humain, plus transparent, plus accessible." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border/40 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-full bg-terracotta-light flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                Me contacter <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default APropos;
