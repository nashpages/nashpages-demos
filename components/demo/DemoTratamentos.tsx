"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { HoverLift } from "@/components/motion/HoverLift";
import { AnimatedUnderline } from "@/components/motion/AnimatedUnderline";
import { EASE, DURATION, STAGGER } from "@/lib/motion";

type Props = {
  tratamentos: DemoConfig["tratamentos"];
};

export function DemoTratamentos({ tratamentos }: Props) {
  return (
    <section
      id="tratamentos"
      className="relative w-full py-20 md:py-[120px]"
      style={{ background: "var(--demo-bg)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
        {/* Eyebrow */}
        <RevealFadeUp>
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            § 03  /  TRATAMENTOS
          </p>
        </RevealFadeUp>

        {/* Headline */}
        <div className="mt-12 md:mt-12">
          <LetterReveal
            lines={tratamentos.headlineLines}
            className="text-[38px] md:text-[64px] leading-[1.04] tracking-[-0.025em]"
          />
        </div>

        {/* Grid 3 cards (stagger entrance) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: STAGGER.card, delayChildren: 0.2 } },
          }}
          className="mt-16 md:mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6"
        >
          {tratamentos.items.map((item) => (
            <motion.div
              key={item.num}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.entrance, ease: EASE.outExpo },
                },
              }}
            >
              <HoverLift className="cursor-default">
                {/* Foto top */}
                <div className="relative aspect-[384/420] overflow-hidden">
                  <Image
                    src={item.photoSrc}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>

                {/* Body */}
                <div className="mt-7">
                  <p
                    className="text-[28px] md:text-[32px] font-medium"
                    style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
                  >
                    {item.num}
                  </p>
                  <p
                    className="mt-3 md:mt-4 text-[18px] md:text-[22px] font-medium tracking-[0.08em]"
                    style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="mt-4 md:mt-5 text-[14px] md:text-[15px] leading-[1.6]"
                    style={{ color: "var(--demo-muted)" }}
                  >
                    {item.body}
                  </p>
                  <div className="mt-5 md:mt-6">
                    <AnimatedUnderline className="text-[10px] md:text-[11px] font-medium tracking-[0.16em]">
                      <span style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}>
                        VER DETALHES  →
                      </span>
                    </AnimatedUnderline>
                  </div>
                </div>
              </HoverLift>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
