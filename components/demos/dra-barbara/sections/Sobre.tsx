"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BARBARA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem, WordReveal } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

/* §02 Sobre — Figma 15:2 (desktop) / 47:22 (mobile)
   Desktop:
   - bg #F8F2EA, content absolute left=80 top=120 w=1280
   - eyebrow JetBrains Mono REGULAR 11px tracking 1.76px (16%) #6B5F5A
   - spacer 40
   - headline Playfair Regular 92px leading-none tracking -1.38px #2A2520
   - spacer 48 + divider w=80 #C4998A + spacer 56
   - row gap 80: quote (Playfair Italic 38px tracking -0.38px leading 1.1 + Mono Regular 11px tracking 1.54px attribution) + bio Inter 16px leading 1.65 #6B5F5A
*/
export function Sobre() {
  const { sobre } = BARBARA_DATA;
  const reduce = useReducedMotion();
  return (
    <section id="sobre" className="relative w-full bg-[#F8F2EA]">
      <div className="max-w-[1440px] mx-auto">
        {/* DESKTOP */}
        <div className="hidden lg:block pt-[120px] pb-[120px] pl-[80px] pr-[80px]">
          <div className="w-[1280px] max-w-full flex flex-col items-start">
            <FadeUp>
              <p
                className="text-[#6B5F5A] text-[11px] whitespace-pre"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 400,
                  letterSpacing: "1.76px",
                }}
              >
                {sobre.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <FadeUp delay={0.1}>
              <h2
                className="text-[#2A2520] text-[92px] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  letterSpacing: "-1.38px",
                }}
              >
                {sobre.headlineLines.map((line, i) => (
                  <span key={i} className="block leading-none">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[48px]" />
            <FadeUp delay={0.25}>
              <div className="h-px w-[80px] bg-[#C4998A]" />
            </FadeUp>
            <div className="h-[56px]" />
            <div className="w-full flex gap-[80px] items-start">
              <div className="flex-1 flex flex-col items-start gap-7">
                {/* Quote: word-by-word reveal — frase "pronunciada" */}
                <WordReveal
                  lines={sobre.quote.lines}
                  delay={0.35}
                  stagger={0.13}
                  className="block italic text-[#2A2520] text-[38px]"
                  lineClassName="leading-[1.1]"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "-0.38px",
                  }}
                />
                {/* Atribuição + signature mark — entra como assinatura ao final */}
                <motion.div
                  className="flex flex-col items-start gap-3"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px 0px" }}
                  transition={{ duration: 0.7, ease: EASE, delay: 1.5 }}
                >
                  <p
                    className="text-[#6B5F5A] text-[11px]"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 400,
                      letterSpacing: "1.54px",
                    }}
                  >
                    {sobre.quote.attribution}
                  </p>
                  <motion.span
                    aria-hidden
                    className="block h-px bg-[#C4998A] origin-left"
                    style={{ width: 40 }}
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={reduce ? undefined : { scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px 0px" }}
                    transition={{ duration: 0.9, ease: EASE, delay: 1.9 }}
                  />
                </motion.div>
              </div>
              <Stagger delay={0.4} staggerChildren={0.15} className="flex-1 flex flex-col gap-6">
                {sobre.bio.map((p, i) => (
                  <StaggerItem key={i}>
                    <p
                      className="text-[#6B5F5A] text-[16px]"
                      style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.65 }}
                    >
                      {p}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>

        {/* MOBILE — 47:22 */}
        <div className="lg:hidden pt-[80px] pb-[80px] pl-[24px] pr-[24px]">
          <div className="w-[327px] max-w-full flex flex-col items-start">
            <FadeUp>
              <p
                className="text-[#6B5F5A] text-[10px] whitespace-pre"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.8px",
                }}
              >
                {sobre.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[24px]" />
            <FadeUp delay={0.1}>
              <h2
                className="text-[#2A2520] text-[44px]"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  letterSpacing: "-0.88px",
                }}
              >
                {sobre.headlineLines.map((line, i) => (
                  <span key={i} className="block leading-[1.02]">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[32px]" />
            <FadeUp delay={0.25}>
              <div className="h-px w-[60px] bg-[#C4998A]" />
            </FadeUp>
            <div className="h-[32px]" />
            <div className="flex flex-col items-start gap-5">
              <WordReveal
                lines={sobre.quote.lines}
                delay={0.35}
                stagger={0.11}
                className="block italic text-[#2A2520] text-[28px]"
                lineClassName="leading-[1.25]"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              />
              <motion.div
                className="flex flex-col items-start gap-2.5"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px 0px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 1.4 }}
              >
                <p
                  className="text-[#6B5F5A] text-[10px]"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    letterSpacing: "0.8px",
                  }}
                >
                  {sobre.quote.attribution}
                </p>
                <motion.span
                  aria-hidden
                  className="block h-px bg-[#C4998A] origin-left"
                  style={{ width: 32 }}
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={reduce ? undefined : { scaleX: 1 }}
                  viewport={{ once: true, margin: "-80px 0px" }}
                  transition={{ duration: 0.8, ease: EASE, delay: 1.8 }}
                />
              </motion.div>
            </div>
            <div className="h-[28px]" />
            <Stagger delay={0.4} staggerChildren={0.15} className="flex flex-col gap-4">
              {sobre.bio.map((p, i) => (
                <StaggerItem key={i}>
                  <p
                    className="text-[#6B5F5A] text-[14px]"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.65 }}
                  >
                    {p}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
