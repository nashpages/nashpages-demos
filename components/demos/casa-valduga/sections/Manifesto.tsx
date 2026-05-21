"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Manifesto() {
  const m = VALDUGA_DATA.manifesto;

  return (
    <section
      id="manifesto"
      data-snap-section
      className="relative w-full py-20 lg:py-[110px]"
      style={{ backgroundColor: "var(--c-pergaminho)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 lg:gap-20 items-start">
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-7">
                <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-vinho)" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-dourado)" }} />
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "13px",
                    letterSpacing: "2.5px",
                    color: "var(--c-vinho)",
                    marginLeft: "4px",
                  }}
                >
                  {m.eyebrow}
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 500,
                  fontSize: "clamp(40px, 5.2vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                {m.headline}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p
                className="mt-7 lg:mt-9"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "var(--c-neblina)",
                  margin: 0,
                  maxWidth: "600px",
                }}
              >
                {m.body}
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex gap-10 sm:gap-12 lg:gap-16 mt-12 lg:mt-14">
                {m.stats.map((s) => (
                  <div key={s.label}>
                    <p
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: 500,
                        fontSize: "clamp(36px, 4vw, 48px)",
                        lineHeight: 1,
                        color: "var(--c-vinho)",
                        margin: 0,
                      }}
                    >
                      {s.num}
                    </p>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 400,
                        fontSize: "11px",
                        letterSpacing: "1.2px",
                        color: "var(--c-neblina)",
                        margin: 0,
                        maxWidth: "112px",
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="relative h-[440px] lg:h-[600px] w-full overflow-hidden">
            <Image
              src={m.photo}
              alt="Parreirais do Vale dos Vinhedos"
              fill
              loading="eager"
              quality={90}
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover object-center"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
