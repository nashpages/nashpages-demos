"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  /** Quanto a camada se move em Y conforme scrolla. Default 80px. */
  range?: number;
  /** Direção do movimento. "up" = sobe quando scrolla (foto sai), "down" = desce. */
  direction?: "up" | "down";
  className?: string;
};

export function ParallaxLayer({ children, range = 80, direction = "up", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRange = direction === "up" ? [range, -range] : [-range, range];
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : yRange);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="will-change-transform h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
