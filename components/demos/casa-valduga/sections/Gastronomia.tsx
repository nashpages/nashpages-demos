"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

const g = VALDUGA_DATA.gastronomia;
const PHOTO_W = "clamp(500px, 48vw, 740px)";
const TEXT_RIGHT = "calc(clamp(500px, 48vw, 740px) + 64px - max(0px, (100vw - 1440px) / 2))";

function Intro() {
  return (
    <>
      <FadeUp>
        <div className="flex items-center gap-3 mb-6">
          <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-dourado-light)" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-pergaminho)" }} />
          <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-dourado-light)", marginLeft: "4px" }}>{g.eyebrow}</span>
        </div>
      </FadeUp>
      <FadeUp delay={0.05}>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(36px, 4.6vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.5px", color: "var(--c-pergaminho)", margin: 0, maxWidth: "440px" }}>{g.headline}</h2>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="mt-7" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.7, color: "var(--c-pergaminho)", opacity: 0.8, margin: 0, maxWidth: "480px" }}>{g.body}</p>
      </FadeUp>
      <FadeUp delay={0.15}>
        <div className="mt-8 flex flex-col gap-4">
          {g.highlights.map((h) => (
            <div key={h} className="flex items-baseline gap-3">
              <span style={{ width: "18px", height: "2px", backgroundColor: "var(--c-dourado-light)", flexShrink: 0, transform: "translateY(-5px)" }} />
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.5, color: "var(--c-pergaminho)", opacity: 0.92 }}>{h}</span>
            </div>
          ))}
        </div>
      </FadeUp>
      <FadeUp delay={0.2}>
        <a href="#vinhos" className="inline-flex items-center gap-3 mt-9">
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--c-dourado-light)" }} />
          <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "2px", color: "var(--c-dourado-light)" }}>{g.cta}  →</span>
        </a>
      </FadeUp>
    </>
  );
}

function Cluster() {
  return (
    <div className="grid grid-cols-[1.05fr_0.95fr] gap-2.5 h-full w-full">
      <div className="relative overflow-hidden h-full">
        <Image src={g.photos.pour} alt="Vinho sendo servido" fill loading="eager" quality={90} sizes="380px" className="object-cover object-center" />
      </div>
      <div className="grid grid-rows-2 gap-2.5 h-full">
        <div className="relative overflow-hidden">
          <Image src={g.photos.mesa} alt="Mesa de especiarias e vinhos" fill loading="eager" quality={90} sizes="340px" className="object-cover object-center" />
        </div>
        <div className="relative overflow-hidden">
          <Image src={g.photos.barril} alt="Barril de carvalho" fill loading="eager" quality={90} sizes="340px" className="object-cover object-center" />
        </div>
      </div>
    </div>
  );
}

export function Gastronomia() {
  return (
    <section id="gastronomia" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-vinho-deep)" }}>
      {/* DESKTOP — cluster de fotos full-bleed à direita */}
      <div className="hidden lg:block relative w-full" style={{ height: "720px" }}>
        <div className="absolute right-0 top-0 bottom-0 overflow-hidden" style={{ width: PHOTO_W }}>
          <Cluster />
        </div>
        <div className="max-w-[1440px] mx-auto relative h-full">
          <div className="absolute flex flex-col justify-center" style={{ left: "80px", top: "0", bottom: "0", right: TEXT_RIGHT }}>
            <Intro />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden px-6 pt-16 pb-12">
        <Intro />
      </div>
      <div className="lg:hidden relative w-full h-[460px] overflow-hidden">
        <Cluster />
      </div>
    </section>
  );
}
