"use client";

// Flutuação automática (sobe/desce devagar, suave e harmônica) da coroa.
// SOMA com o cursor-float do <Float> pai (que move contrário ao mouse):
// são motion.divs aninhados, então os transforms se combinam (parallax do mouse
// no pai + bob vertical aqui). Por enquanto só no DESKTOP (gated por matchMedia).
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const AMPLITUDE = 9; // px de sobe-desce (±) — knob
const HALF_CYCLE = 2.6; // segundos por meia oscilação (sobe OU desce) — knob ("devagar")

export function CrownBob({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(min-width: 768px)"); // desktop primeiro
    const update = () => setOn(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
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
