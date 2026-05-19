"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ANTABI_DATA } from "../data";
import { HeroCarousel } from "../HeroCarousel";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = ANTABI_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      data-snap-section
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      style={{ backgroundColor: "var(--c-tinta-deep)" }}
    >
      <HeroCarousel />

      {/* Gradient overlay LEFT dark → RIGHT clearer */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(15,13,9,0.82) 0%, rgba(15,13,9,0.55) 45%, rgba(15,13,9,0.35) 100%)",
        }}
      />

      {/* Cobalto wash sutil */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "var(--c-accent)", opacity: 0.1 }}
      />

      {/* Bottom gradient pra meta bar */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[200px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,13,9,0) 0%, rgba(15,13,9,0.7) 100%)",
        }}
      />

      <div className="absolute inset-0 max-w-[1440px] mx-auto">
        <motion.div
          className="absolute left-6 lg:left-[80px] right-6 lg:right-[80px] top-[44%] -translate-y-1/2 z-10"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-accent-light)",
              marginBottom: "32px",
            }}
          >
            {hero.eyebrow}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-lora)",
              fontWeight: 500,
              fontSize: "clamp(100px, 15vw, 220px)",
              lineHeight: 0.94,
              letterSpacing: "clamp(-2.8px, -0.35vw, -5px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {hero.logoMain}
          </h1>
          <p
            className="mt-6 lg:mt-8"
            style={{
              fontFamily: "var(--font-lora)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(22px, 2.6vw, 38px)",
              lineHeight: 1.2,
              letterSpacing: "0.2px",
              color: "var(--c-accent-light)",
              margin: 0,
            }}
          >
            {hero.logoFull}
          </p>
        </motion.div>

        <motion.div
          className="absolute left-6 lg:left-[80px] right-6 lg:right-[80px] bottom-10 lg:bottom-12 z-10"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.0 }}
        >
          <span
            aria-hidden
            className="block mb-5"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent-light)" }}
          />
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {hero.meta.map((item) => (
              <p
                key={item}
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  color: "var(--c-papel)",
                }}
              >
                {item}
              </p>
            ))}
            <p
              className="ml-auto"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.8px",
                color: "var(--c-papel)",
              }}
            >
              {hero.explore}
            </p>
          </div>
          <div className="md:hidden flex flex-col gap-1.5">
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "9px",
                letterSpacing: "1.5px",
                color: "var(--c-papel)",
              }}
            >
              {hero.meta[0]} · CENTRO
            </p>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "9px",
                letterSpacing: "1.5px",
                color: "var(--c-papel)",
              }}
            >
              {hero.meta[1]} · {hero.meta[2]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
