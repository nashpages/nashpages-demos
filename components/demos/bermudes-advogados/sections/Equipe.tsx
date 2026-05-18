"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BERMUDES_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Equipe() {
  const { equipe } = BERMUDES_DATA;
  const reduce = useReducedMotion();

  return (
    <section
      id="equipe"
      data-snap-section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-tinta-deep)" }}
    >
      <div className="absolute inset-0">
        <Image
          src={equipe.photo}
          alt=""
          fill
          quality={92}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(30,47,58,0.84)" }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[120px] pb-24 lg:pb-[120px]">
        <FadeUp>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--c-papel)",
            }}
          >
            {`§ 07  ·  ${equipe.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(52px, 6.2vw, 88px)",
              lineHeight: "1.1",
              letterSpacing: "clamp(-1.2px, -0.13vw, -2px)",
              color: "var(--c-papel)",
              margin: 0,
            }}
          >
            <span className="block">{equipe.headlineLines[0]}</span>
            <span className="block">{equipe.headlineLines[1]}</span>
          </h2>
        </FadeUp>
        <div className="h-10 lg:h-14" />
        <div className="h-px w-20" style={{ backgroundColor: "var(--c-papel)", opacity: 0.7 }} />
        <div className="h-6 lg:h-8" />

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-[80px] items-start">
          <FadeUp delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(18px, 1.7vw, 24px)",
                lineHeight: "1.5",
                letterSpacing: "-0.3px",
                color: "var(--c-papel)",
                maxWidth: "680px",
                margin: 0,
              }}
            >
              {equipe.manifesto}
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-papel)",
                }}
              >
                {`/  ${equipe.composicaoLabel}`}
              </p>
              <div className="h-4" />
              <div className="space-y-3">
                {equipe.composicao.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-5">
                    <span
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontWeight: 400,
                        fontSize: "36px",
                        lineHeight: 1,
                        letterSpacing: "-1px",
                        color: "var(--c-papel)",
                        minWidth: "70px",
                      }}
                    >
                      {s.val}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono)",
                        fontWeight: 500,
                        fontSize: "10px",
                        letterSpacing: "1.5px",
                        color: "var(--c-papel)",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="h-12 lg:h-[80px]" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-papel)", opacity: 0.3 }} />
        <div className="h-8 lg:h-10" />

        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "1.8px",
            color: "var(--c-papel)",
          }}
        >
          {`/  ${equipe.partnersLabel}`}
        </p>

        <div className="h-6 lg:h-8" />

        <Stagger
          delay={0.1}
          staggerChildren={0.05}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3"
        >
          {equipe.partners.map((name) => (
            <StaggerItem key={name}>
              <p
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontWeight: 400,
                  fontSize: "clamp(17px, 1.4vw, 20px)",
                  lineHeight: "28px",
                  letterSpacing: "-0.2px",
                  color: "var(--c-papel)",
                  margin: 0,
                }}
              >
                {name}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="h-12 lg:h-16" />
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--c-papel)",
            opacity: 0.85,
            margin: 0,
          }}
        >
          {equipe.footnote}
        </p>
      </div>
    </section>
  );
}
