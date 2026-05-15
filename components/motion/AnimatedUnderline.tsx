"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  children: ReactNode;
  color?: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export function AnimatedUnderline({ children, color, className, href, target, rel }: Props) {
  const lineColor = color ?? "var(--demo-accent)";
  const Tag = href ? motion.a : motion.div;

  return (
    <Tag
      href={href}
      target={target}
      rel={rel}
      initial="rest"
      whileHover="hover"
      className={`relative inline-flex items-center group ${className ?? ""}`}
    >
      <span className="relative inline-block">
        {children}
        <motion.span
          variants={{
            rest: { scaleX: 1 },
            hover: { scaleX: 1.05 },
          }}
          transition={{ duration: DURATION.hover, ease: EASE.outExpo }}
          className="absolute left-0 right-0 -bottom-1 h-px origin-left"
          style={{ background: lineColor }}
        />
      </span>
    </Tag>
  );
}
