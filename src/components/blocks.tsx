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
import { Container, H2, H3, CallButton } from "./ui";

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
      <div className="mt-7 border-t border-line">
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
}: {
  betrag: string;
  titel: string;
  zeit: string;
  hervor?: boolean;
}) {
  return (
    <div
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

export function Ablauf() {
  return (
    <Container>
      <div className="max-w-[46ch]">
        <H2>So läuft ein Einsatz bei uns ab</H2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
          Sechs Schritte, und keiner davon enthält eine Überraschung.
        </p>
      </div>

      <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {schritte.map((s, i) => (
          <li key={s.titel} className="border-t-2 border-brand pt-4">
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

      <p className="mt-10 max-w-[64ch] border-l-2 border-brand pl-5 text-[0.98rem] leading-relaxed text-ink">
        Wenn ein Kind, ein Tier oder eine hilfebedürftige Person hinter der Tür
        ist oder der Herd läuft, sagen Sie uns das bitte im ersten Satz. Solche
        Einsätze ziehen wir vor.
      </p>
    </Container>
  );
}

/* ── Leistungsübersicht ─────────────────────────────────────── */

export function LeistungsGrid() {
  return (
    <Container>
      <div className="max-w-[48ch]">
        <H2>Was wir machen</H2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
          Vom nächtlichen Notfall bis zur Schließanlage, die Sie in Ruhe planen.
        </p>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {leistungen.map((l) => (
          <Link
            key={l.slug}
            href={`/leistungen/${l.slug}`}
            className="group flex flex-col bg-surface transition-colors hover:bg-brand-tint"
          >
            <Image
              src={`/img/${l.bild.datei}`}
              alt={l.bild.alt}
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-[16/10] w-full object-cover"
            />
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

export function NotfallBand({
  ort,
}: {
  ort?: string;
}) {
  return (
    <div className="bg-brand py-12 text-on-brand sm:py-14">
      <Container>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="head text-[1.4rem] sm:text-[1.65rem]">
              Ausgesperrt{ort ? ` in ${ort}` : ""}? Rufen Sie an.
            </p>
            <p className="mt-2 max-w-[52ch] text-[0.98rem] opacity-80">
              Rund um die Uhr erreichbar. Sie erfahren den Preis, bevor wir
              losfahren.
            </p>
          </div>
          <CallButton size="xl" variant="onBrand" className="shrink-0" />
        </div>
      </Container>
    </div>
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
          <div className="prose-lippe mt-5">
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
          <Image
            src="/img/werkstatt-schluessel.jpg"
            alt="Hände an einer Schlüsselfräsmaschine, daneben liegt Werkzeug"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="mt-8 aspect-[16/10] w-full rounded-panel object-cover"
          />
        </div>

        <ul className="grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2">
          {punkte.map((p) => (
            <li key={p.titel} className="bg-surface p-6">
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

