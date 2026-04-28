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
import { Phone, ArrowRight, CheckCircle, ClipboardList, Home, BarChart3, FileText, Handshake } from "lucide-react";

const etapes = [
  { icon: Phone, title: "Prise de contact", desc: "Vous me contactez par téléphone ou via le formulaire ci-dessous." },
  { icon: Home, title: "Visite du bien", desc: "Je me déplace chez vous pour évaluer votre bien en détail." },
  { icon: BarChart3, title: "Analyse comparative", desc: "Je compare votre bien avec les transactions récentes du secteur." },
  { icon: FileText, title: "Remise du rapport", desc: "Vous recevez un rapport d'estimation détaillé et argumenté." },
  { icon: Handshake, title: "Sans engagement", desc: "Vous êtes libre de donner suite ou non. Aucune obligation." },
];

const Estimation = () => {
  const [form, setForm] = useState({
    nom: "", telephone: "", email: "", typeBien: "", commune: "", message: "",
  });
  const [rgpd, setRgpd] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rgpd) {
      toast.error("Veuillez accepter la politique de confidentialité.");
      return;
    }
    toast.success("Votre demande d'estimation a bien été envoyée ! Je vous recontacte rapidement.");
    setForm({ nom: "", telephone: "", email: "", typeBien: "", commune: "", message: "" });
    setRgpd(false);
  };

  return (
    <>
      <PageSEO
        title="Estimation Immobilière Gratuite en Seine-et-Marne (77) | Patricia Vieira IAD"
        description="Faites estimer votre bien immobilier gratuitement par Patricia Vieira, conseillère IAD France à Gretz-Armainvilliers. Estimation précise basée sur le marché local du 77. Sans engagement."
        canonical="/estimation"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Estimation Gratuite", url: "/estimation" },
        ]}
      />
      <main>
        {/* Hero */}
        <section className="bg-navy text-navy-foreground section-padding">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Estimation Immobilière Gratuite en Seine-et-Marne
            </h1>
            <p className="font-body text-lg text-navy-foreground/85 leading-relaxed max-w-2xl mx-auto">
              Connaître la valeur réelle de votre bien est la première étape pour réussir votre projet immobilier.
            </p>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Vous envisagez de vendre votre maison ou votre appartement en Seine-et-Marne ? La première étape indispensable est une estimation précise de votre bien. En tant que conseillère immobilier IAD France à Gretz-Armainvilliers, je vous propose une <strong className="text-foreground">estimation gratuite, personnalisée et sans aucun engagement</strong>.
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground !mt-10">
                Pourquoi faire estimer votre bien par un professionnel ?
              </h2>
              <p>
                Les outils d'estimation en ligne donnent une fourchette très large, souvent peu fiable. Une estimation professionnelle prend en compte des critères que seul un expert local peut évaluer : l'état réel du bien, la luminosité, le vis-à-vis, la qualité de la copropriété, les projets d'urbanisme à proximité, les dernières transactions comparables dans votre rue ou votre quartier.
              </p>
              <p>
                Forte de plus de 10 ans d'expérience en immobilier et d'une connaissance approfondie du marché de <Link to="/immobilier-gretz-armainvilliers" className="text-primary hover:underline">Gretz-Armainvilliers</Link> et des communes environnantes (<Link to="/immobilier-tournan-en-brie" className="text-primary hover:underline">Tournan-en-Brie</Link>, <Link to="/immobilier-ozoir-la-ferriere" className="text-primary hover:underline">Ozoir-la-Ferrière</Link>, <Link to="/immobilier-pontault-combault" className="text-primary hover:underline">Pontault-Combault</Link>, <Link to="/immobilier-brie-comte-robert" className="text-primary hover:underline">Brie-Comte-Robert</Link>), je suis en mesure de vous fournir une estimation au plus juste du marché actuel.
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground !mt-10">
                Comment se déroule l'estimation ?
              </h2>
            </div>

            {/* Étapes */}
            <div className="space-y-4 mt-6 mb-10">
              {etapes.map((etape, i) => (
                <div key={i} className="flex items-start gap-5 bg-card rounded-xl p-5 border border-border/40">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-navy-foreground font-display font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">{etape.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{etape.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">Mes atouts pour votre estimation</h2>
              <ul className="space-y-3">
                {[
                  "Connaissance experte du marché local en Seine-et-Marne (77)",
                  "Plus de 10 ans d'expérience dans la transaction immobilière",
                  "Note de 4.9/5 sur 47+ avis vérifiés sur Immodvisor",
                  "Membre du réseau IAD France, leader français des mandataires immobiliers",
                  "Estimation gratuite et sans engagement",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Formulaire */}
        <section className="section-padding bg-card" id="formulaire">
          <div className="container mx-auto max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
              Contactez-moi pour votre estimation gratuite
            </h2>
            <p className="text-muted-foreground font-body text-center mb-8">
              Remplissez le formulaire ci-dessous, je vous recontacte rapidement.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 bg-background rounded-xl p-8 border border-border/40 shadow-sm">
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
                  <Label htmlFor="typeBien">Type de bien</Label>
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
                    <option value="commerce">Commerce</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="commune">Commune du bien</Label>
                  <Input id="commune" placeholder="Ex : Gretz-Armainvilliers" value={form.commune} onChange={e => setForm({ ...form, commune: e.target.value })} />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea id="message" placeholder="Décrivez votre projet..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="rgpd"
                  checked={rgpd}
                  onCheckedChange={(checked) => setRgpd(checked === true)}
                />
                <Label htmlFor="rgpd" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  J'accepte que mes données soient utilisées pour traiter ma demande. <Link to="/mentions-legales" className="text-primary hover:underline">Politique de confidentialité</Link>
                </Label>
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Demander Mon Estimation Gratuite
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

export default Estimation;
