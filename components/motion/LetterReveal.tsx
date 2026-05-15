"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

type Props = {
  /** Linhas — cada linha é uma string. Cada linha aparece com slide-up. */
  lines: string[];
  duration?: number;
  /** Stagger entre linhas. */
  stagger?: number;
  delay?: number;
  className?: string;
};

export function LetterReveal({
  lines,
  duration = 0.6,
  stagger = 0.06,
  delay = 0,
  className,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <h1 className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden pb-[0.05em]">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "100%" },
              visible: {
                y: 0,
                transition: { duration, ease: EASE.outExpo },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
