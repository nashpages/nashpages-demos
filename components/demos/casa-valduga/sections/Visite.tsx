"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

const v = VALDUGA_DATA.visite;
const PHOTO_W = "clamp(460px, 42vw, 600px)";
const TEXT_RIGHT = "calc(clamp(460px, 42vw, 600px) + 64px - max(0px, (100vw - 1440px) / 2))";

const Eyebrow = () => (
  <div className="flex items-center gap-3 mb-5">
    <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-vinho)" }} />
    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-dourado)" }} />
    <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-vinho)", marginLeft: "4px" }}>{v.eyebrow}</span>
  </div>
);

const Headline = () => (
  <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(36px, 4.4vw, 54px)", lineHeight: 1.07, letterSpacing: "-0.5px", color: "var(--c-tinta)", margin: 0, maxWidth: "660px" }}>{v.headline}</h2>
);

const Intro = () => (
  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.62, color: "var(--c-neblina)", margin: 0, maxWidth: "600px" }}>{v.intro}</p>
);

const Info = () => (
  <div className="flex flex-col">
    {v.info.map((it) => (
      <div key={it.label} className="py-4" style={{ borderBottom: "1px solid var(--c-linha)" }}>
        <p style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-dourado-deep)", margin: 0 }}>{it.label}</p>
        <p className="mt-1.5" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "17px", color: "var(--c-tinta)", margin: 0 }}>{it.value}</p>
      </div>
    ))}
  </div>
);

const Cta = () => (
  <a href="#contato" className="inline-flex items-center gap-3">
    <span style={{ width: "24px", height: "2px", backgroundColor: "var(--c-dourado)" }} />
    <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "2px", color: "var(--c-vinho)" }}>{v.cta}  →</span>
  </a>
);

export function Visite() {
  return (
    <section id="visite" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-pedra)" }}>
      {/* DESKTOP — tela inteira; foto full-height à direita; textos espalhados (topo/meio/base) como no Figma */}
      <div className="hidden lg:block relative w-full">
        <div className="absolute right-0 top-0 bottom-0 overflow-hidden" style={{ width: PHOTO_W }}>
          <Image src={v.photo} alt="Fachada da Casa Valduga" fill loading="eager" quality={95} sizes="(min-width: 1024px) 720px, 100vw" className="object-cover object-center" />
        </div>
        <div className="max-w-[1440px] mx-auto relative min-h-screen">
          <div className="absolute left-[80px]" style={{ top: "15vh", right: TEXT_RIGHT }}>
            <FadeUp><Eyebrow /></FadeUp>
            <FadeUp delay={0.05}><Headline /></FadeUp>
          </div>
          <div className="absolute left-[80px]" style={{ top: "37vh", right: TEXT_RIGHT }}>
            <FadeUp delay={0.1}><Intro /></FadeUp>
          </div>
          <div className="absolute left-[80px]" style={{ top: "52vh", right: TEXT_RIGHT }}>
            <FadeUp delay={0.15}><Info /></FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-9"><Cta /></div>
            </FadeUp>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden px-6 pt-16 pb-12">
        <Eyebrow />
        <Headline />
        <div className="mt-6"><Intro /></div>
        <div className="mt-8"><Info /></div>
        <div className="mt-9"><Cta /></div>
      </div>
      <div className="lg:hidden relative w-full h-[420px] overflow-hidden">
        <Image src={v.photo} alt="" fill loading="eager" quality={95} sizes="100vw" className="object-cover object-center" />
      </div>
    </section>
  );
}
