import Link from "next/link";
import { MapPin, Phone, EnvelopeSimple, Clock } from "@phosphor-icons/react/ssr";
import { Logo } from "./Logo";
import { Welle } from "./deko";
import { site, telHref } from "@/content/site";
import { leistungen } from "@/content/leistungen";
import { ratgeber } from "@/content/ratgeber";
import { ortsteile, nachbarstaedte } from "@/content/orte";

/**
 * Einsatzgebiet-Block über dem Footer.
 *
 * Erfüllt zwei Aufgaben zugleich: Er ist die vollständige interne
 * Verlinkung auf alle 18 Ortsseiten (keine Orphan Pages) und die vom
 * Betreiber gewünschte Keyword-Sektion in Footernähe. Die Orte stehen
 * als echte Links, nicht als Textwüste, weil Google Linklisten mit
 * Zielseiten anders bewertet als aufgezählte Ortsnamen ohne Substanz.
 */
export function Einsatzgebiet() {
  return (
    <section className="relative bg-sunk pb-24 pt-12 sm:pb-32 sm:pt-16">
      <div className="mx-auto w-full max-w-[76rem] px-5 sm:px-8">
        <h2 data-reveal="" className="head text-[1.25rem] sm:text-[1.5rem]">
          Unser Einsatzgebiet im Kreis Lippe
        </h2>
        <p className="mt-3 max-w-[70ch] text-[0.95rem] leading-relaxed text-ink-soft">
          Wir sind Ihr Schlüsseldienst für Lage und die Nachbarschaft: für
          Türöffnung, Schlüsselnotdienst, Zylinderwechsel und Einbruchschutz.
          Die Anfahrt ist in jedem dieser Orte im Festpreis enthalten.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
              Ortsteile von Lage
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {ortsteile.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/schluesseldienst/${o.slug}`}
                    className="inline-block rounded-ctl border border-line bg-surface px-3 py-1.5 text-[0.85rem] font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
              Städte und Gemeinden im Kreis Lippe
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {nachbarstaedte.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/schluesseldienst/${o.slug}`}
                    className="inline-block rounded-ctl border border-line bg-surface px-3 py-1.5 text-[0.85rem] font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Weicher Übergang in den Footer, geschichtet statt harter Kante. */}
      <Welle ton="brand" form="tal" />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand text-on-brand">
      <div className="mx-auto w-full max-w-[76rem] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-on-brand">
              <Logo withClaim />
            </div>
            <p className="mt-5 max-w-[34ch] text-[0.9rem] leading-relaxed opacity-80">
              Schlüsseldienst aus Lage für den Kreis Lippe. Festpreis, den Sie
              am Telefon erfahren. Keine Anfahrtskosten, kein Nachtzuschlag in
              Prozent.
            </p>

            <ul className="mt-6 grid gap-3 text-[0.9rem]">
              <li>
                <a
                  href={telHref}
                  data-cta="call"
                  className="inline-flex items-center gap-2.5 font-semibold hover:underline"
                >
                  <Phone weight="fill" className="size-4 shrink-0 opacity-80" />
                  <span className="tnum">{site.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2.5 opacity-80 hover:underline"
                >
                  <EnvelopeSimple className="size-4 shrink-0" />
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 opacity-80">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {site.contact.street}
                  <br />
                  {site.contact.zip} {site.contact.city}
                </span>
              </li>
              <li className="flex items-start gap-2.5 opacity-80">
                <Clock className="mt-0.5 size-4 shrink-0" />
                <span>{site.erreichbarkeit}</span>
              </li>
            </ul>
          </div>

          <FooterSpalte titel="Leistungen">
            {leistungen.map((l) => (
              <FooterLink key={l.slug} href={`/leistungen/${l.slug}`}>
                {l.name}
              </FooterLink>
            ))}
          </FooterSpalte>

          <FooterSpalte titel="Ratgeber">
            {ratgeber.map((r) => (
              <FooterLink key={r.slug} href={`/ratgeber/${r.slug}`}>
                {r.navLabel}
              </FooterLink>
            ))}
          </FooterSpalte>

          <FooterSpalte titel="Unternehmen">
            <FooterLink href="/preise">Preise</FooterLink>
            <FooterLink href="/einsatzgebiet">Einsatzgebiet</FooterLink>
            <FooterLink href="/kontakt">Kontakt</FooterLink>
            <FooterLink href="/impressum">Impressum</FooterLink>
            <FooterLink href="/datenschutz">Datenschutz</FooterLink>
          </FooterSpalte>
        </div>
      </div>
    </footer>
  );
}

function FooterSpalte({
  titel,
  children,
}: {
  titel: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] opacity-60">
        {titel}
      </h3>
      <ul className="mt-4 grid gap-2.5 text-[0.9rem]">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className="opacity-80 hover:underline">
        {children}
      </Link>
    </li>
  );
}
