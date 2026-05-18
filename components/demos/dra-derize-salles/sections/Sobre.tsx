"use client";

import Image from "next/image";
import { DERIZE_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Sobre() {
  const { sobre } = DERIZE_DATA;

  return (
    <section id="sobre" className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* DESKTOP */}
        <div className="hidden lg:grid pt-[120px] pb-[120px] px-[80px] grid-cols-[540px_1fr] gap-x-[80px]">
          <div className="relative w-[540px] h-[720px] overflow-hidden">
            <Image
              src={sobre.photo}
              alt="Dra. Derize Salles"
              fill
              loading="eager"
              quality={100}
              sizes="540px"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col pt-2">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-accent)" }}>
                {`§ 02  ·  ${sobre.eyebrow}`}
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <FadeUp delay={0.1} y={32} duration={0.9}>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "64px", lineHeight: "74px", letterSpacing: "-1.5px", color: "var(--c-tinta)", margin: 0 }}>
                {sobre.headlineLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[40px]" />
            <FadeUp delay={0.25}>
              <div className="h-[1px] w-[80px]" style={{ backgroundColor: "var(--c-accent)" }} />
            </FadeUp>
            <div className="h-[28px]" />
            <FadeUp delay={0.35}>
              <div className="space-y-5" style={{ maxWidth: "640px" }}>
                {sobre.bio.map((p, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "16px", lineHeight: "28px", color: "var(--c-tinta)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </FadeUp>
            <div className="h-[48px]" />
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
            <div className="h-[24px]" />
            <Stagger className="grid grid-cols-3 gap-x-6" staggerChildren={0.1}>
              {sobre.credenciais.map((c) => (
                <StaggerItem key={c.label}>
                  <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.8px", color: "var(--c-accent)" }}>
                    {c.label}
                  </p>
                  <p className="mt-1" style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "22px", letterSpacing: "-0.3px", lineHeight: "30px", color: "var(--c-tinta)" }}>
                    {c.val}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <div className="relative w-full h-[460px] overflow-hidden">
            <Image src={sobre.photo} alt="Dra. Derize Salles" fill loading="eager" quality={100} sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="px-6 pt-12 pb-16">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>{`§ 02  ·  ${sobre.eyebrow}`}</p>
            </FadeUp>
            <div className="h-[16px]" />
            <FadeUp delay={0.1}>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "36px", lineHeight: "44px", letterSpacing: "-0.8px", color: "var(--c-tinta)", margin: 0 }}>
                {sobre.headlineLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[24px]" />
            <div className="h-[1px] w-[60px]" style={{ backgroundColor: "var(--c-accent)" }} />
            <div className="h-[20px]" />
            <FadeUp delay={0.3}>
              <div className="space-y-4">
                {sobre.bio.map((p, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "14px", lineHeight: "23px", color: "var(--c-tinta)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </FadeUp>
            <div className="h-[28px]" />
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
            <div className="h-[20px]" />
            <div className="grid grid-cols-3 gap-x-3">
              {sobre.credenciais.map((c) => (
                <div key={c.label}>
                  <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "9px", letterSpacing: "1.3px", color: "var(--c-accent)" }}>
                    {c.label}
                  </p>
                  <p className="mt-1" style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "16px", letterSpacing: "-0.2px", lineHeight: "22px", color: "var(--c-tinta)" }}>
                    {c.val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
