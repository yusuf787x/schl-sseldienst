/**
 * Einzige Quelle der Wahrheit für Marke, Kontakt und Preise.
 *
 * ▸ PLATZHALTER sind mit "TODO" markiert. Vor dem Livegang prüfen.
 *   Der Firmenname steht noch nicht fest — er wird ausschließlich aus
 *   `brand.name` gezogen, eine Änderung hier wirkt auf die gesamte Seite.
 */

export const site = {
  /** TODO: Firmenname noch nicht final. Alles zieht aus diesem Feld. */
  brand: {
    name: "Schlüsseldienst Lage",
    claim: "Wenn's drauf ankommt",
    legalName: "Ali Baspinar",
  },

  /** TODO: Domain vor dem Deploy eintragen (wirkt auf Canonicals, Sitemap, Schema). */
  url: "https://www.schluesseldienst-lage.de",

  contact: {
    /** TODO: Eigene Rufnummer für den Schlüsseldienst? Aktuell der Anschluss des Betriebs. */
    phoneDisplay: "05232 / 702 77 88",
    phoneHref: "+4952327027788",
    /** TODO: E-Mail-Platzhalter — hängt am finalen Domainnamen. */
    email: "info@schluesseldienst-lage.de",
    street: "Kastanienstraße 12",
    zip: "32791",
    city: "Lage",
    region: "Nordrhein-Westfalen",
    country: "DE",
    /** Rathaus Lage als Ortsmittelpunkt — nicht die Betriebsadresse auf die Nachkommastelle. */
    geo: { lat: 51.9903, lng: 8.7936 },
  },

  legal: {
    handwerksrolle: "721819",
    steuernummer: "313/5013/1808",
    ustId: "DE259376937",
  },

  /**
   * TODO: PREISE VOR LIVEGANG BESTÄTIGEN.
   *
   * Einordnung (Stand 2026, Quellen im SEO-KEYWORD-PLAN.md):
   *   Bundesverband Metall  — über 127 € für eine einfache Türöffnung ist zu teuer
   *   BHE Sicherheitstechnik — rund 100 € gelten als angemessen
   *   Bundesdurchschnitt     — 137 € werden tatsächlich abgerechnet
   * Die Werte unten liegen bewusst darunter, aber im seriösen Bereich.
   */
  preise: {
    tag: 89,
    nacht: 129,
    /** Uhrzeiten, ab denen der Nacht-/Wochenendsatz greift. */
    tagVon: "07:00",
    tagBis: "20:00",
    waehrung: "EUR",
    hinweis:
      "Alle Preise inklusive Anfahrt im Kreis Lippe und inklusive 19 % Mehrwertsteuer. Material wie Schließzylinder oder Türbeschlag kommt nur dazu, wenn es wirklich gebraucht wird, und wird vorher besprochen.",
  },

  /** 24/7 erreichbar — bildet auch das openingHoursSpecification im Schema. */
  erreichbarkeit: "Rund um die Uhr, auch sonntags und an Feiertagen",
} as const;

export const telHref = `tel:${site.contact.phoneHref}`;

/** Preis als "89 €" — einheitlich formatiert, damit nirgends "89.00 EUR" auftaucht. */
export function euro(value: number): string {
  return `${value} €`;
}
