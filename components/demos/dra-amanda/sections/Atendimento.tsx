"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Atendimento() {
  const { atendimento } = AMANDA_DATA;
  return (
    <section id="atendimento" className="w-full lg:px-16 px-6 lg:py-24 py-16">
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {atendimento.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-5 lg:text-[72px] text-[44px] leading-[1.083]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-2px", color: "var(--c-tinta)" }}>
          <span className="block">{atendimento.headlineLines[0]}</span>
          <span className="block">{atendimento.headlineLines[1]}</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>

      <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
        <FadeUp delay={0.3}>
          <p className="text-[13px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
            /  ONDE
          </p>
          <Stagger delay={0.05} staggerChildren={0.08} className="mt-6 space-y-3">
            {atendimento.onde.map((line, i) => (
              <StaggerItem key={i}>
                <p className="text-[16px] leading-[1.625]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                  {line}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p className="text-[13px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
            /  COMO
          </p>
          <Stagger delay={0.05} staggerChildren={0.08} className="mt-6 space-y-3">
            {atendimento.como.map((line, i) => (
              <StaggerItem key={i}>
                <p className="text-[16px] leading-[1.625]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                  {line}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeUp>
      </div>

      <FadeUp delay={0.6}>
        <div className="mt-14 pt-5 border-t" style={{ borderColor: "var(--c-linha)" }}>
          <p className="italic text-[16px] leading-[1.55]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
            {atendimento.note}
          </p>
        </div>
      </FadeUp>
    </section>
  );
}
