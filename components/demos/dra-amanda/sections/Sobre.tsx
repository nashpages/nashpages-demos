"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Sobre() {
  const { sobre } = AMANDA_DATA;
  return (
    <section id="sobre" className="w-full lg:px-16 px-6 lg:py-24 py-16">
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {sobre.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-5 lg:text-[72px] text-[44px] leading-[1.083] lg:max-w-none"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-2px", color: "var(--c-tinta)" }}>
          <span className="block">{sobre.headlineLines[0]}</span>
          <span className="block">{sobre.headlineLines[1]}</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>

      <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-12">
        <FadeUp delay={0.3}>
          <p className="italic lg:text-[32px] text-[24px] leading-[1.25]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.5px", color: "var(--c-tinta)" }}>
            <span className="block">{sobre.quoteLines[0]}</span>
            <span className="block">{sobre.quoteLines[1]}</span>
            <span className="block">{sobre.quoteLines[2]}</span>
          </p>
          <p className="mt-8 text-[11px] tracking-[0.16em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
            {sobre.quoteAttribution}
          </p>
          <div className="mt-3 h-[2px] w-8" style={{ backgroundColor: "var(--c-carmim)" }} />
        </FadeUp>

        <Stagger delay={0.4} staggerChildren={0.15} className="space-y-6">
          {sobre.bio.map((p, i) => (
            <StaggerItem key={i}>
              <p className="text-[16px] leading-[1.625]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                {p}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="mt-16 h-px w-full" style={{ backgroundColor: "var(--c-carmim)" }} />
      <Stagger delay={0.5} staggerChildren={0.12} className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-6">
        {sobre.credentials.map((c) => (
          <StaggerItem key={c.num}>
            <p className="text-[24px]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-carmim)", letterSpacing: "-0.5px" }}>
              {c.num}
            </p>
            <p className="mt-4 text-[13px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
              {c.label}
            </p>
            <p className="mt-2 text-[10px] tracking-[0.11em] leading-[1.6]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
              {c.sub}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
