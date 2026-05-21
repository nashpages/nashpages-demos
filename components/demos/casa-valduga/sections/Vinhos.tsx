"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

const v = VALDUGA_DATA.vinhos;
const PHOTO_W = "clamp(420px, 36vw, 540px)";
const TEXT_LEFT = "calc(clamp(420px, 36vw, 540px) + 64px - max(0px, (100vw - 1440px) / 2))";

function Lista() {
  return (
    <>
      <FadeUp>
        <div className="flex items-center gap-3 mb-5">
          <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-vinho)" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-dourado)" }} />
          <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-vinho)", marginLeft: "4px" }}>{v.eyebrow}</span>
        </div>
      </FadeUp>
      <FadeUp delay={0.05}>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(34px, 4.4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "var(--c-tinta)", margin: 0 }}>{v.headline}</h2>
      </FadeUp>
      <Stagger className="mt-9" staggerChildren={0.1}>
        {v.lines.map((l) => (
          <StaggerItem key={l.name}>
            <div className="py-5" style={{ borderBottom: "1px solid var(--c-linha)" }}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(24px, 2.2vw, 30px)", lineHeight: 1.1, color: "var(--c-tinta)", margin: 0 }}>{l.name}</h3>
                <span className="whitespace-nowrap" style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.5px", color: "var(--c-dourado-deep)" }}>{l.tag}</span>
              </div>
              <p className="mt-2" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "15px", lineHeight: 1.5, color: "var(--c-neblina)", margin: 0, maxWidth: "560px" }}>{l.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </>
  );
}

export function Vinhos() {
  return (
    <section id="vinhos" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-pedra)" }}>
      {/* DESKTOP — foto full-bleed à esquerda + lista à direita */}
      <div className="hidden lg:block relative w-full" style={{ height: "820px" }}>
        <div className="absolute left-0 top-0 bottom-0 overflow-hidden" style={{ width: PHOTO_W }}>
          <Image src={v.photo} alt="Corredor de garrafas da Casa Valduga" fill loading="eager" quality={95} sizes="(min-width: 1024px) 960px, 100vw" className="object-cover object-center" />
        </div>
        <div className="max-w-[1440px] mx-auto relative h-full">
          <div className="absolute flex flex-col justify-center" style={{ right: "80px", top: "0", bottom: "0", left: TEXT_LEFT }}>
            <Lista />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden relative w-full h-[420px] overflow-hidden">
        <Image src={v.photo} alt="" fill loading="eager" quality={95} sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="lg:hidden px-6 pt-14 pb-16">
        <Lista />
      </div>
    </section>
  );
}
