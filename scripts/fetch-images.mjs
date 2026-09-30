/**
 * Lädt die Bilder von Pexels herunter und legt sie lokal unter public/img ab.
 *
 * Bewusst lokal statt per Hotlink: Ein eingebundenes Bild von pexels.com
 * würde bei jedem Seitenaufruf die IP des Besuchers an einen Dritten
 * übertragen. Dann wäre der Satz „keine externen Dienste" in der
 * Datenschutzerklärung falsch und die Seite bräuchte einen Hinweis.
 *
 * Aufruf:  PEXELS_API_KEY=... node scripts/fetch-images.mjs
 */
import fs from "node:fs";
import path from "node:path";

const KEY = process.env.PEXELS_API_KEY;
if (!KEY) {
  console.error("PEXELS_API_KEY fehlt.");
  process.exit(1);
}

/** id = Pexels-Foto-ID, datei = Zielname ohne Endung */
const BILDER = [
  { id: 35287856, datei: "werkstatt-schluessel", zweck: "Startseite, Abschnitt Vertrauen" },
  { id: 12496893, datei: "tueroeffnung", zweck: "Leistung Türöffnung" },
  { id: 12689692, datei: "notdienst-nacht", zweck: "Leistung Schlüsselnotdienst" },
  { id: 13963754, datei: "schliesszylinder", zweck: "Leistung Schloss und Zylinder" },
  { id: 279810, datei: "einbruchschutz", zweck: "Leistung Einbruchschutz" },
  { id: 5691502, datei: "tuer-reparatur", zweck: "Leistung Einbruchschaden" },
  { id: 29372699, datei: "schliessanlage", zweck: "Leistung Schließanlagen" },
];

const ZIEL = path.join(process.cwd(), "public", "img");
fs.mkdirSync(ZIEL, { recursive: true });

const nachweis = [];

for (const b of BILDER) {
  const r = await fetch(`https://api.pexels.com/v1/photos/${b.id}`, {
    headers: { Authorization: KEY },
  });
  if (!r.ok) {
    console.error(`Foto ${b.id}: HTTP ${r.status}`);
    continue;
  }
  const foto = await r.json();

  // large2x ist rund 1880 px breit. Mehr braucht die Seite nicht,
  // next/image rechnet daraus alle kleineren Größen.
  const url = foto.src.large2x ?? foto.src.large ?? foto.src.original;
  const bin = Buffer.from(await (await fetch(url)).arrayBuffer());
  const ziel = path.join(ZIEL, `${b.datei}.jpg`);
  fs.writeFileSync(ziel, bin);

  nachweis.push({
    datei: `${b.datei}.jpg`,
    zweck: b.zweck,
    pexelsId: b.id,
    fotograf: foto.photographer,
    fotografUrl: foto.photographer_url,
    seite: foto.url,
    alt: foto.alt,
    durchschnittsfarbe: foto.avg_color,
    kb: Math.round(bin.length / 1024),
  });
  console.log(`${b.datei}.jpg  ${Math.round(bin.length / 1024)} KB  von ${foto.photographer}`);
}

fs.writeFileSync(
  path.join(process.cwd(), "public", "img", "BILDNACHWEIS.json"),
  JSON.stringify(nachweis, null, 2) + "\n",
);
console.log(`\n${nachweis.length} Bilder geladen, Nachweis in public/img/BILDNACHWEIS.json`);
