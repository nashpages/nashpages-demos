"use client";

import { TROJAN_DATA } from "../data";
import { FadeUp, SignatureDual } from "../motion";

export function Contato() {
  const { contato } = TROJAN_DATA;

  return (
    <section
      id="contato"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-azul)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] py-24 lg:py-32 relative">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "rgba(250,250,251,0.7)",
            }}
          >
            {contato.eyebrow}
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <h2
            className="mt-12 lg:mt-14"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(72px, 12vw, 144px)",
              lineHeight: 1.02,
              letterSpacing: "clamp(-2px, -0.4vw, -5px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {contato.headline.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p
            className="mt-12"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(18px, 1.8vw, 24px)",
              lineHeight: 1.4,
              color: "rgba(250,250,251,0.75)",
            }}
          >
            {contato.subline}
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <a
            href={contato.cta.href}
            className="mt-10 inline-flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
            style={{
              backgroundColor: "var(--c-cinabrio)",
              color: "var(--c-papel)",
              padding: "20px 36px",
              borderRadius: "40px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "16px",
              letterSpacing: "0.1px",
            }}
          >
            <span>{contato.cta.label}</span>
            <span aria-hidden style={{ fontSize: "18px" }}>
              →
            </span>
          </a>
        </FadeUp>

        <FadeUp delay={0.6}>
          <div className="mt-16 flex flex-wrap items-center gap-x-5 gap-y-2">
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "1.6px",
                color: "rgba(250,250,251,0.55)",
              }}
            >
              INSTAGRAM
            </p>
            {contato.instagram.map((i, idx) => (
              <div key={i} className="flex items-center gap-5">
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "1.4px",
                    color: "rgba(250,250,251,0.85)",
                  }}
                >
                  {i}
                </p>
                {idx < contato.instagram.length - 1 && (
                  <span aria-hidden style={{ color: "var(--c-cinabrio)" }}>
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* signature dual top right */}
        <div className="hidden lg:block absolute right-[80px] top-32">
          <SignatureDual widthPx={48} />
        </div>
      </div>
    </section>
  );
}
