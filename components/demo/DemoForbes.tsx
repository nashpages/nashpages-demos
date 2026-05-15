"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { AnimatedUnderline } from "@/components/motion/AnimatedUnderline";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  forbes: NonNullable<DemoConfig["forbes"]>;
};

export function DemoForbes({ forbes }: Props) {
  return (
    <section
      id="forbes"
      className="relative w-full min-h-[800px] md:min-h-[1080px] flex flex-col md:flex-row"
      style={{ background: "var(--demo-bg)" }}
    >
      {/* LEFT 50% — capa Forbes (dark) com parallax */}
      <div className="relative md:flex-[0_0_50%] h-[470px] md:h-auto md:self-stretch order-first overflow-hidden">
        <ParallaxLayer range={40} direction="up" className="absolute inset-0">
          <div className="relative h-full w-full md:h-[110%] md:-mt-[5%]">
            <Image
              src={forbes.coverSrc}
              alt="Destaque Forbes Latina 2025"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </ParallaxLayer>
      </div>

      {/* RIGHT 50% — texto editorial */}
      <div className="relative z-10 flex flex-1 md:flex-[0_0_50%] flex-col justify-center px-6 py-14 md:px-20 md:py-[160px]">
        {/* Eyebrow gold */}
        <RevealFadeUp>
          <p
            className="text-[10px] md:text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
          >
            /  {forbes.eyebrow}
          </p>
        </RevealFadeUp>

        {/* Headline */}
        <div className="mt-6 md:mt-10">
          <LetterReveal
            lines={forbes.headlineLines}
            className="text-[28px] md:text-[56px] leading-[1.0] tracking-[-0.02em]"
          />
        </div>

        {/* Divider gold */}
        <RevealFadeUp delay={0.2} className="mt-8 md:mt-12">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: DURATION.entrance, ease: EASE.outExpo, delay: 0.2 }}
            style={{
              background: "var(--demo-accent)",
              transformOrigin: "left",
              height: 1,
              width: 40,
            }}
            className="md:w-[56px]"
          />
        </RevealFadeUp>

        {/* Body */}
        <RevealFadeUp delay={0.3} className="mt-6 md:mt-10">
          <p
            className="text-[14px] md:text-[17px] leading-[1.6]"
            style={{ color: "var(--demo-muted)" }}
          >
            {forbes.body}
          </p>
        </RevealFadeUp>

        {/* CTA underline */}
        <RevealFadeUp delay={0.45} className="mt-8 md:mt-14">
          <AnimatedUnderline
            href={forbes.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] md:text-[13px] font-medium tracking-[0.14em]"
          >
            {forbes.cta.label}  →
          </AnimatedUnderline>
        </RevealFadeUp>

        {/* Strip mídia */}
        <RevealFadeUp delay={0.6} className="mt-10 md:mt-20">
          <div className="flex flex-wrap items-center gap-5 md:gap-8">
            {forbes.midiaItems.map((item) => (
              <span
                key={item}
                className="text-[9px] md:text-[10px] tracking-[0.14em]"
                style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </RevealFadeUp>
      </div>
    </section>
  );
}
