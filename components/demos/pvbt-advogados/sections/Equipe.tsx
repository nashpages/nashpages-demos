"use client";

import { PVBT_DATA } from "../data";
import { FadeUp } from "../motion";

const CINZEL_NUM = /^\d+$/;

export function Equipe() {
  const { equipe } = PVBT_DATA;

  return (
    <section
      id="equipe"
      className="relative w-full py-20 lg:py-[80px]"
      style={{ backgroundColor: "var(--c-navy-deep)" }}
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
              {equipe.eyebrow}
            </p>
            <p
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-papel)",
                opacity: 0.55,
              }}
            >
              {equipe.eyebrowRight}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(56px, 10vw, 130px)",
              lineHeight: 1,
              letterSpacing: "clamp(-1.6px, -0.3vw, -3px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {equipe.headlineA}
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(56px, 10vw, 130px)",
              lineHeight: 1,
              letterSpacing: "clamp(-1.6px, -0.3vw, -3px)",
              color: "var(--c-dourado)",
              margin: 0,
            }}
          >
            {equipe.headlineB}
          </h2>
        </FadeUp>

        <div
          aria-hidden
          className="my-12 lg:my-16"
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-dourado)", opacity: 0.3 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeUp delay={0.05}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.65,
                letterSpacing: "-0.05px",
                color: "var(--c-papel)",
                opacity: 0.88,
                margin: 0,
                maxWidth: "620px",
              }}
            >
              {equipe.body}
            </p>
            <p
              className="mt-8"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "17px",
                lineHeight: 1.4,
                letterSpacing: "-0.1px",
                color: "var(--c-dourado)",
                opacity: 0.85,
                margin: 0,
                maxWidth: "620px",
              }}
            >
              {equipe.bodyItalic}
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span
                aria-hidden
                style={{ width: "40px", height: "1px", backgroundColor: "var(--c-dourado)" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-papel)",
                  opacity: 0.6,
                  margin: 0,
                }}
              >
                {equipe.signature}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-8 lg:gap-10">
              {equipe.cifras.map((c) => {
                const isPureNum = CINZEL_NUM.test(c.num);
                return (
                  <div key={c.label} className="flex items-start gap-8 lg:gap-10">
                    <span
                      style={{
                        fontFamily: isPureNum ? "var(--font-cinzel)" : "var(--font-cormorant-garamond)",
                        fontWeight: 400,
                        fontSize: isPureNum ? "clamp(48px, 5vw, 72px)" : "clamp(40px, 4vw, 56px)",
                        lineHeight: 1,
                        letterSpacing: "-1px",
                        color: "var(--c-dourado-deep)",
                        minWidth: "120px",
                      }}
                    >
                      {c.num}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          fontWeight: 500,
                          fontSize: "10px",
                          letterSpacing: "1.8px",
                          color: "var(--c-dourado)",
                          margin: 0,
                          paddingTop: "12px",
                        }}
                      >
                        {c.label}
                      </p>
                      <p
                        className="mt-3"
                        style={{
                          fontFamily: "var(--font-cormorant-garamond)",
                          fontStyle: "italic",
                          fontWeight: 400,
                          fontSize: "15px",
                          letterSpacing: "-0.1px",
                          color: "var(--c-papel)",
                          opacity: 0.65,
                          margin: 0,
                          maxWidth: "410px",
                        }}
                      >
                        {c.cap}
                      </p>
                    </div>
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
