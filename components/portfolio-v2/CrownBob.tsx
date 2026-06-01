"use client";

// Flutuação automática (sobe/desce devagar, suave e harmônica) da coroa.
// SOMA com o cursor-float do <Float> pai (que move contrário ao mouse):
// são motion.divs aninhados, então os transforms se combinam (parallax do mouse
// no pai + bob vertical aqui). Roda no desktop E no mobile (aprovado); no mobile
// só o sobe-desce (não há mouse pro cursor-float). Respeita reduced-motion.
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const AMPLITUDE = 9; // px de sobe-desce (±) — knob
const HALF_CYCLE = 2.6; // segundos por meia oscilação (sobe OU desce) — knob ("devagar")

export function CrownBob({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (reduce) return;
    setOn(true); // desktop + mobile
  }, [reduce]);

  return (
    <motion.div
      className={className}
      animate={on ? { y: [-AMPLITUDE, AMPLITUDE] } : undefined}
      transition={
        on
          ? { duration: HALF_CYCLE, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
