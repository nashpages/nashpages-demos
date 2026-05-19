"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PVBT_DATA } from "../data";
import { HeroCarousel } from "../HeroCarousel";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = PVBT_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      data-snap-section
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      style={{ backgroundColor: "var(--c-tinta-deep)" }}
    >
      <HeroCarousel />

      {/* Vertical gradient — top dark for nav legibility, transparent center, bottom dark for marginalia */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,24,50,0.95) 0%, rgba(10,24,50,0.55) 50%, rgba(8,8,15,0.92) 100%)",
        }}
      />

      <div className="absolute inset-0 max-w-[1440px] mx-auto">
        <motion.div
          className="absolute left-6 lg:left-[80px] right-6 lg:right-[80px] top-[42%] -translate-y-1/2 z-10 text-center"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "3px",
              color: "var(--c-dourado)",
              marginBottom: "32px",
            }}
          >
            {hero.eyebrow}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cinzel)",
              fontWeight: 400,
              fontSize: "clamp(96px, 18vw, 280px)",
              lineHeight: 1,
              letterSpacing: "clamp(2px, 0.4vw, 6px)",
              color: "var(--c-dourado)",
              margin: 0,
            }}
          >
            {hero.wordmark}
          </h1>
          <p
            className="mt-6 lg:mt-8"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 400,
              fontSize: "clamp(18px, 1.9vw, 26px)",
              lineHeight: 1.2,
              letterSpacing: "-0.3px",
              color: "var(--c-papel)",
              opacity: 0.92,
              margin: 0,
            }}
          >
            {hero.razao}
          </p>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.7vw, 24px)",
              lineHeight: 1.2,
              letterSpacing: "-0.1px",
              color: "var(--c-dourado)",
              opacity: 0.85,
              margin: 0,
            }}
          >
            {hero.tagline}
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
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--c-dourado)",
              opacity: 0.3,
            }}
          />
          <div className="hidden md:grid grid-cols-4 gap-6">
            {hero.meta.map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "9px",
                    letterSpacing: "1.8px",
                    color: "var(--c-dourado)",
                    opacity: 0.85,
                    marginBottom: "8px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "1.6px",
                    color: "var(--c-papel)",
                    opacity: 0.9,
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="md:hidden flex flex-col gap-1.5 text-center">
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "9px",
                letterSpacing: "1.6px",
                color: "var(--c-dourado)",
              }}
            >
              CHAMBERS BAND 3 · 10 ANOS
            </p>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "9px",
                letterSpacing: "1.6px",
                color: "var(--c-papel)",
                opacity: 0.85,
              }}
            >
              FIFA · CBF · CBMA · CAS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
