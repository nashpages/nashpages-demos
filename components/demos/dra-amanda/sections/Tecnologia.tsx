"use client";

import Image from "next/image";
import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";
import { SectionWrapper } from "./SectionWrapper";

export function Tecnologia() {
  const s = AMANDA_DATA.sections[3];
  return (
    <SectionWrapper id={s.id}>
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {s.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-5 lg:text-[56px] text-[36px] leading-[1.1]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-1.5px", color: "var(--c-tinta)" }}>
          <span className="block">{s.headlineLines[0]}</span>
          <span className="block">{s.headlineLines[1]}</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="mt-7 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>
      <div className="mt-7 grid lg:grid-cols-[200px_1fr] grid-cols-1 gap-7">
        <FadeUp delay={0.3}>
          <div className="relative w-full lg:h-[260px] h-[280px] overflow-hidden">
            <Image
              src={AMANDA_DATA.photoUltraformer}
              alt="Ultraformer HIFU"
              fill quality={100} sizes="(min-width: 1024px) 200px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-2 text-[9px] tracking-[0.11em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
            {s.photoCaption}
          </p>
        </FadeUp>
        <Stagger delay={0.4} staggerChildren={0.12} className="space-y-4">
          {s.paragraphs.map((p, i) => (
            <StaggerItem key={i}>
              <p className="text-[15px] leading-[1.6]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                {p}
              </p>
            </StaggerItem>
          ))}
          <StaggerItem>
            <p className="italic text-[17px] leading-[1.55]"
              style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
              {s.note}
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </SectionWrapper>
  );
}
