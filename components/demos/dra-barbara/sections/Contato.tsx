import { BARBARA_DATA } from "../data";

export function Contato() {
  const c = BARBARA_DATA.contato;
  return (
    <section
      id="contato"
      className="bg-[var(--c-rose)] py-20 px-6 lg:py-[120px] lg:px-16"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Desktop: 2-col headline-left / info-right */}
        <div className="hidden lg:grid grid-cols-[760px_440px] gap-20">
          <div>
            <p
              className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-grafite)] mb-12"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {c.eyebrow}
            </p>
            <h2
              className="font-normal text-[var(--c-tinta)] leading-[1] tracking-[-0.03em] text-[128px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {c.headlineLines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <p
              className="mt-10 italic text-[var(--c-nude)] text-[24px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {c.accent}
            </p>
          </div>
          <ContatoInfo />
        </div>

        {/* Mobile: stack */}
        <div className="lg:hidden">
          <p
            className="text-[10px] tracking-[0.16em] font-medium text-[var(--c-grafite)] mb-7"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {c.eyebrow}
          </p>
          <h2
            className="font-normal text-[var(--c-tinta)] leading-[1] tracking-[-0.03em] text-[64px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {c.headlineLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p
            className="mt-5 italic text-[var(--c-nude)] text-[18px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {c.accent}
          </p>
          <div className="mt-10">
            <ContatoInfo mobile />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContatoInfo({ mobile = false }: { mobile?: boolean }) {
  const c = BARBARA_DATA.contato;
  return (
    <div className={mobile ? "" : "self-start"}>
      <p className={`text-[var(--c-tinta)] leading-[1.6] ${mobile ? "text-[15px]" : "text-[17px]"}`}>
        {c.body}
      </p>
      <a
        href={c.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center rounded-full bg-[var(--c-nude)] text-[var(--c-cream)] tracking-[0.18em] font-medium hover:opacity-90 transition-opacity ${
          mobile ? "w-full py-5 text-[12px]" : "px-8 py-[18px] text-[12px]"
        }`}
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        {c.cta.label}  →
      </a>
      <div className={`h-px w-[40px] lg:w-[60px] bg-[var(--c-nude)] ${mobile ? "mt-12" : "mt-14"}`} />
      <p
        className={`mt-8 lg:mt-10 font-normal text-[var(--c-tinta)] ${
          mobile ? "text-[28px]" : "text-[32px]"
        }`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {c.phoneLine}
      </p>
      <p
        className="mt-2 lg:mt-3 text-[10px] tracking-[0.18em] font-medium text-[var(--c-grafite)]"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        {c.phoneLabel}
      </p>

      <p
        className={`text-[10px] tracking-[0.16em] font-medium text-[var(--c-grafite)] ${
          mobile ? "mt-12" : "mt-14"
        }`}
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        /  REDES
      </p>
      <ul className="mt-4 space-y-1">
        {c.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`italic text-[var(--c-tinta)] hover:text-[var(--c-nude)] transition-colors ${
                mobile ? "text-[18px]" : "text-[20px]"
              }`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
