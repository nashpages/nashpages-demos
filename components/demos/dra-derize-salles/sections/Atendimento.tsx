"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { DERIZE_DATA } from "../data";
import { FadeUp } from "../motion";

const EASE_SMOOTH = [0.22, 0.61, 0.36, 1] as const;

export function Atendimento() {
  const { atendimento } = DERIZE_DATA;
  const reduce = useReducedMotion();

  return (
    <section id="atendimento" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* DESKTOP */}
        <div className="hidden lg:grid pt-[120px] pb-[120px] px-[80px] grid-cols-[540px_1fr] gap-x-[80px]">
          <motion.div
            className="relative w-[540px] h-[720px] overflow-hidden"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.6, ease: EASE_SMOOTH }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.08 }}
              whileInView={reduce ? undefined : { scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 2.4, ease: EASE_SMOOTH }}
            >
              <Image
                src={atendimento.photo}
                alt="Dra. Derize Salles"
                fill
                loading="eager"
                quality={100}
                sizes="540px"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

          <div className="flex flex-col pt-2">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-accent)" }}>
                {`§ 05  ·  ${atendimento.eyebrow}`}
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <FadeUp delay={0.1} y={32} duration={0.9}>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "76px", lineHeight: "84px", letterSpacing: "-1.8px", color: "var(--c-tinta)", margin: 0 }}>
                {atendimento.headlineLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[40px]" />
            <FadeUp delay={0.2}>
              <div className="h-[1px] w-[80px]" style={{ backgroundColor: "var(--c-accent)" }} />
            </FadeUp>
            <div className="h-[36px]" />

            <FadeUp delay={0.3}>
              <div className="grid grid-cols-[300px_1fr] gap-x-10">
                <div>
                  <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.8px", color: "var(--c-accent)" }}>
                    {`/  ${atendimento.onde.label}`}
                  </p>
                  <div className="h-3" />
                  <p style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "22px", letterSpacing: "-0.3px", lineHeight: "30px", color: "var(--c-tinta)", margin: 0 }}>
                    {atendimento.onde.title}
                  </p>
                  <div className="h-3" />
                  <div className="space-y-1">
                    {atendimento.onde.lines.map((line, i) => (
                      <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "14px", lineHeight: "22px", color: "var(--c-neblina)", margin: 0 }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.8px", color: "var(--c-accent)" }}>
                    {`/  ${atendimento.como.label}`}
                  </p>
                  <div className="h-3" />
                  <p style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "22px", letterSpacing: "-0.3px", lineHeight: "30px", color: "var(--c-tinta)", margin: 0 }}>
                    {atendimento.como.title}
                  </p>
                  <div className="h-3" />
                  <div className="space-y-1.5">
                    {atendimento.como.etapas.map((e, i) => (
                      <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "13px", lineHeight: "20px", color: "var(--c-neblina)", margin: 0 }}>
                        {e}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            <div className="h-12" />
            <FadeUp delay={0.5}>
              <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "var(--c-neblina)", margin: 0 }}>
                {atendimento.note}
              </p>
            </FadeUp>
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <motion.div
            className="relative w-full h-[460px] overflow-hidden"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: EASE_SMOOTH }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.08 }}
              whileInView={reduce ? undefined : { scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.2, ease: EASE_SMOOTH }}
            >
              <Image src={atendimento.photo} alt="Dra. Derize Salles" fill loading="eager" quality={100} sizes="100vw" className="object-cover object-center" />
            </motion.div>
          </motion.div>
          <div className="px-6 pt-12 pb-16">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>{`§ 05  ·  ${atendimento.eyebrow}`}</p>
            </FadeUp>
            <div className="h-[16px]" />
            <FadeUp delay={0.1}>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "44px", lineHeight: "52px", letterSpacing: "-1px", color: "var(--c-tinta)", margin: 0 }}>
                {atendimento.headlineLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[28px]" />
            <div className="h-[1px] w-[60px]" style={{ backgroundColor: "var(--c-accent)" }} />
            <div className="h-[24px]" />

            <div>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>
                {`/  ${atendimento.onde.label}`}
              </p>
              <div className="h-2" />
              <p style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "18px", letterSpacing: "-0.2px", lineHeight: "26px", color: "var(--c-tinta)" }}>
                {atendimento.onde.title}
              </p>
              <div className="h-2" />
              <div className="space-y-0.5">
                {atendimento.onde.lines.map((line, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "13px", lineHeight: "21px", color: "var(--c-neblina)" }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="h-8" />

            <div>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>
                {`/  ${atendimento.como.label}`}
              </p>
              <div className="h-2" />
              <p style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "18px", letterSpacing: "-0.2px", lineHeight: "26px", color: "var(--c-tinta)" }}>
                {atendimento.como.title}
              </p>
              <div className="h-2" />
              <div className="space-y-1">
                {atendimento.como.etapas.map((e, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "12px", lineHeight: "19px", color: "var(--c-neblina)" }}>
                    {e}
                  </p>
                ))}
              </div>
            </div>

            <div className="h-8" />
            <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "var(--c-neblina)" }}>
              {atendimento.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
