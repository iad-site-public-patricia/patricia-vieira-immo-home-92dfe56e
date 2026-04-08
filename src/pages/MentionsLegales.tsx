import PageSEO from "@/components/PageSEO";
import SchemaOrg from "@/components/SchemaOrg";

const MentionsLegales = () => (
  <>
    <PageSEO
      title="Mentions Légales — Patricia Vieira Immobilier"
      description="Mentions légales du site immobilier-seine-et-marne.fr. Éditeur, hébergeur, protection des données personnelles (RGPD)."
      canonical="/mentions-legales"
    />
    <SchemaOrg
      breadcrumbs={[
        { name: "Accueil", url: "/" },
        { name: "Mentions Légales", url: "/mentions-legales" },
      ]}
    />
    <main>
      <section className="bg-navy text-navy-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">Mentions Légales</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-8 font-body text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Éditeur du site</h2>
            <p>Patricia Vieira, agent commercial indépendant en immobilier.</p>
            <p>RSAC : Melun n° 339303513</p>
            <p>Réseau : IAD France — SAS au capital de 13 474 709 euros — RCS Lille Métropole</p>
            <p>Carte professionnelle : Transactions sur immeubles et fonds de commerce, délivrée par la CCI.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Contact</h2>
            <p>Email : <a href="mailto:patricia.vieira@iadfrance.fr" className="text-primary hover:underline">patricia.vieira@iadfrance.fr</a></p>
            <p>Téléphone : <a href="tel:+33785618768" className="text-primary hover:underline">07 85 61 87 68</a></p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Hébergeur</h2>
            <p>Ce site est hébergé par Lovable (lovable.dev).</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Protection des données personnelles</h2>
            <p>
              Le site respecte le Règlement Général sur la Protection des Données (RGPD). Les données collectées via les formulaires de contact sont utilisées uniquement pour répondre à votre demande.
            </p>
            <p>
              Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez <a href="mailto:patricia.vieira@iadfrance.fr" className="text-primary hover:underline">patricia.vieira@iadfrance.fr</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default MentionsLegales;
