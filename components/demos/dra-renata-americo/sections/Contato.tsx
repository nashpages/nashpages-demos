"use client";

import { RENATA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Contato() {
  const { contato } = RENATA_DATA;

  return (
    <section id="contato" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[140px] pb-24 lg:pb-[160px] text-center">
        <FadeUp>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "1.92px",
              color: "var(--c-accent)",
            }}
          >
            {`/  ${contato.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-8 lg:h-12" />

        <FadeUp delay={0.1} y={32}>
          <h2
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "clamp(64px, 11vw, 144px)",
              lineHeight: "1.06",
              letterSpacing: "clamp(-2px, -0.25vw, -4px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span className="block">{contato.headlineLines[0]}</span>
            <span className="block">{contato.headlineLines[1]}</span>
          </h2>
        </FadeUp>
        <div className="h-10 lg:h-14" />

        <FadeUp delay={0.3}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(16px, 1.4vw, 22px)",
              lineHeight: "1.45",
              color: "var(--c-neblina)",
            }}
          >
            <span className="block">{contato.sublineLines[0]}</span>
            <span className="block">{contato.sublineLines[1]}</span>
          </p>
        </FadeUp>
        <div className="h-8 lg:h-12" />

        <FadeUp delay={0.45}>
          <a
            href={contato.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "clamp(14px, 1.2vw, 17px)",
              backgroundColor: "var(--c-accent)",
              color: "var(--c-papel)",
              padding: "20px 40px",
              minWidth: "320px",
            }}
          >
            {contato.cta.label}  →
          </a>
        </FadeUp>
        <div className="h-10 lg:h-16" />

        <FadeUp delay={0.6}>
          <a
            href={RENATA_DATA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.76px",
              color: "var(--c-neblina)",
            }}
          >
            {contato.instagram}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
