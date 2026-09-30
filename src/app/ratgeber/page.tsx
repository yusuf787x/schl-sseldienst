import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { ratgeber } from "@/content/ratgeber";
import { Container, Section, H3 } from "@/components/ui";
import { NotfallBand } from "@/components/blocks";
import { Brotkrumen } from "@/components/Brotkrumen";

export const metadata: Metadata = {
  title: "Ratgeber: Tür, Schloss und Schlüssel",
  description:
    "Was ein Schlüsseldienst kosten darf, was bei Schlüsselverlust gilt und woran Sie unseriöse Anbieter erkennen. Praxiswissen aus dem Kreis Lippe.",
  alternates: { canonical: "/ratgeber" },
};

export default function RatgeberUebersicht() {
  const [erster, ...weitere] = ratgeber;

  return (
    <>
      <section className="border-b border-line bg-bg pb-12 pt-6 sm:pb-16 sm:pt-8">
        <Container>
          <Brotkrumen
            pfad={[
              { name: "Start", url: "/" },
              { name: "Ratgeber", url: "/ratgeber" },
            ]}
          />
          <div className="mt-6">
            <h1 className="head text-balance text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem]">
              Ratgeber rund um Tür, Schloss und Schlüssel
            </h1>
            <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
              Ehrliche Antworten auf die Fragen, die uns am Telefon am
              häufigsten gestellt werden. Auch dann, wenn die Antwort lautet:
              Rufen Sie uns nicht an, das geht auch anders.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          {/* Erster Beitrag groß, der Rest in Spalten. Das bricht den
              gleichförmigen Kartenraster auf. */}
          <Link
            href={`/ratgeber/${erster.slug}`}
            className="group grid gap-6 rounded-panel border border-line bg-surface p-7 transition-colors hover:border-brand sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-12"
          >
            <div>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                {erster.lesezeit} Minuten Lesezeit
              </p>
              <h2 className="head mt-3 text-balance text-[1.4rem] sm:text-[1.8rem]">
                {erster.titel}
              </h2>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-brand">
                Lesen
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
            <p className="text-[0.98rem] leading-relaxed text-ink-soft">
              {erster.kernantwort}
            </p>
          </Link>

          <div className="mt-10 grid gap-x-10 gap-y-px sm:grid-cols-2">
            {weitere.map((r) => (
              <Link
                key={r.slug}
                href={`/ratgeber/${r.slug}`}
                className="group border-t-2 border-line py-7 transition-colors hover:border-brand"
              >
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                  {r.lesezeit} Minuten Lesezeit
                </p>
                <H3 className="mt-2 text-[1.2rem]">{r.titel}</H3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                  {r.kurz}
                </p>
                <span className="mt-3.5 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-brand">
                  Lesen
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <NotfallBand />
    </>
  );
}
