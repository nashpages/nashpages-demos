"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RYO, NAV, HERO } from "./data";

const E = "cubic-bezier(0.16,1,0.3,1)";

export function RyoNav({ light }: { light: boolean }) {
  return (
    <nav
      style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 40,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "38px clamp(28px,5vw,72px)",
        color: light ? RYO.paper : RYO.ink, transition: "color 1s ease",
        fontFamily: "var(--font-jost), sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontFamily: "'Shippori Mincho', serif", fontSize: 26 }}>{HERO.kanji}</span>
        <span style={{ fontSize: 12, letterSpacing: "0.30em" }}>RYO&nbsp;GASTRONOMIA</span>
      </div>
      <div style={{ display: "flex", gap: 34, fontSize: 12, letterSpacing: "0.24em" }}>
        {NAV.map((n, i) => (
          <span key={n} style={{ color: i === NAV.length - 1 ? RYO.amber : undefined }}>
            {n.toUpperCase()}
          </span>
        ))}
      </div>
    </nav>
  );
}

export function RyoHero({ start }: { start: boolean }) {
  const [reduce, setReduce] = useState(false);
  const [finaleIn, setFinaleIn] = useState(false);
  const [full, setFull] = useState(false);
  const [scrim, setScrim] = useState(false);
  const [content, setContent] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setFinaleIn(true); setFull(true); setScrim(true); setContent(true);
      return;
    }
    // timing fiel ao protótipo aprovado (ryo-hero-deck.html)
    const tA = window.setTimeout(() => setFinaleIn(true), 3900);
    const tB = window.setTimeout(() => setFull(true), 5300);
    const tS = window.setTimeout(() => setScrim(true), 6500);
    const tC = window.setTimeout(() => setContent(true), 6800);
    return () => { clearTimeout(tA); clearTimeout(tB); clearTimeout(tS); clearTimeout(tC); };
  }, [start, reduce]);

  const deckOn = start && !reduce;

  const finaleStyle: React.CSSProperties = full
    ? {
        width: "100vw", height: "100vh", left: 0, top: 0, borderRadius: 0, opacity: 1, transform: "none",
        transition: `width 1.5s ${E}, height 1.5s ${E}, left 1.5s ${E}, top 1.5s ${E}, border-radius 1.5s ${E}`,
      }
    : {
        width: 420, height: 300, left: "calc(50% - 210px)", top: "calc(50% - 150px)", borderRadius: 4,
        opacity: finaleIn ? 1 : 0,
        transform: finaleIn ? "translateY(0) scale(1)" : "translateY(34px) scale(0.92)",
        transition: `opacity 1.1s ${E}, transform 1.2s ${E}`,
      };

  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden", backgroundColor: RYO.washi }}>
      <RyoNav light={full} />

      {/* deck de fotos que empilha */}
      {HERO.deck.map((c, i) => (
        <div
          key={c.s}
          style={{
            position: "absolute", left: "50%", top: "50%", zIndex: 2,
            width: c.w, height: c.h, marginLeft: -c.w / 2, marginTop: -c.h / 2,
            borderRadius: 3, overflow: "hidden", boxShadow: "0 24px 60px rgba(30,22,12,.20)",
            opacity: deckOn ? 1 : 0,
            transform: deckOn
              ? `translate(${c.x}px, ${c.y}px) rotate(${c.r}deg) scale(1)`
              : `translate(${c.x}px, ${c.y + 34}px) rotate(${c.r}deg) scale(0.9)`,
            transition: `opacity 1.15s ${E} ${220 + i * 340}ms, transform 1.25s ${E} ${220 + i * 340}ms`,
            willChange: "transform, opacity",
          }}
        >
          <Image src={c.img} alt="" fill sizes="400px" quality={86} style={{ objectFit: "cover" }} />
        </div>
      ))}

      {/* foto principal que abre em tela cheia */}
      <div style={{ position: "absolute", zIndex: 3, overflow: "hidden", boxShadow: "0 30px 80px rgba(30,22,12,.28)", ...finaleStyle }}>
        <Image src={HERO.finalImg} alt="Salão do Ryo Gastronomia" fill sizes="100vw" quality={92} priority style={{ objectFit: "cover" }} />
      </div>

      {/* scrim p/ legibilidade do conteúdo */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(20,16,10,.34) 0%, rgba(20,16,10,0) 26%, rgba(20,16,10,0) 52%, rgba(20,16,10,.62) 100%)",
          opacity: scrim ? 1 : 0, transition: "opacity 1s ease",
        }}
      />

      {/* conteúdo central sobre a foto */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={content ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        }}
      >
        <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: 13, letterSpacing: "0.42em", color: RYO.amber, marginBottom: 30 }}>
          {HERO.eyebrow}
        </span>
        <span style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(120px,15vw,210px)", lineHeight: 1, color: RYO.paper }}>
          {HERO.kanji}
        </span>
        <span style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(20px,2.4vw,27px)", color: RYO.paper, marginTop: 24 }}>
          {HERO.tagline.join(" ")}
        </span>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={content ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
        style={{
          position: "absolute", bottom: 34, left: "50%", transform: "translateX(-50%)", zIndex: 5,
          display: "flex", alignItems: "center", gap: 12, pointerEvents: "none",
          fontFamily: "var(--font-jost), sans-serif", fontSize: 11, letterSpacing: "0.30em", color: "rgba(247,243,234,.82)",
        }}
      >
        <span style={{ width: 28, height: 1, background: RYO.amber, display: "inline-block" }} />
        ROLE PARA DESCOBRIR
      </motion.div>
    </section>
  );
}
