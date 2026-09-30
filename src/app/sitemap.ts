import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { leistungen } from "@/content/leistungen";
import { ratgeber } from "@/content/ratgeber";
import { orte } from "@/content/orte";

/**
 * Sitemap. Impressum und Datenschutz bleiben draußen, die stehen
 * ohnehin auf noindex und verwässern sonst nur das Crawl-Budget.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const jetzt = new Date();

  const statisch = [
    { url: "", priority: 1.0, freq: "weekly" as const },
    { url: "/preise", priority: 0.9, freq: "monthly" as const },
    { url: "/einsatzgebiet", priority: 0.8, freq: "monthly" as const },
    { url: "/ratgeber", priority: 0.7, freq: "monthly" as const },
    { url: "/kontakt", priority: 0.7, freq: "yearly" as const },
  ];

  return [
    ...statisch.map((s) => ({
      url: `${site.url}${s.url}`,
      lastModified: jetzt,
      changeFrequency: s.freq,
      priority: s.priority,
    })),
    ...leistungen.map((l) => ({
      url: `${site.url}/leistungen/${l.slug}`,
      lastModified: jetzt,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...orte.map((o) => ({
      url: `${site.url}/schluesseldienst/${o.slug}`,
      lastModified: jetzt,
      changeFrequency: "monthly" as const,
      priority: o.typ === "ortsteil" ? 0.8 : 0.75,
    })),
    ...ratgeber.map((r) => ({
      url: `${site.url}/ratgeber/${r.slug}`,
      lastModified: jetzt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
