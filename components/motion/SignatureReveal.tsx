"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

type Props = {
  children: ReactNode;
  /** Duração do reveal (s). Default 1.0s — vibe tinta correndo. */
  duration?: number;
  /** Delay antes de começar (s). */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Reveal left-to-right via clip-path — vibe assinatura manuscrita / tinta correndo.
 * Conteúdo aparece como se uma caneta estivesse escrevendo da esquerda pra direita.
 * Respeita prefers-reduced-motion (mostra direto).
 */
export function SignatureReveal({
  children,
  duration = 1.0,
  delay = 0,
  className,
  style,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span className={className} style={style}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      style={style}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: EASE.outExpo,
      }}
    >
      {children}
    </motion.span>
  );
}
