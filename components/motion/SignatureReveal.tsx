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
 * Reveal left-to-right via overflow-hidden + translateX no inner span.
 * Vibe assinatura manuscrita / tinta correndo da esquerda pra direita.
 *
 * Por que NÃO clip-path: em iOS Safari (especialmente iPhones), motion-driven
 * clip-path inset() pode falhar silenciosamente. Esta versão usa apenas
 * overflow-hidden + transform translateX no inner — suporte universal.
 *
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
    <span
      className={`inline-block overflow-hidden align-baseline ${className ?? ""}`}
      style={style}
    >
      <motion.span
        className="inline-block whitespace-nowrap"
        initial={{ x: "-101%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration,
          delay,
          ease: EASE.outExpo,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
