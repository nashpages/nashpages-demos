"use client";

import Image from "next/image";
import { RENATA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Atendimento() {
  const { atendimento } = RENATA_DATA;

  return (
    <section id="atendimento" className="w-full" style={{ backgroundColor: "var(--c-ares)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* DESKTOP */}
        <div className="hidden lg:block px-[80px] pt-[120px] pb-[120px]">
          <FadeUp>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "1.92px",
                color: "var(--c-accent)",
              }}
            >
              {`/  ${atendimento.eyebrow}`}
            </p>
          </FadeUp>
          <div className="h-10" />

          <FadeUp delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: "64px",
                lineHeight: "72px",
                letterSpacing: "-2px",
                color: "var(--c-tinta)",
                margin: 0,
              }}
            >
              {atendimento.headline}
            </h2>
          </FadeUp>
          <div className="h-[60px]" />

          <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
          <div className="h-10" />

          <div className="grid grid-cols-[440px_1fr] gap-x-[60px]">
            <FadeUp delay={0.15}>
              <div className="relative w-[440px] h-[540px] overflow-hidden">
                <Image
                  src={atendimento.photo}
                  alt="Dra. Renata Americo"
                  fill
                  quality={100}
                  sizes="440px"
                  className="object-cover object-center"
                  style={{}}
                />
              </div>
            </FadeUp>

            <div className="grid grid-cols-2 gap-x-10">
              <FadeUp delay={0.2}>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "1.76px",
                    color: "var(--c-accent)",
                  }}
                >
                  {atendimento.ondeLabel}
                </p>
                <div className="h-4" />
                <p
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 700,
                    fontSize: "22px",
                    lineHeight: "30px",
                    letterSpacing: "-0.4px",
                    color: "var(--c-tinta)",
                  }}
                >
                  {atendimento.ondeNome}
                </p>
                <div className="h-2" />
                {atendimento.ondeLines.map((l, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                      fontSize: "17px",
                      lineHeight: "28px",
                      color: "var(--c-neblina)",
                    }}
                  >
                    {l}
                  </p>
                ))}
              </FadeUp>

              <FadeUp delay={0.3}>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "1.76px",
                    color: "var(--c-accent)",
                  }}
                >
                  {atendimento.comoLabel}
                </p>
                <div className="h-4" />
                <Stagger staggerChildren={0.08} className="space-y-3">
                  {atendimento.como.map((s) => (
                    <StaggerItem key={s.num}>
                      <div className="flex items-start gap-3">
                        <p
                          className="shrink-0 mt-[2px]"
                          style={{
                            fontFamily: "var(--font-ibm-plex-mono)",
                            fontWeight: 500,
                            fontSize: "13px",
                            letterSpacing: "1px",
                            color: "var(--c-accent)",
                            minWidth: "24px",
                          }}
                        >
                          {s.num}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 400,
                            fontSize: "17px",
                            lineHeight: "26px",
                            color: "var(--c-tinta)",
                          }}
                        >
                          {s.text}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </FadeUp>
            </div>
          </div>

          <div className="h-[60px]" />
          <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
          <div className="h-8" />

          <FadeUp delay={0.4}>
            <p
              style={{
                fontFamily: "var(--font-lora)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                color: "var(--c-neblina)",
              }}
            >
              {atendimento.note}
            </p>
          </FadeUp>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <div className="relative w-full h-[420px] overflow-hidden">
            <Image
              src={atendimento.photo}
              alt="Dra. Renata Americo"
              fill
              quality={92}
              sizes="100vw"
              className="object-cover object-center"
              style={{ filter: "sepia(0.05) saturate(1.04)" }}
            />
          </div>
          <div className="px-6 pt-12 pb-16">
            <FadeUp>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  color: "var(--c-accent)",
                }}
              >
                {`/  ${atendimento.eyebrow}`}
              </p>
            </FadeUp>
            <div className="h-4" />
            <FadeUp delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: "38px",
                  lineHeight: "44px",
                  letterSpacing: "-1.2px",
                  color: "var(--c-tinta)",
                  margin: 0,
                }}
              >
                {atendimento.headline}
              </h2>
            </FadeUp>
            <div className="h-8" />
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
            <div className="h-6" />

            <FadeUp delay={0.2}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  color: "var(--c-accent)",
                }}
              >
                {atendimento.ondeLabel}
              </p>
              <div className="h-3" />
              <p
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                  letterSpacing: "-0.4px",
                  color: "var(--c-tinta)",
                }}
              >
                {atendimento.ondeNome}
              </p>
              <div className="h-2" />
              {atendimento.ondeLines.map((l, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {l}
                </p>
              ))}
            </FadeUp>

            <div className="h-8" />
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
            <div className="h-6" />

            <FadeUp delay={0.3}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  color: "var(--c-accent)",
                }}
              >
                {atendimento.comoLabel}
              </p>
              <div className="h-3" />
              <Stagger staggerChildren={0.07} className="space-y-3">
                {atendimento.como.map((s) => (
                  <StaggerItem key={s.num}>
                    <div className="flex items-start gap-3">
                      <p
                        className="shrink-0 mt-[2px]"
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono)",
                          fontWeight: 500,
                          fontSize: "12px",
                          letterSpacing: "1px",
                          color: "var(--c-accent)",
                          minWidth: "24px",
                        }}
                      >
                        {s.num}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "15px",
                          lineHeight: "22px",
                          color: "var(--c-tinta)",
                        }}
                      >
                        {s.text}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </FadeUp>

            <div className="h-8" />
            <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
            <div className="h-6" />

            <FadeUp delay={0.4}>
              <p
                style={{
                  fontFamily: "var(--font-lora)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "var(--c-neblina)",
                }}
              >
                {atendimento.note}
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
