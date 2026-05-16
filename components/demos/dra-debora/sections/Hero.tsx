"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { DEBORA_DATA } from "../data";
import { FadeUp } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = DEBORA_DATA;
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-pedra)" }}>
      {/* ============================================================
          DESKTOP — split: foto direita 4K + bg pedra esquerda
          - Foto atendendo.jpg (3648×5472, 4K real) full-bleed direita do viewport
          - Width clamp(440, 34vw, 540) — Figma exato em 1440 ~ 490
          - Bg section PEDRA sólido (mesma cor da paleta — match perfeito)
          - Text LEFT em coords absolutas alinhado com container 1440 mx-auto
          - CSS filter warming sutil + gradient feather no edge esquerdo da foto
          ============================================================ */}
      <div className="hidden lg:block relative w-full h-[720px]">
        {/* FOTO — fora do container 1440, full-bleed na borda direita do viewport */}
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
            style={{
              filter: "sepia(0.08) saturate(1.06) brightness(1.03) contrast(1.04)",
            }}
          >
            <Image
              src={hero.photo}
              alt="Dra. Débora Soares — Dermatologia"
              fill
              priority
              quality={100}
              sizes="(min-width: 1024px) clamp(440px, 34vw, 540px), 100vw"
              className="object-cover object-[center_18%]"
            />
          </motion.div>
          {/* Gradient feather no edge esquerdo da foto pra integração com bg pedra */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(236,231,223,0.55) 0%, rgba(236,231,223,0) 22%)",
            }}
          />
        </motion.div>

        {/* TEXT zone — dentro do container 1440 mx-auto */}
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
              <h1> nativo com 2 <span class="block"> (render direto preserva espaços) */}
          <div className="absolute left-[80px] top-[240px]">
            <FadeUp delay={0.3} y={32} duration={0.9}>
              <h1
                style={{
                  fontFamily: "var(--font-geist)",
                  fontWeight: 500,
                  fontSize: "88px",
                  lineHeight: "96px",
                  letterSpacing: "-2.5px",
                  color: "var(--c-grafite)",
                  margin: 0,
                }}
              >
                <span className="block whitespace-nowrap">{hero.headlineLines[0]}</span>
                <span className="block whitespace-nowrap">{hero.headlineLines[1]}</span>
              </h1>
            </FadeUp>
          </div>

          {/* Subline @ y=460 left=80 — Inter 17px lineHeight 26px */}
          <div className="absolute left-[80px] top-[460px]"
            style={{
              right: "calc(clamp(440px, 34vw, 540px) + 48px - max(0px, (100vw - 1440px) / 2))",
            }}
          >
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

          {/* AGENDAR CONSULTA @ y=580 left=80 + underline musgo 220×1.5px */}
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

          {/* CONHECER A DRA @ y=580 left=360 + underline névoa 190×1px */}
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

          {/* Divider @ y=650 left=80 — width termina antes da foto pra não cruzar */}
          <div
            className="absolute left-[80px] top-[650px]"
            style={{
              right: "calc(clamp(440px, 34vw, 540px) + 0px - max(0px, (100vw - 1440px) / 2))",
              height: "1px",
              backgroundColor: "var(--c-linha)",
            }}
          />

          {/* Meta @ y=670 — coords absolutas (LEFT antes da foto começar) */}
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
              className="absolute left-[280px] top-[670px] whitespace-nowrap"
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
              className="absolute left-[600px] top-[670px] whitespace-nowrap"
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
              className="absolute left-[820px] top-[670px] whitespace-pre"
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
          MOBILE — foto full-bleed top 440h + content abaixo
          Mesma foto atendendo.jpg (4K) — qualidade preservada em 375w
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
            initial={reduce ? false : { scale: 1.06 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
            style={{
              filter: "sepia(0.08) saturate(1.06) brightness(1.03) contrast(1.04)",
            }}
          >
            <Image
              src={hero.photo}
              alt="Dra. Débora Soares"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-[center_18%]"
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
          <FadeUp delay={0.35} y={24} duration={0.8}>
            <h1
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "44px",
                letterSpacing: "-1.2px",
                color: "var(--c-grafite)",
                margin: 0,
              }}
            >
              <span className="block">{hero.headlineLines[0]}</span>
              <span className="block">{hero.headlineLines[1]}</span>
            </h1>
          </FadeUp>
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
