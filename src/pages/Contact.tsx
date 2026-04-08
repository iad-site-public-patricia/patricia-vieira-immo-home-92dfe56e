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
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import coverContact from "@/assets/cover-contact.jpg";

const Contact = () => {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", objet: "", message: "" });
  const [rgpd, setRgpd] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rgpd) {
      toast.error("Veuillez accepter la politique de confidentialité.");
      return;
    }
    toast.success("Votre message a bien été envoyé ! Je vous réponds rapidement.");
    setForm({ nom: "", email: "", telephone: "", objet: "", message: "" });
    setRgpd(false);
  };

  return (
    <>
      <PageSEO
        title="Contact Patricia Vieira — Conseillère Immobilier Gretz-Armainvilliers (77)"
        description="Contactez Patricia Vieira, conseillère immobilier IAD France. Tél : 07 85 61 87 68. Email : patricia.vieira@iadfrance.fr. Gretz-Armainvilliers et Seine-et-Marne."
        canonical="/contact"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <main>
        {/* Hero */}
        <section className="relative section-padding overflow-hidden">
          <img src={coverContact} alt="Patricia Vieira au téléphone" className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-center" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/40" />
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy-foreground">
              Contactez Patricia Vieira — Conseillère Immobilier
            </h1>
            <p className="font-body text-lg text-navy-foreground/85 leading-relaxed">
              Une question, un projet ? N'hésitez pas à me contacter, je serai ravie d'échanger avec vous.
            </p>
          </div>
        </section>

        <section className="section-padding" id="formulaire">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Contact info */}
              <div className="md:col-span-2 space-y-6">
                <h2 className="font-display text-2xl font-semibold text-foreground">Mes coordonnées</h2>
                <div className="section-divider !mx-0 !w-12" />
                <div className="space-y-4">
                  <a href="tel:+33785618768" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body">
                    <div className="w-10 h-10 rounded-full bg-terracotta-light flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    07 85 61 87 68
                  </a>
                  <a href="mailto:patricia.vieira@iadfrance.fr" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body">
                    <div className="w-10 h-10 rounded-full bg-terracotta-light flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    patricia.vieira@iadfrance.fr
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground font-body">
                    <div className="w-10 h-10 rounded-full bg-terracotta-light flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    Gretz-Armainvilliers, Seine-et-Marne (77)
                  </div>
                </div>

                <div className="bg-card rounded-xl p-5 border border-border/40 mt-4">
                  <h3 className="font-display text-base font-semibold text-foreground mb-3">Informations professionnelles</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground font-body">
                    <li><strong className="text-foreground">Statut :</strong> Agent commercial indépendant</li>
                    <li><strong className="text-foreground">RSAC :</strong> Melun n° 339303513</li>
                    <li><strong className="text-foreground">Réseau :</strong> IAD France</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">Réseaux sociaux</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/patriciavieiraimmobilier/"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-2 px-4 py-2.5 bg-card rounded-lg border border-border/40 text-sm font-body text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                    >
                      <Facebook className="w-4 h-4" /> Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/patricia.vieira.immo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-card rounded-lg border border-border/40 text-sm font-body text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                    >
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-8 border border-border/40 shadow-sm">
                  <div>
                    <Label htmlFor="nom">Nom et prénom *</Label>
                    <Input id="nom" placeholder="Votre nom complet" value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre@email.fr" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                    </div>
                    <div>
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input id="telephone" type="tel" placeholder="06 XX XX XX XX" value={form.telephone} onChange={e => setForm({...form, telephone: e.target.value})} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="objet">Objet</Label>
                    <select
                      id="objet"
                      value={form.objet}
                      onChange={e => setForm({...form, objet: e.target.value})}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Sélectionner</option>
                      <option value="estimation">Estimation</option>
                      <option value="vente">Vente</option>
                      <option value="achat">Achat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Décrivez votre projet ou votre question..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={6} required />
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="rgpd" checked={rgpd} onCheckedChange={(checked) => setRgpd(checked === true)} />
                    <Label htmlFor="rgpd" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      J'accepte que mes données soient utilisées pour traiter ma demande. <Link to="/mentions-legales" className="text-primary hover:underline">Politique de confidentialité</Link>
                    </Label>
                  </div>
                  <Button variant="hero" size="lg" type="submit" className="w-full">
                    Envoyer
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
