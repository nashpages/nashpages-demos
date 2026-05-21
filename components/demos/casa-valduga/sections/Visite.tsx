"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

const v = VALDUGA_DATA.visite;
const PHOTO_W = "clamp(440px, 40vw, 580px)";
const TEXT_RIGHT = "calc(clamp(440px, 40vw, 580px) + 64px - max(0px, (100vw - 1440px) / 2))";

function Corpo() {
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
        <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(36px, 4.6vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.5px", color: "var(--c-tinta)", margin: 0 }}>{v.headline}</h2>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="mt-6" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.65, color: "var(--c-neblina)", margin: 0, maxWidth: "500px" }}>{v.intro}</p>
      </FadeUp>
      <FadeUp delay={0.15}>
        <div className="mt-9 flex flex-col">
          {v.info.map((it) => (
            <div key={it.label} className="py-4" style={{ borderBottom: "1px solid var(--c-linha)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-dourado-deep)", margin: 0 }}>{it.label}</p>
              <p className="mt-1.5" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "17px", color: "var(--c-tinta)", margin: 0 }}>{it.value}</p>
            </div>
          ))}
        </div>
      </FadeUp>
      <FadeUp delay={0.2}>
        <a href="#contato" className="inline-flex items-center gap-3 mt-9">
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--c-dourado)" }} />
          <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "2px", color: "var(--c-vinho)" }}>{v.cta}  →</span>
        </a>
      </FadeUp>
    </>
  );
}

export function Visite() {
  return (
    <section id="visite" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-pedra)" }}>
      {/* DESKTOP — foto full-bleed à direita + texto à esquerda */}
      <div className="hidden lg:block relative w-full" style={{ height: "720px" }}>
        <div className="absolute right-0 top-0 bottom-0 overflow-hidden" style={{ width: PHOTO_W }}>
          <Image src={v.photo} alt="Fachada da Casa Valduga" fill loading="eager" quality={90} sizes="580px" className="object-cover object-center" />
        </div>
        <div className="max-w-[1440px] mx-auto relative h-full">
          <div className="absolute flex flex-col justify-center" style={{ left: "80px", top: "0", bottom: "0", right: TEXT_RIGHT }}>
            <Corpo />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden px-6 pt-16 pb-12">
        <Corpo />
      </div>
      <div className="lg:hidden relative w-full h-[420px] overflow-hidden">
        <Image src={v.photo} alt="" fill loading="eager" quality={90} sizes="100vw" className="object-cover object-center" />
      </div>
    </section>
  );
}
