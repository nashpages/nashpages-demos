"use client";

import { FadeUp } from "../motion";
import { ParallaxImage } from "../ParallaxImage";
import { FRANCIONI_DATA } from "../data";

const s = FRANCIONI_DATA.sonho;

export function OSonho() {
  return (
    <section id="sonho" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-nevoa)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-24 lg:pt-32">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-20">
          <FadeUp>
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 400,
                fontSize: "clamp(34px, 4.4vw, 54px)",
                lineHeight: 1.06,
                letterSpacing: "-0.5px",
                color: "var(--c-grafite)",
                margin: 0,
              }}
            >
              <span className="block">{s.headline[0]}</span>
              <span className="block" style={{ fontStyle: "italic", fontWeight: 300 }}>
                {s.headline[1]}
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.12} className="mt-8 lg:mt-2 lg:max-w-[460px] lg:shrink-0">
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.72,
                color: "var(--c-neblina)",
                margin: 0,
              }}
            >
              {s.body}
            </p>
            <a
              href="#vinhos"
              className="inline-block mt-7 hover:opacity-60"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "1.6px",
                color: "var(--c-grafite)",
                transition: "opacity 0.2s ease",
              }}
            >
              {s.cta}&nbsp;&nbsp;&rarr;
            </a>
          </FadeUp>
        </div>
      </div>

      <div className="relative w-full mt-12 lg:mt-16 overflow-hidden" style={{ height: "clamp(420px, 52vw, 660px)" }}>
        <ParallaxImage src={s.photo.src} alt={s.photo.alt} sizes="100vw" amount={7} />
        <span
          className="absolute top-6 left-6 lg:top-8 lg:left-11 z-10"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "2.4px",
            color: "var(--c-giz)",
            textShadow: "0 1px 12px rgba(0,0,0,0.55)",
          }}
        >
          {s.photo.caption}
        </span>
      </div>
    </section>
  );
}
