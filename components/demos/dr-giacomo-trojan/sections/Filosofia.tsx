"use client";

import Image from "next/image";
import { TROJAN_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem, SignatureDual } from "../motion";

export function Filosofia() {
  const { filosofia } = TROJAN_DATA;

  return (
    <section
      id="sobre"
      data-snap-section
      className="relative w-full"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Photo LEFT (desktop) / top (mobile) */}
        <div className="relative w-full lg:w-[540px] h-[420px] lg:h-[920px] flex-shrink-0">
          <Image
            src={filosofia.photo}
            alt="Dr. Giácomo Trojan com paciente"
            fill
            loading="eager"
            quality={92}
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="hidden lg:block absolute inset-y-0 right-0 pointer-events-none"
            style={{
              width: "80px",
              background:
                "linear-gradient(to left, rgba(250,250,251,0.35) 0%, rgba(250,250,251,0) 100%)",
            }}
          />
        </div>

        {/* Text RIGHT */}
        <div className="flex-1 px-6 lg:px-[80px] py-16 lg:py-24">
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
              {filosofia.eyebrow}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="mt-8 lg:mt-10"
              style={{
                fontFamily: "var(--font-newsreader)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 1.15,
                letterSpacing: "clamp(-0.5px, -0.08vw, -1px)",
                color: "var(--c-tinta)",
                margin: 0,
              }}
            >
              {filosofia.quote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p
              className="mt-8"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.8px",
                color: "var(--c-cinabrio)",
              }}
            >
              {filosofia.attribution}
            </p>
            <div className="mt-4">
              <SignatureDual widthPx={60} />
            </div>
          </FadeUp>

          <FadeUp delay={0.35}>
            <p
              className="mt-12"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "1.6px",
                color: "var(--c-neblina)",
              }}
            >
              {filosofia.bodyEyebrow}
            </p>
            <div className="mt-6 space-y-5 max-w-[760px]">
              {filosofia.body.map((p) => (
                <p
                  key={p}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "clamp(13px, 1.05vw, 15px)",
                    lineHeight: 1.65,
                    color: "var(--c-tinta)",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeUp>

          <Stagger
            className="mt-14 lg:mt-16 grid grid-cols-3 gap-6 lg:gap-12 max-w-[760px]"
            staggerChildren={0.12}
          >
            {filosofia.stats.map((s) => (
              <StaggerItem key={s.num}>
                <p
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(40px, 4.5vw, 56px)",
                    lineHeight: 1,
                    letterSpacing: "-1.5px",
                    color: "var(--c-tinta)",
                    margin: 0,
                  }}
                >
                  {s.num}
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "9px",
                    letterSpacing: "1.4px",
                    color: "var(--c-neblina)",
                    lineHeight: 1.4,
                  }}
                >
                  {s.l1}
                  <br />
                  {s.l2}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
