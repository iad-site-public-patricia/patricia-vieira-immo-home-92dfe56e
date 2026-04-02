import { Link } from "react-router-dom";
import SchemaOrg from "@/components/SchemaOrg";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const allCities = [
  { label: "Gretz-Armainvilliers", to: "/immobilier-gretz-armainvilliers" },
  { label: "Ozoir-la-Ferrière", to: "/immobilier-ozoir-la-ferriere" },
  { label: "Pontault-Combault", to: "/immobilier-pontault-combault" },
  { label: "Tournan-en-Brie", to: "/immobilier-tournan-en-brie" },
  { label: "Brie-Comte-Robert", to: "/immobilier-brie-comte-robert" },
  { label: "Roissy-en-Brie", to: "/immobilier-roissy-en-brie" },
];

interface SecteurMaillageProps {
  currentCity: string;
  currentPath: string;
}

const SecteurMaillage = ({ currentCity, currentPath }: SecteurMaillageProps) => {
  const otherCities = allCities.filter((c) => c.to !== currentPath);

  return (
    <>
      <SchemaOrg
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: currentCity, url: currentPath },
        ]}
      />

      {/* Breadcrumb navigation */}
      <nav className="container mx-auto px-4 pt-6 max-w-3xl" aria-label="Fil d'Ariane">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentCity}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      {/* Internal links section */}
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
          Découvrir les villes voisines
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-6">
          Vous pouvez également découvrir mes secteurs sur{" "}
          {otherCities.map((city, i) => (
            <span key={city.to}>
              <Link
                to={city.to}
                className="text-primary hover:underline font-medium"
              >
                {city.label}
              </Link>
              {i < otherCities.length - 2 ? ", " : i === otherCities.length - 2 ? " et " : "."}
            </span>
          ))}
        </p>
        <div className="flex flex-wrap gap-3">
          {otherCities.map((v) => (
            <Link
              key={v.to}
              to={v.to}
              className="rounded-full border border-border px-4 py-2 text-sm font-body text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {v.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default SecteurMaillage;
