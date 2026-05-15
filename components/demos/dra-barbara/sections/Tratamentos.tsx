import { BARBARA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

/* §03 Tratamentos — Figma 19:2 (desktop) / 49:2 (mobile)
   Desktop:
   - bg #F8F2EA, content absolute left=80 top=120 w=1280
   - eyebrow JetBrains Mono REGULAR 11px tracking 1.76px (16%) #6B5F5A
   - spacer 32
   - headline Playfair Regular 80px leading-none tracking -1.2px #2A2520
   - spacer 56 + divider w=80 + spacer 72
   - 3 cards flex gap=48 flex-1 each:
     - Num Playfair 110px leading 0.9 tracking -3.3px (-3%) #C4998A
     - spacer 28 + Label Mono Medium 13px tracking 2.34px (18%) #2A2520
     - spacer 20 + Body Inter 14px leading 1.6 #6B5F5A
     - spacer 32 + CTA "Ver detalhes →" Inter Medium 12px tracking 1.68px + underline 114px #C4998A
*/
export function Tratamentos() {
  const t = BARBARA_DATA.tratamentos;
  return (
    <section id="tratamentos" className="relative w-full bg-[#F8F2EA]">
      <div className="max-w-[1440px] mx-auto">
        {/* DESKTOP */}
        <div className="hidden lg:block pt-[120px] pb-[120px] pl-[80px] pr-[80px]">
          <div className="w-[1280px] max-w-full flex flex-col items-start">
            <FadeUp>
              <p
                className="text-[#6B5F5A] text-[11px] whitespace-pre"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 400,
                  letterSpacing: "1.76px",
                }}
              >
                {t.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[32px]" />
            <FadeUp delay={0.1}>
              <h2
                className="text-[#2A2520] text-[80px] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  letterSpacing: "-1.2px",
                }}
              >
                {t.headlineLines.map((line, i) => (
                  <span key={i} className="block leading-none">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[56px]" />
            <FadeUp delay={0.22}>
              <div className="h-px w-[80px] bg-[#C4998A]" />
            </FadeUp>
            <div className="h-[72px]" />
            <Stagger delay={0.35} staggerChildren={0.15} className="w-full flex gap-[48px] items-start">
              {t.cards.map((card) => (
                <StaggerItem key={card.num} className="flex-1">
                  <Card card={card} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        {/* MOBILE — 49:2 stack */}
        <div className="lg:hidden pt-[80px] pb-[80px] pl-[24px] pr-[24px]">
          <div className="flex flex-col items-start w-[327px] max-w-full">
            <FadeUp>
              <p
                className="text-[#6B5F5A] text-[10px] whitespace-pre"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.8px",
                }}
              >
                {t.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[20px]" />
            <FadeUp delay={0.1}>
              <h2
                className="text-[#2A2520] text-[38px]"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  letterSpacing: "-0.76px",
                }}
              >
                {t.headlineLines.map((line, i) => (
                  <span key={i} className="block leading-[1.05]">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[28px]" />
            <FadeUp delay={0.22}>
              <div className="h-px w-[60px] bg-[#C4998A]" />
            </FadeUp>
            <div className="h-[48px]" />
            <Stagger delay={0.35} staggerChildren={0.15} className="w-full flex flex-col gap-[40px]">
              {t.cards.map((card, i) => (
                <StaggerItem key={card.num}>
                  <div className={i > 0 ? "pt-[40px] border-t border-[#DCC8BC]" : ""}>
                    <Card card={card} mobile />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  card,
  mobile = false,
}: {
  card: { num: string; label: string; body: string };
  mobile?: boolean;
}) {
  return (
    <article className="group flex flex-col items-start">
      <p
        className="text-[#C4998A] whitespace-nowrap transition-transform duration-700 group-hover:-translate-y-1"
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 400,
          fontSize: mobile ? 80 : 110,
          lineHeight: 0.9,
          letterSpacing: mobile ? "-2.4px" : "-3.3px",
        }}
      >
        {card.num}
      </p>
      <div style={{ height: mobile ? 20 : 28 }} />
      <p
        className="text-[#2A2520] whitespace-nowrap"
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontWeight: 500,
          fontSize: mobile ? 11 : 13,
          letterSpacing: mobile ? "1.98px" : "2.34px",
        }}
      >
        {card.label}
      </p>
      <div style={{ height: mobile ? 16 : 20 }} />
      <p
        className="text-[#6B5F5A] w-full"
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.6,
        }}
      >
        {card.body}
      </p>
      <div style={{ height: mobile ? 24 : 32 }} />
      <a
        href="#contato"
        className="group/cta inline-flex flex-col gap-2"
      >
        <span
          className="text-[#2A2520] whitespace-pre transition-transform duration-300 group-hover/cta:translate-x-1"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "1.68px",
          }}
        >
          Ver detalhes  →
        </span>
        <span className="h-px w-[114px] bg-[#C4998A] origin-left transition-transform duration-500 group-hover/cta:scale-x-110" />
      </a>
    </article>
  );
}
