"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Sobre() {
  const { sobre } = AMANDA_DATA;
  return (
    <section id="sobre" className="w-full lg:py-[120px] py-16"
      style={{ backgroundColor: "var(--c-neve)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[120px]">
        <FadeUp>
          <p className="text-[12px] tracking-[0.16em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            {sobre.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-5 lg:text-[80px] text-[44px] leading-[1.1]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.031em", color: "var(--c-tinta)" }}>
            <span className="block">Quatro frentes,</span>
            <span className="block">um só olhar.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
        </FadeUp>
        <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-12">
          <FadeUp delay={0.3}>
            <p className="italic lg:text-[36px] text-[26px] leading-[1.28]"
              style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.014em", color: "var(--c-tinta)" }}>
              {sobre.quote}
            </p>
            <p className="mt-7 text-[11px] tracking-[0.16em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
              {sobre.quoteAttribution}
            </p>
            <div className="mt-3 h-[2px] w-10" style={{ backgroundColor: "var(--c-carmim)" }} />
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
        <Stagger delay={0.5} staggerChildren={0.12} className="mt-7 grid lg:grid-cols-3 grid-cols-1 gap-6">
          {sobre.credentials.map((c) => (
            <StaggerItem key={c.num}>
              <p className="text-[28px]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-carmim)", letterSpacing: "-0.018em" }}>
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
      </div>
    </section>
  );
}
