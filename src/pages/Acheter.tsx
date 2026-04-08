import { useState } from "react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Search, Home, Eye, TrendingUp, FileSignature, ArrowRight, CheckCircle, MapPin } from "lucide-react";

const steps = [
  { icon: Search, title: "Compréhension du projet", desc: "J'écoute vos besoins, vos envies et votre budget pour définir ensemble le bien idéal." },
  { icon: Home, title: "Recherche de biens", desc: "Je sélectionne pour vous les biens correspondant à vos critères grâce à mon réseau et ma connaissance du marché." },
  { icon: Eye, title: "Organisation des visites", desc: "Je vous accompagne lors de chaque visite et vous apporte un regard professionnel sur chaque bien." },
  { icon: TrendingUp, title: "Conseils sur le marché", desc: "Prix, tendances, potentiel : je vous donne toutes les clés pour prendre la meilleure décision." },
  { icon: FileSignature, title: "Accompagnement jusqu'à l'acte", desc: "Du compromis à la signature chez le notaire, je suis à vos côtés à chaque étape." },
];

const communes = [
  { name: "Gretz-Armainvilliers", to: "/immobilier-gretz-armainvilliers" },
  { name: "Ozoir-la-Ferrière", to: "/immobilier-ozoir-la-ferriere" },
  { name: "Tournan-en-Brie", to: "/immobilier-tournan-en-brie" },
  { name: "Pontault-Combault", to: "/immobilier-pontault-combault" },
  { name: "Roissy-en-Brie", to: "/immobilier-roissy-en-brie" },
  { name: "Brie-Comte-Robert", to: "/immobilier-brie-comte-robert" },
];

