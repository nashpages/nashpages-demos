"use client";

import { FadeUp } from "../motion";
import { ParallaxImage } from "../ParallaxImage";
import { FRANCIONI_DATA } from "../data";

const a = FRANCIONI_DATA.altitude;

export function Altitude() {
  return (
    <section
      id="altitude"
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(680px, 92vh, 920px)", backgroundColor: "var(--c-noite)" }}
    >
      <ParallaxImage src={a.photo.src} alt={a.photo.alt} sizes="100vw" amount={8} />
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(20,24,15,0.18)" }} />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(20,24,15,0.86) 0%, rgba(20,24,15,0.28) 48%, rgba(20,24,15,0) 78%)",
        }}
      />

      <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-[100px] flex items-center">
        <div className="max-w-[560px]">
          <FadeUp>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "3px",
                color: "var(--c-giz)",
                opacity: 0.9,
                marginBottom: "20px",
              }}
            >
              {a.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 400,
                fontSize: "clamp(36px, 4.8vw, 56px)",
                lineHeight: 1.04,
                letterSpacing: "-0.5px",
                color: "var(--c-giz)",
                margin: 0,
                textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              }}
            >
              <span className="block">{a.headline[0]}</span>
              <span className="block" style={{ fontStyle: "italic", fontWeight: 300 }}>
                {a.headline[1]}
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.72,
                color: "var(--c-giz)",
                opacity: 0.9,
                margin: "26px 0 0",
                maxWidth: "540px",
              }}
            >
              {a.body}
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="flex items-center gap-6 mt-10">
              {a.stats.map((st, i) => [
                i > 0 && (
                  <span
                    key={`d${i}`}
                    aria-hidden
                    className="w-px h-[46px]"
                    style={{ backgroundColor: "rgba(239,237,230,0.22)" }}
                  />
                ),
                <div key={st.l}>
                  <p
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontWeight: 400,
                      fontSize: "clamp(24px, 2.4vw, 30px)",
                      lineHeight: 1,
                      color: "var(--c-giz)",
                      margin: 0,
                    }}
                  >
                    {st.n}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      fontSize: "11px",
                      letterSpacing: "1.5px",
                      color: "var(--c-giz)",
                      opacity: 0.6,
                      margin: "10px 0 0",
                    }}
                  >
                    {st.l}
                  </p>
                </div>,
              ])}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
