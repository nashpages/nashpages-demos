"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Tratamentos() {
  const { tratamentos } = AMANDA_DATA;
  return (
    <section id="tratamentos" className="w-full lg:px-16 px-6 lg:py-24 py-16"
      style={{ backgroundColor: "var(--c-papel)" }}>
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {tratamentos.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-5 lg:text-[72px] text-[44px] leading-[1.083]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-2px", color: "var(--c-tinta)" }}>
          <span className="block">{tratamentos.headlineLines[0]}</span>
          <span className="block">{tratamentos.headlineLines[1]}</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>

      <Stagger delay={0.3} staggerChildren={0.12}
        className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
        {tratamentos.cards.map((c) => (
          <StaggerItem key={c.num}>
            <div className="h-px w-full mb-6" style={{ backgroundColor: "var(--c-carmim)" }} />
            <p className="leading-[1.04]"
              style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, fontSize: "96px", letterSpacing: "-3px", color: "var(--c-carmim)" }}>
              {c.num}
            </p>
            <p className="mt-6 text-[13px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
              {c.label}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
              {c.body}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
