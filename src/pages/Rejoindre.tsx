import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Sparkles, Users, TrendingUp, Clock } from "lucide-react";

const Rejoindre = () => {
  const [form, setForm] = useState({
    nom: "", prenom: "", telephone: "", email: "",
    ville: "", activite: "", message: "", motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Merci pour votre intérêt ! Je vous recontacte rapidement.");
    setForm({ nom: "", prenom: "", telephone: "", email: "", ville: "", activite: "", message: "", motivation: "" });
  };

  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video-rejoindre.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/35 to-navy/10" />
        <div className="relative container mx-auto max-w-3xl text-center py-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy-foreground drop-shadow-lg">
            Et si vous découvriez le métier de conseiller immobilier ?
          </h1>
          <p className="font-body text-lg text-navy-foreground/90 leading-relaxed drop-shadow-sm">
            De plus en plus de personnes souhaitent aujourd'hui exercer une activité indépendante
            et développer leur propre projet professionnel.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mx-auto text-center mb-4">
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
              Depuis plusieurs années, j'accompagne également des personnes qui souhaitent découvrir
              le métier de conseiller immobilier.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Si vous êtes simplement curieux ou si vous réfléchissez à une évolution professionnelle,
              je serai ravie d'échanger avec vous.
            </p>
          </div>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Sparkles, title: "Liberté", desc: "Organisez votre emploi du temps comme vous le souhaitez." },
              { icon: Users, title: "Accompagnement", desc: "Vous n'êtes jamais seul, je suis là pour vous guider." },
              { icon: TrendingUp, title: "Évolution", desc: "Des revenus à la hauteur de votre investissement." },
              { icon: Clock, title: "Flexibilité", desc: "Un métier compatible avec votre vie personnelle." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-6 text-center border border-border/40 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-navy-light flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-5 h-5 text-navy group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-card" id="formulaire">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-foreground text-center mb-4">
            Recevoir des informations
          </h2>
          <p className="text-muted-foreground font-body text-center mb-8">
            Remplissez ce formulaire et je prendrai contact avec vous pour échanger en toute simplicité.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 bg-background rounded-xl p-8 border border-border/40 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Nom" value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} required />
              <Input placeholder="Prénom" value={form.prenom} onChange={e => setForm({...form, prenom: e.target.value})} required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="tel" placeholder="Téléphone" value={form.telephone} onChange={e => setForm({...form, telephone: e.target.value})} required />
              <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
            </div>
            <Input placeholder="Ville" value={form.ville} onChange={e => setForm({...form, ville: e.target.value})} />
            <Input placeholder="Activité actuelle" value={form.activite} onChange={e => setForm({...form, activite: e.target.value})} />
            <Textarea
              placeholder="Qu'est-ce qui vous attire dans le métier immobilier ? (optionnel)"
              value={form.motivation}
              onChange={e => setForm({...form, motivation: e.target.value})}
              rows={3}
            />
            <Textarea placeholder="Votre message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Envoyer
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Rejoindre;
