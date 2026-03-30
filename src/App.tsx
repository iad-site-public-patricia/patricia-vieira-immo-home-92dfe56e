import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
import Rejoindre from "./pages/Rejoindre";
import Blog from "./pages/Blog";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SecteurGretz from "./pages/SecteurGretz";
import SecteurOzoir from "./pages/SecteurOzoir";
import SecteurPontault from "./pages/SecteurPontault";
import SecteurTournan from "./pages/SecteurTournan";
import SecteurBrieComteRobert from "./pages/SecteurBrieComteRobert";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Vendeurs */}
            <Route path="/vendre" element={<Vendre />} />
            <Route path="/vendre-son-bien" element={<Vendre />} />
            <Route path="/estimation-immobiliere" element={<Contact />} />
            {/* Acheteurs */}
            <Route path="/acheter" element={<Acheter />} />
            {/* Secteur - pages locales (placeholder vers Index pour l'instant) */}
            <Route path="/secteur" element={<NotFound />} />
            <Route path="/secteur/gretz-armainvilliers" element={<SecteurGretz />} />
            <Route path="/secteur/ozoir-la-ferriere" element={<SecteurOzoir />} />
            <Route path="/secteur/pontault-combault" element={<SecteurPontault />} />
            <Route path="/secteur/tournan-en-brie" element={<SecteurTournan />} />
            <Route path="/secteur/brie-comte-robert" element={<SecteurBrieComteRobert />} />
            <Route path="/secteur/:ville" element={<NotFound />} />
            {/* Recrutement */}
            <Route path="/rejoindre" element={<Rejoindre />} />
            {/* Blog */}
            <Route path="/conseils-immobiliers" element={<Blog />} />
            <Route path="/conseils-immobiliers/:id" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            {/* Transversal */}
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
