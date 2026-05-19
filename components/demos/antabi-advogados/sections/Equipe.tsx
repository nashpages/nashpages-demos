"use client";

import { ANTABI_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Equipe() {
  const { equipe } = ANTABI_DATA;

  return (
    <section
      id="equipe"
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
            {equipe.eyebrow}
          </p>
          <span
            aria-hidden
            className="block mt-3"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent)" }}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-10"
            style={{
              fontFamily: "var(--font-lora)",
              fontWeight: 500,
              fontSize: "clamp(40px, 5.5vw, 72px)",
              lineHeight: 1.08,
              letterSpacing: "clamp(-1px, -0.16vw, -1.8px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>{equipe.headlineA}</span>
            <br />
            <span style={{ fontSize: "0.78em" }}>{equipe.headlineB}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-8 max-w-[720px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.2vw, 16px)",
              lineHeight: 1.65,
              color: "var(--c-neblina)",
            }}
          >
            {equipe.body}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <span
            aria-hidden
            className="block mt-16"
            style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
          />
        </FadeUp>

        <Stagger
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8"
          staggerChildren={0.1}
        >
          {equipe.socios.map((s) => (
            <StaggerItem key={s.surname}>
              <p
                style={{
                  fontFamily: "var(--font-lora)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: 1.25,
                  color: "var(--c-tinta)",
                }}
              >
                {s.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lora)",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: 1.25,
                  letterSpacing: "-0.2px",
                  color: "var(--c-tinta)",
                }}
              >
                {s.surname}
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "9px",
                  letterSpacing: "1.5px",
                  color: "var(--c-accent)",
                }}
              >
                {s.role}
              </p>
              {s.detail && (
                <p
                  className="mt-3 max-w-[260px]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "11px",
                    lineHeight: 1.55,
                    color: "var(--c-neblina)",
                  }}
                >
                  {s.detail}
                </p>
              )}
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.4}>
          <span
            aria-hidden
            className="block mt-16"
            style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
          />
          <p
            className="mt-8"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-neblina)",
            }}
          >
            {equipe.signature}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
