import type { Metadata } from "next";
import { Container, Section, H3, CallButton, LinkButton } from "@/components/ui";
import { leistungen } from "@/content/leistungen";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NichtGefunden() {
  return (
    <Section>
      <Container>
        <div className="max-w-[52ch]">
          <p className="tnum text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
            Fehler 404
          </p>
          <h1 className="head mt-3 text-balance text-[1.8rem] sm:text-[2.2rem]">
            Diese Seite gibt es nicht
          </h1>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
            Vielleicht hat sich die Adresse geändert. Wenn Sie gerade vor einer
            verschlossenen Tür stehen, ist der schnellste Weg ohnehin das
            Telefon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton size="xl" />
            <LinkButton href="/" variant="outline">
              Zur Startseite
            </LinkButton>
          </div>
        </div>

        <div className="mt-14">
          <H3>Häufig gesucht</H3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {leistungen.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/leistungen/${l.slug}`}
                  className="inline-block rounded-ctl border border-line bg-surface px-4 py-2 text-[0.9rem] font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand"
                >
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/einsatzgebiet"
                className="inline-block rounded-ctl border border-line bg-surface px-4 py-2 text-[0.9rem] font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand"
              >
                Einsatzgebiet
              </Link>
            </li>
            <li>
              <Link
                href="/preise"
                className="inline-block rounded-ctl border border-line bg-surface px-4 py-2 text-[0.9rem] font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand"
              >
                Preise
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
