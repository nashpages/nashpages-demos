"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  /** Texto a revelar. Suporta \n pra quebra de linha. */
  text: string;
  /** Tempo entre cada caractere em segundos. Default 0.025s (~40 chars/s, vibe typewriter). */
  charStagger?: number;
  /** Delay antes de começar (s). */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Reveal char-by-char — vibe typewriter / Apple keynote.
 * Cada caractere aparece com opacity 0→1 quase instantâneo, em sequência.
 * Respeita prefers-reduced-motion (mostra texto direto).
 */
export function TypewriterReveal({
  text,
  charStagger = 0.025,
  delay = 0,
  className,
  style,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span className={className} style={style}>
        {text.split("\n").map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 ? <br /> : null}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        staggerChildren: charStagger,
        delayChildren: delay,
      }}
    >
      {text.split("").map((char, i) => {
        if (char === "\n") {
          return <br key={i} />;
        }
        return (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.01 }}
          >
            {char === " " ? " " : char}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
