"use client";

import { TROJAN_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Tecnologia() {
  const { tecnologia } = TROJAN_DATA;

  return (
    <section
      id="tecnologia"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-papel)" }}
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
            {tecnologia.eyebrow}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-6 lg:mt-8"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(40px, 5.5vw, 64px)",
              lineHeight: 1.1,
              letterSpacing: "clamp(-1px, -0.2vw, -2px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {tecnologia.headline}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-6 max-w-[820px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.1vw, 15px)",
              lineHeight: 1.6,
              color: "var(--c-neblina)",
            }}
          >
            {tecnologia.subline}
          </p>
        </FadeUp>

        <span
          aria-hidden
          className="block mt-10"
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
        />

        <Stagger
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10"
          staggerChildren={0.1}
        >
          {tecnologia.cards.map((c) => (
            <StaggerItem key={c.n}>
              <div
                aria-hidden
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "var(--c-cinabrio)",
                }}
              />
              <div className="mt-6 flex items-baseline gap-3">
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "1.8px",
                    color: "var(--c-cinabrio)",
                  }}
                >
                  {c.n}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "1.8px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {c.key}
                </p>
              </div>
              <h3
                className="mt-6"
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 1.8vw, 24px)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.4px",
                  color: "var(--c-tinta)",
                  margin: 0,
                  minHeight: "60px",
                }}
              >
                {c.title}
              </h3>
              <ul className="mt-8 space-y-3">
                {c.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 500,
                      fontSize: "11px",
                      letterSpacing: "1px",
                      color: "var(--c-tinta)",
                    }}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>

        <span
          aria-hidden
          className="block mt-16"
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
        />

        <FadeUp delay={0.1}>
          <p
            className="mt-6 max-w-[1100px]"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(15px, 1.4vw, 18px)",
              lineHeight: 1.55,
              color: "var(--c-neblina)",
            }}
          >
            {tecnologia.signature}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
