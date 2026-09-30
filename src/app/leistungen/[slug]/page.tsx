import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { leistungen, leistungBySlug } from "@/content/leistungen";
import { ratgeberBySlug } from "@/content/ratgeber";
import { Container, Section, H2, H3, CallButton, LinkButton } from "@/components/ui";
import {
  Faq,
  NotfallBand,
  Preistafel,
  VerwandteLeistungen,
  LeistungsIcon,
} from "@/components/blocks";
import {
  JsonLd,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { Brotkrumen } from "@/components/Brotkrumen";

export function generateStaticParams() {
  return leistungen.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = leistungBySlug(slug);
  if (!l) return {};
  return {
    title: { absolute: l.titel },
    description: l.meta,
    alternates: { canonical: `/leistungen/${l.slug}` },
    openGraph: { title: l.titel, description: l.meta },
  };
}

export default async function LeistungsSeite({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = leistungBySlug(slug);
  if (!l) notFound();

  const tipp = l.ratgeber ? ratgeberBySlug(l.ratgeber) : undefined;

  return (
    <>
      <section className="border-b border-line bg-bg pb-12 pt-6 sm:pb-16 sm:pt-8">
        <Container>
          <Brotkrumen
            pfad={[
              { name: "Start", url: "/" },
              { name: l.name, url: `/leistungen/${l.slug}` },
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
            <div>
              <span className="inline-flex text-brand">
                <LeistungsIcon name={l.icon} className="size-9" />
              </span>
              <h1 className="head mt-4 text-balance text-[1.8rem] sm:text-[2.1rem] lg:text-[2.4rem]">
                {l.titel}
              </h1>
              <p className="mt-5 max-w-[56ch] text-[1.05rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
                {l.intro}
              </p>
            </div>

            <div>
              <Image
                src={`/img/${l.bild.datei}`}
                alt={l.bild.alt}
                width={1200}
                height={800}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[3/2] w-full rounded-panel object-cover"
              />
              <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CallButton size="xl" />
                <LinkButton href="/preise" variant="outline">
                  Alle Preise ansehen
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Fließtext der Leistung. Der erste Satz unter jeder H2 beantwortet
          die Frage der Überschrift vollständig, damit AI-Systeme den
          Absatz für sich genommen zitieren können. */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
            <div>
              {l.abschnitte.map((a, i) => (
                <div key={a.h2} className={i > 0 ? "mt-12" : ""}>
                  <H2>{a.h2}</H2>
                  <div className="prose-lippe mt-4">
                    {a.absaetze.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>

                  {a.liste && (
                    <ul className="mt-7 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2">
                      {a.liste.map((item) => (
                        <li key={item.titel} className="bg-surface p-5">
                          <H3 className="text-[1rem]">{item.titel}</H3>
                          <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">
                            {item.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Seitenspalte: Nummer bleibt beim Lesen in Reichweite. */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-panel border border-line bg-surface p-6">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                  Direkt erreichbar
                </p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
                  {site.erreichbarkeit}. Sie erfahren den Preis, bevor wir
                  losfahren.
                </p>
                <CallButton className="mt-5 w-full" />
              </div>

              {tipp && (
                <Link
                  href={`/ratgeber/${tipp.slug}`}
                  className="mt-4 block rounded-panel border border-line bg-surface p-6 transition-colors hover:border-brand"
                >
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                    Passend dazu
                  </p>
                  <p className="mt-2.5 font-semibold leading-snug">
                    {tipp.titel}
                  </p>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-soft">
                    {tipp.lesezeit} Minuten Lesezeit
                  </p>
                </Link>
              )}
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="max-w-[46ch]">
            <H2>Unsere Preise</H2>
          </div>
          <div className="mt-8">
            <Preistafel />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-[80ch]">
            <Faq items={l.faq} titel={`Häufige Fragen: ${l.name}`} />
          </div>
        </Container>
      </Section>

      <NotfallBand />

      <Section tone="surface">
        <Container>
          <H2>Das könnte auch zu Ihrem Fall gehören</H2>
          <div className="mt-8">
            <VerwandteLeistungen slugs={l.verwandt} />
          </div>
        </Container>
      </Section>

      <JsonLd
        data={[
          serviceSchema({
            name: l.titel,
            beschreibung: l.meta,
            url: `${site.url}/leistungen/${l.slug}`,
          }),
          faqSchema(l.faq),
          breadcrumbSchema([
            { name: "Start", url: "/" },
            { name: l.name, url: `/leistungen/${l.slug}` },
          ]),
        ]}
      />
    </>
  );
}
