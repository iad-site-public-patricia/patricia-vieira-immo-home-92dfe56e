import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";
import { Star, Quote } from "lucide-react";

const avis = [
  { name: "Coraline", type: "Vente", stars: 5, text: "Parfaite ! Vente de mon appartement en 1 semaine et au prix ! Je recommande les yeux fermés." },
  { name: "Camille", type: "Vente", stars: 5, text: "C'est la troisième fois que je fais appel à Patricia pour mes projets immobiliers. Toujours très disponible et à l'écoute, elle a su mettre à profit son expérience pour me permettre de vendre ma maison rapidement, et au prix demandé." },
  { name: "Kevin", type: "Vente", stars: 5, text: "Nous avons fait appel au service de Patricia pour la vente de notre logement et elle nous a accompagnés du début à la fin, beaucoup d'explications et de conseils, je la recommande à 100%." },
  { name: "Christophe", type: "Vente", stars: 5, text: "C'est la 3ème fois que je sollicite Patricia, preuve de son sérieux et de la confiance que je lui témoigne. Patricia se montre toujours disponible, à l'écoute, réactive." },
  { name: "Acheteur anonyme", type: "Achat", stars: 5, text: "Patricia a su nous accompagner et répondre à nos questions pour notre premier achat, nous sommes ravis. Encore merci !" },
  { name: "Client", type: "Vente", stars: 5, text: "Nous avons fait appel au service de Patricia pour la vente de notre logement et elle nous a accompagnés du début à la fin, beaucoup d'explications et de conseils." },
  { name: "Client", type: "Vente", stars: 5, text: "Merci beaucoup à Patricia Vieira de nous avoir accompagnés dans notre projet de vente. Patricia est une personne très gentille, à l'écoute et de très bon conseils." },
  { name: "Client", type: "Vente", stars: 5, text: "Une très belle expérience avec un agent immobilier de grande qualité, très humaine, très simple, et bienveillante que nous recommandons les yeux fermés." },
];

const Avis = () => (
  <>
    <PageSEO
      title="Avis Clients — Patricia Vieira Immobilier | 4.9/5 sur 47+ Avis Vérifiés"
      description="Découvrez les avis vérifiés des clients de Patricia Vieira, conseillère immobilier IAD France à Gretz-Armainvilliers. Note de 4.9/5 sur Immodvisor. Témoignages authentiques."
      canonical="/avis"
    />
    <SchemaOrg
      breadcrumbs={[
        { name: "Accueil", url: "/" },
        { name: "Avis Clients", url: "/avis" },
      ]}
    />
    <main>
      <section className="bg-navy text-navy-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Avis Clients — Patricia Vieira Immobilier
          </h1>
          <p className="font-body text-lg text-navy-foreground/85 leading-relaxed">
            4.9/5 sur 47+ avis vérifiés sur Immodvisor (norme NF ISO 20488)
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {avis.map((a, i) => (
              <div key={i} className="bg-card rounded-xl p-7 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <Quote className="w-8 h-8 text-primary/25 mb-4" />
                <p className="text-foreground font-body leading-relaxed mb-6 italic">
                  "{a.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: a.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-foreground text-sm">{a.name}</span>
                  <span className="text-xs text-muted-foreground font-body bg-muted px-3 py-1 rounded-full">{a.type}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.immodvisor.com/pro/iad-france-patricia-vieira-gretz-armainvilliers-77220-16825.html"
              target="_blank"
              rel="noopener"
              className="text-primary font-body font-semibold hover:underline inline-flex items-center gap-2"
            >
              Voir tous mes avis sur Immodvisor →
            </a>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Avis;
