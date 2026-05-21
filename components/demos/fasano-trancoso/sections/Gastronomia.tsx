"use client";

import Image from "next/image";
import { FadeUp } from "../motion";
import { FASANO_DATA } from "../data";

const g = FASANO_DATA.gastronomia;

export function Gastronomia() {
  return (
    <section
      id="gastronomia"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-areia)" }}
    >
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-24 lg:pt-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[680px_1fr] lg:gap-16 items-start">
          <FadeUp>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "2.6px",
                color: "var(--c-madeira)",
              }}
            >
              {g.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontWeight: 500,
                fontSize: "clamp(34px, 4.8vw, 62px)",
                lineHeight: 1.08,
                letterSpacing: "-0.5px",
                color: "var(--c-tinta)",
                margin: "20px 0 0",
                maxWidth: "560px",
              }}
            >
              {g.headline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p
              className="mt-6 lg:mt-2"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.75,
                color: "var(--c-fumaca)",
                margin: 0,
                maxWidth: "520px",
              }}
            >
              {g.body}
            </p>
          </FadeUp>
        </div>
      </div>

      {/* 2 fotos HQ full-bleed empilhadas */}
      <div className="mt-14 lg:mt-[90px] flex flex-col gap-5">
        {g.photos.map((p) => (
          <FadeUp key={p.src} y={40}>
            <div
              className="group relative w-full overflow-hidden"
              style={{ height: "clamp(440px, 54vw, 780px)" }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                loading="eager"
                quality={95}
                sizes="100vw"
                className="object-cover object-center transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
          </FadeUp>
        ))}
      </div>

      <div className="h-16 lg:h-[60px]" />
    </section>
  );
}
