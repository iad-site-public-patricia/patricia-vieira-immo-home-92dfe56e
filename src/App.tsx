import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Vendre from "./pages/Vendre";
import Acheter from "./pages/Acheter";
import Estimation from "./pages/Estimation";
import MonEquipe from "./pages/MonEquipe";
import Blog from "./pages/Blog";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";
import SecteurGretz from "./pages/SecteurGretz";
import SecteurOzoir from "./pages/SecteurOzoir";
import SecteurPontault from "./pages/SecteurPontault";
import SecteurTournan from "./pages/SecteurTournan";
import SecteurBrieComteRobert from "./pages/SecteurBrieComteRobert";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* Services */}
              <Route path="/vendre" element={<Vendre />} />
              <Route path="/estimation" element={<Estimation />} />
              <Route path="/acheter" element={<Acheter />} />
              {/* À Propos (inclut avis) */}
              <Route path="/a-propos" element={<APropos />} />
              {/* Mon Équipe (remplace Rejoindre) */}
              <Route path="/mon-equipe" element={<MonEquipe />} />
              {/* Pages locales */}
              <Route path="/immobilier-gretz-armainvilliers" element={<SecteurGretz />} />
              <Route path="/immobilier-ozoir-la-ferriere" element={<SecteurOzoir />} />
              <Route path="/immobilier-pontault-combault" element={<SecteurPontault />} />
              <Route path="/immobilier-tournan-en-brie" element={<SecteurTournan />} />
              <Route path="/immobilier-brie-comte-robert" element={<SecteurBrieComteRobert />} />
              
              {/* Blog / Conseils */}
              <Route path="/conseils-immobiliers" element={<Blog />} />
              <Route path="/conseils-immobiliers/:id" element={<Blog />} />
              <Route path="/blog" element={<Navigate to="/conseils-immobiliers" replace />} />
              <Route path="/blog/:id" element={<Blog />} />
              {/* Transversal */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              {/* Redirections */}
              <Route path="/avis" element={<Navigate to="/a-propos#avis" replace />} />
              <Route path="/rejoindre" element={<Navigate to="/mon-equipe" replace />} />
              <Route path="/secteur/gretz-armainvilliers" element={<Navigate to="/immobilier-gretz-armainvilliers" replace />} />
              <Route path="/secteur/ozoir-la-ferriere" element={<Navigate to="/immobilier-ozoir-la-ferriere" replace />} />
              <Route path="/secteur/pontault-combault" element={<Navigate to="/immobilier-pontault-combault" replace />} />
              <Route path="/secteur/tournan-en-brie" element={<Navigate to="/immobilier-tournan-en-brie" replace />} />
              <Route path="/secteur/brie-comte-robert" element={<Navigate to="/immobilier-brie-comte-robert" replace />} />
              <Route path="/estimation-immobiliere" element={<Navigate to="/estimation" replace />} />
              <Route path="/vendre-son-bien" element={<Navigate to="/vendre" replace />} />
              <Route path="/secteur" element={<Navigate to="/" replace />} />
              <Route path="/secteur/:ville" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
