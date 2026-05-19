"use client";

import { TROJAN_DATA } from "../data";
import { FadeUp, SignatureDual } from "../motion";

export function InstitutoIovi() {
  const { iovi } = TROJAN_DATA;

  return (
    <section
      id="iovi"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-pedra)" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-[640px]">
        {/* Text LEFT */}
        <div className="flex-1 px-6 lg:px-[80px] py-16 lg:py-20 lg:max-w-[720px]">
          <FadeUp y={12}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.8px",
                color: "var(--c-azul-deep)",
              }}
            >
              {iovi.eyebrow}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="mt-6 lg:mt-8"
              style={{
                fontFamily: "var(--font-newsreader)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(36px, 4.5vw, 56px)",
                lineHeight: 1.1,
                letterSpacing: "clamp(-1px, -0.15vw, -2px)",
                color: "var(--c-tinta)",
                margin: 0,
              }}
            >
              {iovi.headline.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <div className="mt-8">
              <SignatureDual widthPx={48} />
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p
              className="mt-10"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "1.6px",
                color: "var(--c-neblina)",
              }}
            >
              {iovi.addressEyebrow}
            </p>
            <p
              className="mt-3"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.3vw, 18px)",
                lineHeight: 1.5,
                color: "var(--c-tinta)",
              }}
            >
              {iovi.addressLines[0]}
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.5,
                color: "var(--c-neblina)",
              }}
            >
              {iovi.addressLines[1]}
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.5,
                color: "var(--c-neblina)",
              }}
            >
              {iovi.addressLines[2]}
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="mt-12 grid grid-cols-2 gap-10">
              {iovi.columns.map((col) => (
                <div key={col.header}>
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "1.6px",
                      color: "var(--c-neblina)",
                    }}
                  >
                    {col.header}
                  </p>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 300,
                      fontSize: "13px",
                      lineHeight: 1.5,
                      color: "var(--c-tinta)",
                    }}
                  >
                    {col.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.45}>
            <a
              href={iovi.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
              style={{
                border: "1px solid var(--c-azul-deep)",
                color: "var(--c-azul-deep)",
                padding: "13px 24px",
                borderRadius: "32px",
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
              }}
            >
              <span>{iovi.cta.label}</span>
              <span aria-hidden style={{ fontSize: "16px" }}>
                →
              </span>
            </a>
          </FadeUp>
        </div>

        {/* Sculptural typography RIGHT */}
        <div
          className="relative flex-1 px-6 lg:pl-[60px] lg:pr-[80px] py-16 lg:py-20 hidden lg:flex flex-col justify-center"
          style={{ borderLeft: "1px solid var(--c-linha)" }}
        >
          <FadeUp y={12}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.8px",
                color: "var(--c-cinabrio)",
              }}
            >
              {iovi.place.eyebrow}
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <h3
              className="mt-8"
              style={{
                fontFamily: "var(--font-newsreader)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(60px, 7vw, 96px)",
                lineHeight: 1.05,
                letterSpacing: "clamp(-1.5px, -0.3vw, -3px)",
                color: "var(--c-tinta)",
                margin: 0,
              }}
            >
              {iovi.place.headline.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h3>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10">
              <SignatureDual widthPx={56} />
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.8px",
                color: "var(--c-tinta)",
              }}
            >
              {iovi.place.floor}
            </p>
            <div className="mt-3">
              {iovi.place.italicLines.map((l) => (
                <p
                  key={l}
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(15px, 1.35vw, 18px)",
                    lineHeight: 1.4,
                    letterSpacing: "-0.2px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {l}
                </p>
              ))}
            </div>
            <p
              className="mt-10"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "9px",
                letterSpacing: "1.4px",
                color: "var(--c-neblina)",
              }}
            >
              {iovi.place.coords}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
