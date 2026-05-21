"use client";

import Image from "next/image";
import { FadeUp, Stagger, StaggerItem } from "../motion";
import { FASANO_DATA } from "../data";

const e = FASANO_DATA.experiencias;

export function Experiencias() {
  return (
    <section
      id="experiencias"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-areia)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-24 lg:pt-[110px] pb-24 lg:pb-[80px]">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[760px_1fr] lg:gap-16 items-start">
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
              {e.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontWeight: 500,
                fontSize: "clamp(34px, 4.4vw, 56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.5px",
                color: "var(--c-tinta)",
                margin: "20px 0 0",
              }}
            >
              {e.headline}
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
              {e.body}
            </p>
          </FadeUp>
        </div>

        {/* Grid 4×2 de experiências */}
        <Stagger
          staggerChildren={0.08}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-7 mt-14 lg:mt-[80px]"
        >
          {e.cards.map((c) => (
            <StaggerItem key={c.name}>
              <div className="group relative overflow-hidden aspect-[289/380]">
                <Image
                  src={c.photo}
                  alt={c.name}
                  fill
                  loading="eager"
                  quality={95}
                  sizes="(min-width: 1024px) 289px, 50vw"
                  className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,18,14,0.62) 0%, rgba(20,18,14,0) 52%)",
                  }}
                />
                <span
                  className="absolute left-5 bottom-4"
                  style={{
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontWeight: 500,
                    fontSize: "21px",
                    color: "var(--c-areia)",
                    textShadow: "0 1px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  {c.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
