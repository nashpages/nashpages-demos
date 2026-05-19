"use client";

import Image from "next/image";
import { PVBT_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Socios() {
  const { socios } = PVBT_DATA;

  return (
    <section
      id="socios"
      className="relative w-full py-20 lg:py-[80px]"
      style={{ backgroundColor: "var(--c-navy-deep)" }}
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
              {socios.eyebrow}
            </p>
            <p
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-papel)",
                opacity: 0.55,
              }}
            >
              {socios.eyebrowRight}
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
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            {socios.headlineA}
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(56px, 9vw, 120px)",
              lineHeight: 1,
              letterSpacing: "clamp(-1.6px, -0.3vw, -3px)",
              color: "var(--c-dourado)",
              margin: 0,
            }}
          >
            {socios.headlineB}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mt-8 lg:mt-10 max-w-[900px]"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.6vw, 20px)",
              lineHeight: 1.4,
              letterSpacing: "-0.2px",
              color: "var(--c-papel)",
              opacity: 0.7,
              margin: 0,
            }}
          >
            {socios.sub}
          </p>
        </FadeUp>

        <div
          aria-hidden
          className="my-12 lg:my-16"
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-dourado)", opacity: 0.3 }}
        />

        <Stagger staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[100px]">
          {socios.list.map((s) => (
            <StaggerItem key={s.name}>
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={s.photo}
                  alt={s.name}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 33vw, 100vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <h3
                className="mt-7"
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  fontWeight: 400,
                  fontSize: "clamp(22px, 1.8vw, 26px)",
                  letterSpacing: "-0.4px",
                  color: "var(--c-papel)",
                  margin: 0,
                }}
              >
                {s.name}
              </h3>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "9px",
                  letterSpacing: "1.8px",
                  color: "var(--c-dourado)",
                }}
              >
                {s.role}
              </p>
              <p
                className="mt-3 whitespace-pre-line"
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.5,
                  letterSpacing: "-0.1px",
                  color: "var(--c-papel)",
                  opacity: 0.6,
                  margin: 0,
                }}
              >
                {s.creds}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
