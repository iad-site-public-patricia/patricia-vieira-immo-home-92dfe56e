import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Search, Home, Eye, TrendingUp, FileSignature, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "Compréhension du projet", desc: "J'écoute vos besoins, vos envies et votre budget pour définir ensemble le bien idéal." },
  { icon: Home, title: "Recherche de biens", desc: "Je sélectionne pour vous les biens correspondant à vos critères grâce à mon réseau et ma connaissance du marché." },
  { icon: Eye, title: "Organisation des visites", desc: "Je vous accompagne lors de chaque visite et vous apporte un regard professionnel sur chaque bien." },
  { icon: TrendingUp, title: "Conseils sur le marché", desc: "Prix, tendances, potentiel : je vous donne toutes les clés pour prendre la meilleure décision." },
  { icon: FileSignature, title: "Accompagnement jusqu'à l'acte", desc: "Du compromis à la signature chez le notaire, je suis à vos côtés à chaque étape." },
];

const Acheter = () => {
  return (
    <>
      <PageSEO
        title="Acheter un bien immobilier en Seine-et-Marne | Patricia Vieira"
        description="Trouvez la maison ou l'appartement idéal en Seine-et-Marne avec Patricia Vieira. Accompagnement personnalisé de la recherche à la signature chez le notaire."
        canonical="/acheter"
      />
    <div>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video-acheter.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/35 to-navy/10" />
        <div className="relative container mx-auto max-w-3xl text-center py-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy-foreground drop-shadow-lg">Acheter un bien</h1>
          <p className="font-body text-lg text-navy-foreground/90 leading-relaxed drop-shadow-sm">
            Vous cherchez un bien en Seine-et-Marne ? Ancien ou neuf ?
          </p>
          <p className="font-body text-lg text-navy-foreground/90 leading-relaxed drop-shadow-sm mt-2">
            Maison, appartement, investissement locatif, terrain… Je vous accompagne
            avec patience et expertise pour que votre projet d'achat se déroule sereinement.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-foreground text-center mb-4">
            Mon accompagnement acquéreurs
          </h2>
          <div className="section-divider mb-12" />
          <div className="space-y-5">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 bg-card rounded-xl p-6 border border-border/40 hover:shadow-md transition-all duration-300 group">
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
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                Parlez-moi de votre projet <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Acheter;
