"use client";

import { GABRIELA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Contato() {
  const { contato } = GABRIELA_DATA;

  return (
    <section id="contato" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[140px] pb-24 lg:pb-[160px] text-center">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "1.92px", color: "var(--c-accent)" }}>
            {`/  ${contato.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-8 lg:h-12" />
        <FadeUp delay={0.1} y={32}>
          <h2 style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "clamp(72px, 12vw, 156px)", lineHeight: "1.04", letterSpacing: "clamp(-1.6px, -0.25vw, -3px)", color: "var(--c-tinta)", margin: 0 }}>
            <span className="block">{contato.headlineLines[0]}</span>
            <span className="block">{contato.headlineLines[1]}</span>
          </h2>
        </FadeUp>
        <div className="h-10 lg:h-14" />
        <FadeUp delay={0.3}>
          <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(16px, 1.4vw, 22px)", lineHeight: "1.45", color: "var(--c-neblina)" }}>
            <span className="block">{contato.sublineLines[0]}</span>
            <span className="block">{contato.sublineLines[1]}</span>
          </p>
        </FadeUp>
        <div className="h-8 lg:h-12" />
        <FadeUp delay={0.45}>
          <a href={contato.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-90" style={{ fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "clamp(14px, 1.2vw, 17px)", backgroundColor: "var(--c-accent)", color: "var(--c-papel)", padding: "20px 40px", minWidth: "320px" }}>
            {contato.cta.label}  →
          </a>
        </FadeUp>
        <div className="h-10 lg:h-16" />
        <FadeUp delay={0.6}>
          <a href={GABRIELA_DATA.instagram} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.76px", color: "var(--c-neblina)" }}>
            {contato.instagram}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
