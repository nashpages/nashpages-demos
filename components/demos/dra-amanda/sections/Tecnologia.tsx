"use client";

import { AMANDA_DATA, AMANDA_PALETTE } from "../data";
import { FadeUp, Stagger, StaggerItem, WordReveal } from "../motion";

export function Tecnologia() {
  return (
    <section
      id="tecnologia"
      className="relative w-full"
      style={{ backgroundColor: AMANDA_PALETTE.papel, minHeight: 900 }}
    >
      <div className="relative max-w-[1440px] mx-auto h-[900px]">
        {/* Foto Ultraformer agora vive em TravelingPhotos (wrapper position:fixed) */}

        {/* Texto à esquerda */}
        <div className="hidden lg:block absolute" style={{ left: 120, top: 120, width: 680 }}>
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
              {AMANDA_DATA.tecnologia.eyebrow}
            </p>
          </FadeUp>

          <WordReveal
            lines={AMANDA_DATA.tecnologia.headlineLines}
            delay={0.25}
            stagger={0.1}
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
          />

          <FadeUp delay={0.65}>
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

          <Stagger staggerChildren={0.18} delayChildren={0.75}>
            {AMANDA_DATA.tecnologia.paragraphs.map((para, i) => (
              <StaggerItem key={i}>
                <p
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
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={1.2}>
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
          </FadeUp>
        </div>

        {/* Photo caption sob a foto */}
        <div
          className="hidden lg:block absolute"
          style={{ right: 120, top: 760, width: 440 }}
        >
          <FadeUp delay={1.3}>
            <p
              style={{
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
          </FadeUp>
        </div>

        {/* Mobile placeholder — refina Task 17 */}
        <div className="lg:hidden">{/* Implementar layout mobile na Task 17 */}</div>
      </div>
    </section>
  );
}
