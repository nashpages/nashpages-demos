"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TROJAN_DATA } from "../data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = TROJAN_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      data-snap-section
      className="relative w-full lg:h-[800px] min-h-[640px] overflow-hidden"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      {/* Photo right (desktop) */}
      <div className="hidden lg:block">
        <div
          className="absolute top-0 bottom-0 overflow-hidden"
          style={{
            right: 0,
            width: "clamp(440px, 38vw, 600px)",
          }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.04, opacity: 0 }}
            animate={reduce ? undefined : { scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
          >
            <Image
              src={hero.photo}
              alt="Dr. Giácomo Trojan"
              fill
              priority
              loading="eager"
              quality={92}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover object-center"
              style={{
                filter: "saturate(1.02) contrast(1.02)",
              }}
            />
          </motion.div>
          {/* Gradient feather sutil edge left */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 pointer-events-none"
            style={{
              width: "80px",
              background:
                "linear-gradient(to right, rgba(250,250,251,0.25) 0%, rgba(250,250,251,0) 100%)",
            }}
          />
        </div>
      </div>

      {/* Photo mobile (full bleed top) */}
      <div className="lg:hidden relative w-full h-[420px]">
        <Image
          src={hero.photo}
          alt="Dr. Giácomo Trojan"
          fill
          priority
          loading="eager"
          quality={92}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250,250,251,0) 0%, rgba(250,250,251,1) 100%)",
          }}
        />
      </div>

      {/* Text block */}
      <div className="relative max-w-[1440px] mx-auto h-full">
        <motion.div
          className="lg:absolute lg:top-[180px] lg:left-[80px] px-6 lg:px-0 pt-12 pb-16 lg:py-0 lg:max-w-[760px]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.3 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-azul-deep)",
            }}
          >
            {hero.eyebrow}
          </p>

          <h1
            className="mt-10 lg:mt-12"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(72px, 13vw, 180px)",
              lineHeight: 1,
              letterSpacing: "clamp(-2px, -0.4vw, -6px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span className="block">{hero.firstName}</span>
            <span className="block">{hero.lastName}</span>
          </h1>

          <p
            className="mt-10 lg:mt-12"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(18px, 1.7vw, 24px)",
              lineHeight: 1.3,
              letterSpacing: "-0.2px",
              color: "var(--c-neblina)",
              margin: 0,
            }}
          >
            {hero.sublineItalic}
          </p>
          <p
            className="mt-2"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.1vw, 16px)",
              lineHeight: 1.5,
              color: "var(--c-neblina)",
              margin: 0,
            }}
          >
            {hero.sublineRegular}
          </p>

          <a
            href={hero.cta.href}
            className="mt-8 inline-flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
            style={{
              backgroundColor: "var(--c-azul-deep)",
              color: "var(--c-papel)",
              padding: "16px 28px",
              borderRadius: "40px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "0.1px",
            }}
          >
            <span>{hero.cta.label}</span>
            <span aria-hidden style={{ fontSize: "16px" }}>
              →
            </span>
          </a>

          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2">
            {hero.meta.map((m, i) => (
              <div key={m} className="flex items-center gap-5">
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "1.6px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {m}
                </p>
                {i < hero.meta.length - 1 && (
                  <span aria-hidden style={{ color: "var(--c-linha)" }}>
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
