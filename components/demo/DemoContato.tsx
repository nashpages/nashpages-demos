"use client";

import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  contato: DemoConfig["contato"];
};

export function DemoContato({ contato }: Props) {
  return (
    <section
      id="contato"
      className="relative w-full py-24 md:py-[160px]"
      style={{ background: "var(--demo-bg)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
        <RevealFadeUp>
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            § 06  /  CONTATO
          </p>
        </RevealFadeUp>

        <div className="mt-8 md:mt-12">
          <LetterReveal
            lines={contato.headlineLines}
            className="text-[48px] md:text-[144px] leading-[0.98] tracking-[-0.03em]"
          />
        </div>

        <RevealFadeUp delay={0.3} className="mt-8 md:mt-14">
          <p
            className="text-[16px] md:text-[19px] leading-[1.5]"
            style={{ color: "var(--demo-muted)" }}
          >
            {contato.body.split(". ").map((sentence, i, arr) => (
              <span key={i} className="block">
                {sentence}
                {i < arr.length - 1 ? "." : ""}
              </span>
            ))}
          </p>
        </RevealFadeUp>

        {/* CTA pill grande dourado */}
        <RevealFadeUp delay={0.5} className="mt-10 md:mt-16">
          <motion.a
            href={contato.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: DURATION.hover, ease: EASE.outExpo }}
            className="inline-flex items-center justify-center rounded-full px-8 py-5 text-[12px] md:text-[14px] font-medium tracking-[0.14em] md:tracking-[0.16em]"
            style={{ background: "var(--demo-accent)", color: "var(--demo-bg)" }}
          >
            {contato.primaryCta.label}   →
          </motion.a>
        </RevealFadeUp>

        <RevealFadeUp delay={0.6} className="mt-5 md:mt-7">
          <a
            href="tel:+5548991995583"
            className="text-[11px] md:text-[13px] tracking-[0.14em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            {contato.phoneText}
          </a>
        </RevealFadeUp>

        {/* Links sociais */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.7 } },
          }}
          className="mt-16 md:mt-24 flex flex-col gap-2 md:flex-row md:gap-12"
        >
          {contato.socialLinks.map((link) => (
            <motion.span
              key={link}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.entrance, ease: EASE.outExpo },
                },
              }}
              className="text-[10px] md:text-[11px] tracking-[0.14em]"
              style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
            >
              {link}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
