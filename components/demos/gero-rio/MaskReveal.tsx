"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "./motion";

/**
 * Revela o conteúdo por uma máscara vertical (clip-path inset) que abre de baixo
 * para cima. NÃO escala a imagem — apenas revela — preservando 100% da qualidade.
 */
export function MaskReveal({
  children,
  className,
  delay = 0,
  duration = 1.1,
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
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
