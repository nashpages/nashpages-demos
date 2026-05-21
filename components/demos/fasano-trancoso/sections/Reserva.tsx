"use client";

import { FadeUp } from "../motion";
import { ParallaxImage } from "../ParallaxImage";
import { FASANO_DATA } from "../data";

const r = FASANO_DATA.reserva;

export function Reserva() {
  return (
    <section
      id="reserva"
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(600px, 57vw, 820px)", backgroundColor: "var(--c-noite)" }}
    >
      <ParallaxImage src={r.photo.src} alt={r.photo.alt} sizes="100vw" amount={8} />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(20,18,14,0.46)" }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-[100px] text-center">
          <FadeUp>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "3px",
                color: "var(--c-madeira-light)",
                marginBottom: "22px",
              }}
            >
              {r.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={0.1} duration={1.1}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontWeight: 500,
                fontSize: "clamp(40px, 5.4vw, 76px)",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
                color: "var(--c-areia)",
                margin: 0,
              }}
            >
              {r.headline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--c-areia)",
                opacity: 0.85,
                margin: "26px auto 0",
                maxWidth: "560px",
              }}
            >
              {r.body}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
