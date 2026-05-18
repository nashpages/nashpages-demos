"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BERMUDES_DATA } from "../data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Memorial() {
  const { memorial } = BERMUDES_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="memorial"
      data-snap-section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "720px", backgroundColor: "var(--c-tinta-deep)" }}
    >
      {/* Full-bleed photo */}
      <div className="absolute inset-0">
        <Image
          src={memorial.photo}
          alt={memorial.name}
          fill
          quality={95}
          sizes="100vw"
          loading="eager"
          className="object-cover object-center"
        />
      </div>

      {/* Horizontal gradient overlay — LEFT dark, RIGHT clear */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(30,47,58,0.88) 0%, rgba(30,47,58,0.72) 40%, rgba(30,47,58,0.55) 65%, rgba(30,47,58,0.15) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-32 lg:pt-[200px] pb-32 lg:pb-[200px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-[760px]"
        >
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "2.5px",
              color: "var(--c-papel)",
            }}
          >
            {`§ 03  ·  ${memorial.eyebrow}`}
          </p>
          <div className="h-6 lg:h-10" />
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(48px, 5.8vw, 80px)",
              lineHeight: "1.1",
              letterSpacing: "clamp(-1.2px, -0.13vw, -1.8px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {memorial.name}
          </h2>
          <div className="h-6 lg:h-8" />
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "4px",
              color: "var(--c-papel)",
            }}
          >
            {memorial.dates}
          </p>
          <div className="h-6 lg:h-8" />
          <div className="h-px w-12" style={{ backgroundColor: "var(--c-papel)", opacity: 0.6 }} />
          <div className="h-5 lg:h-7" />
          {memorial.tributeLines.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(17px, 1.55vw, 22px)",
                lineHeight: "1.55",
                color: "var(--c-papel)",
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
