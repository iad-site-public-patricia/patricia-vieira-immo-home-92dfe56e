import { Helmet } from "react-helmet-async";

const BASE_URL = "https://immobilier-seine-et-marne.fr";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaOrgProps {
  breadcrumbs?: BreadcrumbItem[];
  cityName?: string;
}

const realEstateAgent = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Patricia Vieira Immobilier",
  "url": BASE_URL,
  "telephone": "+33785618768",
  "email": "patricia.vieira@iadfrance.fr",
  "description": "Conseillère immobilier indépendante en Seine-et-Marne. Accompagnement personnalisé pour vendre, acheter ou estimer votre bien immobilier.",
  "areaServed": [
    { "@type": "City", "name": "Gretz-Armainvilliers" },
    { "@type": "City", "name": "Ozoir-la-Ferrière" },
    { "@type": "City", "name": "Pontault-Combault" },
    { "@type": "City", "name": "Tournan-en-Brie" },
    { "@type": "City", "name": "Brie-Comte-Robert" },
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gretz-Armainvilliers",
    "addressRegion": "Île-de-France",
    "postalCode": "77220",
    "addressCountry": "FR",
  },
  "brand": {
    "@type": "Organization",
    "name": "IAD France",
  },
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Patricia Vieira Immobilier",
  "url": BASE_URL,
  "description": "Immobilier en Seine-et-Marne : vente, achat et estimation immobilière avec Patricia Vieira, conseillère indépendante.",
};

const SchemaOrg = ({ breadcrumbs }: SchemaOrgProps) => {
  const breadcrumbLD = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": item.name,
          "item": `${BASE_URL}${item.url}`,
        })),
      }
    : null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(realEstateAgent)}</script>
      <script type="application/ld+json">{JSON.stringify(webSite)}</script>
      {breadcrumbLD && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbLD)}</script>
      )}
    </Helmet>
  );
};

export default SchemaOrg;
