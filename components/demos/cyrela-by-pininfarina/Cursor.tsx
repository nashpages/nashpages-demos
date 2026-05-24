"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor custom discreto: ponto rosso (instantâneo) + anel grafite (com lag
 * suave). O anel cresce ao passar sobre links/imagens marcados [data-cursor].
 * Só ativa em ponteiro fino (desktop) — em touch não renderiza.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.body.style.cursor = "none";

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest(
        "a, button, [data-cursor]"
      );
      setHover(Boolean(t));
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[300] rounded-full"
        style={{ width: 6, height: 6, backgroundColor: "var(--c-rosso)" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[300] rounded-full"
        style={{
          width: hover ? 58 : 38,
          height: hover ? 58 : 38,
          border: `1px solid ${hover ? "rgba(200,26,39,0.55)" : "rgba(38,35,31,0.4)"}`,
          backgroundColor: hover ? "rgba(200,26,39,0.04)" : "transparent",
          transition:
            "width .28s cubic-bezier(0.32,0.72,0,1), height .28s cubic-bezier(0.32,0.72,0,1), border-color .28s ease, background-color .28s ease",
        }}
      />
    </>
  );
}
