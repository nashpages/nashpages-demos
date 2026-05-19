"use client";

import { PVBT_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Areas() {
  const { areas } = PVBT_DATA;

  return (
    <section
      id="areas"
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
              {areas.eyebrow}
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
              {areas.eyebrowRight}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(56px, 9vw, 120px)",
              lineHeight: 1,
              letterSpacing: "clamp(-1.6px, -0.3vw, -3px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {areas.headlineA}
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(56px, 9vw, 120px)",
              lineHeight: 1,
              letterSpacing: "clamp(-1.6px, -0.3vw, -3px)",
              color: "var(--c-dourado)",
              margin: 0,
            }}
          >
            {areas.headlineB}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mt-8 lg:mt-10 max-w-[920px]"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.6vw, 20px)",
              lineHeight: 1.4,
              letterSpacing: "-0.2px",
              color: "var(--c-papel)",
              opacity: 0.7,
              margin: 0,
            }}
          >
            {areas.sub}
          </p>
        </FadeUp>

        <div
          aria-hidden
          className="my-12 lg:my-16"
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-dourado)", opacity: 0.3 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT — 4 PILARES */}
          <FadeUp>
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--c-dourado)",
              }}
            >
              FRENTES PRINCIPAIS
            </p>
            <Stagger staggerChildren={0.08}>
              {areas.pilares.map((p, i) => (
                <StaggerItem key={p.num}>
                  <div className="flex gap-6 lg:gap-8 py-7">
                    <span
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontWeight: 400,
                        fontSize: "clamp(36px, 3.5vw, 48px)",
                        letterSpacing: "0px",
                        color: "var(--c-dourado-deep)",
                        flexShrink: 0,
                      }}
                    >
                      {p.num}
                    </span>
                    <div className="flex-1">
                      <h3
                        style={{
                          fontFamily: "var(--font-cormorant-garamond)",
                          fontStyle: "italic",
                          fontWeight: 400,
                          fontSize: "clamp(28px, 3vw, 40px)",
                          letterSpacing: "-0.6px",
                          color: "var(--c-papel)",
                          margin: 0,
                        }}
                      >
                        {p.name}
                      </h3>
                      <p
                        className="mt-3"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "13px",
                          lineHeight: 1.55,
                          letterSpacing: "-0.05px",
                          color: "var(--c-papel)",
                          opacity: 0.72,
                          margin: 0,
                          maxWidth: "470px",
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                  {i < areas.pilares.length - 1 && (
                    <div
                      aria-hidden
                      style={{ width: "100%", height: "1px", backgroundColor: "var(--c-papel)", opacity: 0.1 }}
                    />
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </FadeUp>

          {/* RIGHT — 8 ÁREAS COMPLEMENTARES */}
          <FadeUp delay={0.1}>
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--c-dourado)",
              }}
            >
              ÁREAS COMPLEMENTARES
            </p>
            {areas.complementares.map((a, i) => (
              <div key={a.name}>
                <div className="flex items-start gap-5 py-4">
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 500,
                      fontSize: "11px",
                      letterSpacing: "1.6px",
                      color: "var(--c-dourado)",
                      opacity: 0.7,
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-cormorant-garamond)",
                        fontWeight: 400,
                        fontSize: "22px",
                        letterSpacing: "-0.3px",
                        color: "var(--c-papel)",
                        margin: 0,
                      }}
                    >
                      {a.name}
                    </h4>
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: "var(--font-cormorant-garamond)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "14px",
                        letterSpacing: "-0.1px",
                        color: "var(--c-papel)",
                        opacity: 0.55,
                        margin: 0,
                      }}
                    >
                      {a.desc}
                    </p>
                  </div>
                </div>
                {i < areas.complementares.length - 1 && (
                  <div
                    aria-hidden
                    style={{ width: "100%", height: "1px", backgroundColor: "var(--c-papel)", opacity: 0.08 }}
                  />
                )}
              </div>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
