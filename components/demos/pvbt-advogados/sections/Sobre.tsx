"use client";

import { PVBT_DATA } from "../data";
import { FadeUp } from "../motion";

const CINZEL_NUM = /^\d+$/;

export function Sobre() {
  const { sobre } = PVBT_DATA;

  return (
    <section
      id="sobre"
      data-snap-section
      className="relative w-full py-20 lg:py-[80px]"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <FadeUp>
          <div className="flex items-center justify-between mb-12 lg:mb-16">
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-dourado)",
              }}
            >
              {sobre.eyebrow}
            </p>
            <p
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-neblina)",
                opacity: 0.85,
              }}
            >
              {sobre.eyebrowRight}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(64px, 11vw, 180px)",
              lineHeight: 1,
              letterSpacing: "clamp(-2px, -0.35vw, -5px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {sobre.headlineA}
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(64px, 11vw, 180px)",
              lineHeight: 1,
              letterSpacing: "clamp(-2px, -0.35vw, -5px)",
              color: "var(--c-dourado-deep)",
              margin: 0,
            }}
          >
            {sobre.headlineB}
          </h2>
        </FadeUp>

        <div
          aria-hidden
          className="my-12 lg:my-16"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--c-linha)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px] gap-10 lg:gap-16">
          {/* LEFT col — body editorial */}
          <FadeUp delay={0.1}>
            <p
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(18px, 1.9vw, 24px)",
                lineHeight: 1.35,
                letterSpacing: "-0.2px",
                color: "var(--c-neblina)",
                margin: 0,
              }}
            >
              {sobre.sub}
            </p>
            <p
              className="mt-8 lg:mt-10"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.6,
                letterSpacing: "-0.05px",
                color: "var(--c-tinta)",
                opacity: 0.85,
                margin: 0,
                maxWidth: "620px",
              }}
            >
              {sobre.body}
            </p>
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-inter)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.6,
                letterSpacing: "-0.05px",
                color: "var(--c-tinta)",
                opacity: 0.9,
                margin: 0,
                maxWidth: "620px",
              }}
            >
              {sobre.bodyItalic}
            </p>
          </FadeUp>

          {/* RIGHT col — 4 cifras grid 2×2 */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-12">
              {sobre.cifras.map((c) => {
                const isPureNum = CINZEL_NUM.test(c.num);
                return (
                  <div key={c.unit}>
                    <p
                      style={{
                        fontFamily: isPureNum ? "var(--font-cinzel)" : "var(--font-cormorant-garamond)",
                        fontWeight: 400,
                        fontSize: isPureNum ? "clamp(56px, 6.5vw, 88px)" : "clamp(40px, 5vw, 64px)",
                        lineHeight: 1,
                        letterSpacing: "-1px",
                        color: "var(--c-dourado-deep)",
                        margin: 0,
                      }}
                    >
                      {c.num}
                    </p>
                    <p
                      className="mt-4"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 500,
                        fontSize: "9px",
                        letterSpacing: "1.8px",
                        color: "var(--c-dourado)",
                      }}
                    >
                      {c.unit}
                    </p>
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "var(--font-cormorant-garamond)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: 1.4,
                        letterSpacing: "-0.1px",
                        color: "var(--c-tinta)",
                        opacity: 0.7,
                      }}
                    >
                      {c.cap}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
