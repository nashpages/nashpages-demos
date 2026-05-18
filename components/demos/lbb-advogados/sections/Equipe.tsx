"use client";

import { LBB_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Equipe() {
  const { equipe } = LBB_DATA;

  return (
    <section id="equipe" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[120px] pb-24 lg:pb-[120px]">
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
            {`/  ${equipe.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2
            style={{
              fontFamily: "var(--font-newsreader)",
              fontWeight: 400,
              fontSize: "clamp(44px, 5.5vw, 80px)",
              lineHeight: "1.1",
              letterSpacing: "clamp(-1px, -0.14vw, -2px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {equipe.headline}
          </h2>
        </FadeUp>
        <div className="h-12 lg:h-[80px]" />

        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />

        <Stagger
          delay={0.15}
          staggerChildren={0.15}
          className="grid sm:grid-cols-2 gap-x-[60px] gap-y-12 lg:gap-y-[80px] mt-12 lg:mt-[60px]"
        >
          {equipe.partners.map((p) => (
            <StaggerItem key={p.oab}>
              <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[180px_1fr] gap-x-6 lg:gap-x-10">
                {/* Photo placeholder — substituir por foto real depois */}
                <div
                  className="w-full aspect-[4/5]"
                  style={{
                    backgroundColor: "var(--c-pedra)",
                    border: "1px solid var(--c-linha)",
                  }}
                  aria-label={`Foto ${p.name}`}
                />
                <div className="flex flex-col">
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 500,
                      fontSize: "11px",
                      letterSpacing: "1.76px",
                      color: "var(--c-accent)",
                    }}
                  >
                    {p.oab}
                  </p>
                  <div className="h-3" />
                  <p
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      fontWeight: 400,
                      fontSize: "clamp(20px, 2vw, 28px)",
                      lineHeight: "1.25",
                      letterSpacing: "-0.5px",
                      color: "var(--c-tinta)",
                    }}
                  >
                    {p.name}
                  </p>
                  <div className="h-5" />
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "var(--c-neblina)",
                    }}
                  >
                    {p.form}
                  </p>
                  <div className="h-3" />
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "var(--c-tinta)",
                    }}
                  >
                    {p.spec}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
