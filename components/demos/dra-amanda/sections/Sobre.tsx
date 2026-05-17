"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";
import { SectionWrapper } from "./SectionWrapper";

export function Sobre() {
  const s = AMANDA_DATA.sections[1];
  return (
    <SectionWrapper id={s.id}>
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {s.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-5 lg:text-[64px] text-[40px] leading-[1.094]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-1.8px", color: "var(--c-tinta)" }}>
          <span className="block">{s.headlineLines[0]}</span>
          <span className="block">{s.headlineLines[1]}</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="mt-8 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>
      <FadeUp delay={0.3}>
        <p className="mt-7 italic text-[26px] leading-[1.25] max-w-[500px]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, color: "var(--c-tinta)" }}>
          <span className="block">{s.quoteLines[0]}</span>
          <span className="block">{s.quoteLines[1]}</span>
          <span className="block">{s.quoteLines[2]}</span>
        </p>
        <p className="mt-5 text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
          {s.quoteAttribution}
        </p>
        <div className="mt-2 h-[2px] w-8" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>
      <Stagger delay={0.4} staggerChildren={0.12} className="mt-8 space-y-4 max-w-[640px]">
        {s.bio.map((p, i) => (
          <StaggerItem key={i}>
            <p className="text-[15px] leading-[1.65]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
              {p}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
      <div className="mt-auto pt-6 border-t" style={{ borderColor: "var(--c-carmim)" }}>
        <Stagger staggerChildren={0.1} className="mt-4 grid grid-cols-3 gap-4">
          {s.credentials.map((c) => (
            <StaggerItem key={c.num}>
              <p className="text-[20px]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-carmim)", letterSpacing: "-0.5px" }}>
                {c.num}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
                {c.label}
              </p>
              <p className="mt-1 text-[8px] tracking-[0.11em] leading-[1.5]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
                {c.sub}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SectionWrapper>
  );
}
