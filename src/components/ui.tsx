import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Phone } from "@phosphor-icons/react/ssr";
import { site, telHref } from "@/content/site";

/* ── Layout ─────────────────────────────────────────────────── */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[76rem] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "bg",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "bg" | "surface" | "sunk" | "brand";
}) {
  const tones = {
    bg: "bg-bg",
    surface: "bg-surface",
    sunk: "bg-sunk",
    brand: "bg-brand text-on-brand",
  };
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

/* ── Scroll-Einblendung ─────────────────────────────────────── */

/**
 * Props für ein Element, das beim Hineinscrollen eingeblendet wird.
 * `verzoegerung` staffelt Listen, `art` wählt die Richtung.
 * Mechanik: components/ScrollEffekte.tsx und globals.css.
 */
export function reveal(
  verzoegerung = 0,
  art: "" | "links" | "rechts" | "zoom" = "",
): { "data-reveal": string; style?: CSSProperties } {
  return {
    "data-reveal": art,
    style: verzoegerung
      ? ({ "--d": `${verzoegerung}ms` } as CSSProperties)
      : undefined,
  };
}

/* ── Überschriften ──────────────────────────────────────────── */

export function H2({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      data-reveal=""
      className={`head text-balance text-[1.5rem] sm:text-[1.75rem] lg:text-[1.95rem] ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-[1.05rem] font-bold tracking-tight sm:text-[1.15rem] ${className}`}>
      {children}
    </h3>
  );
}

/* ── Buttons ────────────────────────────────────────────────── */

const btnBase =
  "inline-flex items-center justify-center gap-2.5 rounded-ctl font-semibold transition-[background-color,color,transform,border-color] duration-200 active:translate-y-px";

/**
 * Der Telefon-Button ist das wichtigste Element der ganzen Seite.
 * `size="xl"` ist die Hero-Variante, `md` die für Fließtext und Footer.
 */
export function CallButton({
  size = "md",
  variant = "solid",
  label,
  className = "",
}: {
  size?: "md" | "xl";
  variant?: "solid" | "outline" | "onBrand" | "hell";
  label?: string;
  className?: string;
}) {
  const sizes = {
    md: "px-5 py-3 text-[0.95rem]",
    xl: "px-6 py-4 text-lg sm:px-8 sm:py-5 sm:text-xl",
  };
  const variants = {
    solid: "bg-brand text-on-brand hover:bg-brand-deep",
    outline:
      "border-2 border-brand text-brand hover:bg-brand hover:text-on-brand",
    onBrand: "bg-on-brand text-brand hover:bg-bg",
    // Auf Fotos: in beiden Farbschemata hell, damit er sich vom
    // abgedunkelten Bild abhebt.
    hell: "bg-[#faf7f0] text-[#1a403f] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] hover:bg-white",
  };
  return (
    <a
      href={telHref}
      className={`${btnBase} ${sizes[size]} ${variants[variant]} ${className}`}
      data-cta="call"
    >
      <Phone
        weight="fill"
        className={size === "xl" ? "size-6 shrink-0" : "size-5 shrink-0"}
      />
      <span className="tnum whitespace-nowrap">
        {label ?? site.contact.phoneDisplay}
      </span>
    </a>
  );
}

export function LinkButton({
  href,
  children,
  variant = "outline",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "quiet" | "hell";
  className?: string;
}) {
  const variants = {
    solid: "bg-brand text-on-brand hover:bg-brand-deep",
    outline:
      "border border-line-strong text-ink hover:border-brand hover:text-brand",
    quiet: "text-brand hover:text-brand-deep underline underline-offset-4",
    hell: "border border-white/35 text-white hover:border-white hover:bg-white/10",
  };
  return (
    <Link
      href={href}
      className={`${btnBase} px-5 py-3 text-[0.95rem] ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/* ── Panel ──────────────────────────────────────────────────── */

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-panel border border-line bg-surface ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Platzhalter für ein noch fehlendes Foto.
 *
 * Bewusst sichtbar und beschriftet statt mit einem beliebigen Stockfoto
 * gefüllt: Ein zufälliges Symbolbild auf einer Handwerkerseite fällt
 * sofort auf und kostet Vertrauen. Die benötigten Motive stehen in
 * BILDBEDARF.md.
 */
export function BildPlatz({
  motiv,
  ratio = "4/3",
  className = "",
}: {
  motiv: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`flex items-center justify-center rounded-panel border border-dashed border-line-strong bg-brand-tint p-6 ${className}`}
    >
      <span className="max-w-[26ch] text-center text-[0.8rem] font-medium leading-relaxed text-ink-mute">
        Bild folgt: {motiv}
      </span>
    </div>
  );
}
