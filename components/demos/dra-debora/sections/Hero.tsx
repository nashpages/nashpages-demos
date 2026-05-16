"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { DEBORA_DATA } from "../data";
import { FadeUp, WordReveal } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = DEBORA_DATA;
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative w-full overflow-hidden">
      {/* ============================================================
          DESKTOP — Figma 12:3 (1440 × 720)
          - bg: IDEIA 1 expanded photo full-bleed (hero-bg.png)
          - text LEFT @ x=80 y=200 over warm-bg natural area
          - foto da Débora visível à direita (parte da bg image)
          - meta bar bottom @ y=670
          ============================================================ */}
      <div className="hidden lg:block relative w-full h-[720px]">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.04 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
          >
            <Image
              src={hero.photoExpanded}
              alt="Dra. Débora Soares — Dermatologia"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* TEXT zone */}
        <div className="relative h-full max-w-[1440px] mx-auto">
          <div className="absolute left-[80px] top-[200px] max-w-[680px]">
            <FadeUp delay={0.2}>
              <p
                className="text-[11px] tracking-[0.16em]"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  color: "var(--c-musgo)",
                }}
              >
                /  {hero.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[24px]" />
            <WordReveal
              lines={hero.headlineLines}
              delay={0.3}
              stagger={0.09}
              className="block"
              lineClassName="leading-[1.09]"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "clamp(64px, 6.4vw, 88px)",
                letterSpacing: "-0.028em",
                color: "var(--c-grafite)",
              }}
            />
            <div className="h-[28px]" />
            <FadeUp delay={0.9}>
              <p
                className="text-[15px] leading-[1.6] max-w-[520px]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  color: "var(--c-nevoa)",
                }}
              >
                {hero.subline}
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <FadeUp delay={1.05}>
              <div className="flex gap-10">
                <CtaUnderline
                  href={hero.primaryCta.href}
                  label={hero.primaryCta.label}
                  underlineColor="var(--c-musgo)"
                  underlineHeight={1.5}
                />
                <CtaUnderline
                  href={hero.secondaryCta.href}
                  label={hero.secondaryCta.label}
                  underlineColor="var(--c-nevoa)"
                  underlineHeight={1}
                />
              </div>
            </FadeUp>
          </div>

          {/* Meta bar bottom */}
          <div className="absolute left-[80px] right-[80px] bottom-[50px]">
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
            <FadeUp delay={1.2}>
              <div className="mt-5 flex justify-between text-[10px] tracking-[0.11em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-nevoa)" }}>
                {hero.meta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE — Figma 25:2 (375 × 800)
          - foto retrato-hero full-bleed top 440h with gradient overlay
          - nav DRA. DÉBORA + MENU branco sobre overlay
          - content abaixo: eyebrow + headline + CTA pill + secondary link
          ============================================================ */}
      <div className="lg:hidden relative w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
        <motion.div
          className="relative w-full h-[440px] overflow-hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.08 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
          >
            <Image
              src={hero.photoMobile}
              alt="Dra. Débora Soares"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-[center_top]"
            />
          </motion.div>
          {/* Gradient overlay for nav contrast */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[140px] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(46,45,41,0.55) 0%, rgba(46,45,41,0) 100%)",
            }}
          />
        </motion.div>

        <div className="px-6 pt-10 pb-12">
          <FadeUp delay={0.2}>
            <p
              className="text-[9px] tracking-[0.13em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              /  {hero.eyebrow}
            </p>
          </FadeUp>
          <div className="h-[16px]" />
          <WordReveal
            lines={hero.headlineLines.map((l) =>
              l.replace("Diagnóstico clínico", "Diagnóstico\nclínico").replace("para cada pele.", "para cada\npele.")
            )}
            delay={0.35}
            stagger={0.07}
            className="block"
            lineClassName="leading-[1.1]"
            style={{
              fontFamily: "var(--font-geist)",
              fontWeight: 500,
              fontSize: "40px",
              letterSpacing: "-0.03em",
              color: "var(--c-grafite)",
              whiteSpace: "pre-line",
            }}
          />
          <div className="h-[32px]" />
          <FadeUp delay={0.9}>
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center rounded-full py-4 px-6 text-[11px] tracking-[0.16em] transition-opacity hover:opacity-90"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                backgroundColor: "var(--c-musgo)",
                color: "var(--c-pedra)",
              }}
            >
              {hero.primaryCta.label}  →
            </a>
          </FadeUp>
          <div className="h-[20px]" />
          <FadeUp delay={1.05}>
            <a
              href={hero.secondaryCta.href}
              className="text-[11px] tracking-[0.16em] inline-block"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "var(--c-nevoa)",
              }}
            >
              {hero.secondaryCta.label}  →
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function CtaUnderline({
  href,
  label,
  underlineColor,
  underlineHeight,
}: {
  href: string;
  label: string;
  underlineColor: string;
  underlineHeight: number;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group inline-flex flex-col gap-[10px]"
    >
      <span
        className="text-[12px] tracking-[0.16em] whitespace-pre transition-transform duration-300 group-hover:translate-x-1"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontWeight: 500,
          color: "var(--c-grafite)",
        }}
      >
        {label}  →
      </span>
      <span
        className="origin-left transition-transform duration-500 group-hover:scale-x-110"
        style={{
          height: `${underlineHeight}px`,
          backgroundColor: underlineColor,
          width: label === "AGENDAR CONSULTA" ? "220px" : "190px",
        }}
      />
    </a>
  );
}
