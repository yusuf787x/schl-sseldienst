import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";
import { Header, AnrufLeiste } from "@/components/Header";
import { Footer, Einsatzgebiet } from "@/components/Footer";
import { ScrollEffekte } from "@/components/ScrollEffekte";
import { JsonLd, localBusinessSchema } from "@/lib/schema";

/**
 * Schriften, beide selbst gehostet. Keine Verbindung zu Google Fonts,
 * weder beim Build noch zur Laufzeit. Das ist eine Datenschutz-
 * entscheidung: Ein Google-Fonts-Link überträgt die IP jedes Besuchers
 * an einen Dritten und ist ohne Einwilligung angreifbar.
 *
 * ÜBERSCHRIFTEN: Archivo mit Breitenachse, gefahren auf Expanded Black.
 *
 * Gewünscht war Akira Expanded. Die Schrift ist auf dafont ausdrücklich
 * „Free for personal use" lizenziert und damit für eine gewerbliche
 * Website nicht nutzbar. Archivo hat eine Breitenachse bis 125 % bei
 * Gewicht bis 900 und trifft den Charakter sehr nah, ist aber OFL und
 * damit auch kommerziell frei.
 *
 * Wird Akira lizenziert, ist der Tausch ein Dreizeiler:
 * Datei nach src/fonts/ legen, `head` unten darauf zeigen lassen und in
 * globals.css die Regel `.head` anpassen (dort steht, was zu ändern ist).
 */
const head = localFont({
  src: [
    {
      path: "../fonts/archivo-latin-wdth-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  variable: "--font-head",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  preload: true,
});

/** FLIESSTEXT: Figtree. Ruhig und sehr gut lesbar bei kleinen Graden,
 *  normale Laufweite als Gegengewicht zur breiten Überschriftenschrift. */
const body = localFont({
  src: [
    {
      path: "../fonts/figtree-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand.name} | Türöffnung zum Festpreis im Kreis Lippe`,
    template: `%s | ${site.brand.name}`,
  },
  description:
    "Schlüsseldienst aus Lage für den Kreis Lippe. Türöffnung zum Festpreis, Anfahrt inklusive, rund um die Uhr erreichbar. Betrieb mit Adresse vor Ort.",
  applicationName: site.brand.name,
  authors: [{ name: site.brand.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.brand.name,
    title: `${site.brand.name} | Türöffnung zum Festpreis`,
    description:
      "Türöffnung, Schlüsselnotdienst und Einbruchschutz in Lage und im Kreis Lippe. Festpreis, den Sie am Telefon erfahren.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f0" },
    { media: "(prefers-color-scheme: dark)", color: "#101917" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${head.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Schaltet die Einblend-Effekte frei, bevor gezeichnet wird.
            Meldet sich ScrollEffekte nicht binnen drei Sekunden (Script
            blockiert, Netz weg), wird wieder alles sichtbar gemacht. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(d){d.classList.add('js');setTimeout(function(){if(!window.__rv)d.classList.remove('js')},3000)})(document.documentElement)",
          }}
        />
      </head>
      <body className="flex min-h-[100dvh] flex-col antialiased">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-ctl focus:bg-brand focus:px-4 focus:py-2.5 focus:font-semibold focus:text-on-brand"
        >
          Zum Hauptinhalt springen
        </a>

        <Header />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Einsatzgebiet />
        <Footer />

        {/* Platz für die feste Anrufleiste, damit sie nichts verdeckt. */}
        <div aria-hidden="true" className="h-[4.5rem] sm:hidden" />
        <AnrufLeiste />

        <ScrollEffekte />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
