"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X, Phone } from "@phosphor-icons/react/ssr";
import { Logo } from "./Logo";
import { site, telHref } from "@/content/site";
import { leistungen } from "@/content/leistungen";

const nav = [
  { href: "/leistungen/tueroeffnung", label: "Türöffnung" },
  { href: "/leistungen/schluesselnotdienst", label: "Notdienst" },
  { href: "/leistungen/einbruchschutz", label: "Einbruchschutz" },
  { href: "/preise", label: "Preise" },
  { href: "/einsatzgebiet", label: "Einsatzgebiet" },
  { href: "/ratgeber", label: "Ratgeber" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-[76rem] items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href="/"
          className="shrink-0 text-brand"
          onClick={() => setOpen(false)}
        >
          <Logo />
          <span className="sr-only">Zur Startseite</span>
        </Link>

        {/* Desktop-Navigation, bewusst auf sechs Punkte begrenzt,
            damit sie bei 1024px einzeilig bleibt. */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9rem] font-medium text-ink-soft transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            data-cta="call"
            className="hidden items-center gap-2 rounded-ctl bg-brand px-4 py-2.5 text-[0.9rem] font-semibold text-on-brand transition-colors hover:bg-brand-deep active:translate-y-px sm:inline-flex"
          >
            <Phone weight="fill" className="size-4 shrink-0" />
            <span className="tnum whitespace-nowrap">
              {site.contact.phoneDisplay}
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilnav"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-ctl text-ink lg:hidden"
          >
            {open ? <X className="size-6" /> : <List className="size-6" />}
            <span className="sr-only">
              {open ? "Menü schließen" : "Menü öffnen"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobilnav"
          aria-label="Hauptnavigation mobil"
          className="border-t border-line bg-surface lg:hidden"
        >
          <div className="mx-auto max-w-[76rem] px-5 py-4 sm:px-8">
            <p className="pb-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
              Leistungen
            </p>
            <ul className="grid gap-px">
              {leistungen.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/leistungen/${l.slug}`}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[0.95rem] font-medium text-ink"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-3 grid gap-px border-t border-line pt-3">
              {[
                { href: "/preise", label: "Preise" },
                { href: "/einsatzgebiet", label: "Einsatzgebiet" },
                { href: "/ratgeber", label: "Ratgeber" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[0.95rem] font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}

/**
 * Feste Anrufleiste am unteren Bildschirmrand, nur mobil.
 *
 * Auf dieser Seite ist das kein Deko-Element: Der typische Besucher
 * steht draußen vor der Tür, hält das Handy in der Hand und soll die
 * Nummer erreichen, egal wie weit er gescrollt hat.
 */
export function AnrufLeiste() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-deep bg-brand p-2.5 sm:hidden">
      <a
        href={telHref}
        data-cta="call"
        className="flex w-full items-center justify-center gap-2.5 rounded-ctl bg-on-brand px-4 py-3 text-[1.05rem] font-bold text-brand active:translate-y-px"
      >
        <Phone weight="fill" className="size-5 shrink-0" />
        <span className="tnum">{site.contact.phoneDisplay}</span>
      </a>
    </div>
  );
}
