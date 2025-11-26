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
      algorithm: "brotliCompress", // Use 'gzip' if preferred
      threshold: 1024, // Compress files larger than 1KB
    }),
  ],
});
