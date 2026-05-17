"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

// Easing oscilante "back.out(1.2)" emulado em cubic-bezier.
// GSAP back.out(1.2) ≈ cubic-bezier(0.34, 1.32, 0.64, 1) — micro-overshoot suave.
// Pra dermato evitamos exagero (back default GSAP é 1.7).
export const EASE_BACK = [0.34, 1.32, 0.64, 1] as const;
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function FadeUp({
  children,
  delay = 0,
  y = 24,
  duration = 0.5,
  oscillate = true,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  oscillate?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: oscillate ? EASE_BACK : EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  staggerChildren = 0.08,
  delayChildren = 0,
  className,
}: {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : staggerChildren,
        delayChildren: reduced ? 0 : delayChildren,
      },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 24,
  duration = 0.5,
  oscillate = true,
  className,
}: {
  children: ReactNode;
  y?: number;
  duration?: number;
  oscillate?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    return <div className={className}>{children}</div>;
  }
  const item: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: oscillate ? EASE_BACK : EASE_OUT },
    },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

export function WordReveal({
  lines,
  delay = 0,
  stagger = 0.08,
  className,
  lineClassName,
  style,
}: {
  lines: string[];
  delay?: number;
  stagger?: number;
  className?: string;
  lineClassName?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className={className} style={style}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName ?? ""}`}>
            {line}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className={className} style={style}>
      {lines.map((line, lineIdx) => {
        const words = line.split(" ");
        return (
          <span key={lineIdx} className={`block whitespace-nowrap ${lineClassName ?? ""}`}>
            {words.map((word, wordIdx) => {
              const globalIdx = lineIdx * 10 + wordIdx;
              return (
                <motion.span
                  key={`${lineIdx}-${wordIdx}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: delay + globalIdx * stagger,
                    ease: EASE_BACK,
                  }}
                >
                  {word}
                  {wordIdx < words.length - 1 ? " " : ""}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
}
