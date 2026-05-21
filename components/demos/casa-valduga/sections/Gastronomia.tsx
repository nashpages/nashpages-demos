"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Gastronomia() {
  const g = VALDUGA_DATA.gastronomia;
  return (
    <section id="gastronomia" className="relative w-full py-20 lg:py-[100px]" style={{ backgroundColor: "var(--c-vinho-deep)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-dourado-light)" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-pergaminho)" }} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-dourado-light)", marginLeft: "4px" }}>{g.eyebrow}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(36px, 4.6vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.5px", color: "var(--c-pergaminho)", margin: 0, maxWidth: "440px" }}>{g.headline}</h2>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="mt-7" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.7, color: "var(--c-pergaminho)", opacity: 0.8, margin: 0, maxWidth: "500px" }}>{g.body}</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="mt-9 flex flex-col gap-4">
                {g.highlights.map((h) => (
                  <div key={h} className="flex items-baseline gap-3">
                    <span style={{ width: "18px", height: "2px", backgroundColor: "var(--c-dourado-light)", flexShrink: 0, transform: "translateY(-5px)" }} />
                    <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.5, color: "var(--c-pergaminho)", opacity: 0.92 }}>{h}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <a href="#vinhos" className="inline-flex items-center gap-3 mt-10">
                <span style={{ width: "24px", height: "2px", backgroundColor: "var(--c-dourado-light)" }} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "2px", color: "var(--c-dourado-light)" }}>{g.cta}  →</span>
              </a>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-[1.05fr_0.95fr] gap-3 h-[440px] lg:h-[560px]">
              <div className="relative overflow-hidden h-full">
                <Image src={g.photos.pour} alt="Vinho sendo servido" fill loading="eager" quality={90} sizes="360px" className="object-cover object-center" />
              </div>
              <div className="grid grid-rows-2 gap-3 h-full">
                <div className="relative overflow-hidden">
                  <Image src={g.photos.mesa} alt="Mesa de especiarias e vinhos" fill loading="eager" quality={90} sizes="320px" className="object-cover object-center" />
                </div>
                <div className="relative overflow-hidden">
                  <Image src={g.photos.barril} alt="Barril de carvalho" fill loading="eager" quality={90} sizes="320px" className="object-cover object-center" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
