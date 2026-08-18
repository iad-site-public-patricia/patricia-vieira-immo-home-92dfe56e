/**
 * Vite plugin that generates per-route HTML files at build time
 * with unique <title>, <meta description>, <link canonical>, OG tags, and JSON-LD.
 * This ensures Google receives unique HTML per URL without needing Puppeteer/SSR.
 */
import { Plugin } from "vite";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { join, dirname } from "path";

interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  geoPlacename?: string;
}

const BASE_URL = "https://immobilier-seine-et-marne.fr";

const routesMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Conseillère Immobilier Seine-et-Marne (77) | Patricia Vieira IAD — Gretz-Armainvilliers",
    description: "Patricia Vieira, conseillère immobilier IAD France en Seine-et-Marne (77). Estimation gratuite, accompagnement vente et achat à Gretz-Armainvilliers et environs. 4.9/5 sur 47+ avis clients vérifiés.",
    canonical: "/",
    ogTitle: "Patricia Vieira — Conseillère Immobilier Seine-et-Marne (77)",
    ogDescription: "Estimation gratuite, vente et achat immobilier à Gretz-Armainvilliers et en Seine-et-Marne. 11 ans d'expérience, +150 biens vendus. 4.9/5 sur 47+ avis.",
  },
  "/estimation": {
    title: "Estimation Immobilière Gratuite en Seine-et-Marne (77) | Patricia Vieira IAD",
    description: "Faites estimer votre bien immobilier gratuitement par Patricia Vieira, conseillère IAD France à Gretz-Armainvilliers. Estimation précise basée sur le marché local du 77. Sans engagement.",
    canonical: "/estimation",
  },
  "/vendre": {
    title: "Vendre Votre Bien Immobilier en Seine-et-Marne (77) | Patricia Vieira IAD France",
    description: "Vendez votre maison ou appartement en Seine-et-Marne avec Patricia Vieira, IAD France. Honoraires réduits de 20 à 30%, accompagnement complet, estimation gratuite.",
    canonical: "/vendre",
  },
  "/acheter": {
    title: "Acheter un Bien Immobilier en Seine-et-Marne (77) | Patricia Vieira IAD France",
    description: "Trouvez votre futur logement en Seine-et-Marne avec Patricia Vieira, IAD France. Maisons et appartements à Gretz-Armainvilliers, Tournan, Ozoir et environs.",
    canonical: "/acheter",
  },
  "/mon-equipe": {
    title: "Mon Équipe — Conseillers Immobiliers IAD France | Patricia Vieira",
    description: "Découvrez l'équipe de Patricia Vieira, conseillers immobiliers IAD France. Rejoignez une équipe dynamique, bienveillante et ambitieuse. Accompagnement personnalisé.",
    canonical: "/mon-equipe",
  },
  "/a-propos": {
    title: "Patricia Vieira — Conseillère Immobilier IAD France en Seine-et-Marne depuis 11 ans",
    description: "Découvrez le parcours de Patricia Vieira, conseillère immobilier IAD France à Gretz-Armainvilliers. 11 ans d'expérience, +150 biens vendus, accompagnement personnalisé.",
    canonical: "/a-propos",
  },
  "/contact": {
    title: "Contact Patricia Vieira — Conseillère Immobilier Gretz-Armainvilliers (77)",
    description: "Contactez Patricia Vieira, conseillère immobilier IAD France. Tél : 07 85 61 87 68. Email : patricia.vieira@iadfrance.fr. Gretz-Armainvilliers et Seine-et-Marne.",
    canonical: "/contact",
  },
  "/immobilier-gretz-armainvilliers": {
    title: "Immobilier Gretz-Armainvilliers (77220) — Prix, Marché Local | Patricia Vieira",
    description: "Tout sur l'immobilier à Gretz-Armainvilliers : prix au m², marché local, quartiers. Patricia Vieira, votre conseillère IAD sur place. Estimation gratuite.",
    canonical: "/immobilier-gretz-armainvilliers",
    geoPlacename: "Gretz-Armainvilliers",
  },
  "/immobilier-tournan-en-brie": {
    title: "Immobilier Tournan-en-Brie (77220) — Prix, Marché Local | Patricia Vieira",
    description: "Tout sur l'immobilier à Tournan-en-Brie : prix au m², quartiers, commodités. Patricia Vieira, conseillère IAD France. Estimation gratuite et sans engagement.",
    canonical: "/immobilier-tournan-en-brie",
    geoPlacename: "Tournan-en-Brie",
  },
  "/immobilier-ozoir-la-ferriere": {
    title: "Immobilier Ozoir-la-Ferrière (77330) — Prix, Marché Local | Patricia Vieira",
    description: "Immobilier à Ozoir-la-Ferrière : prix, marché, quartiers. Patricia Vieira, conseillère IAD France en Seine-et-Marne. Estimation gratuite.",
    canonical: "/immobilier-ozoir-la-ferriere",
    geoPlacename: "Ozoir-la-Ferrière",
  },
  "/immobilier-pontault-combault": {
    title: "Immobilier Pontault-Combault (77340) — Prix, Marché Local | Patricia Vieira",
    description: "Immobilier à Pontault-Combault : prix au m², marché, quartiers résidentiels. Patricia Vieira, conseillère IAD France. Estimation gratuite.",
    canonical: "/immobilier-pontault-combault",
    geoPlacename: "Pontault-Combault",
  },
  "/immobilier-brie-comte-robert": {
    title: "Immobilier Brie-Comte-Robert (77170) — Prix, Marché Local | Patricia Vieira",
    description: "Immobilier à Brie-Comte-Robert : prix au m², marché, quartiers historiques. Patricia Vieira, conseillère IAD. Estimation gratuite.",
    canonical: "/immobilier-brie-comte-robert",
    geoPlacename: "Brie-Comte-Robert",
  },
  "/blog": {
    title: "Conseils Immobiliers Seine-et-Marne — Blog Patricia Vieira",
    description: "Conseils et actualités immobilières en Seine-et-Marne par Patricia Vieira, conseillère IAD France. Prix, tendances, astuces pour vendre et acheter.",
    canonical: "/blog",
  },
  "/conseils-immobiliers": {
    title: "Conseils Immobiliers Seine-et-Marne — Blog Patricia Vieira",
    description: "Conseils et actualités immobilières en Seine-et-Marne par Patricia Vieira, conseillère IAD France. Prix, tendances, astuces pour vendre et acheter.",
    canonical: "/conseils-immobiliers",
  },
  "/conseils-immobiliers/estimation-essentielle": {
    title: "Pourquoi une bonne estimation est essentielle pour vendre — Blog Patricia Vieira",
    description: "Une estimation juste est la clé d'une vente réussie. Découvrez pourquoi bien évaluer votre bien avant de le mettre sur le marché en Seine-et-Marne.",
    canonical: "/conseils-immobiliers/estimation-essentielle",
  },
  "/conseils-immobiliers/vendre-vite-bien": {
    title: "Comment vendre rapidement et au meilleur prix — Blog Patricia Vieira",
    description: "Stratégies concrètes pour vendre votre bien immobilier rapidement, au meilleur prix et sans stress en Seine-et-Marne.",
    canonical: "/conseils-immobiliers/vendre-vite-bien",
  },
  "/conseils-immobiliers/erreurs-vendeurs": {
    title: "Les erreurs à éviter quand on vend son bien — Blog Patricia Vieira",
    description: "Évitez les pièges les plus courants lors de la vente de votre bien immobilier. Conseils d'une professionnelle en Seine-et-Marne.",
    canonical: "/conseils-immobiliers/erreurs-vendeurs",
  },
  "/mentions-legales": {
    title: "Mentions Légales — Patricia Vieira Immobilier",
    description: "Mentions légales du site Patricia Vieira Immobilier. Agent commercial RSAC Melun 339303513. IAD France.",
    canonical: "/mentions-legales",
  },
};

