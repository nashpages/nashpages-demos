"use client";

import { DEBORA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Sobre() {
  const { sobre } = DEBORA_DATA;

  return (
    <section id="sobre" className="w-full" style={{ backgroundColor: "var(--c-concreto)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ===== DESKTOP ===== */}
        <div className="hidden lg:block pt-[120px] pb-[120px] px-[80px]">
          <FadeUp>
            <p
              className="text-[12px] tracking-[0.16em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              {sobre.eyebrow}
            </p>
          </FadeUp>
          <div className="h-[16px]" />
          <FadeUp delay={0.1}>
            <h2
              className="block"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "84px",
                lineHeight: "1.095",
                letterSpacing: "-0.030em",
                color: "var(--c-grafite)",
                whiteSpace: "pre-line",
              }}
            >
              {sobre.headlineLines.join("\n")}
            </h2>
          </FadeUp>
          <div className="h-[44px]" />
          <FadeUp delay={0.2}>
            <div className="h-px w-[80px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[28px]" />
          <Stagger delay={0.3} staggerChildren={0.15} className="grid grid-cols-2 gap-x-20">
            <StaggerItem>
              <p
                className="block"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "38px",
                  lineHeight: "1.26",
                  letterSpacing: "-0.013em",
                  color: "var(--c-grafite)",
                  whiteSpace: "pre-line",
                }}
              >
                {sobre.quote.lines.join("\n")}
              </p>
              <div className="h-[40px]" />
              <p
                className="text-[11px] tracking-[0.16em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-nevoa)" }}
              >
                {sobre.quote.attribution}
              </p>
              <div className="mt-[10px] h-[2px] w-[40px]" style={{ backgroundColor: "var(--c-musgo)" }} />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-7">
                {sobre.bio.map((p, i) => (
                  <p
                    key={i}
                    className="text-[16px] leading-[1.625]"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </StaggerItem>
          </Stagger>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="lg:hidden px-6 pt-[80px] pb-[80px]">
          <FadeUp>
            <p
              className="text-[10px] tracking-[0.16em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              {sobre.eyebrow}
            </p>
          </FadeUp>
          <div className="h-[16px]" />
          <FadeUp delay={0.1}>
            <h2
              className="block"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "1.1",
                letterSpacing: "-0.030em",
                color: "var(--c-grafite)",
                whiteSpace: "pre-line",
              }}
            >
              {sobre.headlineLines.join("\n")}
            </h2>
          </FadeUp>
          <div className="h-[32px]" />
          <FadeUp delay={0.2}>
            <div className="h-px w-[60px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[24px]" />
          <FadeUp delay={0.3}>
            <p
              className="block"
              style={{
                fontFamily: "var(--font-inter)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "24px",
                lineHeight: "1.33",
                letterSpacing: "-0.013em",
                color: "var(--c-grafite)",
                whiteSpace: "pre-line",
              }}
            >
              {sobre.quote.lines.join("\n")}
            </p>
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={0.4}>
            <p
              className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-nevoa)" }}
            >
              {sobre.quote.attribution}
            </p>
            <div className="mt-[8px] h-[2px] w-[32px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[32px]" />
          <div className="space-y-5">
            {sobre.bio.map((p, i) => (
              <FadeUp key={i} delay={0.5 + i * 0.1}>
                <p
                  className="text-[14px] leading-[1.57]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
                >
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
