"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PVBT_DATA } from "../data";
import { FadeUp } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Foros() {
  const { foros } = PVBT_DATA;
  const reduce = useReducedMotion();
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <section
      id="foros"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] pt-20 lg:pt-[80px] pb-12 lg:pb-16">
        <FadeUp>
          <div className="flex items-center justify-between mb-12 lg:mb-16">
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-dourado)",
              }}
            >
              {foros.eyebrow}
            </p>
            <p
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-neblina)",
                opacity: 0.85,
              }}
            >
              {foros.eyebrowRight}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(48px, 9vw, 120px)",
              lineHeight: 1,
              letterSpacing: "clamp(-1.4px, -0.3vw, -3px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {foros.headlineA}
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(44px, 8vw, 120px)",
              lineHeight: 1,
              letterSpacing: "clamp(-1.2px, -0.3vw, -3px)",
              color: "var(--c-dourado-deep)",
              margin: 0,
            }}
          >
            {foros.headlineB}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mt-8 lg:mt-10 max-w-[920px]"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.6vw, 20px)",
              lineHeight: 1.4,
              letterSpacing: "-0.2px",
              color: "var(--c-neblina)",
              margin: 0,
            }}
          >
            {foros.sub}
          </p>
        </FadeUp>
      </div>

      {/* DIVIDER full-bleed */}
      <div
        aria-hidden
        style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
      />

      {/* 4 ROWS FULL-BLEED */}
      <div className="w-full">
        {foros.list.map((row, i) => (
          <div key={row.name}>
            <a
              href="#contato"
              className="relative block w-full overflow-hidden group"
              style={{ height: "220px", backgroundColor: "var(--c-tinta-deep)" }}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              <motion.div
                className="absolute inset-0"
                animate={
                  reduce
                    ? undefined
                    : { scale: hoverIdx === i ? 1.05 : 1 }
                }
                transition={{ duration: 0.6, ease: EASE }}
              >
                <Image
                  src={row.photo}
                  alt={row.name}
                  fill
                  loading="eager"
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </motion.div>

              <motion.div
                aria-hidden
                className="absolute inset-0"
                style={{ backgroundColor: "var(--c-tinta-deep)" }}
                animate={
                  reduce
                    ? undefined
                    : { opacity: hoverIdx === i ? row.overlay - 0.2 : row.overlay }
                }
                transition={{ duration: 0.4, ease: EASE }}
              />

              <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-[80px] flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_60px] items-center w-full gap-4 md:gap-8">
                  {/* LEFT — num + name + italic */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 500,
                        fontSize: "10px",
                        letterSpacing: "2px",
                        color: "var(--c-dourado)",
                        marginBottom: "10px",
                      }}
                    >
                      {row.num}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontWeight: 400,
                        fontSize: "clamp(40px, 5vw, 64px)",
                        letterSpacing: "2px",
                        color: "var(--c-papel)",
                        margin: 0,
                      }}
                    >
                      {row.name}
                    </h3>
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "var(--font-cormorant-garamond)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 1.5vw, 20px)",
                        letterSpacing: "-0.2px",
                        color: "var(--c-dourado)",
                        opacity: 0.85,
                        margin: 0,
                      }}
                    >
                      {row.italic}
                    </p>
                  </div>

                  {/* MIDDLE — city + desc */}
                  <div className="hidden md:block">
                    <p
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 500,
                        fontSize: "10px",
                        letterSpacing: "1.8px",
                        color: "var(--c-papel)",
                        opacity: 0.75,
                        marginBottom: "10px",
                      }}
                    >
                      {row.city}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant-garamond)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "clamp(15px, 1.4vw, 19px)",
                        lineHeight: 1.4,
                        letterSpacing: "-0.2px",
                        color: "var(--c-papel)",
                        opacity: 0.92,
                        margin: 0,
                        maxWidth: "560px",
                      }}
                    >
                      {row.desc}
                    </p>
                  </div>

                  {/* RIGHT — arrow */}
                  <motion.div
                    className="hidden md:flex justify-end"
                    animate={
                      reduce
                        ? undefined
                        : { x: hoverIdx === i ? 8 : 0, opacity: hoverIdx === i ? 1 : 0.5 }
                    }
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <span
                      aria-hidden
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        fontSize: "32px",
                        color: "var(--c-dourado)",
                      }}
                    >
                      →
                    </span>
                  </motion.div>
                </div>
              </div>
            </a>
            {i < foros.list.length - 1 && (
              <div
                aria-hidden
                style={{ width: "100%", height: "1px", backgroundColor: "var(--c-dourado)", opacity: 0.25 }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
