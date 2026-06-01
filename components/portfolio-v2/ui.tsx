"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FONT_VAR, type ProjectLogo } from "./data";

/** Logo do projeto: nome grande + sub-texto pequeno uppercase, preto puro. */
export function ProjectLogo({
  logo,
  align = "left",
}: {
  logo: ProjectLogo;
  align?: "left" | "right";
}) {
  // tamanho responsivo: ~60% no mobile (390px) → 100% (logo.size) no desktop (≥~740px)
  const base = Math.round(logo.size * 0.6);
  const vw = (logo.size / 7.4).toFixed(2);
  return (
    <div
      className={`transition-opacity duration-300 hover:opacity-80 ${
        align === "right" ? "text-left md:text-right" : "text-left"
      }`}
      style={{
        color: "#000",
        fontFamily: FONT_VAR[logo.font],
        fontSize: `clamp(${base}px, ${vw}vw, ${logo.size}px)`,
      }}
    >
      <div
        style={{
          fontWeight: logo.weight ?? 500,
          fontSize: "1em",
          letterSpacing: logo.letterSpacing,
          lineHeight: 1,
        }}
      >
        {logo.main}
      </div>
      {logo.sub && (
        <div
          style={{
            fontWeight: 500,
            fontSize: "max(11px, 0.18em)",
            letterSpacing: "0.16em",
            marginTop: "0.14em",
          }}
        >
          {logo.sub}
        </div>
      )}
    </div>
  );
}

/** Imagem com scroll-parallax: desloca-se em Y dentro de um frame recortado. */
export function ParallaxImage({
  src,
  alt,
  grayscale = false,
  range = 34,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  grayscale?: boolean;
  range?: number;
  priority?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [range, -range]);
  const imgProps = priority ? { priority: true as const } : { loading: "eager" as const };
  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[12%] h-[124%] will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 92vw, 680px"
          className={`object-cover ${grayscale ? "grayscale" : ""}`}
          {...imgProps}
        />
      </motion.div>
    </div>
  );
}

/** Eyebrow mono (meta do projeto). */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={className}
      style={{
        fontFamily: "var(--font-geist-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        color: "#6B6660",
        textTransform: "uppercase",
      }}
    >
      {children}
    </div>
  );
}

/** Nome do projeto (legenda, Geist Medium preto). */
export function ProjectName({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-geist)",
        fontWeight: 500,
        fontSize: 20,
        letterSpacing: "-0.02em",
        color: "#0E0B0B",
        marginTop: 6,
      }}
    >
      {children}
    </div>
  );
}
