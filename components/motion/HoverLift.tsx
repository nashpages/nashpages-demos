"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Hover sutil que sobe 4px. Pra usar nos cards de §03 Tratamentos.
 */
export function HoverLift({ children, className }: Props) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -4 },
      }}
      transition={{ duration: DURATION.hover, ease: EASE.outExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
