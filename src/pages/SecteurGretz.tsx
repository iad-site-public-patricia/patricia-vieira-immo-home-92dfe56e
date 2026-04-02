import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, MapPin, Users, Phone, ArrowRight, TreePine, Train, School, Heart, Building } from "lucide-react";
import gretzBrocante from "@/assets/gretz-brocante.jpeg";
import gretzRando from "@/assets/gretz-rando-chateaux.jpg";
import gretzGare from "@/assets/gretz-gare.jpg";
import gretzRerE from "@/assets/gretz-rer-e.jpg";
import gretzMairie from "@/assets/gretz-mairie.jpg";
import gretzChateau from "@/assets/gretz-chateau.jpg";
import gretzHero from "@/assets/gretz-hero.jpg";
import SecteurMaillage from "@/components/SecteurMaillage";

const SecteurGretz = () => (
  <>
    <PageSEO
      title="Immobilier Gretz-Armainvilliers : vivre, acheter et vendre"
      description="Découvrez Gretz-Armainvilliers : cadre de vie, marché immobilier et estimation immobilière en Seine-et-Marne. Accompagnement personnalisé par Patricia Vieira."
      canonical="/immobilier-gretz-armainvilliers"
    />
  <main className="bg-background">
    {/* Hero */}
    <section className="relative bg-cover bg-center py-24 md:py-32" style={{ backgroundImage: `url(${gretzHero})` }}>
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-widest mb-3">Mon secteur · Seine-et-Marne</p>
        <h1 className="leading-tight mb-6">
          <span className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">Immobilier à Gretz-Armainvilliers</span>
          <br />
          <span className="font-body text-xl md:text-2xl font-normal text-primary-foreground/90">vivre, acheter et investir dans un cadre privilégié en Seine-et-Marne</span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/estimation">Estimer mon bien <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          <Button asChild variant="hero-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"><Link to="/contact">Me contacter</Link></Button>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <TreePine className="h-6 w-6 text-primary" /> Vivre à Gretz-Armainvilliers&nbsp;: un équilibre recherché entre nature et proximité de Paris
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Située en <strong>Seine-et-Marne</strong>, à environ 30&nbsp;kilomètres de Paris, <strong>Gretz-Armainvilliers</strong> attire aujourd'hui de plus en plus d'acquéreurs en quête d'un cadre de vie plus apaisant, sans renoncer à leur activité professionnelle en Île-de-France. Cette commune à taille humaine séduit par son équilibre entre environnement verdoyant et accessibilité.</p>
        <p><strong>Vivre à Gretz-Armainvilliers</strong>, c'est faire le choix d'un quotidien plus serein, tout en restant connecté aux bassins d'emploi. C'est aussi une ville qui répond parfaitement aux attentes actuelles des acheteurs&nbsp;: espace, tranquillité, qualité de vie et proximité des commodités.</p>
        <p>Que vous envisagiez d'y vivre ou d'y investir, l'<strong>immobilier à Gretz-Armainvilliers</strong> représente aujourd'hui une opportunité intéressante en Seine-et-Marne.</p>
      </div>
    </section>

    {/* Cadre de vie */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" /> Un cadre de vie calme et verdoyant
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Gretz-Armainvilliers est une commune d'environ 8&nbsp;000&nbsp;habitants qui a su préserver une atmosphère paisible et résidentielle.</p>
          <p>Les quartiers sont majoritairement composés de maisons individuelles, souvent avec jardin, ce qui en fait un secteur particulièrement recherché pour les familles. L'environnement y est agréable, avec de nombreux espaces verts et des rues calmes propices à une vie quotidienne sereine.</p>
          <p><strong>Vivre à Gretz-Armainvilliers</strong>, c'est profiter d'un cadre où l'on peut se ressourcer tout en restant proche de tout. Cette qualité de vie est aujourd'hui l'un des principaux critères recherchés par les acquéreurs.</p>
        </div>
      </div>
    </section>

    {/* Localisation */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Train className="h-6 w-6 text-primary" /> Une localisation stratégique aux portes de Paris
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>L'un des grands atouts de Gretz-Armainvilliers réside dans sa situation géographique.</p>
        <p>La commune est desservie par le <strong>RER&nbsp;E</strong>, permettant de rejoindre Paris rapidement, notamment la Gare de l'Est. Cela en fait une solution idéale pour les actifs travaillant en région parisienne.</p>
        <p>Elle bénéficie également d'un accès facilité aux axes routiers, ce qui permet de rejoindre rapidement les zones d'activité environnantes.</p>
        <p><strong>Acheter une maison à Gretz-Armainvilliers</strong>, c'est donc bénéficier d'un compromis idéal entre vie au calme et accessibilité.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <img src={gretzGare} alt="Gare de Gretz-Armainvilliers – RER E vers Paris" className="w-full rounded-xl shadow-md object-cover aspect-[4/3]" />
        <img src={gretzRerE} alt="Plan du RER E – ligne desservant Gretz-Armainvilliers" className="w-full rounded-xl shadow-md object-contain bg-white aspect-[4/3]" />
      </div>
    </section>

    {/* Familles */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <School className="h-6 w-6 text-primary" /> Une ville idéale pour les familles
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Gretz-Armainvilliers offre un cadre particulièrement adapté à la vie de famille.</p>
          <p>La commune dispose de plusieurs établissements scolaires, allant de la maternelle au collège, ainsi que de structures périscolaires. Les enfants peuvent évoluer dans un environnement sécurisé et agréable.</p>
          <p>Les commerces de proximité facilitent le quotidien, avec tout le nécessaire accessible rapidement&nbsp;: boulangeries, supermarchés, services.</p>
          <p>La ville propose également de nombreuses activités sportives et associatives, permettant à chacun de s'épanouir.</p>
        </div>
      </div>
    </section>

    {/* Vie locale */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Users className="h-6 w-6 text-primary" /> Une vie locale dynamique et conviviale
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Malgré son calme, Gretz-Armainvilliers est une ville vivante.</p>
        <p>De nombreux événements sont organisés tout au long de l'année&nbsp;: brocantes, animations, événements culturels… Ces moments participent à créer une véritable dynamique locale et un esprit de village très apprécié.</p>
        <p>Cette convivialité est un véritable atout, notamment pour les personnes souhaitant s'installer durablement.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <img src={gretzBrocante} alt="Brocante à Gretz-Armainvilliers – vie locale conviviale" className="w-full rounded-xl shadow-md object-cover aspect-[4/3]" />
        <img src={gretzRando} alt="Rando des 3 Châteaux – événement local en Seine-et-Marne" className="w-full rounded-xl shadow-md object-cover aspect-[4/3]" />
      </div>
    </section>

    {/* Patrimoine */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" /> Un patrimoine qui participe à son identité
        </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Gretz-Armainvilliers possède une histoire riche qui contribue à son charme.</p>
        <p>Certains éléments du patrimoine, comme l'église Saint-Jean-Baptiste, témoignent de son passé et participent à l'identité de la commune.</p>
        <p>Ce mélange entre authenticité et modernité renforce l'attractivité du secteur et donne une vraie personnalité à la ville.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <img src={gretzMairie} alt="Hôtel de ville de Gretz-Armainvilliers" className="w-full rounded-xl shadow-md object-cover aspect-[4/3]" />
        <img src={gretzChateau} alt="Château de Gretz-Armainvilliers – vue aérienne" className="w-full rounded-xl shadow-md object-cover aspect-[4/3]" />
      </div>
      </div>
    </section>

    {/* Marché immobilier */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <TrendingUp className="h-6 w-6 text-primary" /> Le marché immobilier à Gretz-Armainvilliers
      </h2>
      <p className="text-muted-foreground font-body leading-relaxed mb-8">Le marché immobilier à Gretz-Armainvilliers est aujourd'hui dynamique et équilibré.</p>

      {/* Prix */}
      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">💰 Prix au m² (estimations)</h3>
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

      {/* Tendances */}
      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">📈 Tendances du marché</h3>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-10">
        <p>L'<strong>immobilier en Seine-et-Marne</strong> bénéficie d'un regain d'intérêt depuis plusieurs années, notamment avec la recherche accrue d'espace et de confort.</p>
        <p>À Gretz-Armainvilliers, la demande reste soutenue, notamment pour les <strong>maisons à vendre à Gretz-Armainvilliers</strong> avec jardin. Les biens correctement estimés trouvent acquéreur dans des délais raisonnables.</p>
      </div>

      {/* Typologie */}
      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">🏡 Types de biens</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body leading-relaxed">
        <li>Maisons individuelles avec jardin</li>
        <li>Pavillons familiaux</li>
        <li>Appartements récents</li>
      </ul>
      <p className="text-muted-foreground font-body leading-relaxed mt-4">Ce qui permet de répondre à différents projets, que ce soit pour une résidence principale ou un investissement.</p>
    </section>

    {/* Pourquoi acheter / vendre */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" /> Pourquoi acheter ou vendre à Gretz-Armainvilliers&nbsp;?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les acquéreurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Un cadre de vie agréable</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Une bonne accessibilité</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Un environnement rassurant</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Pour les vendeurs</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Une demande active</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Un marché stable</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Une attractivité constante</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground font-body leading-relaxed">Réaliser une <strong>estimation immobilière à Gretz-Armainvilliers</strong> est une étape essentielle pour positionner son bien au bon prix et optimiser sa vente.</p>
      </div>
    </section>

    {/* Expertise */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Heart className="h-6 w-6 text-primary" /> Mon expertise sur Gretz-Armainvilliers
      </h2>
      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
        <p>Gretz-Armainvilliers est un secteur que je connais parfaitement.</p>
        <p>Au fil des années, j'ai accompagné de nombreux projets immobiliers sur cette commune. Chaque projet est unique, et mon rôle est d'apporter un accompagnement personnalisé, basé sur l'écoute, la transparence et la connaissance du marché local.</p>
        <p>Être présente sur le terrain me permet de vous conseiller au mieux, que ce soit pour vendre ou pour acheter.</p>
      </div>
    </section>

    {/* CTA final */}
    <section className="bg-primary/10 py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
          <Phone className="h-6 w-6 text-primary" /> Concrétisons votre projet immobilier à Gretz-Armainvilliers
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-8">Que vous souhaitiez vendre, acheter ou simplement obtenir une <strong>estimation immobilière à Gretz-Armainvilliers</strong>, je suis à votre disposition pour vous accompagner à chaque étape, avec sérieux et bienveillance.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/estimation">Demander une estimation gratuite <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          <Button asChild variant="hero-outline" size="lg"><Link to="/contact">Me contacter</Link></Button>
        </div>
      </div>
    </section>

    <SecteurMaillage currentCity="Gretz-Armainvilliers" currentPath="/secteur/gretz-armainvilliers" />
  </main>
  </>
);

export default SecteurGretz;
