import { BARBARA_DATA } from "../data";

export function Sobre() {
  const { sobre } = BARBARA_DATA;
  return (
    <section
      id="sobre"
      className="bg-[var(--c-cream)] py-20 px-6 lg:py-[100px] lg:px-16"
    >
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[10px] lg:text-[11px] tracking-[0.16em] font-medium text-[var(--c-grafite)] mb-6 lg:mb-10"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {sobre.eyebrow}
        </p>
        <h2
          className="font-normal text-[var(--c-tinta)] leading-[1.02] tracking-[-0.02em] text-[44px] lg:text-[80px]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {sobre.headlineLines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>

        <div className="mt-8 lg:mt-12 h-px w-[60px] lg:w-[80px] bg-[var(--c-nude)]" />

        {/* Desktop: 2-col */}
        <div className="hidden lg:grid grid-cols-2 gap-20 mt-14">
          <div>
            <p
              className="font-normal italic text-[var(--c-tinta)] text-[38px] leading-[1.15]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {sobre.quote.lines.map((l, i) => (
                <span key={i} className="block">{l}</span>
              ))}
            </p>
            <p
              className="mt-8 text-[10px] tracking-[0.16em] font-medium text-[var(--c-grafite)]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {sobre.quote.attribution}
            </p>
          </div>
          <div className="space-y-6 text-[var(--c-grafite)] text-[16px] leading-[1.7]">
            {sobre.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        {/* Mobile: stack */}
        <div className="lg:hidden mt-8 space-y-7">
          <div>
            <p
              className="font-normal italic text-[var(--c-tinta)] text-[28px] leading-[1.25]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {sobre.quote.lines.map((l, i) => (
                <span key={i} className="block">{l}</span>
              ))}
            </p>
            <p
              className="mt-3 text-[10px] tracking-[0.16em] font-medium text-[var(--c-grafite)]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {sobre.quote.attribution}
            </p>
          </div>
          <div className="space-y-4 text-[var(--c-grafite)] text-[14px] leading-[1.65]">
            {sobre.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
