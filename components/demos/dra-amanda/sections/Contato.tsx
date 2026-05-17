"use client";

import { AMANDA_DATA, AMANDA_PALETTE } from "../data";
import { FadeUp, Stagger, StaggerItem, WordReveal } from "../motion";

export function Contato() {
  return (
    <section
      id="contato"
      className="relative w-full"
      style={{ backgroundColor: AMANDA_PALETTE.neve, minHeight: 950 }}
    >
      <div className="relative max-w-[1440px] mx-auto h-[950px]">
        {/* Foto Retrato agora vive em TravelingPhotos (wrapper position:fixed) */}

        {/* Conteúdo principal à direita */}
        <div className="hidden lg:block absolute" style={{ left: 440, top: 120, width: 900 }}>
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
              {AMANDA_DATA.contato.eyebrow}
            </p>
          </FadeUp>

          {/* Headline gigante 144pt — data-contato-headline preservado no div wrapper */}
          <div data-contato-headline>
            <WordReveal
              lines={AMANDA_DATA.contato.headlineLines}
              delay={0.2}
              stagger={0.12}
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 400,
                fontSize: 144,
                lineHeight: "152px",
                letterSpacing: "-4px",
                color: AMANDA_PALETTE.tinta,
                fontVariationSettings: "'SOFT' 0, 'WONK' 1",
                margin: 0,
              }}
            />
          </div>

          <FadeUp delay={0.7}>
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: 28,
                lineHeight: "36px",
                letterSpacing: "-0.4px",
                color: AMANDA_PALETTE.carmim,
                marginTop: 40,
                fontVariationSettings: "'SOFT' 0, 'WONK' 1",
              }}
            >
              {AMANDA_DATA.contato.accent}
            </p>
          </FadeUp>

          <FadeUp delay={0.85}>
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

          <FadeUp delay={0.95}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: "28px",
                color: AMANDA_PALETTE.tinta,
                maxWidth: 600,
                marginBottom: 32,
              }}
            >
              {AMANDA_DATA.contato.body}
            </p>
          </FadeUp>

          <FadeUp delay={1.05}>
            <a
              href={AMANDA_DATA.contato.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 300,
                height: 64,
                backgroundColor: AMANDA_PALETTE.carmim,
                color: AMANDA_PALETTE.papel,
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "1.96px",
                textTransform: "uppercase",
                marginBottom: 60,
              }}
            >
              {AMANDA_DATA.contato.cta.label} →
            </a>
          </FadeUp>

          {/* Telefone + redes em 2 colunas */}
          <Stagger staggerChildren={0.15} delayChildren={1.2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                maxWidth: 800,
                marginTop: 48,
              }}
            >
              <StaggerItem>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontWeight: 400,
                      fontSize: 36,
                      color: AMANDA_PALETTE.tinta,
                      margin: 0,
                      fontVariationSettings: "'SOFT' 0, 'WONK' 1",
                    }}
                  >
                    {AMANDA_DATA.contato.phoneLine}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 500,
                      fontSize: 11,
                      color: AMANDA_PALETTE.neblina,
                      letterSpacing: "1.1px",
                      textTransform: "uppercase",
                      marginTop: 8,
                    }}
                  >
                    {AMANDA_DATA.contato.phoneLabel}
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {AMANDA_DATA.contato.socials.map((s) => (
                    <li key={s.label} style={{ marginBottom: 8 }}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono)",
                          fontWeight: 500,
                          fontSize: 12,
                          color: AMANDA_PALETTE.tinta,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                  <li style={{ marginTop: 16 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono)",
                        fontWeight: 400,
                        fontSize: 11,
                        color: AMANDA_PALETTE.neblina,
                        letterSpacing: "1.1px",
                        textTransform: "uppercase",
                      }}
                    >
                      {AMANDA_DATA.contato.fixedNote}
                    </span>
                  </li>
                </ul>
              </StaggerItem>
            </div>
          </Stagger>
        </div>

        {/* Mobile placeholder — refina Task 17 */}
        <div className="lg:hidden">{/* Implementar layout mobile na Task 17 */}</div>
      </div>
    </section>
  );
}
