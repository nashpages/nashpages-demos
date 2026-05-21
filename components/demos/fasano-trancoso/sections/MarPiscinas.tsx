"use client";

import Image from "next/image";
import { FadeUp } from "../motion";
import { ParallaxImage } from "../ParallaxImage";
import { FASANO_DATA } from "../data";

const m = FASANO_DATA.mar;

export function MarPiscinas() {
  return (
    <section
      id="mar"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-noite)" }}
    >
      {/* Foto grande full-bleed + parallax + texto sobreposto */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(560px, 56vw, 800px)" }}>
        <ParallaxImage src={m.photoBig.src} alt={m.photoBig.alt} sizes="100vw" amount={8} />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,18,14,0.10) 0%, rgba(20,18,14,0.20) 45%, rgba(20,18,14,0.78) 100%)",
          }}
        />
        <div className="absolute inset-0">
          <div className="max-w-[1440px] mx-auto h-full relative px-6 lg:px-[100px]">
            <div
              className="absolute left-6 right-6 lg:left-[100px] lg:right-[100px]"
              style={{ bottom: "clamp(40px, 6vh, 64px)" }}
            >
              <FadeUp>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "2.6px",
                    color: "var(--c-madeira-light)",
                    marginBottom: "18px",
                  }}
                >
                  {m.eyebrow}
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontWeight: 500,
                    fontSize: "clamp(34px, 4.6vw, 60px)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.5px",
                    color: "var(--c-areia)",
                    margin: 0,
                    maxWidth: "760px",
                  }}
                >
                  {m.headline}
                </h2>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "var(--c-areia)",
                    opacity: 0.85,
                    margin: "22px 0 0",
                    maxWidth: "540px",
                  }}
                >
                  {m.body}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>

      {/* 2 fotos lado a lado full-bleed (hover, sem parallax) */}
      <div className="grid grid-cols-2 gap-1 mt-1">
        {m.photos.map((p) => (
          <div
            key={p.src}
            className="group relative overflow-hidden"
            style={{ height: "clamp(300px, 35vw, 500px)" }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              loading="eager"
              quality={95}
              sizes="50vw"
              className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
