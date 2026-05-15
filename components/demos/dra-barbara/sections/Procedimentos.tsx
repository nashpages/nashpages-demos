"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BARBARA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Procedimentos() {
  const p = BARBARA_DATA.procedimentos;
  const reduce = useReducedMotion();
  return (
    <section className="bg-[var(--c-rose)] py-20 px-6 lg:py-[100px] lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <FadeUp>
          <p
            className="text-[10px] lg:text-[11px] tracking-[0.16em] font-medium text-[var(--c-grafite)] mb-6 lg:mb-10"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {p.eyebrow}
          </p>
        </FadeUp>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[560px_1fr] gap-20 items-start">
          <div>
            <FadeUp delay={0.1}>
              <h2
                className="font-normal text-[var(--c-tinta)] leading-[1] tracking-[-0.02em] text-[68px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {p.headlineLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </FadeUp>
            <FadeUp delay={0.22}>
              <div className="mt-10 h-px w-[80px] bg-[var(--c-nude)]" />
            </FadeUp>
            <FadeUp delay={0.32}>
              <p className="mt-10 text-[var(--c-grafite)] text-[17px] leading-[1.65] max-w-[480px]">
                {p.body}
              </p>
            </FadeUp>
          </div>
          <motion.div
            className="relative w-full aspect-[4/3] max-h-[480px] overflow-hidden"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.06 }}
              whileInView={reduce ? undefined : { scale: 1 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.15 }}
            >
              <Image
                src={p.photo}
                alt="Procedimento dermatológico"
                fill
                quality={90}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <FadeUp delay={0.1}>
            <h2
              className="font-normal text-[var(--c-tinta)] leading-[1.05] tracking-[-0.02em] text-[40px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {p.headlineLines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div className="mt-6 h-px w-[60px] bg-[var(--c-nude)]" />
          </FadeUp>
          <FadeUp delay={0.32}>
            <p className="mt-6 text-[var(--c-grafite)] text-[14px] leading-[1.65]">
              {p.body}
            </p>
          </FadeUp>
          <motion.div
            className="relative w-full aspect-[4/3] mt-10 overflow-hidden"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 1, ease: EASE }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.06 }}
              whileInView={reduce ? undefined : { scale: 1 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              <Image
                src={p.photo}
                alt="Procedimento dermatológico"
                fill
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Specs strip */}
        <div className="mt-12 lg:mt-16 pt-7 border-t border-[var(--c-linha)]">
          <Stagger staggerChildren={0.12} className="hidden lg:flex justify-between gap-12">
            {p.specs.map((s) => (
              <StaggerItem key={s.num}>
                <div className="flex flex-col gap-3">
                  <p
                    className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-tinta)]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {s.num}   {s.label}
                  </p>
                  <p
                    className="text-[11px] tracking-[0.08em] text-[var(--c-grafite)]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {s.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Stagger staggerChildren={0.12} className="lg:hidden flex flex-col divide-y divide-[var(--c-linha)]">
            {p.specs.map((s, i) => (
              <StaggerItem key={s.num}>
                <div className={`flex flex-col gap-2 ${i > 0 ? "pt-5 mt-5" : ""}`}>
                  <p
                    className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-tinta)]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {s.num}   {s.label}
                  </p>
                  <p
                    className="text-[11px] tracking-[0.08em] text-[var(--c-grafite)]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {s.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
