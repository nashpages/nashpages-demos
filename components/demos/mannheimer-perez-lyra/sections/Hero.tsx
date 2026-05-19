"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MPL_DATA } from "../data";
import { HeroCarousel } from "../HeroCarousel";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = MPL_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      data-snap-section
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      style={{ backgroundColor: "var(--c-tinta-deep)" }}
    >
      <HeroCarousel />

      {/* Gradient overlay LEFT dark → CENTER → RIGHT */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(16,12,8,0.82) 0%, rgba(16,12,8,0.55) 45%, rgba(16,12,8,0.35) 100%)",
        }}
      />

      {/* Bottom gradient additional for meta bar */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[200px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(16,12,8,0) 0%, rgba(16,12,8,0.7) 100%)",
        }}
      />

      <div className="absolute inset-0 max-w-[1440px] mx-auto">
        {/* Wordmark + sub + eyebrow LEFT-aligned */}
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
              fontFamily: "var(--font-source-serif)",
              fontWeight: 300,
              fontSize: "clamp(140px, 16vw, 240px)",
              lineHeight: 0.92,
              letterSpacing: "clamp(-4px, -0.55vw, -8px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {hero.logoMain}
          </h1>
          <p
            className="mt-6 lg:mt-8"
            style={{
              fontFamily: "var(--font-source-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(22px, 3vw, 44px)",
              lineHeight: 1.18,
              letterSpacing: "0.2px",
              color: "var(--c-accent-light)",
              margin: 0,
            }}
          >
            {hero.logoFull}
          </p>
        </motion.div>

        {/* Bottom meta bar */}
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
          <div className="hidden md:grid grid-cols-12 items-center gap-3">
            {hero.meta.slice(0, 4).map((item, i) => (
              <p
                key={item}
                className={
                  i === 0
                    ? "col-span-2"
                    : i === 1
                    ? "col-span-2"
                    : i === 2
                    ? "col-span-3"
                    : "col-span-4"
                }
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
              className="col-span-1 text-right"
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
          {/* Mobile: meta empilhada */}
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
              {hero.meta[0]} · {hero.meta[1]}
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
              {hero.meta[2]} · MAIS ADMIRADOS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
