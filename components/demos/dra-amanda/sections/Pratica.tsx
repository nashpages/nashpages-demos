"use client";

import Image from "next/image";
import { AMANDA_DATA, AMANDA_PALETTE, AMANDA_PHOTOS } from "../data";

export function Pratica() {
  return (
    <section
      id="pratica"
      className="relative w-full"
      style={{ backgroundColor: AMANDA_PALETTE.papel, minHeight: 1050 }}
    >
      <div className="relative max-w-[1440px] mx-auto h-[1050px]">
        {/* Foto Palestra MENOR ESQ — controlada via FLIP na Task 12 */}
        <div
          className="hidden lg:block absolute"
          style={{
            left: 120,
            top: 200,
            width: 360,
            height: 500,
            overflow: "hidden",
          }}
          data-pratica-photo
        >
          <Image
            src={AMANDA_PHOTOS.palestra}
            alt="Dra. Amanda em palestra"
            fill
            quality={100}
            sizes="360px"
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
              filter: "sepia(0.06) saturate(1.04) brightness(1.02) contrast(1.04)",
            }}
          />
        </div>

        {/* Texto à direita */}
        <div className="hidden lg:block absolute" style={{ left: 520, top: 120, width: 800 }}>
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
            {AMANDA_DATA.pratica.eyebrow}
          </p>

          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              fontSize: 64,
              lineHeight: "72px",
              letterSpacing: "-1.8px",
              color: AMANDA_PALETTE.tinta,
              fontVariationSettings: "'SOFT' 0, 'WONK' 1",
              margin: 0,
            }}
          >
            <span className="block whitespace-nowrap">{AMANDA_DATA.pratica.headlineLines[0]}</span>
            <span className="block whitespace-nowrap">{AMANDA_DATA.pratica.headlineLines[1]}</span>
          </h2>

          <div
            style={{
              height: 1,
              width: 60,
              backgroundColor: AMANDA_PALETTE.carmim,
              marginTop: 32,
              marginBottom: 32,
            }}
          />

          {AMANDA_DATA.pratica.bio.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: "28px",
                color: AMANDA_PALETTE.tinta,
                maxWidth: 800,
                marginBottom: 16,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* 4 cards horizontais — começam y=640 (col x=120/720/920/1120 em 180w cada) */}
        <div
          className="hidden lg:grid absolute"
          style={{
            left: 520,
            top: 640,
            gridTemplateColumns: "180px 180px 180px 180px",
            gap: 20,
          }}
        >
          {AMANDA_DATA.pratica.cards.map((card) => (
            <div
              key={card.num}
              style={{
                borderTop: `1px solid ${AMANDA_PALETTE.carmim}`,
                paddingTop: 24,
                width: 180,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-fraunces)",
                  fontWeight: 400,
                  fontSize: 64,
                  lineHeight: "72px",
                  letterSpacing: "-1.4px",
                  color: AMANDA_PALETTE.carmim,
                  fontVariationSettings: "'SOFT' 0, 'WONK' 1",
                }}
              >
                {card.num}
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 14,
                  color: AMANDA_PALETTE.tinta,
                  letterSpacing: "1.68px",
                  textTransform: "uppercase",
                  marginTop: 20,
                  marginBottom: 12,
                }}
              >
                {card.label}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "20px",
                  color: AMANDA_PALETTE.tinta,
                  maxWidth: 170,
                  margin: 0,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Strip 3 credenciais — bottom, full container width */}
        <div
          className="hidden lg:block absolute"
          style={{
            left: 120,
            right: 120,
            bottom: 30,
          }}
        >
          <div
            style={{
              borderTop: `1px solid ${AMANDA_PALETTE.carmim}`,
              paddingTop: 24,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {AMANDA_DATA.pratica.credentials.map((c) => (
              <div key={c.num}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-fraunces)",
                    fontWeight: 400,
                    fontSize: 36,
                    color: AMANDA_PALETTE.carmim,
                    marginBottom: 12,
                    fontVariationSettings: "'SOFT' 0, 'WONK' 1",
                  }}
                >
                  {c.num}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: AMANDA_PALETTE.tinta,
                    letterSpacing: "1.8px",
                    marginBottom: 8,
                  }}
                >
                  {c.label}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 400,
                    fontSize: 11,
                    color: AMANDA_PALETTE.neblina,
                    letterSpacing: "1.1px",
                  }}
                >
                  {c.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile placeholder — refina Task 17 */}
        <div className="lg:hidden">{/* Implementar layout mobile na Task 17 */}</div>
      </div>
    </section>
  );
}
