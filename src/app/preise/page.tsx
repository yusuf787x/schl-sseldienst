import Link from "next/link";
import type { Metadata } from "next";
import { site, euro } from "@/content/site";
import { Container, Section, H2, H3, CallButton } from "@/components/ui";
import { Preistafel, Faq, NotfallBand } from "@/components/blocks";
import { Brotkrumen } from "@/components/Brotkrumen";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Was der Schlüsseldienst kostet",
  description: `Türöffnung ab ${euro(site.preise.tag)} inklusive Anfahrt und Mehrwertsteuer. Alle Preise transparent, mit Einordnung zu den Richtwerten der Branchenverbände.`,
  alternates: { canonical: "/preise" },
};

const preisFaq = [
  {
    frage: "Warum werben Sie nicht mit 19 € wie andere Anbieter?",
    antwort:
      "Weil für 19 € niemand mit einem ausgestatteten Fahrzeug und einem bezahlten Monteur losfährt. Dieser Betrag ist die nackte Einsatzpauschale, auf die anschließend Anfahrt, Zuschläge und pauschal berechnetes Material kommen. Am Ende steht eine dreistellige Rechnung, die formal korrekt aufgeschlüsselt ist. Wir nennen lieber gleich den Betrag, den Sie am Ende zahlen.",
  },
  {
    frage: "Kommt zum Festpreis noch etwas dazu?",
    antwort:
      "Nur Material, und nur wenn es wirklich gebraucht wird. Wenn ein Schließzylinder defekt ist oder beim Öffnen beschädigt werden musste, kostet der Ersatz extra. Wir sagen Ihnen das vor Ort, bevor etwas eingebaut wird, und Sie entscheiden, ob Sie es gleich machen lassen.",
  },
  {
    frage: "Berechnen Sie Anfahrt?",
    antwort:
      "Nein, innerhalb unseres Einsatzgebiets im Kreis Lippe nicht. Das gilt auch für die weiter entfernten Orte wie Schlangen oder Augustdorf. Die längere Strecke ist unser Aufwand, nicht Ihr Kostenrisiko.",
  },
  {
    frage: "Was kostet ein Schließzylinder?",
    antwort:
      "Das hängt von der Sicherheitsstufe ab und reicht von einfachen Ausführungen bis zu Modellen mit Bohrschutz, Ziehschutz und kopiergeschützter Sicherungskarte. Wir nennen Ihnen den Preis, bevor wir etwas einbauen. Ein hochwertiger Zylinder ist übrigens nicht in jeder Tür sinnvoll, und wenn er es bei Ihnen nicht ist, sagen wir das auch.",
  },
  {
    frage: "Was kostet eine Beratung zum Einbruchschutz?",
    antwort:
      "Nichts. Wir schauen uns Türen und Fenster an und sagen Ihnen, wo die tatsächliche Schwachstelle liegt. Bezahlt wird erst, wenn Sie etwas umsetzen lassen. Zusätzlich empfehlen wir die kostenlose herstellerneutrale Beratung der Polizei als Gegencheck.",
  },
];

export default function PreiseSeite() {
  return (
    <>
      <section className="border-b border-line bg-bg pb-12 pt-6 sm:pb-16 sm:pt-8">
        <Container>
          <Brotkrumen
            pfad={[
              { name: "Start", url: "/" },
              { name: "Preise", url: "/preise" },
            ]}
          />
          <div className="mt-6">
            <h1 className="head text-balance text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem]">
              Was der Schlüsseldienst kostet
            </h1>
            <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
              Zwei feste Beträge, keine Prozentzuschläge, keine
              Anfahrtskosten. Den Preis hören Sie am Telefon, bevor wir
              losfahren.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Preistafel />
        </Container>
      </Section>

      {/* Einordnung gegenüber den Verbandsrichtwerten. Das ist der
          Abschnitt, der den Preis verteidigt statt ihn nur zu nennen. */}
      <Section tone="surface">
        <Container>
          <H2 className="max-w-[22ch]">
            Sind {euro(site.preise.tag)} viel oder wenig?
          </H2>
          <div className="mt-8">
            <div className="prose-lippe gap-x-14 lg:columns-2 [&_p+p]:mt-4 [&_p]:max-w-none [&_p]:break-inside-avoid">
              <p>
                Es gibt keine gesetzliche Preisbindung für Schlüsseldienste,
                aber es gibt anerkannte Richtwerte. Der{" "}
                <strong>Bundesverband Metall</strong> bezeichnet alles über
                127 € für eine einfache Türöffnung als zu teuer. Der{" "}
                <strong>Bundesverband Sicherheitstechnik</strong> nennt rund
                100 € angemessen. Tatsächlich abgerechnet werden in Deutschland
                im Schnitt 137 €.
              </p>
              <p>
                Unser Tagespreis liegt unter allen drei Werten. Unser
                Nachtpreis liegt ebenfalls unter dem Bundesdurchschnitt,
                obwohl am Markt Nacht- und Wochenendzuschläge von 50 bis 150
                Prozent üblich sind. Aus 100 € werden damit andernorts schnell
                250 €.
              </p>
              <p>
                Wir nennen diese Zahlen, weil Sie sie nachprüfen können. Ein
                Preis, der sich nicht einordnen lässt, ist kein Preis, sondern
                eine Behauptung.{" "}
                <Link href="/ratgeber/schluesseldienst-kosten">
                  Mehr zu den Kosten eines Schlüsseldienstes
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Preisgegenüberstellung: nicht als Balkendiagramm, sondern als
          drei klare Zahlen mit Quelle. */}
      <Section>
        <Container>
          <H2>Im Vergleich</H2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-3">
            {[
              {
                wert: euro(site.preise.tag),
                label: "Unser Tagespreis",
                quelle: "inklusive Anfahrt und Mehrwertsteuer",
                hervor: true,
              },
              {
                wert: "100 €",
                label: "gelten als angemessen",
                quelle: "Bundesverband Sicherheitstechnik",
              },
              {
                wert: "137 €",
                label: "Bundesdurchschnitt",
                quelle: "tatsächlich abgerechnet",
              },
            ].map((k) => (
              <div
                key={k.label}
                className={`p-7 ${k.hervor ? "bg-brand text-on-brand" : "bg-surface"}`}
              >
                <p className="head-zahl text-[2.3rem]">
                  {k.wert}
                </p>
                <p className="mt-2.5 font-semibold">{k.label}</p>
                <p
                  className={`mt-1 text-[0.85rem] ${k.hervor ? "opacity-75" : "text-ink-mute"}`}
                >
                  {k.quelle}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <NotfallBand />

      <Section tone="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="max-w-[80ch]">
              <Faq items={preisFaq} titel="Fragen zu unseren Preisen" />
            </div>
            <div>
              <div className="rounded-panel border border-line bg-bg p-7 lg:sticky lg:top-28">
                <H3>Eine Frage vorab kostet nichts</H3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  Auch wenn Sie nur wissen wollen, ob sich ein Einsatz lohnt
                  oder ob Sie bis morgen warten können: Rufen Sie an. Wenn ein
                  Anruf am nächsten Morgen für Sie günstiger ist, sagen wir das
                  auch.
                </p>
                <CallButton className="mt-6 w-full" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={[
          faqSchema(preisFaq),
          breadcrumbSchema([
            { name: "Start", url: "/" },
            { name: "Preise", url: "/preise" },
          ]),
        ]}
      />
    </>
  );
}
