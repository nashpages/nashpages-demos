"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { DemoConfig } from "@/lib/types";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { AnimatedUnderline } from "@/components/motion/AnimatedUnderline";

type Props = {
  hero: DemoConfig["hero"];
};

export function DemoHero({ hero }: Props) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // ≥1024px (lg) — pra iPad portrait/landscape pequeno usar layout vertical
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="top"
      className="relative w-full min-h-screen lg:min-h-[1080px] flex flex-col lg:flex-row"
      style={{ background: "var(--demo-bg)" }}
    >
      {/* LEFT zone (65%) — texto.
          Padding-left dinâmico: em viewport ≤1440 = 120px (Figma), em >1440 = (vw-1440)/2 + 120
          → alinha com text de TODAS as outras sections (que usam max-w-[1440px] mx-auto + px-120). */}
      <div className="relative z-10 flex flex-1 lg:flex-[0_0_65%] flex-col justify-start lg:justify-center px-6 pt-8 pb-10 lg:py-0 lg:pl-[max(120px,calc((100vw-1440px)/2+120px))] lg:pr-[48px]">
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
          className="text-[40px] md:text-[72px] lg:text-[108px] leading-[0.95] tracking-[-0.025em] font-normal"
        />

        <div className="mt-8 lg:mt-14 flex flex-col gap-4 lg:flex-row lg:gap-14">
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

        {/* Meta bar bottom — alinhado com padding do parent (matches Hero text columns) */}
        <div className="hidden lg:flex absolute bottom-12 left-[max(120px,calc((100vw-1440px)/2+120px))] right-[48px] items-center justify-between">
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

      {/* RIGHT zone (35%) — foto com parallax leve (só desktop lg+) + grading cinematográfico.
          Reduzido overshoot 120%→105% e parallax range 60→24 pra foto ficar com zoom natural. */}
      <div className="relative lg:flex-[0_0_35%] h-[420px] md:h-[520px] lg:h-auto lg:self-stretch order-first lg:order-last overflow-hidden">
        <ParallaxLayer range={isDesktop ? 24 : 0} direction="up" className="absolute inset-0">
          <div className="relative h-full w-full lg:h-[105%] lg:-mt-[2.5%]">
            <Image
              src={hero.photoSrc}
              alt={`Dr Ricardo Rizzo Luiz`}
              fill
              priority
              quality={100}
              className="object-cover object-top lg:object-center"
              sizes="(min-width: 1024px) 35vw, 100vw"
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
