import { Search, Camera, Globe, UserCheck, FileSignature } from "lucide-react";

const etapes = [
  {
    icon: Search,
    title: "Analyse et stratégie de vente",
    text: "Étude du marché local et définition d'une stratégie adaptée pour positionner votre bien au meilleur prix.",
  },
  {
    icon: Camera,
    title: "Mise en valeur du bien",
    text: "Photos professionnelles, mise en scène et présentation optimisée pour susciter l'intérêt des acheteurs.",
  },
  {
    icon: Globe,
    title: "Diffusion large et ciblée",
    text: "Publication sur les portails immobiliers majeurs, réseaux sociaux et diffusion auprès d'acquéreurs qualifiés.",
  },
  {
    icon: UserCheck,
    title: "Sélection des acquéreurs et négociation",
    text: "Analyse des profils acheteurs et négociation pour obtenir les meilleures conditions de vente.",
  },
  {
    icon: FileSignature,
    title: "Accompagnement jusqu'à la signature",
    text: "Suivi complet du dossier avec les notaires et les différents intervenants jusqu'à la signature définitive.",
  },
];

const MethodeEtapes = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Les 5 étapes de ma méthode
          </h2>
        </div>
        <div className="section-divider mb-14" />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-primary/20" />

          <div className="grid grid-cols-5 gap-4">
            {etapes.map((etape, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                {/* Step number + icon */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-5 group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
                  <etape.icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-1 w-7 h-7 rounded-full bg-navy text-navy-foreground font-display text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-2 leading-snug min-h-[2.5rem]">
                  {etape.title}
                </h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">
                  {etape.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="lg:hidden space-y-6">
          {etapes.map((etape, i) => (
            <div key={i} className="flex items-start gap-5 group">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                  <etape.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="absolute -top-1.5 -right-1 w-6 h-6 rounded-full bg-navy text-navy-foreground font-display text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                {i < etapes.length - 1 && (
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-primary/20" />
                )}
              </div>
              <div className="pt-1">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  {etape.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {etape.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodeEtapes;
