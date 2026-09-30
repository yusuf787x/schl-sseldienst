"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-Effekte für die ganze Seite, ohne Animationsbibliothek.
 *
 * 1. Einblenden: Jedes Element mit `data-reveal` bekommt `data-in`,
 *    sobald es in den Sichtbereich kommt. Die eigentliche Bewegung
 *    steht in globals.css.
 * 2. Parallaxe: Elemente mit `data-parallax="0.15"` verschieben sich
 *    beim Scrollen um diesen Faktor gegenüber ihrem Elternelement.
 *
 * Ausgeblendet wird nur, wenn das Inline-Script im <head> die Klasse
 * `js` gesetzt hat. Lädt dieses Script nie, bleibt `js` nicht stehen
 * (siehe layout.tsx) und alles ist ganz normal sichtbar.
 */
export function ScrollEffekte() {
  const pfad = usePathname();

  useEffect(() => {
    (window as unknown as { __rv?: boolean }).__rv = true;
    const root = document.documentElement;
    const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const zeigen = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not([data-in])",
    );
    if (
      ruhig ||
      !root.classList.contains("js") ||
      !("IntersectionObserver" in window)
    ) {
      zeigen.forEach((el) => el.setAttribute("data-in", ""));
      return;
    }

    const io = new IntersectionObserver(
      (eintraege) => {
        for (const e of eintraege) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    zeigen.forEach((el) => io.observe(el));

    const parallax = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let frame = 0;
    const rechnen = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of parallax) {
        // Gemessen wird das Elternelement, nicht das verschobene Element
        // selbst, sonst schaukelt sich die Verschiebung auf.
        const r = (el.parentElement ?? el).getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const faktor = Number(el.dataset.parallax) || 0.1;
        const abstand = r.top + r.height / 2 - vh / 2;
        el.style.setProperty("--py", `${(-abstand * faktor).toFixed(1)}px`);
      }
    };
    const planen = () => {
      if (!frame) frame = requestAnimationFrame(rechnen);
    };
    if (parallax.length) {
      rechnen();
      window.addEventListener("scroll", planen, { passive: true });
      window.addEventListener("resize", planen);
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", planen);
      window.removeEventListener("resize", planen);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pfad]);

  return null;
}
