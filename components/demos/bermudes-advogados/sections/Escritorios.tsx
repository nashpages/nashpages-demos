"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BERMUDES_DATA } from "../data";
import { FadeUp } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

type CityRow = (typeof BERMUDES_DATA.escritorios.cities)[number];

function Row({ city, index, isHovered, onHover, onLeave }: {
  city: CityRow;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer"
      style={{ height: "220px", borderTop: index > 0 ? "1px solid rgba(241,239,234,0.15)" : undefined }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Photo bg with scale on hover */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <Image
          src={city.photo}
          alt={city.name}
          fill
          quality={92}
          sizes="100vw"
          loading="eager"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay tinta — lighter on hover */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "var(--c-tinta-deep)" }}
        animate={{ opacity: isHovered ? 0.45 : 0.72 }}
        transition={{ duration: 0.4, ease: EASE }}
      />

      {/* Content overlay */}
      <div className="relative h-full mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] flex items-center">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_540px_40px] items-center gap-6 lg:gap-12">
          {/* LEFT — city name */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--c-papel)",
              }}
            >
              {`§ 06.${index + 1}  ·  ${city.badge}`}
            </p>
            <div className="h-3" />
            <h3
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(36px, 4.3vw, 60px)",
                lineHeight: "1.1",
                letterSpacing: "-1.2px",
                color: "var(--c-papel)",
                margin: 0,
              }}
            >
              {city.name}
            </h3>
          </div>

          {/* MIDDLE — address */}
          <div className="hidden lg:block">
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 400,
                fontSize: "22px",
                letterSpacing: "-0.3px",
                lineHeight: "28px",
                color: "var(--c-papel)",
                margin: 0,
              }}
            >
              {city.street}
            </p>
            <div className="h-2" />
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "22px",
                color: "var(--c-papel)",
                margin: 0,
              }}
            >
              {city.detail}
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "22px",
                color: "var(--c-papel)",
                margin: 0,
              }}
            >
              {city.phone}
            </p>
          </div>

          {/* RIGHT — arrow */}
          <motion.span
            className="hidden lg:block text-right"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              fontSize: "28px",
              color: "var(--c-papel)",
            }}
            animate={{
              x: isHovered ? 8 : 0,
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            →
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export function Escritorios() {
  const { escritorios } = BERMUDES_DATA;
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <section id="escritorios" data-snap-section className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[120px] pb-12 lg:pb-[80px]">
        <FadeUp>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--c-tinta)",
            }}
          >
            {`§ 06  ·  ${escritorios.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <FadeUp delay={0.1} y={32} duration={0.9}>
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(52px, 6.2vw, 88px)",
                lineHeight: "1.1",
                letterSpacing: "clamp(-1.2px, -0.13vw, -2px)",
                color: "var(--c-tinta)",
                margin: 0,
              }}
            >
              <span className="block">{escritorios.headlineLines[0]}</span>
              <span className="block">{escritorios.headlineLines[1]}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="hidden lg:block"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: "9px",
                letterSpacing: "1.5px",
                color: "var(--c-neblina)",
              }}
            >
              {`/  ${escritorios.hint}`}
            </p>
          </FadeUp>
        </div>

        <div className="h-8 lg:h-10" />
        <FadeUp delay={0.3}>
          <p
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.4vw, 20px)",
              lineHeight: "1.55",
              color: "var(--c-neblina)",
              maxWidth: "780px",
              margin: 0,
            }}
          >
            {escritorios.subline}
          </p>
        </FadeUp>
      </div>

      {/* 4 full-bleed rows */}
      <div className="w-full">
        {escritorios.cities.map((city, i) => (
          <Row
            key={city.slug}
            city={city}
            index={i}
            isHovered={hoverIdx === i}
            onHover={() => setHoverIdx(i)}
            onLeave={() => setHoverIdx(null)}
          />
        ))}
      </div>
    </section>
  );
}
