"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VALDUGA_DATA } from "../data";
import { HeroCarousel } from "../HeroCarousel";

const EASE = [0.32, 0.72, 0, 1] as const;
const SHADOW = "0 2px 24px rgba(0,0,0,0.45)";

export function Hero() {
  const { hero } = VALDUGA_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      data-snap-section
      className="relative w-full h-screen min-h-[620px] overflow-hidden"
      style={{ backgroundColor: "var(--c-tinta)" }}
    >
      <HeroCarousel />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,9,11,0.50) 0%, rgba(18,9,11,0.42) 48%, rgba(18,9,11,0.68) 100%)",
        }}
      />

      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
      >
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: "clamp(11px, 1vw, 13px)",
            letterSpacing: "3px",
            color: "var(--c-dourado-light)",
            marginBottom: "26px",
            textShadow: SHADOW,
          }}
        >
          {hero.eyebrow}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 500,
            fontSize: "clamp(64px, 12vw, 168px)",
            lineHeight: 1,
            letterSpacing: "-1px",
            color: "var(--c-pergaminho)",
            margin: 0,
            textShadow: SHADOW,
          }}
        >
          {hero.wordmark}
        </h1>
        <p
          className="mt-6 lg:mt-7"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(18px, 2.2vw, 30px)",
            lineHeight: 1.3,
            color: "var(--c-pergaminho)",
            opacity: 0.95,
            margin: 0,
            textShadow: SHADOW,
          }}
        >
          {hero.phrase}
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 1 }}
      >
        <span aria-hidden style={{ width: "1px", height: "30px", backgroundColor: "var(--c-pergaminho)", opacity: 0.55 }} />
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "3px",
            color: "var(--c-pergaminho)",
            opacity: 0.7,
            textShadow: SHADOW,
          }}
        >
          ROLE
        </span>
      </motion.div>
    </section>
  );
}
