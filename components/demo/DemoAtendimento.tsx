"use client";

import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { EASE, DURATION, STAGGER } from "@/lib/motion";

type Props = {
  atendimento: DemoConfig["atendimento"];
};

export function DemoAtendimento({ atendimento }: Props) {
  return (
    <section
      id="atendimento"
      className="relative w-full py-20 md:py-[100px]"
      style={{ background: "var(--demo-bg)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
        <RevealFadeUp>
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            § 05  /  ATENDIMENTO
          </p>
        </RevealFadeUp>

        <div className="mt-10 md:mt-12">
          <LetterReveal
            lines={atendimento.headlineLines}
            className="text-[48px] md:text-[88px] leading-[1.0] tracking-[-0.025em]"
          />
        </div>

        {/* 2-col paralelo ONDE/COMO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: STAGGER.section } },
          }}
          className="mt-16 md:mt-24 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20"
        >
          {atendimento.cols.map((col) => (
            <motion.div
              key={col.header}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.entrance, ease: EASE.outExpo },
                },
              }}
              className="border-t pt-4"
              style={{ borderColor: "var(--demo-accent)" }}
            >
              <p
                className="text-[11px] font-medium tracking-[0.18em]"
                style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
              >
                {col.header}
              </p>
              <div className="mt-8">
                {col.lines.map((line, i) => (
                  <p
                    key={i}
                    className={`text-[16px] md:text-[22px] leading-[1.4] tracking-[-0.01em] ${i > 0 ? "mt-3" : ""}`}
                    style={{ color: "var(--demo-fg)" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
