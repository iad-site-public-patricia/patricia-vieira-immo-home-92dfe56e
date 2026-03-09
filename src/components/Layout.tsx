import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Vendre son bien", to: "/vendre" },
  { label: "Acheter", to: "/acheter" },
  { label: "Rejoindre mon équipe", to: "/rejoindre" },
  { label: "Blog", to: "/blog" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-body">Patricia Vieira – Conseillère immobilier indépendante</span>
          <div className="flex items-center gap-4">
            <a href="tel:+33600000000" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" /> 06 00 00 00 00
            </a>
            <a href="mailto:contact@patriciavieira-immo.fr" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" /> contact@patriciavieira-immo.fr
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex flex-col">
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
              Patricia Vieira
            </span>
            <span className="text-xs text-muted-foreground font-body -mt-1">Immobilier</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-body font-medium rounded-md transition-colors ${
                  location.pathname === link.to
                    ? "text-primary bg-terracotta-light"
                    : "text-foreground/80 hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden bg-background border-t px-4 py-4 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-body font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-primary bg-terracotta-light"
                    : "text-foreground/80 hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Patricia Vieira</h3>
              <p className="text-sm opacity-80 font-body leading-relaxed">
                Conseillère immobilier indépendante<br />
                Partenaire du réseau IAD France
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm opacity-80 font-body">
                <p>📞 06 00 00 00 00</p>
                <p>📧 contact@patriciavieira-immo.fr</p>
                <p>📍 Gretz-Armainvilliers, Seine-et-Marne</p>
              </div>
              <div className="mt-4">
                <Button variant="hero" size="sm" asChild>
                  <Link to="/contact">Me contacter</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60 font-body">
            © {new Date().getFullYear()} Patricia Vieira Immobilier. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
