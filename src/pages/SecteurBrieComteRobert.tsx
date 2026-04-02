import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, MapPin, Users, Phone, ArrowRight, TreePine, Train, School, Heart, Building } from "lucide-react";
import coverImage from "@/assets/brie-comte-robert-cover.jpg";
import brieEglise from "@/assets/brie-eglise.jpg";
import brieMarche from "@/assets/brie-marche.jpg";
import SecteurMaillage from "@/components/SecteurMaillage";

const SecteurBrieComteRobert = () => (
  <>
    <PageSEO
      title="Immobilier Brie-Comte-Robert (77170) — Prix, Marché et Conseillère Locale | Patricia Vieira"
      description="Tout savoir sur l'immobilier à Brie-Comte-Robert : prix au m², marché local, quartiers, commodités. Patricia Vieira, votre conseillère IAD sur place. Estimation gratuite."
      canonical="/immobilier-brie-comte-robert"
    />
  <main className="bg-background">
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={coverImage} alt="Château de Brie-Comte-Robert" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <p className="text-white/80 font-body text-sm uppercase tracking-widest mb-3">Mon secteur · Seine-et-Marne</p>
        <h1 className="leading-tight mb-6">
          <span className="font-heading text-3xl md:text-5xl font-bold text-white">Immobilier à Brie-Comte-Robert</span>
          <br />
          <span className="font-body text-lg md:text-xl font-normal text-white/90 inline-block mt-2 bg-black/30 px-4 py-2 rounded-lg">vivre, acheter et investir dans une ville de caractère en Seine-et-Marne</span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/estimation">Estimer mon bien <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          <Button asChild variant="hero-outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground"><Link to="/contact">Me contacter</Link></Button>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <TreePine className="h-6 w-6 text-primary" /> Vivre à Brie-Comte-Robert&nbsp;: une ville entre histoire, dynamisme et qualité de vie
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Située en <strong>Seine-et-Marne</strong>, à environ 30&nbsp;kilomètres de Paris, <strong>Brie-Comte-Robert</strong> est une commune qui séduit par son équilibre entre patrimoine, dynamisme et cadre de vie agréable. Elle attire aujourd'hui de nombreux acquéreurs à la recherche d'un environnement à la fois vivant et accessible.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <img src={brieEglise} alt="Église et centre-ville de Brie-Comte-Robert" className="rounded-xl w-full h-64 object-cover" />
          <img src={brieMarche} alt="Marché médiéval au château de Brie-Comte-Robert" className="rounded-xl w-full h-64 object-cover" />
        </div>
        <p><strong>Vivre à Brie-Comte-Robert</strong>, c'est profiter d'une ville qui a su conserver son identité tout en se développant. Son centre-ville animé, ses commerces et ses infrastructures en font un lieu de vie particulièrement apprécié.</p>
        <p>L'<strong>immobilier à Brie-Comte-Robert</strong> bénéficie de cette attractivité, avec un marché dynamique et une demande régulière.</p>
      </div>
    </section>

    {/* Patrimoine */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" /> Un cadre de vie chargé d'histoire et de charme
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p><strong>Brie-Comte-Robert</strong> est une ville riche d'un patrimoine historique remarquable.</p>
          <p>Son château médiéval, véritable emblème de la commune, donne une identité forte au centre-ville. Les rues et les bâtiments anciens participent au charme de la ville et offrent un cadre de vie unique.</p>
          <p><strong>Vivre à Brie-Comte-Robert</strong>, c'est évoluer dans un environnement où l'histoire et le quotidien se rencontrent harmonieusement.</p>
        </div>
      </div>
    </section>

    {/* Cadre de vie */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Home className="h-6 w-6 text-primary" /> Un cadre de vie agréable et équilibré
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Au-delà de son patrimoine, la ville offre un cadre de vie particulièrement agréable.</p>
        <p>Les quartiers résidentiels sont nombreux, avec une forte présence de maisons individuelles et de pavillons, souvent accompagnés de jardins.</p>
        <p>Les espaces verts permettent de profiter d'un environnement équilibré, idéal pour les familles ou les personnes en quête de tranquillité.</p>
      </div>
    </section>

    {/* Localisation */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Train className="h-6 w-6 text-primary" /> Une localisation stratégique en Seine-et-Marne
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p><strong>Brie-Comte-Robert</strong> bénéficie d'une localisation stratégique, permettant de rejoindre facilement les pôles économiques de la région.</p>
          <p>La commune est bien desservie par les axes routiers et les transports, facilitant les déplacements vers Paris et les villes environnantes.</p>
          <p><strong>Acheter une maison à Brie-Comte-Robert</strong> permet ainsi de concilier qualité de vie et accessibilité.</p>
        </div>
      </div>
    </section>

    {/* Familles */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <School className="h-6 w-6 text-primary" /> Une ville idéale pour les familles
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p><strong>Brie-Comte-Robert</strong> est particulièrement adaptée à la vie de famille.</p>
        <p>Elle dispose&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>d'écoles maternelles et élémentaires</li>
          <li>de collèges</li>
          <li>de lycées</li>
        </ul>
        <p>Les infrastructures sportives et culturelles sont variées, permettant à chacun de s'épanouir.</p>
        <p>Les commerces et services facilitent le quotidien.</p>
      </div>
    </section>

    {/* Vie locale */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" /> Une ville dynamique et conviviale
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>La commune propose une vie locale dynamique, avec de nombreux événements tout au long de l'année.</p>
          <p>Marchés, fêtes, événements culturels… <strong>Brie-Comte-Robert</strong> offre une ambiance conviviale et chaleureuse.</p>
        </div>
      </div>
    </section>

    {/* Marché immobilier */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <TrendingUp className="h-6 w-6 text-primary" /> Le marché immobilier à Brie-Comte-Robert
      </h2>
      <p className="text-muted-foreground font-body leading-relaxed mb-8">Le marché immobilier à Brie-Comte-Robert est actif et attractif.</p>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">💰 Prix au m²</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl bg-card border border-border p-6 text-center">
          <p className="text-sm text-muted-foreground font-body mb-1">Appartements</p>
          <p className="font-heading text-2xl font-bold text-primary">2 700 – 3 400 € / m²</p>
        </div>
        <div className="rounded-xl bg-card border border-border p-6 text-center">
          <p className="text-sm text-muted-foreground font-body mb-1">Maisons</p>
          <p className="font-heading text-2xl font-bold text-primary">2 900 – 3 800 € / m²</p>
        </div>
      </div>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">📈 Tendances</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body leading-relaxed mb-10">
        <li>Demande soutenue</li>
        <li>Attractivité constante</li>
        <li>Marché équilibré</li>
      </ul>
      <p className="text-muted-foreground font-body leading-relaxed mb-10">Les biens bien positionnés se vendent dans de bonnes conditions.</p>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">🏡 Types de biens</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body leading-relaxed">
        <li>Maisons individuelles</li>
        <li>Pavillons</li>
        <li>Appartements</li>
      </ul>
    </section>

    {/* Pourquoi acheter / vendre */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" /> Pourquoi acheter ou vendre à Brie-Comte-Robert&nbsp;?
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-6">Brie-Comte-Robert est une ville attractive en Seine-et-Marne.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les acquéreurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Cadre de vie agréable</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Charme du patrimoine</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Accessibilité</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les vendeurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Demande active</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Marché dynamique</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Valorisation des biens</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground font-body leading-relaxed">Une <strong>estimation immobilière à Brie-Comte-Robert</strong> permet d'optimiser la vente.</p>
      </div>
    </section>

    {/* Expertise */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Heart className="h-6 w-6 text-primary" /> Mon expertise sur Brie-Comte-Robert
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p><strong>Brie-Comte-Robert</strong> est un secteur que je connais bien.</p>
        <p>J'y accompagne régulièrement des projets immobiliers, avec une approche basée sur l'écoute, la transparence et le conseil.</p>
      </div>
    </section>

    {/* CTA final */}
    <section className="bg-primary/10 py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
          <Phone className="h-6 w-6 text-primary" /> Concrétisons votre projet immobilier à Brie-Comte-Robert
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-8">Que ce soit pour vendre, acheter ou réaliser une <strong>estimation immobilière à Brie-Comte-Robert</strong>, je suis à votre disposition pour vous accompagner.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/estimation">Demander une estimation gratuite <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          <Button asChild variant="hero-outline" size="lg"><Link to="/contact">Me contacter</Link></Button>
        </div>
      </div>
    </section>

    <SecteurMaillage currentCity="Brie-Comte-Robert" currentPath="/immobilier-brie-comte-robert" />
  </main>
  </>
);

export default SecteurBrieComteRobert;
