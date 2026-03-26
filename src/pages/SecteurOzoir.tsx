import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, MapPin, Users, Phone, ArrowRight, TreePine, Train, School, Heart, Leaf } from "lucide-react";
import ozoirMaison1 from "@/assets/ozoir-maison1.jpg";
import ozoirMaison2 from "@/assets/ozoir-maison2.jpg";
import ozoirChateau from "@/assets/ozoir-chateau.jpg";
import ozoirGolfReal from "@/assets/ozoir-golf-real.jpg";
import ozoirHero from "@/assets/ozoir-hero.jpg";

const SecteurOzoir = () => (
  <main className="bg-background">
    {/* Hero */}
    <section className="relative bg-navy py-24 md:py-32">
      <div className="absolute inset-0 bg-foreground/40" />
      <img src={ozoirHero} alt="Château et jardins d'Ozoir-la-Ferrière" className="absolute inset-0 w-full h-full object-cover -z-0" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <div className="bg-foreground/45 backdrop-blur-sm rounded-2xl px-8 py-10 inline-block">
          <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-widest mb-3">Mon secteur · Seine-et-Marne</p>
          <h1 className="leading-tight mb-6">
            <span className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">Immobilier à Ozoir-la-Ferrière</span>
            <br />
            <span className="font-body text-xl md:text-2xl font-normal text-primary-foreground/90">un cadre de vie recherché entre nature, standing et proximité de Paris</span>
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="lg"><Link to="/estimation-immobiliere#formulaire">Estimer mon bien <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            <Button asChild variant="hero-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"><Link to="/contact">Me contacter</Link></Button>
          </div>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <TreePine className="h-6 w-6 text-primary" /> Vivre à Ozoir-la-Ferrière&nbsp;: bien plus qu'une adresse, un véritable art de vivre
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Et si votre prochain projet immobilier vous offrait bien plus qu'un simple logement&nbsp;?</p>
        <p>Située en <strong>Seine-et-Marne</strong>, à seulement 25&nbsp;kilomètres de Paris, <strong>Ozoir-la-Ferrière</strong> s'impose aujourd'hui comme l'une des communes les plus recherchées du secteur. Elle séduit par son équilibre rare entre accessibilité, qualité de vie et environnement résidentiel.</p>
        <p><strong>Vivre à Ozoir-la-Ferrière</strong>, c'est faire le choix d'un quotidien plus serein, dans une ville à taille humaine où tout est pensé pour le confort de ses habitants. C'est aussi une commune qui attire une clientèle exigeante, en quête d'espace, de tranquillité et d'un certain standing.</p>
        <p>L'<strong>immobilier à Ozoir-la-Ferrière</strong> reflète parfaitement cette attractivité, avec des biens recherchés et un marché dynamique.</p>
      </div>
    </section>

    {/* Photos quartiers résidentiels */}
    <section className="container mx-auto px-4 max-w-4xl pb-8">
      <div className="grid md:grid-cols-2 gap-4">
        <img src={ozoirMaison1} alt="Maison avec jardin et haie verdoyante à Ozoir-la-Ferrière" width={640} height={480} loading="lazy" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
        <img src={ozoirMaison2} alt="Maison familiale avec véranda et jardin à Ozoir-la-Ferrière" width={640} height={480} loading="lazy" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
      </div>
    </section>

    {/* Cadre de vie */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" /> Un cadre de vie résidentiel et privilégié
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Ozoir-la-Ferrière est particulièrement reconnue pour ses quartiers pavillonnaires et son environnement verdoyant.</p>
          <p>Ici, les maisons individuelles avec jardin sont largement présentes, offrant un cadre idéal pour les familles ou les acquéreurs souhaitant gagner en qualité de vie.</p>
          <p>Les quartiers sont calmes, harmonieux et bien entretenus, ce qui renforce le sentiment de sérénité au quotidien.</p>
          <p><strong>Vivre à Ozoir-la-Ferrière</strong>, c'est profiter&nbsp;:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>d'un environnement apaisant</li>
            <li>de rues résidentielles agréables</li>
            <li>d'un cadre propice à la vie de famille</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Golf */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        ⛳ Le golf d'Ozoir&nbsp;: un véritable atout premium
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Parmi les éléments qui distinguent réellement Ozoir-la-Ferrière, le golf occupe une place à part.</p>
        <p>Situé dans un environnement naturel d'exception, ce domaine offre un cadre unique, mêlant nature, élégance et tranquillité. Il contribue fortement à l'image qualitative de la commune.</p>
        <p>À proximité du golf, on retrouve des secteurs particulièrement recherchés, avec des biens immobiliers offrant un cadre de vie privilégié.</p>
      </div>
      <div className="mt-8 grid md:grid-cols-5 gap-4">
        <img src={ozoirChateau} alt="Château et clubhouse du golf d'Ozoir-la-Ferrière" width={800} height={400} loading="lazy" className="rounded-2xl shadow-lg w-full h-64 md:h-72 object-cover md:col-span-3" />
        <img src={ozoirGolfReal} alt="Fairway verdoyant du golf d'Ozoir-la-Ferrière" width={500} height={500} loading="lazy" className="rounded-2xl shadow-lg w-full h-64 md:h-72 object-cover md:col-span-2" />
      </div>
    </section>

    {/* Kaufman */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          🏡 Les quartiers Kaufman&nbsp;: des maisons recherchées et valorisées
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Ozoir-la-Ferrière est également connue pour ses quartiers développés par Kaufman &amp; Broad.</p>
          <p>Ces secteurs sont particulièrement appréciés pour&nbsp;:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>la qualité des constructions</li>
            <li>l'harmonie architecturale</li>
            <li>les terrains agréables</li>
          </ul>
          <p>Ces maisons représentent aujourd'hui une valeur sûre sur le marché <strong>immobilier à Ozoir-la-Ferrière</strong>.</p>
          <p><strong>Acheter une maison à Ozoir-la-Ferrière</strong> dans ces quartiers, c'est investir dans un bien recherché, durable et valorisé.</p>
        </div>
      </div>
    </section>

    {/* Nature et modernité */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Leaf className="h-6 w-6 text-primary" /> Une ville entre nature et modernité
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Ozoir-la-Ferrière bénéficie d'un environnement naturel particulièrement apprécié.</p>
        <p>Entre forêts, parcs et espaces verts, la commune offre de nombreuses possibilités de promenade et de détente.</p>
        <p>Cet équilibre entre urbanisation maîtrisée et nature est aujourd'hui l'un des critères majeurs dans les recherches immobilières.</p>
      </div>
    </section>

    {/* Localisation */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Train className="h-6 w-6 text-primary" /> Une localisation stratégique pour les actifs
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>La commune est desservie par le <strong>RER&nbsp;E</strong>, permettant de rejoindre Paris rapidement.</p>
          <p>Elle bénéficie également d'un accès facilité aux axes routiers, ce qui en fait une localisation idéale pour les actifs souhaitant concilier travail en Île-de-France et qualité de vie.</p>
        </div>
      </div>
    </section>

    {/* Familles */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <School className="h-6 w-6 text-primary" /> Une ville parfaitement adaptée à la vie de famille
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Ozoir-la-Ferrière dispose de toutes les infrastructures nécessaires&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>écoles</li>
          <li>collèges</li>
          <li>lycée</li>
          <li>équipements sportifs</li>
        </ul>
        <p>Les commerces et services sont nombreux, facilitant le quotidien.</p>
      </div>
    </section>

    {/* Marché immobilier */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" /> Le marché immobilier à Ozoir-la-Ferrière
        </h2>

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

        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">📈 Tendances</h3>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-10">
          <p>Le marché est&nbsp;:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>dynamique</li>
            <li>recherché</li>
            <li>porté par une clientèle qualitative</li>
          </ul>
          <p>Les maisons avec extérieur sont particulièrement demandées.</p>
        </div>
      </div>
    </section>

    {/* Pourquoi acheter / vendre */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <MapPin className="h-6 w-6 text-primary" /> Pourquoi acheter ou vendre à Ozoir-la-Ferrière&nbsp;?
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-8">
        <p>Ozoir-la-Ferrière offre&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>un cadre de vie premium</li>
          <li>une forte attractivité</li>
          <li>une valeur immobilière stable</li>
        </ul>
      </div>
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
      <p className="text-muted-foreground font-body leading-relaxed">Pour vendre, réaliser une <strong>estimation immobilière à Ozoir-la-Ferrière</strong> est essentiel pour optimiser son projet.</p>
    </section>

    {/* Expertise */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" /> Mon expertise sur Ozoir-la-Ferrière
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Ozoir-la-Ferrière est un secteur que je connais parfaitement.</p>
          <p>J'y accompagne régulièrement des projets immobiliers, et ce que j'apprécie particulièrement ici, c'est la qualité des biens et le profil des acquéreurs.</p>
          <p>Mon approche repose sur l'écoute, la transparence et un accompagnement personnalisé, afin que chaque projet se réalise dans les meilleures conditions.</p>
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section className="bg-primary/10 py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
          <Phone className="h-6 w-6 text-primary" /> Concrétisons votre projet immobilier à Ozoir-la-Ferrière
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-8">Vous avez un projet immobilier à Ozoir-la-Ferrière&nbsp;? Que ce soit pour vendre, acheter ou réaliser une <strong>estimation immobilière à Ozoir-la-Ferrière</strong>, je suis à votre écoute pour vous accompagner.</p>
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
