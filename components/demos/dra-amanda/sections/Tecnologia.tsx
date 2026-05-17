"use client";

import Image from "next/image";
import { AMANDA_DATA, AMANDA_PALETTE, AMANDA_PHOTOS } from "../data";

export function Tecnologia() {
  return (
    <section
      id="tecnologia"
      className="relative w-full"
      style={{ backgroundColor: AMANDA_PALETTE.papel, minHeight: 900 }}
    >
      <div className="relative max-w-[1440px] mx-auto h-[900px]">
        {/* Foto Ultraformer DIR — cap rígido 440w pra evitar pixelização (fonte 640w) */}
        <div
          className="hidden lg:block absolute"
          style={{
            right: 120,
            top: 160,
            width: 440,
            height: 580,
            overflow: "hidden",
          }}
          data-tecnologia-photo
        >
          <Image
            src={AMANDA_PHOTOS.ultraformer}
            alt="Equipamento Ultraformer"
            fill
            quality={100}
            sizes="440px"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "sepia(0.05) saturate(1.04) brightness(1.02) contrast(1.05)",
            }}
          />
        </div>

        {/* Texto à esquerda */}
        <div className="hidden lg:block absolute" style={{ left: 120, top: 120, width: 680 }}>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: 12,
              color: AMANDA_PALETTE.carmim,
              letterSpacing: "1.92px",
              textTransform: "uppercase",
              marginBottom: 40,
            }}
          >
            {AMANDA_DATA.tecnologia.eyebrow}
          </p>

          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              fontSize: 80,
              lineHeight: "88px",
              letterSpacing: "-2px",
              color: AMANDA_PALETTE.tinta,
              fontVariationSettings: "'SOFT' 0, 'WONK' 1",
              margin: 0,
            }}
          >
            <span className="block whitespace-nowrap">{AMANDA_DATA.tecnologia.headlineLines[0]}</span>
            <span className="block whitespace-nowrap">{AMANDA_DATA.tecnologia.headlineLines[1]}</span>
          </h2>

          <div
            style={{
              height: 1,
              width: 60,
              backgroundColor: AMANDA_PALETTE.carmim,
              marginTop: 40,
              marginBottom: 32,
            }}
          />

          {AMANDA_DATA.tecnologia.paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: "28px",
                color: AMANDA_PALETTE.tinta,
                maxWidth: 680,
                marginBottom: 28,
              }}
            >
              {para}
            </p>
          ))}

          <p
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "32px",
              letterSpacing: "-0.3px",
              color: AMANDA_PALETTE.neblina,
              marginTop: 32,
              maxWidth: 680,
            }}
          >
            {AMANDA_DATA.tecnologia.quote}
          </p>
        </div>

        {/* Photo caption sob a foto */}
        <p
          className="hidden lg:block absolute"
          style={{
            right: 120,
            top: 760,
            width: 440,
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 400,
            fontSize: 11,
            color: AMANDA_PALETTE.neblina,
            letterSpacing: "1.1px",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {AMANDA_DATA.tecnologia.photoCaption}
        </p>

        {/* Mobile placeholder — refina Task 17 */}
        <div className="lg:hidden">{/* Implementar layout mobile na Task 17 */}</div>
      </div>
    </section>
  );
}
