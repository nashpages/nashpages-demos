import { BARBARA_DATA } from "../data";
import { FadeUp, WordReveal, Stagger, StaggerItem } from "../motion";

export function Contato() {
  const c = BARBARA_DATA.contato;
  return (
    <section
      id="contato"
      className="bg-[var(--c-rose)] py-20 px-6 lg:py-[120px] lg:px-16"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[760px_440px] gap-20">
          <div>
            <FadeUp>
              <p
                className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-grafite)] mb-12"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {c.eyebrow}
              </p>
            </FadeUp>
            <WordReveal
              lines={c.headlineLines}
              delay={0.15}
              stagger={0.11}
              className="font-normal text-[var(--c-tinta)] leading-[1] tracking-[-0.03em] text-[128px]"
            />
            <FadeUp delay={0.75}>
              <p
                className="mt-10 italic text-[var(--c-nude)] text-[24px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {c.accent}
              </p>
            </FadeUp>
          </div>
          <div className="self-start">
            <ContatoInfo />
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <FadeUp>
            <p
              className="text-[10px] tracking-[0.16em] font-medium text-[var(--c-grafite)] mb-7"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {c.eyebrow}
            </p>
          </FadeUp>
          <WordReveal
            lines={c.headlineLines}
            delay={0.15}
            stagger={0.09}
            className="font-normal text-[var(--c-tinta)] leading-[1] tracking-[-0.03em] text-[64px]"
          />
          <FadeUp delay={0.7}>
            <p
              className="mt-5 italic text-[var(--c-nude)] text-[18px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {c.accent}
            </p>
          </FadeUp>
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
    <>
      <FadeUp delay={0.2}>
        <p className={`text-[var(--c-tinta)] leading-[1.6] ${mobile ? "text-[15px]" : "text-[17px]"}`}>
          {c.body}
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <a
          href={c.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 group inline-flex items-center justify-center rounded-full bg-[var(--c-nude)] text-[var(--c-cream)] tracking-[0.18em] font-medium hover:opacity-90 transition-all duration-500 hover:shadow-[0_8px_24px_-8px_rgba(196,153,138,0.5)] ${
            mobile ? "w-full py-5 text-[12px]" : "px-8 py-[18px] text-[12px]"
          }`}
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          <span className="inline-flex items-center gap-3">
            {c.cta.label}
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </span>
        </a>
      </FadeUp>
      <FadeUp delay={0.45}>
        <div className={`h-px w-[40px] lg:w-[60px] bg-[var(--c-nude)] ${mobile ? "mt-12" : "mt-14"}`} />
      </FadeUp>
      <FadeUp delay={0.55}>
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
      </FadeUp>

      <FadeUp delay={0.7}>
        <p
          className={`text-[10px] tracking-[0.16em] font-medium text-[var(--c-grafite)] ${
            mobile ? "mt-12" : "mt-14"
          }`}
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          /  REDES
        </p>
      </FadeUp>
      <Stagger delay={0.8} staggerChildren={0.1} className="mt-4 space-y-1">
        {c.socials.map((s) => (
          <StaggerItem key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`italic text-[var(--c-tinta)] hover:text-[var(--c-nude)] transition-colors duration-300 inline-block ${
                mobile ? "text-[18px]" : "text-[20px]"
              }`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {s.label}
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </>
  );
}
