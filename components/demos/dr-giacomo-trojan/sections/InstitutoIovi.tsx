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
      <div className="flex flex-col lg:flex-row min-h-[640px]">
        {/* Text LEFT */}
        <div className="flex-1 px-6 lg:px-[80px] py-16 lg:py-20 lg:max-w-[680px]">
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

        {/* Map RIGHT — editorial abstract */}
        <div
          className="relative w-full lg:w-[720px] flex-shrink-0 overflow-hidden"
          style={{ backgroundColor: "var(--c-azul-deep)", minHeight: "420px" }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 pointer-events-none">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={`h${i}`}
                style={{
                  position: "absolute",
                  top: `${(i * 100) / 6}%`,
                  left: 0,
                  right: 0,
                  height: "1px",
                  backgroundColor: "rgba(250,250,251,0.06)",
                }}
              />
            ))}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={`v${i}`}
                style={{
                  position: "absolute",
                  left: `${(i * 100) / 7}%`,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "rgba(250,250,251,0.06)",
                }}
              />
            ))}
          </div>

          {/* Pin center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "9999px",
                border: "2px solid var(--c-cinabrio)",
                position: "relative",
              }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "9999px",
                  backgroundColor: "var(--c-cinabrio)",
                }}
              />
            </div>
            <span
              aria-hidden
              style={{
                width: "2px",
                height: "30px",
                backgroundColor: "var(--c-cinabrio)",
                marginTop: "-2px",
              }}
            />
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.8px",
                color: "var(--c-papel)",
              }}
            >
              {iovi.map.label}
            </p>
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--font-newsreader)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "18px",
                letterSpacing: "-0.2px",
                color: "rgba(250,250,251,0.75)",
              }}
            >
              {iovi.map.sub}
            </p>
          </div>

          <p
            className="absolute left-5 lg:left-8 bottom-5 lg:bottom-6"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "9px",
              letterSpacing: "1.4px",
              color: "rgba(250,250,251,0.5)",
            }}
          >
            {iovi.map.coords}
          </p>
          <p
            className="absolute right-5 lg:right-8 bottom-5 lg:bottom-6"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "9px",
              letterSpacing: "1.4px",
              color: "rgba(250,250,251,0.5)",
            }}
          >
            {iovi.map.building}
          </p>
        </div>
      </div>
    </section>
  );
}
