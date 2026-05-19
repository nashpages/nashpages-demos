"use client";

import { ANTABI_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Areas() {
  const { areas } = ANTABI_DATA;

  return (
    <section
      id="areas"
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
            {areas.eyebrow}
          </p>
          <span
            aria-hidden
            className="block mt-3"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent)" }}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-10 lg:mt-12"
            style={{
              fontFamily: "var(--font-lora)",
              fontWeight: 500,
              fontSize: "clamp(48px, 7vw, 84px)",
              lineHeight: 1.06,
              letterSpacing: "clamp(-1.2px, -0.16vw, -2.2px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>{areas.headlineA}</span>
            <br />
            {areas.headlineB}
          </h2>
        </FadeUp>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Stagger className="lg:col-span-7 space-y-10" staggerChildren={0.1}>
            {areas.pilares.map((p) => (
              <StaggerItem key={p.num}>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "1.8px",
                    color: "var(--c-accent)",
                  }}
                >
                  {p.num}
                </p>
                <h3
                  className="mt-3 max-w-[600px]"
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontWeight: 500,
                    fontSize: "clamp(22px, 2.2vw, 28px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.4px",
                    color: "var(--c-tinta)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-4 max-w-[620px]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "var(--c-neblina)",
                  }}
                >
                  {p.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.2} className="lg:col-span-5">
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.8px",
                color: "var(--c-accent)",
              }}
            >
              12 ÁREAS · MULTIDISCIPLINAR
            </p>
            <span
              aria-hidden
              className="block mt-3"
              style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent)" }}
            />
            <div className="mt-8">
              {areas.industrias.map((ind) => (
                <div key={ind} className="py-3 border-b" style={{ borderColor: "var(--c-linha)" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontWeight: 500,
                      fontSize: "15px",
                      letterSpacing: "-0.1px",
                      color: "var(--c-tinta)",
                    }}
                  >
                    {ind}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
