"use client";

import Image from "next/image";
import { GABRIELA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Sobre() {
  const { sobre } = GABRIELA_DATA;

  return (
    <section id="sobre" className="w-full" style={{ backgroundColor: "var(--c-bege)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* DESKTOP */}
        <div className="hidden lg:grid pt-[120px] pb-[120px] px-[80px] grid-cols-[440px_1fr] gap-x-[60px]">
          <div className="relative w-[440px] h-[560px] overflow-hidden">
            <Image src={sobre.photo} alt="Dra. Gabriela Koeddermann" fill priority quality={100} sizes="440px" className="object-cover object-center" />
          </div>

          <div className="flex flex-col">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "1.92px", color: "var(--c-accent)" }}>
                {`/  ${sobre.eyebrow}`}
              </p>
            </FadeUp>
            <div className="h-[80px]" />
            <FadeUp delay={0.1}>
              <p style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "56px", lineHeight: "68px", letterSpacing: "-1px", color: "var(--c-tinta)", margin: 0 }}>
                <span className="block">{sobre.quoteLines[0]}</span>
                <span className="block">{sobre.quoteLines[1]}</span>
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <FadeUp delay={0.2}>
              <div className="h-[2px] w-[40px]" style={{ backgroundColor: "var(--c-accent)" }} />
              <div className="h-[16px]" />
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.76px", color: "var(--c-neblina)" }}>
                {sobre.attribution}
              </p>
            </FadeUp>
            <div className="h-[44px]" />
            <FadeUp delay={0.35}>
              <div className="space-y-6">
                {sobre.bio.map((p, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "var(--c-tinta)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <div className="relative w-full h-[460px] overflow-hidden">
            <Image src={sobre.photo} alt="Dra. Gabriela Koeddermann" fill priority quality={100} sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="px-6 pt-12 pb-16">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>{`/  ${sobre.eyebrow}`}</p>
            </FadeUp>
            <div className="h-[16px]" />
            <FadeUp delay={0.1}>
              <p style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "32px", lineHeight: "40px", letterSpacing: "-0.6px", color: "var(--c-tinta)", margin: 0 }}>
                <span className="block">{sobre.quoteLines[0]}</span>
                <span className="block">{sobre.quoteLines[1]}</span>
              </p>
            </FadeUp>
            <div className="h-[24px]" />
            <FadeUp delay={0.2}>
              <div className="h-[2px] w-[36px]" style={{ backgroundColor: "var(--c-accent)" }} />
              <div className="h-[12px]" />
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-neblina)" }}>
                {sobre.attribution}
              </p>
            </FadeUp>
            <div className="h-[32px]" />
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
            <div className="h-[24px]" />
            <FadeUp delay={0.4}>
              <div className="space-y-4">
                {sobre.bio.map((p, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "var(--c-tinta)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
