"use client";

import { DEBORA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Atendimento() {
  const { atendimento } = DEBORA_DATA;

  return (
    <section className="w-full" style={{ backgroundColor: "var(--c-concreto)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ===== DESKTOP ===== */}
        <div className="hidden lg:block pt-[120px] pb-[120px] px-[80px]">
          <FadeUp>
            <p
              className="text-[12px] tracking-[0.16em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              {atendimento.eyebrow}
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
              {atendimento.headlineLines.join("\n")}
            </h2>
          </FadeUp>
          <div className="h-[44px]" />
          <FadeUp delay={0.2}>
            <div className="h-px w-[80px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[44px]" />
          <Stagger delay={0.3} staggerChildren={0.15} className="grid grid-cols-2 gap-x-20">
            <StaggerItem>
              <p
                className="text-[13px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
              >
                /  ONDE
              </p>
              <div className="h-[36px]" />
              <ul className="space-y-2.5">
                {atendimento.onde.map((line, i) => (
                  <li
                    key={i}
                    className="text-[17px] leading-[1.5]"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem>
              <p
                className="text-[13px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
              >
                /  COMO
              </p>
              <div className="h-[36px]" />
              <ul className="space-y-2.5">
                {atendimento.como.map((line, i) => (
                  <li
                    key={i}
                    className="text-[17px] leading-[1.5]"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </Stagger>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="lg:hidden px-6 pt-[80px] pb-[80px]">
          <FadeUp>
            <p
              className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              {atendimento.eyebrow}
            </p>
          </FadeUp>
          <div className="h-[16px]" />
          <FadeUp delay={0.1}>
            <h2
              className="block"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "44px",
                lineHeight: "1.091",
                letterSpacing: "-0.034em",
                color: "var(--c-grafite)",
                whiteSpace: "pre-line",
              }}
            >
              {atendimento.headlineLines.join("\n")}
            </h2>
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={0.2}>
            <div className="h-px w-[60px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[40px]" />
          <FadeUp delay={0.3}>
            <p
              className="text-[12px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
            >
              /  ONDE
            </p>
            <div className="h-[20px]" />
            <ul className="space-y-2">
              {atendimento.onde.map((line, i) => (
                <li
                  key={i}
                  className="text-[14px] leading-[1.57]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
                >
                  {line}
                </li>
              ))}
            </ul>
          </FadeUp>
          <div className="h-[36px]" />
          <FadeUp delay={0.4}>
            <p
              className="text-[12px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
            >
              /  COMO
            </p>
            <div className="h-[20px]" />
            <ul className="space-y-2">
              {atendimento.comoMobile.map((line, i) => (
                <li
                  key={i}
                  className="text-[14px] leading-[1.57]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
                >
                  {line}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
