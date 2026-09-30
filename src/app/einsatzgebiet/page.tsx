import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "@phosphor-icons/react/ssr";
import { site } from "@/content/site";
import { ortsteile, nachbarstaedte } from "@/content/orte";
import { Container, Section, H2, H3 } from "@/components/ui";
import { NotfallBand } from "@/components/blocks";
import { Brotkrumen } from "@/components/Brotkrumen";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Einsatzgebiet im Kreis Lippe",
  description:
    "Wir kommen nach Lage mit allen Ortsteilen sowie nach Detmold, Lemgo, Bad Salzuflen, Oerlinghausen, Leopoldshöhe, Augustdorf und Schlangen. Anfahrt inklusive.",
  alternates: { canonical: "/einsatzgebiet" },
};

export default function EinsatzgebietSeite() {
  return (
    <>
      <section className="border-b border-line bg-bg pb-12 pt-6 sm:pb-16 sm:pt-8">
        <Container>
          <Brotkrumen
            pfad={[
              { name: "Start", url: "/" },
              { name: "Einsatzgebiet", url: "/einsatzgebiet" },
            ]}
          />
          <div className="mt-6">
            <h1 className="head text-balance text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem]">
              Wo wir hinkommen
            </h1>
            <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
              Von unserem Betrieb in {site.contact.city} aus fahren wir den
              gesamten mittleren Kreis Lippe an. Die Anfahrt ist überall im
              Festpreis enthalten, auch in den weiter entfernten Orten.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <H2>Lage mit allen Ortsteilen</H2>
            <div>
              <p className="max-w-[64ch] text-[1rem] leading-relaxed text-ink-soft">
                {site.contact.city} ist unser Standort, entsprechend kurz sind
                hier die Wege. Wir fahren auch die Einzellagen und Hofstellen
                am Ortsrand an.
              </p>
              <ul className="mt-7 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2">
                {ortsteile.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/schluesseldienst/${o.slug}`}
                      className="group flex h-full flex-col bg-surface p-5 transition-colors hover:bg-brand-tint"
                    >
                      <H3 className="text-[1.02rem] group-hover:text-brand">
                        {o.name}
                      </H3>
                      <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-soft">
                        {o.intro.split(".")[0]}.
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <H2>Städte und Gemeinden im Kreis Lippe</H2>
            <div>
              <p className="max-w-[64ch] text-[1rem] leading-relaxed text-ink-soft">
                Rund um {site.contact.city} sind wir im gesamten Kreis Lippe
                unterwegs. Wie lange die Anfahrt dauert, sagen wir Ihnen ehrlich
                am Telefon. Was sie kostet, wissen Sie schon jetzt: nichts
                extra.
              </p>
              <ul className="mt-7 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2">
                {nachbarstaedte.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/schluesseldienst/${o.slug}`}
                      className="group flex h-full flex-col bg-bg p-5 transition-colors hover:bg-brand-tint"
                    >
                      <p className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-ink-mute">
                        <MapPin className="size-3.5" />
                        {o.plz}
                      </p>
                      <H3 className="mt-1.5 text-[1.02rem] group-hover:text-brand">
                        {o.name}
                      </H3>
                      <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-soft">
                        {o.intro.split(".")[0]}.
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-[68ch] border-l-2 border-brand pl-6">
            <H3>Ihr Ort ist nicht dabei?</H3>
            <p className="mt-3 text-[1rem] leading-relaxed text-ink-soft">
              Rufen Sie trotzdem an. Wenn wir den Weg nicht sinnvoll fahren
              können, sagen wir Ihnen das offen und nennen Ihnen, wenn möglich,
              jemanden in Ihrer Nähe. Ein Anruf, bei dem wir Ihnen absagen, ist
              uns lieber als eine Anfahrt, die für Sie zu lange dauert.
            </p>
          </div>
        </Container>
      </Section>

      <NotfallBand unten="sunk" />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", url: "/" },
          { name: "Einsatzgebiet", url: "/einsatzgebiet" },
        ])}
      />
    </>
  );
}
