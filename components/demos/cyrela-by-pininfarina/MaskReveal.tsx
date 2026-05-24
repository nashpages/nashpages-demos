"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "./motion";

/**
 * Revela o conteúdo (imagem) por uma máscara vertical que abre de cima para
 * baixo (clip-path inset). NÃO escala a imagem — apenas revela — preservando
 * 100% da qualidade. prefers-reduced-motion → sem máscara.
 */
export function MaskReveal({
  children,
  className,
  delay = 0,
  duration = 1.05,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
