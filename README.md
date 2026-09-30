# Schlüsseldienst Lage

Website für einen neuen Schlüsseldienst in Lage (Kreis Lippe, NRW).
Next.js 15 (App Router), Tailwind v4, vollständig statisch, für Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

---

## Vor dem Livegang: die sieben offenen Punkte

Alle Platzhalter hängen an **einer** Datei: [`src/content/site.ts`](src/content/site.ts).
Wer dort etwas ändert, ändert es auf allen 43 Seiten inklusive Metadaten, Schema
und `llms.txt`.

| # | Was | Wo |
|---|---|---|
| 1 | **Firmenname** steht noch nicht fest | `site.brand.name` |
| 2 | **Domain** eintragen (steuert Canonicals, Sitemap, Schema) | `site.url` |
| 3 | **E-Mail** ist Platzhalter, hängt am Domainnamen | `site.contact.email` |
| 4 | **Telefonnummer** prüfen: eigener Anschluss oder der des Motorenfachmanns? | `site.contact.phone*` |
| 5 | **Preise bestätigen** (89 € / 129 €) | `site.preise` |
| 6 | **Eigene Fotos** statt der Stockbilder liefern | [BILDBEDARF.md](BILDBEDARF.md) |
| 7 | **Logo final** klären, dann Pfad in `Logo.tsx` ersetzen | siehe unten |
| 8 | **Akira-Lizenz** kaufen, falls die Schrift wirklich sein soll | siehe unten |

---

## Aufbau

```
src/
  content/          ← hier steht der gesamte Text. Keine Texte in Komponenten.
    site.ts         ← Marke, Kontakt, Preise. Einzige Quelle der Wahrheit.
    leistungen.ts   ← 6 Leistungsseiten
    ratgeber.ts     ←  5 Ratgeberbeiträge
    orte.ts         ← 18 Standortseiten, jeder mit eigenem Text
  components/       ← Layout, Blöcke, Logo
  lib/schema.tsx    ← JSON-LD (LocalBusiness, FAQPage, Service, Breadcrumb)
  app/              ← Routen
  fonts/            ← Archivo, selbst gehostet (35 KB)
```

**Eine neue Stadt aufnehmen:** Eintrag in `src/content/orte.ts` ergänzen.
Seite, Sitemap, Footer-Liste, `areaServed` im Schema und `llms.txt` entstehen
automatisch. Wichtig ist nur, dass `intro` und `lokal` wirklich neu geschrieben
werden und nicht kopiert. Sonst wird daraus eine Doorway Page und Google wirft
alle 18 Seiten aus dem Index.

---

## Was bewusst so entschieden wurde

**Keine Bewertungssterne, kein „seit vielen Jahren".**
Der Betrieb ist neu. Erfundene Bewertungen sind nach UWG abmahnbar und für Google
ein Verstoß gegen die Richtlinien für strukturierte Daten. Statt dessen tragen
Handwerksrollennummer, Ortsvorwahl und ladungsfähige Adresse das Vertrauen.
Sobald echte Google-Bewertungen da sind, kommt `aggregateRating` ins Schema.

**Preise nach oben statt nach unten.**
Die Konkurrenz in Lage besteht fast nur aus bundesweiten Portalen, die mit 19 bis
35 € werben. Dieser Preiskampf ist nicht gewinnbar und wäre auch nicht glaubwürdig.
Die Seite argumentiert stattdessen gegen die Lockpreise und ordnet den eigenen
Preis an den Richtwerten der Branchenverbände ein. Details im
[SEO-KEYWORD-PLAN.md](SEO-KEYWORD-PLAN.md).

**Kein Kontaktformular.**
Der Notfallkunde ruft an, er tippt nicht. Ein Formular bräuchte einen
Mailversanddienst, der wiederum in die Datenschutzerklärung müsste. Für
Einbruchschutz- und Schließanlagenanfragen kann eines nachgerüstet werden,
dann muss aber `src/app/datenschutz/page.tsx` ergänzt werden.

