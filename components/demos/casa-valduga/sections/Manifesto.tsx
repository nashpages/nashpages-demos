"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

const m = VALDUGA_DATA.manifesto;
const PHOTO_W = "clamp(440px, 40vw, 600px)";
const TEXT_RIGHT = "calc(clamp(440px, 40vw, 600px) + 72px - max(0px, (100vw - 1440px) / 2))";

function Eyebrow() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-vinho)" }} />
      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-dourado)" }} />
      <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-vinho)", marginLeft: "4px" }}>{m.eyebrow}</span>
    </div>
  );
}
const Headline = () => (
  <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(40px, 5vw, 62px)", lineHeight: 1.05, letterSpacing: "-1px", color: "var(--c-tinta)", margin: 0 }}>{m.headline}</h2>
);
const Body = () => (
  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.7, color: "var(--c-neblina)", margin: 0, maxWidth: "560px" }}>{m.body}</p>
);
const Stats = () => (
  <div className="flex gap-10 sm:gap-12 lg:gap-16">
    {m.stats.map((s) => (
      <div key={s.label}>
        <p style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(36px, 4vw, 48px)", lineHeight: 1, color: "var(--c-vinho)", margin: 0 }}>{s.num}</p>
        <p className="mt-3" style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 400, fontSize: "11px", letterSpacing: "1.2px", color: "var(--c-neblina)", margin: 0, maxWidth: "112px" }}>{s.label}</p>
      </div>
    ))}
  </div>
);

export function Manifesto() {
  return (
    <section id="manifesto" data-snap-section className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-pergaminho)" }}>
      {/* DESKTOP — tela inteira; foto full-height à direita; textos espalhados (topo/meio/base) como no Figma */}
      <div className="hidden lg:block relative w-full">
        <div className="absolute right-0 top-0 bottom-0 overflow-hidden" style={{ width: PHOTO_W }}>
          <Image src={m.photo} alt="Parreirais do Vale dos Vinhedos" fill loading="eager" quality={90} sizes="600px" className="object-cover object-center" />
        </div>
        <div className="max-w-[1440px] mx-auto relative min-h-screen">
          <div className="absolute left-[80px]" style={{ top: "15vh", right: TEXT_RIGHT }}>
            <FadeUp><Eyebrow /></FadeUp>
            <FadeUp delay={0.05}><Headline /></FadeUp>
          </div>
          <div className="absolute left-[80px]" style={{ top: "42vh", right: TEXT_RIGHT }}>
            <FadeUp delay={0.1}><Body /></FadeUp>
          </div>
          <div className="absolute left-[80px]" style={{ top: "66vh", right: TEXT_RIGHT }}>
            <FadeUp delay={0.15}><Stats /></FadeUp>
          </div>
        </div>
      </div>
      {/* MOBILE — empilhado */}
      <div className="lg:hidden px-6 pt-24 pb-12">
        <Eyebrow />
        <Headline />
        <div className="mt-7"><Body /></div>
        <div className="mt-12"><Stats /></div>
      </div>
      <div className="lg:hidden relative w-full h-[440px] overflow-hidden">
        <Image src={m.photo} alt="" fill loading="eager" quality={90} sizes="100vw" className="object-cover object-center" />
      </div>
    </section>
  );
}
