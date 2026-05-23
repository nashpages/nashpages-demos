"use client";

import { FadeUp } from "../motion";
import { ParallaxImage } from "../ParallaxImage";
import { FRANCIONI_DATA } from "../data";

const v = FRANCIONI_DATA.visite;

export function Visite() {
  return (
    <section id="visite" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-nevoa)" }}>
      {/* Banner com headline sobreposto */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(360px, 46vw, 480px)" }}>
        <ParallaxImage src={v.photo.src} alt={v.photo.alt} sizes="100vw" amount={7} />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(20,24,15,0.12) 0%, rgba(20,24,15,0.12) 38%, rgba(20,24,15,0.74) 100%)" }}
        />
        <span
          className="absolute top-6 left-6 lg:top-8 lg:left-11 z-10"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "12px", letterSpacing: "2.4px", color: "var(--c-giz)", textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
        >
          {v.photo.caption}
        </span>
        <div className="absolute inset-0">
          <div className="max-w-[1440px] mx-auto h-full relative px-6 lg:px-[100px]">
            <div className="absolute left-6 right-6 lg:left-[100px] lg:right-[100px]" style={{ bottom: "clamp(32px, 5vh, 52px)" }}>
              <FadeUp>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "13px", letterSpacing: "3px", color: "var(--c-giz)", opacity: 0.9, marginBottom: "16px" }}>
                  {v.eyebrow}
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <h2 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.5px", color: "var(--c-giz)", margin: 0, textShadow: "0 2px 22px rgba(0,0,0,0.4)" }}>
                  <span className="block">{v.headline[0]}</span>
                  <span className="block" style={{ fontStyle: "italic" }}>{v.headline[1]}</span>
                </h2>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo: convite + tours */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] py-14 lg:py-16 lg:flex lg:justify-between lg:gap-16">
        <FadeUp className="lg:max-w-[480px]">
          <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.7, color: "var(--c-neblina)", margin: 0 }}>
            {v.body}
          </p>
          <a
            href="#rodape"
            className="inline-block mt-7 hover:opacity-60"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "12px", letterSpacing: "1.6px", color: "var(--c-grafite)", transition: "opacity 0.2s ease" }}
          >
            {v.cta}&nbsp;&nbsp;&rarr;
          </a>
          <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "13px", letterSpacing: "0.3px", color: "var(--c-neblina)", opacity: 0.85, margin: "18px 0 0" }}>
            {v.info}
          </p>
        </FadeUp>
        <FadeUp delay={0.1} className="mt-12 lg:mt-1 lg:shrink-0">
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 lg:w-[560px]">
            {v.tours.map((t) => (
              <div key={t.name}>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, fontSize: "clamp(19px, 2vw, 22px)", lineHeight: 1.1, color: "var(--c-grafite)", margin: 0 }}>
                  {t.name}
                </h3>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "13px", lineHeight: 1.5, color: "var(--c-neblina)", margin: "9px 0 0" }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
