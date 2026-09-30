import { site } from "@/content/site";
import { orte } from "@/content/orte";

/**
 * Structured Data. Zwei Ziele:
 *  1. Google Local Pack und Rich Results
 *  2. Zitierbarkeit in AI Overviews, ChatGPT-Suche und Perplexity.
 *     Diese Systeme greifen JSON-LD deutlich zuverlässiger ab als Fließtext.
 *
 * Bewusst nicht enthalten: aggregateRating. Der Betrieb ist neu, es gibt
 * noch keine echten Bewertungen. Erfundene Sternewertungen sind ein
 * Google-Verstoß und nach UWG abmahnfähig.
 */

const ID_BUSINESS = `${site.url}/#betrieb`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": ID_BUSINESS,
    name: site.brand.name,
    legalName: site.brand.legalName,
    description:
      "Schlüsseldienst aus Lage für den Kreis Lippe. Türöffnung, Schlüsselnotdienst, Zylinderwechsel, Einbruchschutz und Schließanlagen zum Festpreis inklusive Anfahrt.",
    url: site.url,
    telephone: `+${site.contact.phoneHref.replace(/\D/g, "")}`,
    email: site.contact.email,
    image: `${site.url}/logo.png`,
    logo: `${site.url}/logo.png`,
    priceRange: `${site.preise.tag}-${site.preise.nacht} EUR`,
    currenciesAccepted: "EUR",
    paymentAccepted: "Bargeld, EC-Karte",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.street,
      postalCode: site.contact.zip,
      addressLocality: site.contact.city,
      addressRegion: site.contact.region,
      addressCountry: site.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.geo.lat,
      longitude: site.contact.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: orte.map((o) => ({
      "@type": "City",
      name: o.name,
      address: {
        "@type": "PostalAddress",
        postalCode: o.plz,
        addressCountry: "DE",
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen",
      itemListElement: [
        offer("Türöffnung am Tag", site.preise.tag),
        offer("Türöffnung nachts, sonn- und feiertags", site.preise.nacht),
      ],
    },
  };
}

function offer(name: string, preis: number) {
  return {
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
    price: String(preis),
    priceCurrency: "EUR",
    description: "Inklusive Anfahrt im Kreis Lippe und inklusive Mehrwertsteuer.",
  };
}

export function faqSchema(items: { frage: string; antwort: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.frage,
      acceptedAnswer: { "@type": "Answer", text: f.antwort },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  beschreibung: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.beschreibung,
    url: opts.url,
    serviceType: opts.name,
    provider: { "@id": ID_BUSINESS },
    areaServed: orte.map((o) => ({ "@type": "City", name: o.name })),
  };
}

export function articleSchema(opts: {
  titel: string;
  beschreibung: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.titel,
    description: opts.beschreibung,
    url: opts.url,
    author: { "@id": ID_BUSINESS },
    publisher: { "@id": ID_BUSINESS },
    inLanguage: "de-DE",
  };
}

export function breadcrumbSchema(
  eintraege: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: eintraege.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: e.name,
      item: `${site.url}${e.url}`,
    })),
  };
}

/** Rendert einen oder mehrere JSON-LD-Blöcke. */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((b, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
        />
      ))}
    </>
  );
}
