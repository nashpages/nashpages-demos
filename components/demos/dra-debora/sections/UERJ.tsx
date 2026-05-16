"use client";

import Image from "next/image";
import { DEBORA_DATA } from "../data";
import { FadeUp, ImageReveal, Stagger, StaggerItem } from "../motion";

export function UERJ() {
  const { uerj } = DEBORA_DATA;

  return (
    <section className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
      {/* ===== DESKTOP — split foto LEFT + content RIGHT ===== */}
      <div className="hidden lg:grid grid-cols-[580px_1fr] min-h-[900px]">
        <ImageReveal className="relative h-[900px]">
          <Image
            src={uerj.photo}
            alt="Dra. Débora Soares"
            fill
            quality={100}
            sizes="(min-width: 1024px) 580px, 100vw"
            className="object-cover object-center"
          />
        </ImageReveal>
        <div className="pt-[120px] pl-20 pr-20 pb-[120px]">
          <FadeUp>
            <p
              className="text-[11px] tracking-[0.16em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              /  {uerj.eyebrow}
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
              {uerj.headlineLines.join("\n")}
            </h2>
          </FadeUp>
          <div className="h-[36px]" />
          <FadeUp delay={0.2}>
            <div className="h-px w-[80px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[28px]" />
          <Stagger delay={0.3} staggerChildren={0.1} className="space-y-7 max-w-[660px]">
            {uerj.body.map((p, i) => (
              <StaggerItem key={i}>
                <p
                  className="text-[17px] leading-[1.65]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
                >
                  {p}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="h-[60px]" />
          <FadeUp delay={0.5}>
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[24px]" />
          <Stagger delay={0.55} staggerChildren={0.1} className="grid grid-cols-3 gap-6">
            {uerj.credentials.map((c) => (
              <StaggerItem key={c.num}>
                <p
                  className="text-[28px]"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "var(--c-musgo)",
                    letterSpacing: "-0.018em",
                  }}
                >
                  {c.num}
                </p>
                <div className="h-[18px]" />
                <p
                  className="text-[13px] tracking-[0.12em]"
                  style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
                >
                  {c.label}
                </p>
                <div className="h-[10px]" />
                <p
                  className="text-[10px] tracking-[0.11em] leading-[1.6]"
                  style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-nevoa)" }}
                >
                  {c.sub}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* ===== MOBILE — photo top + content below ===== */}
      <div className="lg:hidden">
        <ImageReveal className="relative w-full h-[380px]">
          <Image
            src={uerj.photo}
            alt="Dra. Débora Soares"
            fill
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </ImageReveal>
        <div className="px-6 pt-10 pb-[80px]">
          <FadeUp>
            <p
              className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              /  {uerj.eyebrowMobile}
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
              {uerj.headlineLines.join("\n")}
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
              {uerj.body[0]}
            </p>
          </FadeUp>
          <div className="h-[40px]" />
          <FadeUp delay={0.4}>
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[16px]" />
          <Stagger delay={0.5} staggerChildren={0.08} className="grid grid-cols-3 gap-2">
            {uerj.credentials.map((c) => (
              <StaggerItem key={c.num}>
                <p
                  className="text-[20px]"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "var(--c-musgo)",
                    letterSpacing: "-0.018em",
                  }}
                >
                  {c.num}
                </p>
                <div className="h-[10px]" />
                <p
                  className="text-[11px] tracking-[0.12em]"
                  style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
                >
                  {c.label}
                </p>
                <div className="h-[6px]" />
                <p
                  className="text-[8px] tracking-[0.10em] leading-[1.5]"
                  style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-nevoa)" }}
                >
                  {c.sub}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
