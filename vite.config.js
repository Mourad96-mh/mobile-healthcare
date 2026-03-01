import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    compression({
      algorithm: "brotliCompress",
      threshold: 1024,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          i18n: ["i18next", "react-i18next"],
          map: ["leaflet", "react-leaflet"],
          motion: ["framer-motion"],
        },
      },
    },
  },
});
