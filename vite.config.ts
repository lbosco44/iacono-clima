import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Alza la soglia del warning: il vendor chunk è atteso intorno a 200KB gzip
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // React core — quasi sempre in cache HTTP
            if (id.includes("/react-dom/") || id.includes("/react/")) {
              return "vendor-react";
            }
            // React Router
            if (id.includes("/react-router")) {
              return "vendor-router";
            }
            // Framer Motion — pesante, cambia raramente
            if (id.includes("/framer-motion/")) {
              return "vendor-motion";
            }
            // Lenis smooth scroll
            if (id.includes("/lenis/")) {
              return "vendor-lenis";
            }
            // Leaflet — già lazy-loaded via dynamic import
            if (id.includes("/leaflet/")) {
              return "vendor-leaflet";
            }
            // Icone
            if (id.includes("/lucide-react/")) {
              return "vendor-icons";
            }
          }
        },
      },
    },
  },
});
