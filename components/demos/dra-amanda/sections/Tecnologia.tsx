"use client";

import Image from "next/image";
import { AMANDA_DATA } from "../data";
import { FadeUp, ImageReveal, Stagger, StaggerItem } from "../motion";

export function Tecnologia() {
  const { tecnologia } = AMANDA_DATA;
  return (
    <section id="tecnologia" className="w-full lg:px-16 px-6 lg:py-24 py-16">
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {tecnologia.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-5 lg:text-[64px] text-[40px] leading-[1.125]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-1.8px", color: "var(--c-tinta)" }}>
          <span className="block">{tecnologia.headlineLines[0]}</span>
          <span className="block">{tecnologia.headlineLines[1]}</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>

      <div className="mt-10 grid lg:grid-cols-[300px_1fr] gap-12">
        <FadeUp delay={0.3}>
          <ImageReveal className="relative w-full lg:h-[380px] h-[320px]">
            <Image
              src={AMANDA_DATA.photoUltraformer}
              alt="Ultraformer HIFU"
              fill
              quality={100}
              sizes="(min-width: 1024px) 300px, 100vw"
              className="object-cover object-center"
            />
          </ImageReveal>
          <p className="mt-3 text-[9px] tracking-[0.11em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
            {tecnologia.photoCaption}
          </p>
        </FadeUp>

        <Stagger delay={0.4} staggerChildren={0.15} className="space-y-6">
          {tecnologia.paragraphs.map((p, i) => (
            <StaggerItem key={i}>
              <p className="text-[16px] leading-[1.625]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                {p}
              </p>
            </StaggerItem>
          ))}
          <StaggerItem>
            <p className="italic text-[18px] leading-[1.55] mt-2"
              style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
              {tecnologia.note}
            </p>
          </StaggerItem>
        </Stagger>
      </div>

      <div className="mt-14 h-px w-full" style={{ backgroundColor: "var(--c-carmim)" }} />
      <Stagger delay={0.5} staggerChildren={0.12} className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-6">
        {tecnologia.specs.map((s) => (
          <StaggerItem key={s.num}>
            <p className="text-[24px]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-carmim)", letterSpacing: "-0.5px" }}>
              {s.num}
            </p>
            <p className="mt-4 text-[13px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
              {s.label}
            </p>
            <p className="mt-2 text-[10px] tracking-[0.11em] leading-[1.6]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
              {s.sub}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
