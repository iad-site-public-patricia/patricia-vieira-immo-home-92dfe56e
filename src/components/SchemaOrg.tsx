import { Helmet } from "react-helmet-async";

const BASE_URL = "https://immobilier-seine-et-marne.fr";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaOrgProps {
  breadcrumbs?: BreadcrumbItem[];
}

const realEstateAgent = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Patricia Vieira — Immobilier Seine-et-Marne",
  "image": `${BASE_URL}/patricia-vieira.jpg`,
  "url": BASE_URL,
  "telephone": "+33785618768",
  "email": "patricia.vieira@iadfrance.fr",
  "description": "Patricia Vieira, conseillère immobilier indépendante en Seine-et-Marne (77). Estimation gratuite, accompagnement vente et achat à Gretz-Armainvilliers et environs.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gretz-Armainvilliers",
    "postalCode": "77220",
    "addressRegion": "Seine-et-Marne",
    "addressCountry": "FR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.7417,
    "longitude": 2.8875,
  },
  "areaServed": [
    { "@type": "City", "name": "Gretz-Armainvilliers" },
    { "@type": "City", "name": "Tournan-en-Brie" },
    { "@type": "City", "name": "Ozoir-la-Ferrière" },
    { "@type": "City", "name": "Pontault-Combault" },
    
    { "@type": "City", "name": "Férolles-Attilly" },
    { "@type": "City", "name": "Presles-en-Brie" },
    { "@type": "City", "name": "Brie-Comte-Robert" },
    { "@type": "City", "name": "Lésigny" },
    { "@type": "City", "name": "Servon" },
    { "@type": "City", "name": "Combs-la-Ville" },
    { "@type": "City", "name": "Collégien" },
    { "@type": "AdministrativeArea", "name": "Seine-et-Marne" },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:00",
    },
  ],
  "priceRange": "€€",
  "sameAs": [
    "https://www.iadfrance.fr/conseiller-immobilier/patricia.vieira",
    "https://www.immodvisor.com/pro/iad-france-patricia-vieira-gretz-armainvilliers-77220-16825.html",
    "https://www.leboncoin.fr/boutique/54878/patricia_vieira_i_d_france.htm",
  ],
  "memberOf": {
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
