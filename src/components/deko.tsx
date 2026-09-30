import type { ReactNode } from "react";

/* ───────────────────────────────────────────────────────────────
   Gestaltungselemente, die Abschnitte ineinander übergehen lassen:
   geschichtete Wellen statt harter Kanten, Illustrationen, die über
   Abschnittsgrenzen ragen, und das Festpreis-Siegel.
   ─────────────────────────────────────────────────────────────── */

export type Ton = "bg" | "surface" | "sunk" | "brand";

const fuellung: Record<Ton, string> = {
  bg: "fill-bg",
  surface: "fill-surface",
  sunk: "fill-sunk",
  brand: "fill-brand",
};

/** Drei Lagen je Form: hinten transparent, vorne deckend. */
const formen = {
  // Zur Mitte hin abfallend, wie ein flaches Tal.
  tal: [
    "M0 100V0Q720 80 1440 0V106Z",
    "M0 100V14Q720 96 1440 14V106Z",
    "M0 100V30Q720 118 1440 30V106Z",
  ],
  // Asymmetrischer Schwung, läuft nach rechts flach aus.
  schwung: [
    "M0 100V38C260 4 620 64 980 30C1180 10 1330 16 1440 8V106Z",
    "M0 100V58C300 26 680 86 1020 50C1200 32 1340 40 1440 32V106Z",
    "M0 100V78C340 52 740 104 1060 72C1240 56 1370 64 1440 58V106Z",
  ],
} as const;

/**
 * Geschichtete Welle als weicher Übergang zwischen zwei Abschnitten.
 *
 * Sie liegt immer im Abschnitt, den sie überdeckt, und ist in der
 * Farbe des Nachbarn gefüllt: `seite="unten"` wächst vom unteren Rand
 * nach oben (Farbe des folgenden Abschnitts), `seite="oben"` hängt vom
 * oberen Rand herab (Farbe des vorherigen). Das Elternelement braucht
 * `position: relative`. Die Flächen laufen ein paar Pixel über den
 * Rand hinaus, damit an der Kante keine Haarlinie durchblitzt.
 */
export function Welle({
  ton,
  form = "schwung",
  seite = "unten",
  className = "",
}: {
  ton: Ton;
  form?: keyof typeof formen;
  seite?: "oben" | "unten";
  className?: string;
}) {
  const [hinten, mitte, vorne] = formen[form];
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      overflow="visible"
      className={`pointer-events-none absolute inset-x-0 z-[1] h-[clamp(2.75rem,6.5vw,6rem)] w-full ${
        seite === "unten" ? "-bottom-px" : "-top-px -scale-y-100"
      } ${fuellung[ton]} ${className}`}
    >
      <path d={hinten} opacity={0.28} />
      <path d={mitte} opacity={0.55} />
      <path d={vorne} />
    </svg>
  );
}

/**
 * Rundes Festpreis-Siegel mit umlaufendem Schriftzug.
 * Der Ring dreht sich langsam, die Mitte steht still.
 */
export function Siegel({
  id,
  className = "",
}: {
  /** Eindeutige ID für den Textpfad, falls mehrere Siegel auf einer Seite stehen. */
  id: string;
  className?: string;
}) {
  const r = 60;
  const umfang = 2 * Math.PI * r;
  return (
    <div
      className={`grid place-items-center rounded-full bg-[#faf7f0] text-[#1a403f] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] ring-4 ring-[#faf7f0]/30 ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 160 160"
        className="siegel-ring absolute inset-0 size-full"
      >
        <defs>
          <path
            id={id}
            d={`M80 80m-${r} 0a${r} ${r} 0 1 1 ${2 * r} 0a${r} ${r} 0 1 1 -${2 * r} 0`}
          />
        </defs>
        <text className="fill-current text-[10.5px] font-bold uppercase">
          <textPath
            href={`#${id}`}
            textLength={umfang - 2}
            lengthAdjust="spacing"
          >
            Festpreis · keine versteckten Kosten ·
          </textPath>
        </text>
        <circle
          cx="80"
          cy="80"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.5"
        />
      </svg>
      <span className="relative text-center leading-none">
        <span className="head-zahl block text-[2.1rem] sm:text-[2.4rem]">€</span>
        <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.18em]">
          Fest
        </span>
      </span>
    </div>
  );
}

/**
 * Illustration, die über Abschnittsgrenzen hinausragt.
 * Rein dekorativ und für Screenreader unsichtbar.
 * `faktor` steuert die vertikale Parallaxe (negativ heißt schneller als
 * die Seite), `faktorX` eine seitliche Bewegung beim Scrollen.
 */
export function Figur({
  children,
  faktor = 0,
  faktorX = 0,
  className = "",
}: {
  children: ReactNode;
  faktor?: number;
  faktorX?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 ${className}`}
    >
      <div
        data-parallax={faktor || undefined}
        data-parallax-x={faktorX || undefined}
        className="parallax"
      >
        {children}
      </div>
    </div>
  );
}
