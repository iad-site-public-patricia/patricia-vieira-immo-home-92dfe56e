import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/vendre" element={<Vendre />} />
    <Route path="/vendre-son-bien" element={<Vendre />} />
    <Route path="/estimation-immobiliere" element={<Contact />} />
    <Route path="/acheter" element={<Acheter />} />
    <Route path="/secteur/gretz-armainvilliers" element={<SecteurGretz />} />
    <Route path="/secteur/ozoir-la-ferriere" element={<SecteurOzoir />} />
    <Route path="/secteur/pontault-combault" element={<SecteurPontault />} />
    <Route path="/secteur/tournan-en-brie" element={<SecteurTournan />} />
    <Route path="/secteur/brie-comte-robert" element={<SecteurBrieComteRobert />} />
    <Route path="/rejoindre" element={<Rejoindre />} />
    <Route path="/conseils-immobiliers" element={<Blog />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/a-propos" element={<APropos />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export async function render(url: string) {
  const queryClient = new QueryClient();
  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <Layout>
            <AppRoutes />
          </Layout>
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
  return html;
}
