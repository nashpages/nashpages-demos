"use client";

import { LBB_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Areas() {
  const { areas } = LBB_DATA;

  return (
    <section id="areas" data-snap-section className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
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
            {`/  ${areas.eyebrow}`}
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
            {areas.headlineLines.join("\n")}
          </h2>
        </FadeUp>
        <div className="h-12 lg:h-[80px]" />

        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />

        <Stagger delay={0.2} staggerChildren={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 lg:gap-y-[80px] mt-12 lg:mt-[60px]">
          {areas.list.map((f) => (
            <StaggerItem key={f.num}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.76px",
                  color: "var(--c-accent)",
                }}
              >
                {f.num}
              </p>
              <div className="h-3" />
              <h3
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontWeight: 400,
                  fontSize: "clamp(26px, 2.5vw, 34px)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.6px",
                  color: "var(--c-tinta)",
                  margin: 0,
                  whiteSpace: "pre-line",
                }}
              >
                {f.nameLines.join("\n")}
              </h3>
              <div className="h-5 lg:h-6" />
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "var(--c-neblina)",
                }}
              >
                {f.desc}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
