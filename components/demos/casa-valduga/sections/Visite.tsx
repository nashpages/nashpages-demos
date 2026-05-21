"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Visite() {
  const v = VALDUGA_DATA.visite;
  return (
    <section id="visite" className="relative w-full py-20 lg:py-[100px]" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 lg:gap-20 items-center">
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-5">
                <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-vinho)" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-dourado)" }} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-vinho)", marginLeft: "4px" }}>{v.eyebrow}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(36px, 4.6vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.5px", color: "var(--c-tinta)", margin: 0 }}>{v.headline}</h2>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="mt-6" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.65, color: "var(--c-neblina)", margin: 0, maxWidth: "520px" }}>{v.intro}</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="mt-9 flex flex-col">
                {v.info.map((it) => (
                  <div key={it.label} className="py-4" style={{ borderBottom: "1px solid var(--c-linha)" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-dourado-deep)", margin: 0 }}>{it.label}</p>
                    <p className="mt-1.5" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "17px", color: "var(--c-tinta)", margin: 0 }}>{it.value}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <a href="#contato" className="inline-flex items-center gap-3 mt-9">
                <span style={{ width: "24px", height: "2px", backgroundColor: "var(--c-dourado)" }} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "12px", letterSpacing: "2px", color: "var(--c-vinho)" }}>{v.cta}  →</span>
              </a>
            </FadeUp>
          </div>
          <FadeUp delay={0.1} className="relative h-[420px] lg:h-[560px] w-full overflow-hidden">
            <Image src={v.photo} alt="Fachada da Casa Valduga" fill loading="eager" quality={90} sizes="(max-width: 1024px) 100vw, 520px" className="object-cover object-center" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
