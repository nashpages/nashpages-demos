"use client";

import Image from "next/image";
import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Tecnologia() {
  const { tecnologia } = AMANDA_DATA;
  return (
    <section id="tecnologia" className="w-full lg:px-[120px] px-6 lg:py-[120px] py-16"
      style={{ backgroundColor: "var(--c-neve)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        <FadeUp>
          <p className="text-[12px] tracking-[0.16em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            {tecnologia.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-5 lg:text-[64px] text-[40px] leading-[1.125]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.028em", color: "var(--c-tinta)" }}>
            <span className="block">Ultraformer</span>
            <span className="block">e dermatoscopia.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
        </FadeUp>
        <div className="mt-10 grid lg:grid-cols-[320px_1fr] grid-cols-1 gap-12 items-start">
          <FadeUp delay={0.3}>
            <div className="relative w-full lg:h-[420px] h-[320px] overflow-hidden">
              <Image
                src={AMANDA_DATA.photoUltraformer}
                alt="Ultraformer HIFU"
                fill quality={100} sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-[9px] tracking-[0.11em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
              {tecnologia.photoCaption}
            </p>
          </FadeUp>
          <Stagger delay={0.4} staggerChildren={0.15} className="space-y-6">
            {tecnologia.paragraphs.map((p, i) => (
              <StaggerItem key={i}>
                <p className="text-[17px] leading-[1.65]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                  {p}
                </p>
              </StaggerItem>
            ))}
            <StaggerItem>
              <p className="italic text-[20px] leading-[1.55]"
                style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
                “{tecnologia.note}”
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
