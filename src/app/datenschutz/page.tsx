import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container, Section } from "@/components/ui";
import { Brotkrumen } from "@/components/Brotkrumen";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

/**
 * Selbst verfasste Datenschutzerklärung für genau diesen Stand der Seite.
 *
 * Tatsächlich eingesetzt wird: Vercel als Hoster, selbst gehostete
 * Schriften. Sonst nichts. Kein Analytics, keine Karten, keine Social
 * Plugins, keine Cookies, kein Kontaktformular. Genau das steht hier
 * auch drin, statt einer Generator-Erklärung mit zwölf Diensten, von
 * denen keiner eingebunden ist.
 *
 * ⚠️ Sobald ein Dienst dazukommt (Kontaktformular, Google Maps,
 * Analytics, Bewertungs-Widget), MUSS dieser Text ergänzt werden.
 */
export default function Datenschutz() {
  return (
    <Section>
      <Container>
        <Brotkrumen
          pfad={[
            { name: "Start", url: "/" },
            { name: "Datenschutz", url: "/datenschutz" },
          ]}
        />

        <div className="mt-6 max-w-[72ch]">
          <h1 className="head text-[1.8rem] sm:text-[2.2rem]">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-[0.95rem] text-ink-mute">
            Stand: September 2026
          </p>

          <div className="prose-lippe mt-10">
            <Block titel="1. Verantwortlicher">
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website im
                Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <p>
                {site.brand.legalName}
                <br />
                {site.contact.street}
                <br />
                {site.contact.zip} {site.contact.city}
                <br />
                Telefon: <span className="tnum">{site.contact.phoneDisplay}</span>
                <br />
                E-Mail: {site.contact.email}
              </p>
              <p>
                Ein Datenschutzbeauftragter ist gesetzlich nicht vorgeschrieben
                und wurde nicht bestellt.
              </p>
            </Block>

            <Block titel="2. Grundsätzliches">
              <p>
                Diese Website ist bewusst datensparsam aufgebaut. Sie setzt{" "}
                <strong>keine Cookies</strong>, bindet{" "}
                <strong>keine Analyse- oder Trackingdienste</strong> ein,
                enthält <strong>keine Social-Media-Plugins</strong>, keine
                Kartendienste, keine Werbenetzwerke und kein Kontaktformular.
                Es findet keine Profilbildung und keine automatisierte
                Entscheidungsfindung statt.
              </p>
              <p>
                Aus diesem Grund erscheint auf dieser Seite auch kein
                Cookie-Banner. Ein solcher wäre nur erforderlich, wenn
                einwilligungspflichtige Technologien eingesetzt würden, was hier
                nicht der Fall ist.
              </p>
            </Block>

            <Block titel="3. Hosting und Server-Logfiles">
              <p>
                Diese Website wird bei der Vercel Inc., 440 N Barranca Ave
                #4133, Covina, CA 91723, USA, sowie deren europäischen
                Tochtergesellschaften gehostet. Vercel verarbeitet
                personenbezogene Daten ausschließlich in unserem Auftrag. Mit
                dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach
                Art. 28 DSGVO.
              </p>
              <p>
                Beim Aufruf dieser Website erhebt der Hosting-Anbieter
                automatisch Informationen, die Ihr Browser übermittelt, und
                speichert sie in sogenannten Server-Logfiles. Das sind:
              </p>
              <p>
                IP-Adresse des anfragenden Geräts, Datum und Uhrzeit der
                Anfrage, Name und URL der abgerufenen Datei, übertragene
                Datenmenge, Meldung über den erfolgreichen Abruf, verwendeter
                Browsertyp und dessen Version, Betriebssystem, die zuvor
                besuchte Seite (Referrer) sowie der anfragende Provider.
              </p>
              <p>
                <strong>Zweck:</strong> Sicherstellung eines störungsfreien
                Verbindungsaufbaus, komfortabler Nutzung, Auswertung der
                Systemsicherheit und Stabilität sowie Abwehr von Angriffen.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.
                Unser berechtigtes Interesse besteht am technisch fehlerfreien
                und sicheren Betrieb dieser Website.
              </p>
              <p>
                <strong>Speicherdauer:</strong> Die Logdaten werden für die
                Dauer von maximal 30 Tagen gespeichert und anschließend
                gelöscht, sofern sie nicht zur Aufklärung eines konkreten
                Sicherheitsvorfalls benötigt werden.
              </p>
              <p>
                <strong>Drittlandübermittlung:</strong> Es kann nicht
                ausgeschlossen werden, dass dabei Daten in die USA übermittelt
                werden. Vercel Inc. ist unter dem EU-US Data Privacy Framework
                zertifiziert, sodass ein Angemessenheitsbeschluss der
                Europäischen Kommission nach Art. 45 DSGVO als Grundlage
                herangezogen werden kann. Ergänzend bestehen
                Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c DSGVO.
              </p>
            </Block>

            <Block titel="4. Schriftarten">
              <p>
                Die auf dieser Website verwendete Schriftart wird{" "}
                <strong>ausschließlich lokal vom eigenen Server
                ausgeliefert</strong>. Es besteht keine Verbindung zu Google
                Fonts oder einem anderen externen Schriftanbieter. Beim Aufruf
                der Seite wird daher keine IP-Adresse an Dritte übermittelt.
              </p>
            </Block>

            <Block titel="5. Kontaktaufnahme">
              <p>
                Wenn Sie uns <strong>telefonisch</strong> kontaktieren, werden
                die von Ihnen mitgeteilten Daten (insbesondere Name, Anschrift
                des Einsatzortes, Rufnummer und Angaben zum Anliegen)
                verarbeitet, um Ihre Anfrage zu bearbeiten und den Auftrag
                durchzuführen. Eine automatische Aufzeichnung von
                Telefongesprächen findet nicht statt.
              </p>
              <p>
                Wenn Sie uns eine <strong>E-Mail</strong> schreiben, werden Ihre
                Angaben einschließlich der Kontaktdaten zur Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen gespeichert.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO,
                soweit die Anfrage auf den Abschluss oder die Durchführung eines
                Vertrages gerichtet ist. Im Übrigen Art. 6 Abs. 1 lit. f DSGVO
                aufgrund unseres berechtigten Interesses an der Beantwortung von
                Anfragen.
              </p>
              <p>
                <strong>Speicherdauer:</strong> Wir löschen diese Daten, sobald
                sie für den Zweck der Erhebung nicht mehr erforderlich sind. Bei
                erteilten Aufträgen gelten die gesetzlichen Aufbewahrungsfristen
                nach Handels- und Steuerrecht von bis zu zehn Jahren.
              </p>
            </Block>

            <Block titel="6. Verschlüsselung">
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine
                SSL/TLS-Verschlüsselung. Sie erkennen eine verschlüsselte
                Verbindung an der Zeichenfolge „https://“ in der Adresszeile
                Ihres Browsers und am Schlosssymbol. Dadurch können die Daten,
                die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </Block>

            <Block titel="7. Ihre Rechte">
              <p>Ihnen stehen gegenüber uns folgende Rechte zu:</p>
              <p>
                <strong>Auskunft</strong> (Art. 15 DSGVO) über die von uns
                verarbeiteten personenbezogenen Daten.{" "}
                <strong>Berichtigung</strong> (Art. 16 DSGVO) unrichtiger oder
                unvollständiger Daten. <strong>Löschung</strong> (Art. 17
                DSGVO), soweit keine gesetzliche Aufbewahrungspflicht
                entgegensteht. <strong>Einschränkung der Verarbeitung</strong>{" "}
                (Art. 18 DSGVO). <strong>Datenübertragbarkeit</strong> (Art. 20
                DSGVO). <strong>Widerruf einer Einwilligung</strong> (Art. 7
                Abs. 3 DSGVO) mit Wirkung für die Zukunft.
              </p>
              <p>
                <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben
                das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                ergeben, jederzeit gegen die Verarbeitung Sie betreffender
                personenbezogener Daten Widerspruch einzulegen, die auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt.
              </p>
              <p>
                Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an die
                oben genannten Kontaktdaten.
              </p>
            </Block>

            <Block titel="8. Beschwerderecht bei der Aufsichtsbehörde">
              <p>
                Sie haben das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO).
                Die für uns zuständige Behörde ist:
              </p>
              <p>
                Landesbeauftragte für Datenschutz und Informationsfreiheit
                Nordrhein-Westfalen
                <br />
                Kavalleriestraße 2 bis 4
                <br />
                40213 Düsseldorf
                <br />
                www.ldi.nrw.de
              </p>
            </Block>

            <Block titel="9. Änderungen dieser Erklärung">
              <p>
                Wir passen diese Datenschutzerklärung an, sobald Änderungen an
                der Website dies erforderlich machen, etwa bei der Einbindung
                neuer Dienste. Für Ihren erneuten Besuch gilt die dann aktuelle
                Fassung.
              </p>
            </Block>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Block({
  titel,
  children,
}: {
  titel: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-9 first:mt-0">
      <h2 className="text-[1.15rem] font-semibold tracking-tight text-ink">
        {titel}
      </h2>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}
