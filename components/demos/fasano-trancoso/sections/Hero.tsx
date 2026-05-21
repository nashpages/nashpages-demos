"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FASANO_DATA } from "../data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = FASANO_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      data-snap-section
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      style={{ backgroundColor: "var(--c-noite)" }}
    >
      {/* Foto aérea full-bleed + Ken Burns lento */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.08] }}
        transition={
          reduce
            ? undefined
            : { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }
        }
      >
        <Image
          src={hero.photo}
          alt={hero.alt}
          fill
          priority
          loading="eager"
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay suave */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,18,14,0.34) 0%, rgba(20,18,14,0.18) 42%, rgba(20,18,14,0.46) 100%)",
        }}
      />

      {/* Scroll cue — label + linha vertical pulsando */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--c-areia)",
            opacity: 0.85,
            textShadow: "0 1px 10px rgba(0,0,0,0.4)",
          }}
        >
          {hero.cue}
        </span>
        <motion.span
          aria-hidden
          style={{
            width: "1px",
            height: "54px",
            backgroundColor: "var(--c-areia)",
            transformOrigin: "top",
          }}
          animate={reduce ? undefined : { scaleY: [0.35, 1, 0.35], opacity: [0.25, 0.7, 0.25] }}
          transition={
            reduce ? undefined : { duration: 2.4, ease: "easeInOut", repeat: Infinity }
          }
        />
      </motion.div>
    </section>
  );
}