**Keine Cookies, kein Banner, keine externen Dienste.**
Eingebunden ist ausschließlich Vercel als Hoster. Schriften liegen lokal. Daher
ist kein Consent-Banner nötig und die Datenschutzerklärung beschreibt genau das,
was tatsächlich passiert, statt zwölf Dienste aufzuzählen, die nicht da sind.

> ⚠️ Sobald Analytics, Google Maps, ein Bewertungs-Widget oder ein Formular
> dazukommt, **muss** die Datenschutzerklärung ergänzt werden, und bei Analytics
> und Maps kommt ein Consent-Banner dazu.

**Bewegung ja, Animationsbibliothek nein.**
Die Seite soll lebendig wirken, ohne auf dem Handy langsam zu werden. Deshalb
kein GSAP und kein Motion-Bundle, sondern gut 1 KB eigener Code:

- `components/ScrollEffekte.tsx` blendet alles mit `data-reveal` beim
  Hineinscrollen ein und bewegt Elemente mit `data-parallax` leicht mit.
  Helfer für Komponenten: `reveal(verzoegerung, art)` aus `ui.tsx`.
- `components/deko.tsx` enthält die Gestaltungselemente: `Welle`
  (geschichtete Übergänge statt harter Abschnittskanten), `Figur`
  (Freisteller, die über Abschnittsgrenzen ragen) und das `Siegel`.
- Der Hero animiert rein per CSS. Die Telefonnummer wartet nie auf JavaScript.
- Ohne JavaScript oder bei „Bewegung reduzieren" im System ist alles sofort
  sichtbar und nichts bewegt sich.

Das Notfallband (`NotfallBand` in `blocks.tsx`) ist ein Bild, an dem die Seite
vorbeiscrollt. Es nimmt die Farben der Nachbarabschnitte über `oben`/`unten`
entgegen, damit die Wellen passen.

---

## Logo

Die Bildmarke steckt als Vektorpfad in
[`src/components/Logo.tsx`](src/components/Logo.tsx). Der Pfad ist keine freie
Nachzeichnung, sondern eine Kontur-Spur des gelieferten `public/logo.png`.

Gründe gegen das PNG: eingebrannter Cremehintergrund (im dunklen Footer stünde ein
heller Kasten drumherum), 1,2 MB Dateigröße, keine Farbumschaltung möglich. Der
Pfad wiegt rund 550 Byte, ist auf jedem Display scharf und läuft über
`currentColor` mit der Textfarbe mit.

Wird das Logo final überarbeitet: neues SVG besorgen und die Konstante
`MARK_PATH` ersetzen. Favicon (`src/app/icon.svg`) nicht vergessen.

`public/logo-v1-archiv.png` ist die erste Fassung mit dem Schreibfehler im Claim
(„DRAUBE" statt „DRAUF"). Kann gelöscht werden.

---

## Farben und Schrift

Alle Farbwerte stammen aus dem Logo und stehen in
[`src/app/globals.css`](src/app/globals.css).

| Token | Hell | Dunkel |
|---|---|---|
| `bg` | `#FAF7F0` | `#101917` |
| `brand` | `#255A58` | `#63AFA8` |
| `ink` | `#16211F` | `#F2EFE7` |

Der Dunkelmodus folgt der Systemeinstellung. Wichtig beim Bearbeiten: Die
Dunkelwerte werden über `:root` in einer Media Query gesetzt, **nicht** über
einen zweiten `@theme`-Block. Tailwind v4 zieht `@theme` aus Media Queries
heraus, dann gewinnen die Dunkelwerte immer und die Seite ist nie hell.

**Überschriften: Archivo, gefahren auf Expanded Black** (Breite 112 %,
Gewicht 800). **Fließtext: Figtree.** Beide als Variable Font lokal unter
`src/fonts/`, zusammen 110 KB. Keine Verbindung zu Google Fonts, weder beim
Build noch zur Laufzeit.

### Warum nicht Akira Expanded

