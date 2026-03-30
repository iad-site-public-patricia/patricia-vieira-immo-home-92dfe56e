import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
}

const BASE_URL = "https://immobilier-seine-et-marne.fr";

const PageSEO = ({ title, description, canonical }: PageSEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${BASE_URL}${canonical}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${BASE_URL}${canonical}`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);

export default PageSEO;
