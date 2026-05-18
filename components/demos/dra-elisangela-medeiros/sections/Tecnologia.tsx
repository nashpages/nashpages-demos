"use client";

import { ELISANGELA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Tecnologia() {
  const { tecnologia } = ELISANGELA_DATA;

  return (
    <section id="tecnologia" className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-20 lg:pt-[120px] pb-20 lg:pb-[120px]">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-accent)" }}>
            {`§ 04  ·  ${tecnologia.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2 style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(44px, 5.5vw, 76px)", lineHeight: "1.15", letterSpacing: "-1.4px", color: "var(--c-tinta)", margin: 0 }}>
            <span className="block">{tecnologia.headlineLines[0]}</span>
            <span className="block">{tecnologia.headlineLines[1]}</span>
          </h2>
        </FadeUp>
        <div className="h-8 lg:h-10" />
        <div className="h-[1px] w-[80px]" style={{ backgroundColor: "var(--c-accent)" }} />
        <div className="h-10 lg:h-[60px]" />

        <Stagger
          delay={0.15}
          staggerChildren={0.08}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10"
        >
          {tecnologia.list.map((t, i) => (
            <StaggerItem key={t.name}>
              <div className="grid grid-cols-[40px_1fr] gap-x-2 items-baseline">
                <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>
                  {`0${i + 1}`}
                </p>
                <div>
                  <h3 style={{ fontFamily: "var(--font-cormorant-garamond)", fontWeight: 400, fontSize: "clamp(20px, 1.7vw, 24px)", lineHeight: "32px", letterSpacing: "-0.3px", color: "var(--c-tinta)", margin: 0 }}>
                    {t.name}
                  </h3>
                  <div className="h-1" />
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "13px", lineHeight: "22px", color: "var(--c-neblina)", margin: 0, maxWidth: "440px" }}>
                    {t.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="h-12 lg:h-16" />
        <FadeUp delay={0.5}>
          <p className="text-center" style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(15px, 1.3vw, 18px)", lineHeight: "1.5", color: "var(--c-neblina)", margin: 0 }}>
            {tecnologia.signature}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
