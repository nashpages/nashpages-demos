"use client";

import { ANDRADEGC_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Sobre() {
  const { sobre } = ANDRADEGC_DATA;

  return (
    <section id="sobre" data-snap-section className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[120px] pb-24 lg:pb-[120px]">
        <FadeUp>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "1.92px",
              color: "var(--c-accent)",
            }}
          >
            {`/  ${sobre.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-8 lg:h-12" />

        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2
            style={{
              fontFamily: "var(--font-newsreader)",
              fontWeight: 400,
              fontSize: "clamp(44px, 7.2vw, 104px)",
              lineHeight: "1.12",
              letterSpacing: "clamp(-1px, -0.18vw, -2.5px)",
              color: "var(--c-tinta)",
              fontStyle: "italic",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {sobre.quoteLines.join("\n")}
          </h2>
        </FadeUp>
        <div className="h-12 lg:h-[80px]" />

        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
        <div className="h-8 lg:h-10" />

        <Stagger delay={0.15} staggerChildren={0.12} className="grid lg:grid-cols-3 gap-x-10 gap-y-10">
          {sobre.stats.map((s) => (
            <StaggerItem key={s.label}>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    fontWeight: 400,
                    fontSize: "clamp(48px, 4.4vw, 64px)",
                    lineHeight: "1.1",
                    letterSpacing: "-1.4px",
                    color: "var(--c-accent)",
                  }}
                >
                  {s.num}
                </p>
                <div className="h-4 lg:h-6" />
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "1.76px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {s.label}
                </p>
                <div className="h-3" />
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "var(--c-tinta)",
                  }}
                >
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