const jsonLD = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Patricia Vieira — Immobilier Seine-et-Marne",
  "url": BASE_URL,
  "telephone": "+33785618768",
  "email": "patricia.vieira@iadfrance.fr",
  "description": "Patricia Vieira, conseillère immobilier IAD France en Seine-et-Marne (77). Estimation gratuite, accompagnement vente et achat à Gretz-Armainvilliers et environs. 11 ans d'expérience, +150 biens vendus.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gretz-Armainvilliers",
    "postalCode": "77220",
    "addressRegion": "Seine-et-Marne",
    "addressCountry": "FR",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 48.7417, "longitude": 2.8875 },
  "areaServed": [
    { "@type": "City", "name": "Gretz-Armainvilliers" },
    { "@type": "City", "name": "Tournan-en-Brie" },
    { "@type": "City", "name": "Ozoir-la-Ferrière" },
    { "@type": "City", "name": "Pontault-Combault" },
    { "@type": "City", "name": "Brie-Comte-Robert" },
    { "@type": "City", "name": "Férolles-Attilly" },
    { "@type": "City", "name": "Presles-en-Brie" },
    { "@type": "City", "name": "Lésigny" },
    { "@type": "City", "name": "Servon" },
    { "@type": "City", "name": "Combs-la-Ville" },
    { "@type": "City", "name": "Collégien" },
    { "@type": "AdministrativeArea", "name": "Seine-et-Marne" },
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "47", "bestRating": "5" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "17:00" },
  ],
  "sameAs": [
    "https://www.iadfrance.fr/conseiller-immobilier/patricia.vieira",
    "https://www.immodvisor.com/pro/iad-france-patricia-vieira-gretz-armainvilliers-77220-16825.html",
    "https://www.leboncoin.fr/boutique/54878/patricia_vieira_i_d_france.htm",
  ],
  "memberOf": { "@type": "Organization", "name": "IAD France" },
};

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function generateMetaTags(meta: RouteMeta): string {
  const ogTitle = meta.ogTitle || meta.title;
  const ogDesc = meta.ogDescription || meta.description;
  const geo = meta.geoPlacename || "Gretz-Armainvilliers";

  return `
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}">
    <link rel="canonical" href="${BASE_URL}${meta.canonical}">
    <meta property="og:title" content="${escapeHtml(ogTitle)}">
    <meta property="og:description" content="${escapeHtml(ogDesc)}">
    <meta property="og:url" content="${BASE_URL}${meta.canonical}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="fr_FR">
    <meta property="og:site_name" content="Patricia Vieira Immobilier">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(ogTitle)}">
    <meta name="twitter:description" content="${escapeHtml(ogDesc)}">
    <meta name="geo.region" content="FR-77">
    <meta name="geo.placename" content="${escapeHtml(geo)}">`;
}

