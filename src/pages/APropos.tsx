import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
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
        title="À Propos de Patricia Vieira — Conseillère Immobilier IAD en Seine-et-Marne"
        description="Découvrez le parcours de Patricia Vieira, conseillère immobilier IAD France à Gretz-Armainvilliers depuis plus de 10 ans. Expertise locale, accompagnement personnalisé, passion du métier."
        canonical="/a-propos"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "À Propos", url: "/a-propos" },
        ]}
      />
      <main>
        {/* Hero */}
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
                Patricia Vieira — Votre Conseillère Immobilier en Seine-et-Marne
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                Découvrez mon parcours et ma vision du métier de conseiller immobilier.
              </p>
            </div>
          </div>
        </section>

        {/* Storytelling */}
        <section className="section-padding">
          <div
            ref={sectionRef}
            className="container mx-auto max-w-5xl transition-all duration-700 ease-out opacity-0 translate-y-8"
          >
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  Patricia Vieira
                </h2>
                <div className="section-divider !mx-0 !w-14" />
                <p className="text-lg text-foreground">
                  Conseillère immobilier indépendante affiliée au réseau <strong>IAD France</strong> depuis plus de 10 ans, je suis basée à <Link to="/immobilier-gretz-armainvilliers" className="text-primary hover:underline">Gretz-Armainvilliers</Link> en Seine-et-Marne.
                </p>
                <p>
                  Passionnée par l'immobilier et les relations humaines, j'exerce ce métier avec conviction et engagement. Ce que j'aime par-dessus tout, c'est l'accompagnement. Accompagner un propriétaire dans la vente de son bien, aider un acquéreur à trouver son futur chez-soi : chaque projet est unique et chaque rencontre est enrichissante.
                </p>
                <p>
                  Ma connaissance approfondie du marché local — <Link to="/immobilier-gretz-armainvilliers" className="text-primary hover:underline">Gretz-Armainvilliers</Link>, <Link to="/immobilier-tournan-en-brie" className="text-primary hover:underline">Tournan-en-Brie</Link>, <Link to="/immobilier-ozoir-la-ferriere" className="text-primary hover:underline">Ozoir-la-Ferrière</Link>, <Link to="/immobilier-pontault-combault" className="text-primary hover:underline">Pontault-Combault</Link>, <Link to="/immobilier-roissy-en-brie" className="text-primary hover:underline">Roissy-en-Brie</Link>, <Link to="/immobilier-brie-comte-robert" className="text-primary hover:underline">Brie-Comte-Robert</Link> — me permet de vous conseiller avec précision sur les prix, les quartiers et les tendances du secteur.
                </p>
                <p>
                  Je crois profondément que la relation humaine est au cœur de ce métier. L'écoute, la transparence et la bienveillance sont les valeurs qui guident mon quotidien. Mon objectif n'est pas simplement de vendre un bien, mais de créer une expérience positive pour chacun de mes clients.
                </p>
                <p>
                  La preuve ? Mes clients reviennent. Plusieurs m'ont confié 2, voire 3 transactions. C'est la plus belle marque de confiance que je puisse recevoir, et c'est ce qui me motive chaque jour.
                </p>
                <p>
                  Avec une note de <strong className="text-foreground">4.9/5 sur 47+ avis vérifiés sur Immodvisor</strong> (norme NF ISO 20488), je m'engage à vous offrir le même niveau de qualité et de disponibilité.
                </p>
                <p>
                  Au fil des années, j'ai également développé une activité d'accompagnement de nouveaux conseillers immobiliers. Transmettre mon expérience, partager les bonnes pratiques et voir des personnes s'épanouir dans ce métier est une source de satisfaction immense.
                </p>
                <div className="bg-card rounded-xl p-6 border border-border/40 mt-4">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">Informations professionnelles</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong className="text-foreground">Statut :</strong> Agent commercial indépendant</li>
                    <li><strong className="text-foreground">RSAC :</strong> Melun n° 339303513</li>
                    <li><strong className="text-foreground">Réseau :</strong> IAD France</li>
                    <li><strong className="text-foreground">Téléphone :</strong> <a href="tel:+33785618768" className="text-primary hover:underline">07 85 61 87 68</a></li>
                    <li><strong className="text-foreground">Email :</strong> <a href="mailto:patricia.vieira@iadfrance.fr" className="text-primary hover:underline">patricia.vieira@iadfrance.fr</a></li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-gold/20 rounded-2xl blur-sm" />
                  <img
                    src={patriciaPhoto}
                    alt="Patricia Vieira, conseillère immobilier à Gretz-Armainvilliers en Seine-et-Marne"
                    className="relative rounded-2xl shadow-xl w-full max-w-md object-cover aspect-[3/4]"
                    loading="lazy"
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
                { icon: Award, title: "Expérience", desc: "Plus de 10 ans d'expertise dans l'immobilier local en Seine-et-Marne." },
                { icon: Heart, title: "Écoute", desc: "Chaque projet est unique. Je prends le temps de comprendre vos besoins et vos attentes." },
                { icon: Users, title: "Disponibilité", desc: "Je suis à votre écoute 6 jours sur 7, réactive et accessible." },
                { icon: Sparkles, title: "Transparence", desc: "Pas de surprises : je vous informe à chaque étape avec honnêteté et clarté." },
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
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Vous avez un projet ? Parlons-en !
              </h2>
              <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
                Que ce soit pour vendre, acheter ou simplement obtenir des conseils, je serai ravie d'échanger avec vous.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Me contacter <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default APropos;
