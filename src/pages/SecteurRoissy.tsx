import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { TrendingUp, MapPin, Phone, ArrowRight, TreePine, Train, School, Heart, Building, Users } from "lucide-react";
import SecteurMaillage from "@/components/SecteurMaillage";

const SecteurRoissy = () => (
  <>
    <PageSEO
      title="Immobilier Roissy-en-Brie (77680) — Prix, Marché Local | Patricia Vieira"
      description="Immobilier à Roissy-en-Brie : prix, marché local, cadre de vie. Patricia Vieira, conseillère IAD France. Estimation gratuite et sans engagement."
      canonical="/immobilier-roissy-en-brie"
      geoPlacename="Roissy-en-Brie"
    />
    <main className="bg-background">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary/60">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <p className="text-muted-foreground font-body text-sm uppercase tracking-widest mb-3">Mon secteur · Seine-et-Marne</p>
          <h1 className="leading-tight mb-6">
            <span className="font-heading text-3xl md:text-5xl font-bold text-foreground">Immobilier à Roissy-en-Brie</span>
            <br />
            <span className="font-body text-lg md:text-xl font-normal text-muted-foreground">une ville résidentielle et bien connectée aux portes de Paris</span>
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="lg"><Link to="/estimation">Estimer mon bien <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            <Button asChild variant="hero-outline" size="lg"><Link to="/contact">Me contacter</Link></Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <TreePine className="h-6 w-6 text-primary" /> Vivre à Roissy-en-Brie&nbsp;: un cadre résidentiel prisé en Seine-et-Marne
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Située en <strong>Seine-et-Marne</strong>, à une vingtaine de kilomètres de Paris, <strong>Roissy-en-Brie</strong> est une commune résidentielle d'environ 23&nbsp;000 habitants qui séduit par son cadre de vie agréable et sa très bonne desserte en transports.</p>
          <p><strong>Vivre à Roissy-en-Brie</strong>, c'est profiter d'un environnement calme et verdoyant tout en restant connecté aux bassins d'emploi parisiens grâce au <strong>RER&nbsp;E</strong>. La ville offre un excellent compromis entre qualité de vie et accessibilité.</p>
          <p>L'<strong>immobilier à Roissy-en-Brie</strong> attire aujourd'hui de nombreux acquéreurs, notamment des familles à la recherche d'espace et de tranquillité.</p>
        </div>
      </section>

      {/* Cadre de vie */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" /> Un cadre de vie résidentiel et verdoyant
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>Roissy-en-Brie se distingue par ses quartiers résidentiels calmes et bien entretenus. La ville bénéficie de nombreux espaces verts, dont le <strong>parc de la Lome</strong>, véritable poumon vert apprécié des habitants pour les promenades et les activités en plein air.</p>
            <p>Les quartiers pavillonnaires sont largement représentés, avec des maisons individuelles souvent accompagnées de jardins. On trouve également des résidences récentes offrant des appartements de qualité.</p>
            <p>Cette diversité de l'habitat permet à chacun de trouver le bien correspondant à son projet.</p>
          </div>
        </div>
      </section>

      {/* Transports */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Train className="h-6 w-6 text-primary" /> Une desserte en transports performante
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Roissy-en-Brie est desservie par la gare du <strong>RER&nbsp;E</strong>, permettant de rejoindre Paris (Gare de l'Est) en environ 30 minutes. C'est un atout majeur pour les actifs travaillant en région parisienne.</p>
          <p>La commune bénéficie également d'un réseau de bus et d'un accès facilité aux axes routiers, notamment vers la Francilienne (N104) et l'autoroute A4.</p>
          <p><strong>Acheter à Roissy-en-Brie</strong>, c'est concilier vie au calme et mobilité quotidienne.</p>
        </div>
      </section>

      {/* Familles */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <School className="h-6 w-6 text-primary" /> Une ville idéale pour les familles
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>Roissy-en-Brie dispose de toutes les infrastructures nécessaires à la vie de famille :</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Écoles maternelles et élémentaires</li>
              <li>Collèges</li>
              <li>Lycée</li>
              <li>Équipements sportifs et culturels</li>
            </ul>
            <p>Les commerces de proximité et le marché local permettent de gérer le quotidien facilement. La vie associative est dynamique, offrant de nombreuses activités pour tous les âges.</p>
          </div>
        </div>
      </section>

      {/* Vie locale */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" /> Une vie locale agréable et conviviale
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Malgré sa taille, Roissy-en-Brie conserve une ambiance de ville à taille humaine. Les événements locaux, marchés et animations rythment la vie de la commune.</p>
          <p>Le parc de la Lome et les espaces verts offrent un cadre de détente apprécié, avec des aires de jeux, des parcours de promenade et des zones de pique-nique.</p>
          <p>Cette convivialité est un véritable atout pour les personnes souhaitant s'installer durablement.</p>
        </div>
      </section>

      {/* Marché immobilier */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" /> Le marché immobilier à Roissy-en-Brie
          </h2>

          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">💰 Prix au m²</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="rounded-xl bg-card border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground font-body mb-1">Appartements</p>
              <p className="font-heading text-2xl font-bold text-primary">2 800 – 3 500 € / m²</p>
            </div>
            <div className="rounded-xl bg-card border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground font-body mb-1">Maisons</p>
              <p className="font-heading text-2xl font-bold text-primary">3 000 – 3 800 € / m²</p>
            </div>
          </div>

          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">📈 Tendances du marché</h3>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-10">
            <p>Le marché immobilier à Roissy-en-Brie est dynamique, porté par la demande de familles et d'actifs recherchant un cadre de vie agréable avec une bonne desserte en transports.</p>
            <p>Les maisons avec jardin sont particulièrement recherchées. Les appartements récents dans les résidences bien entretenues trouvent également rapidement acquéreur.</p>
          </div>

          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">🏡 Types de biens</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body leading-relaxed">
            <li>Maisons individuelles avec jardin</li>
            <li>Pavillons familiaux</li>
            <li>Appartements récents en résidence</li>
          </ul>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" /> Pourquoi acheter ou vendre à Roissy-en-Brie&nbsp;?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les acquéreurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Cadre de vie résidentiel et calme</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Excellente desserte RER E</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Environnement familial</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les vendeurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Demande soutenue</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Marché dynamique</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Attractivité constante</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" /> Mon expertise sur Roissy-en-Brie
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>Roissy-en-Brie fait partie des communes que je connais bien. J'y accompagne régulièrement des projets immobiliers, aussi bien pour des ventes que des acquisitions.</p>
            <p>Ma connaissance du terrain me permet de vous conseiller au mieux sur les quartiers, les prix et les opportunités du marché local.</p>
            <p>Mon approche repose sur l'écoute, la transparence et un accompagnement personnalisé, afin que chaque projet se réalise dans les meilleures conditions.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
            <Phone className="h-6 w-6 text-primary" /> Concrétisons votre projet immobilier à Roissy-en-Brie
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">Vous avez un projet immobilier à Roissy-en-Brie&nbsp;? Que ce soit pour vendre, acheter ou réaliser une <strong>estimation immobilière à Roissy-en-Brie</strong>, je suis à votre écoute pour vous accompagner.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="lg"><Link to="/estimation">Demander une estimation gratuite <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            <Button asChild variant="hero-outline" size="lg"><Link to="/contact">Me contacter</Link></Button>
          </div>
        </div>
      </section>

      <SecteurMaillage currentCity="Roissy-en-Brie" currentPath="/immobilier-roissy-en-brie" />
    </main>
  </>
);

export default SecteurRoissy;
