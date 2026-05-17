"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { RENATA_DATA } from "../data";
import { FadeUp } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = RENATA_DATA;
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-papel)" }}>
      {/* ============================================================
          DESKTOP
          ============================================================ */}
      <div className="hidden lg:block relative w-full h-[800px]">
        <motion.div
          className="absolute right-0 top-0 bottom-0 overflow-hidden"
          style={{ width: "clamp(440px, 34vw, 540px)" }}
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.06 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 2, ease: EASE }}
            style={{}}
          >
            <Image
              src={hero.photo}
              alt="Dra. Renata Americo — Dermatologia"
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
            style={{
              background:
                "linear-gradient(to right, rgba(250,250,247,0.25) 0%, rgba(250,250,247,0) 18%)",
            }}
          />
        </motion.div>

        <div className="relative h-full max-w-[1440px] mx-auto">
          {/* Eyebrow @ y=200 */}
          <div className="absolute left-[80px] top-[200px]">
            <FadeUp delay={0.2}>
              <p
                className="whitespace-pre"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "1.92px",
                  color: "var(--c-accent)",
                }}
              >
                {`/  ${hero.eyebrow}`}
              </p>
            </FadeUp>
          </div>

          {/* Headline @ y=240 */}
          <div className="absolute left-[80px] top-[240px]">
            <FadeUp delay={0.3} y={32} duration={0.9}>
              <h1
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: "88px",
                  lineHeight: "96px",
                  letterSpacing: "-2.5px",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                <span className="block whitespace-nowrap">{hero.headlineLines[0]}</span>
                <span className="block whitespace-nowrap">{hero.headlineLines[1]}</span>
              </h1>
            </FadeUp>
          </div>

          {/* Subline @ y=460 */}
          <div
            className="absolute left-[80px] top-[460px]"
            style={{
              right: "calc(clamp(440px, 34vw, 540px) + 48px - max(0px, (100vw - 1440px) / 2))",
            }}
          >
            <FadeUp delay={0.9}>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "17px",
                  lineHeight: "26px",
                  color: "var(--c-neblina)",
                  maxWidth: "720px",
                }}
              >
                {hero.subline}
              </p>
            </FadeUp>
          </div>

          {/* CTA primary @ y=580 */}
          <div className="absolute left-[80px] top-[580px]">
            <FadeUp delay={1.05}>
              <a
                href={hero.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <span
                  className="whitespace-pre block transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "1.92px",
                    color: "var(--c-tinta)",
                  }}
                >
                  {`${hero.primaryCta.label}  →`}
                </span>
                <span
                  className="block mt-[12px] origin-left transition-transform duration-500 group-hover:scale-x-110"
                  style={{
                    width: "240px",
                    height: "1.5px",
                    backgroundColor: "var(--c-accent)",
                  }}
                />
              </a>
            </FadeUp>
          </div>

          {/* CTA secondary @ y=580 left=380 */}
          <div className="absolute left-[380px] top-[580px]">
            <FadeUp delay={1.15}>
              <a href={hero.secondaryCta.href} className="group block">
                <span
                  className="whitespace-pre block transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "1.92px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {`${hero.secondaryCta.label}  →`}
                </span>
                <span
                  className="block mt-[12px] origin-left transition-transform duration-500 group-hover:scale-x-110"
                  style={{ width: "190px", height: "1px", backgroundColor: "var(--c-neblina)" }}
                />
              </a>
            </FadeUp>
          </div>

          {/* Divider @ y=652 */}
          <div
            className="absolute left-[80px] top-[652px]"
            style={{
              right: "calc(clamp(440px, 34vw, 540px) + 0px - max(0px, (100vw - 1440px) / 2))",
              height: "1px",
              backgroundColor: "var(--c-linha)",
            }}
          />

          {/* Meta 4 cols @ y=672 */}
          <FadeUp delay={1.25}>
            {hero.meta.map((m, i) => {
              const positions = [80, 280, 480, 760];
              return (
                <p
                  key={i}
                  className="absolute whitespace-nowrap"
                  style={{
                    left: `${positions[i]}px`,
                    top: "672px",
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "1.1px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {m}
                </p>
              );
            })}
          </FadeUp>
        </div>
      </div>

      {/* ============================================================
          MOBILE
          ============================================================ */}
      <div className="lg:hidden relative w-full" style={{ backgroundColor: "var(--c-papel)" }}>
        <motion.div
          className="relative w-full h-[460px] overflow-hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.06 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
            style={{}}
          >
            <Image
              src={hero.photo}
              alt="Dra. Renata Americo"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[140px] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,28,38,0.55) 0%, rgba(14,28,38,0) 100%)",
            }}
          />
        </motion.div>

        <div className="px-6 pt-10 pb-12">
          <FadeUp delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "1.5px",
                color: "var(--c-accent)",
              }}
            >
              {`/  ${hero.eyebrow}`}
            </p>
          </FadeUp>
          <div className="h-[16px]" />
          <FadeUp delay={0.35} y={24} duration={0.8}>
            <h1
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: "38px",
                lineHeight: "44px",
                letterSpacing: "-1.2px",
                color: "var(--c-tinta)",
                margin: 0,
              }}
            >
              <span className="block">{hero.headlineLines[0]}</span>
              <span className="block">{hero.headlineLines[1]}</span>
            </h1>
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={0.7}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: "24px",
                color: "var(--c-neblina)",
              }}
            >
              {hero.subline}
            </p>
          </FadeUp>
          <div className="h-[32px]" />
          <FadeUp delay={0.9}>
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center rounded-full py-4 px-6 transition-opacity hover:opacity-90"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "14px",
                backgroundColor: "var(--c-accent)",
                color: "var(--c-papel)",
              }}
            >
              {hero.primaryCta.label}  →
            </a>
          </FadeUp>
          <div className="h-[20px]" />
          <FadeUp delay={1.05}>
            <a
              href={hero.secondaryCta.href}
              className="block w-full text-center"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.76px",
                color: "var(--c-neblina)",
              }}
            >
              {hero.secondaryCta.label}  →
            </a>
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={1.15}>
            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: "9px",
                letterSpacing: "1.2px",
                color: "var(--c-neblina)",
              }}
            >
              {hero.metaMobile.join("  ·  ")}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
