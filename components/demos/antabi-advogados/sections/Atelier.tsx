"use client";

import { ANTABI_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Atelier() {
  const { atelier } = ANTABI_DATA;

  return (
    <section
      id="atelier"
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
            {atelier.eyebrow}
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
              fontFamily: "var(--font-lora)",
              fontWeight: 400,
              fontSize: "clamp(56px, 8.5vw, 92px)",
              lineHeight: 1.04,
              letterSpacing: "clamp(-1.4px, -0.2vw, -2.4px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            <span style={{ fontStyle: "italic" }}>{atelier.headlineA}</span>
            <br />
            <span style={{ fontWeight: 500, color: "var(--c-accent-light)" }}>
              {atelier.headlineB}
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-10 max-w-[920px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.2vw, 16px)",
              lineHeight: 1.65,
              color: "#C7BCA8",
            }}
          >
            {atelier.body}
          </p>
        </FadeUp>

        <Stagger
          className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
          staggerChildren={0.1}
        >
          {atelier.cards.map((card) => (
            <StaggerItem key={card.code}>
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
                  letterSpacing: "1.4px",
                  color: "var(--c-accent-light)",
                }}
              >
                {card.code}
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-lora)",
                  fontWeight: 500,
                  fontSize: "22px",
                  letterSpacing: "-0.2px",
                  color: "var(--c-papel)",
                }}
              >
                {card.label}
              </p>
              <p
                className="mt-3 max-w-[440px]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "13px",
                  lineHeight: 1.55,
                  color: "#C7BCA8",
                }}
              >
                {card.body}
              </p>
              <p
                className="mt-6"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "9px",
                  letterSpacing: "1.5px",
                  color: "var(--c-accent-light)",
                }}
              >
                {card.meta}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
