"use client";

import Image from "next/image";
import { AMANDA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Hero() {
  const { hero } = AMANDA_DATA;

  return (
    <section id="top" className="relative w-full lg:min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] h-full grid lg:grid-cols-[1fr_500px] grid-cols-1 lg:gap-12 gap-8 lg:px-[120px] px-6 lg:pt-[180px] pt-[100px] lg:pb-[100px] pb-12">
        {/* LEFT: text */}
        <div className="flex flex-col lg:justify-center">
          <FadeUp delay={0.1}>
            <p className="text-[11px] tracking-[0.16em] lg:whitespace-nowrap"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
              {hero.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <h1 className="mt-6 leading-[1.04]"
              style={{
                fontFamily: "var(--font-fraunces)", fontWeight: 400,
                fontSize: "clamp(48px, 7.5vw, 96px)",
                letterSpacing: "-0.031em", color: "var(--c-tinta)",
              }}>
              <span className="block whitespace-nowrap">{hero.headlineLines[0]}</span>
              <span className="block whitespace-nowrap">{hero.headlineLines[1]}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.55}>
            <div className="mt-8 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
          </FadeUp>
          <FadeUp delay={0.65}>
            <p className="mt-7 text-[17px] leading-[1.65] max-w-[560px]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
              {hero.subline}
            </p>
          </FadeUp>
          <FadeUp delay={0.8}>
            <p className="mt-8 italic text-[20px] leading-[1.5] max-w-[560px]"
              style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
              {hero.quote}
            </p>
          </FadeUp>
          <FadeUp delay={0.95}>
            <div className="mt-10 flex items-center gap-8 flex-wrap">
              <a href={hero.primaryCta.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full py-[18px] px-7 text-[12px] tracking-[0.16em] transition-opacity hover:opacity-90"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, backgroundColor: "var(--c-carmim)", color: "var(--c-papel)" }}>
                {hero.primaryCta.label}  →
              </a>
              <a href={hero.secondaryCta.href} className="group inline-flex flex-col gap-[10px]">
                <span className="text-[12px] tracking-[0.16em] transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
                  {hero.secondaryCta.label}  →
                </span>
                <span className="h-px w-[160px] origin-left transition-transform duration-500 group-hover:scale-x-110"
                  style={{ backgroundColor: "var(--c-tinta)" }} />
              </a>
            </div>
          </FadeUp>
        </div>

        {/* RIGHT: photo */}
        <FadeUp delay={0.15} y={32}>
          <div className="relative w-full lg:h-full h-[420px] lg:min-h-[600px] overflow-hidden">
            <Image
              src={AMANDA_DATA.photoHero}
              alt="Dra. Amanda Fistarol"
              fill priority quality={100}
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover object-[center_15%]"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
