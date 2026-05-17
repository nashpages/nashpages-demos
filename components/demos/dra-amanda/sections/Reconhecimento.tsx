"use client";

import Image from "next/image";
import { AMANDA_DATA } from "../data";
import { FadeUp } from "../motion";
import { SectionWrapper } from "./SectionWrapper";

export function Reconhecimento() {
  const s = AMANDA_DATA.sections[4];
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
      <div className="mt-7 grid grid-cols-2 gap-4">
        <FadeUp delay={0.3}>
          <div className="relative w-full lg:h-[280px] h-[200px] overflow-hidden">
            <Image
              src={AMANDA_DATA.photoPalestra}
              alt="Palestra"
              fill quality={100} sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover object-center"
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="relative w-full lg:h-[280px] h-[200px] overflow-hidden">
            <Image
              src={AMANDA_DATA.photoCongresso}
              alt="Congresso"
              fill quality={100} sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover object-center"
            />
          </div>
        </FadeUp>
      </div>
      <FadeUp delay={0.5}>
        <p className="mt-7 text-[15px] leading-[1.6] max-w-[640px]"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
          {s.paragraph}
        </p>
      </FadeUp>
      <FadeUp delay={0.6}>
        <p className="mt-5 italic text-[17px] leading-[1.5] max-w-[640px]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
          {s.note}
        </p>
      </FadeUp>
    </SectionWrapper>
  );
}
