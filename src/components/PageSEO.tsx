import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  geoRegion?: string;
  geoPlacename?: string;
}

const BASE_URL = "https://immobilier-seine-et-marne.fr";

const PageSEO = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  geoRegion = "FR-77",
  geoPlacename = "Gretz-Armainvilliers",
}: PageSEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${BASE_URL}${canonical}`} />
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    <meta property="og:url" content={`${BASE_URL}${canonical}`} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="Patricia Vieira Immobilier" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={ogTitle || title} />
    <meta name="twitter:description" content={ogDescription || description} />
    <meta name="geo.region" content={geoRegion} />
    <meta name="geo.placename" content={geoPlacename} />
  </Helmet>
);

export default PageSEO;
