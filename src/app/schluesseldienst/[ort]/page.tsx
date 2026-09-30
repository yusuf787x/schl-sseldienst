import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "@phosphor-icons/react/ssr";
import { site, euro } from "@/content/site";
import { orte, ortBySlug } from "@/content/orte";
import { leistungen } from "@/content/leistungen";
import { Container, Section, H2, H3, CallButton, LinkButton } from "@/components/ui";
import {
  Faq,
  Preistafel,
  Ablauf,
  NotfallBand,
  LeistungsIcon,
} from "@/components/blocks";
import { Brotkrumen } from "@/components/Brotkrumen";
import {
  JsonLd,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return orte.map((o) => ({ ort: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ort: string }>;
}): Promise<Metadata> {
  const { ort } = await params;
  const o = ortBySlug(ort);
  if (!o) return {};

  const titel = `Schlüsseldienst ${o.name} | Türöffnung ab ${euro(site.preise.tag)}`;
  const beschreibung = `Schlüsseldienst in ${o.name}: Türöffnung zum Festpreis, Anfahrt inklusive, rund um die Uhr erreichbar. Betrieb mit Adresse in Lage.`;

  return {
    title: { absolute: titel },
    description: beschreibung,
    alternates: { canonical: `/schluesseldienst/${o.slug}` },
    openGraph: { title: titel, description: beschreibung },
  };
}

export default async function OrtsSeite({
  params,
}: {
  params: Promise<{ ort: string }>;
}) {
  const { ort } = await params;
  const o = ortBySlug(ort);
  if (!o) notFound();

  const nachbarn = o.nachbarn
    .map((s) => ortBySlug(s))
    .filter(Boolean) as typeof orte;

  /* Ortsspezifische FAQ zuerst, danach die drei Standardfragen.
     So ist jede der 18 Seiten auch im FAQ-Schema unterscheidbar. */
  const faq = [
    o.faq,
    {
      frage: `Was kostet eine Türöffnung in ${o.name}?`,
      antwort: `${euro(site.preise.tag)} werktags zwischen ${site.preise.tagVon} und ${site.preise.tagBis} Uhr, ${euro(site.preise.nacht)} nachts sowie an Sonn- und Feiertagen. Die Anfahrt nach ${o.name} ist enthalten, ebenso die Mehrwertsteuer. Material kommt nur dazu, wenn es gebraucht wird, und wird vorher besprochen.`,
    },
    {
      frage: `Kommen Sie auch nachts nach ${o.name}?`,
      antwort: `Ja, rund um die Uhr, auch sonntags und an Feiertagen. Es gibt keinen prozentualen Nachtzuschlag, sondern einen zweiten festen Preis. Sie wissen also schon am Telefon, was der Einsatz kostet.`,
    },
    {
      frage: "Wie weisen Sie nach, dass Sie ein echter Betrieb sind?",
      antwort: `Über das Impressum: ${site.brand.legalName}, ${site.contact.street}, ${site.contact.zip} ${site.contact.city}, Handwerksrollennummer ${site.legal.handwerksrolle}. Unsere Nummer ist ein Festnetzanschluss mit Ortsvorwahl, keine 0800-Nummer und keine Vermittlungszentrale.`,
    },
  ];

  const bezeichnung =
    o.typ === "ortsteil" ? "Ortsteil von Lage" : "Kreis Lippe";

  return (
    <>
      <section className="border-b border-line bg-bg pb-12 pt-6 sm:pb-16 sm:pt-8">
        <Container>
          <Brotkrumen
            pfad={[
              { name: "Start", url: "/" },
              { name: "Einsatzgebiet", url: "/einsatzgebiet" },
              { name: o.name, url: `/schluesseldienst/${o.slug}` },
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-brand">
                <MapPin weight="fill" className="size-4" />
                {bezeichnung}
              </p>
              <h1 className="head mt-3 text-balance text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem]">
                Schlüsseldienst {o.name}
              </h1>
              <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
                {o.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton size="xl" />
                <LinkButton href="/preise" variant="outline">
                  Preise ansehen
                </LinkButton>
              </div>
            </div>

            <div className="rounded-panel border border-brand bg-brand p-7 text-on-brand">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] opacity-70">
                Türöffnung in {o.name}
              </p>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="head-zahl text-[2.9rem]">
                  {site.preise.tag}
                </span>
                <span className="head-zahl text-3xl">€</span>
              </div>
              <p className="mt-2 text-[0.9rem] opacity-80">
                werktags {site.preise.tagVon} bis {site.preise.tagBis} Uhr,{" "}
                <span className="tnum">{euro(site.preise.nacht)}</span> nachts
                und sonntags
              </p>
              <ul className="mt-5 grid gap-2 border-t border-on-brand/25 pt-5 text-[0.88rem] opacity-80">
                <li>Anfahrt nach {o.name} inklusive</li>
                <li>19 % Mehrwertsteuer enthalten</li>
                <li>Preis steht vor der Abfahrt fest</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Ortsbezug: der Absatz, der diese Seite von den 17 anderen
          unterscheidet. Individuell geschrieben, siehe content/orte.ts */}
      <Section>
        <Container>
          <div className="max-w-[78ch] border-l-[3px] border-brand pl-6 sm:pl-10">
            <H2>Türen und Schlösser in {o.name}</H2>
            <div className="prose-lippe mt-5 [&_p]:max-w-none">
              <p>{o.lokal}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leistungen im Ortskontext */}
      <Section tone="surface">
        <Container>
          <div className="max-w-[50ch]">
            <H2>Womit wir nach {o.name} kommen</H2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
              Nicht nur die Türöffnung. Das meiste davon lässt sich in Ruhe
              planen, statt im Notfall zu entscheiden.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {leistungen.map((l) => (
              <Link
                key={l.slug}
                href={`/leistungen/${l.slug}`}
                className="group bg-bg p-6 transition-colors hover:bg-brand-tint"
              >
                <span className="text-brand">
                  <LeistungsIcon name={l.icon} className="size-6" />
                </span>
                <H3 className="mt-3.5 text-[1.02rem]">
                  {l.name} in {o.name}
                </H3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                  {l.kurz}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Ablauf />
      </Section>

      <NotfallBand ort={o.name} />

      <Section tone="surface">
        <Container>
          <div className="max-w-[46ch]">
            <H2>Preise für {o.name}</H2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
              Dieselben Beträge wie überall in unserem Gebiet. Die Entfernung
              ist unser Aufwand, nicht Ihr Kostenrisiko.
            </p>
          </div>
          <div className="mt-8">
            <Preistafel />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-[80ch]">
            <Faq items={faq} titel={`Häufige Fragen aus ${o.name}`} />
          </div>
        </Container>
      </Section>

      {/* Interne Verlinkung zu Nachbarorten */}
      <Section tone="surface">
        <Container>
          <H2>In der Nähe von {o.name}</H2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {nachbarn.map((n) => (
              <Link
                key={n.slug}
                href={`/schluesseldienst/${n.slug}`}
                className="group rounded-panel border border-line bg-bg p-5 transition-colors hover:border-brand"
              >
                <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold text-ink-mute">
                  <MapPin className="size-3.5" />
                  {n.typ === "ortsteil" ? "Ortsteil von Lage" : "Kreis Lippe"}
                </p>
                <p className="mt-2 font-semibold group-hover:text-brand">
                  Schlüsseldienst {n.name}
                </p>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-[0.95rem] text-ink-soft">
            <Link
              href="/einsatzgebiet"
              className="font-semibold text-brand underline underline-offset-4"
            >
              Alle Orte in unserem Einsatzgebiet ansehen
            </Link>
          </p>
        </Container>
      </Section>

      <JsonLd
        data={[
          serviceSchema({
            name: `Schlüsseldienst ${o.name}`,
            beschreibung: `Türöffnung, Schlüsselnotdienst, Zylinderwechsel und Einbruchschutz in ${o.name}. Festpreis inklusive Anfahrt, rund um die Uhr erreichbar.`,
            url: `${site.url}/schluesseldienst/${o.slug}`,
          }),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Start", url: "/" },
            { name: "Einsatzgebiet", url: "/einsatzgebiet" },
            { name: o.name, url: `/schluesseldienst/${o.slug}` },
          ]),
        ]}
      />
    </>
  );
}
