"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp } from "../motion";
import { SectionWrapper } from "./SectionWrapper";

export function Manifesto() {
  const s = AMANDA_DATA.sections[0];
  return (
    <SectionWrapper id={s.id}>
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {s.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h1 className="mt-5 lg:text-[80px] text-[44px] leading-[1.05]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-2.5px", color: "var(--c-tinta)" }}>
          <span className="block">{s.headlineLines[0]}</span>
          <span className="block">{s.headlineLines[1]}</span>
        </h1>
      </FadeUp>
      <FadeUp delay={0.25}>
        <div className="mt-8 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>
      <FadeUp delay={0.35}>
        <p className="mt-7 text-[16px] leading-[1.65] max-w-[560px]"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
          {s.subline}
        </p>
      </FadeUp>
      <FadeUp delay={0.5}>
        <p className="mt-8 italic text-[19px] leading-[1.5] max-w-[560px]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
          {s.quote}
        </p>
        <p className="mt-4 text-[10px] tracking-[0.13em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
          {s.quoteAttribution}
        </p>
      </FadeUp>
      <FadeUp delay={0.65}>
        <div className="mt-auto pt-8 flex items-center gap-8 flex-wrap">
          <a href={s.primaryCta.href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full py-[18px] px-7 text-[12px] tracking-[0.16em] transition-opacity hover:opacity-90"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, backgroundColor: "var(--c-carmim)", color: "var(--c-papel)" }}>
            {s.primaryCta.label}  →
          </a>
          <a href={s.secondaryCta.href} className="group inline-flex flex-col gap-[10px]">
            <span className="text-[12px] tracking-[0.16em] transition-transform duration-300 group-hover:translate-x-1"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
              {s.secondaryCta.label}  →
            </span>
            <span className="h-px w-[160px] origin-left transition-transform duration-500 group-hover:scale-x-110"
              style={{ backgroundColor: "var(--c-tinta)" }} />
          </a>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
}
