# Keyword- & Content-Architektur — Schlüsseldienst Lage (Kreis Lippe)

Stand: 30.09.2026 · Methode: SERP-Sichtung + Intent-Clustering (seo-cluster)

---

## 1. Wettbewerbslage — die entscheidende Erkenntnis

Die Suche nach „Schlüsseldienst Lage Lippe" liefert auf Seite 1 **fast ausschließlich
überregionale Lead-Portale**, keine echten lokalen Betriebe:

| Anbieter | Lockpreis | Typ |
|---|---|---|
| schluesseldienst-365.de | „ab 18 €" | bundesweites Portal |
| schluesseldienst-247.org | „ab 19,-€" | bundesweites Portal |
| schluesseldienst-lage-lippe.de (QvG) | „ab 29 €" | Portal mit Ortsdomain |
| 123-schluesseldienst.de | „ab 35 €" | bundesweites Portal |
| schluesseldienst-karl.de | 55 € | bundesweites Portal |
| schluesseldienst-bielefeld.de | — | Nachbarstadt, rankt auf Lage mit |

**Konsequenz für die Positionierung:** Der Preiskampf nach unten ist nicht gewinnbar
und wäre auch nicht glaubwürdig. Gewinnbar ist das Gegenteil — **Echtheit**:
Festnetznummer mit Ortsvorwahl 05232, ladungsfähige Adresse in Lage, Handwerksrolle,
Meisterbetrieb, nachvollziehbarer Festpreis in realistischer Höhe.

**Referenzwerte aus der Verbraucherpresse** (als Argumentationsgrundlage auf der Seite):
- Bundesverband Metall: über **127 €** für eine einfache Türöffnung ist zu teuer
- Bundesverband Sicherheitstechnik: rund **100 €** sind angemessen
- Bundesdurchschnitt tatsächlich abgerechnet: **137 €**
- Übliche Nacht-/Wochenendzuschläge am Markt: **+50 % bis +150 %**

→ Die Preisstrategie der Seite (89 € tagsüber / 129 € nachts & Wochenende, Anfahrt
inklusive) liegt damit **unter** dem Bundesdurchschnitt und **innerhalb** dessen, was
Verbraucherschützer als seriös bezeichnen. Das ist argumentierbar — „ab 19 €" ist es nicht.

> ⚠️ **Preise sind Platzhalter.** Vom Betreiber vor Livegang zu bestätigen.
> Sie stehen an genau einer Stelle im Code: `src/lib/site.ts` → `preise`.

---

## 2. Keyword-Cluster

### Pillar (Startseite) — `/`
**Primär:** `schlüsseldienst lage` · `schlüsseldienst lage lippe`
**Sekundär:** `schlüsselnotdienst lage` · `türöffnung lage` · `schlüsseldienst 32791`
· `schlüsseldienst in meiner nähe lage`

---

### Cluster A — Notfall & Türöffnung (höchste Kaufabsicht)

| URL | Primär-Keyword | Sekundär |
|---|---|---|
| `/leistungen/tueroeffnung` | türöffnung lage | ausgesperrt lage, tür zugefallen, tür aufmachen lassen, zugefallene tür öffnen |
| `/leistungen/schluesselnotdienst` | schlüsselnotdienst lage | 24h schlüsseldienst lage, schlüsseldienst nachts, notdienst wochenende, schlüsseldienst sonntag |
| `/leistungen/schloss-zylinder-wechseln` | schließzylinder wechseln lage | schloss austauschen, schlüssel verloren schloss wechseln, zylinder tauschen kosten |

### Cluster B — Sicherheit & Prävention (planbare Aufträge, höhere Marge)

| URL | Primär-Keyword | Sekundär |
|---|---|---|
| `/leistungen/einbruchschutz` | einbruchschutz lage | türsicherung nachrüsten, rc2 beschlag, einbruchschutz beratung lippe, fenster sichern |
| `/leistungen/einbruchschaden` | einbruchschaden reparieren lage | tür nach einbruch sichern, notverschluss, aufgehebelte tür reparieren |
| `/leistungen/schliessanlagen` | schließanlage lage | schließanlage mehrfamilienhaus, hausverwaltung schließanlage, generalschlüssel, gewerbe schließsystem |

### Cluster C — Ratgeber (Informational, Traffic + GEO/AI-Zitierbarkeit)

