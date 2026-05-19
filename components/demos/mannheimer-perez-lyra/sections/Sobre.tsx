"use client";

import { MPL_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Sobre() {
  const { sobre } = MPL_DATA;

  return (
    <section
      id="sobre"
      data-snap-section
      className="relative w-full"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] py-24 lg:py-32">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-accent)",
            }}
          >
            {sobre.eyebrow}
          </p>
          <span
            aria-hidden
            className="block mt-3"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent)" }}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-10 lg:mt-12 max-w-[1100px]"
            style={{
              fontFamily: "var(--font-source-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(48px, 7vw, 96px)",
              lineHeight: 1.08,
              letterSpacing: "clamp(-1.4px, -0.18vw, -2.6px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {sobre.headline}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-10 max-w-[720px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(14px, 1.3vw, 18px)",
              lineHeight: 1.65,
              color: "var(--c-neblina)",
            }}
          >
            {sobre.body}
          </p>
        </FadeUp>

        <Stagger className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8" staggerChildren={0.12}>
          {sobre.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <p
                style={{
                  fontFamily: "var(--font-source-serif)",
                  fontWeight: 300,
                  fontSize: "clamp(56px, 9vw, 132px)",
                  lineHeight: 1,
                  letterSpacing: "clamp(-1.4px, -0.28vw, -4px)",
                  color: "var(--c-accent)",
                  margin: 0,
                }}
              >
                {stat.num}
              </p>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  color: "var(--c-tinta)",
                }}
              >
                {stat.label}
              </p>
              <p
                className="mt-1.5"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 400,
                  fontSize: "10px",
                  letterSpacing: "1.2px",
                  color: "var(--c-neblina)",
                }}
              >
                {stat.sub}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.2}>
          <span
            aria-hidden
            className="block mt-20"
            style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
          />
          <p
            className="mt-8 max-w-[1100px]"
            style={{
              fontFamily: "var(--font-source-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(15px, 1.35vw, 18px)",
              lineHeight: 1.55,
              color: "var(--c-neblina)",
            }}
          >
            “{sobre.pullQuote}”
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
