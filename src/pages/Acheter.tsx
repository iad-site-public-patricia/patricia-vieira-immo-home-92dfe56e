import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Home, Eye, TrendingUp, FileSignature } from "lucide-react";

const steps = [
  { icon: Search, title: "Compréhension du projet", desc: "J'écoute vos besoins, vos envies et votre budget pour définir ensemble le bien idéal." },
  { icon: Home, title: "Recherche de biens", desc: "Je sélectionne pour vous les biens correspondant à vos critères grâce à mon réseau et ma connaissance du marché." },
  { icon: Eye, title: "Organisation des visites", desc: "Je vous accompagne lors de chaque visite et vous apporte un regard professionnel sur chaque bien." },
  { icon: TrendingUp, title: "Conseils sur le marché", desc: "Prix, tendances, potentiel : je vous donne toutes les clés pour prendre la meilleure décision." },
  { icon: FileSignature, title: "Accompagnement jusqu'à l'acte", desc: "Du compromis à la signature chez le notaire, je suis à vos côtés à chaque étape." },
];

const Acheter = () => {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video-acheter.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/35 to-foreground/10" />
        <div className="relative container mx-auto max-w-3xl text-center py-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary-foreground drop-shadow-lg">Acheter un bien</h1>
          <p className="font-body text-lg text-primary-foreground/90 leading-relaxed drop-shadow-sm">
            Trouver le bien qui vous correspond est un moment important. Je vous accompagne
            avec patience et expertise pour que votre projet d'achat se déroule sereinement.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-foreground text-center mb-12">
            Mon accompagnement acquéreurs
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 bg-card rounded-xl p-6 border border-border/50 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Parlez-moi de votre projet</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acheter;