| URL | Primär-Keyword | Warum |
|---|---|---|
| `/ratgeber/schluesseldienst-kosten` | schlüsseldienst kosten | hohes Volumen, direkter Bezug zum Festpreis-USP |
| `/ratgeber/ausgesperrt-was-tun` | ausgesperrt was tun | Notfall-Intent, fängt Suchende vor dem Anruf ab |
| `/ratgeber/unserioesen-schluesseldienst-erkennen` | schlüsseldienst abzocke | direkte Attacke auf die Portal-Konkurrenz |
| `/ratgeber/schluessel-verloren` | schlüssel verloren was tun | + „wer zahlt", Mietrecht, Versicherung |
| `/ratgeber/einbruchschutz-haustuer` | haustür sichern | Einstieg in Cluster B |

### Cluster D — Standorte (18 Seiten, lokale Long-Tails)

Muster: `schlüsseldienst {ort}` · `türöffnung {ort}` · `schlüsselnotdienst {ort}`

**Ortsteile Lage (10):** Hörste · Heiden · Müssen · Kachtenhausen · Waddenhausen ·
Pottenhausen · Hardissen · Billinghausen · Ehrentrup · Ohrsen

**Nachbarn im Kreis Lippe (8):** Detmold · Lemgo · Bad Salzuflen · Oerlinghausen ·
Leopoldshöhe · Augustdorf · Horn-Bad Meinberg · Schlangen

> Bielefeld bewusst ausgeschlossen (Wunsch des Betreibers; zudem eigener,
> stark umkämpfter Markt außerhalb des Kreises Lippe).

**Qualitätsregel gegen Doorway-Pages:** jede Ortsseite hat einen individuell
geschriebenen Einleitungs- und Ortsbezugstext (Ortsbild, Bausubstanz, typische
Türsituation, Anfahrtsbezug). Kein reines Platzhalter-Ersetzen.

---

## 3. Interne Verlinkung

- Jede Ortsseite → Startseite (Marke) + 3 Leistungsseiten + 2 Nachbarorte
- Jede Leistungsseite → Startseite + 2 Schwester-Leistungen + 1 passender Ratgeber
- Jeder Ratgeber → 2 Leistungsseiten (Anchor = Ziel-Keyword)
- Footer: vollständige Ortsliste = Keyword-Sektion nahe Footer (Anforderung erfüllt)
- Keine Orphan-Pages; jede Seite in max. 2 Klicks von `/` erreichbar

---

## 4. GEO / AI-Search-Optimierung

Damit die Seite in AI Overviews, ChatGPT-Suche und Perplexity zitiert wird:

- **Direkte Antwortsätze** in den ersten 2 Sätzen jeder H2 (passage-level citability)
- **FAQ-Blöcke** mit `FAQPage`-Schema auf Start-, Leistungs- und allen Ortsseiten
- **Konkrete, prüfbare Fakten** statt Marketingfloskeln: Preis in Euro, Vorwahl,
  Straße, Handwerksrollennummer, Öffnungszeiten
- **`LocalBusiness` / `Locksmith`-Schema** mit `areaServed` über alle 18 Orte,
  `geo`-Koordinaten, `openingHoursSpecification` 24/7, `priceRange`
- **`llms.txt`** im Root mit Kurzprofil, Leistungen, Einsatzgebiet, Preisen
- Keine erfundenen Statistiken, keine Fake-Bewertungen — beides ist für AI-Systeme
  und für Google ein Vertrauens-Killer und rechtlich angreifbar (UWG)

---

## 5. Bewusst NICHT umgesetzt

| Element der Hamburg-Referenz | Warum weggelassen |
|---|---|
| „5,0 bei 2188 Bewertungen" | Der Betrieb ist neu. Erfundene Bewertungen = Abmahnrisiko nach UWG und Vertrauensbruch. Statt dessen: Handwerksrolle, Meisterbetrieb, Ortsansässigkeit als Trust-Signale. |
| „Seit vielen Jahren" / „alteingesessen" | Nachweislich falsch bei einem neuen Betrieb. |
| Herstellerlogos (ABUS, BKS, DOM …) | Erst nach geklärter Nutzungserlaubnis einsetzbar. Platz ist vorgesehen. |
| Konkrete Einbruchstatistik Kreis Lippe | Keine belastbare öffentliche Quelle gefunden — daher keine Zahl statt einer erfundenen. |
