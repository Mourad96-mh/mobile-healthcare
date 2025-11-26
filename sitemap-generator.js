import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";
import { fileURLToPath } from "url";
import path from "path";

// Base URL for your sitemap
const baseUrl = "https://mobile-healthcare.org";

// Define your routes
const routes = [
  "/",
  "/consultation-a-domicile",
  "/soins-infirmiers",
  "/prelevement-a-domicile",
  "/transport-sanitaire",
  "/contact",
];

// Resolve the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  // Create the full path to the sitemap.xml in the dist folder
  const sitemapPath = path.join(__dirname, "dist", "sitemap.xml");

  // Create a writable stream to save the sitemap
  const stream = createWriteStream(sitemapPath);

  // Create a new SitemapStream instance
  const sitemap = new SitemapStream({ hostname: baseUrl });

  // Pipe the sitemap data to the writable stream
  sitemap.pipe(stream);

  // Add routes to the sitemap
  routes.forEach((route) =>
    sitemap.write({ url: route, changefreq: "weekly" })
  );

  // Finalize the sitemap
  sitemap.end();

  console.log("Sitemap generated successfully at:", sitemapPath);
})();
