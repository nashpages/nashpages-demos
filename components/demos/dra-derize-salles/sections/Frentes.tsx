"use client";

import { DERIZE_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Frentes() {
  const { frentes } = DERIZE_DATA;

  return (
    <section id="frentes" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-20 lg:pt-[120px] pb-20 lg:pb-[120px]">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-accent)" }}>
            {`§ 03  ·  ${frentes.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2 style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(48px, 6.2vw, 88px)", lineHeight: "1.1", letterSpacing: "-1.6px", color: "var(--c-tinta)", margin: 0 }}>
            <span className="block">{frentes.headlineLines[0]}</span>
            <span className="block">{frentes.headlineLines[1]}</span>
          </h2>
        </FadeUp>
        <div className="h-8 lg:h-10" />
        <div className="h-[1px] w-[80px]" style={{ backgroundColor: "var(--c-accent)" }} />
        <div className="h-6 lg:h-8" />
        <FadeUp delay={0.2}>
          <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(17px, 1.55vw, 22px)", lineHeight: "1.5", color: "var(--c-neblina)", maxWidth: "780px", margin: 0 }}>
            {frentes.subline}
          </p>
        </FadeUp>
        <div className="h-10 lg:h-[64px]" />

        <Stagger
          delay={0.15}
          staggerChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
        >
          {frentes.list.map((f) => (
            <StaggerItem key={f.num}>
              <div className="h-[1px] w-full mb-4" style={{ backgroundColor: "var(--c-accent)" }} />
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>
                {f.num}
              </p>
              <div className="h-3" />
              <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(22px, 1.9vw, 26px)", lineHeight: "32px", letterSpacing: "-0.4px", color: "var(--c-tinta)", margin: 0 }}>
                {f.title}
              </h3>
              <div className="h-4" />
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "13px", lineHeight: "22px", color: "var(--c-neblina)", margin: 0 }}>
                {f.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
