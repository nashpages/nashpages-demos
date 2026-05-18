"use client";

import { GABRIELA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Frentes() {
  const { frentes } = GABRIELA_DATA;

  return (
    <section id="frentes" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-20 lg:pt-[120px] pb-20 lg:pb-[120px]">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "1.92px", color: "var(--c-accent)" }}>
            {`/  ${frentes.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1}>
          <h2 style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.12", letterSpacing: "-1.4px", color: "var(--c-tinta)", margin: 0 }}>
            {frentes.headline}
          </h2>
        </FadeUp>
        <div className="h-10 lg:h-[64px]" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />

        <Stagger delay={0.15} staggerChildren={0.12} className="[&>*+*]:border-t" >
          {frentes.list.map((f) => (
            <StaggerItem key={f.num} className="border-[var(--c-linha)]">
              <div className="py-8 lg:py-12 grid lg:grid-cols-[480px_1fr] gap-y-3 lg:gap-x-10 items-center">
                <div>
                  <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.76px", color: "var(--c-accent)" }}>
                    {f.num}
                  </p>
                  <div className="h-2" />
                  <p style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: "1.28", letterSpacing: "-0.4px", color: "var(--c-tinta)" }}>
                    {f.name}
                  </p>
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "clamp(14px, 1.4vw, 18px)", lineHeight: "1.55", color: "var(--c-neblina)" }}>
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
