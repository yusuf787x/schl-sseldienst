# Bilder

## Was aktuell drin ist

Sieben Fotos von [Pexels](https://www.pexels.com), lokal unter `public/img/`.
Die Pexels-Lizenz erlaubt kommerzielle Nutzung ohne Namensnennung; Fotograf und
Quelle stehen trotzdem in `public/img/BILDNACHWEIS.json`.

| Datei | Wo | Motiv |
|---|---|---|
| `werkstatt-schluessel.jpg` | Startseite, Abschnitt Vertrauen | Hände an einer Schlüsselfräsmaschine |
| `tueroeffnung.jpg` | Leistung Türöffnung, Startseite | Schlüsselbund steckt außen im Schloss |
| `notdienst-nacht.jpg` | Leistung Schlüsselnotdienst | Wohnstraße bei Nacht |
| `schliesszylinder.jpg` | Leistung Schloss und Zylinder | Schließzylinder in einer Haustür |
| `einbruchschutz.jpg` | Leistung Einbruchschutz | Mehrfachverriegelung im Türblatt |
| `tuer-reparatur.jpg` | Leistung Einbruchschaden | Türband wird verschraubt |
| `schliessanlage.jpg` | Leistung Schließanlagen | Schlüsselschrank |

Die Auswahl ist farblich auf die Palette abgestimmt: alle sieben im warmen bis
neutralen Bereich (Farbton 14 bis 42, Sättigung unter 30). Deshalb wirken sie
als Satz. Wer ein Bild tauscht, sollte in diesem Rahmen bleiben, sonst fällt
das neue sofort heraus.

---

## Was sie ersetzen sollte

Stockfotos sind eine Überbrückung, kein Ziel. Auf einer Handwerkerseite schlägt
jedes echte Foto das beste Stockbild, weil es beweist, dass es den Betrieb
wirklich gibt. Und genau diesen Beweis sucht jemand, der Angst vor Abzocke hat.

### Priorität 1: Einsatzfahrzeug

Quer, mindestens 1200 × 800 px. Der Transporter mit Logo und Telefonnummer, vor
einem Haus in Lage, bei Tageslicht. Kein Studiohintergrund, kein Freisteller.
Es soll aussehen wie ein Arbeitstag.

Ziel: ersetzt `werkstatt-schluessel.jpg` im Abschnitt „Woran Sie erkennen, dass
wir echt sind" auf der Startseite. Das ist der stärkste Trust-Baustein, den
diese Seite haben kann.

### Priorität 2: Person

Porträt des Inhabers, hochkant, mindestens 800 × 1000 px. Am Fahrzeug oder in
der Werkstatt, Arbeitskleidung, direkter Blick. Sinnvoll für eine spätere Seite
„Über uns" und fürs Google-Unternehmensprofil. Ein Gesicht auf der Seite wirkt
stärker als jede Vertrauensformulierung.

### Priorität 3: eigene Einsatzbilder

Je ein Bild zu den sechs Leistungen, aufgenommen bei echten Aufträgen. Am
wertvollsten sind die, die man nicht kaufen kann:

- eine tatsächlich aufgehebelte Tür kurz vor der Notsicherung
- ein ausgebauter defekter Zylinder neben dem neuen
- eine fertig montierte Schließanlage mit beschrifteten Schlüsseln
- der Schutzbeschlag vor und nach der Nachrüstung

Bei Kundenobjekten vorher schriftlich zustimmen lassen und keine Hausnummern
oder Kennzeichen zeigen.

---

## Technische Hinweise

- **Format:** Originale als JPG in voller Auflösung liefern. Umwandlung nach
  WebP und AVIF sowie alle Größenvarianten macht `next/image` automatisch.
- **Keine Bilder mit eingebranntem Text.** Text gehört in HTML, sonst ist er für
  Google unsichtbar und auf dem Handy unlesbar.
- **Alt-Texte** beschreiben das Motiv, nicht das Keyword. „Monteur öffnet eine
  zugefallene Haustür" ist richtig, „Schlüsseldienst Lage Türöffnung günstig"
  ist Spam und schadet.
- **Hotlinks vermeiden.** Bilder gehören nach `public/img/`. Ein von außen
  eingebundenes Bild überträgt die IP jedes Besuchers an den fremden Server und
  macht die Datenschutzerklärung falsch.

## Ein Bild austauschen

1. Datei nach `public/img/` legen
2. bei Leistungen: Eintrag `bild: { datei, alt }` in
   [`src/content/leistungen.ts`](src/content/leistungen.ts) anpassen
3. beim Vertrauensbild: Pfad in
   [`src/components/blocks.tsx`](src/components/blocks.tsx), Funktion
   `Vertrauen`, ändern
4. den alten Eintrag aus `public/img/BILDNACHWEIS.json` entfernen

Für noch fehlende Motive gibt es die Komponente `BildPlatz` aus
[`src/components/ui.tsx`](src/components/ui.tsx): ein sichtbar beschrifteter
Platzhalter im richtigen Seitenverhältnis. Besser ein markierter Platzhalter als
ein beliebiges Symbolbild.
