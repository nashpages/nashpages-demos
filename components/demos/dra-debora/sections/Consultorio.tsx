"use client";

import Image from "next/image";
import { DEBORA_DATA } from "../data";
import { FadeUp, ImageReveal, Stagger, StaggerItem } from "../motion";

export function Consultorio() {
  const { consultorio } = DEBORA_DATA;

  return (
    <section id="consultorio" className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
      {/* ===== DESKTOP — text LEFT + photo RIGHT (mirror UERJ) ===== */}
      <div className="hidden lg:grid grid-cols-[1fr_580px] min-h-[900px]">
        <div className="pt-[120px] pl-[80px] pr-20 pb-[120px]">
          <FadeUp>
            <p
              className="text-[12px] tracking-[0.16em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              {consultorio.eyebrow}
            </p>
          </FadeUp>
          <div className="h-[20px]" />
          <FadeUp delay={0.1}>
            <h2
              className="block"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "72px",
                lineHeight: "1.111",
                letterSpacing: "-0.028em",
                color: "var(--c-grafite)",
                whiteSpace: "pre-line",
              }}
            >
              {consultorio.headlineLines.join("\n")}
            </h2>
          </FadeUp>
          <div className="h-[36px]" />
          <FadeUp delay={0.2}>
            <div className="h-px w-[80px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={0.3}>
            <p
              className="text-[17px] leading-[1.65] max-w-[660px]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
            >
              {consultorio.body}
            </p>
          </FadeUp>
          <div className="h-[80px]" />
          <FadeUp delay={0.4}>
            <div className="h-px w-full max-w-[700px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[24px]" />
          <Stagger delay={0.45} staggerChildren={0.1} className="grid grid-cols-3 gap-6 max-w-[700px]">
            {consultorio.specs.map((s) => (
              <StaggerItem key={s.num}>
                <p
                  className="text-[28px]"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "var(--c-musgo)",
                    letterSpacing: "-0.018em",
                  }}
                >
                  {s.num}
                </p>
                <div className="h-[18px]" />
                <p
                  className="text-[13px] tracking-[0.12em]"
                  style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
                >
                  {s.label}
                </p>
                <div className="h-[10px]" />
                <p
                  className="text-[10px] tracking-[0.11em] leading-[1.6]"
                  style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-nevoa)" }}
                >
                  {s.sub}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <ImageReveal className="relative h-[900px]">
          <Image
            src={consultorio.photo}
            alt="Dra. Débora atendendo"
            fill
            quality={100}
            sizes="(min-width: 1024px) 580px, 100vw"
            className="object-cover object-center"
          />
        </ImageReveal>
      </div>

      {/* ===== MOBILE — stacked: text → photo → specs ===== */}
      <div className="lg:hidden px-6 pt-[80px] pb-[80px]">
        <FadeUp>
          <p
            className="text-[10px] tracking-[0.15em]"
            style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
          >
            {consultorio.eyebrow}
          </p>
        </FadeUp>
        <div className="h-[16px]" />
        <FadeUp delay={0.1}>
          <h2
            className="block"
            style={{
              fontFamily: "var(--font-geist)",
              fontWeight: 500,
              fontSize: "36px",
              lineHeight: "1.167",
              letterSpacing: "-0.033em",
              color: "var(--c-grafite)",
              whiteSpace: "pre-line",
            }}
          >
            {consultorio.headlineLines.join("\n")}
          </h2>
        </FadeUp>
        <div className="h-[28px]" />
        <FadeUp delay={0.2}>
          <div className="h-px w-[60px]" style={{ backgroundColor: "var(--c-musgo)" }} />
        </FadeUp>
        <div className="h-[24px]" />
        <FadeUp delay={0.3}>
          <p
            className="text-[14px] leading-[1.57]"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
          >
            {consultorio.body}
          </p>
        </FadeUp>
        <div className="h-[40px]" />
        <ImageReveal className="relative w-full h-[280px]">
          <Image
            src={consultorio.photo}
            alt="Dra. Débora atendendo"
            fill
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </ImageReveal>
        <div className="h-[36px]" />
        <Stagger staggerChildren={0.1} className="space-y-0">
          <div className="h-px w-full" style={{ backgroundColor: "var(--c-musgo)" }} />
          {consultorio.specs.map((s, i) => (
            <StaggerItem key={s.num}>
              <div className="flex items-start gap-5 py-5">
                <p
                  className="text-[18px] flex-shrink-0 w-[34px]"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "var(--c-musgo)",
                    letterSpacing: "-0.018em",
                  }}
                >
                  {s.num}
                </p>
                <div className="flex-1">
                  <p
                    className="text-[12px] tracking-[0.12em]"
                    style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
                  >
                    {s.label}
                  </p>
                  <div className="h-[6px]" />
                  <p
                    className="text-[9px] tracking-[0.10em] leading-[1.5]"
                    style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-nevoa)" }}
                  >
                    {s.subMobile}
                  </p>
                </div>
              </div>
              {i < consultorio.specs.length - 1 && (
                <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
