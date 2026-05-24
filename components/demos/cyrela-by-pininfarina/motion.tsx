"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.32, 0.72, 0, 1] as const;
const VIEWPORT = { once: true, margin: "-80px 0px" } as const;

/**
 * Headline revelado linha a linha — cada linha desliza de baixo para cima sob
 * uma máscara (overflow-hidden). Cada linha é ReactNode, então pode conter o
 * ponto em rosso ou qualquer trecho destacado.
 */
export function RevealLines({
  lines,
  className,
  style,
  delay = 0,
  duration = 0.85,
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
          <span key={i} className="block">
            {l}
          </span>
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
