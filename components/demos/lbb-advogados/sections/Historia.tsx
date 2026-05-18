"use client";

import { LBB_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Historia() {
  const { historia } = LBB_DATA;

  return (
    <section id="historia" className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
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
            {`/  ${historia.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />

        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2
            style={{
              fontFamily: "var(--font-newsreader)",
              fontWeight: 400,
              fontSize: "clamp(44px, 5.5vw, 80px)",
              lineHeight: "1.1",
              letterSpacing: "clamp(-1px, -0.14vw, -2px)",
              color: "var(--c-tinta)",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {historia.headlineLines.join("\n")}
          </h2>
        </FadeUp>
        <div className="h-12 lg:h-[60px]" />

        {/* DESKTOP: Timeline horizontal */}
        <div className="hidden lg:block">
          <Stagger delay={0.2} staggerChildren={0.15} className="grid grid-cols-5 gap-x-6 mt-16">
            {historia.milestones.map((m) => (
              <StaggerItem key={m.year}>
                <p
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    fontWeight: 400,
                    fontSize: "48px",
                    lineHeight: "1.15",
                    letterSpacing: "-1px",
                    color: "var(--c-accent)",
                  }}
                >
                  {m.year}
                </p>
                <div className="h-5" />
                <div className="relative">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--c-accent)" }} />
                </div>
                <div
                  className="h-px w-full mt-[-7px] ml-3"
                  style={{ backgroundColor: "var(--c-linha)" }}
                />
                <div className="h-7" />
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "1.76px",
                    color: "var(--c-tinta)",
                  }}
                >
                  {m.label}
                </p>
                <div className="h-2" />
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {m.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* MOBILE: Timeline vertical */}
        <div className="lg:hidden">
          <Stagger delay={0.15} staggerChildren={0.12} className="space-y-10 mt-10">
            {historia.milestones.map((m) => (
              <StaggerItem key={m.year}>
                <p
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    fontWeight: 400,
                    fontSize: "40px",
                    lineHeight: "1.15",
                    letterSpacing: "-1px",
                    color: "var(--c-accent)",
                  }}
                >
                  {m.year}
                </p>
                <div className="h-3" />
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    color: "var(--c-tinta)",
                  }}
                >
                  {m.label}
                </p>
                <div className="h-2" />
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {m.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="h-16 lg:h-[100px]" />
        <FadeUp delay={0.4}>
          <p
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(18px, 1.7vw, 24px)",
              lineHeight: "1.5",
              letterSpacing: "-0.4px",
              color: "var(--c-neblina)",
              maxWidth: "1100px",
            }}
          >
            {historia.footnote}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
