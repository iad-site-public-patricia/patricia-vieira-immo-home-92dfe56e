import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, MapPin, Phone, ArrowRight, TreePine, Train, School, Heart, Building, PartyPopper, Users } from "lucide-react";
import pontaultHero from "@/assets/pontault-hero.jpeg";
import pontaultModernite from "@/assets/pontault-modernite.jpg";
import pontaultGare from "@/assets/pontault-gare.jpg";
import pontaultRerE from "@/assets/pontault-rer-e.png";

const SecteurPontault = () => (
  <main className="bg-background">
    {/* Hero */}
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <img src={pontaultHero} alt="Pontault-Combault" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/45" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-widest mb-3">Mon secteur · Seine-et-Marne</p>
        <h1 className="leading-tight mb-6">
          <span className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">Immobilier à Pontault-Combault</span>
          <br />
          <span className="font-body text-xl md:text-2xl font-normal text-primary-foreground/90">une ville dynamique et attractive en Seine-et-Marne</span>
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
        <TreePine className="h-6 w-6 text-primary" /> Vivre à Pontault-Combault&nbsp;: une qualité de vie reconnue en Île-de-France
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Située en <strong>Seine-et-Marne</strong>, <strong>Pontault-Combault</strong> est aujourd'hui l'une des communes les plus attractives du secteur. Avec ses nombreux atouts, elle séduit aussi bien les familles que les actifs à la recherche d'un cadre de vie agréable, sans renoncer à la proximité de Paris.</p>
        <p><strong>Vivre à Pontault-Combault</strong>, c'est profiter d'une ville complète, dynamique et bien organisée, qui répond à toutes les attentes du quotidien.</p>
        <p>L'<strong>immobilier à Pontault-Combault</strong> reflète cette attractivité, avec un marché dynamique et une demande soutenue.</p>
      </div>
    </section>

    {/* Localisation */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Train className="h-6 w-6 text-primary" /> Une localisation stratégique pour les actifs
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>L'un des grands atouts de Pontault-Combault est sa localisation.</p>
          <p>La commune est desservie par le <strong>RER&nbsp;E</strong>, permettant de rejoindre Paris rapidement, notamment la Gare de l'Est. Cette accessibilité est un véritable avantage pour les actifs travaillant en région parisienne.</p>
          <p>La ville bénéficie également d'un accès facilité aux axes routiers, permettant de rejoindre facilement les zones d'activité environnantes.</p>
          <p><strong>Acheter une maison à Pontault-Combault</strong> permet ainsi de concilier qualité de vie et mobilité.</p>
        </div>
      </div>
    </section>

    {/* Familles */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <School className="h-6 w-6 text-primary" /> Une ville parfaitement adaptée à la vie de famille
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Pontault-Combault est une ville particulièrement adaptée aux familles.</p>
        <p>Elle dispose&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>d'écoles maternelles et élémentaires</li>
          <li>de collèges</li>
          <li>de lycées</li>
        </ul>
        <p>Les infrastructures sportives et culturelles sont nombreuses, offrant une grande diversité d'activités pour tous les âges.</p>
        <p>Les commerces et services de proximité permettent de gérer le quotidien facilement, avec une offre variée et accessible.</p>
      </div>
    </section>

    {/* Ville dynamique */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <PartyPopper className="h-6 w-6 text-primary" /> Une ville dynamique et attractive
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Pontault-Combault est une ville vivante, qui propose de nombreuses animations tout au long de l'année.</p>
          <p>Marchés, événements culturels, activités associatives… la commune offre une véritable dynamique locale.</p>
          <p>Cette convivialité contribue fortement à l'attractivité de la ville et renforce le sentiment d'appartenance des habitants.</p>
        </div>
      </div>
    </section>

    {/* Modernité et confort */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Building className="h-6 w-6 text-primary" /> Un environnement entre modernité et confort de vie
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Pontault-Combault a su évoluer tout en conservant son attractivité.</p>
        <p>La ville propose aujourd'hui un bon équilibre entre&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>zones résidentielles</li>
          <li>commerces</li>
          <li>zones d'activité</li>
        </ul>
        <p>Cette organisation permet de répondre aux besoins des habitants tout en maintenant une qualité de vie appréciable.</p>
      </div>
    </section>

    {/* Marché immobilier */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" /> Le marché immobilier à Pontault-Combault
        </h2>

        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">💰 Prix au m²</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="rounded-xl bg-card border border-border p-6 text-center">
            <p className="text-sm text-muted-foreground font-body mb-1">Appartements</p>
            <p className="font-heading text-2xl font-bold text-primary">3 000 – 3 800 € / m²</p>
          </div>
          <div className="rounded-xl bg-card border border-border p-6 text-center">
            <p className="text-sm text-muted-foreground font-body mb-1">Maisons</p>
            <p className="font-heading text-2xl font-bold text-primary">3 200 – 4 200 € / m²</p>
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
          <p>Les biens correctement estimés trouvent acquéreur dans des délais raisonnables.</p>
        </div>

        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">🏡 Types de biens</h3>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>On retrouve principalement&nbsp;:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>des maisons individuelles</li>
            <li>des pavillons</li>
            <li>des appartements récents</li>
          </ul>
          <p>L'<strong>immobilier à Pontault-Combault</strong> permet ainsi de répondre à différents projets.</p>
        </div>
      </div>
    </section>

    {/* Pourquoi acheter / vendre */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <MapPin className="h-6 w-6 text-primary" /> Pourquoi acheter ou vendre à Pontault-Combault&nbsp;?
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-8">
        <p>Pontault-Combault est aujourd'hui une commune attractive en Seine-et-Marne.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les acquéreurs</h3>
          <ul className="space-y-2 text-muted-foreground font-body">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Un cadre de vie agréable</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Une bonne accessibilité</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Une ville complète</li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les vendeurs</h3>
          <ul className="space-y-2 text-muted-foreground font-body">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Une demande active</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Un marché dynamique</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Une valorisation intéressante des biens</li>
          </ul>
        </div>
      </div>
      <p className="text-muted-foreground font-body leading-relaxed">Réaliser une <strong>estimation immobilière à Pontault-Combault</strong> est essentiel pour positionner son bien au juste prix et optimiser sa vente.</p>
    </section>

    {/* Expertise */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" /> Mon expertise sur Pontault-Combault
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Pontault-Combault est un secteur que je connais bien.</p>
          <p>J'y accompagne régulièrement des projets immobiliers, que ce soit pour des ventes ou des acquisitions. Cette connaissance du terrain me permet d'apporter des conseils précis, adaptés à chaque situation.</p>
          <p>Mon approche repose sur l'écoute, la transparence et un accompagnement personnalisé.</p>
          <p>Chaque projet est unique, et mon objectif est de vous guider dans les meilleures conditions.</p>
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section className="bg-primary/10 py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
          <Phone className="h-6 w-6 text-primary" /> Concrétisons votre projet immobilier à Pontault-Combault
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-8">Vous avez un projet immobilier à Pontault-Combault&nbsp;? Que ce soit pour vendre, acheter ou réaliser une <strong>estimation immobilière à Pontault-Combault</strong>, je suis à votre disposition pour vous accompagner. Mon objectif est de vous aider à concrétiser votre projet avec sérieux, bienveillance et efficacité.</p>
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
          { label: "Ozoir-la-Ferrière", to: "/secteur/ozoir-la-ferriere" },
          { label: "Roissy-en-Brie", to: "/secteur/roissy-en-brie" },
          { label: "Tournan-en-Brie", to: "/secteur/tournan-en-brie" },
          { label: "Brie-Comte-Robert", to: "/secteur/brie-comte-robert" },
        ].map(v => (
          <Link key={v.to} to={v.to} className="rounded-full border border-border px-4 py-2 text-sm font-body text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            {v.label}
          </Link>
        ))}
      </div>
    </section>
  </main>
);

export default SecteurPontault;
