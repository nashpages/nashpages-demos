"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { AnimatedUnderline } from "@/components/motion/AnimatedUnderline";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  hero: DemoConfig["hero"];
};

export function DemoHero({ hero }: Props) {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen md:min-h-[1080px] flex flex-col md:flex-row"
      style={{ background: "var(--demo-bg)" }}
    >
      {/* LEFT zone (65%) — texto */}
      <div className="relative z-10 flex flex-1 md:flex-[0_0_65%] flex-col justify-end md:justify-center px-6 pt-24 pb-10 md:px-[120px] md:py-0">
        <RevealFadeUp delay={0.4} className="mb-6">
          <p
            className="text-[11px] font-medium tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            /  {hero.eyebrow}
          </p>
        </RevealFadeUp>

        <LetterReveal
          lines={hero.headlineLines}
          delay={0.6}
          className="text-[40px] md:text-[108px] leading-[0.95] tracking-[-0.025em] font-normal"
          // style applied via tailwind, color via inheritance from body
        />

        <div className="mt-8 md:mt-14 flex flex-col gap-4 md:flex-row md:gap-14">
          <RevealFadeUp delay={1.2}>
            <AnimatedUnderline
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium tracking-[0.14em]"
            >
              {hero.primaryCta.label}  →
            </AnimatedUnderline>
          </RevealFadeUp>
          <RevealFadeUp delay={1.35}>
            <AnimatedUnderline
              href={hero.secondaryCta.href}
              color="rgba(26, 26, 26, 0.3)"
              className="text-[13px] font-medium tracking-[0.14em]"
            >
              {hero.secondaryCta.label}  →
            </AnimatedUnderline>
          </RevealFadeUp>
        </div>

        {/* Meta bar bottom — só desktop */}
        <div className="hidden md:flex absolute bottom-12 left-[120px] right-[120px] items-center justify-between">
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            § 01  /  HERO
          </p>
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            SCROLL  ↓
          </p>
        </div>
      </div>

      {/* RIGHT zone (35%) — foto com parallax + grading cinematográfico */}
      <div className="relative md:flex-[0_0_35%] h-[320px] md:h-auto md:self-stretch order-first md:order-last overflow-hidden">
        <ParallaxLayer range={60} direction="up" className="absolute inset-0">
          <div className="relative h-full w-full md:h-[120%] md:-mt-[10%]">
            <Image
              src={hero.photoSrc}
              alt={`Dr Ricardo Rizzo Luiz`}
              fill
              priority
              quality={92}
              className="object-cover"
              sizes="(min-width: 768px) 35vw, 100vw"
              style={{ filter: "contrast(1.07) saturate(0.93) brightness(0.97)" }}
            />
          </div>
        </ParallaxLayer>
        {/* Vignette overlay — radial soft dark nas bordas pra dar profundidade cinematic */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.18) 100%)",
          }}
        />
      </div>
    </section>
  );
}
