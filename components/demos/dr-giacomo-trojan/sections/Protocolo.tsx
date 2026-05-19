"use client";

import { TROJAN_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Protocolo() {
  const { protocolo } = TROJAN_DATA;

  return (
    <section
      id="protocolo"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-pedra)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] py-20 lg:py-28">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-azul-deep)",
            }}
          >
            {protocolo.eyebrow}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-8 lg:mt-10"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(44px, 6vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "clamp(-1px, -0.2vw, -2px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {protocolo.headline}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-6 max-w-[760px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.1vw, 15px)",
              lineHeight: 1.6,
              color: "var(--c-neblina)",
            }}
          >
            {protocolo.subline}
          </p>
        </FadeUp>

        <span
          aria-hidden
          className="block mt-12"
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
        />

        <Stagger className="mt-2" staggerChildren={0.08}>
          {protocolo.etapas.map((e, i) => (
            <StaggerItem key={e.key}>
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-10"
                style={{
                  borderBottom:
                    i < protocolo.etapas.length - 1
                      ? "1px solid var(--c-linha)"
                      : "none",
                }}
              >
                <p
                  className="lg:col-span-3"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "1.8px",
                    color: "var(--c-cinabrio)",
                    paddingTop: "8px",
                  }}
                >
                  {e.key}
                </p>
                <h3
                  className="lg:col-span-4"
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(24px, 2.3vw, 30px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.5px",
                    color: "var(--c-tinta)",
                    margin: 0,
                  }}
                >
                  {e.title}
                </h3>
                <p
                  className="lg:col-span-5"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--c-neblina)",
                    paddingTop: "6px",
                  }}
                >
                  {e.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
