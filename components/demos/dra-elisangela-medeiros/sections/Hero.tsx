"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ELISANGELA_DATA } from "../data";
import { FadeUp } from "../motion";

const EASE_SMOOTH = [0.22, 0.61, 0.36, 1] as const;

// Word-by-word reveal pra headline italic — premium touch
function WordReveal({
  text,
  delay = 0,
  className = "",
  style,
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <span className={className} style={style}>
        {text}
      </span>
    );
  }

  return (
    <span className={className} style={style}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: EASE_SMOOTH,
              delay: delay + i * 0.12,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const { hero } = ELISANGELA_DATA;
  const reduce = useReducedMotion();
  const photoRef = useRef<HTMLDivElement>(null);

  // Parallax sutil — foto move levemente conforme scroll
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="top" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-papel)" }}>
      {/* DESKTOP — padrão Derize: foto ocupa altura total no canto direito + texto sobre container 1440 */}
      <div className="hidden lg:block relative w-full h-[760px]">
        {/* FOTO — right-aligned, altura total, width responsivo (centrada em 620/1440 = 43vw) */}
        <motion.div
          ref={photoRef}
          className="absolute right-0 top-0 bottom-0 overflow-hidden"
          style={{ width: "clamp(500px, 43vw, 620px)" }}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: EASE_SMOOTH, delay: 0.15 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.08 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 2.6, ease: EASE_SMOOTH }}
            style={reduce ? undefined : { y: photoY }}
          >
            <Image
              src={hero.photo}
              alt="Dra. Elisangela Medeiros"
              fill
              priority
              quality={100}
              sizes="(min-width: 1024px) clamp(500px, 43vw, 620px), 100vw"
              className="object-cover object-top"
            />
          </motion.div>
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(244,244,238,0.10) 0%, rgba(244,244,238,0) 12%)" }}
          />
        </motion.div>

        {/* CONTAINER 1440 — textos ancorados em left:80 */}
        <div className="relative h-full max-w-[1440px] mx-auto">
          {/* Eyebrow — top 232 (Figma) */}
          <div className="absolute left-[80px] top-[232px]">
            <FadeUp delay={0.3} duration={0.8}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "var(--c-accent)",
                }}
              >
                {`§ 01  ·  ${hero.eyebrow}`}
              </p>
            </FadeUp>
          </div>

          {/* Headline — top 270, 72px Cormorant Italic / leading 82 (Figma) */}
          <div className="absolute left-[80px] top-[270px]">
            <h1
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "72px",
                lineHeight: "82px",
                letterSpacing: "-1.5px",
                color: "var(--c-tinta)",
                margin: 0,
              }}
            >
              <span className="block whitespace-nowrap">
                <WordReveal text={hero.headlineLines[0]} delay={0.5} />
              </span>
              <span className="block whitespace-nowrap">
                <WordReveal text={hero.headlineLines[1]} delay={0.85} />
              </span>
            </h1>
          </div>

          {/* Divider verde-jade — top 470 */}
          <motion.div
            className="absolute left-[80px] top-[470px]"
            style={{ height: "1px", width: "80px", backgroundColor: "var(--c-accent)", transformOrigin: "left center" }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={reduce ? undefined : { scaleX: 1 }}
            transition={{ duration: 1, ease: EASE_SMOOTH, delay: 1.4 }}
          />

          {/* Subline — top 500, 16/26 Inter Light (Figma) — limitado pra não invadir foto */}
          <div
            className="absolute left-[80px] top-[500px]"
            style={{ right: "calc(clamp(500px, 43vw, 620px) + 48px - max(0px, (100vw - 1440px) / 2))" }}
          >
            <FadeUp delay={1.55} y={20} duration={0.9}>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "16px", lineHeight: "26px", color: "var(--c-neblina)", maxWidth: "560px", margin: 0 }}>
                {hero.subline}
              </p>
            </FadeUp>
          </div>

          {/* Linha hair — top 600 (acima da marginalia, com margem 48px da foto pra não sobrepor) */}
          <div
            className="absolute left-[80px] top-[600px]"
            style={{ right: "calc(clamp(500px, 43vw, 620px) + 48px - max(0px, (100vw - 1440px) / 2))", height: "1px", backgroundColor: "var(--c-linha)" }}
          />

          {/* Marginalia — top 620 (Figma) */}
          <FadeUp delay={1.75} duration={0.8}>
            <p
              className="absolute whitespace-nowrap"
              style={{ left: "80px", top: "620px", fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.8px", color: "var(--c-neblina)" }}
            >
              {hero.marginalia}
            </p>
          </FadeUp>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden relative w-full" style={{ backgroundColor: "var(--c-papel)" }}>
        <motion.div className="relative w-full h-[500px] overflow-hidden" initial={reduce ? false : { opacity: 0, y: 16 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: EASE_SMOOTH, delay: 0.1 }}>
          <motion.div className="absolute inset-0" initial={reduce ? false : { scale: 1.08 }} animate={reduce ? undefined : { scale: 1 }} transition={{ duration: 2.4, ease: EASE_SMOOTH }}>
            <Image src={hero.photo} alt="Dra. Elisangela Medeiros" fill priority quality={100} sizes="100vw" className="object-cover object-top" />
          </motion.div>
        </motion.div>

        <div className="px-6 pt-10 pb-12">
          <FadeUp delay={0.2}>
            <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>{`§ 01  ·  ${hero.eyebrow}`}</p>
          </FadeUp>
          <div className="h-[16px]" />
          <h1 style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 400, fontSize: "44px", lineHeight: "1.14", letterSpacing: "-1px", color: "var(--c-tinta)", margin: 0 }}>
            <span className="block">
              <WordReveal text={hero.headlineLines[0]} delay={0.4} />
            </span>
            <span className="block">
              <WordReveal text={hero.headlineLines[1]} delay={0.7} />
            </span>
          </h1>
          <div className="h-[24px]" />
          <motion.div
            style={{ height: "1px", width: "60px", backgroundColor: "var(--c-accent)", transformOrigin: "left center" }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={reduce ? undefined : { scaleX: 1 }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 1.1 }}
          />
          <div className="h-[20px]" />
          <FadeUp delay={1.3}>
            <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "15px", lineHeight: "24px", color: "var(--c-neblina)" }}>{hero.subline}</p>
          </FadeUp>
          <div className="h-[28px]" />
          <FadeUp delay={1.5}>
            <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "9px", letterSpacing: "1.5px", color: "var(--c-neblina)" }}>
              {hero.marginalia}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
