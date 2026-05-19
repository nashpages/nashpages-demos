"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MPL_DATA } from "../data";
import { FadeUp } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Escritorios() {
  const { escritorios } = MPL_DATA;
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "var(--c-tinta-deep)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] pt-20 lg:pt-28">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-accent-light)",
            }}
          >
            {escritorios.eyebrow}
          </p>
          <span
            aria-hidden
            className="block mt-3"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent-light)" }}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-10 mb-14 lg:mb-20"
            style={{
              fontFamily: "var(--font-source-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "clamp(-0.8px, -0.12vw, -1.4px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {escritorios.headline}
          </h2>
        </FadeUp>
      </div>

      {/* Rows full-bleed */}
      <div>
        {escritorios.cidades.map((cidade, i) => (
          <div
            key={cidade.nome}
            className="relative w-full h-[180px] md:h-[200px] overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ scale: hoverIdx === i ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Image
                src={cidade.photo}
                alt=""
                fill
                loading="eager"
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
            <motion.div
              aria-hidden
              className="absolute inset-0"
              animate={{
                background:
                  hoverIdx === i
                    ? "linear-gradient(to right, rgba(16,12,8,0.75) 0%, rgba(16,12,8,0.40) 100%)"
                    : "linear-gradient(to right, rgba(16,12,8,0.85) 0%, rgba(16,12,8,0.50) 100%)",
              }}
              transition={{ duration: 0.4, ease: EASE }}
            />
            <div className="relative max-w-[1440px] mx-auto h-full px-6 lg:px-[80px] flex items-center justify-between gap-4">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "1.6px",
                    color: "var(--c-accent-light)",
                  }}
                >
                  {cidade.label}
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-source-serif)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    letterSpacing: "clamp(-0.6px, -0.08vw, -1px)",
                    color: "var(--c-papel)",
                    lineHeight: 1.1,
                  }}
                >
                  {cidade.nome}
                </p>
                <p
                  className="mt-3 hidden md:block"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 400,
                    fontSize: "11px",
                    letterSpacing: "1.4px",
                    color: "#C7BCA8",
                  }}
                >
                  {cidade.endereco}
                </p>
              </div>
              <div className="flex items-center gap-4 lg:gap-6">
                <a
                  href={`tel:${cidade.tel.replace(/\s+/g, "")}`}
                  className="hidden md:block hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-source-serif)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "22px",
                    color: "var(--c-papel)",
                  }}
                >
                  {cidade.tel}
                </a>
                <motion.span
                  aria-hidden
                  animate={{ x: hoverIdx === i ? 8 : 0, opacity: hoverIdx === i ? 1 : 0.5 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  style={{
                    fontFamily: "var(--font-source-serif)",
                    fontWeight: 300,
                    fontSize: "32px",
                    color: "var(--c-accent-light)",
                  }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
