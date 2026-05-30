"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const DOOR = [0.76, 0, 0.24, 1] as const;
const EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * Intro "As portas do salão": tela escura, "Gero" surge letra a letra com fio de
 * cobre, e duas portas escuras abrem revelando o site. prefers-reduced-motion → off.
 */
export function GeroIntro() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t1 = window.setTimeout(() => setOpen(true), 2050);
    const t2 = window.setTimeout(() => setDone(true), 3350);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reduce]);

  if (reduce || done) return null;
  const letters = "Gero".split("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[300]"
          style={{ pointerEvents: "none" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ width: "50.5%", backgroundColor: "var(--c-salao)" }}
            animate={{ x: open ? "-101%" : "0%" }}
            transition={{ duration: 1.25, ease: DOOR }}
          />
          <motion.div
            className="absolute inset-y-0 right-0"
            style={{ width: "50.5%", backgroundColor: "var(--c-salao)" }}
            animate={{ x: open ? "101%" : "0%" }}
            transition={{ duration: 1.25, ease: DOOR }}
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 0 : 1, y: open ? -22 : 0 }}
            transition={{ duration: open ? 0.6 : 0.7, ease: EXPO }}
          >
            <motion.div
              className="flex"
              initial="h"
              animate="v"
              transition={{ staggerChildren: 0.07, delayChildren: 0.25 }}
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 600,
                color: "var(--c-linho)",
                fontSize: "clamp(72px,11vw,140px)",
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              {letters.map((l, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block will-change-transform"
                    variants={{ h: { y: "115%" }, v: { y: 0, transition: { duration: 0.95, ease: EXPO } } }}
                  >
                    {l}
                  </motion.span>
                </span>
              ))}
            </motion.div>
            <motion.div
              style={{ height: 1, backgroundColor: "var(--c-bronze)", marginTop: 28 }}
              initial={{ width: 0 }}
              animate={{ width: 84 }}
              transition={{ duration: 0.8, delay: 0.95, ease: EXPO }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.15 }}
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontSize: 13,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--c-creme)",
                marginTop: 22,
              }}
            >
              Cucina Italiana · Ipanema
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
