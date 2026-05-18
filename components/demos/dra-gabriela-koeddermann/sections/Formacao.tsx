"use client";

import { GABRIELA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Formacao() {
  const { formacao } = GABRIELA_DATA;

  return (
    <section id="formacao" className="w-full" style={{ backgroundColor: "var(--c-bege)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-20 lg:pt-[120px] pb-20 lg:pb-[120px]">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "1.92px", color: "var(--c-accent)" }}>
            {`/  ${formacao.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1}>
          <h2 style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.12", letterSpacing: "-1.4px", color: "var(--c-tinta)", margin: 0 }}>
            {formacao.headline}
          </h2>
        </FadeUp>
        <div className="h-10 lg:h-[64px]" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />

        <Stagger delay={0.2} staggerChildren={0.15} className="mt-10 lg:mt-[40px] space-y-8 lg:space-y-[40px]">
          {formacao.cv.map((item, i) => (
            <StaggerItem key={i}>
              <div>
                <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "1.92px", color: "var(--c-accent)" }}>
                  {item.label}
                </p>
                <div className="h-2" />
                <p style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: "1.25", letterSpacing: "-0.5px", color: "var(--c-tinta)" }}>
                  {item.inst}
                </p>
                <div className="h-1" />
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", color: "var(--c-neblina)" }}>{item.city}</p>
              </div>
              {i < formacao.cv.length - 1 && (
                <div className="h-px w-full mt-8 lg:mt-[40px]" style={{ backgroundColor: "var(--c-linha)" }} />
              )}
            </StaggerItem>
          ))}
        </Stagger>

        <div className="h-10 lg:h-[60px]" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
        <div className="h-6 lg:h-10" />

        <FadeUp delay={0.2}>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.76px", color: "var(--c-neblina)" }}>
            {formacao.afiliacoesLabel}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-8" />
        <div className="space-y-4">
          {formacao.memberships.map((m, i) => (
            <FadeUp key={i} delay={0.3 + i * 0.08}>
              <div className="flex items-baseline gap-4">
                <p style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "24px", letterSpacing: "0.4px", color: "var(--c-accent)", minWidth: "60px" }}>
                  {m.acronym}
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "var(--c-neblina)" }}>
                  {m.name}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
