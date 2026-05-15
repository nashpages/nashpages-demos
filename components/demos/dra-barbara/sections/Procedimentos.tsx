"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BARBARA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

/* §04 Procedimentos — Figma 30:2 (desktop) / 49:31 (mobile)
   Desktop:
   - bg #F2E4DD, content absolute left=80 top=100 w=1280
   - eyebrow Mono Medium 11px tracking 0.88px (8%) #6B5F5A
   - spacer 40
   - row gap 80 h=480:
     - col-left w=560: headline Playfair 68px tracking -1.36px leading-none
       + spacer 40 + divider w=80 + spacer 40 + body Inter 17px leading 1.6 #6B5F5A
     - foto w=640 h=480
   - spacer 56 + top-border + spacer 28
   - specs flex justify-between gap-14 per col:
     - Label Mono Medium 11px tracking 0.88px (8%) #2A2520
     - Value Mono Regular 11px tracking 0.44px (4%) #6B5F5A
*/
export function Procedimentos() {
  const p = BARBARA_DATA.procedimentos;
  const reduce = useReducedMotion();
  return (
    <section className="relative w-full bg-[#F2E4DD]">
      <div className="max-w-[1440px] mx-auto">
        {/* DESKTOP */}
        <div className="hidden lg:block pt-[100px] pb-[100px] pl-[80px] pr-[80px]">
          <div className="w-[1280px] max-w-full flex flex-col items-start">
            <FadeUp>
              <p
                className="text-[#6B5F5A] text-[11px] whitespace-pre"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.88px",
                }}
              >
                {p.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <div className="w-full flex gap-[80px] items-start h-[480px]">
              <div className="w-[560px] flex flex-col items-start">
                <FadeUp delay={0.1}>
                  <h2
                    className="text-[#2A2520] text-[68px] whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 400,
                      letterSpacing: "-1.36px",
                    }}
                  >
                    {p.headlineLines.map((line, i) => (
                      <span key={i} className="block leading-none">{line}</span>
                    ))}
                  </h2>
                </FadeUp>
                <div className="h-[40px]" />
                <FadeUp delay={0.22}>
                  <div className="h-px w-[80px] bg-[#C4998A]" />
                </FadeUp>
                <div className="h-[40px]" />
                <FadeUp delay={0.32}>
                  <p
                    className="text-[#6B5F5A] text-[17px]"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.6 }}
                  >
                    {p.body}
                  </p>
                </FadeUp>
              </div>
              <motion.div
                className="relative w-[640px] h-[480px] overflow-hidden flex-shrink-0"
                initial={reduce ? false : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={{ once: true, margin: "-80px 0px" }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={reduce ? false : { scale: 1.06 }}
                  whileInView={reduce ? undefined : { scale: 1 }}
                  viewport={{ once: true, margin: "-80px 0px" }}
                  transition={{ duration: 1.6, ease: EASE, delay: 0.15 }}
                >
                  <Image
                    src={p.photo}
                    alt="Procedimento dermatológico"
                    fill
                    quality={100}
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover object-center"
                  />
                </motion.div>
              </motion.div>
            </div>
            <div className="h-[56px]" />
            <div className="w-full h-px bg-[#DCC8BC]" />
            <div className="h-[28px]" />
            <Stagger staggerChildren={0.12} className="w-full flex justify-between items-start">
              {p.specs.map((s) => (
                <StaggerItem key={s.num}>
                  <SpecCell s={s} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        {/* MOBILE — 49:31 stack */}
        <div className="lg:hidden pt-[80px] pb-[80px] pl-[24px] pr-[24px]">
          <div className="flex flex-col items-start w-[327px] max-w-full">
            <FadeUp>
              <p
                className="text-[#6B5F5A] text-[10px] whitespace-pre"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.8px",
                }}
              >
                {p.eyebrow}
              </p>
            </FadeUp>
            <div className="h-[20px]" />
            <FadeUp delay={0.1}>
              <h2
                className="text-[#2A2520] text-[40px]"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  letterSpacing: "-0.8px",
                }}
              >
                {p.headlineLines.map((line, i) => (
                  <span key={i} className="block leading-[1.05]">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[24px]" />
            <FadeUp delay={0.22}>
              <div className="h-px w-[60px] bg-[#C4998A]" />
            </FadeUp>
            <div className="h-[24px]" />
            <FadeUp delay={0.32}>
              <p
                className="text-[#6B5F5A] text-[14px]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.6 }}
              >
                {p.body}
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <motion.div
              className="relative w-full aspect-[4/3] overflow-hidden"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{ duration: 1, ease: EASE }}
            >
              <motion.div
                className="absolute inset-0"
                initial={reduce ? false : { scale: 1.06 }}
                whileInView={reduce ? undefined : { scale: 1 }}
                viewport={{ once: true, margin: "-80px 0px" }}
                transition={{ duration: 1.6, ease: EASE }}
              >
                <Image
                  src={p.photo}
                  alt="Procedimento dermatológico"
                  fill
                  quality={100}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </motion.div>
            <div className="h-[40px]" />
            <div className="w-full h-px bg-[#DCC8BC]" />
            <div className="h-[28px]" />
            <Stagger staggerChildren={0.12} className="w-full flex flex-col divide-y divide-[#DCC8BC]">
              {p.specs.map((s, i) => (
                <StaggerItem key={s.num}>
                  <div className={i > 0 ? "pt-[20px] mt-[20px]" : ""}>
                    <SpecCell s={s} />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecCell({ s }: { s: { num: string; label: string; value: string } }) {
  return (
    <div className="flex flex-col gap-[14px]">
      <p
        className="text-[#2A2520] whitespace-pre"
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: "0.88px",
        }}
      >
        {s.num}   {s.label}
      </p>
      <p
        className="text-[#6B5F5A] whitespace-nowrap"
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontWeight: 400,
          fontSize: 11,
          letterSpacing: "0.44px",
        }}
      >
        {s.value}
      </p>
    </div>
  );
}
