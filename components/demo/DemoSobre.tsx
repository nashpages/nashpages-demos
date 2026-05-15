"use client";

import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { TypewriterReveal } from "@/components/motion/TypewriterReveal";
import { SignatureReveal } from "@/components/motion/SignatureReveal";
import { EASE, DURATION, STAGGER } from "@/lib/motion";

type Props = {
  sobre: DemoConfig["sobre"];
};

export function DemoSobre({ sobre }: Props) {
  return (
    <section
      id="sobre"
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
            § 02  /  SOBRE O DR RICARDO
          </p>
        </RevealFadeUp>

        {/* Headline */}
        <div className="mt-12 md:mt-14">
          <LetterReveal
            lines={sobre.headlineLines}
            className="text-[32px] md:text-[88px] leading-[1.0] tracking-[-0.025em]"
          />
        </div>

        {/* Divider gold (draw-in) */}
        <RevealFadeUp delay={0.3} className="mt-10 md:mt-14">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: DURATION.entrance, ease: EASE.outExpo, delay: 0.2 }}
            style={{
              background: "var(--demo-accent)",
              transformOrigin: "left",
              height: 1,
              width: 56,
            }}
            className="md:w-[80px]"
          />
        </RevealFadeUp>

        {/* 2-col: quote left + bio right */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p
              className="text-[24px] md:text-[36px] leading-[1.1] tracking-[-0.01em] italic"
              style={{ color: "var(--demo-fg)" }}
            >
              <TypewriterReveal
                text={`"${sobre.quote.text}"`}
                charStagger={0.04}
              />
            </p>
            <p
              className="mt-5 text-[11px] tracking-[0.14em]"
              style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
            >
              <SignatureReveal duration={1.0} delay={0.6}>
                {sobre.quote.attribution}
              </SignatureReveal>
            </p>
          </div>

          <div>
            {sobre.bio.map((para, i) => (
              <RevealFadeUp key={i} delay={0.1 * i} className={i > 0 ? "mt-6" : ""}>
                <p
                  className="text-[15px] md:text-[17px] leading-[1.6]"
                  style={{ color: "var(--demo-muted)" }}
                >
                  {para}
                </p>
              </RevealFadeUp>
            ))}
          </div>
        </div>

        {/* Strip 5 credenciais — horizontal desktop, vertical mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: STAGGER.card, delayChildren: 0.1 },
            },
          }}
          className="mt-16 md:mt-24 grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-6"
        >
          {sobre.credentials.map((cred) => (
            <motion.div
              key={cred.num}
              variants={{
                hidden: { opacity: 0, y: 16 },
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
                className="text-[24px] md:text-[28px] font-medium"
                style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
              >
                {cred.num}
              </p>
              <p
                className="mt-4 text-[10px] font-medium tracking-[0.14em]"
                style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
              >
                {cred.label}
              </p>
              <p
                className="mt-1 text-[10px] tracking-[0.12em]"
                style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
              >
                {cred.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