function injectMeta(html: string, meta: RouteMeta, includeJsonLD: boolean): string {
  // Remove existing title
  let result = html.replace(/<title>[^<]*<\/title>/g, "");
  // Remove existing meta description
  result = result.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/g, "");
  // Remove existing canonical
  result = result.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/g, "");
  // Remove existing OG tags
  result = result.replace(/<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>/g, "");
  // Remove existing twitter tags
  result = result.replace(/<meta\s+name="twitter:[^"]*"\s+content="[^"]*"\s*\/?>/g, "");
  // Remove existing geo tags
  result = result.replace(/<meta\s+name="geo\.[^"]*"\s+content="[^"]*"\s*\/?>/g, "");

  const metaTags = generateMetaTags(meta);
  const jsonLDScript = includeJsonLD
    ? `\n    <script type="application/ld+json">${JSON.stringify(jsonLD)}</script>`
    : "";

  // Insert after <meta charset="UTF-8" />
  result = result.replace(
    /(<meta\s+charset="UTF-8"\s*\/?>)/i,
    `$1${metaTags}${jsonLDScript}`
  );

  return result;
}

export default function seoPrerender(): Plugin {
  return {
    name: "vite-plugin-seo-prerender",
    apply: "build",
    closeBundle() {
      const distDir = join(process.cwd(), "dist");
      const indexPath = join(distDir, "index.html");

      if (!existsSync(indexPath)) {
        console.warn("[seo-prerender] dist/index.html not found, skipping.");
        return;
      }

      const baseHtml = readFileSync(indexPath, "utf-8");

      for (const [route, meta] of Object.entries(routesMeta)) {
        const includeJsonLD = route === "/";
        const html = injectMeta(baseHtml, meta, includeJsonLD);

        let outPath: string;
        if (route === "/") {
          outPath = indexPath;
        } else {
          outPath = join(distDir, route, "index.html");
        }

        const outDir = dirname(outPath);
        if (!existsSync(outDir)) {
          mkdirSync(outDir, { recursive: true });
        }

        writeFileSync(outPath, html, "utf-8");
        console.log(`[seo-prerender] ✅ ${route} → ${outPath.replace(distDir, "dist")}`);
      }

      console.log(`[seo-prerender] 🎉 Generated ${Object.keys(routesMeta).length} unique HTML files.`);
    },
  };
}
