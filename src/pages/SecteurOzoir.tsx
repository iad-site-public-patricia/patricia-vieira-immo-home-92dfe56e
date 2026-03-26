import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, MapPin, Users, Phone, ArrowRight, TreePine, Train, School, Heart, Building, Leaf } from "lucide-react";

const SecteurOzoir = () => (
  <main className="bg-background">
    {/* Hero */}
    <section className="relative bg-navy py-24 md:py-32">
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-widest mb-3">Mon secteur · Seine-et-Marne</p>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
          Immobilier à Ozoir-la-Ferrière&nbsp;: vivre, acheter et investir dans une ville recherchée de Seine-et-Marne
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/estimation-immobiliere#formulaire">Estimer mon bien <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          <Button asChild variant="hero-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"><Link to="/contact">Me contacter</Link></Button>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <TreePine className="h-6 w-6 text-primary" /> Vivre à Ozoir-la-Ferrière&nbsp;: un cadre de vie équilibré aux portes de Paris
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Située en <strong>Seine-et-Marne</strong>, à environ 25&nbsp;kilomètres de Paris, <strong>Ozoir-la-Ferrière</strong> est une commune particulièrement appréciée pour son cadre de vie agréable et son accessibilité. Elle attire aujourd'hui de nombreux acquéreurs en quête d'un environnement plus calme, tout en restant proche de la capitale.</p>
        <p><strong>Vivre à Ozoir-la-Ferrière</strong>, c'est bénéficier d'un équilibre entre dynamisme urbain et sérénité résidentielle. La ville séduit aussi bien les familles que les actifs, grâce à ses infrastructures complètes et à sa qualité de vie.</p>
        <p>L'<strong>immobilier à Ozoir-la-Ferrière</strong> représente une opportunité intéressante pour celles et ceux qui souhaitent s'installer durablement ou réaliser un investissement en Seine-et-Marne.</p>
      </div>
    </section>


    {/* Cadre de vie */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" /> Un cadre de vie recherché et résidentiel
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Ozoir-la-Ferrière est une ville à taille humaine, avec un environnement majoritairement pavillonnaire.</p>
          <p>Elle est particulièrement reconnue pour ses quartiers résidentiels calmes, ses espaces verts et son atmosphère sécurisante. C'est une commune où il est agréable de vivre au quotidien, loin du stress des grandes villes.</p>
          <p>Les acquéreurs qui choisissent <strong>Ozoir-la-Ferrière</strong> recherchent généralement&nbsp;:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>un cadre de vie paisible</li>
            <li>des maisons avec jardin</li>
            <li>un environnement familial</li>
          </ul>
          <p>C'est une ville qui correspond parfaitement aux attentes actuelles du marché immobilier.</p>
        </div>
      </div>
    </section>

    {/* Localisation */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Train className="h-6 w-6 text-primary" /> Une localisation stratégique pour les déplacements
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Ozoir-la-Ferrière bénéficie d'une excellente accessibilité.</p>
        <p>La commune est desservie par le <strong>RER&nbsp;E</strong>, permettant de rejoindre Paris rapidement. Cela en fait une localisation idéale pour les actifs travaillant en Île-de-France.</p>
        <p>Les axes routiers à proximité facilitent également les déplacements vers les zones d'emploi environnantes.</p>
        <p><strong>Acheter une maison à Ozoir-la-Ferrière</strong> permet ainsi de concilier confort de vie et mobilité.</p>
      </div>
    </section>

    {/* Familles */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <School className="h-6 w-6 text-primary" /> Une ville idéale pour les familles
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Ozoir-la-Ferrière dispose de toutes les infrastructures nécessaires pour une vie de famille épanouie.</p>
          <p>On y trouve&nbsp;:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>des écoles maternelles et élémentaires</li>
            <li>des collèges</li>
            <li>un lycée</li>
          </ul>
          <p>Les équipements sportifs et culturels sont nombreux, permettant à chacun de pratiquer des activités variées.</p>
          <p>Les commerces de proximité et les services facilitent le quotidien, avec une offre complète accessible rapidement.</p>
        </div>
      </div>
    </section>

    {/* Vie locale */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Users className="h-6 w-6 text-primary" /> Une vie locale dynamique
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Ozoir-la-Ferrière est une ville vivante, qui propose de nombreuses animations tout au long de l'année.</p>
        <p>Marchés, événements culturels, activités associatives… la commune offre un cadre dynamique et convivial.</p>
        <p>Cette vie locale contribue fortement à l'attractivité de la ville et à la qualité de vie de ses habitants.</p>
      </div>
    </section>

    {/* Nature & modernité */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" /> Un environnement qui allie modernité et nature
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>La ville a su se développer tout en conservant un cadre agréable.</p>
          <p>Les espaces verts, les zones résidentielles et les aménagements urbains permettent de bénéficier d'un environnement équilibré.</p>
          <p>Ce mélange entre modernité et nature est particulièrement recherché par les acquéreurs aujourd'hui.</p>
        </div>
      </div>
    </section>

    {/* Marché immobilier */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <TrendingUp className="h-6 w-6 text-primary" /> Le marché immobilier à Ozoir-la-Ferrière
      </h2>
      <p className="text-muted-foreground font-body leading-relaxed mb-8">Le marché immobilier à Ozoir-la-Ferrière est actif et recherché.</p>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">💰 Prix au m²</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl bg-card border border-border p-6 text-center">
          <p className="text-sm text-muted-foreground font-body mb-1">Appartements</p>
          <p className="font-heading text-2xl font-bold text-primary">3 000 – 3 800 € / m²</p>
        </div>
        <div className="rounded-xl bg-card border border-border p-6 text-center">
          <p className="text-sm text-muted-foreground font-body mb-1">Maisons</p>
          <p className="font-heading text-2xl font-bold text-primary">3 300 – 4 200 € / m²</p>
        </div>
      </div>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">📈 Tendances du marché</h3>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-10">
        <p>Le secteur bénéficie&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>d'une demande soutenue</li>
          <li>d'un attrait pour les maisons avec extérieur</li>
          <li>d'un marché relativement stable</li>
        </ul>
        <p>Les biens bien positionnés se vendent dans de bonnes conditions.</p>
      </div>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">🏡 Types de biens</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body leading-relaxed">
        <li>Maisons individuelles</li>
        <li>Pavillons</li>
        <li>Appartements récents</li>
      </ul>
      <p className="text-muted-foreground font-body leading-relaxed mt-4">Ce qui permet de répondre à différents projets immobiliers.</p>
    </section>

    {/* Pourquoi acheter / vendre */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" /> Pourquoi acheter ou vendre à Ozoir-la-Ferrière&nbsp;?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les acquéreurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Qualité de vie</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Accessibilité</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Environnement familial</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les vendeurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Forte demande</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Marché dynamique</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Valorisation des biens</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground font-body leading-relaxed">Une <strong>estimation immobilière à Ozoir-la-Ferrière</strong> permet de positionner son bien au juste prix et d'optimiser sa vente.</p>
      </div>
    </section>

    {/* Expertise */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Heart className="h-6 w-6 text-primary" /> Mon expertise sur Ozoir-la-Ferrière
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Ozoir-la-Ferrière est un secteur que je connais particulièrement bien.</p>
        <p>J'y accompagne régulièrement des projets immobiliers, que ce soit pour des ventes ou des acquisitions. Cette connaissance du terrain me permet d'apporter des conseils précis et adaptés à chaque situation.</p>
        <p>Mon approche repose sur l'écoute, la transparence et un accompagnement personnalisé.</p>
        <p>Chaque projet mérite une attention particulière, et je mets tout en œuvre pour qu'il se réalise dans les meilleures conditions.</p>
      </div>
    </section>

    {/* CTA final */}
    <section className="bg-primary/10 py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
          <Phone className="h-6 w-6 text-primary" /> Concrétisons votre projet immobilier à Ozoir-la-Ferrière
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-8">Que vous souhaitiez vendre, acheter ou réaliser une <strong>estimation immobilière à Ozoir-la-Ferrière</strong>, je suis à votre disposition pour vous accompagner. Mon objectif est de vous guider avec sérieux et bienveillance, à chaque étape de votre projet.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/estimation-immobiliere#formulaire">Demander une estimation gratuite <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          <Button asChild variant="hero-outline" size="lg"><Link to="/contact">Me contacter</Link></Button>
        </div>
      </div>
    </section>

    {/* Maillage interne */}
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Découvrir les villes voisines</h2>
      <div className="flex flex-wrap gap-3">
        {[
          { label: "Gretz-Armainvilliers", to: "/secteur/gretz-armainvilliers" },
          { label: "Tournan-en-Brie", to: "/secteur/tournan-en-brie" },
          { label: "Brie-Comte-Robert", to: "/secteur/brie-comte-robert" },
          { label: "Roissy-en-Brie", to: "/secteur/roissy-en-brie" },
          { label: "Pontault-Combault", to: "/secteur/pontault-combault" },
        ].map(v => (
          <Link key={v.to} to={v.to} className="rounded-full border border-border px-4 py-2 text-sm font-body text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            {v.label}
          </Link>
        ))}
      </div>
    </section>
  </main>
);

export default SecteurOzoir;
