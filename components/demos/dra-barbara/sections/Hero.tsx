"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BARBARA_DATA } from "../data";
import { FadeUp, WordReveal } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = BARBARA_DATA;
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative w-full overflow-hidden">
      {/* ============================================================
          DESKTOP — Figma 7:2 (1440 × 720)
          - bg gradient horizontal #BE988A → #EBD9D1 (65%) → #F9F4EE
          - foto absolute right 0, top 0, w 34% (490/1440), h full
          - content absolute left=64, top=200
          - SEM eyebrow
          - Headline Playfair Regular 110px, leading 0.96, tracking -1.65px
          - Subline Inter Regular 14px
          - CTAs Inter Medium 13px tracking 1.82px white; CTA2 underline 40%
          ============================================================ */}
      <div
        className="hidden lg:block relative w-full h-[720px]"
        style={{
          background:
            "linear-gradient(to right, #BE988A 0%, #EBD9D1 65%, #F9F4EE 100%)",
        }}
      >
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-[34%] overflow-hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <div
            className="absolute inset-0"
            style={{
              // Warming filter (Figma temp 0.15 / exp 0.04 / contrast 0.04 — magazine premium)
              filter: "sepia(0.12) saturate(1.10) brightness(1.04) contrast(1.05)",
            }}
          >
            <Image
              src={hero.photo}
              alt="Dra. Bárbara Pimenta"
              fill
              priority
              quality={100}
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover object-[center_35%]"
            />
          </div>
          {/* Gradient feather overlay — LEFT edge dissolves into cream bg */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(249,244,238,0.75) 0%, rgba(249,244,238,0) 28%)",
            }}
          />
        </motion.div>

        {/* Content reserva o espaço da foto: right=34% (foto) + 64px safety gap.
            Headline com clamp 72→110px pra escalar com viewport e nunca encostar. */}
        <div className="absolute left-[64px] top-[200px] right-[calc(34%+64px)]">
          <WordReveal
            lines={hero.headlineLines}
            delay={0.2}
            stagger={0.09}
            className="text-white block"
            lineClassName="leading-[0.96]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
              fontSize: "clamp(72px, 7.6vw, 110px)",
              letterSpacing: "-0.015em",
            }}
          />
          <FadeUp delay={0.85}>
            <p
              className="mt-8 text-white text-[14px] leading-normal"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
            >
              {hero.subline}
            </p>
          </FadeUp>
          <FadeUp delay={1.0}>
            <div className="mt-10 flex gap-7 flex-wrap">
              <CtaUnderline
                href={hero.primaryCta.href}
                label={hero.primaryCta.label}
                underlineOpacity={1}
              />
              <CtaUnderline
                href={hero.secondaryCta.href}
                label={hero.secondaryCta.label}
                underlineOpacity={0.4}
              />
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ============================================================
          MOBILE — Figma 47:3 (375 × 760)
          - bg gradient vertical #EBD9D1 → #BE9989
          - foto absolute x=0 y=0 w=375 h=440
          - content absolute x=24 y=472 w=327
          - COM eyebrow JetBrains Mono Medium 10px
          - Headline Playfair Regular 40px leading 1.05 tracking -0.8px
          - Subline Inter Regular 14px leading 1.5
          - CTAs JetBrains Mono Medium 11px tracking 1.1px, underline full-width
          ============================================================ */}
      <div
        className="lg:hidden relative w-full h-[760px]"
        style={{
          background: "linear-gradient(to bottom, #EBD9D1 0%, #BE9989 100%)",
        }}
      >
        <motion.div
          className="absolute left-0 top-0 w-full h-[440px] overflow-hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div
            className="absolute inset-0"
            style={{
              filter: "sepia(0.12) saturate(1.10) brightness(1.04) contrast(1.05)",
            }}
          >
            <Image
              src={hero.photo}
              alt="Dra. Bárbara Pimenta"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-[center_35%]"
            />
          </div>
        </motion.div>

        <div className="absolute left-[24px] top-[472px] w-[327px]">
          <FadeUp delay={0.2}>
            <p
              className="text-[#F8F2EA] text-[10px] tracking-[0.08em]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500 }}
            >
              /  {hero.eyebrow}
            </p>
          </FadeUp>
          <div className="h-[20px]" />
          <WordReveal
            lines={hero.headlineLines}
            delay={0.35}
            stagger={0.07}
            className="text-[#F8F2EA] block text-[40px]"
            lineClassName="leading-[1.05]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
              letterSpacing: "-0.8px",
            }}
          />
          <div className="h-[20px]" />
          <FadeUp delay={0.8}>
            <p
              className="text-[#F8F2EA] text-[14px] leading-[1.5]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
            >
              {hero.subline}
            </p>
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={0.95}>
            <div className="flex flex-col gap-3 w-full">
              <CtaUnderlineMobile href={hero.primaryCta.href} label={hero.primaryCta.label} />
              <CtaUnderlineMobile href={hero.secondaryCta.href} label={hero.secondaryCta.label} />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* Desktop CTA — Inter Medium 13px tracking 1.82px (14%) white */
function CtaUnderline({
  href,
  label,
  underlineOpacity,
}: {
  href: string;
  label: string;
  underlineOpacity: number;
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
        className="text-white text-[13px] tracking-[0.14em] whitespace-pre transition-transform duration-300 group-hover:translate-x-1"
        style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
      >
        {label}  →
      </span>
      <span
        className="h-px bg-white origin-left transition-transform duration-500 group-hover:scale-x-110"
        style={{
          opacity: underlineOpacity,
          width: label === "AGENDAR CONSULTA" ? "188px" : "224px",
        }}
      />
    </a>
  );
}

/* Mobile CTA — JetBrains Mono Medium 11px tracking 1.1px (10%) cream */
function CtaUnderlineMobile({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group inline-flex flex-col gap-2 w-full"
    >
      <span
        className="text-[#F8F2EA] text-[11px] tracking-[0.1em] whitespace-pre transition-transform duration-300 group-hover:translate-x-1"
        style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500 }}
      >
        {label}  →
      </span>
      <span className="h-px w-full bg-[#F8F2EA] origin-left transition-transform duration-500 group-hover:scale-x-105" />
    </a>
  );
}
