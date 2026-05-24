"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Intro branded: wordmark + linha de progresso (rosso) preenchendo, com a
 * frase-conceito em Bodoni; ao terminar, desliza para cima revelando o site.
 * prefers-reduced-motion → não renderiza.
 */
export function Preloader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = window.setTimeout(() => setDone(true), 1950);
    return () => window.clearTimeout(t);
  }, [reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[250] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--c-branco)" }}
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.22em",
                color: "var(--c-fumo)",
              }}
            >
              CYRELA BY PININFARINA
            </span>
            <div
              className="relative mt-6 overflow-hidden"
              style={{ width: 180, height: 1, backgroundColor: "var(--c-linha)" }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full"
                style={{ backgroundColor: "var(--c-rosso)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: [0.32, 0.72, 0, 1] }}
              />
            </div>
            <span
              className="mt-6"
              style={{
                fontFamily: "var(--font-bodoni-moda)",
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: "20px",
                color: "var(--c-tinta)",
              }}
            >
              Esculpido pelo vento
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
