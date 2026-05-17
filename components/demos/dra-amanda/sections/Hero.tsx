"use client";

import { AMANDA_DATA, AMANDA_PALETTE } from "../data";
import { FadeUp, WordReveal } from "../motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ backgroundColor: AMANDA_PALETTE.papel, minHeight: 900 }}
    >
      <div className="relative max-w-[1440px] mx-auto h-[900px]">
        {/* Foto Palestra agora vive em TravelingPhotos (wrapper position:fixed) */}

        {/* Texto à direita */}
        <div
          className="hidden lg:block absolute"
          style={{
            left: 820,
            top: 200,
            width: 640,
          }}
        >
          <FadeUp delay={0.1}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 12,
                color: AMANDA_PALETTE.carmim,
                letterSpacing: "1.92px",
                textTransform: "uppercase",
                marginBottom: 60,
              }}
            >
              {AMANDA_DATA.hero.eyebrow}
            </p>
          </FadeUp>

          <WordReveal
            lines={AMANDA_DATA.hero.headlineLines}
            delay={0.25}
            stagger={0.08}
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              fontSize: 96,
              lineHeight: "100px",
              letterSpacing: "-2.4px",
              color: AMANDA_PALETTE.tinta,
              fontVariationSettings: "'SOFT' 0, 'WONK' 1",
              margin: 0,
            }}
          />

          <FadeUp delay={0.55}>
            <div
              style={{
                height: 1,
                width: 60,
                backgroundColor: AMANDA_PALETTE.carmim,
                marginTop: 40,
                marginBottom: 32,
              }}
            />
          </FadeUp>

          <FadeUp delay={0.65}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: "28px",
                color: AMANDA_PALETTE.tinta,
                maxWidth: 480,
              }}
            >
              {AMANDA_DATA.hero.subline}
            </p>
          </FadeUp>

          <FadeUp delay={0.8}>
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: 20,
                lineHeight: "32px",
                letterSpacing: "-0.3px",
                color: AMANDA_PALETTE.neblina,
                marginTop: 40,
                maxWidth: 480,
              }}
            >
              {AMANDA_DATA.hero.quote}
            </p>
          </FadeUp>

          <FadeUp delay={0.95}>
            <div className="flex items-center gap-12 mt-12">
              <a
                href={AMANDA_DATA.hero.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 236,
                  height: 56,
                  backgroundColor: AMANDA_PALETTE.carmim,
                  color: AMANDA_PALETTE.papel,
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: "1.76px",
                  textTransform: "uppercase",
                }}
              >
                {AMANDA_DATA.hero.primaryCta.label} →
              </a>
              <a
                href={AMANDA_DATA.hero.secondaryCta.href}
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: "1.76px",
                  textTransform: "uppercase",
                  color: AMANDA_PALETTE.tinta,
                  borderBottom: `1px solid ${AMANDA_PALETTE.linha}`,
                  paddingBottom: 2,
                }}
              >
                {AMANDA_DATA.hero.secondaryCta.label} →
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Versão mobile do Hero (foto full-width + texto abaixo) — placeholder, refina Task 17 */}
        <div className="lg:hidden">
          {/* Implementar layout mobile na Task 17 */}
        </div>
      </div>
    </section>
  );
}
