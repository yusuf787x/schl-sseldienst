import type { Metadata } from "next";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  IdentificationCard,
} from "@phosphor-icons/react/ssr";
import { site, telHref } from "@/content/site";
import { Container, Section, H3, CallButton } from "@/components/ui";
import { Brotkrumen } from "@/components/Brotkrumen";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Schlüsseldienst aus ${site.contact.city}: Telefon ${site.contact.phoneDisplay}, rund um die Uhr erreichbar. Betrieb mit ladungsfähiger Adresse im Kreis Lippe.`,
  alternates: { canonical: "/kontakt" },
};

export default function KontaktSeite() {
  return (
    <>
      <section className="border-b border-line bg-bg pb-12 pt-6 sm:pb-16 sm:pt-8">
        <Container>
          <Brotkrumen
            pfad={[
              { name: "Start", url: "/" },
              { name: "Kontakt", url: "/kontakt" },
            ]}
          />
          <div className="mt-6">
            <h1 className="head text-balance text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem]">
              So erreichen Sie uns
            </h1>
            <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
              Im Notfall ist das Telefon der schnellste Weg. Für alles, was Zeit
              hat, geht auch eine E-Mail.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <div className="rounded-panel border border-brand bg-brand p-7 text-on-brand sm:p-9">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] opacity-70">
                  Notfall und Türöffnung
                </p>
                <a
                  href={telHref}
                  data-cta="call"
                  className="head-zahl mt-4 block text-[1.9rem] hover:underline sm:text-[2.3rem]"
                >
                  {site.contact.phoneDisplay}
                </a>
                <p className="mt-3 text-[0.95rem] opacity-80">
                  {site.erreichbarkeit}. Sie erfahren den Preis, bevor wir
                  losfahren.
                </p>
              </div>

              <div className="prose-lippe mt-10">
                <H3>Was uns der erste Satz erleichtert</H3>
                <p className="mt-3">
                  Sagen Sie uns möglichst gleich, wo Sie sind und was genau los
                  ist: ob die Tür nur zugefallen oder abgeschlossen ist, ob der
                  Schlüssel innen steckt oder abgebrochen ist. Damit weiß der
                  Monteur schon vor der Abfahrt, welches Werkzeug er braucht.
                </p>
                <p>
                  Wenn ein Kind, ein Tier oder eine hilfebedürftige Person
                  hinter der Tür ist oder der Herd läuft, sagen Sie das bitte
                  sofort. Solche Einsätze ziehen wir vor. Bei akuter Gefahr für
                  Leib und Leben rufen Sie bitte zuerst die 112, die Feuerwehr
                  öffnet in Notlagen ebenfalls Türen.
                </p>
              </div>
            </div>

            <div>
              <ul className="grid gap-px overflow-hidden rounded-panel border border-line bg-line">
                <Zeile icon={<Phone weight="fill" />} titel="Telefon">
                  <a
                    href={telHref}
                    data-cta="call"
                    className="tnum font-semibold text-brand hover:underline"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                </Zeile>
                <Zeile icon={<EnvelopeSimple />} titel="E-Mail">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-brand hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </Zeile>
                <Zeile icon={<MapPin />} titel="Anschrift">
                  {site.brand.legalName}
                  <br />
                  {site.contact.street}
                  <br />
                  {site.contact.zip} {site.contact.city}
                </Zeile>
                <Zeile icon={<Clock />} titel="Erreichbarkeit">
                  {site.erreichbarkeit}
                </Zeile>
                <Zeile
                  icon={<IdentificationCard />}
                  titel="Handwerksrolle"
                >
                  <span className="tnum">{site.legal.handwerksrolle}</span>
                </Zeile>
              </ul>

              <div className="mt-6 rounded-panel border border-line bg-surface p-6">
                <H3 className="text-[1rem]">
                  Einbruchschutz oder Schließanlage?
                </H3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                  Das sind die Termine, die man in Ruhe macht. Rufen Sie
                  tagsüber an, dann schauen wir uns das vor Ort an. Die Beratung
                  kostet nichts.
                </p>
                <CallButton className="mt-5 w-full" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", url: "/" },
          { name: "Kontakt", url: "/kontakt" },
        ])}
      />
    </>
  );
}

function Zeile({
  icon,
  titel,
  children,
}: {
  icon: React.ReactNode;
  titel: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 bg-surface p-5">
      <span className="mt-0.5 shrink-0 text-brand [&>svg]:size-5">{icon}</span>
      <span>
        <span className="block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink-mute">
          {titel}
        </span>
        <span className="mt-1 block text-[0.95rem] leading-relaxed">
          {children}
        </span>
      </span>
    </li>
  );
}
