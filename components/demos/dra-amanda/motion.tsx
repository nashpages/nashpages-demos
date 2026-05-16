"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const EASE = [0.32, 0.72, 0, 1] as const;
const VIEWPORT_MARGIN = "-80px 0px";

export function FadeUp({
  children, delay = 0, y = 24, duration = 0.7, className,
}: {
  children: ReactNode; delay?: number; y?: number; duration?: number; className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children, delay = 0, staggerChildren = 0.1, className,
}: {
  children: ReactNode; delay?: number; staggerChildren?: number; className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren: delay } },
  };
  return (
    <motion.div className={className} variants={container} initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children, y = 24, className,
}: {
  children: ReactNode; y?: number; className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const item: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };
  return <motion.div className={className} variants={item}>{children}</motion.div>;
}

export function ImageReveal({
  children, className, delay = 0,
}: {
  children: ReactNode; className?: string; delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={`overflow-hidden ${className ?? ""}`}
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      transition={{ duration: 1.0, ease: EASE, delay }}>
      <motion.div className="h-full w-full"
        initial={{ scale: 1.08 }} whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: VIEWPORT_MARGIN }}
        transition={{ duration: 1.6, ease: EASE, delay }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
