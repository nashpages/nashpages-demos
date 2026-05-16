"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { DEBORA_DATA } from "../data";
import { FadeUp, WordReveal } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = DEBORA_DATA;
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative w-full overflow-hidden">
      {/* ============================================================
          DESKTOP — Figma 12:3 (1440 × 720) — PIXEL-PERFECT
          Layout em coords absolutas dentro de container max-w-[1440px]:
          - Eyebrow: y=200 left=80 (musgo)
          - Headline: y=240 left=80 (Geist Medium 88px, 2 lines × 96px lineHeight)
          - Subline: y=460 left=80 (Inter 17px, 2 lines × 26px, w=600px, néuoa)
          - CTAs: y=580 — AGENDAR x=80 + CONHECER x=360 (NÃO flex gap)
          - Underlines: y=604 — musgo 1.5px × 220w / névoa 1px × 190w
          - Divider: y=650 left=80 w=1280 h=1px (LINHA #d4cec3)
          - Meta: y=670 em x: 80 / 320 / 720 / 1060 (Geist Mono 10px 1.1px)
          ============================================================ */}
      <div className="hidden lg:block relative w-full h-[720px]">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.04 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
          >
            <Image
              src={hero.photoExpanded}
              alt="Dra. Débora Soares — Dermatologia"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* Pixel-perfect container 1440 mx-auto */}
        <div className="relative h-full max-w-[1440px] mx-auto">
          {/* Eyebrow @ y=200 left=80 */}
          <div className="absolute left-[80px] top-[200px]">
            <FadeUp delay={0.2}>
              <p
                className="whitespace-pre"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.76px",
                  color: "var(--c-musgo)",
                }}
              >
                {`/  ${hero.eyebrow}`}
              </p>
            </FadeUp>
          </div>

          {/* Headline @ y=240 left=80 — Geist Medium 88px, lineHeight 96px
              Cada linha vira <span class="block"> (display block quebra entre elas).
              IMPORTANTE: SEM whiteSpace nowrap no container — ele herda pros filhos
              e força tudo numa linha. */}
          <div className="absolute left-[80px] top-[240px]">
            <WordReveal
              lines={hero.headlineLines}
              delay={0.3}
              stagger={0.09}
              lineClassName="whitespace-nowrap"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "88px",
                lineHeight: "96px",
                letterSpacing: "-2.5px",
                color: "var(--c-grafite)",
              }}
            />
          </div>

          {/* Subline @ y=460 left=80 — Inter 17px, lineHeight 26px, w=600px */}
          <div className="absolute left-[80px] top-[460px] w-[600px]">
            <FadeUp delay={0.9}>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "26px",
                  color: "var(--c-nevoa)",
                }}
              >
                <span className="block">Dermatologia clínica, estética e cirúrgica.</span>
                <span className="block">Atendimento particular em Blumenau.</span>
              </p>
            </FadeUp>
          </div>

          {/* AGENDAR CONSULTA CTA @ y=580 left=80 + underline musgo 220×1.5px @ y=604 */}
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
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "1.92px",
                    color: "var(--c-grafite)",
                  }}
                >
                  {`${hero.primaryCta.label}  →`}
                </span>
                <span
                  className="block mt-[12px] origin-left transition-transform duration-500 group-hover:scale-x-110"
                  style={{
                    width: "220px",
                    height: "1.5px",
                    backgroundColor: "var(--c-musgo)",
                  }}
                />
              </a>
            </FadeUp>
          </div>

          {/* CONHECER A DRA CTA @ y=580 left=360 + underline névoa 190×1px @ y=604 */}
          <div className="absolute left-[360px] top-[580px]">
            <FadeUp delay={1.15}>
              <a href={hero.secondaryCta.href} className="group block">
                <span
                  className="whitespace-pre block transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "1.92px",
                    color: "var(--c-nevoa)",
                  }}
                >
                  {`${hero.secondaryCta.label}  →`}
                </span>
                <span
                  className="block mt-[12px] origin-left transition-transform duration-500 group-hover:scale-x-110"
                  style={{
                    width: "190px",
                    height: "1px",
                    backgroundColor: "var(--c-nevoa)",
                  }}
                />
              </a>
            </FadeUp>
          </div>

          {/* Divider @ y=650 left=80 w=1280 h=1px LINHA */}
          <div
            className="absolute left-[80px] top-[650px]"
            style={{
              width: "1280px",
              height: "1px",
              backgroundColor: "var(--c-linha)",
            }}
          />

          {/* Meta @ y=670 — coords absolutas individuais (NÃO justify-between) */}
          <FadeUp delay={1.25}>
            <p
              className="absolute left-[80px] top-[670px] whitespace-nowrap"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 400,
                fontSize: "10px",
                letterSpacing: "1.1px",
                color: "var(--c-nevoa)",
              }}
            >
              {hero.meta[0]}
            </p>
            <p
              className="absolute left-[320px] top-[670px] whitespace-nowrap"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 400,
                fontSize: "10px",
                letterSpacing: "1.1px",
                color: "var(--c-nevoa)",
              }}
            >
              {hero.meta[1]}
            </p>
            <p
              className="absolute left-[720px] top-[670px] whitespace-nowrap"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 400,
                fontSize: "10px",
                letterSpacing: "1.1px",
                color: "var(--c-nevoa)",
              }}
            >
              {hero.meta[2]}
            </p>
            <p
              className="absolute left-[1060px] top-[670px] whitespace-pre"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 400,
                fontSize: "10px",
                letterSpacing: "1.1px",
                color: "var(--c-nevoa)",
              }}
            >
              {hero.meta[3]}
            </p>
          </FadeUp>
        </div>
      </div>

      {/* ============================================================
          MOBILE — Figma 25:2 (375 × 800)
          - foto retrato-hero full-bleed top 440h with gradient overlay
          - content abaixo: eyebrow + headline + CTA pill + secondary link
          ============================================================ */}
      <div className="lg:hidden relative w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
        <motion.div
          className="relative w-full h-[440px] overflow-hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.08 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
          >
            <Image
              src={hero.photoMobile}
              alt="Dra. Débora Soares"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-[center_top]"
            />
          </motion.div>
          {/* Gradient overlay for nav contrast */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[140px] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(46,45,41,0.55) 0%, rgba(46,45,41,0) 100%)",
            }}
          />
        </motion.div>

        <div className="px-6 pt-10 pb-12">
          <FadeUp delay={0.2}>
            <p
              className="text-[9px] tracking-[0.13em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              /  {hero.eyebrow}
            </p>
          </FadeUp>
          <div className="h-[16px]" />
          <WordReveal
            lines={hero.headlineLines.map((l) =>
              l.replace("Diagnóstico clínico", "Diagnóstico\nclínico").replace("para cada pele.", "para cada\npele.")
            )}
            delay={0.35}
            stagger={0.07}
            className="block"
            lineClassName="leading-[1.1]"
            style={{
              fontFamily: "var(--font-geist)",
              fontWeight: 500,
              fontSize: "40px",
              letterSpacing: "-0.03em",
              color: "var(--c-grafite)",
              whiteSpace: "pre-line",
            }}
          />
          <div className="h-[32px]" />
          <FadeUp delay={0.9}>
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center rounded-full py-4 px-6 text-[11px] tracking-[0.16em] transition-opacity hover:opacity-90"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                backgroundColor: "var(--c-musgo)",
                color: "var(--c-pedra)",
              }}
            >
              {hero.primaryCta.label}  →
            </a>
          </FadeUp>
          <div className="h-[20px]" />
          <FadeUp delay={1.05}>
            <a
              href={hero.secondaryCta.href}
              className="text-[11px] tracking-[0.16em] inline-block"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "var(--c-nevoa)",
              }}
            >
              {hero.secondaryCta.label}  →
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
