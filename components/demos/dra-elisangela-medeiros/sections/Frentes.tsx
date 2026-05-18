"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ELISANGELA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

const EASE_SMOOTH = [0.22, 0.61, 0.36, 1] as const;

export function Frentes() {
  const { frentes } = ELISANGELA_DATA;
  const reduce = useReducedMotion();

  return (
    <section id="frentes" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-20 lg:pt-[120px] pb-20 lg:pb-[120px]">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-accent)" }}>
            {`§ 03  ·  ${frentes.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2 style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(48px, 6.2vw, 88px)", lineHeight: "1.1", letterSpacing: "-1.6px", color: "var(--c-tinta)", margin: 0 }}>
            <span className="block">{frentes.headlineLines[0]}</span>
            <span className="block">{frentes.headlineLines[1]}</span>
          </h2>
        </FadeUp>
        <div className="h-8 lg:h-10" />
        <motion.div
          className="h-[1px] w-[80px]"
          style={{ backgroundColor: "var(--c-accent)", transformOrigin: "left center" }}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE_SMOOTH }}
        />
        <div className="h-6 lg:h-8" />
        <FadeUp delay={0.2}>
          <p style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(17px, 1.55vw, 22px)", lineHeight: "1.5", color: "var(--c-neblina)", maxWidth: "780px", margin: 0 }}>
            {frentes.subline}
          </p>
        </FadeUp>
        <div className="h-10 lg:h-[64px]" />

        <Stagger
          delay={0.15}
          staggerChildren={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12"
        >
          {frentes.list.map((f) => (
            <StaggerItem key={f.num}>
              <motion.div
                className="relative group p-7 lg:p-9 transition-colors duration-500"
                initial={{ backgroundColor: "rgba(232, 233, 223, 0)" }}
                whileHover={reduce ? undefined : { backgroundColor: "rgba(232, 233, 223, 0.7)" }}
              >
                {/* Top border animated */}
                <motion.div
                  className="absolute top-0 left-0 h-[1px]"
                  style={{ backgroundColor: "var(--c-accent)", transformOrigin: "left center" }}
                  initial={reduce ? { width: "100%" } : { width: "100%", scaleX: 0.18 }}
                  whileHover={reduce ? undefined : { scaleX: 1 }}
                  whileInView={reduce ? undefined : { scaleX: 0.18 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: EASE_SMOOTH }}
                />
                <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>
                  {f.num}
                </p>
                <div className="h-3" />
                <h3 style={{ fontFamily: "var(--font-cormorant-garamond)", fontWeight: 400, fontSize: "clamp(28px, 2.4vw, 36px)", lineHeight: "1.18", letterSpacing: "-0.5px", color: "var(--c-tinta)", margin: 0 }}>
                  {f.title}
                </h3>
                <div className="h-4" />
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "14px", lineHeight: "24px", color: "var(--c-neblina)", margin: 0, maxWidth: "520px" }}>
                  {f.body}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
