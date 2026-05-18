"use client";

import { BERMUDES_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Areas() {
  const { areas } = BERMUDES_DATA;

  return (
    <section id="areas" data-snap-section className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[120px] pb-24 lg:pb-[120px]">
        <FadeUp>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--c-tinta)",
            }}
          >
            {`§ 05  ·  ${areas.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(52px, 6.2vw, 88px)",
              lineHeight: "1.1",
              letterSpacing: "clamp(-1.2px, -0.13vw, -2px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span className="block">{areas.headlineLines[0]}</span>
            <span className="block">{areas.headlineLines[1]}</span>
          </h2>
        </FadeUp>

        <div className="h-10 lg:h-14" />
        <div className="h-px w-20" style={{ backgroundColor: "var(--c-tinta)" }} />
        <div className="h-6 lg:h-8" />

        <FadeUp delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(17px, 1.55vw, 22px)",
              lineHeight: "1.5",
              color: "var(--c-neblina)",
              maxWidth: "720px",
              margin: 0,
            }}
          >
            {areas.subline}
          </p>
        </FadeUp>

        <div className="h-12 lg:h-[80px]" />

        {/* Split: LEFT 3 pilares · RIGHT complementares + setoriais */}
        <div className="grid lg:grid-cols-[1fr_440px] gap-12 lg:gap-[80px]">
          {/* LEFT — Pilares */}
          <div>
            <FadeUp>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-tinta)",
                }}
              >
                {`/  ${areas.pilaresLabel}`}
              </p>
            </FadeUp>
            <div className="h-6" />

            <Stagger staggerChildren={0.12} delay={0.1}>
              {areas.pilares.map((p, i) => (
                <StaggerItem key={p.num}>
                  <div className="py-6 lg:py-8" style={i > 0 ? { borderTop: "1px solid var(--c-linha)" } : undefined}>
                    <p
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono)",
                        fontWeight: 500,
                        fontSize: "11px",
                        letterSpacing: "1.5px",
                        color: "var(--c-tinta)",
                      }}
                    >
                      {p.num}
                    </p>
                    <div className="h-2" />
                    <h3
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "clamp(28px, 2.8vw, 40px)",
                        lineHeight: "1.15",
                        letterSpacing: "-0.6px",
                        color: "var(--c-tinta)",
                        margin: 0,
                      }}
                    >
                      {p.name}
                    </h3>
                    <div className="h-3 lg:h-4" />
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "var(--c-neblina)",
                        margin: 0,
                        maxWidth: "640px",
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* RIGHT — Complementares + Setoriais */}
          <div>
            <FadeUp delay={0.2}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-tinta)",
                }}
              >
                {`/  ${areas.complementaresLabel}`}
              </p>
              <div className="h-6" />
              <ul className="space-y-2">
                {areas.complementares.map((c) => (
                  <li
                    key={c}
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 1.6vw, 22px)",
                      lineHeight: "1.45",
                      letterSpacing: "-0.3px",
                      color: "var(--c-tinta)",
                    }}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <div className="h-8 lg:h-12" />
            <div className="h-px" style={{ backgroundColor: "var(--c-linha)" }} />
            <div className="h-8" />

            <FadeUp delay={0.3}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-tinta)",
                }}
              >
                {`/  ${areas.setoriaisLabel}`}
              </p>
              <div className="h-6" />
              <ul className="space-y-2">
                {areas.setoriais.map((s) => (
                  <li
                    key={s}
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 1.6vw, 22px)",
                      lineHeight: "1.45",
                      letterSpacing: "-0.3px",
                      color: "var(--c-tinta)",
                    }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
