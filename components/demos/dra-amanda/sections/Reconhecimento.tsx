"use client";

import Image from "next/image";
import { AMANDA_DATA } from "../data";
import { FadeUp, ImageReveal, Stagger, StaggerItem } from "../motion";

export function Reconhecimento() {
  const { reconhecimento } = AMANDA_DATA;
  return (
    <section id="reconhecimento" className="w-full lg:px-16 px-6 lg:py-24 py-16">
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {reconhecimento.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-5 lg:text-[64px] text-[40px] leading-[1.125]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-1.8px", color: "var(--c-tinta)" }}>
          <span className="block">{reconhecimento.headlineLines[0]}</span>
          <span className="block">{reconhecimento.headlineLines[1]}</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>

      <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6">
        <FadeUp delay={0.3}>
          <ImageReveal className="relative w-full h-[440px]">
            <Image
              src={AMANDA_DATA.photoPalestra}
              alt="Palestra"
              fill quality={100} sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </ImageReveal>
          <p className="mt-3 text-[9px] tracking-[0.11em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
            {reconhecimento.photo1Caption}
          </p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <ImageReveal className="relative w-full h-[440px]">
            <Image
              src={AMANDA_DATA.photoCongresso}
              alt="Congresso"
              fill quality={100} sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </ImageReveal>
          <p className="mt-3 text-[9px] tracking-[0.11em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
            {reconhecimento.photo2Caption}
          </p>
        </FadeUp>
      </div>

      <FadeUp delay={0.5}>
        <p className="mt-12 text-[16px] leading-[1.625] max-w-[800px]"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
          {reconhecimento.paragraph}
        </p>
      </FadeUp>
      <FadeUp delay={0.6}>
        <p className="mt-6 italic text-[18px] leading-[1.55] max-w-[800px]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
          {reconhecimento.note}
        </p>
      </FadeUp>

      <div className="mt-14 h-px w-full" style={{ backgroundColor: "var(--c-carmim)" }} />
      <Stagger delay={0.7} staggerChildren={0.12} className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-6">
        {reconhecimento.specs.map((s) => (
          <StaggerItem key={s.num}>
            <p className="text-[22px]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-carmim)", letterSpacing: "-0.5px" }}>
              {s.num}
            </p>
            <p className="mt-4 text-[12px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
              {s.label}
            </p>
            <p className="mt-2 text-[9px] tracking-[0.11em] leading-[1.6]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
              {s.sub}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
