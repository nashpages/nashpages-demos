"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const; // out-expo, fluido
const VIEWPORT = { once: true, margin: "-80px 0px" } as const;

/** Sobe + fade ao entrar na viewport. */
export function FadeUp({
  children,
  className,
  style,
  delay = 0,
  y = 26,
  duration = 0.9,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} style={style}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Headline linha a linha, cada uma subindo sob máscara (overflow-hidden) — efeito SplitText. */
export function RevealLines({
  lines,
  className,
  style,
  delay = 0,
  duration = 0.9,
  stagger = 0.09,
}: {
  lines: ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} style={style}>
        {lines.map((l, i) => (
          <span key={i} className="block">{l}</span>
        ))}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block will-change-transform"
            variants={{
              hidden: { y: "112%" },
              visible: { y: 0, transition: { duration, ease: EASE } },
            }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
