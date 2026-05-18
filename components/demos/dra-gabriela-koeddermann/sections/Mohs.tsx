"use client";

import Image from "next/image";
import { GABRIELA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Mohs() {
  const { mohs } = GABRIELA_DATA;

  return (
    <section id="mohs" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* DESKTOP */}
        <div className="hidden lg:block px-[80px] pt-[120px] pb-[120px]">
          <FadeUp>
            <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "1.92px", color: "var(--c-accent)" }}>
              {`/  ${mohs.eyebrow}`}
            </p>
          </FadeUp>
          <div className="h-10" />
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "72px", lineHeight: "80px", letterSpacing: "-1.6px", color: "var(--c-tinta)", margin: 0 }}>
              {mohs.headline}
            </h2>
          </FadeUp>
          <div className="h-12" />
          <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
          <div className="h-10" />

          <div className="grid grid-cols-[440px_1fr] gap-x-[60px]">
            <FadeUp delay={0.15}>
              <div className="relative w-[440px] h-[560px] overflow-hidden">
                <Image src={mohs.photo} alt="Microscópio Mohs" fill quality={100} sizes="440px" className="object-cover object-center" />
              </div>
            </FadeUp>

            <div className="flex flex-col">
              <FadeUp delay={0.2}>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "18px", lineHeight: "30px", color: "var(--c-tinta)", maxWidth: "780px" }}>
                  {mohs.body}
                </p>
              </FadeUp>
              <div className="h-[44px]" />
              <Stagger delay={0.3} staggerChildren={0.12} className="grid grid-cols-3 gap-x-[30px]">
                {mohs.cols.map((c) => (
                  <StaggerItem key={c.num}>
                    <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.76px", color: "var(--c-accent)" }}>
                      {c.num}
                    </p>
                    <div className="h-2" />
                    <p style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.4px", color: "var(--c-tinta)" }}>
                      {c.label}
                    </p>
                    <div className="h-3" />
                    <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "var(--c-neblina)" }}>
                      {c.body}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
              <div className="flex-1" />
              <FadeUp delay={0.5}>
                <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
                <div className="h-7" />
                <p style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "28px", lineHeight: "38px", letterSpacing: "-0.4px", color: "var(--c-tinta)" }}>
                  {mohs.signature}
                </p>
                <div className="h-4" />
                <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.76px", color: "var(--c-neblina)" }}>
                  {mohs.signatureAttribution}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <div className="relative w-full h-[460px] overflow-hidden">
            <Image src={mohs.photo} alt="Microscópio Mohs" fill quality={100} sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="px-6 pt-12 pb-16">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>{`/  ${mohs.eyebrow}`}</p>
            </FadeUp>
            <div className="h-[16px]" />
            <FadeUp delay={0.1}>
              <h2 style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "42px", lineHeight: "48px", letterSpacing: "-0.8px", color: "var(--c-tinta)", margin: 0 }}>
                {mohs.headline}
              </h2>
            </FadeUp>
            <div className="h-[28px]" />
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
            <div className="h-[24px]" />
            <FadeUp delay={0.2}>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "15px", lineHeight: "24px", color: "var(--c-tinta)" }}>
                {mohs.body}
              </p>
            </FadeUp>
            <div className="h-[32px]" />
            <Stagger staggerChildren={0.08} className="space-y-6">
              {mohs.cols.map((c) => (
                <StaggerItem key={c.num}>
                  <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>{c.num}</p>
                  <div className="h-2" />
                  <p style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "22px", lineHeight: "28px", letterSpacing: "-0.4px", color: "var(--c-tinta)" }}>{c.label}</p>
                  <div className="h-2" />
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "13px", lineHeight: "20px", color: "var(--c-neblina)" }}>{c.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="h-[28px]" />
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
            <div className="h-[24px]" />
            <FadeUp delay={0.4}>
              <p style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.3px", color: "var(--c-tinta)" }}>
                {mohs.signature}
              </p>
              <div className="h-3" />
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-neblina)" }}>
                {mohs.signatureAttribution}
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
