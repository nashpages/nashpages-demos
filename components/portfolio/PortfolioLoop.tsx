"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TILES, CYCLE_HEIGHT, STAGE_WIDTH, CONTACT_HREF } from "./data";

const BORDO = "#5B1F2A";
const TINTA = "#0E0B0B";
const FUMO = "#6B6660";

// Portfólio Nashpages — logo-âncora fixa no centro + mural de heros em LOOP INFINITO.
// Scroll é "virtual": acumulamos um offset com momentum próprio (rAF) e aplicamos
// translateY = -(offset mod CYCLE_HEIGHT) num palco que contém 2 cópias do mural.
// Como as cópias são idênticas e a viewport < CYCLE_HEIGHT, a emenda é imperceptível.
export function PortfolioLoop() {
  const stageRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const velocity = useRef(0);
  const rafId = useRef(0);
  const [started, setStarted] = useState(false); // dispara a barra do preloader
  const [done, setDone] = useState(false); // tira o preloader

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    document.body.style.overflow = "hidden";

    const stage = stageRef.current;
    const apply = () => {
      const m = ((offset.current % CYCLE_HEIGHT) + CYCLE_HEIGHT) % CYCLE_HEIGHT;
      if (stage) stage.style.transform = `translate3d(-50%, ${-m}px, 0)`;
    };

    const tick = () => {
      offset.current += velocity.current;
      velocity.current *= 0.92; // atrito → inércia suave
      if (Math.abs(velocity.current) < 0.02) velocity.current = 0;
      apply();
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    const WHEEL_K = prefersReduced ? 1 : 0.4;
    const MAX_V = 55;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      velocity.current += e.deltaY * WHEEL_K;
      if (velocity.current > MAX_V) velocity.current = MAX_V;
      if (velocity.current < -MAX_V) velocity.current = -MAX_V;
    };
    window.addEventListener("wheel", onWheel, { passive: false });

    // toque (mobile ganha layout próprio depois; isto evita travar no celular)
    let lastY = 0;
    const onTouchStart = (e: TouchEvent) => {
      lastY = e.touches[0].clientY;
      velocity.current = 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].clientY;
      const dy = lastY - y;
      lastY = y;
      offset.current += dy;
      velocity.current = dy * 0.9;
      apply();
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const t0 = setTimeout(() => setStarted(true), 60);
    const t1 = setTimeout(() => setDone(true), 1750);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      document.body.style.overflow = "";
      clearTimeout(t0);
      clearTimeout(t1);
    };
  }, []);

  return (
    <main
      className="fixed inset-0 overflow-hidden bg-white"
      style={{ color: TINTA, fontFamily: "var(--font-geist)" }}
    >
      {/* Logo-âncora: fixa no centro, atrás do mural (as fotos passam por cima) */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <span
          className="whitespace-nowrap font-medium leading-none"
          style={{
            fontSize: "clamp(64px, 13vw, 200px)",
            letterSpacing: "-0.03em",
          }}
        >
          nash<span style={{ color: BORDO }}>/</span>pages
        </span>
      </div>

      {/* Mural em loop: 2 cópias empilhadas; o translateY por módulo cria o loop */}
      <div
        ref={stageRef}
        className="absolute left-1/2 top-0 z-10 will-change-transform"
        style={{
          width: STAGE_WIDTH,
          height: CYCLE_HEIGHT * 2,
          transform: "translate3d(-50%, 0, 0)",
        }}
      >
        {[0, 1].map((copy) =>
          TILES.map((tile, i) => (
            <Link
              key={`${copy}-${i}`}
              href={`/${tile.slug}`}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute block"
              style={{
                left: tile.left,
                top: tile.top + copy * CYCLE_HEIGHT,
                width: tile.width,
              }}
              aria-label={tile.name}
            >
              <div
                className="relative overflow-hidden"
                style={{ height: tile.height }}
              >
                <Image
                  src={tile.img}
                  alt={tile.name}
                  fill
                  quality={95}
                  sizes="480px"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
                />
              </div>
              <p
                className="mt-2 uppercase"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  color: FUMO,
                }}
              >
                {tile.label}
              </p>
            </Link>
          ))
        )}
      </div>

      {/* Eyebrow + contato, fixos nos cantos */}
      <span
        className="fixed left-8 top-8 z-20 uppercase"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 11,
          letterSpacing: "0.1em",
          color: FUMO,
        }}
      >
        Trabalhos selecionados
      </span>
      <a
        href={CONTACT_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-8 top-8 z-20 uppercase transition-opacity duration-300 hover:opacity-60"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 11,
          letterSpacing: "0.06em",
          color: TINTA,
        }}
      >
        Falar com a gente →
      </a>

      {/* Preloader branded */}
      <div
        className="pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        style={{
          opacity: done ? 0 : 1,
          transform: done ? "translateY(-100%)" : "translateY(0)",
          transition: "opacity 700ms ease-out, transform 800ms cubic-bezier(0.32,0.72,0,1)",
        }}
        aria-hidden
      >
        <span
          className="font-medium leading-none"
          style={{
            fontSize: "clamp(40px, 8vw, 96px)",
            letterSpacing: "-0.03em",
          }}
        >
          nash<span style={{ color: BORDO }}>/</span>pages
        </span>
        <div className="mt-6 h-px w-[160px] overflow-hidden" style={{ background: "rgba(14,11,11,0.12)" }}>
          <div
            className="h-full"
            style={{
              background: BORDO,
              width: started ? "100%" : "0%",
              transition: "width 1.5s cubic-bezier(0.32,0.72,0,1)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
