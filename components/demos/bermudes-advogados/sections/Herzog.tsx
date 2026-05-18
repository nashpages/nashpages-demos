"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BERMUDES_DATA } from "../data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Herzog() {
  const { herzog } = BERMUDES_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="herzog"
      data-snap-section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "760px", backgroundColor: "var(--c-tinta-deep)" }}
    >
      <div className="absolute inset-0">
        <Image
          src={herzog.photo}
          alt=""
          fill
          quality={92}
          sizes="100vw"
          loading="eager"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(30,47,58,0.92) 0%, rgba(30,47,58,0.7) 50%, rgba(30,47,58,0.35) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-28 lg:pt-[140px] pb-28 lg:pb-[140px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-[820px]"
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
            {`§ 04  ·  ${herzog.eyebrow}`}
          </p>
          <div className="h-4 lg:h-6" />

          <p
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              fontSize: "clamp(120px, 16vw, 220px)",
              lineHeight: "1",
              letterSpacing: "clamp(-4px, -0.7vw, -10px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {herzog.year}
          </p>

          <div className="h-8 lg:h-10" />

          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(26px, 2.6vw, 36px)",
              lineHeight: "1.28",
              letterSpacing: "-0.6px",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {herzog.subheadlineLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          <div className="h-6 lg:h-8" />
          <div className="h-px w-12" style={{ backgroundColor: "var(--c-papel)", opacity: 0.6 }} />
          <div className="h-5 lg:h-7" />

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(14px, 1.15vw, 16px)",
              lineHeight: "1.65",
              color: "var(--c-papel)",
              maxWidth: "720px",
              margin: 0,
            }}
          >
            {herzog.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
