import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/ssr";
import { site, euro } from "@/content/site";
import { ratgeber } from "@/content/ratgeber";
import { Container, Section, H2, H3, CallButton, LinkButton, reveal } from "@/components/ui";
import { Welle, Siegel, Figur } from "@/components/deko";
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
          Vollflächiges Foto, das beim Laden weich herauszoomt. Die
          größte Sorge bei einem Schlüsseldienst ist die Rechnung
          danach, deshalb steht das Festpreis-Versprechen direkt in der
          Überschrift. Die Preisfläche ragt über die Welle hinaus in
          den nächsten Abschnitt. */}
      <section className="relative isolate bg-[#0e1615] text-[#faf7f0]">
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div data-parallax="0.15" className="parallax absolute inset-x-0 -inset-y-16">
            <Image
              src="/img/tueroeffnung.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-bild object-cover object-[58%_50%]"
            />
          </div>
          {/* Handy: von oben nach unten abgedunkelt, Text steht über dem
              ganzen Bild. Desktop: links dunkel für den Text, rechts
              bleibt das Motiv sichtbar. */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,16,0.9)_0%,rgba(10,17,16,0.78)_45%,rgba(10,17,16,0.9)_100%)] lg:hidden" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(100deg,rgba(10,17,16,0.95)_0%,rgba(10,17,16,0.84)_40%,rgba(10,17,16,0.45)_70%,rgba(10,17,16,0.3)_100%)] lg:block" />
        </div>

        <Container className="relative z-10 pb-6 pt-10 sm:pb-10 sm:pt-16 lg:pb-24 lg:pt-24">
          <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
            <div>
              <p className="hero-rise inline-flex items-center gap-2 rounded-ctl border border-white/20 bg-white/10 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm sm:text-[0.78rem]">
                <span className="size-2 shrink-0 rounded-full bg-[#8fd3cb]" />
                Schlüsseldienst in Lage
                <span className="sm:hidden">· 24 h</span>
                <span className="hidden sm:inline">· rund um die Uhr</span>
              </p>

              <h1 className="hero-rise head mt-5 text-[1.95rem] [--d:90ms] sm:text-[2.6rem] lg:text-[3.1rem]">
                Ausgesperrt in Lage?
                <span className="mt-2 block text-[#8fd3cb]">
                  Festpreis. Ohne versteckte Kosten.
                </span>
              </h1>

              <p className="hero-rise mt-5 max-w-[50ch] text-[1.02rem] leading-relaxed text-white/80 [--d:180ms] sm:mt-6 sm:text-[1.15rem]">
                Den Preis hören Sie am Telefon, bevor wir losfahren. Genau
                dieser Betrag steht nachher auf der Rechnung. Anfahrt,
                Nachtzeit und Mehrwertsteuer sind schon drin.
              </p>

              <div className="hero-rise mt-7 flex flex-col gap-3 [--d:260ms] sm:mt-8 sm:flex-row sm:items-center">
                <CallButton size="xl" variant="hell" />
                <LinkButton href="/preise" variant="hell">
                  So setzt sich der Preis zusammen
                </LinkButton>
              </div>

              <ul className="hero-rise mt-8 grid gap-x-6 gap-y-2.5 text-[0.95rem] [--d:340ms] sm:mt-9 sm:grid-cols-2">
                {[
                  "Anfahrt im Kreis Lippe inklusive",
                  "Kein Nachtzuschlag in Prozent",
                  "19 % Mehrwertsteuer enthalten",
                  "Material nur nach Ihrem Okay",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckCircle
                      weight="fill"
                      className="mt-0.5 size-5 shrink-0 text-[#8fd3cb]"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Preisfläche mit Siegel. Schiebt sich über die Welle in
                den folgenden Abschnitt. */}
            <div className="hero-rise relative translate-y-14 [--d:220ms] sm:mx-auto sm:w-full sm:max-w-md lg:mx-0 lg:max-w-none lg:translate-y-40">
              <Siegel
                id="siegel-hero"
                className="absolute -right-2 -top-12 z-10 size-28 sm:-right-8 sm:-top-14 sm:size-32 lg:-right-10 lg:-top-16 lg:size-36"
              />
              <div className="rounded-panel bg-brand p-7 text-on-brand shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] sm:p-8">
                <p className="max-w-[16ch] text-[0.78rem] font-semibold uppercase tracking-[0.14em] opacity-70 sm:max-w-none">
                  Türöffnung zum Festpreis
                </p>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="head-zahl text-[3.2rem] sm:text-6xl">
                    {site.preise.tag}
                  </span>
                  <span className="head-zahl text-4xl">€</span>
                </div>
                <p className="mt-1 text-[0.92rem] opacity-80">
                  werktags {site.preise.tagVon} bis {site.preise.tagBis} Uhr
                </p>

                <div className="mt-5 border-t border-on-brand/25 pt-5">
                  <p className="text-[0.95rem]">
                    <span className="tnum font-bold">
                      {euro(site.preise.nacht)}
                    </span>{" "}
                    <span className="opacity-80">
                      nachts, sonntags und feiertags
                    </span>
                  </p>
                  <p className="mt-4 text-[0.88rem] leading-relaxed opacity-80">
                    Was wir Ihnen am Telefon nennen, steht auf der Rechnung.
                    Keine Anfahrtspauschale, kein Aufschlag vor Ort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Welle ton="surface" form="tal" />
      </section>

      {/* ── Einordnung ─────────────────────────────────────── */}
      <Section tone="surface" className="pt-24 sm:pt-28 lg:pt-32">
        <Container>
          {/* Überschrift oben, Text darunter in zwei Spalten. Bewusst
              kein links-Überschrift-rechts-Absatz-Layout: Das lässt in
              der linken Spalte ein leeres Feld stehen und sieht nach
              Vorlage aus, nicht nach Satz. */}
          <H2 className="max-w-[28ch]">
            Der Schlüsseldienst für Lage, der wirklich in Lage sitzt
          </H2>
          <div
            {...reveal(120)}
            className="prose-lippe mt-8 gap-x-14 lg:columns-2 [&_p+p]:mt-4 [&_p]:max-w-none [&_p]:break-inside-avoid">
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
            <p {...reveal(100)} className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
              Wir könnten mit 19 € werben wie die Portale, die bei der Suche
              nach „Schlüsseldienst Lage“ ganz oben stehen. Wir tun es nicht,
              weil für 19 € niemand losfährt und Sie am Ende trotzdem
              dreistellig zahlen.
            </p>
          </div>

          <div className="mt-10">
            <Preistafel />
          </div>

          <div
            {...reveal()}
            className="mt-10 grid gap-8 rounded-panel border border-line bg-bg p-6 sm:p-8 lg:grid-cols-2 lg:gap-12"
          >
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
      {/* Die Hand mit dem Akkuschrauber greift vom rechten Rand ins
          Bild und überlappt die Grenze zum Preisabschnitt darüber. */}
      <Section className="relative">
        <Figur
          src="/img/figur-akkuschrauber.png"
          width={900}
          height={1001}
          sizes="(min-width: 1024px) 400px, 190px"
          faktor={-0.1}
          className="-right-3 -top-14 w-[46vw] max-w-[190px] sm:-top-16 sm:max-w-[260px] lg:-right-2 lg:-top-20 lg:w-[30vw] lg:max-w-[400px]"
        />
        <Ablauf mitFigur />
      </Section>

      {/* ── Notfallband ────────────────────────────────────── */}
      <NotfallBand />

      {/* ── Vertrauen ──────────────────────────────────────── */}
      <Section tone="surface" className="relative pt-28 sm:pt-32 lg:pt-28">
        {/* Schlüsselbund hängt am Bildband darüber und pendelt leicht. */}
        <Figur
          src="/img/figur-schluessel.png"
          width={331}
          height={903}
          sizes="90px"
          faktor={-0.06}
          className="right-5 top-0 w-[52px] -translate-y-[42%] sm:right-10 sm:w-[64px] xl:right-[max(2rem,calc((100vw-76rem)/2-4.5rem))] xl:w-[78px]"
          bildClass="schwingen"
        />
        <Vertrauen />
      </Section>

      {/* ── Ratgeber ───────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-[48ch]">
            <H2>Bevor Sie anrufen</H2>
            <p {...reveal(100)} className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
              Manchmal spart ein kurzer Blick in einen dieser Texte den ganzen
              Einsatz. Das ist uns lieber als ein Auftrag, über den Sie sich
              später ärgern.
            </p>
          </div>

          {/* Zeilenliste statt Kartenraster: Der Ablauf-Block weiter oben
              nutzt bereits Spalten mit Oberkante. Zwei gleich aussehende
              Abschnitte auf einer Seite lassen sie nach Vorlage wirken. */}
          <ul className="mt-8 divide-y divide-line border-y border-line sm:mt-10">
            {ratgeber.map((r, i) => (
              <li key={r.slug} {...reveal(i * 70)}>
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
