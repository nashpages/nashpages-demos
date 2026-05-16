"use client";

import { DEBORA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Tratamentos() {
  const { tratamentos } = DEBORA_DATA;

  return (
    <section id="tratamentos" className="w-full" style={{ backgroundColor: "var(--c-concreto)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ===== DESKTOP — 3 cards horizontal ===== */}
        <div className="hidden lg:block pt-[120px] pb-[120px] px-[80px]">
          <FadeUp>
            <p
              className="text-[12px] tracking-[0.16em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              {tratamentos.eyebrow}
            </p>
          </FadeUp>
          <div className="h-[16px]" />
          <FadeUp delay={0.1}>
            <h2
              className="block"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "80px",
                lineHeight: "1.1",
                letterSpacing: "-0.031em",
                color: "var(--c-grafite)",
                whiteSpace: "pre-line",
              }}
            >
              {tratamentos.headlineLines.join("\n")}
            </h2>
          </FadeUp>
          <div className="h-[44px]" />
          <FadeUp delay={0.2}>
            <div className="h-px w-[80px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[80px]" />
          <Stagger staggerChildren={0.15} className="grid grid-cols-3 gap-[70px]">
            {tratamentos.cards.map((c) => (
              <StaggerItem key={c.num}>
                <div className="h-px w-full mb-7" style={{ backgroundColor: "var(--c-musgo)" }} />
                <p
                  className="block"
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: 300,
                    fontSize: "120px",
                    lineHeight: 1,
                    letterSpacing: "-0.033em",
                    color: "var(--c-musgo)",
                  }}
                >
                  {c.num}
                </p>
                <div className="h-[44px]" />
                <p
                  className="text-[13px] tracking-[0.12em]"
                  style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
                >
                  {c.label}
                </p>
                <div className="h-[12px]" />
                <p
                  className="text-[15px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
                >
                  {c.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ===== MOBILE — 3 cards stacked vertical ===== */}
        <div className="lg:hidden px-6 pt-[80px] pb-[80px]">
          <FadeUp>
            <p
              className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              {tratamentos.eyebrow}
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
              {tratamentos.headlineLines.join("\n")}
            </h2>
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={0.2}>
            <div className="h-px w-[60px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[40px]" />
          <Stagger staggerChildren={0.12} className="space-y-12">
            {tratamentos.cards.map((c) => (
              <StaggerItem key={c.num}>
                <div className="h-px w-full mb-5" style={{ backgroundColor: "var(--c-musgo)" }} />
                <p
                  className="block"
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: 300,
                    fontSize: "88px",
                    lineHeight: 1,
                    letterSpacing: "-0.034em",
                    color: "var(--c-musgo)",
                  }}
                >
                  {c.num}
                </p>
                <div className="h-[32px]" />
                <p
                  className="text-[12px] tracking-[0.12em]"
                  style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
                >
                  {c.label}
                </p>
                <div className="h-[10px]" />
                <p
                  className="text-[14px] leading-[1.57]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
                >
                  {c.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
