"use client";

import { DEBORA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem, WordReveal } from "../motion";

export function Contato() {
  const { contato } = DEBORA_DATA;

  return (
    <section id="contato" className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ===== DESKTOP ===== */}
        <div className="hidden lg:grid grid-cols-[760px_1fr] gap-20 pt-[120px] pb-[120px] px-[80px]">
          <div>
            <FadeUp>
              <p
                className="text-[12px] tracking-[0.16em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
              >
                {contato.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[20px]" />
            <WordReveal
              lines={contato.headlineLines}
              delay={0.15}
              stagger={0.1}
              className="block"
              lineClassName="leading-[1.047]"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "clamp(96px, 9.2vw, 128px)",
                letterSpacing: "-0.031em",
                color: "var(--c-grafite)",
              }}
            />
            <div className="h-[40px]" />
            <FadeUp delay={0.5}>
              <p
                className="text-[24px] italic"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  letterSpacing: "-0.013em",
                  color: "var(--c-musgo)",
                }}
              >
                {contato.accent}
              </p>
            </FadeUp>
          </div>
          <div className="pt-[30px] max-w-[440px]">
            <FadeUp>
              <p
                className="text-[17px] leading-[1.65]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
              >
                {contato.body}
              </p>
            </FadeUp>
            <div className="h-[28px]" />
            <FadeUp delay={0.1}>
              <a
                href={contato.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full py-[18px] px-8 text-[13px] tracking-[0.16em] transition-opacity hover:opacity-90"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  backgroundColor: "var(--c-musgo)",
                  color: "var(--c-pedra)",
                }}
              >
                {contato.cta.label}  →
              </a>
            </FadeUp>
            <div className="h-[36px]" />
            <FadeUp delay={0.2}>
              <div className="h-px w-[60px]" style={{ backgroundColor: "var(--c-musgo)" }} />
            </FadeUp>
            <div className="h-[16px]" />
            <FadeUp delay={0.25}>
              <p
                className="block"
                style={{
                  fontFamily: "var(--font-geist)",
                  fontWeight: 500,
                  fontSize: "32px",
                  letterSpacing: "-0.031em",
                  color: "var(--c-grafite)",
                }}
              >
                {contato.phoneLine}
              </p>
              <div className="h-[10px]" />
              <p
                className="text-[11px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-nevoa)" }}
              >
                {contato.phoneLabel}
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <FadeUp delay={0.35}>
              <p
                className="text-[13px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
              >
                /  REDES
              </p>
            </FadeUp>
            <div className="h-[18px]" />
            <Stagger delay={0.4} staggerChildren={0.08} className="space-y-2">
              {contato.socials.map((s) => (
                <StaggerItem key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[20px] transition-opacity hover:opacity-70"
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontWeight: 300,
                      letterSpacing: "-0.025em",
                      color: "var(--c-grafite)",
                    }}
                  >
                    {s.label}
                  </a>
                </StaggerItem>
              ))}
              <StaggerItem>
                <p
                  className="text-[16px]"
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: 300,
                    letterSpacing: "-0.019em",
                    color: "var(--c-nevoa)",
                  }}
                >
                  {contato.fixedNote}
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="lg:hidden px-6 pt-[80px] pb-[80px]">
          <FadeUp>
            <p
              className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              {contato.eyebrow}
            </p>
          </FadeUp>
          <div className="h-[16px]" />
          <WordReveal
            lines={contato.headlineLines}
            delay={0.15}
            stagger={0.1}
            className="block"
            lineClassName="leading-[1.063]"
            style={{
              fontFamily: "var(--font-geist)",
              fontWeight: 500,
              fontSize: "64px",
              letterSpacing: "-0.031em",
              color: "var(--c-grafite)",
            }}
          />
          <div className="h-[28px]" />
          <FadeUp delay={0.5}>
            <p
              className="text-[18px] italic"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                letterSpacing: "-0.011em",
                color: "var(--c-musgo)",
              }}
            >
              {contato.accent}
            </p>
          </FadeUp>
          <div className="h-[40px]" />
          <FadeUp delay={0.6}>
            <div className="h-px w-[60px]" style={{ backgroundColor: "var(--c-musgo)" }} />
          </FadeUp>
          <div className="h-[24px]" />
          <FadeUp delay={0.65}>
            <p
              className="text-[14px] leading-[1.57]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-grafite)" }}
            >
              {contato.body}
            </p>
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={0.7}>
            <a
              href={contato.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center rounded-full py-[18px] px-6 text-[12px] tracking-[0.16em] transition-opacity hover:opacity-90"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                backgroundColor: "var(--c-musgo)",
                color: "var(--c-pedra)",
              }}
            >
              {contato.cta.label}  →
            </a>
          </FadeUp>
          <div className="h-[40px]" />
          <FadeUp delay={0.8}>
            <p
              className="block"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "28px",
                letterSpacing: "-0.028em",
                color: "var(--c-grafite)",
              }}
            >
              {contato.phoneLine}
            </p>
            <div className="h-[8px]" />
            <p
              className="text-[10px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-nevoa)" }}
            >
              {contato.phoneLabel}
            </p>
          </FadeUp>
          <div className="h-[36px]" />
          <FadeUp delay={0.85}>
            <p
              className="text-[12px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-grafite)" }}
            >
              /  REDES
            </p>
          </FadeUp>
          <div className="h-[16px]" />
          <Stagger delay={0.9} staggerChildren={0.06} className="space-y-2">
            {contato.socials.map((s) => (
              <StaggerItem key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[18px] transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: 300,
                    letterSpacing: "-0.019em",
                    color: "var(--c-grafite)",
                  }}
                >
                  {s.label}
                </a>
              </StaggerItem>
            ))}
            <StaggerItem>
              <p
                className="text-[14px]"
                style={{
                  fontFamily: "var(--font-geist)",
                  fontWeight: 300,
                  letterSpacing: "-0.013em",
                  color: "var(--c-nevoa)",
                }}
              >
                {contato.fixedNote}
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
