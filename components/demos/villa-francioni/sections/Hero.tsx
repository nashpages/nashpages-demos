"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroCarousel } from "../HeroCarousel";
import { FRANCIONI_DATA } from "../data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = FRANCIONI_DATA;
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease: EASE, delay },
        };

  return (
    <section
      id="top"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      style={{ backgroundColor: "var(--c-noite)" }}
    >
      <HeroCarousel />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,24,15,0.42) 0%, rgba(20,24,15,0.14) 40%, rgba(20,24,15,0.64) 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: "12vh" }}
      >
        <motion.p
          {...fade(0.3)}
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "3.5px",
            color: "var(--c-giz)",
            opacity: 0.9,
            textShadow: "0 1px 12px rgba(0,0,0,0.45)",
            marginBottom: "22px",
          }}
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          {...fade(0.42)}
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 600,
            fontSize: "clamp(46px, 8vw, 88px)",
            lineHeight: 1,
            letterSpacing: "-0.5px",
            color: "var(--c-giz)",
            margin: 0,
            textShadow: "0 2px 28px rgba(0,0,0,0.4)",
          }}
        >
          {hero.wordmark}
        </motion.h1>
        <motion.p
          {...fade(0.56)}
          style={{
            fontFamily: "var(--font-fraunces)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(20px, 3vw, 28px)",
            lineHeight: 1.2,
            color: "var(--c-giz)",
            opacity: 0.95,
            margin: "20px 0 0",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          {hero.tagline}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--c-giz)",
            opacity: 0.85,
            textShadow: "0 1px 10px rgba(0,0,0,0.4)",
          }}
        >
          {hero.cue}
        </span>
        <motion.span
          aria-hidden
          style={{ width: "1px", height: "48px", backgroundColor: "var(--c-giz)", transformOrigin: "top" }}
          animate={reduce ? undefined : { scaleY: [0.35, 1, 0.35], opacity: [0.25, 0.7, 0.25] }}
          transition={reduce ? undefined : { duration: 2.4, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
