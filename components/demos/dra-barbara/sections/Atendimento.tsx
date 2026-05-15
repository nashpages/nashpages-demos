import { BARBARA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

/* §05 Atendimento — Figma 37:2 (desktop) / 49:60 (mobile)
   Desktop:
   - bg #F8F2EA, content absolute left=80 top=120 w=1280
   - eyebrow Mono Medium 11px tracking 0.88px (8%) #6B5F5A
   - spacer 40
   - headline Playfair 80px tracking -1.6px leading-none #2A2520 "Onde, / e como."
   - spacer 56 + divider w=80 + spacer 56
   - row 2-col gap 80, cols 600 each:
     - label "/ ONDE" / "/ COMO" Mono Medium 11px tracking 0.88px (8%) #2A2520
     - spacer 28
     - 4 items Inter Regular 17px leading 1.5 #2A2520, spacer 14 between
*/
export function Atendimento() {
  const a = BARBARA_DATA.atendimento;
  return (
    <section id="atendimento" className="relative w-full bg-[#F8F2EA]">
      <div className="max-w-[1440px] mx-auto">
        {/* DESKTOP */}
        <div className="hidden lg:block pt-[120px] pb-[120px] pl-[80px] pr-[80px]">
          <div className="w-[1280px] max-w-full flex flex-col items-start">
            <FadeUp>
              <p
                className="text-[#6B5F5A] text-[11px] whitespace-pre"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.88px",
                }}
              >
                {a.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <FadeUp delay={0.1}>
              <h2
                className="text-[#2A2520] text-[80px] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  letterSpacing: "-1.6px",
                }}
              >
                {a.headlineLines.map((line, i) => (
                  <span key={i} className="block leading-none">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[56px]" />
            <FadeUp delay={0.22}>
              <div className="h-px w-[80px] bg-[#C4998A]" />
            </FadeUp>
            <div className="h-[56px]" />
            <Stagger
              delay={0.35}
              staggerChildren={0.18}
              className="w-full flex gap-[80px] items-start"
            >
              <StaggerItem>
                <AtBlock label="ONDE" items={a.onde} />
              </StaggerItem>
              <StaggerItem>
                <AtBlock label="COMO" items={a.como} />
              </StaggerItem>
            </Stagger>
          </div>
        </div>

        {/* MOBILE — 49:60 stack */}
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
                {a.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[20px]" />
            <FadeUp delay={0.1}>
              <h2
                className="text-[#2A2520] text-[56px]"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  letterSpacing: "-1.12px",
                }}
              >
                {a.headlineLines.map((line, i) => (
                  <span key={i} className="block leading-none">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[28px]" />
            <FadeUp delay={0.22}>
              <div className="h-px w-[60px] bg-[#C4998A]" />
            </FadeUp>
            <div className="h-[40px]" />
            <Stagger delay={0.35} staggerChildren={0.18} className="w-full flex flex-col gap-[36px]">
              <StaggerItem>
                <AtBlock label="ONDE" items={a.onde} mobile />
              </StaggerItem>
              <StaggerItem>
                <AtBlock label="COMO" items={a.como} mobile />
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function AtBlock({
  label,
  items,
  mobile = false,
}: {
  label: string;
  items: readonly string[];
  mobile?: boolean;
}) {
  return (
    <div className={mobile ? "" : "w-[600px]"}>
      <p
        className="text-[#2A2520] whitespace-pre"
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontWeight: 500,
          fontSize: mobile ? 11 : 11,
          letterSpacing: mobile ? "0.88px" : "0.88px",
        }}
      >
        /  {label}
      </p>
      <div style={{ height: mobile ? 24 : 28 }} />
      <ul className="flex flex-col" style={{ gap: mobile ? 12 : 14 }}>
        {items.map((line, i) => (
          <li
            key={i}
            className="text-[#2A2520]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: mobile ? 15 : 17,
              lineHeight: 1.5,
            }}
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
