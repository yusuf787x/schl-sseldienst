import Link from "next/link";
import Image from "next/image";
import {
  Key,
  Clock,
  Shield,
  Hammer,
  Buildings,
  CaretDown,
  ArrowRight,
  Cylinder,
} from "@phosphor-icons/react/ssr";
import { site, euro } from "@/content/site";
import { leistungen, type Leistung } from "@/content/leistungen";
import { Container, H2, H3, CallButton, reveal } from "./ui";
import { Welle, type Ton } from "./deko";

/* ── Icons ──────────────────────────────────────────────────── */

const icons = { key: Key, clock: Clock, cylinder: Cylinder, shield: Shield, hammer: Hammer, buildings: Buildings };

export function LeistungsIcon({
  name,
  className = "size-6",
}: {
  name: Leistung["icon"];
  className?: string;
}) {
  const Comp = icons[name];
  return <Comp className={className} weight="duotone" />;
}

/* ── FAQ ────────────────────────────────────────────────────── */

/**
 * FAQ ohne JavaScript, über <details>. Funktioniert mit Tastatur und
 * Screenreader out of the box und bleibt lesbar, falls das Script
 * nie lädt. Der zugehörige FAQPage-Schema-Block sitzt in schema.ts.
 */
export function Faq({
  items,
  titel = "Häufige Fragen",
}: {
  items: { frage: string; antwort: string }[];
  titel?: string;
}) {
  return (
    <div>
      <H2>{titel}</H2>
      <div {...reveal(100)} className="mt-7 border-t border-line">
        {items.map((f) => (
          <details key={f.frage} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left font-semibold marker:content-none">
              <span className="text-[1.02rem] leading-snug">{f.frage}</span>
              <CaretDown className="mt-1 size-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="max-w-[68ch] pb-5 text-[0.95rem] leading-relaxed text-ink-soft">
              {f.antwort}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ── Preise ─────────────────────────────────────────────────── */

export function Preistafel({ kompakt = false }: { kompakt?: boolean }) {
  const { tag, nacht, tagVon, tagBis, hinweis } = site.preise;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Preiskarte
          betrag={euro(tag)}
          titel="Türöffnung am Tag"
          zeit={`Montag bis Samstag, ${tagVon} bis ${tagBis} Uhr`}
          hervor
        />
        <Preiskarte
          betrag={euro(nacht)}
          titel="Türöffnung nachts und sonntags"
          zeit={`Außerhalb ${tagVon} bis ${tagBis} Uhr, sonn- und feiertags`}
          verzoegerung={120}
        />
      </div>

      <ul className="mt-5 grid gap-2.5 text-[0.9rem] text-ink-soft sm:grid-cols-2">
        {[
          "Anfahrt im Kreis Lippe inklusive",
          "19 % Mehrwertsteuer bereits enthalten",
          "Kein prozentualer Nacht- oder Wochenendzuschlag",
          "Preis steht fest, bevor wir losfahren",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2.5">
            <span
              aria-hidden="true"
              className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-brand"
            />
            {t}
          </li>
        ))}
      </ul>

      {!kompakt && (
        <p className="mt-6 max-w-[70ch] text-[0.9rem] leading-relaxed text-ink-mute">
          {hinweis}
        </p>
      )}
    </div>
  );
}

function Preiskarte({
  betrag,
  titel,
  zeit,
  hervor = false,
  verzoegerung = 0,
}: {
  betrag: string;
  titel: string;
  zeit: string;
  hervor?: boolean;
  verzoegerung?: number;
}) {
  return (
    <div
      {...reveal(verzoegerung, "zoom")}
      className={`rounded-panel border p-6 ${
        hervor
          ? "border-brand bg-brand text-on-brand"
          : "border-line bg-surface"
      }`}
    >
      <p
        className={`text-[0.8rem] font-semibold uppercase tracking-[0.12em] ${
          hervor ? "opacity-70" : "text-ink-mute"
        }`}
      >
        {titel}
      </p>
      <p className="head-zahl mt-3 text-[2.2rem] sm:text-[2.6rem]">
        {betrag}
      </p>
      <p
        className={`mt-2 text-[0.87rem] leading-relaxed ${
          hervor ? "opacity-80" : "text-ink-soft"
        }`}
      >
        {zeit}
      </p>
    </div>
  );
}

/* ── Ablauf ─────────────────────────────────────────────────── */

const schritte = [
  {
    titel: "Sie rufen an",
    text: "Sie sagen uns in einem Satz, wo Sie sind und was mit Tür, Schloss oder Schlüssel los ist.",
  },
  {
    titel: "Wir nennen den Preis",
    text: "Noch am Telefon, vor der Abfahrt. Und wir sagen Ihnen, in welchem Fall Material dazukommen könnte.",
  },
  {
    titel: "Der Monteur fährt los",
    text: "Sie bekommen eine ehrliche Einschätzung, wann er da ist, keine Wunschzahl.",
  },
  {
    titel: "Kurze Berechtigungsprüfung",
    text: "Vor Ort klären wir, dass Sie diese Tür öffnen lassen dürfen. Das schützt Sie und Ihre Nachbarn.",
  },
  {
    titel: "Die Tür geht auf",
    text: "Fachgerecht und so schonend, wie Schloss und Situation es zulassen. Wird mehr nötig, fragen wir vorher.",
  },
  {
    titel: "Zahlung und Rechnung",
    text: "Bar oder mit Karte, zum Preis vom Telefon. Sie bekommen eine nachvollziehbare Rechnung.",
  },
];

/**
 * `mitFigur`: Auf der Startseite ragt rechts oben eine Hand mit
 * Akkuschrauber ins Bild. Der Kopfbereich hält dann rechts Platz frei
 * und nimmt den Notfallhinweis mit nach oben, damit nichts überlappt.
 */
export function Ablauf({ mitFigur = false }: { mitFigur?: boolean }) {
  const hinweis = (
    <p
      {...reveal(150)}
      className={`max-w-[64ch] border-l-2 border-brand pl-5 text-[0.98rem] leading-relaxed text-ink ${
        mitFigur ? "mt-6" : "mt-10"
      }`}
    >
      Wenn ein Kind, ein Tier oder eine hilfebedürftige Person hinter der Tür
      ist oder der Herd läuft, sagen Sie uns das bitte im ersten Satz. Solche
      Einsätze ziehen wir vor.
    </p>
  );

  return (
    <Container>
      <div
        className={
          mitFigur ? "lg:min-h-[19rem] lg:max-w-[52ch]" : "max-w-[46ch]"
        }
      >
        {/* Auf Handy und Tablet hält nur die Überschrift rechts Platz
            für die Figur frei, der Hinweis darunter nutzt die volle Breite. */}
        <div className={mitFigur ? "pr-[34%] sm:pr-[38%] lg:pr-0" : ""}>
          <H2>So läuft ein Einsatz bei uns ab</H2>
          <p
            {...reveal(80)}
            className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft"
          >
            Sechs Schritte, und keiner davon enthält eine Überraschung.
          </p>
        </div>
        {mitFigur && hinweis}
      </div>

      <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {schritte.map((s, i) => (
          <li
            key={s.titel}
            {...reveal((i % 3) * 90)}
            className="border-t-2 border-brand pt-4"
          >
            <p className="tnum text-[0.78rem] font-bold text-brand">
              {String(i + 1).padStart(2, "0")}
            </p>
            <H3 className="mt-1.5">{s.titel}</H3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
              {s.text}
            </p>
          </li>
        ))}
      </ol>

      {!mitFigur && hinweis}
    </Container>
  );
}

/* ── Leistungsübersicht ─────────────────────────────────────── */

export function LeistungsGrid() {
  return (
    <Container>
      <div className="max-w-[48ch]">
        <H2>Was wir machen</H2>
        <p {...reveal(80)} className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
          Vom nächtlichen Notfall bis zur Schließanlage, die Sie in Ruhe planen.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {leistungen.map((l, i) => (
          <Link
            key={l.slug}
            href={`/leistungen/${l.slug}`}
            {...reveal((i % 3) * 90)}
            className="group flex flex-col overflow-hidden rounded-panel border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-brand hover:shadow-[0_24px_48px_-28px_rgba(22,33,31,0.45)]"
          >
            <div className="overflow-hidden">
              <Image
                src={`/img/${l.bild.datei}`}
                alt={l.bild.alt}
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
            <span className="text-brand">
              <LeistungsIcon name={l.icon} className="size-7" />
            </span>
            <H3 className="mt-4">{l.name}</H3>
            <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-ink-soft">
              {l.kurz}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-brand">
              Mehr dazu
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

/* ── Notfall-Aufruf ─────────────────────────────────────────── */

/**
 * Bildband, an dem die Seite vorbeiscrollt: Das Foto steht fest im
 * Fenster, der Abschnitt schneidet nur einen Ausschnitt heraus
 * (clip-path + position: fixed, funktioniert auch auf dem iPhone, wo
 * background-attachment: fixed ignoriert wird).
 *
 * `oben` und `unten` sind die Farben der Nachbarabschnitte. Deren
 * Wellen legen sich über das Foto, so gibt es keine harte Kante.
 */
export function NotfallBand({
  ort,
  oben = "bg",
  unten = "surface",
}: {
  ort?: string;
  oben?: Ton;
  unten?: Ton;
}) {
  return (
    <section className="relative isolate text-[#faf7f0]">
      {/* Der Ausschnitt endet 3px vor den Kanten, die Wellen decken den
          Rand ab. Sonst blitzt beim Beschnitt eine Haarlinie durch. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 inset-y-[3px] -z-10 overflow-hidden [clip-path:inset(0)]"
      >
        <div className="fixed inset-0">
          <Image
            src="/img/notdienst-nacht.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[60%_50%]"
          />
          <div className="absolute inset-0 bg-[#0a1110]/70" />
        </div>
      </div>

      <Welle ton={oben} seite="oben" />

      <Container className="relative z-[2] py-24 sm:py-32 lg:py-36">
        <div className="flex flex-col items-stretch gap-7 md:flex-row md:items-center md:justify-between">
          <div {...reveal(0, "links")}>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#8fd3cb]">
              Rund um die Uhr erreichbar
            </p>
            <p className="head mt-3 text-[1.55rem] sm:text-[2rem] lg:text-[2.3rem]">
              Ausgesperrt{ort ? ` in ${ort}` : ""}? Rufen Sie an.
            </p>
            <p className="mt-3 max-w-[48ch] text-[1rem] text-white/80 sm:text-[1.05rem]">
              Sie erfahren den Festpreis, bevor wir losfahren. Keine
              versteckten Kosten, auch nachts nicht.
            </p>
          </div>
          <div {...reveal(150, "rechts")} className="shrink-0">
            <CallButton size="xl" variant="hell" className="w-full md:w-auto" />
          </div>
        </div>
      </Container>

      <Welle ton={unten} />
    </section>
  );
}

/* ── Vertrauensmerkmale ─────────────────────────────────────── */

export function Vertrauen() {
  const punkte = [
    {
      titel: "Betrieb mit Adresse in Lage",
      text: `Kastanienstraße ${site.contact.street.replace(/\D/g, "")} in ${site.contact.zip} ${site.contact.city}. Sie können vorbeikommen, nicht nur anrufen.`,
    },
    {
      titel: `Festnetz mit Ortsvorwahl ${site.contact.phoneDisplay.split(" ")[0]}`,
      text: "Keine 0800-Nummer, keine Vermittlungszentrale, die den Auftrag gegen Provision weitergibt.",
    },
    {
      titel: `Handwerksrolle ${site.legal.handwerksrolle}`,
      text: "Eingetragener Handwerksbetrieb. Die Nummer steht im Impressum und lässt sich prüfen.",
    },
    {
      titel: "Preis vor der Anfahrt",
      text: "Sie hören den Betrag am Telefon. Nicht erst, wenn der Monteur vor der offenen Tür steht.",
    },
  ];

  return (
    <Container>
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <H2>Woran Sie erkennen, dass wir echt sind</H2>
          <div {...reveal(80)} className="prose-lippe mt-5">
            <p>
              Die Suche nach einem Schlüsseldienst führt in Lage fast nur zu
              bundesweiten Vermittlungsportalen, die mit 19 oder 29 € werben.
              Für diesen Betrag fährt niemand mit einem ausgestatteten Fahrzeug
              los. Der Preis ist ein Köder, abgerechnet wird nachher etwas
              anderes.
            </p>
            <p>
              Wir gehen den anderen Weg und machen uns überprüfbar. Vier Dinge,
              die Sie bei jedem Anbieter kontrollieren können, auch bei uns:
            </p>
          </div>

          {/* Der stärkste Trust-Baustein auf so einer Seite ist ein Bild
              von echter Handarbeit: Es zeigt, dass hinter der Nummer ein
              Betrieb steht. Sobald ein Foto vom eigenen Fahrzeug da ist,
              gehört es an genau diese Stelle, siehe BILDBEDARF.md. */}
          {/* Versetzte Farbfläche hinter dem Foto, das Foto selbst
              gleitet beim Scrollen leicht nach. */}
          <div {...reveal(0, "zoom")} className="relative mt-8 mr-3 sm:mr-5">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 left-8 top-8 rounded-panel bg-brand sm:-bottom-5 sm:-right-5"
            />
            <div className="relative overflow-hidden rounded-panel">
              <div data-parallax="0.06" className="parallax -my-6">
                <Image
                  src="/img/werkstatt-schluessel.jpg"
                  alt="Hände an einer Schlüsselfräsmaschine, daneben liegt Werkzeug"
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="aspect-[16/11] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {punkte.map((p, i) => (
            <li
              key={p.titel}
              {...reveal((i % 2) * 100 + Math.floor(i / 2) * 80)}
              className="rounded-panel border border-line bg-bg p-6 border-t-2 border-t-brand"
            >
              <H3 className="text-[1.02rem]">{p.titel}</H3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

/* ── Interne Verlinkung ─────────────────────────────────────── */

export function VerwandteLeistungen({ slugs }: { slugs: string[] }) {
  const items = slugs
    .map((s) => leistungen.find((l) => l.slug === s))
    .filter(Boolean) as Leistung[];
  if (!items.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((l) => (
        <Link
          key={l.slug}
          href={`/leistungen/${l.slug}`}
          className="group flex items-start gap-4 rounded-panel border border-line bg-surface p-5 transition-colors hover:border-brand"
        >
          <span className="text-brand">
            <LeistungsIcon name={l.icon} className="size-6" />
          </span>
          <span>
            <span className="block font-semibold">{l.name}</span>
            <span className="mt-1 block text-[0.88rem] leading-relaxed text-ink-soft">
              {l.kurz}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