const Acheter = () => {
  const [form, setForm] = useState({
    nom: "", telephone: "", email: "", typeBien: "", budget: "", communes: "", message: "",
  });
  const [rgpd, setRgpd] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rgpd) {
      toast.error("Veuillez accepter la politique de confidentialité.");
      return;
    }
    toast.success("Votre projet d'achat a bien été envoyé ! Je vous recontacte rapidement.");
    setForm({ nom: "", telephone: "", email: "", typeBien: "", budget: "", communes: "", message: "" });
    setRgpd(false);
  };

  return (
    <>
      <PageSEO
        title="Acheter un Bien Immobilier en Seine-et-Marne (77) | Patricia Vieira — IAD France"
        description="Trouvez votre futur logement en Seine-et-Marne avec Patricia Vieira, conseillère IAD France. Maisons et appartements à Gretz-Armainvilliers, Tournan-en-Brie, Ozoir-la-Ferrière et environs."
        canonical="/acheter"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Acheter", url: "/acheter" },
        ]}
      />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/hero-video-acheter.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/35 to-navy/10" />
          <div className="relative container mx-auto max-w-3xl text-center py-20">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy-foreground drop-shadow-lg">
              Acheter un Bien Immobilier en Seine-et-Marne
            </h1>
            <p className="font-body text-lg text-navy-foreground/90 leading-relaxed drop-shadow-sm max-w-2xl mx-auto">
              Maison, appartement, investissement locatif, terrain… Je vous accompagne avec patience et expertise pour que votre projet d'achat se déroule sereinement.
            </p>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Vous cherchez un bien immobilier en Seine-et-Marne ? Que ce soit votre première acquisition ou un nouvel investissement, <strong className="text-foreground">je vous accompagne à chaque étape de votre projet d'achat</strong>, de la définition de vos critères jusqu'à la remise des clés.
              </p>
              <p>
                Acheter un bien immobilier est souvent le projet d'une vie. C'est une décision importante qui nécessite d'être bien entouré. En tant que conseillère immobilier indépendante affiliée au réseau IAD France, je mets mon expérience et ma connaissance approfondie du marché local à votre service pour vous aider à trouver le bien qui vous correspond vraiment.
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground !mt-10">
                Pourquoi passer par un conseiller pour votre achat ?
              </h2>
              <p>
                Chercher un bien seul peut vite devenir chronophage et frustrant. Les annonces en ligne ne reflètent pas toujours la réalité, et certaines opportunités ne sont disponibles que via le réseau professionnel. En faisant appel à mes services, vous bénéficiez de :
              </p>
              <ul className="space-y-3">
                {[
                  "Une connaissance fine du marché local en Seine-et-Marne (77)",
                  "Un accès aux biens en exclusivité et avant leur mise en ligne",
                  "Un accompagnement dans la négociation du prix",
                  "Des conseils sur le financement et les démarches administratives",
                  "Un gain de temps considérable dans votre recherche",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground !mt-10">
                Ma zone d'intervention
              </h2>
              <p>
                Basée à <Link to="/immobilier-gretz-armainvilliers" className="text-primary hover:underline">Gretz-Armainvilliers</Link>, j'interviens dans un rayon de 30 km couvrant de nombreuses communes prisées de Seine-et-Marne :
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {communes.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-body text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {c.name}
                  </Link>
                ))}
              </div>
              <p className="mt-4">
                Mais aussi Férolles-Attilly, Presles-en-Brie, Lésigny, Servon, Combs-la-Ville, Collégien et bien d'autres communes du sud Seine-et-Marne.
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground !mt-10">
                Consultez mes annonces en ligne
              </h2>
              <p>
                Retrouvez l'ensemble de mes biens disponibles sur mon profil IAD France :{" "}
                <a
                  href="https://www.iadfrance.fr/conseiller-immobilier/patricia.vieira"
                  target="_blank"
                  rel="noopener"
                  className="text-primary font-semibold hover:underline"
                >
                  voir mes annonces sur iadfrance.fr →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Étapes */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-semibold text-foreground text-center mb-4">
              Mon accompagnement acquéreurs
            </h2>
            <div className="section-divider mb-12" />
            <div className="space-y-5">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-6 bg-background rounded-xl p-6 border border-border/40 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-navy-foreground font-display font-bold text-lg shrink-0 group-hover:bg-primary transition-colors">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground font-body text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulaire */}
        <section className="section-padding" id="formulaire">
          <div className="container mx-auto max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
              Décrivez votre projet d'achat
            </h2>
            <p className="text-muted-foreground font-body text-center mb-8">
              Remplissez le formulaire ci-dessous, je vous recontacte rapidement pour échanger sur votre recherche.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-8 border border-border/40 shadow-sm">
              <div>
                <Label htmlFor="nom">Nom et prénom *</Label>
                <Input id="nom" placeholder="Votre nom complet" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telephone">Téléphone *</Label>
                  <Input id="telephone" type="tel" placeholder="06 XX XX XX XX" value={form.telephone} onChange={e => setForm({ ...form, telephone: e.target.value })} required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="votre@email.fr" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="typeBien">Type de bien recherché</Label>
                  <select
                    id="typeBien"
                    value={form.typeBien}
                    onChange={e => setForm({ ...form, typeBien: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Sélectionner</option>
                    <option value="maison">Maison</option>
                    <option value="appartement">Appartement</option>
                    <option value="terrain">Terrain</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="budget">Budget approximatif</Label>
                  <Input id="budget" placeholder="Ex : 300 000 €" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} />
                </div>
              </div>
              <div>
                <Label htmlFor="communes">Communes souhaitées</Label>
                <Input id="communes" placeholder="Ex : Gretz-Armainvilliers, Ozoir..." value={form.communes} onChange={e => setForm({ ...form, communes: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea id="message" placeholder="Décrivez votre projet..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="rgpd" checked={rgpd} onCheckedChange={(checked) => setRgpd(checked === true)} />
                <Label htmlFor="rgpd" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  J'accepte que mes données soient utilisées pour traiter ma demande. <Link to="/mentions-legales" className="text-primary hover:underline">Politique de confidentialité</Link>
                </Label>
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Envoyer mon projet d'achat
              </Button>
            </form>
            <p className="text-center text-muted-foreground font-body mt-6">
              Ou appelez-moi directement au{" "}
              <a href="tel:+33785618768" className="text-primary font-semibold hover:underline">07 85 61 87 68</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Acheter;
