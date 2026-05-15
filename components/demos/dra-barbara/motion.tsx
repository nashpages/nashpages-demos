"use client";

import {
  motion,
  useReducedMotion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.32, 0.72, 0, 1] as const;
const VIEWPORT_MARGIN = "-80px 0px";

/* -------------------------------------------------------------------------- */
/* FadeUp — soft fade + 24px translate on enter viewport                      */
/* -------------------------------------------------------------------------- */
export function FadeUp({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag as "div"] as typeof motion.div;
  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/* -------------------------------------------------------------------------- */
/* Stagger — parent that staggers its children (use with FadeUpItem)          */
/* -------------------------------------------------------------------------- */
export function Stagger({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className,
}: {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren: delay },
    },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 24,
  className,
}: {
  children: ReactNode;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const item: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* WordReveal — fade-up word by word (soft, NOT letter-by-letter)             */
/* -------------------------------------------------------------------------- */
export function WordReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
}: {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName ?? ""}`}>{line}</span>
        ))}
      </span>
    );
  }
  // Flatten word index across lines to stagger globally
  let wordIdx = 0;
  return (
    <span className={className}>
      {lines.map((line, li) => (
        <span key={li} className={`block ${lineClassName ?? ""}`}>
          {line.split(" ").map((word, wi) => {
            const idx = wordIdx++;
            return (
              <motion.span
                key={`${li}-${wi}`}
                className="inline-block"
                style={{ willChange: "transform, opacity" }}
                initial={{ opacity: 0, y: "0.4em" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: VIEWPORT_MARGIN }}
                transition={{
                  duration: 0.8,
                  ease: EASE,
                  delay: delay + idx * stagger,
                }}
              >
                {word}
                {wi < line.split(" ").length - 1 && " "}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* CountUp — animate number from 0 to target on enter viewport                */
/* -------------------------------------------------------------------------- */
export function CountUp({
  to,
  duration = 1.6,
  className,
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: VIEWPORT_MARGIN });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v).toString());
  const [text, setText] = useState(reduce ? to.toString() : "0");

  useEffect(() => {
    if (reduce) return;
    const unsub = rounded.on("change", setText);
    return () => unsub();
  }, [rounded, reduce]);

  useEffect(() => {
    if (reduce) return;
    if (inView) {
      const controls = animate(motionVal, to, {
        duration,
        ease: EASE,
      });
      return () => controls.stop();
    }
  }, [inView, motionVal, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* ImageReveal — subtle scale + fade on enter (vibe magazine, not parallax)   */
/* -------------------------------------------------------------------------- */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      transition={{ duration: 1.0, ease: EASE, delay }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: VIEWPORT_MARGIN }}
        transition={{ duration: 1.6, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* HoverUnderline — underline that scales-x on hover                          */
/* -------------------------------------------------------------------------- */
export function HoverUnderline({
  children,
  href,
  external = false,
  className,
  underlineClassName,
}: {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
  underlineClassName?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex flex-col gap-2 ${className ?? ""}`}
    >
      <span>{children}</span>
      <span
        className={`h-px origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-110 ${
          underlineClassName ?? "bg-current"
        }`}
      />
    </a>
  );
}
