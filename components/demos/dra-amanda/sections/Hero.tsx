"use client";

import Image from "next/image";
import { AMANDA_DATA, AMANDA_PALETTE, AMANDA_PHOTOS } from "../data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ backgroundColor: AMANDA_PALETTE.papel, minHeight: 900 }}
    >
      <div className="relative max-w-[1440px] mx-auto h-[900px]">
        {/* Foto Palestra ESQUERDA — grande */}
        <div
          className="hidden lg:block absolute"
          style={{
            left: 120,
            top: 140,
            width: 620,
            height: 720,
            overflow: "hidden",
          }}
          data-hero-photo
        >
          <Image
            src={AMANDA_PHOTOS.palestra}
            alt="Dra. Amanda Fistarol em palestra"
            fill
            quality={100}
            sizes="620px"
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
              filter: "sepia(0.06) saturate(1.04) brightness(1.02) contrast(1.04)",
            }}
            priority
          />
        </div>

        {/* Texto à direita */}
        <div
          className="hidden lg:block absolute"
          style={{
            left: 820,
            top: 200,
            width: 640,
          }}
        >
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

          <h1
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
          >
            <span className="block whitespace-nowrap">{AMANDA_DATA.hero.headlineLines[0]}</span>
            <span className="block whitespace-nowrap">{AMANDA_DATA.hero.headlineLines[1]}</span>
          </h1>

          <div
            style={{
              height: 1,
              width: 60,
              backgroundColor: AMANDA_PALETTE.carmim,
              marginTop: 40,
              marginBottom: 32,
            }}
          />

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
        </div>

        {/* Versão mobile do Hero (foto full-width + texto abaixo) — placeholder, refina Task 17 */}
        <div className="lg:hidden">
          {/* Implementar layout mobile na Task 17 */}
        </div>
      </div>
    </section>
  );
}
