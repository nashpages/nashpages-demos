"use client";

import { BERMUDES_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Sobre() {
  const { sobre } = BERMUDES_DATA;

  return (
    <section id="sobre" data-snap-section className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[120px] pb-24 lg:pb-[120px]">
        <FadeUp>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--c-tinta)",
            }}
          >
            {`§ 02  ·  ${sobre.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(56px, 6.6vw, 92px)",
              lineHeight: "1.1",
              letterSpacing: "clamp(-1.2px, -0.14vw, -2px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span className="block">{sobre.headlineLines[0]}</span>
            <span className="block">{sobre.headlineLines[1]}</span>
          </h2>
        </FadeUp>

        <div className="h-10 lg:h-14" />
        <div className="h-px w-20" style={{ backgroundColor: "var(--c-tinta)" }} />
        <div className="h-7" />

        {/* Subline + pull-quote split */}
        <div className="grid lg:grid-cols-[1fr_440px] gap-8 lg:gap-[80px]">
          <FadeUp delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(17px, 1.55vw, 22px)",
                lineHeight: "1.55",
                color: "var(--c-neblina)",
                maxWidth: "780px",
                margin: 0,
              }}
            >
              {sobre.subline}
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-tinta)",
                }}
              >
                {`/  ${sobre.pullQuoteLabel}`}
              </p>
              <div className="h-3" />
              <p
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 1.8vw, 24px)",
                  lineHeight: "1.45",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                {sobre.pullQuote}
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Stats strip — 3 monumental cifras */}
        <div className="h-16 lg:h-[100px]" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
        <div className="h-10 lg:h-14" />

        <Stagger
          delay={0.15}
          staggerChildren={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12"
        >
          {sobre.stats.map((s) => (
            <StaggerItem key={s.label}>
              <p
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontWeight: 400,
                  fontSize: "clamp(80px, 9.2vw, 132px)",
                  lineHeight: "1.04",
                  letterSpacing: "clamp(-2px, -0.34vw, -5px)",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                {s.num}
              </p>
              <div className="h-3 lg:h-4" />
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-tinta)",
                }}
              >
                {s.label}
              </p>
              <div className="h-3" />
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "21px",
                  color: "var(--c-neblina)",
                }}
              >
                {s.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
