"use client";

// Cursor-float estilo blit.studio: tudo "flutua" no sentido CONTRÁRIO ao cursor,
// com profundidade (cada elemento com seu `depth`), suavizado por spring.
// Um provider rastreia o mouse (offset -1..1 do centro) → springs mx/my;
// cada <Float depth> aplica translate = -offset * depth.

import { createContext, useContext, useEffect, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

type MouseCtxValue = { mx: MotionValue<number>; my: MotionValue<number> };
const MouseCtx = createContext<MouseCtxValue | null>(null);

// Intensidade global do cursor-float — multiplica TODOS os `depth`.
// 1 = base sóbria · ↑ = mais movimento. Knob único pra calibrar.
const INTENSITY = 2.8;

export function MouseParallaxProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 50, damping: 16, mass: 0.8 });
  const my = useSpring(rawY, { stiffness: 50, damping: 16, mass: 0.8 });

  useEffect(() => {
    if (reduce) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
        rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduce, rawX, rawY]);

  return <MouseCtx.Provider value={{ mx, my }}>{children}</MouseCtx.Provider>;
}

export function Float({
  depth = 18,
  children,
  className,
}: {
  depth?: number;
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(MouseCtx);
  const fallback = useMotionValue(0);
  const mx = ctx?.mx ?? fallback;
  const my = ctx?.my ?? fallback;
  const x = useTransform(mx, (v) => -v * depth * INTENSITY);
  const y = useTransform(my, (v) => -v * depth * INTENSITY);
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}
