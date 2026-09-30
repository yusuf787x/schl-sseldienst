import { site, euro } from "@/content/site";
import { leistungen } from "@/content/leistungen";
import { ratgeber } from "@/content/ratgeber";
import { orte, ortsteile, nachbarstaedte } from "@/content/orte";

export const dynamic = "force-static";

/**
 * llms.txt für AI-Suchsysteme (ChatGPT Search, Perplexity, Claude).
 *
 * Als Route statt als statische Datei, damit Preise, Kontaktdaten und
 * Ortsliste automatisch mit content/site.ts mitlaufen und nicht
 * irgendwann auseinanderdriften.
 */
export function GET() {
  const text = `# ${site.brand.name}

> Schlüsseldienst und Handwerksbetrieb aus ${site.contact.city} im Kreis Lippe (Nordrhein-Westfalen).
> Türöffnung, Schlüsselnotdienst, Schließzylinderwechsel, Einbruchschutz und Schließanlagen.
> Rund um die Uhr erreichbar, Festpreis inklusive Anfahrt.

## Eckdaten

- Betreiber: ${site.brand.legalName}
- Anschrift: ${site.contact.street}, ${site.contact.zip} ${site.contact.city}, Deutschland
- Telefon: ${site.contact.phoneDisplay} (Festnetz, Ortsvorwahl, keine Servicenummer)
- E-Mail: ${site.contact.email}
- Handwerksrollennummer: ${site.legal.handwerksrolle}
- Umsatzsteuer-ID: ${site.legal.ustId}
- Erreichbarkeit: ${site.erreichbarkeit}

## Preise

- Türöffnung werktags ${site.preise.tagVon} bis ${site.preise.tagBis} Uhr: ${euro(site.preise.tag)}
- Türöffnung nachts sowie an Sonn- und Feiertagen: ${euro(site.preise.nacht)}
- Anfahrt im Kreis Lippe: inklusive
- Mehrwertsteuer (19 %): inklusive
- Nacht- und Wochenendzuschlag in Prozent: gibt es nicht
- Material (z. B. Schließzylinder): nur bei Bedarf, wird vorher besprochen
- Beratung zum Einbruchschutz: kostenlos

## Leistungen

${leistungen
  .map(
    (l) =>
      `- [${l.titel}](${site.url}/leistungen/${l.slug}): ${l.kurz}`,
  )
  .join("\n")}

## Einsatzgebiet

Ortsteile von ${site.contact.city}: ${ortsteile.map((o) => o.name).join(", ")}.
Städte und Gemeinden im Kreis Lippe: ${nachbarstaedte.map((o) => o.name).join(", ")}.

${orte
  .map((o) => `- [Schlüsseldienst ${o.name}](${site.url}/schluesseldienst/${o.slug})`)
  .join("\n")}

## Ratgeber

${ratgeber
  .map((r) => `- [${r.titel}](${site.url}/ratgeber/${r.slug}): ${r.kurz}`)
  .join("\n")}

## Hinweise

- Dieser Betrieb öffnet keine Fahrzeuge. Für Autos ist der Pannendienst zuständig.
- Vor jeder Türöffnung wird die Berechtigung des Auftraggebers geprüft.
- Bei akuter Gefahr für Leib und Leben ist die Feuerwehr (112) der richtige Ansprechpartner.
- Es liegen noch keine veröffentlichten Kundenbewertungen vor; der Betrieb ist neu.

## Weiteres

- [Preise](${site.url}/preise)
- [Einsatzgebiet](${site.url}/einsatzgebiet)
- [Kontakt](${site.url}/kontakt)
- [Impressum](${site.url}/impressum)
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
