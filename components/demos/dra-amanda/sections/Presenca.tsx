"use client";

import Image from "next/image";
import { AMANDA_DATA, AMANDA_PALETTE, AMANDA_PHOTOS } from "../data";
import { FadeUp } from "../motion";

export function Presenca() {
  return (
    <section
      id="presenca"
      className="relative w-full"
      style={{ backgroundColor: AMANDA_PALETTE.papel, minHeight: 950 }}
    >
      <div className="relative max-w-[1440px] mx-auto h-[950px]">
        {/* Foto Retrato-hero ESQ — controlada via FLIP nas Tasks 13 e 15 */}
        <div
          className="hidden lg:block absolute"
          style={{
            left: 120,
            top: 160,
            width: 520,
            height: 720,
            overflow: "hidden",
          }}
          data-presenca-photo
        >
          <Image
            src={AMANDA_PHOTOS.hero}
            alt="Dra. Amanda Fistarol — jaleco SBD"
            fill
            quality={100}
            sizes="520px"
            style={{
              objectFit: "cover",
              objectPosition: "center 25%",
              filter: "sepia(0.05) saturate(1.05) brightness(1.02) contrast(1.04)",
            }}
          />
        </div>

        {/* Texto à direita */}
        <div className="hidden lg:block absolute" style={{ left: 720, top: 120, width: 600 }}>
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
              {AMANDA_DATA.presenca.eyebrow}
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
              <span className="block whitespace-nowrap">{AMANDA_DATA.presenca.headlineLines[0]}</span>
              <span className="block whitespace-nowrap">{AMANDA_DATA.presenca.headlineLines[1]}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.55}>
            <div
              style={{
                height: 1,
                width: 60,
                backgroundColor: AMANDA_PALETTE.carmim,
                marginTop: 40,
                marginBottom: 40,
              }}
            />
          </FadeUp>

          {/* Bloco RECONHECIMENTO */}
          <FadeUp delay={0.7}>
            <div style={{ marginBottom: 48 }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 15,
                  color: AMANDA_PALETTE.tinta,
                  letterSpacing: "1.8px",
                  marginBottom: 16,
                }}
              >
                {AMANDA_DATA.presenca.reconhecimento.subhead}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  color: AMANDA_PALETTE.tinta,
                  maxWidth: 560,
                  margin: 0,
                }}
              >
                {AMANDA_DATA.presenca.reconhecimento.paragraph}
              </p>
            </div>
          </FadeUp>

          {/* Bloco ATENDIMENTO — 2 colunas (ONDE / COMO) */}
          <FadeUp delay={0.85}>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 15,
                  color: AMANDA_PALETTE.tinta,
                  letterSpacing: "1.8px",
                  marginBottom: 16,
                }}
              >
                {AMANDA_DATA.presenca.atendimento.subhead}
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 40,
                  maxWidth: 600,
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {AMANDA_DATA.presenca.atendimento.onde.map((line, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: "24px",
                        color: AMANDA_PALETTE.tinta,
                        marginBottom: 6,
                      }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {AMANDA_DATA.presenca.atendimento.como.map((line, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: "24px",
                        color: AMANDA_PALETTE.tinta,
                        marginBottom: 6,
                      }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>

          {/* Nota teleconsulta */}
          <FadeUp delay={1.0}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 400,
                fontSize: 11,
                color: AMANDA_PALETTE.neblina,
                letterSpacing: "1.1px",
                textTransform: "uppercase",
                marginTop: 60,
                borderTop: `1px solid ${AMANDA_PALETTE.linha}`,
                paddingTop: 24,
                maxWidth: 600,
              }}
            >
              {AMANDA_DATA.presenca.note}
            </p>
          </FadeUp>
        </div>

        {/* Mobile placeholder — refina Task 17 */}
        <div className="lg:hidden">{/* Implementar layout mobile na Task 17 */}</div>
      </div>
    </section>
  );
}
