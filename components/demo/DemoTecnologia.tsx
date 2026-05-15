"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { EASE, DURATION, STAGGER } from "@/lib/motion";

type Props = {
  tecnologia: DemoConfig["tecnologia"];
};

export function DemoTecnologia({ tecnologia }: Props) {
  return (
    <section
      id="tecnologia"
      className="relative w-full"
      style={{ background: "var(--demo-bg)" }}
    >
      {/* Top 50% — foto consultório com parallax */}
      <div className="relative h-[320px] md:h-[540px] overflow-hidden">
        <ParallaxLayer range={80} direction="up" className="absolute inset-0">
          <div className="relative h-full w-full md:h-[120%] md:-mt-[10%]">
            <Image
              src={tecnologia.photoSrc}
              alt="Consultório do Dr Ricardo Rizzo Luiz"
              fill
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </ParallaxLayer>
      </div>

      {/* Bottom 50% — texto */}
      <div className="py-20 md:py-[100px]">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
          <RevealFadeUp>
            <p
              className="text-[10px] md:text-[11px] tracking-[0.16em]"
              style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
            >
              § 04  /  TECNOLOGIA EM CONSULTÓRIO
            </p>
          </RevealFadeUp>

          {/* 2-col: headline left + body+specs right */}
          <div className="mt-8 md:mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <LetterReveal
                lines={tecnologia.headlineLines}
                className="text-[38px] md:text-[56px] leading-[1.04] tracking-[-0.025em]"
              />
            </div>

            <div>
              <RevealFadeUp delay={0.2}>
                <p
                  className="text-[14px] md:text-[17px] leading-[1.6]"
                  style={{ color: "var(--demo-muted)" }}
                >
                  {tecnologia.body}
                </p>
              </RevealFadeUp>

              {/* 3 specs */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: STAGGER.card, delayChildren: 0.4 },
                  },
                }}
                className="mt-8 md:mt-12 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-8"
              >
                {tecnologia.specs.map((spec) => (
                  <motion.div
                    key={spec.num}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: DURATION.entrance, ease: EASE.outExpo },
                      },
                    }}
                    className="border-t pt-3 md:pt-3.5 flex md:flex-col gap-3 md:gap-1.5"
                    style={{ borderColor: "var(--demo-accent)" }}
                  >
                    <p
                      className="text-[11px] font-medium"
                      style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
                    >
                      {spec.num}
                    </p>
                    <div className="flex flex-col gap-1">
                      <p
                        className="text-[10px] md:text-[11px] font-medium tracking-[0.14em]"
                        style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
                      >
                        {spec.label}
                      </p>
                      <p
                        className="text-[10px] tracking-[0.12em]"
                        style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
                      >
                        {spec.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
