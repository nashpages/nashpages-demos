"use client";

import { MPL_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Cortes() {
  const { cortes } = MPL_DATA;

  return (
    <section
      id="arbitragem"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-tinta)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] py-24 lg:py-32">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-accent-light)",
            }}
          >
            {cortes.eyebrow}
          </p>
          <span
            aria-hidden
            className="block mt-3"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent-light)" }}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-10 lg:mt-12 max-w-[1100px]"
            style={{
              fontFamily: "var(--font-source-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(64px, 9.5vw, 132px)",
              lineHeight: 0.98,
              letterSpacing: "clamp(-1.6px, -0.24vw, -3.2px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {cortes.headlineA}
            <br />
            <span style={{ color: "var(--c-accent)" }}>{cortes.headlineB}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-10 max-w-[880px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.2vw, 16px)",
              lineHeight: 1.65,
              color: "#C7BCA8",
            }}
          >
            {cortes.body}
          </p>
        </FadeUp>

        <Stagger
          className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12"
          staggerChildren={0.08}
        >
          {cortes.list.map((corte) => (
            <StaggerItem key={corte.code} className="relative">
              <span
                aria-hidden
                className="block"
                style={{ width: "100%", height: "1px", backgroundColor: "#4D4234" }}
              />
              <p
                className="mt-4"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 400,
                  fontSize: "10px",
                  letterSpacing: "1.2px",
                  color: "#8C7E68",
                }}
              >
                {corte.code}
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-source-serif)",
                  fontWeight: 500,
                  fontSize: "28px",
                  letterSpacing: "-0.4px",
                  color: "var(--c-papel)",
                }}
              >
                {corte.sigla}
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "11px",
                  lineHeight: 1.5,
                  color: "#C7BCA8",
                }}
              >
                {corte.name}
              </p>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "9px",
                  letterSpacing: "1.6px",
                  color: "var(--c-accent-light)",
                }}
              >
                {corte.city}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
