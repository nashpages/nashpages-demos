"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { DERIZE_DATA } from "../data";
import { FadeUp } from "../motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const EASE_SMOOTH = [0.22, 0.61, 0.36, 1] as const;

export function Hero() {
  const { hero } = DERIZE_DATA;
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-papel)" }}>
      {/* DESKTOP */}
      <div className="hidden lg:block relative w-full h-[800px]">
        <motion.div
          className="absolute right-0 top-0 bottom-0 overflow-hidden"
          style={{ width: "clamp(440px, 34vw, 540px)" }}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: EASE_SMOOTH, delay: 0.15 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.08 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 2.6, ease: EASE_SMOOTH }}
          >
            <Image
              src={hero.photo}
              alt="Dra. Derize Salles"
              fill
              priority
              quality={100}
              sizes="(min-width: 1024px) clamp(440px, 34vw, 540px), 100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(245,241,232,0.25) 0%, rgba(245,241,232,0) 18%)" }}
          />
        </motion.div>

        <div className="relative h-full max-w-[1440px] mx-auto">
          <div className="absolute left-[80px] top-[180px]">
            <FadeUp delay={0.2}>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "1.92px", color: "var(--c-accent)" }}>
                {`§ 01  ·  ${hero.eyebrow}`}
              </p>
            </FadeUp>
          </div>

          <div className="absolute left-[80px] top-[226px]">
            <FadeUp delay={0.3} y={32} duration={0.9}>
              <h1
                style={{
                  fontFamily: "var(--font-spectral)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(72px, 7.2vw, 104px)",
                  lineHeight: "1.08",
                  letterSpacing: "clamp(-1.5px, -0.17vw, -2.4px)",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                <span className="block whitespace-nowrap">{hero.headlineLines[0]}</span>
                <span className="block whitespace-nowrap">{hero.headlineLines[1]}</span>
              </h1>
            </FadeUp>
          </div>

          <div
            className="absolute left-[80px] top-[520px]"
            style={{ right: "calc(clamp(440px, 34vw, 540px) + 48px - max(0px, (100vw - 1440px) / 2))" }}
          >
            <FadeUp delay={0.8}>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "17px", lineHeight: "28px", color: "var(--c-neblina)", maxWidth: "640px" }}>
                {hero.subline}
              </p>
            </FadeUp>
          </div>

          <div
            className="absolute left-[80px] top-[640px]"
            style={{ right: "calc(clamp(440px, 34vw, 540px) + 0px - max(0px, (100vw - 1440px) / 2))", height: "1px", backgroundColor: "var(--c-linha)" }}
          />

          <FadeUp delay={0.95}>
            <p
              className="absolute whitespace-nowrap"
              style={{ left: "80px", top: "660px", fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.8px", color: "var(--c-neblina)" }}
            >
              {hero.marginalia}
            </p>
          </FadeUp>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden relative w-full" style={{ backgroundColor: "var(--c-papel)" }}>
        <motion.div className="relative w-full h-[460px] overflow-hidden" initial={reduce ? false : { opacity: 0, y: 16 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: EASE_SMOOTH, delay: 0.1 }}>
          <motion.div className="absolute inset-0" initial={reduce ? false : { scale: 1.08 }} animate={reduce ? undefined : { scale: 1 }} transition={{ duration: 2.4, ease: EASE_SMOOTH }}>
            <Image src={hero.photo} alt="Dra. Derize Salles" fill priority quality={100} sizes="100vw" className="object-cover object-center" />
          </motion.div>
          <div aria-hidden className="absolute inset-x-0 top-0 h-[140px] pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(42,37,32,0.40) 0%, rgba(42,37,32,0) 100%)" }} />
        </motion.div>

        <div className="px-6 pt-10 pb-12">
          <FadeUp delay={0.2}>
            <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>{`§ 01  ·  ${hero.eyebrow}`}</p>
          </FadeUp>
          <div className="h-[16px]" />
          <FadeUp delay={0.35} y={24} duration={0.8}>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "48px", lineHeight: "1.1", letterSpacing: "-1.2px", color: "var(--c-tinta)", margin: 0 }}>
              <span className="block">{hero.headlineLines[0]}</span>
              <span className="block">{hero.headlineLines[1]}</span>
            </h1>
          </FadeUp>
          <div className="h-[24px]" />
          <FadeUp delay={0.7}>
            <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "15px", lineHeight: "24px", color: "var(--c-neblina)" }}>{hero.subline}</p>
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={1}>
            <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "9px", letterSpacing: "1.5px", color: "var(--c-neblina)" }}>
              {hero.marginalia}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
