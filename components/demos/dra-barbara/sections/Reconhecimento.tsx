"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BARBARA_DATA } from "../data";
import { FadeUp, CountUp, Stagger, StaggerItem } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

/* §Reconhecimento — Figma 17:2 (desktop) / 47:35 (mobile)
   Desktop:
   - bg #F2E4DD
   - foto absolute left=0 top=0 w=600 h=900 (full-bleed)
   - col-right absolute left=680 top=80 w=680
   - eyebrow Mono Medium 11px tracking 0.88px (8%) #6B5F5A
   - 233 Playfair 180px LINE-HEIGHT 180 tracking -5.4px (-3%) #C4998A
   - statLabel Playfair Italic 28px leading 1.3 #2A2520
   - stars Inter Regular 22px tracking 0.88px (4%) #C4998A
   - pills Mono Medium 10px tracking 1px (10%) border #C4998A
   - quote Playfair Italic 24px leading 1.4 #2A2520
   - attribution Mono Medium 10px tracking 0.8px (8%) #6B5F5A
   - CTA Mono Medium 12px tracking 0.96px (8%) #C4998A + underline w-full
*/
export function Reconhecimento() {
  const r = BARBARA_DATA.reconhecimento;
  const reduce = useReducedMotion();
  return (
    <section className="relative w-full bg-[#F2E4DD] overflow-hidden">
      {/* DESKTOP */}
      <div className="hidden lg:block relative w-full h-[900px]">
        <motion.div
          className="absolute left-0 top-0 w-[600px] h-[900px] overflow-hidden"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.06 }}
            whileInView={reduce ? undefined : { scale: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 1.8, ease: EASE }}
          >
            <Image
              src={r.photo}
              alt="Dra. Bárbara Pimenta"
              fill
              quality={100}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
        <div className="absolute left-[680px] top-[80px] w-[680px] flex flex-col items-start">
          <ReconContent />
        </div>
      </div>

      {/* MOBILE — 47:35: foto top 380 + content stack */}
      <div className="lg:hidden">
        <motion.div
          className="relative w-full h-[380px] overflow-hidden"
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
              src={r.photo}
              alt="Dra. Bárbara Pimenta"
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
        <div className="px-[24px] py-[48px] flex flex-col items-start">
          <ReconContent mobile />
        </div>
      </div>
    </section>
  );
}

function ReconContent({ mobile = false }: { mobile?: boolean }) {
  const r = BARBARA_DATA.reconhecimento;
  return (
    <>
      <FadeUp>
        <p
          className="text-[#6B5F5A] whitespace-pre"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: mobile ? 10 : 11,
            letterSpacing: mobile ? "0.8px" : "0.88px",
          }}
        >
          /  {r.eyebrow}
        </p>
      </FadeUp>
      <div style={{ height: mobile ? 28 : 48 }} />
      <FadeUp delay={0.1}>
        <p
          className="text-[#C4998A] whitespace-nowrap"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            fontSize: mobile ? 120 : 180,
            lineHeight: mobile ? "120px" : "180px",
            letterSpacing: mobile ? "-3.6px" : "-5.4px",
          }}
        >
          <CountUp to={parseInt(r.stat, 10)} duration={1.8} />
        </p>
      </FadeUp>
      <div style={{ height: 20 }} />
      <FadeUp delay={0.25}>
        <p
          className="italic text-[#2A2520]"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            fontSize: mobile ? 22 : 28,
            lineHeight: 1.3,
          }}
        >
          {r.statLabel}
        </p>
      </FadeUp>
      <div style={{ height: mobile ? 24 : 32 }} />
      <FadeUp delay={0.4}>
        <p
          className="text-[#C4998A] whitespace-pre"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: mobile ? 18 : 22,
            letterSpacing: mobile ? "0.72px" : "0.88px",
          }}
        >
          ★  ★  ★  ★  ★
        </p>
      </FadeUp>
      <div style={{ height: mobile ? 24 : 36 }} />
      <Stagger delay={0.5} staggerChildren={0.12} className="flex gap-[12px]">
        {r.badges.map((badge) => (
          <StaggerItem key={badge}>
            <span
              className="inline-flex items-center rounded-full border border-[#C4998A] text-[#C4998A] whitespace-nowrap transition-colors duration-500 hover:bg-[#C4998A] hover:text-[#F8F2EA]"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: mobile ? 9 : 10,
                letterSpacing: mobile ? "0.9px" : "1px",
                padding: mobile ? "6px 12px" : "8px 16px",
              }}
            >
              {badge}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
      <div style={{ height: mobile ? 32 : 48 }} />
      <FadeUp delay={0.75}>
        <div className="h-px bg-[#C4998A]" style={{ width: mobile ? 40 : 60 }} />
      </FadeUp>
      <div style={{ height: mobile ? 32 : 48 }} />
      <FadeUp delay={0.85} className="w-full">
        <p
          className="italic text-[#2A2520]"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            fontSize: mobile ? 18 : 24,
            lineHeight: 1.4,
          }}
        >
          {r.quote}
        </p>
        <div style={{ height: 16 }} />
        <p
          className="text-[#6B5F5A]"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: "0.8px",
          }}
        >
          {r.attribution}
        </p>
      </FadeUp>
      <div style={{ height: mobile ? 32 : 40 }} />
      <FadeUp delay={1.0}>
        <a
          href={r.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col gap-2"
        >
          <span
            className="text-[#C4998A] whitespace-pre transition-transform duration-300 group-hover:translate-x-1"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: mobile ? 11 : 12,
              letterSpacing: mobile ? "0.88px" : "0.96px",
            }}
          >
            {r.cta.label}  →
          </span>
          <span className="h-px w-full bg-[#C4998A] origin-left transition-transform duration-500 group-hover:scale-x-110" />
        </a>
      </FadeUp>
    </>
  );
}
