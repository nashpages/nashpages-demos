"use client";

import Image from "next/image";
import { AMANDA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Reconhecimento() {
  const { reconhecimento } = AMANDA_DATA;
  return (
    <section id="reconhecimento" className="w-full lg:px-[120px] px-6 lg:py-[120px] py-16"
      style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        <FadeUp>
          <p className="text-[12px] tracking-[0.16em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            {reconhecimento.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-5 lg:text-[64px] text-[40px] leading-[1.125]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.028em", color: "var(--c-tinta)" }}>
            <span className="block">Em palco.</span>
            <span className="block">Em congresso.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
        </FadeUp>
        <div className="mt-12 grid grid-cols-2 gap-6">
          <FadeUp delay={0.3}>
            <div className="relative w-full lg:h-[440px] h-[220px] overflow-hidden">
              <Image
                src={AMANDA_DATA.photoPalestra}
                alt="Palestra Congresso Brasileiro de Dermatologia"
                fill quality={100} sizes="(min-width: 1024px) 50vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-[9px] tracking-[0.11em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
              PALESTRA  ·  CONGRESSO BRASILEIRO DE DERMATOLOGIA
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="relative w-full lg:h-[440px] h-[220px] overflow-hidden">
              <Image
                src={AMANDA_DATA.photoCongresso}
                alt="Congresso Brasileiro de Dermatologia"
                fill quality={100} sizes="(min-width: 1024px) 50vw, 50vw"
                className="object-cover object-[center_top]"
              />
            </div>
            <p className="mt-3 text-[9px] tracking-[0.11em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
              CONGRESSO BRASILEIRO DE DERMATOLOGIA
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.5}>
          <p className="mt-10 text-[17px] leading-[1.65] max-w-[900px]"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
            {reconhecimento.paragraph}
          </p>
        </FadeUp>
        <FadeUp delay={0.6}>
          <p className="mt-6 italic text-[18px] leading-[1.55] max-w-[900px]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
            “{reconhecimento.note}”
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
