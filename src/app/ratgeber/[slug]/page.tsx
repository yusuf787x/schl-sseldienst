import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { ratgeber, ratgeberBySlug } from "@/content/ratgeber";
import { Container, Section, H2, H3, CallButton } from "@/components/ui";
import { NotfallBand, VerwandteLeistungen } from "@/components/blocks";
import { Brotkrumen } from "@/components/Brotkrumen";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return ratgeber.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = ratgeberBySlug(slug);
  if (!r) return {};
  return {
    title: { absolute: r.titel },
    description: r.meta,
    alternates: { canonical: `/ratgeber/${r.slug}` },
    openGraph: { type: "article", title: r.titel, description: r.meta },
  };
}

export default async function RatgeberSeite({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = ratgeberBySlug(slug);
  if (!r) notFound();

  return (
    <>
      <article>
        <section className="border-b border-line bg-bg pb-12 pt-6 sm:pb-14 sm:pt-8">
          <Container>
            <Brotkrumen
              pfad={[
                { name: "Start", url: "/" },
                { name: "Ratgeber", url: "/ratgeber" },
                { name: r.titel, url: `/ratgeber/${r.slug}` },
              ]}
            />

            <div className="mt-6 max-w-[46rem]">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                {r.lesezeit} Minuten Lesezeit
              </p>
              <h1 className="head mt-3 text-balance text-[1.8rem] sm:text-[2.25rem]">
                {r.titel}
              </h1>
            </div>

            {/* Kernantwort ganz oben. Wer nur diesen Kasten liest, hat
                die Frage beantwortet. Genau diesen Absatz greifen
                AI Overviews und Perplexity bevorzugt ab. */}
            <div className="mt-8 max-w-[72ch] border-l-[3px] border-brand bg-brand-tint p-6 sm:p-7">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-brand">
                Kurz gesagt
              </p>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-ink">
                {r.kernantwort}
              </p>
            </div>
          </Container>
        </section>

        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
              <div>
                {r.abschnitte.map((a, i) => (
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

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-panel border border-line bg-surface p-6">
                  <p className="font-semibold leading-snug">
                    Lieber direkt fragen?
                  </p>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
                    {site.erreichbarkeit}. Die Auskunft am Telefon kostet Sie
                    nichts.
                  </p>
                  <CallButton className="mt-5 w-full" />
                </div>
              </aside>
            </div>
          </Container>
        </Section>

        <NotfallBand />

        <Section tone="surface">
          <Container>
            <H2>Dazu passende Leistungen</H2>
            <div className="mt-8">
              <VerwandteLeistungen slugs={r.leistungen} />
            </div>
          </Container>
        </Section>
      </article>

      <JsonLd
        data={[
          articleSchema({
            titel: r.titel,
            beschreibung: r.meta,
            url: `${site.url}/ratgeber/${r.slug}`,
          }),
          breadcrumbSchema([
            { name: "Start", url: "/" },
            { name: "Ratgeber", url: "/ratgeber" },
            { name: r.titel, url: `/ratgeber/${r.slug}` },
          ]),
        ]}
      />
    </>
  );
}
