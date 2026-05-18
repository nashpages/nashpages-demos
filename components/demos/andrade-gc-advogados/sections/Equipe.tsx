"use client";

import { ANDRADEGC_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Equipe() {
  const { equipe } = ANDRADEGC_DATA;
  const { spotlight } = equipe;

  return (
    <section id="equipe" data-snap-section className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
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
              fontSize: "clamp(44px, 5.5vw, 88px)",
              lineHeight: "1.1",
              letterSpacing: "clamp(-1px, -0.14vw, -2px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span className="block">{equipe.headlineLines[0]}</span>
            <span className="block">{equipe.headlineLines[1]}</span>
          </h2>
        </FadeUp>

        <div className="h-12 lg:h-[80px]" />

        {/* SPOTLIGHT — Germano Costa Andrade */}
        <FadeUp delay={0.2} y={32} duration={0.9}>
          <div className="grid lg:grid-cols-[460px_1fr] gap-8 lg:gap-[80px] items-start">
            {/* Photo placeholder */}
            <div
              className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[360px] flex flex-col items-center justify-center"
              style={{ backgroundColor: "var(--c-tinta)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontWeight: 400,
                  fontSize: "clamp(80px, 11vw, 120px)",
                  letterSpacing: "-3px",
                  lineHeight: 1,
                  color: "var(--c-papel)",
                }}
              >
                {spotlight.monogram}
              </span>
              <div className="absolute bottom-5 left-0 right-0 text-center">
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "var(--c-papel)",
                  }}
                >
                  {spotlight.photoLabel}
                </span>
              </div>
            </div>

            {/* Content right */}
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
                {spotlight.title}
              </p>
              <div className="h-3" />
              <h3
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 4vw, 54px)",
                  lineHeight: "1.1",
                  letterSpacing: "-1px",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                {spotlight.name}.
              </h3>
              <div className="h-6 lg:h-8" />
              <div
                className="inline-flex items-center self-start"
                style={{
                  backgroundColor: "var(--c-accent)",
                  color: "var(--c-papel)",
                  padding: "10px 18px",
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                }}
              >
                {spotlight.badge}
              </div>
              <div className="h-6 lg:h-8" />
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.05vw, 16px)",
                  lineHeight: "1.65",
                  color: "var(--c-neblina)",
                  maxWidth: "640px",
                }}
              >
                {spotlight.bio}
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="h-16 lg:h-[100px]" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
        <div className="h-8 lg:h-10" />

        {/* OTHERS — lista 12 sócios */}
        <FadeUp delay={0.1}>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.76px",
              color: "var(--c-accent)",
            }}
          >
            {equipe.othersLabel}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-8" />

        <Stagger
          delay={0.15}
          staggerChildren={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 lg:gap-y-4"
        >
          {equipe.others.map((name) => (
            <StaggerItem key={name}>
              <p
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.3vw, 18px)",
                  lineHeight: "1.4",
                  letterSpacing: "-0.1px",
                  color: "var(--c-tinta)",
                }}
              >
                {name}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
