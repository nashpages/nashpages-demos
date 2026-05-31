"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Dados de ordem de traços do 良 (KanjiVG / Make-Me-a-Hanzi) — embutidos p/ funcionar offline.
const LIANG = {
  strokes: [
    "M 461 804 Q 486 786 513 764 Q 531 751 549 754 Q 561 755 564 772 Q 568 790 553 822 Q 538 850 448 858 Q 430 859 424 855 Q 418 851 422 836 Q 428 823 461 804 Z",
    "M 572 417 Q 591 389 609 380 Q 619 373 636 396 Q 652 424 684 581 Q 691 615 716 643 Q 729 656 717 672 Q 699 690 653 716 Q 632 725 566 703 Q 556 700 545 697 Q 440 670 355 643 C 326 634 338 595 366 606 Q 365 607 367 607 Q 442 635 575 666 Q 605 673 615 664 Q 631 646 628 629 Q 600 458 579 446 C 565 426 565 426 572 417 Z",
    "M 361 502 Q 398 496 491 522 Q 557 541 561 544 Q 568 551 563 558 Q 556 568 531 572 Q 506 576 480 563 Q 453 553 424 544 Q 394 535 360 529 C 330 524 331 505 361 502 Z",
    "M 390 380 Q 492 405 572 417 C 602 422 609 441 579 446 Q 555 455 371 404 Q 367 404 362 402 C 325 392 350 370 390 380 Z",
    "M 355 643 Q 331 662 311 672 Q 292 679 282 673 Q 272 666 281 649 Q 345 516 299 132 Q 289 92 254 48 Q 241 32 249 8 Q 259 -20 273 -34 Q 286 -43 300 -24 Q 321 7 497 128 Q 518 140 524 149 Q 528 159 518 161 Q 503 161 370 100 Q 351 93 351 110 Q 360 254 361 375 L 362 402 Q 362 454 361 502 L 360 529 Q 360 571 366 606 C 370 632 370 632 355 643 Z",
    "M 574 234 Q 632 271 665 297 Q 743 360 772 371 Q 796 381 784 402 Q 769 421 740 438 Q 713 453 699 450 Q 684 449 689 433 Q 695 400 625 323 Q 592 287 557 247 C 537 224 549 218 574 234 Z",
    "M 557 247 Q 478 308 390 380 C 367 399 340 396 361 375 Q 692 44 733 28 Q 761 22 892 41 Q 938 48 962 54 Q 975 58 976 65 Q 975 72 954 79 Q 747 118 678 161 Q 675 164 674 164 Q 625 197 574 234 L 557 247 Z",
  ],
  medians: [
    [[431, 847], [521, 804], [546, 772]],
    [[370, 615], [380, 632], [582, 688], [618, 692], [645, 682], [669, 655], [669, 648], [628, 472], [611, 428], [614, 398]],
    [[366, 509], [505, 549], [555, 552]],
    [[367, 382], [387, 397], [558, 431], [575, 439]],
    [[291, 662], [321, 632], [329, 615], [339, 495], [339, 325], [321, 100], [325, 62], [380, 75], [517, 153]],
    [[698, 439], [711, 428], [727, 396], [659, 322], [577, 249], [566, 249]],
    [[385, 368], [594, 184], [659, 132], [740, 81], [791, 71], [969, 65]],
  ],
};

// Easing do protótipo aprovado (ryo-intro.html).
const EASE = [0.22, 0.61, 0.36, 1] as const;

export function RyoIntro({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);
  const [settle, setSettle] = useState(false); // "respiração" do glifo no clímax
  const [sweep, setSweep] = useState(false); // varredura de brilho dourado
  const [sign, setSign] = useState(false); // assinatura RYO GASTRONOMIA
  const done = useRef(false);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    onDone();
    setGone(true);
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => {
      const t = window.setTimeout(fn, ms);
      timers.push(t);
      return t;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (async () => {
      const HanziWriter = (await import("hanzi-writer")).default as any;
      if (cancelled || !ref.current) return;
      ref.current.innerHTML = "";
      const writer = HanziWriter.create(ref.current, "良", {
        width: 360,
        height: 360,
        padding: 6,
        showOutline: false,
        showCharacter: false,
        strokeColor: "#1C1A17",
        // timing fiel ao protótipo aprovado
        strokeAnimationSpeed: 1.15,
        delayBetweenStrokes: 150,
        charDataLoader: (_c: string, onComplete?: (d: unknown) => void) =>
          onComplete ? onComplete(LIANG) : LIANG,
      });

      if (reduce) {
        writer.showCharacter();
        writer.updateColor("strokeColor", "#DDA42B", { duration: 0 });
        setSign(true);
        later(finish, 900);
        return;
      }

      // escrita começa após um respiro (650ms), como no protótipo
      later(() => {
        writer.animateCharacter({
          onComplete: () => {
            // clímax: tinta → ouro (850ms) + respiração + varredura + assinatura
            writer.updateColor("strokeColor", "#DDA42B", { duration: 850 });
            setSettle(true);
            setSweep(true);
            later(() => setSign(true), 420);
            later(finish, 2300);
          },
        });
      }, 650);
    })().catch(() => finish());

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      onClick={finish}
      initial={{ opacity: 1 }}
      animate={{ opacity: gone ? 0 : 1, y: gone ? -14 : 0 }}
      transition={{ duration: 1, ease: EASE }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FCFAF6",
        pointerEvents: gone ? "none" : "auto",
        cursor: "pointer",
      }}
    >
      {/* glifo + varredura */}
      <motion.div
        animate={settle ? { scale: [1, 0.972, 1] } : { scale: 1 }}
        transition={{ duration: 1.1, ease: EASE, times: [0, 0.4, 1] }}
        style={{ position: "relative", width: 360, height: 360 }}
      >
        <div ref={ref} style={{ position: "absolute", inset: 0 }} />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, x: "-32%" }}
          animate={sweep ? { opacity: [0, 1, 0], x: ["-32%", "-21.5%", "26%"] } : { opacity: 0, x: "-32%" }}
          transition={{ duration: 1.05, ease: EASE, times: [0, 0.18, 1] }}
          style={{
            position: "absolute",
            inset: "-8% -20%",
            pointerEvents: "none",
            mixBlendMode: "screen",
            background:
              "linear-gradient(108deg,transparent 42%,rgba(255,228,150,0) 44%,rgba(255,231,158,.75) 50%,rgba(255,228,150,0) 56%,transparent 58%)",
          }}
        />
      </motion.div>

      {/* assinatura da marca */}
      <div style={{ marginTop: 30, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <motion.div
          initial={{ width: 0 }}
          animate={sign ? { width: 74 } : { width: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          style={{ height: 2, background: "#DDA42B" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 8, letterSpacing: "0.30em" }}
          animate={sign ? { opacity: 1, y: 0, letterSpacing: "0.46em" } : { opacity: 0, y: 8, letterSpacing: "0.30em" }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: 15, color: "#1C1A17" }}
        >
          RYO&nbsp;GASTRONOMIA
        </motion.div>
      </div>
    </motion.div>
  );
}
