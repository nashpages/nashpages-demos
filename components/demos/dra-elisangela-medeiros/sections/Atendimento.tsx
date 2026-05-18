"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ELISANGELA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

const EASE_SMOOTH = [0.22, 0.61, 0.36, 1] as const;

export function Atendimento() {
  const { atendimento } = ELISANGELA_DATA;
  const reduce = useReducedMotion();

  return (
    <section id="atendimento" className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* DESKTOP */}
        <div className="hidden lg:grid pt-[120px] pb-[120px] px-[80px] grid-cols-[480px_1fr] gap-x-[80px]">
          <motion.div
            className="relative w-[480px] h-[720px] overflow-hidden"
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
                alt="Dra. Elisangela Medeiros"
                fill
                loading="eager"
                quality={100}
                sizes="480px"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

          <div className="flex flex-col pt-4">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-accent)" }}>
                {`§ 05  ·  ${atendimento.eyebrow}`}
              </p>
            </FadeUp>
            <div className="h-[36px]" />
            <FadeUp delay={0.1} y={32} duration={0.9}>
              <h2 style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "72px", lineHeight: "1.12", letterSpacing: "-1.6px", color: "var(--c-tinta)", margin: 0 }}>
                {atendimento.headlineLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[36px]" />
            <motion.div
              className="h-[1px] w-[80px]"
              style={{ backgroundColor: "var(--c-accent)", transformOrigin: "left center" }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={reduce ? undefined : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASE_SMOOTH, delay: 0.3 }}
            />
            <div className="h-[28px]" />
            <FadeUp delay={0.3}>
              <p style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "var(--c-neblina)", maxWidth: "640px", margin: 0 }}>
                {atendimento.subline}
              </p>
            </FadeUp>
            <div className="h-[40px]" />

            <Stagger delay={0.35} staggerChildren={0.13}>
              {atendimento.enderecos.map((e) => (
                <StaggerItem key={e.num}>
                  <motion.div
                    className="py-6 grid grid-cols-[60px_1fr] gap-x-3 items-baseline"
                    style={{ borderTop: "1px solid var(--c-linha)" }}
                  >
                    <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>
                      {e.num}
                    </p>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-cormorant-garamond)", fontWeight: 400, fontSize: "28px", letterSpacing: "-0.4px", lineHeight: "36px", color: "var(--c-tinta)", margin: 0 }}>
                        {e.name}
                      </h3>
                      <div className="h-2" />
                      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "14px", lineHeight: "22px", color: "var(--c-neblina)", margin: 0 }}>
                        {e.addr}
                      </p>
                      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "14px", lineHeight: "22px", color: "var(--c-neblina)", margin: 0 }}>
                        {e.cep}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="h-6" />
            <FadeUp delay={0.7}>
              <p style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "var(--c-neblina)", margin: 0 }}>
                {atendimento.footnote}
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
              <Image src={atendimento.photo} alt="Dra. Elisangela Medeiros" fill loading="eager" quality={100} sizes="100vw" className="object-cover object-center" />
            </motion.div>
          </motion.div>
          <div className="px-6 pt-12 pb-16">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>{`§ 05  ·  ${atendimento.eyebrow}`}</p>
            </FadeUp>
            <div className="h-[16px]" />
            <FadeUp delay={0.1}>
              <h2 style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "42px", lineHeight: "52px", letterSpacing: "-1px", color: "var(--c-tinta)", margin: 0 }}>
                {atendimento.headlineLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <div className="h-[24px]" />
            <div className="h-[1px] w-[60px]" style={{ backgroundColor: "var(--c-accent)" }} />
            <div className="h-[24px]" />
            <FadeUp delay={0.3}>
              <p style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "15px", lineHeight: "24px", color: "var(--c-neblina)" }}>
                {atendimento.subline}
              </p>
            </FadeUp>
            <div className="h-[28px]" />
            <div className="space-y-6">
              {atendimento.enderecos.map((e) => (
                <div key={e.num} className="pt-4" style={{ borderTop: "1px solid var(--c-linha)" }}>
                  <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>
                    {e.num}
                  </p>
                  <div className="h-2" />
                  <h3 style={{ fontFamily: "var(--font-cormorant-garamond)", fontWeight: 400, fontSize: "22px", letterSpacing: "-0.3px", lineHeight: "30px", color: "var(--c-tinta)" }}>
                    {e.name}
                  </h3>
                  <div className="h-2" />
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "13px", lineHeight: "21px", color: "var(--c-neblina)" }}>
                    {e.addr}
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "13px", lineHeight: "21px", color: "var(--c-neblina)" }}>
                    {e.cep}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-6" />
            <p style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "var(--c-neblina)" }}>
              {atendimento.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
