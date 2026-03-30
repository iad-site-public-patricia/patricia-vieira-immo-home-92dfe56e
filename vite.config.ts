import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from "vite-plugin-prerender-static";

const prerenderRoutes = [
  "/",
  "/vendre",
  "/vendre-son-bien",
  "/estimation-immobiliere",
  "/acheter",
  "/secteur/gretz-armainvilliers",
  "/secteur/ozoir-la-ferriere",
  "/secteur/pontault-combault",
  "/secteur/tournan-en-brie",
  "/secteur/brie-comte-robert",
  "/rejoindre",
  "/conseils-immobiliers",
  "/blog",
  "/a-propos",
  "/contact",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    vitePrerenderPlugin({
      routes: prerenderRoutes.reduce((acc, route) => {
        acc[route] = { title: "" };
        return acc;
      }, {} as Record<string, { title: string }>),
      renderTarget: "#root",
      prerenderScript: "src/entry-prerender.tsx",
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
