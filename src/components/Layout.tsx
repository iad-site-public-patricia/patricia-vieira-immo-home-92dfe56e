import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const mainNav = [
  { label: "Accueil", to: "/" },
  { label: "Vendre", to: "/vendre-son-bien" },
  { label: "Estimation gratuite", to: "/estimation-immobiliere#formulaire" },
  { label: "Acheter", to: "/acheter" },
  {
    label: "Mon secteur",
    to: "/secteur",
    children: [
      { label: "Gretz-Armainvilliers", to: "/secteur/gretz-armainvilliers" },
      { label: "Ozoir-la-Ferrière", to: "/secteur/ozoir-la-ferriere" },
      { label: "Tournan-en-Brie", to: "/secteur/tournan-en-brie" },
      { label: "Brie-Comte-Robert", to: "/secteur/brie-comte-robert" },
      { label: "Roissy-en-Brie", to: "/secteur/roissy-en-brie" },
      { label: "Pontault-Combault", to: "/secteur/pontault-combault" },
      { label: "Voir toutes les villes →", to: "/secteur" },
    ],
  },
  { label: "Rejoindre mon équipe", to: "/rejoindre" },
  { label: "Conseils", to: "/conseils-immobiliers" },
  { label: "Contact", to: "/contact" },
];

const footerNav = [
  { label: "Accueil", to: "/" },
  { label: "Vendre son bien", to: "/vendre-son-bien" },
  { label: "Estimation gratuite", to: "/estimation-immobiliere#formulaire" },
  { label: "Acheter", to: "/acheter" },
  { label: "Mon secteur", to: "/secteur" },
  { label: "Rejoindre mon équipe", to: "/rejoindre" },
  { label: "Conseils immobiliers", to: "/conseils-immobiliers" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectorOpen, setSectorOpen] = useState(false);
  const [mobileSectorOpen, setMobileSectorOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSectorOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSectorOpen(false);
    setMobileSectorOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground py-2.5 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-body font-medium tracking-wide">Patricia Vieira – Conseillère immobilier indépendante</span>
          <div className="flex items-center gap-5">
            <a href="tel:+33785618768" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" /> 07 85 61 87 68
            </a>
            <a href="mailto:patricia.vieira@iadfrance.fr" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" /> patricia.vieira@iadfrance.fr
            </a>
            <div className="flex items-center gap-2 ml-2">
              <a href="https://www.facebook.com/patriciavieiraimmobilier?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/patricia.vieira.immo/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/patriciavieiraiad/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/98 backdrop-blur-lg border-b border-border/60 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex flex-col group">
            <span className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
              Patricia Vieira
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body font-medium -mt-0.5">Immobilier</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {mainNav.map((link) =>
              link.children ? (
                <div key={link.to} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setSectorOpen(!sectorOpen)}
                    className={`px-3.5 py-2 text-sm font-body font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      isActive(link.to)
                        ? "text-primary bg-terracotta-light"
                        : "text-foreground/75 hover:text-primary hover:bg-muted/60"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sectorOpen ? "rotate-180" : ""}`} />
                  </button>
                  {sectorOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border/60 rounded-xl shadow-xl py-2 animate-fade-in z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm font-body text-foreground/80 hover:text-primary hover:bg-muted/60 transition-all"
                        >
                          <MapPin className="w-3.5 h-3.5 text-primary/50" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3.5 py-2 text-sm font-body font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.to)
                      ? "text-primary bg-terracotta-light"
                      : "text-foreground/75 hover:text-primary hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden bg-background border-t border-border/60 px-4 py-4 space-y-1 animate-fade-in">
            {mainNav.map((link) =>
              link.children ? (
                <div key={link.to}>
                  <button
                    onClick={() => setMobileSectorOpen(!mobileSectorOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-body font-medium transition-all ${
                      isActive(link.to)
                        ? "text-primary bg-terracotta-light"
                        : "text-foreground/80 hover:text-primary hover:bg-muted/60"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectorOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileSectorOpen && (
                    <div className="pl-4 space-y-0.5 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-body text-foreground/70 hover:text-primary hover:bg-muted/60 transition-all"
                        >
                          <MapPin className="w-3.5 h-3.5 text-primary/50" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg text-sm font-body font-medium transition-all ${
                    isActive(link.to)
                      ? "text-primary bg-terracotta-light"
                      : "text-foreground/80 hover:text-primary hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-navy-foreground">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Patricia Vieira</h3>
              <p className="text-sm opacity-75 font-body leading-relaxed">
                Conseillère immobilier indépendante<br />
                Partenaire du réseau IAD France
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a href="https://www.facebook.com/patriciavieiraimmobilier?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/patricia.vieira.immo/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/patriciavieiraiad/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Navigation</h4>
              <div className="space-y-2.5">
                {footerNav.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all font-body"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Contact</h4>
              <div className="space-y-3 text-sm opacity-75 font-body">
                <a href="tel:+33785618768" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" /> 07 85 61 87 68
                </a>
                <a href="mailto:patricia.vieira@iadfrance.fr" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" /> patricia.vieira@iadfrance.fr
                </a>
                <p className="flex items-center gap-2">📍 Gretz-Armainvilliers et alentours, Seine-et-Marne</p>
              </div>
              <div className="mt-6">
                <Button variant="hero" size="sm" asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Me contacter <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-navy-foreground/15 mt-10 pt-8 text-center text-sm opacity-50 font-body">
            © {new Date().getFullYear()} Patricia Vieira Immobilier. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
