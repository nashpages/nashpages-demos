"use client";

import Image from "next/image";
import { PVBT_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Casos() {
  const { casos } = PVBT_DATA;

  return (
    <section
      id="casos"
      className="relative w-full py-20 lg:py-[80px]"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <FadeUp>
          <div className="flex items-center justify-between mb-12 lg:mb-16">
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-dourado)",
              }}
            >
              {casos.eyebrow}
            </p>
            <p
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-neblina)",
                opacity: 0.85,
              }}
            >
              {casos.eyebrowRight}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(56px, 9vw, 120px)",
              lineHeight: 1,
              letterSpacing: "clamp(-1.6px, -0.3vw, -3px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {casos.headlineA}
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(56px, 9vw, 120px)",
              lineHeight: 1,
              letterSpacing: "clamp(-1.6px, -0.3vw, -3px)",
              color: "var(--c-dourado-deep)",
              margin: 0,
            }}
          >
            {casos.headlineB}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mt-8 lg:mt-10 max-w-[940px]"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.6vw, 20px)",
              lineHeight: 1.4,
              letterSpacing: "-0.2px",
              color: "var(--c-neblina)",
              margin: 0,
            }}
          >
            {casos.sub}
          </p>
        </FadeUp>

        <div
          aria-hidden
          className="my-12 lg:my-16"
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
        />

        <Stagger staggerChildren={0.14} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          {casos.list.map((c) => (
            <StaggerItem key={c.name}>
              <div
                className="relative w-full"
                style={{
                  aspectRatio: "1.05/1",
                  backgroundColor: c.fit === "contain" ? "var(--c-pedra)" : "transparent",
                }}
              >
                <Image
                  src={c.photo}
                  alt={c.name}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw"
                  style={{ objectFit: c.fit, objectPosition: "center" }}
                />
              </div>
              <p
                className="mt-6"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "9px",
                  letterSpacing: "1.8px",
                  color: "var(--c-dourado)",
                }}
              >
                {c.label}
              </p>
              <h3
                className="mt-3"
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "clamp(40px, 4vw, 56px)",
                  lineHeight: 1,
                  letterSpacing: "-1.5px",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                {c.name}
              </h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "17px",
                  letterSpacing: "-0.1px",
                  color: "var(--c-neblina)",
                  margin: 0,
                }}
              >
                {c.path}
              </p>
              <div className="mt-4 flex items-baseline gap-3">
                <span
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontWeight: 400,
                    fontSize: "clamp(32px, 3vw, 40px)",
                    letterSpacing: "-0.5px",
                    color: "var(--c-dourado-deep)",
                  }}
                >
                  {c.cifra}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "14px",
                    letterSpacing: "-0.1px",
                    color: "var(--c-neblina)",
                    opacity: 0.75,
                  }}
                >
                  {c.cifraSub}
                </span>
              </div>
              <p
                className="mt-4"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: 1.55,
                  letterSpacing: "-0.05px",
                  color: "var(--c-tinta)",
                  opacity: 0.82,
                  margin: 0,
                }}
              >
                {c.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
