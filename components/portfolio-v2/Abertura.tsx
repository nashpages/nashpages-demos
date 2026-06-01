"use client";

// Abertura nash/pages — PORTE FIEL do protótipo aprovado pelo Enzo
// (C:\Catalogos Concorrentes\nashpages_v2_abertura_prototipo.html).
// Timeline/knobs/eases IDÊNTICOS ao protótipo — NÃO "otimizar"/encurtar (lição Ryo).
// Beats: digita nash/pages → respiro → o "/" cresce numa diagonal → a tela
// abre na costura diagonal revelando o site real por baixo (nash/pages viajam
// colados nas 2 metades).

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./abertura.module.css";

const CFG = {
  seamAngleDeg: 18, // inclinação do "/" (graus a partir da vertical)
  slashWeight: 0.092, // espessura do slash (fração da fonte)
  slashHeight: 0.74, // altura do slash em repouso (fração da fonte)
  slashGap: 0.3, // respiro reservado entre nash | pages (fração da fonte)
  slashGapNashExtra: 0.07, // folga EXTRA só do lado do nash (fração da fonte)

  typeStart: 0.5, // quando começa a digitar (s)
  typeStagger: 0.11, // intervalo entre cada tecla (s)
  letterDur: 0.15, // entrada de cada letra (rápida, feel de tecla)

  holdAfterType: 0.9, // respiro depois de escrever (s)
  slashGrowDur: 0.95, // tempo do slash crescer até a tela inteira (s)
  slashGrowEase: "power3.inOut",
  holdAfterGrow: 0.28, // micro-pausa antes de abrir (s)

  openDur: 1.15, // tempo da tela se abrir (s)
  openEase: "power4.inOut",

  caret: true,
  caretH: 0.7, // altura do caret (fração da fonte)
  baselineFrac: 0.76, // posição da baseline dentro da caixa de linha (fração)
};

const NASH = [..."nash"];
const PAGES = [..."pages"];

