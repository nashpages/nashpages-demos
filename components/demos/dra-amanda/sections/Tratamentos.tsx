"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";
import { SectionWrapper } from "./SectionWrapper";

export function Tratamentos() {
  const s = AMANDA_DATA.sections[2];
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
      <Stagger delay={0.3} staggerChildren={0.1} className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
        {s.cards.map((c) => (
          <StaggerItem key={c.num}>
            <div className="h-px w-full mb-4" style={{ backgroundColor: "var(--c-carmim)" }} />
            <p className="leading-[0.95]"
              style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, fontSize: "72px", letterSpacing: "-2.5px", color: "var(--c-carmim)" }}>
              {c.num}
            </p>
            <p className="mt-3 text-[12px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
              {c.label}
            </p>
            <p className="mt-2 text-[13px] leading-[1.55]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
              {c.body}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}