Gewünscht war [Akira Expanded](https://www.dafont.com/akira-expanded.font).
Die Schrift ist dort ausdrücklich **„Free for personal use"** lizenziert und
damit für eine gewerbliche Website nicht nutzbar. Schriftlizenzverstöße werden
in Deutschland regelmäßig abgemahnt, und der Rechteinhaber wäre der Betreiber
der Seite, nicht der Ersteller.

Archivo hat eine Breitenachse bis 125 % bei Gewicht bis 900 und trifft den
Charakter von Akira sehr nah, steht aber unter der SIL Open Font License und
ist damit auch kommerziell frei.

**Sobald eine Akira-Lizenz vorliegt**, ist der Tausch ein Dreizeiler und
betrifft nur zwei Dateien. Keine Komponente kennt den Schriftnamen:

1. Akira-Datei nach `src/fonts/` legen
2. in [`src/app/layout.tsx`](src/app/layout.tsx) den `head`-localFont darauf
   zeigen lassen und die Zeile `declarations: [{ prop: "font-stretch" … }]`
   entfernen
3. in [`src/app/globals.css`](src/app/globals.css) in der Regel `.head`
   `font-stretch` und `font-weight` löschen, Akira hat weder Breiten- noch
   Gewichtsachse

Die Schriftgrade sind auf die breite Schrift abgestimmt. Nach dem Tausch bitte
einmal prüfen, ob die Überschriften noch maximal zweizeilig umbrechen.

## Bilder

Sieben Fotos von [Pexels](https://www.pexels.com), **lokal** unter
`public/img/` abgelegt und über `next/image` eingebunden. Bewusst nicht per
Hotlink: Ein eingebundenes Bild von pexels.com würde bei jedem Seitenaufruf die
IP des Besuchers an einen Dritten übertragen und die Aussage „keine externen
Dienste" in der Datenschutzerklärung falsch machen.

Die Pexels-Lizenz erlaubt die kommerzielle Nutzung ohne Namensnennung.
Fotograf, Foto-ID und Quell-URL stehen trotzdem in
`public/img/BILDNACHWEIS.json`.

Die Auswahl ist auf die Palette abgestimmt: Alle sieben Bilder liegen im warmen
bis neutralen Bereich (Farbton 14 bis 42, Sättigung unter 30). Deshalb wirken
sie als Satz und nicht wie zusammengesuchte Stockfotos. Wer Bilder austauscht,
sollte diesen Rahmen einhalten, sonst fällt das neue Bild sofort heraus.

Die beiden Freisteller `figur-schluessel.png` und `figur-akkuschrauber.png`
sind aus `tueroeffnung.jpg` und `tuer-reparatur.jpg` ausgeschnitten, also
dieselbe Lizenz.

Neue Bilder holen: `PEXELS_API_KEY=… node scripts/fetch-images.mjs`
(IDs in [scripts/fetch-images.mjs](scripts/fetch-images.mjs) anpassen).

**Eigene Fotos schlagen jedes Stockfoto.** Was noch fehlt und wo es hingehört,
steht in [BILDBEDARF.md](BILDBEDARF.md).

## SEO-Technik

- 43 statische Seiten, kein Server-Rendering zur Laufzeit
- `sitemap.xml` und `robots.txt` generiert aus den Inhaltsdaten
- `llms.txt` als Route, läuft automatisch mit `site.ts` mit
- JSON-LD: `Locksmith` mit `areaServed` über alle 18 Orte, `FAQPage` auf Start-,
  Leistungs-, Preis- und allen Ortsseiten, `Service`, `Article`, `BreadcrumbList`
- Canonicals auf jeder Seite, Impressum und Datenschutz auf `noindex`
- AI-Crawler sind in `robots.ts` bewusst zugelassen

**Nach dem Deploy:** Domain in der Google Search Console verifizieren, Sitemap
einreichen, Google-Unternehmensprofil anlegen (für einen lokalen Dienstleister
der wichtigste einzelne Ranking-Hebel, wichtiger als die ganze Website) und
NAP-Daten überall identisch halten: exakt derselbe Name, dieselbe Anschrift,
dieselbe Telefonnummer wie im Impressum.

---

## Deploy

Vercel, Framework-Preset Next.js, keine Umgebungsvariablen nötig.
Vor dem ersten Deploy `site.url` auf die echte Domain setzen, sonst zeigen
Canonicals und Sitemap ins Leere.
