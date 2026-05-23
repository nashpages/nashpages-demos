"use client";

import Image from "next/image";
import { FadeUp } from "../motion";
import { FRANCIONI_DATA } from "../data";

const a = FRANCIONI_DATA.arte;

export function Arte() {
  return (
    <section id="arte" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-nevoa)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-24 lg:pt-32 text-center">
        <FadeUp>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "3.5px",
              color: "var(--c-neblina)",
              marginBottom: "22px",
            }}
          >
            {a.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              fontSize: "clamp(34px, 4.6vw, 56px)",
              lineHeight: 1.06,
              letterSpacing: "-0.5px",
              color: "var(--c-grafite)",
              margin: 0,
            }}
          >
            <span className="block">{a.headline[0]}</span>
            <span className="block" style={{ fontStyle: "italic", fontWeight: 300 }}>
              {a.headline[1]}
            </span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--c-neblina)",
              margin: "28px auto 0",
              maxWidth: "720px",
            }}
          >
            {a.body}
          </p>
        </FadeUp>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] mt-12 lg:mt-14">
        <FadeUp>
          <div className="group relative w-full overflow-hidden" style={{ height: "clamp(360px, 42vw, 600px)" }}>
            <Image
              src={a.photo.src}
              alt={a.photo.alt}
              fill
              loading="eager"
              quality={95}
              sizes="(min-width:1024px) 1240px, 100vw"
              className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <span
              className="absolute top-6 left-6 z-10"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "2.4px",
                color: "var(--c-giz)",
                textShadow: "0 1px 12px rgba(0,0,0,0.5)",
              }}
            >
              {a.photo.caption}
            </span>
          </div>
        </FadeUp>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] mt-10 lg:mt-12 pb-24 lg:pb-32 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {a.items.map((it, i) => (
          <FadeUp key={it.name} delay={0.06 * i}>
            <span aria-hidden className="block" style={{ width: "9px", height: "9px", backgroundColor: "var(--c-vitral)", marginBottom: "16px" }} />
            <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "15px", letterSpacing: "0.2px", color: "var(--c-grafite)", margin: 0 }}>
              {it.name}
            </h3>
            <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "13px", lineHeight: 1.55, color: "var(--c-neblina)", margin: "10px 0 0" }}>
              {it.desc}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
