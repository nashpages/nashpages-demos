import { BARBARA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Footer() {
  const f = BARBARA_DATA.footer;
  return (
    <footer className="bg-[var(--c-footer-bg)] py-14 lg:py-20 px-6 lg:px-16 text-[var(--c-cream)]">
      <div className="max-w-[1280px] mx-auto">
        <FadeUp>
          {/* Desktop */}
          <div className="hidden lg:flex justify-between gap-12 items-start">
            <div>
              <p
                className="italic font-normal text-[var(--c-cream)] text-[32px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {f.logo}
              </p>
              <p
                className="mt-4 text-[10px] tracking-[0.2em] font-medium text-[var(--c-footer-muted)]"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {f.logoSub}
              </p>
            </div>
            <FtCol label="DADOS" items={f.dados} />
            <FtCol label="NAVEGAR" items={f.navegar} interactive />
            <FtCol label="REDES" items={f.redes} interactive />
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <p
              className="italic font-normal text-[var(--c-cream)] text-[26px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {f.logo}
            </p>
            <p
              className="mt-2 text-[10px] tracking-[0.2em] font-medium text-[var(--c-footer-muted)]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {f.logoSub}
            </p>
            <div className="mt-9">
              <FtCol label="DADOS" items={f.dados} />
            </div>
            <div className="mt-7 grid grid-cols-2 gap-8">
              <FtCol label="NAVEGAR" items={f.navegar} interactive />
              <FtCol label="REDES" items={f.redes} interactive />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-14 h-px w-full bg-[var(--c-footer-divider)]" />
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center">
            <p
              className="text-[9px] lg:text-[10px] tracking-[0.12em] text-[var(--c-footer-muted)] leading-[1.7]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {f.copyright}
            </p>
            <p
              className="text-[10px] tracking-[0.2em] font-medium text-[var(--c-nude)]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {f.credit}
            </p>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}

function FtCol({
  label,
  items,
  interactive = false,
}: {
  label: string;
  items: readonly string[];
  interactive?: boolean;
}) {
  return (
    <div>
      <p
        className="text-[10px] tracking-[0.2em] font-medium text-[var(--c-footer-muted)] mb-3"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        /  {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((s) => (
          <li
            key={s}
            className={`text-[10px] tracking-[0.08em] text-[var(--c-cream)] leading-[1.75] transition-colors duration-300 ${
              interactive ? "hover:text-[var(--c-nude)] cursor-default" : ""
            }`}
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
