import { site } from "@/content/site";

/**
 * Bildmarke als Vektorpfad.
 *
 * Der Pfad ist keine freie Nachzeichnung, sondern eine Kontur-Spur des
 * gelieferten Logos (public/logo.png), auf 1,3 px vereinfacht. Die Form
 * entspricht damit exakt dem Original.
 *
 * Warum überhaupt Vektor statt des PNG:
 *  - Das PNG hat einen eingebrannten Cremehintergrund, keine Transparenz.
 *    Im dunklen Footer stünde ein heller Kasten um das Logo.
 *  - Es wiegt 1,2 MB. Dieser Pfad wiegt rund 550 Byte.
 *  - Über `currentColor` läuft die Marke mit der Textfarbe mit und
 *    funktioniert in hell und dunkel ohne zweite Datei.
 *
 * Wird das Logo final überarbeitet, muss nur dieser Pfad ersetzt werden.
 */
const MARK_PATH =
  "M174 2L164 11L159 13L2 129L17 151L38 137L38 319L104 319L120 310L81 293L64 293L64 117L69 115L175 35L180 37L257 95L260 99L294 123L294 292L280 293L238 310L253 319L319 319L319 144L341 160L347 151L347 131L312 105L312 33L270 33L269 72L179 3L175 2ZM143 99L144 128L172 127L172 99L144 99ZM182 99L183 129L211 127L211 99L183 99ZM144 138L144 167L172 167L172 138L145 138ZM182 138L182 167L211 166L211 138L183 138ZM171 190L159 196L154 202L151 210L152 227L155 233L165 241L156 289L199 289L191 240L197 237L203 229L205 222L204 208L200 200L192 193L184 190L172 190Z";

export function KeyHouse({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 347 321"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={MARK_PATH} fill="currentColor" />
    </svg>
  );
}

/**
 * Bildmarke plus Wortmarke für Header und Footer.
 * Beide Teile erben die Textfarbe, damit sie auf hellem und dunklem
 * Grund ohne zweite Datei funktionieren.
 */
export function Logo({
  withClaim = false,
  className = "",
}: {
  withClaim?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <KeyHouse className="h-8 w-auto shrink-0 sm:h-9" />
      <span className="flex flex-col leading-none">
        <span className="head text-[0.92rem] uppercase !tracking-[0.1em] sm:text-[1.02rem]">
          {site.brand.name}
        </span>
        {withClaim && (
          <span className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] opacity-60">
            {site.brand.claim}
          </span>
        )}
      </span>
    </span>
  );
}
