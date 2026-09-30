/* ───────────────────────────────────────────────────────────────
   Gezeichnete Illustrationen statt Foto-Freistellern.

   Ein Stil für alle: runde Linien in Petrol-Dunkel, Flächen in den
   Markentönen, dazu ein leicht versetzter Schatten wie bei einem
   Siebdruck. Alle Farben kommen aus den Tokens in globals.css, damit
   die Zeichnungen im Dunkelmodus mitgehen.
   ─────────────────────────────────────────────────────────────── */

/**
 * Strichstärke und -form. Die Strichfarbe setzt jeweils `stroke-brand-deep`.
 * Die Stärke gilt in Bildschirmpixeln, unabhängig von der Größe der
 * Zeichnung. So wirken Wagen und Schlüssel gleich kräftig gezeichnet,
 * auf dem Handy genauso wie am Desktop.
 */
const linie = {
  strokeWidth: 2,
  vectorEffect: "non-scaling-stroke" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * Einsatzfahrzeug von der Seite, fährt nach links.
 * Die Räder stehen auf der Grundlinie unten, so kann der Wagen genau
 * auf einer Abschnittskante „fahren".
 */
export function Einsatzwagen({ className = "" }: { className?: string }) {
  const karosserie =
    "M50 214 L46 176 Q46 156 64 146 L100 124 L150 72 Q159 62 172 62 L474 62 Q492 62 492 80 L492 214 Z";

  return (
    <svg
      viewBox="0 0 540 250"
      fill="none"
      className={`h-auto w-full overflow-visible ${className}`}
    >
      {/* Bodenschatten und Fahrbahn */}
      <ellipse cx="270" cy="243" rx="236" ry="7" className="fill-brand" opacity="0.14" />
      <path d="M8 246 H532" className="stroke-brand-deep" {...linie} />

      {/* Fahrtlinien hinter dem Heck */}
      <g className="stroke-brand-deep" {...linie} opacity="0.55">
        <path d="M506 104 H532" />
        <path d="M514 132 H536" />
        <path d="M502 160 H526" />
      </g>

      {/* Versetzte Schattenfläche, dann die Karosserie */}
      <path d={karosserie} transform="translate(8 8)" className="fill-brand" opacity="0.18" />
      <path d={karosserie} className="fill-surface" />

      {/* Markenstreifen */}
      <path d="M47 178 H492 V194 H49 Z" className="fill-brand" />

      {/* Blaulicht-Leiste auf dem Dach */}
      <rect x="298" y="48" width="44" height="14" rx="5" className="fill-brand stroke-brand-deep" {...linie} />

      {/* Fahrerfenster mit Lichtreflex */}
      <path d="M110 122 L154 78 L206 78 L206 122 Z" className="fill-brand-tint stroke-brand-deep" {...linie} />
      <path d="M164 88 L142 110" className="stroke-surface" strokeWidth="5" strokeLinecap="round" />

      {/* Tür, Griff, Spiegel, Scheinwerfer, Stoßstange */}
      <g className="stroke-brand-deep" {...linie}>
        <path d="M216 66 V210" />
        <path d="M190 138 H204" />
        <path d="M478 72 V210" />
      </g>
      <rect x="90" y="114" width="12" height="18" rx="4" className="fill-brand-tint stroke-brand-deep" {...linie} />
      <ellipse cx="58" cy="160" rx="8" ry="6" className="fill-brand-tint stroke-brand-deep" {...linie} />
      <rect x="38" y="198" width="30" height="14" rx="5" className="fill-brand-tint stroke-brand-deep" {...linie} />

      {/* Schlüssel-Emblem und Beschriftung auf der Seitenwand */}
      <circle cx="346" cy="112" r="30" className="fill-brand stroke-brand-deep" {...linie} />
      <g className="stroke-surface" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="333" cy="112" r="9" />
        <path d="M342 112 H366" />
        <path d="M357 112 V120" />
        <path d="M364 112 V119" />
      </g>
      <text
        x="346"
        y="164"
        textAnchor="middle"
        className="fill-brand-deep font-[family-name:var(--font-display)] text-[15px] font-extrabold tracking-[0.08em]"
      >
        SCHLÜSSELDIENST
      </text>

      {/* Radkästen und Räder */}
      {[122, 410].map((x) => (
        <g key={x}>
          <path d={`M${x - 40} 214 A40 40 0 0 1 ${x + 40} 214 Z`} className="fill-brand-tint stroke-brand-deep" {...linie} />
          <circle cx={x} cy="214" r="28" className="fill-brand-deep stroke-brand-deep" {...linie} />
          <circle cx={x} cy="214" r="12" className="fill-surface stroke-brand-deep" {...linie} />
          <circle cx={x} cy="214" r="3" className="fill-brand-deep" />
        </g>
      ))}

      {/* Umriss zuletzt, damit er über Streifen und Details liegt */}
      <path d={karosserie} className="stroke-brand-deep" {...linie} />
    </svg>
  );
}

/**
 * Schlüsselbund am Haken: Ring, zwei Schlüssel und ein Anhänger.
 * Der Drehpunkt fürs Pendeln liegt oben am Haken (siehe `.schwingen`).
 */
export function Schluesselbund({ className = "" }: { className?: string }) {
  const bart =
    "M52 124 V282 L60 294 L68 282 V262 H76 V252 H70 V240 H78 V228 H70 V216 H76 V206 H68 V124 Z";
  const reide =
    "M60 78 a26 26 0 1 1 0 52 a26 26 0 1 1 0 -52 Z M60 86 a7 7 0 1 0 0 14 a7 7 0 1 0 0 -14 Z";

  const schluessel = (flaeche: string) => (
    <>
      <path d={bart} className={`${flaeche} stroke-brand-deep`} {...linie} />
      <path d="M60 138 V272" className="stroke-brand-deep" {...linie} strokeWidth={1.25} opacity="0.45" />
      <path d={reide} fillRule="evenodd" className={`${flaeche} stroke-brand-deep`} {...linie} />
    </>
  );

  return (
    <svg
      viewBox="0 0 120 320"
      fill="none"
      className={`h-auto w-full overflow-visible ${className}`}
    >
      {/* Wandhaken */}
      <rect x="42" y="2" width="36" height="18" rx="7" className="fill-surface stroke-brand-deep" {...linie} />
      <circle cx="60" cy="11" r="3" className="fill-brand-deep" />
      <path d="M60 20 V34" className="stroke-brand-deep" {...linie} strokeWidth={2.5} />

      {/* Anhänger, nach links weggedreht */}
      <g transform="rotate(68 60 78)">
        <rect x="46" y="84" width="28" height="44" rx="9" className="fill-brand-tint stroke-brand-deep" {...linie} />
        <circle cx="60" cy="96" r="4" className="stroke-brand-deep" {...linie} />
        <path d="M53 110 H67 M53 118 H63" className="stroke-brand-deep" {...linie} strokeWidth={1.5} />
      </g>

      {/* Hinterer Schlüssel, leicht nach rechts gedreht */}
      <g transform="rotate(-18 60 78)">{schluessel("fill-brand")}</g>

      {/* Vorderer Schlüssel */}
      {schluessel("fill-surface")}

      {/* Ring zuletzt, er läuft durch beide Reiden */}
      <circle cx="60" cy="56" r="22" className="stroke-brand-deep" {...linie} strokeWidth={2.5} />
    </svg>
  );
}
