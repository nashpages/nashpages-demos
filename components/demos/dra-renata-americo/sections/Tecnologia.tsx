"use client";

import { RENATA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Tecnologia() {
  const { tecnologia } = RENATA_DATA;

  return (
    <section id="tecnologia" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-20 lg:pt-[120px] pb-20 lg:pb-[120px]">
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
            {`/  ${tecnologia.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />

        <FadeUp delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "clamp(38px, 5vw, 64px)",
              lineHeight: "1.12",
              letterSpacing: "-1.6px",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {tecnologia.headline}
          </h2>
        </FadeUp>
        <div className="h-10 lg:h-[64px]" />

        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />

        <Stagger delay={0.15} staggerChildren={0.08} className="[&>*+*]:border-t" >
          {tecnologia.equipamentos.map((eq) => (
            <StaggerItem key={eq} className="border-[var(--c-linha)]">
              <div className="py-6 lg:py-7">
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "clamp(17px, 1.7vw, 24px)",
                    letterSpacing: "-0.3px",
                    color: "var(--c-tinta)",
                  }}
                >
                  {eq}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="h-12 lg:h-20" />

        <FadeUp delay={0.3}>
          <p
            style={{
              fontFamily: "var(--font-lora)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.6vw, 24px)",
              lineHeight: "1.45",
              letterSpacing: "-0.2px",
              color: "var(--c-neblina)",
              maxWidth: "1100px",
            }}
          >
            {tecnologia.signature}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
