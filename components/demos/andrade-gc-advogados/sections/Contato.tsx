"use client";

import { ANDRADEGC_DATA } from "../data";
import { FadeUp } from "../motion";

export function Contato() {
  const { contato } = ANDRADEGC_DATA;

  return (
    <section id="contato" data-snap-section className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[140px] pb-24 lg:pb-[160px]">
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
              fontFamily: "var(--font-newsreader)",
              fontWeight: 400,
              fontSize: "clamp(72px, 12vw, 156px)",
              lineHeight: "1.04",
              letterSpacing: "clamp(-1.6px, -0.25vw, -4px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span className="block">{contato.headlineLines[0]}</span>
            <span className="block">{contato.headlineLines[1]}</span>
          </h2>
        </FadeUp>

        <div className="h-12 lg:h-[80px]" />

        {/* Split: LEFT subline + CTA · RIGHT 2 endereços */}
        <div className="grid lg:grid-cols-[1fr_640px] gap-12 lg:gap-[80px] items-start">
          {/* LEFT */}
          <div>
            <FadeUp delay={0.25}>
              <p
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(18px, 1.6vw, 22px)",
                  lineHeight: "1.5",
                  letterSpacing: "-0.3px",
                  color: "var(--c-neblina)",
                  maxWidth: "560px",
                }}
              >
                {contato.subline}
              </p>
            </FadeUp>
            <div className="h-8 lg:h-10" />
            <FadeUp delay={0.4}>
              <a
                href={contato.cta.href}
                className="inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-90"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "2px",
                  backgroundColor: "var(--c-accent)",
                  color: "var(--c-papel)",
                  padding: "20px 36px",
                  minWidth: "320px",
                }}
              >
                {contato.cta.label.toUpperCase()}  →
              </a>
            </FadeUp>
          </div>

          {/* RIGHT — 2 endereços */}
          <div className="grid sm:grid-cols-2 gap-10 lg:gap-12">
            {contato.addresses.map((addr) => (
              <FadeUp key={addr.label} delay={0.3}>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 500,
                      fontSize: "11px",
                      letterSpacing: "1.76px",
                      color: "var(--c-accent)",
                    }}
                  >
                    {`/  ${addr.label}`}
                  </p>
                  <div className="h-3" />
                  <p
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 1.6vw, 22px)",
                      lineHeight: "1.35",
                      letterSpacing: "-0.3px",
                      color: "var(--c-tinta)",
                    }}
                  >
                    {addr.title}
                  </p>
                  <div className="h-3" />
                  <div className="space-y-1">
                    {addr.lines.map((line, i) => (
                      <p
                        key={i}
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "22px",
                          color: "var(--c-neblina)",
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
