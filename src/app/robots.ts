import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * AI-Crawler sind bewusst zugelassen. Für einen lokalen Betrieb ist
 * eine Nennung in ChatGPT, Perplexity oder den AI Overviews von Google
 * bares Geld wert, und der Inhalt hier ist ohnehin öffentlich.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
