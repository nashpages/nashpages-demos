"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";
import { SectionWrapper } from "./SectionWrapper";

export function Contato() {
  const s = AMANDA_DATA.sections[6];
  return (
    <SectionWrapper id={s.id}>
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {s.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.15}>
        <h2 className="mt-5 lg:text-[88px] text-[60px] leading-[1.045]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-3px", color: "var(--c-tinta)" }}>
          <span className="block">{s.headlineLines[0]}</span>
          <span className="block">{s.headlineLines[1]}</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.4}>
        <p className="mt-6 italic text-[20px]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-carmim)" }}>
          {s.accent}
        </p>
      </FadeUp>
      <FadeUp delay={0.5}>
        <div className="mt-7 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>
      <FadeUp delay={0.55}>
        <p className="mt-6 text-[15px] leading-[1.6] max-w-[480px]"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
          {s.body}
        </p>
      </FadeUp>
      <FadeUp delay={0.65}>
        <a href={s.cta.href} target="_blank" rel="noopener noreferrer"
          className="mt-7 inline-flex items-center justify-center rounded-full py-[20px] px-8 text-[13px] tracking-[0.16em] transition-opacity hover:opacity-90"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, backgroundColor: "var(--c-carmim)", color: "var(--c-papel)" }}>
          {s.cta.label}  →
        </a>
      </FadeUp>
      <div className="mt-auto pt-6 grid grid-cols-2 gap-6">
        <FadeUp delay={0.75}>
          <p className="text-[26px]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.8px", color: "var(--c-tinta)" }}>
            {s.phoneLine}
          </p>
          <p className="mt-2 text-[10px] tracking-[0.13em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
            {s.phoneLabel}
          </p>
        </FadeUp>
        <FadeUp delay={0.8}>
          <p className="text-[12px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
            /  REDES
          </p>
          <Stagger delay={0.05} staggerChildren={0.08} className="mt-3 space-y-1">
            {s.socials.map((soc) => (
              <StaggerItem key={soc.label}>
                <a href={soc.href} target="_blank" rel="noopener noreferrer"
                  className="italic text-[16px] transition-opacity hover:opacity-70"
                  style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, color: "var(--c-tinta)" }}>
                  {soc.label}
                </a>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-2 text-[10px] tracking-[0.13em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
            {s.fixedNote}
          </p>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
