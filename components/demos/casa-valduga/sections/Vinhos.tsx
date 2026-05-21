"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

const v = VALDUGA_DATA.vinhos;
const PHOTO_W = "clamp(420px, 36vw, 540px)";
const TEXT_LEFT = "calc(clamp(420px, 36vw, 540px) + 64px - max(0px, (100vw - 1440px) / 2))";

const Eyebrow = () => (
  <div className="flex items-center gap-3 mb-5">
    <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-vinho)" }} />
    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-dourado)" }} />
    <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-vinho)", marginLeft: "4px" }}>{v.eyebrow}</span>
  </div>
);

const Headline = () => (
  <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(34px, 4.4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "var(--c-tinta)", margin: 0, maxWidth: "560px" }}>{v.headline}</h2>
);

function Linha({ l }: { l: (typeof v.lines)[number] }) {
  return (
    <div style={{ borderBottom: "1px solid var(--c-linha)", paddingBottom: "16px" }}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(24px, 2.2vw, 28px)", lineHeight: 1.1, color: "var(--c-tinta)", margin: 0 }}>{l.name}</h3>
        <span className="whitespace-nowrap" style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.5px", color: "var(--c-dourado-deep)" }}>{l.tag}</span>
      </div>
      <p className="mt-2.5" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "15px", lineHeight: 1.47, color: "var(--c-neblina)", margin: 0, maxWidth: "740px" }}>{l.desc}</p>
    </div>
  );
}

export function Vinhos() {
  return (
    <section id="vinhos" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-pedra)" }}>
      {/* DESKTOP — tela inteira; foto full-height à esquerda; eyebrow+headline no topo, lista distribuída como no Figma */}
      <div className="hidden lg:block relative w-full">
        <div className="absolute left-0 top-0 bottom-0 overflow-hidden" style={{ width: PHOTO_W }}>
          <Image src={v.photo} alt="Corredor de garrafas da Casa Valduga" fill loading="eager" quality={95} sizes="(min-width: 1024px) 960px, 100vw" className="object-cover object-center" />
        </div>
        <div className="max-w-[1440px] mx-auto relative min-h-screen">
          <div className="absolute" style={{ left: TEXT_LEFT, right: "80px", top: "15vh" }}>
            <FadeUp><Eyebrow /></FadeUp>
            <FadeUp delay={0.05}><Headline /></FadeUp>
          </div>
          <div className="absolute flex flex-col justify-between" style={{ left: TEXT_LEFT, right: "80px", top: "33vh", bottom: "12vh" }}>
            {v.lines.map((l, i) => (
              <FadeUp key={l.name} delay={0.1 + i * 0.07}><Linha l={l} /></FadeUp>
            ))}
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden relative w-full h-[420px] overflow-hidden">
        <Image src={v.photo} alt="" fill loading="eager" quality={95} sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="lg:hidden px-6 pt-14 pb-16">
        <Eyebrow />
        <Headline />
        <div className="mt-9 flex flex-col gap-7">
          {v.lines.map((l) => (
            <Linha key={l.name} l={l} />
          ))}
        </div>
      </div>
    </section>
  );
}
