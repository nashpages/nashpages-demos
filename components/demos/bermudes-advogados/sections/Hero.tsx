"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BERMUDES_DATA } from "../data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = BERMUDES_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      data-snap-section
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      style={{ backgroundColor: "var(--c-tinta-deep)" }}
    >
      {/* Full-bleed photo */}
      <div className="absolute inset-0">
        <Image
          src={hero.photo}
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark gradient overlay top-bottom */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30,47,58,0.75) 0%, rgba(30,47,58,0.55) 45%, rgba(30,47,58,0.8) 100%)",
        }}
      />

      {/* Centered monumental wordmark */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <h1
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 300,
            fontSize: "clamp(80px, 14vw, 240px)",
            lineHeight: 1,
            letterSpacing: "clamp(-3px, -0.55vw, -8px)",
            color: "var(--c-papel)",
            margin: 0,
          }}
        >
          {hero.logoMain}
        </h1>

        {/* Manifesto italic with decorative dashes */}
        <div className="flex items-center justify-center gap-6 mt-10 lg:mt-12">
          <span
            aria-hidden
            className="hidden sm:block"
            style={{ width: "36px", height: "1px", backgroundColor: "var(--c-papel)", opacity: 0.6 }}
          />
          <p
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 26px)",
              letterSpacing: "0.2px",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {hero.manifesto}
          </p>
          <span
            aria-hidden
            className="hidden sm:block"
            style={{ width: "36px", height: "1px", backgroundColor: "var(--c-papel)", opacity: 0.6 }}
          />
        </div>

        {/* Tagline */}
        <p
          className="mt-8 lg:mt-10 max-w-[1200px]"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: "clamp(10px, 0.85vw, 12px)",
            letterSpacing: "3px",
            color: "var(--c-papel)",
          }}
        >
          {hero.tagline}
        </p>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute left-0 right-0 bottom-12 flex flex-col items-center z-20 pointer-events-none"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: EASE }}
      >
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "2.5px",
            color: "var(--c-papel)",
            marginBottom: "12px",
          }}
        >
          {hero.explore}
        </p>
        <motion.div
          className="w-px"
          style={{ backgroundColor: "var(--c-papel)" }}
          animate={reduce ? undefined : { height: ["8px", "30px", "8px"] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
