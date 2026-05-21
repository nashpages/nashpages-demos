"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FASANO_DATA } from "../data";
import { FadeUp } from "../motion";

export function Apresentacao() {
  const a = FASANO_DATA.apresentacao;
  const reduce = useReducedMotion();

  return (
    <section
      id="apresentacao"
      data-snap-section
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      style={{ backgroundColor: "var(--c-noite)" }}
    >
      {/* Foto piscina + vegetação + Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.07] }}
        transition={
          reduce
            ? undefined
            : { duration: 22, ease: "linear", repeat: Infinity, repeatType: "reverse" }
        }
      >
        <Image
          src={a.photo}
          alt={a.alt}
          fill
          loading="eager"
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay — base forte pra revelar a marca */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,18,14,0.12) 0%, rgba(20,18,14,0.28) 48%, rgba(20,18,14,0.82) 100%)",
        }}
      />

      {/* Marca — canto inferior esquerdo */}
      <div className="absolute inset-0 z-10">
        <div className="max-w-[1440px] mx-auto h-full relative px-6 lg:px-[100px]">
          <div
            className="absolute left-6 right-6 lg:left-[100px] lg:right-[100px]"
            style={{ bottom: "clamp(56px, 9vh, 100px)" }}
          >
            <FadeUp y={18} duration={1}>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  fontSize: "13px",
                  letterSpacing: "2.8px",
                  color: "var(--c-madeira-light)",
                  marginBottom: "22px",
                }}
              >
                {a.eyebrow}
              </p>
            </FadeUp>
            <FadeUp y={28} delay={0.08} duration={1.05}>
              <h1
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  fontWeight: 500,
                  fontSize: "clamp(54px, 9vw, 132px)",
                  lineHeight: 1,
                  letterSpacing: "-1px",
                  color: "var(--c-areia)",
                  margin: 0,
                }}
              >
                {a.wordmark}
              </h1>
            </FadeUp>
            <FadeUp y={20} delay={0.18} duration={1.05}>
              <p
                className="mt-6"
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 2.4vw, 31px)",
                  lineHeight: 1.3,
                  color: "var(--c-areia)",
                  opacity: 0.94,
                  margin: 0,
                  maxWidth: "820px",
                }}
              >
                {a.phrase}
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
