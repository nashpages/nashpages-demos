"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BARBARA_DATA } from "../data";
import { FadeUp, WordReveal } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const { hero } = BARBARA_DATA;
  const reduce = useReducedMotion();
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #BE9989 0%, #EBD9D1 60%, #F9F4EF 100%)",
      }}
    >
      {/* Desktop */}
      <div className="hidden lg:flex relative min-h-[720px] items-center">
        <div className="flex-1 px-16 lg:pl-[64px] lg:pr-12 py-24">
          <FadeUp delay={0.1}>
            <p
              className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-cream)] mb-6"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              /  {hero.eyebrow}
            </p>
          </FadeUp>
          <WordReveal
            lines={hero.headlineLines}
            delay={0.25}
            stagger={0.09}
            className="font-normal text-[var(--c-cream)] leading-[1.02] tracking-[-0.02em] text-[88px] xl:text-[108px]"
            lineClassName=""
          />
          <FadeUp delay={0.85}>
            <p className="mt-8 text-[var(--c-cream)]/90 text-[17px] leading-relaxed max-w-md font-[var(--font-inter)]">
              {hero.subline}
            </p>
          </FadeUp>
          <FadeUp delay={1.0}>
            <div className="mt-12 flex gap-12">
              <CtaUnderline href={hero.primaryCta.href} label={hero.primaryCta.label} opacity={1} />
              <CtaUnderline href={hero.secondaryCta.href} label={hero.secondaryCta.label} opacity={0.7} />
            </div>
          </FadeUp>
        </div>
        <motion.div
          className="relative flex-[0_0_34%] self-stretch min-h-[720px] overflow-hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.08 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 2, ease: EASE }}
          >
            <Image
              src={hero.photo}
              alt="Dra. Bárbara Pimenta"
              fill
              priority
              quality={90}
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative">
        <motion.div
          className="relative w-full h-[440px] overflow-hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.08 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
          >
            <Image
              src={hero.photo}
              alt="Dra. Bárbara Pimenta"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
        <div className="px-6 pt-10 pb-16">
          <FadeUp delay={0.2}>
            <p
              className="text-[10px] tracking-[0.16em] font-medium text-[var(--c-cream)] mb-5"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              /  {hero.eyebrow}
            </p>
          </FadeUp>
          <WordReveal
            lines={hero.headlineLines}
            delay={0.35}
            stagger={0.07}
            className="font-normal text-[var(--c-cream)] leading-[1.05] tracking-[-0.02em] text-[40px]"
          />
          <FadeUp delay={0.8}>
            <p className="mt-5 text-[var(--c-cream)]/90 text-[14px] leading-relaxed font-[var(--font-inter)]">
              {hero.subline}
            </p>
          </FadeUp>
          <FadeUp delay={0.95}>
            <div className="mt-8 flex flex-col gap-4">
              <CtaUnderline href={hero.primaryCta.href} label={hero.primaryCta.label} opacity={1} />
              <CtaUnderline href={hero.secondaryCta.href} label={hero.secondaryCta.label} opacity={0.7} />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function CtaUnderline({
  href,
  label,
  opacity,
}: {
  href: string;
  label: string;
  opacity: number;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex flex-col gap-2 group"
      style={{ opacity }}
    >
      <span
        className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-cream)] transition-transform duration-300 group-hover:translate-x-1"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        {label}  →
      </span>
      <span className="h-px w-full bg-[var(--c-cream)] origin-left transition-transform duration-500 group-hover:scale-x-110" />
    </a>
  );
}
