"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BARBARA_DATA } from "../data";
import { FadeUp, CountUp, Stagger, StaggerItem } from "../motion";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Reconhecimento() {
  const r = BARBARA_DATA.reconhecimento;
  const reduce = useReducedMotion();
  return (
    <section className="bg-[var(--c-rose)] relative overflow-hidden">
      {/* Desktop */}
      <div className="hidden lg:flex relative min-h-[900px]">
        <motion.div
          className="relative flex-[0_0_42%] self-stretch min-h-[900px] overflow-hidden"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.06 }}
            whileInView={reduce ? undefined : { scale: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 1.8, ease: EASE }}
          >
            <Image
              src={r.photo}
              alt="Dra. Bárbara Pimenta"
              fill
              quality={100}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
        <div className="flex-1 px-16 lg:pl-20 py-20 flex flex-col justify-center max-w-[760px]">
          <ReconContent />
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <motion.div
          className="relative w-full h-[380px] overflow-hidden"
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
              src={r.photo}
              alt="Dra. Bárbara Pimenta"
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
        <div className="px-6 py-12">
          <ReconContent mobile />
        </div>
      </div>
    </section>
  );
}

function ReconContent({ mobile = false }: { mobile?: boolean }) {
  const r = BARBARA_DATA.reconhecimento;
  return (
    <>
      <FadeUp>
        <p
          className={`tracking-[0.16em] font-medium text-[var(--c-grafite)] ${
            mobile ? "text-[10px] mb-7" : "text-[11px] mb-12"
          }`}
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          /  {r.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p
          className={`font-normal text-[var(--c-nude)] tracking-[-0.03em] leading-[1] ${
            mobile ? "text-[120px]" : "text-[180px]"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <CountUp to={parseInt(r.stat, 10)} duration={1.8} />
        </p>
      </FadeUp>
      <FadeUp delay={0.25}>
        <p
          className={`italic text-[var(--c-tinta)] ${
            mobile ? "text-[22px] mt-2" : "text-[28px] mt-5"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {r.statLabel}
        </p>
      </FadeUp>
      <FadeUp delay={0.4}>
        <p className={`text-[var(--c-nude)] tracking-[0.2em] ${mobile ? "text-[18px] mt-5" : "text-[22px] mt-8"}`}>
          ★ ★ ★ ★ ★
        </p>
      </FadeUp>
      <Stagger delay={0.5} staggerChildren={0.12} className={`flex gap-3 ${mobile ? "mt-6" : "mt-9"}`}>
        {r.badges.map((badge) => (
          <StaggerItem key={badge}>
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full border border-[var(--c-nude)] text-[var(--c-nude)] tracking-[0.18em] font-medium hover:bg-[var(--c-nude)] hover:text-[var(--c-cream)] transition-colors duration-500 ${
                mobile ? "text-[9px]" : "text-[10px]"
              }`}
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {badge}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
      <FadeUp delay={0.75}>
        <div className={`h-px w-[40px] lg:w-[60px] bg-[var(--c-nude)] ${mobile ? "mt-8" : "mt-12"}`} />
      </FadeUp>
      <FadeUp delay={0.85}>
        <p
          className={`italic text-[var(--c-tinta)] leading-[1.4] ${
            mobile ? "text-[18px] mt-6" : "text-[24px] mt-12"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {r.quote}
        </p>
        <p
          className={`tracking-[0.16em] font-medium text-[var(--c-grafite)] ${
            mobile ? "text-[10px] mt-3" : "text-[10px] mt-4"
          }`}
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {r.attribution}
        </p>
      </FadeUp>
      <FadeUp delay={1.0}>
        <a
          href={r.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex flex-col gap-2 ${mobile ? "mt-7" : "mt-10"}`}
        >
          <span
            className={`tracking-[0.16em] font-medium text-[var(--c-nude)] transition-transform duration-300 group-hover:translate-x-1 ${
              mobile ? "text-[11px]" : "text-[12px]"
            }`}
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {r.cta.label}  →
          </span>
          <span className="h-px w-[240px] lg:w-[300px] bg-[var(--c-nude)] origin-left transition-transform duration-500 group-hover:scale-x-110" />
        </a>
      </FadeUp>
    </>
  );
}
