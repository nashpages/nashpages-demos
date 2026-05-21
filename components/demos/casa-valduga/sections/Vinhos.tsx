"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Vinhos() {
  const v = VALDUGA_DATA.vinhos;
  return (
    <section id="vinhos" className="relative w-full py-20 lg:py-[100px]" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-12 lg:gap-20 items-center">
          <FadeUp className="relative h-[420px] lg:h-[600px] w-full overflow-hidden order-2 lg:order-1">
            <Image src={v.photo} alt="Corredor de garrafas da Casa Valduga" fill loading="eager" quality={90} sizes="(max-width: 1024px) 100vw, 460px" className="object-cover object-center" />
          </FadeUp>
          <div className="order-1 lg:order-2">
            <FadeUp>
              <div className="flex items-center gap-3 mb-5">
                <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-vinho)" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-dourado)" }} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-vinho)", marginLeft: "4px" }}>{v.eyebrow}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(34px, 4.4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "var(--c-tinta)", margin: 0 }}>{v.headline}</h2>
            </FadeUp>
            <Stagger className="mt-10" staggerChildren={0.1}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
