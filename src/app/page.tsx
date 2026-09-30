import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { site, euro } from "@/content/site";
import { ratgeber } from "@/content/ratgeber";
import { Container, Section, H2, H3, CallButton, LinkButton } from "@/components/ui";
import {
  LeistungsGrid,
  Preistafel,
  Ablauf,
  Vertrauen,
  Faq,
  NotfallBand,
} from "@/components/blocks";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${site.brand.name} | Türöffnung zum Festpreis`,
  description: `Türöffnung in Lage ab ${euro(site.preise.tag)}, Anfahrt inklusive, rund um die Uhr. Eingetragener Betrieb mit Adresse vor Ort und Preis vorab am Telefon.`,
  alternates: { canonical: "/" },
};

const startFaq = [
  {
    frage: "Was kostet eine Türöffnung in Lage?",
    antwort: `${euro(site.preise.tag)} zwischen ${site.preise.tagVon} und ${site.preise.tagBis} Uhr an Werktagen, ${euro(site.preise.nacht)} nachts sowie an Sonn- und Feiertagen. Anfahrt im Kreis Lippe und 19 % Mehrwertsteuer sind enthalten. Material kommt nur dazu, wenn es wirklich gebraucht wird, und wird vorher besprochen.`,
  },
  {
    frage: "Sind Sie auch nachts und am Wochenende erreichbar?",
    antwort:
      "Ja, rund um die Uhr, auch sonntags und an Feiertagen. Es gibt keinen prozentualen Zuschlag, sondern zwei feste Preise. Damit können Sie am Telefon nachrechnen, was der Einsatz kostet.",
  },
  {
    frage: "Wie schnell sind Sie da?",
    antwort:
      "Das hängt davon ab, wo Sie sind und ob gerade ein anderer Einsatz läuft. Wir nennen Ihnen am Telefon eine ehrliche Einschätzung statt einer Wunschzahl. Notfälle mit Kindern, Tieren oder hilfebedürftigen Personen hinter der Tür ziehen wir vor.",
  },
  {
    frage: "Geht meine Tür bei der Öffnung kaputt?",
    antwort:
      "In den meisten Fällen nicht. Wir arbeiten zuerst mit zerstörungsfreien Methoden. Bei einer nur zugefallenen Tür bleibt üblicherweise alles heil. Bei abgeschlossenen Türen mit Sicherheitszylinder kann es vorkommen, dass der Zylinder aufgebohrt werden muss. Bevor wir so weit gehen, halten wir an und besprechen es mit Ihnen.",
  },
  {
    frage: "Welche Orte fahren Sie an?",
    antwort:
      "Lage mit allen Ortsteilen sowie Detmold, Lemgo, Bad Salzuflen, Oerlinghausen, Leopoldshöhe, Augustdorf, Horn-Bad Meinberg und Schlangen. Die Anfahrt ist überall im Festpreis enthalten, auch in den weiter entfernten Orten.",
  },
  {
    frage: "Kann ich mit Karte zahlen?",
    antwort:
      "Ja, bar oder mit EC-Karte. Sie bekommen in jedem Fall eine ordentliche Rechnung mit Firmenname und Anschrift, über die Türöffnung und über eventuell verwendetes Material.",
  },
];

export default function Startseite() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────
          Asymmetrisch geteilt statt zentriert. Links die Botschaft
          und die Nummer, rechts der Preis als eigenständige Fläche.
          Kein Stockfoto: Wer ausgesperrt ist, sucht die Telefonnummer,
          nicht ein Symbolbild. */}
      <section className="border-b border-line bg-bg pb-14 pt-10 sm:pb-20 sm:pt-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <div className="rise">
              <h1 className="head text-[1.85rem] sm:text-[2.35rem] lg:text-[2.75rem]">
                Ausgesperrt in Lage?
                <span className="mt-1.5 block text-brand">
                  Wir lassen Sie nicht stehen.
                </span>
              </h1>

              <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-soft sm:text-[1.15rem]">
                Türöffnung zum Festpreis, Anfahrt im Kreis Lippe inklusive. Den
                Preis hören Sie am Telefon, bevor wir losfahren.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallButton size="xl" />
                <LinkButton href="/preise" variant="outline">
                  Preise ansehen
                </LinkButton>
              </div>
            </div>

            {/* Preisfläche: der zweite Grund, warum jemand hier bleibt. */}
            <div className="rounded-panel border border-brand bg-brand p-7 text-on-brand sm:p-8">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] opacity-70">
                Türöffnung zum Festpreis
              </p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="head-zahl text-[3.4rem] sm:text-6xl">
                  {site.preise.tag}
                </span>
                <span className="head-zahl text-4xl">€</span>
              </div>
              <p className="mt-2 text-[0.92rem] opacity-80">
                werktags {site.preise.tagVon} bis {site.preise.tagBis} Uhr
              </p>

              <div className="mt-6 border-t border-on-brand/25 pt-5">
                <p className="text-[0.92rem]">
                  <span className="tnum font-bold">
                    {euro(site.preise.nacht)}
                  </span>{" "}
                  <span className="opacity-80">
                    nachts, sonntags und feiertags
                  </span>
                </p>
                <ul className="mt-4 grid gap-2 text-[0.88rem] opacity-80">
                  <li>Anfahrt im Kreis Lippe inklusive</li>
                  <li>19 % Mehrwertsteuer enthalten</li>
                  <li>Kein prozentualer Nachtzuschlag</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Einordnung ─────────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          {/* Überschrift oben, Text darunter in zwei Spalten. Bewusst
              kein links-Überschrift-rechts-Absatz-Layout: Das lässt in
              der linken Spalte ein leeres Feld stehen und sieht nach
              Vorlage aus, nicht nach Satz. */}
          <H2 className="max-w-[28ch]">
            Der Schlüsseldienst für Lage, der wirklich in Lage sitzt
          </H2>
          <div className="prose-lippe mt-8 gap-x-14 lg:columns-2 [&_p+p]:mt-4 [&_p]:max-w-none [&_p]:break-inside-avoid">
              <p>
                Eine Tür fällt selten zu einem günstigen Zeitpunkt ins Schloss.
                Meistens passiert es morgens, wenn es eilig ist, oder abends,
                wenn man von der Arbeit kommt. Der Schlüssel liegt drinnen auf
                der Kommode, die Tür ist zu, und plötzlich ist der Tag ein
                anderer.
              </p>
              <p>
                Wir sind für genau diesen Moment da. Unser Betrieb sitzt in der{" "}
                {site.contact.street} in {site.contact.zip} {site.contact.city},
                und die Nummer, die Sie hier sehen, ist ein Festnetzanschluss
                mit der Vorwahl{" "}
                {site.contact.phoneDisplay.split(" ")[0]}. Das ist kein Detail,
                sondern der Unterschied zwischen einem Handwerksbetrieb und
                einer bundesweiten Vermittlungszentrale, die Ihren Anruf gegen
                Provision weiterreicht.
              </p>
              <p>
                Neben der Türöffnung kümmern wir uns um{" "}
                <Link href="/leistungen/schloss-zylinder-wechseln">
                  Schlösser und Schließzylinder
                </Link>
                , um{" "}
                <Link href="/leistungen/einbruchschutz">Einbruchschutz</Link> an
                Türen und Fenstern und um{" "}
                <Link href="/leistungen/schliessanlagen">Schließanlagen</Link>{" "}
                für Mehrfamilienhäuser und Gewerbe. Das meiste davon können Sie
                in Ruhe planen. Nur der eine Anruf kommt immer unerwartet.
              </p>
          </div>
        </Container>
      </Section>

      {/* ── Leistungen ─────────────────────────────────────── */}
      <Section id="leistungen">
        <LeistungsGrid />
      </Section>

      {/* ── Preise ─────────────────────────────────────────── */}
      <Section tone="surface" id="preise">
        <Container>
          <div className="max-w-[52ch]">
            <H2>Was es kostet, und warum nicht weniger</H2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
              Wir könnten mit 19 € werben wie die Portale, die bei der Suche
              nach „Schlüsseldienst Lage“ ganz oben stehen. Wir tun es nicht,
              weil für 19 € niemand losfährt und Sie am Ende trotzdem
              dreistellig zahlen.
            </p>
          </div>

          <div className="mt-10">
            <Preistafel />
          </div>

          <div className="mt-10 grid gap-8 rounded-panel border border-line bg-bg p-7 lg:grid-cols-2 lg:gap-12 sm:p-8">
            <div className="prose-lippe">
              <H3>Zur Einordnung</H3>
              <p className="mt-3">
                Der Bundesverband Metall bezeichnet alles über 127 € für eine
                einfache Türöffnung als zu teuer. Der Bundesverband
                Sicherheitstechnik nennt rund 100 € angemessen. Tatsächlich
                abgerechnet werden im Bundesschnitt 137 €.
              </p>
              <p>
                Unser Tagespreis liegt darunter, und unser Nachtpreis liegt
                ebenfalls darunter. Am Markt sind Nachtzuschläge von 50 bis 150
                Prozent üblich, aus 100 € werden so schnell 250 €.
              </p>
            </div>
            <div className="prose-lippe">
              <H3>Was Sie am Telefon fragen sollten</H3>
              <p className="mt-3">
                Bei jedem Anbieter, auch bei uns: Was kostet der Einsatz
                insgesamt, inklusive Anfahrt und aller Zuschläge? Wo sitzt Ihre
                Firma? Was kostet ein Zylinder, falls einer nötig wird? Bekomme
                ich eine Rechnung?
              </p>
              <p>
                Wird eine dieser Fragen ausweichend beantwortet, legen Sie auf.{" "}
                <Link href="/ratgeber/unserioesen-schluesseldienst-erkennen">
                  Die sieben Warnzeichen im Detail
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Ablauf ─────────────────────────────────────────── */}
      <Section>
        <Ablauf />
      </Section>

      {/* ── Notfallband ────────────────────────────────────── */}
      <NotfallBand />

      {/* ── Vertrauen ──────────────────────────────────────── */}
      <Section tone="surface">
        <Vertrauen />
      </Section>

      {/* ── Ratgeber ───────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-[48ch]">
            <H2>Bevor Sie anrufen</H2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
              Manchmal spart ein kurzer Blick in einen dieser Texte den ganzen
              Einsatz. Das ist uns lieber als ein Auftrag, über den Sie sich
              später ärgern.
            </p>
          </div>

          {/* Zeilenliste statt Kartenraster: Der Ablauf-Block weiter oben
              nutzt bereits Spalten mit Oberkante. Zwei gleich aussehende
              Abschnitte auf einer Seite lassen sie nach Vorlage wirken. */}
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {ratgeber.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/ratgeber/${r.slug}`}
                  className="group flex flex-col gap-1.5 py-5 transition-colors hover:bg-brand-tint sm:flex-row sm:items-baseline sm:gap-8 sm:px-4"
                >
                  <span className="tnum w-20 shrink-0 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-ink-mute">
                    {r.lesezeit} Min.
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold leading-snug group-hover:text-brand sm:text-[1.08rem]">
                      {r.titel}
                    </span>
                    <span className="mt-1 block text-[0.92rem] leading-relaxed text-ink-soft">
                      {r.kurz}
                    </span>
                  </span>
                  <ArrowRight className="hidden size-5 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-0.5 sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <div className="max-w-[80ch]">
            <Faq items={startFaq} titel="Häufige Fragen zum Schlüsseldienst" />
          </div>
        </Container>
      </Section>

      <JsonLd data={faqSchema(startFaq)} />
    </>
  );
}