export function Abertura({ onDone }: { onDone: () => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const nashRef = useRef<HTMLSpanElement>(null);
  const pagesRef = useRef<HTMLSpanElement>(null);
  const slashRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLDivElement>(null);
  const panelARef = useRef<HTMLDivElement>(null);
  const panelBRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const stage = stageRef.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => doneRef.current();

    // reduced motion → sem animação, só um fade suave revelando o site
    if (reduce) {
      const tw = gsap.to(stage, { opacity: 0, duration: 0.4, onComplete: finish });
      return () => {
        tw.kill();
      };
    }

    let cancelled = false;
    let tl: ReturnType<typeof gsap.timeline> | null = null;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden"; // trava scroll durante a intro

    const play = () => {
      const word = wordRef.current!;
      const nashEl = nashRef.current!;
      const pagesEl = pagesRef.current!;
      const slash = slashRef.current!;
      const caret = caretRef.current!;
      const panelA = panelARef.current!;
      const panelB = panelBRef.current!;

      const fs = parseFloat(getComputedStyle(word).fontSize);
      const slashW = Math.max(2, fs * CFG.slashWeight);
      const capH = fs * CFG.slashHeight;
      const deg = CFG.seamAngleDeg;
      const rad = (deg * Math.PI) / 180;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const diag = Math.hypot(vw, vh);
      const growScale = (2.6 * diag) / capH; // o slash cresce até cruzar a tela toda
      const D = 0.7 * diag; // distância que cada metade viaja ao abrir
      const ux = Math.cos(rad);
      const uy = Math.sin(rad); // direção perpendicular à costura
      const OV = 3; // sobreposição dos painéis p/ matar a costura

      stage.style.setProperty("--halfgap-pages", (fs * CFG.slashGap) / 2 + "px");
      stage.style.setProperty(
        "--halfgap-nash",
        (fs * CFG.slashGap) / 2 + fs * CFG.slashGapNashExtra + "px"
      );
      slash.style.width = slashW + "px";
      slash.style.height = capH + "px";

      const letters = Array.from(nashEl.children) as HTMLElement[];
      const pl = Array.from(pagesEl.children) as HTMLElement[];
      const all = [...letters, ...pl];

      // baseline da linha (p/ o caret sentar no texto, não embaixo)
      gsap.set(all, { clearProps: "transform", opacity: 0 });
      const rh = letters[0].getBoundingClientRect().height;
      const baselineY = vh / 2 + (CFG.baselineFrac - 0.5) * rh;

      // --- reset ---
      gsap.set([nashEl, pagesEl], { x: 0, y: 0, yPercent: -50 });
      gsap.set(all, { opacity: 0, yPercent: 12 });
      gsap.set(slash, {
        opacity: 0,
        x: 0,
        y: fs * 0.12,
        xPercent: -50,
        yPercent: -50,
        rotation: deg,
        scaleY: 1,
        transformOrigin: "50% 50%",
      });
      gsap.set(caret, {
        opacity: 0,
        height: fs * CFG.caretH,
        x: vw / 2,
        y: baselineY,
        yPercent: -100,
        transformOrigin: "50% 100%",
      });
      gsap.set(panelA, {
        x: ux * OV,
        y: uy * OV,
        xPercent: -100,
        yPercent: -50,
        rotation: deg,
        transformOrigin: "100% 50%",
      });
      gsap.set(panelB, {
        x: -ux * OV,
        y: -uy * OV,
        xPercent: 0,
        yPercent: -50,
        rotation: deg,
        transformOrigin: "0% 50%",
      });

      // ordem das teclas: n a s h (0-3) · / (4) · p a g e s (5-9)
      const order: { el: HTMLElement; k: number; isSlash?: boolean }[] = [];
      letters.forEach((el, i) => order.push({ el, k: i }));
      order.push({ el: slash, k: 4, isSlash: true });
      pl.forEach((el, i) => order.push({ el, k: 5 + i }));
      order.sort((a, b) => a.k - b.k);

      const moveCaret = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        gsap.to(caret, { x: r.right + fs * 0.04, y: baselineY, duration: 0.1, ease: "power2.out" });
      };

      const t = gsap.timeline({ onComplete: finish });

      // 1) DIGITAÇÃO ------------------------------------------------
      if (CFG.caret) t.to(caret, { opacity: 1, duration: 0.2 }, CFG.typeStart - 0.15);
      order.forEach((o) => {
        const at = CFG.typeStart + o.k * CFG.typeStagger;
        if (o.isSlash) t.to(o.el, { opacity: 1, y: 0, duration: CFG.letterDur, ease: "power2.out" }, at);
        else t.to(o.el, { opacity: 1, yPercent: 0, duration: CFG.letterDur, ease: "power2.out" }, at);
        if (CFG.caret) t.add(() => moveCaret(o.el), at + 0.02);
      });

      const typeEnd = CFG.typeStart + 9 * CFG.typeStagger + CFG.letterDur;
      if (CFG.caret) {
        t.to(caret, { opacity: 0, duration: 0.25, repeat: 3, yoyo: true, ease: "power1.inOut" }, typeEnd - 0.1);
        t.to(caret, { opacity: 0, duration: 0.2 }, typeEnd + 0.7);
      }

      // 2) SLASH CRESCE até a tela inteira -------------------------
      const growAt = typeEnd + CFG.holdAfterType;
      t.to(slash, { scaleY: growScale, duration: CFG.slashGrowDur, ease: CFG.slashGrowEase }, growAt);

      // 3) A TELA ABRE — metades viajam, palavras coladas ----------
      const openAt = growAt + CFG.slashGrowDur + CFG.holdAfterGrow;
      t.to(panelA, { x: -ux * D, y: -uy * D, duration: CFG.openDur, ease: CFG.openEase }, openAt);
      t.to(nashEl, { x: -ux * D, y: -uy * D, duration: CFG.openDur, ease: CFG.openEase }, openAt);
      t.to(panelB, { x: ux * D, y: uy * D, duration: CFG.openDur, ease: CFG.openEase }, openAt);
      t.to(pagesEl, { x: ux * D, y: uy * D, duration: CFG.openDur, ease: CFG.openEase }, openAt);
      t.to(slash, { opacity: 0, duration: CFG.openDur * 0.42, ease: "power2.in" }, openAt);

      tl = t;
    };

    // espera as fontes (Geist) carregarem antes de medir — evita o wordmark "pular"
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) play();
      });
    } else {
      play();
    }

    return () => {
      cancelled = true;
      tl?.kill();
      html.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={stageRef} className={styles.stage} aria-hidden="true">
      {/* estado inicial = cobertura total (evita flash do site antes do JS rodar) */}
      <div
        ref={panelARef}
        className={styles.panel}
        style={{ transform: `translate(-100%,-50%) rotate(${CFG.seamAngleDeg}deg)`, transformOrigin: "100% 50%" }}
      />
      <div
        ref={panelBRef}
        className={styles.panel}
        style={{ transform: `translate(0,-50%) rotate(${CFG.seamAngleDeg}deg)`, transformOrigin: "0% 50%" }}
      />
      <div ref={wordRef} className={styles.word}>
        <span ref={nashRef} className={`${styles.grp} ${styles.nash}`}>
          {NASH.map((c, i) => (
            <span key={i} className={styles.ch}>
              {c}
            </span>
          ))}
        </span>
        <span ref={pagesRef} className={`${styles.grp} ${styles.pages}`}>
          {PAGES.map((c, i) => (
            <span key={i} className={styles.ch}>
              {c}
            </span>
          ))}
        </span>
      </div>
      <div ref={slashRef} className={styles.slash} />
      <div ref={caretRef} className={styles.caret} />
    </div>
  );
}
