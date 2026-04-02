import { useState } from "react";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import coverContact from "@/assets/cover-contact.png";

const Contact = () => {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre message a bien été envoyé ! Je vous réponds rapidement.");
    setForm({ nom: "", email: "", telephone: "", message: "" });
  };

  return (
    <>
      <PageSEO
        title="Contact — Patricia Vieira Immobilier | Gretz-Armainvilliers — Seine-et-Marne (77)"
        description="Contactez Patricia Vieira, conseillère immobilier IAD France. Tél : 07 85 61 87 68. Email : patricia.vieira@iadfrance.fr. Gretz-Armainvilliers et Seine-et-Marne (77)."
        canonical="/contact"
      />
    <div>
      <section className="relative section-padding overflow-hidden">
        <img src={coverContact} alt="Patricia Vieira au téléphone" className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/40" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy-foreground">Contact</h1>
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
                  Gretz-Armainvilliers, Seine-et-Marne
                </div>
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
                <Input placeholder="Nom complet" value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} required />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                  <Input type="tel" placeholder="Téléphone" value={form.telephone} onChange={e => setForm({...form, telephone: e.target.value})} />
                </div>
                <Textarea placeholder="Votre message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={6} required />
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Envoyer mon message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
