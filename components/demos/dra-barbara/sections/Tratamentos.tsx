import { BARBARA_DATA } from "../data";

export function Tratamentos() {
  const t = BARBARA_DATA.tratamentos;
  return (
    <section
      id="tratamentos"
      className="bg-[var(--c-cream)] py-20 px-6 lg:py-[100px] lg:px-16"
    >
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[10px] lg:text-[11px] tracking-[0.16em] font-medium text-[var(--c-grafite)] mb-6 lg:mb-10"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {t.eyebrow}
        </p>
        <h2
          className="font-normal text-[var(--c-tinta)] leading-[1.05] tracking-[-0.02em] text-[38px] lg:text-[68px]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {t.headlineLines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>
        <div className="mt-6 lg:mt-10 h-px w-[60px] lg:w-[80px] bg-[var(--c-nude)]" />

        {/* Desktop: 3 cards inline */}
        <div className="hidden lg:grid grid-cols-3 gap-16 mt-20">
          {t.cards.map((card) => (
            <article key={card.num}>
              <p
                className="font-normal text-[var(--c-nude)] tracking-[-0.03em] leading-[1] text-[110px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {card.num}
              </p>
              <p
                className="mt-6 text-[11px] tracking-[0.16em] font-medium text-[var(--c-tinta)]"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {card.label}
              </p>
              <p className="mt-4 text-[var(--c-grafite)] text-[16px] leading-[1.7]">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile: stack vertical */}
        <div className="lg:hidden mt-12 space-y-10 divide-y divide-[var(--c-linha)]">
          {t.cards.map((card, i) => (
            <article key={card.num} className={i > 0 ? "pt-10" : ""}>
              <p
                className="font-normal text-[var(--c-nude)] tracking-[-0.03em] leading-[1] text-[80px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {card.num}
              </p>
              <p
                className="mt-4 text-[10px] tracking-[0.16em] font-medium text-[var(--c-tinta)]"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {card.label}
              </p>
              <p className="mt-3 text-[var(--c-grafite)] text-[14px] leading-[1.65]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
