import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Sparkles, ArrowRight, Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import patriciaPhoto from "@/assets/patricia-vieira.jpg";
import patriciaCover from "@/assets/patricia-apropos-cover.png.asset.json";

const avis = [
  { name: "Coraline", type: "Vente", stars: 5, text: "Parfaite ! Vente de mon appartement en 1 semaine et au prix ! Je recommande les yeux fermés." },
  { name: "Camille", type: "Vente", stars: 5, text: "C'est la troisième fois que je fais appel à Patricia pour mes projets immobiliers. Toujours très disponible et à l'écoute, elle a su mettre à profit son expérience pour me permettre de vendre ma maison rapidement, et au prix demandé." },
  { name: "Kevin", type: "Vente", stars: 5, text: "Nous avons fait appel au service de Patricia pour la vente de notre logement et elle nous a accompagnés du début à la fin, beaucoup d'explications et de conseils, je la recommande à 100%." },
  { name: "Christophe", type: "Vente", stars: 5, text: "C'est la 3ème fois que je sollicite Patricia, preuve de son sérieux et de la confiance que je lui témoigne. Patricia se montre toujours disponible, à l'écoute, réactive." },
  { name: "Acheteur anonyme", type: "Achat", stars: 5, text: "Patricia a su nous accompagner et répondre à nos questions pour notre premier achat, nous sommes ravis. Encore merci !" },
  { name: "Client", type: "Vente", stars: 5, text: "Merci beaucoup à Patricia Vieira de nous avoir accompagnés dans notre projet de vente. Patricia est une personne très gentille, à l'écoute et de très bon conseils." },
  { name: "Client", type: "Vente", stars: 5, text: "Une très belle expérience avec un agent immobilier de grande qualité, très humaine, très simple, et bienveillante que nous recommandons les yeux fermés." },
  { name: "Client", type: "Vente", stars: 5, text: "Nous avons fait appel au service de Patricia pour la vente de notre logement et elle nous a accompagnés du début à la fin, beaucoup d'explications et de conseils." },
];

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
        title="À Propos de Patricia Vieira — Conseillère Immobilier IAD France en Seine-et-Marne"
        description="Découvrez le parcours de Patricia Vieira, conseillère immobilier IAD France à Gretz-Armainvilliers. 11 ans d'expérience, +150 biens vendus, avis clients 4.9/5."
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
              backgroundImage: `url(${patriciaCover.url})`,
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto max-w-5xl pb-12 px-4 md:px-8 relative z-10">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                À Propos — Patricia Vieira
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                Conseillère immobilier et Manager Platinium Associée depuis plus de 11 ans.
              </p>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="section-padding">
          <div
            ref={sectionRef}
            className="container mx-auto max-w-5xl transition-all duration-700 ease-out opacity-0 translate-y-8"
          >
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  Mon parcours
                </h2>
                <div className="section-divider !mx-0 !w-14" />
                <p className="text-lg text-foreground">
                  Mon parcours professionnel s'est construit autour de valeurs fortes : le sens du service, l'engagement et le goût du challenge.
                </p>
                <p>
                  Après un début en agence immobilière, où j'ai compris que vendre un bien, c'est avant tout accompagner un projet de vie, j'ai dirigé pendant plus de 25 ans ma propre entreprise dans le commerce. Cette expérience m'a permis de développer rigueur, sens des responsabilités et exigence de satisfaction client.
                </p>
                <p>
                  En 2015, j'ai choisi de relever un nouveau défi en rejoignant le réseau iad France, dans la continuité de mon parcours d'indépendante, avec la volonté de développer une activité structurée, performante et tournée vers les résultats.
                </p>
                <p>
                  Aujourd'hui, j'accompagne chaque client avec implication et transparence. Chaque bien est un engagement personnel, avec un objectif clair : vendre dans les meilleures conditions, le plus rapidement possible et au meilleur prix.
                </p>
                <p>
                  Depuis plusieurs années, j'accompagne mes clients dans leurs projets immobiliers avec une approche basée sur l'écoute, la transparence et la confiance.
                </p>
                <p>
                  Être conseillère immobilier, ce n'est pas simplement vendre un bien. C'est comprendre un projet de vie, accompagner des décisions importantes et être présente à chaque étape.
                </p>
                <p>
                  Au fil de mon expérience, j'ai développé une vraie expertise du marché immobilier en SEINE ET MARNE, notamment sur les secteurs de <Link to="/immobilier-gretz-armainvilliers" className="text-primary hover:underline">Gretz-Armainvilliers</Link>, <Link to="/immobilier-ozoir-la-ferriere" className="text-primary hover:underline">Ozoir-la-Ferrière</Link>, <Link to="/immobilier-pontault-combault" className="text-primary hover:underline">Pontault-Combault</Link>, <Link to="/immobilier-tournan-en-brie" className="text-primary hover:underline">Tournan-en-Brie</Link>, <Link to="/immobilier-brie-comte-robert" className="text-primary hover:underline">Brie-Comte-Robert</Link>, etc., sans oublier le VAL-DE-MARNE où mes services sont souvent sollicités.
                </p>
                <p>
                  Mon objectif est simple : vous permettre de vendre dans les meilleures conditions ou de trouver le bien qui correspond réellement à votre projet.
                </p>
                <p>
                  J'accorde une importance particulière à la relation humaine. Chaque projet est unique, et je prends le temps de vous accompagner avec sérieux, bienveillance et professionnalisme.
                </p>
                <p>
                  Aujourd'hui, j'accompagne également des personnes qui souhaitent se lancer dans l'immobilier et construire leur propre activité, en leur transmettant mon expérience et en les aidant à évoluer.
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
          </div>
        </section>

        {/* Avis Clients */}
        <section className="section-padding" id="avis">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-4">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
                Avis Clients
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                4.9/5 sur 47+ avis vérifiés sur Immodvisor (norme NF ISO 20488)
              </p>
              <div className="flex items-center justify-center gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <div className="section-divider mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {avis.map((a, i) => (
                <div key={i} className="bg-card rounded-xl p-7 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                  <Quote className="w-8 h-8 text-primary/25 mb-4" />
                  <p className="text-foreground font-body leading-relaxed mb-6 italic">
                    "{a.text}"
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: a.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-foreground text-sm">{a.name}</span>
                    <span className="text-xs text-muted-foreground font-body bg-muted px-3 py-1 rounded-full">{a.type}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.immodvisor.com/pro/iad-france-patricia-vieira-gretz-armainvilliers-77220-16825.html"
                target="_blank"
                rel="noopener"
                className="text-primary font-body font-semibold hover:underline inline-flex items-center gap-2"
              >
                Voir tous mes avis sur Immodvisor →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto max-w-5xl text-center">
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
        </section>
      </main>
    </>
  );
};

export default APropos;
