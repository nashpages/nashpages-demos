"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";
import { SectionWrapper } from "./SectionWrapper";

export function Atendimento() {
  const s = AMANDA_DATA.sections[5];
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
      <div className="mt-8 grid grid-cols-2 gap-6">
        <FadeUp delay={0.3}>
          <p className="text-[12px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
            /  ONDE
          </p>
          <Stagger delay={0.05} staggerChildren={0.08} className="mt-4 space-y-2">
            {s.onde.map((line, i) => (
              <StaggerItem key={i}>
                <p className="text-[14px] leading-[1.55]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                  {line}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p className="text-[12px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
            /  COMO
          </p>
          <Stagger delay={0.05} staggerChildren={0.08} className="mt-4 space-y-2">
            {s.como.map((line, i) => (
              <StaggerItem key={i}>
                <p className="text-[14px] leading-[1.55]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                  {line}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeUp>
      </div>
      <FadeUp delay={0.6}>
        <div className="mt-auto pt-6 border-t" style={{ borderColor: "var(--c-linha)" }}>
          <p className="italic text-[14px] leading-[1.55]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
            {s.note}
          </p>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
