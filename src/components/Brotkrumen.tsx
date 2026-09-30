import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/ssr";

/**
 * Brotkrumennavigation. Sichtbar für Besucher, und über das
 * BreadcrumbList-Schema auch für Google, das sie dann in den
 * Suchergebnissen statt der nackten URL anzeigt.
 */
export function Brotkrumen({
  pfad,
}: {
  pfad: { name: string; url: string }[];
}) {
  return (
    <nav aria-label="Brotkrumen">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.82rem] text-ink-mute">
        {pfad.map((p, i) => {
          const letzter = i === pfad.length - 1;
          return (
            <li key={p.url} className="flex items-center gap-1.5">
              {letzter ? (
                <span aria-current="page" className="text-ink-soft">
                  {p.name}
                </span>
              ) : (
                <>
                  <Link href={p.url} className="transition-colors hover:text-brand">
                    {p.name}
                  </Link>
                  <CaretRight className="size-3 shrink-0 opacity-60" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
