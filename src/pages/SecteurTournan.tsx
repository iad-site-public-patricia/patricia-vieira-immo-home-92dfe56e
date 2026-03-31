import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { TrendingUp, MapPin, Phone, ArrowRight, TreePine, Train, School, Heart, Building, PartyPopper } from "lucide-react";
import SecteurMaillage from "@/components/SecteurMaillage";

const SecteurTournan = () => (
  <>
    <PageSEO
      title="Immobilier Tournan-en-Brie : vivre, acheter et investir"
      description="Découvrez Tournan-en-Brie : cadre de vie stratégique, marché immobilier dynamique et estimation immobilière en Seine-et-Marne."
      canonical="/secteur/tournan-en-brie"
    />
  <main className="bg-background">
    {/* Hero */}
    <section className="relative py-24 md:py-32 bg-secondary/60">
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <p className="text-muted-foreground font-body text-sm uppercase tracking-widest mb-3">Mon secteur · Seine-et-Marne</p>
        <h1 className="leading-tight mb-6">
          <span className="font-heading text-3xl md:text-5xl font-bold text-foreground">Immobilier à Tournan-en-Brie</span>
          <br />
          <span className="font-body text-lg md:text-xl font-normal text-muted-foreground">vivre, acheter et investir dans une ville stratégique de Seine-et-Marne</span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/estimation-immobiliere#formulaire">Estimer mon bien <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          <Button asChild variant="hero-outline" size="lg"><Link to="/contact">Me contacter</Link></Button>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <TreePine className="h-6 w-6 text-primary" /> Vivre à Tournan-en-Brie&nbsp;: un emplacement idéal entre dynamisme et qualité de vie
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Située en <strong>Seine-et-Marne</strong>, à environ 35 kilomètres de Paris, <strong>Tournan-en-Brie</strong> bénéficie d'une position particulièrement stratégique qui en fait une commune très recherchée. À la croisée des axes de transport et entourée d'un environnement agréable, elle attire aussi bien les familles que les actifs.</p>
        <p><strong>Vivre à Tournan-en-Brie</strong>, c'est profiter d'un cadre de vie équilibré, où l'on retrouve à la fois les avantages d'une ville dynamique et le confort d'un environnement plus apaisé que les zones urbaines plus denses.</p>
        <p>L'<strong>immobilier à Tournan-en-Brie</strong> séduit aujourd'hui de nombreux acquéreurs, notamment grâce à son accessibilité et à la diversité des biens proposés.</p>
      </div>
    </section>

    {/* Cadre de vie */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <TreePine className="h-6 w-6 text-primary" /> Un cadre de vie agréable et accessible
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Tournan-en-Brie est une ville qui a su évoluer tout en conservant une atmosphère agréable.</p>
          <p>On y retrouve&nbsp;:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>des quartiers résidentiels</li>
            <li>des maisons familiales</li>
            <li>des zones plus urbaines avec appartements</li>
          </ul>
          <p>Cette diversité permet à chacun de trouver un bien correspondant à son projet.</p>
          <p>La commune propose également des espaces verts et des zones de promenade, permettant de profiter d'un cadre de vie équilibré.</p>
          <p><strong>Vivre à Tournan-en-Brie</strong>, c'est choisir une ville accessible, pratique et agréable au quotidien.</p>
        </div>
      </div>
    </section>

    {/* Accessibilité */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Train className="h-6 w-6 text-primary" /> Une accessibilité exceptionnelle en Île-de-France
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Tournan-en-Brie est un véritable point fort en matière de transport.</p>
        <p>La commune dispose&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>du <strong>RER&nbsp;E</strong></li>
          <li>de la <strong>ligne P</strong> (liaison directe Gare de l'Est)</li>
        </ul>
        <p>Ce double accès est un avantage majeur pour les actifs travaillant en région parisienne.</p>
        <p>Les déplacements sont facilités, ce qui rend la commune particulièrement attractive pour ceux qui souhaitent s'éloigner de Paris tout en restant bien connectés.</p>
      </div>
    </section>

    {/* Familles */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <School className="h-6 w-6 text-primary" /> Une ville adaptée à la vie de famille
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Tournan-en-Brie offre un cadre idéal pour les familles.</p>
          <p>La ville dispose&nbsp;:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>d'écoles maternelles et élémentaires</li>
            <li>de collèges</li>
            <li>d'un lycée</li>
          </ul>
          <p>Les infrastructures sportives et culturelles permettent aux enfants comme aux adultes de s'épanouir pleinement.</p>
          <p>Les commerces de proximité et les services facilitent la vie quotidienne.</p>
        </div>
      </div>
    </section>

    {/* Vie locale */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <PartyPopper className="h-6 w-6 text-primary" /> Une vie locale dynamique
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Tournan-en-Brie est une ville vivante, avec une véritable dynamique locale.</p>
        <p>Les événements, marchés et animations rythment la vie de la commune tout au long de l'année.</p>
        <p>Cette convivialité contribue à créer un environnement agréable et renforce l'attractivité de la ville.</p>
      </div>
    </section>

    {/* Ville en évolution */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" /> Une ville en évolution
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Tournan-en-Brie continue de se développer avec de nouveaux projets immobiliers et des aménagements urbains.</p>
          <p>Cette évolution permet à la ville de répondre aux besoins actuels tout en conservant son identité.</p>
          <p>Elle attire ainsi de nouveaux habitants tout en restant agréable à vivre.</p>
        </div>
      </div>
    </section>

    {/* Marché immobilier */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <TrendingUp className="h-6 w-6 text-primary" /> Le marché immobilier à Tournan-en-Brie
      </h2>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">💰 Prix au m²</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl bg-card border border-border p-6 text-center">
          <p className="text-sm text-muted-foreground font-body mb-1">Appartements</p>
          <p className="font-heading text-2xl font-bold text-primary">2 800 – 3 600 € / m²</p>
        </div>
        <div className="rounded-xl bg-card border border-border p-6 text-center">
          <p className="text-sm text-muted-foreground font-body mb-1">Maisons</p>
          <p className="font-heading text-2xl font-bold text-primary">3 000 – 3 900 € / m²</p>
        </div>
      </div>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">📈 Tendances du marché</h3>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-10">
        <p>Le secteur bénéficie&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>d'une forte demande</li>
          <li>d'une bonne accessibilité</li>
          <li>d'un marché actif</li>
        </ul>
        <p>Les biens bien positionnés se vendent généralement rapidement.</p>
      </div>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">🏡 Types de biens</h3>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>On retrouve&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>maisons individuelles</li>
          <li>pavillons</li>
          <li>appartements</li>
        </ul>
        <p>L'<strong>immobilier à Tournan-en-Brie</strong> permet de répondre à différents projets.</p>
      </div>
    </section>

    {/* Pourquoi acheter / vendre */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" /> Pourquoi acheter ou vendre à Tournan-en-Brie&nbsp;?
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-8">
          <p>Tournan-en-Brie présente de nombreux avantages.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les acquéreurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Accessibilité exceptionnelle</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Cadre de vie agréable</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Diversité des biens</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les vendeurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Demande active</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Marché dynamique</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Valorisation intéressante</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground font-body leading-relaxed">Une <strong>estimation immobilière à Tournan-en-Brie</strong> est essentielle pour vendre dans les meilleures conditions.</p>
      </div>
    </section>

    {/* Expertise */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Heart className="h-6 w-6 text-primary" /> Mon expertise sur Tournan-en-Brie
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Tournan-en-Brie est un secteur que je connais particulièrement bien.</p>
        <p>J'y accompagne régulièrement des projets immobiliers, ce qui me permet d'avoir une vision précise du marché local.</p>
        <p>Mon objectif est de vous accompagner avec sérieux, transparence et efficacité, en tenant compte de votre projet et de vos attentes.</p>
      </div>
    </section>

    {/* CTA final */}
    <section className="bg-primary/10 py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
          <Phone className="h-6 w-6 text-primary" /> Concrétisons votre projet immobilier à Tournan-en-Brie
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-8">Vous avez un projet immobilier à Tournan-en-Brie&nbsp;? Que ce soit pour vendre, acheter ou réaliser une <strong>estimation immobilière à Tournan-en-Brie</strong>, je suis à votre écoute pour vous accompagner. Chaque projet mérite une attention particulière, et je mets tout en œuvre pour qu'il se réalise dans les meilleures conditions.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/estimation-immobiliere#formulaire">Demander une estimation gratuite <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          <Button asChild variant="hero-outline" size="lg"><Link to="/contact">Me contacter</Link></Button>
        </div>
      </div>
    </section>

    <SecteurMaillage currentCity="Tournan-en-Brie" currentPath="/secteur/tournan-en-brie" />
  </main>
  </>
);

export default SecteurTournan;
