"use client";

import { type ReactNode, type JSX } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export function RevealFadeUp({
  children,
  delay = 0,
  duration = DURATION.entrance,
  distance = 24,
  as = "div",
  className,
}: Props) {
  const reduced = useReducedMotion();
  const Component = motion[as as "div"] as typeof motion.div;
  return (
    <Component
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE.outExpo }}
      className={className}
    >
      {children}
    </Component>
  );
}
