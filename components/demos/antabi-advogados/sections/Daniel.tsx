"use client";

import { ANTABI_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Daniel() {
  const { daniel } = ANTABI_DATA;

  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "var(--c-pedra)" }}
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
            {daniel.eyebrow}
          </p>
          <span
            aria-hidden
            className="block mt-3"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent)" }}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-8"
            style={{
              fontFamily: "var(--font-lora)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "clamp(-1px, -0.14vw, -1.6px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {daniel.nameLine1}
            <br />
            {daniel.nameLine2}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-8 max-w-[1100px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(14px, 1.3vw, 18px)",
              lineHeight: 1.65,
              color: "var(--c-neblina)",
            }}
          >
            {daniel.body}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <span
            aria-hidden
            className="block mt-12"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-linha)" }}
          />
          <Stagger
            className="mt-6 flex flex-wrap gap-y-8 gap-x-12 md:gap-x-20"
            staggerChildren={0.1}
          >
            {daniel.creds.map((c) => (
              <StaggerItem key={c.b}>
                <p
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontWeight: 500,
                    fontSize: "clamp(20px, 2vw, 24px)",
                    letterSpacing: "0.3px",
                    color: "var(--c-accent)",
                  }}
                >
                  {c.a}
                </p>
                <p
                  className="mt-1.5"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 400,
                    fontSize: "10px",
                    letterSpacing: "1.4px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {c.b}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <p
            className="mt-10"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-tinta)",
            }}
          >
            {daniel.credsFooter}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
