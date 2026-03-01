import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";
import { fileURLToPath } from "url";
import path from "path";

// Base URL for your sitemap
const baseUrl = "https://mobile-healthcare.org";

// Define your routes
const frRoutes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/consultation-a-domicile", changefreq: "weekly", priority: 0.9 },
  { url: "/soins-infirmiers", changefreq: "weekly", priority: 0.9 },
  { url: "/prelevement-a-domicile", changefreq: "weekly", priority: 0.8 },
  { url: "/transport-sanitaire", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
];

const enRoutes = frRoutes.map((r) => ({
  ...r,
  url: `/en${r.url === "/" ? "" : r.url}`,
  priority: r.priority * 0.9,
}));

const esRoutes = frRoutes.map((r) => ({
  ...r,
  url: `/es${r.url === "/" ? "" : r.url}`,
  priority: r.priority * 0.9,
}));

const arRoutes = frRoutes.map((r) => ({
  ...r,
  url: `/ar${r.url === "/" ? "" : r.url}`,
  priority: r.priority * 0.9,
}));

const routes = [...frRoutes, ...enRoutes, ...esRoutes, ...arRoutes];

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
  routes.forEach((route) => sitemap.write(route));

  // Finalize the sitemap
  sitemap.end();

  console.log("Sitemap generated successfully at:", sitemapPath);
})();
