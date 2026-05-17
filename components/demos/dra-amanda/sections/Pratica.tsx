"use client";

import { AMANDA_DATA, AMANDA_PALETTE } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Pratica() {
  return (
    <section
      id="pratica"
      className="relative w-full"
      style={{ backgroundColor: AMANDA_PALETTE.papel, minHeight: 1050 }}
    >
      <div className="relative max-w-[1440px] mx-auto h-[1050px]">
        {/* Foto Palestra agora vive em TravelingPhotos (wrapper position:fixed) */}

        {/* Texto à direita */}
        <div className="hidden lg:block absolute" style={{ left: 520, top: 120, width: 800 }}>
          <FadeUp delay={0.1}>
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
          </FadeUp>

          <FadeUp delay={0.25} y={32}>
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
          </FadeUp>

          <FadeUp delay={0.55}>
            <div
              style={{
                height: 1,
                width: 60,
                backgroundColor: AMANDA_PALETTE.carmim,
                marginTop: 32,
                marginBottom: 32,
              }}
            />
          </FadeUp>

          <Stagger staggerChildren={0.12} delayChildren={0.6}>
            {AMANDA_DATA.pratica.bio.map((para, i) => (
              <StaggerItem key={i}>
                <p
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* 4 cards horizontais — wrapper div externo preserva o absolute positioning */}
        <div
          className="hidden lg:block absolute"
          style={{ left: 520, top: 640 }}
        >
          <Stagger staggerChildren={0.14} delayChildren={0.8}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "180px 180px 180px 180px",
                gap: 20,
              }}
            >
              {AMANDA_DATA.pratica.cards.map((card) => (
                <StaggerItem key={card.num} y={32}>
                  <div
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
                </StaggerItem>
              ))}
            </div>
          </Stagger>
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
          <Stagger staggerChildren={0.1} delayChildren={1.2}>
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
                <StaggerItem key={c.num}>
                  <div>
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
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>

        {/* Mobile placeholder — refina Task 17 */}
        <div className="lg:hidden">{/* Implementar layout mobile na Task 17 */}</div>
      </div>
    </section>
  );
}
