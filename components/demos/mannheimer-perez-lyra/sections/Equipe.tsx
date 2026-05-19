"use client";

import Image from "next/image";
import { MPL_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Equipe() {
  const { equipe } = MPL_DATA;

  return (
    <section
      id="equipe"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT col */}
          <div className="lg:col-span-5">
            <FadeUp y={12}>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  color: "var(--c-accent)",
                }}
              >
                {equipe.eyebrow}
              </p>
              <span
                aria-hidden
                className="block mt-3"
                style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent)" }}
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="mt-10"
                style={{
                  fontFamily: "var(--font-source-serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  lineHeight: 1.08,
                  letterSpacing: "clamp(-1px, -0.16vw, -1.8px)",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                {equipe.headline}
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                className="mt-8 max-w-[460px]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  lineHeight: 1.65,
                  color: "var(--c-neblina)",
                }}
              >
                {equipe.body}
              </p>
            </FadeUp>

            <Stagger className="mt-14 flex gap-12 md:gap-14" staggerChildren={0.1}>
              {equipe.stats.map((s) => (
                <StaggerItem key={s.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-source-serif)",
                      fontWeight: 300,
                      fontSize: "clamp(56px, 6.5vw, 88px)",
                      lineHeight: 1,
                      letterSpacing: "clamp(-1.2px, -0.2vw, -2.2px)",
                      color: "var(--c-accent)",
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "1.6px",
                      color: "var(--c-neblina)",
                    }}
                  >
                    {s.label}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp delay={0.3}>
              <p
                className="mt-20"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.6px",
                  color: "var(--c-neblina)",
                }}
              >
                {equipe.signature}
              </p>
            </FadeUp>
          </div>

          {/* RIGHT col — grid 2x2 das fotos */}
          <Stagger
            className="lg:col-span-7 grid grid-cols-2 gap-x-5 gap-y-12 lg:gap-x-5 lg:gap-y-14"
            staggerChildren={0.1}
          >
            {equipe.socios.map((s) => (
              <StaggerItem key={s.surname}>
                <div className="relative w-full aspect-[7/9] overflow-hidden">
                  <Image
                    src={s.photo}
                    alt={`${s.name} ${s.surname}`}
                    fill
                    loading="eager"
                    quality={92}
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--font-source-serif)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(16px, 1.6vw, 22px)",
                    lineHeight: 1.25,
                    color: "var(--c-tinta)",
                  }}
                >
                  {s.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-source-serif)",
                    fontWeight: 500,
                    fontSize: "clamp(16px, 1.6vw, 22px)",
                    lineHeight: 1.25,
                    letterSpacing: "-0.2px",
                    color: "var(--c-tinta)",
                  }}
                >
                  {s.surname}
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "9px",
                    letterSpacing: "1.5px",
                    color: "var(--c-accent)",
                  }}
                >
                  {s.role}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
