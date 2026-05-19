"use client";

import Image from "next/image";
import { TROJAN_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Casos() {
  const { casos } = TROJAN_DATA;

  return (
    <section
      id="casos"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-pedra)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] py-20 lg:py-28">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-azul-deep)",
            }}
          >
            {casos.eyebrow}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-8 lg:mt-10"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(44px, 6vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "clamp(-1px, -0.2vw, -2px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {casos.headline}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-6 max-w-[920px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.1vw, 15px)",
              lineHeight: 1.6,
              color: "var(--c-neblina)",
            }}
          >
            {casos.subline}
          </p>
        </FadeUp>

        <span
          aria-hidden
          className="block mt-12"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--c-linha)",
          }}
        />

        <Stagger
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10"
          staggerChildren={0.12}
        >
          {casos.items.map((c) => (
            <StaggerItem key={c.num}>
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={c.photo}
                  alt={c.title}
                  fill
                  loading="eager"
                  quality={92}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <span
                aria-hidden
                className="block mt-5"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "var(--c-linha)",
                }}
              />
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.6px",
                  color: "var(--c-cinabrio)",
                }}
              >
                {c.num}
              </p>
              <h3
                className="mt-2"
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 1.8vw, 24px)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.4px",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                {c.title}
              </h3>
              <p
                className="mt-3 max-w-[560px]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "13px",
                  lineHeight: 1.55,
                  color: "var(--c-neblina)",
                }}
              >
                {c.desc}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <span
          aria-hidden
          className="block mt-16"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--c-linha)",
          }}
        />
        <p
          className="mt-5"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "1.6px",
            color: "var(--c-neblina)",
          }}
        >
          {casos.footnote}
        </p>
      </div>
    </section>
  );
}
