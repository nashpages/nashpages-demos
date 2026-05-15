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
 * Padrão variants: o OUTER tem whileInView (e está sempre visível, então
 * o IntersectionObserver detecta entrada corretamente). O INNER reage via
 * variants cascade — mesmo translated -101% (off-screen), anima corretamente.
 *
 * Por que NÃO clip-path: em iOS Safari, motion-driven clip-path inset() pode
 * falhar silenciosamente. Por que NÃO whileInView direto no inner: o inner
 * translated -101% fica off-screen, e o IntersectionObserver nunca dispara.
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
    <motion.span
      className={`inline-block overflow-hidden align-baseline ${className ?? ""}`}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.span
        className="inline-block whitespace-nowrap"
        variants={{
          hidden: { x: "-101%" },
          visible: { x: 0 },
        }}
        transition={{
          duration,
          delay,
          ease: EASE.outExpo,
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
