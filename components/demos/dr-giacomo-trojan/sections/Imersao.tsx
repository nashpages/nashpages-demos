"use client";

import { TROJAN_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Imersao() {
  const { imersao } = TROJAN_DATA;

  return (
    <section
      id="imersao"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-azul-deep)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] py-20 lg:py-28">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "rgba(250,250,251,0.7)",
            }}
          >
            {imersao.eyebrow}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-8 lg:mt-10"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(48px, 6.5vw, 76px)",
              lineHeight: 1.1,
              letterSpacing: "clamp(-1.2px, -0.22vw, -2.4px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {imersao.headline.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-10 max-w-[760px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.1vw, 15px)",
              lineHeight: 1.6,
              color: "rgba(250,250,251,0.65)",
            }}
          >
            {imersao.subline}
          </p>
        </FadeUp>

        <span
          aria-hidden
          className="block mt-10"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(250,250,251,0.15)",
          }}
        />

        <Stagger className="mt-4" staggerChildren={0.12}>
          {imersao.cv.map((r, i) => (
            <StaggerItem key={r.year}>
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-9"
                style={{
                  borderBottom:
                    i < imersao.cv.length - 1
                      ? "1px solid rgba(250,250,251,0.10)"
                      : "none",
                }}
              >
                <p
                  className="lg:col-span-2"
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(36px, 3.5vw, 42px)",
                    lineHeight: 1,
                    letterSpacing: "-1px",
                    color: "var(--c-cinabrio)",
                    margin: 0,
                  }}
                >
                  {r.year}
                </p>
                <div className="lg:col-span-4">
                  <h3
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "clamp(20px, 2vw, 26px)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.4px",
                      color: "var(--c-papel)",
                      margin: 0,
                    }}
                  >
                    {r.entry}
                  </h3>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "1.6px",
                      color: "rgba(250,250,251,0.6)",
                    }}
                  >
                    {r.org}
                  </p>
                </div>
                <p
                  className="lg:col-span-6"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(250,250,251,0.75)",
                  }}
                >
                  {r.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <span
          aria-hidden
          className="block mt-12"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(250,250,251,0.15)",
          }}
        />

        <FadeUp delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {imersao.badges.map((b, i) => (
              <div key={b} className="flex items-center gap-5">
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "1.6px",
                    color: "rgba(250,250,251,0.85)",
                  }}
                >
                  {b}
                </p>
                {i < imersao.badges.length - 1 && (
                  <span aria-hidden style={{ color: "var(--c-cinabrio)" }}>
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
