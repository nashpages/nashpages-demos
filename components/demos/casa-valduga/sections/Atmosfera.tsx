"use client";

import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

const SPANS = [
  "col-span-2 lg:col-span-6 h-[260px] lg:h-[440px]",
  "col-span-1 lg:col-span-3 h-[260px] lg:h-[440px]",
  "col-span-1 lg:col-span-3 h-[260px] lg:h-[440px]",
  "col-span-1 lg:col-span-6 h-[220px] lg:h-[300px]",
  "col-span-1 lg:col-span-6 h-[220px] lg:h-[300px]",
];

export function Atmosfera() {
  const a = VALDUGA_DATA.atmosfera;
  return (
    <section id="atmosfera" className="relative w-full py-20 lg:py-[100px]" style={{ backgroundColor: "var(--c-pergaminho)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <FadeUp>
          <div className="flex items-end justify-between gap-6 mb-10 lg:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-vinho)" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-dourado)" }} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-vinho)", marginLeft: "4px" }}>{a.eyebrow}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(32px, 4.2vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.5px", color: "var(--c-tinta)", margin: 0 }}>{a.headline}</h2>
            </div>
            <span className="hidden md:block whitespace-nowrap" style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 400, fontSize: "12px", letterSpacing: "1.5px", color: "var(--c-neblina)" }}>{a.tag}</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3">
            {a.photos.map((p, i) => (
              <div key={p.src} className={`group relative overflow-hidden ${SPANS[i]}`}>
                <Image src={p.src} alt={p.alt} fill loading="eager" quality={90} sizes="(max-width: 1024px) 50vw, 720px" className="object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]" />
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
