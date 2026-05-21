"use client";

import { useRef } from "react";
import Image from "next/image";
import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Espacos() {
  const e = VALDUGA_DATA.espacos;
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0 });

  const onDown = (ev: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { down: true, startX: ev.pageX, startLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
  };
  const onMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !drag.current.down) return;
    el.scrollLeft = drag.current.startLeft - (ev.pageX - drag.current.startX);
  };
  const onUp = () => {
    const el = scrollRef.current;
    if (el) el.style.cursor = "grab";
    drag.current.down = false;
  };

  return (
    <section
      id="espacos"
      className="relative w-full py-20 lg:py-[100px] overflow-hidden"
      style={{ backgroundColor: "var(--c-pedra)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <FadeUp>
          <div className="flex items-end justify-between gap-6 mb-10 lg:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-vinho)" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-dourado)" }} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-vinho)", marginLeft: "4px" }}>{e.eyebrow}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "var(--c-tinta)", margin: 0, maxWidth: "680px" }}>{e.headline}</h2>
            </div>
            <span className="hidden md:block whitespace-nowrap" style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 400, fontSize: "12px", letterSpacing: "1.5px", color: "var(--c-neblina)" }}>{e.cue} →</span>
          </div>
        </FadeUp>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        className="flex gap-5 lg:gap-6 overflow-x-auto cursor-grab select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          paddingLeft: "max(24px, calc((100vw - 1440px) / 2 + 80px))",
          paddingRight: "24px",
          scrollSnapType: "x mandatory",
        }}
      >
        {e.cards.map((card, i) => (
          <div
            key={card.name}
            className="group relative flex-shrink-0 overflow-hidden"
            style={{ width: "clamp(280px, 30vw, 420px)", height: "clamp(380px, 42vw, 520px)", scrollSnapAlign: "start" }}
          >
            <Image
              src={card.photo}
              alt={card.name}
              fill
              loading="eager"
              quality={95}
              sizes="(min-width: 1024px) 720px, 520px"
              draggable={false}
              className="object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
            />
            <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(15,9,11,0) 42%, rgba(15,9,11,0.84) 100%)" }} />
            <span style={{ position: "absolute", top: "22px", left: "24px", fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.5px", color: "var(--c-pergaminho)", opacity: 0.9 }}>
              {String(i + 1).padStart(2, "0")} / 0{e.cards.length}
            </span>
            <div className="absolute left-6 right-6" style={{ bottom: "26px" }}>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(22px, 2vw, 28px)", lineHeight: 1.1, color: "var(--c-pergaminho)", margin: 0 }}>{card.name}</h3>
              <p className="mt-2" style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 400, fontSize: "11px", letterSpacing: "1.6px", color: "var(--c-dourado-light)", margin: 0 }}>{card.meta}</p>
            </div>
          </div>
        ))}
        <div className="flex-shrink-0" style={{ width: "1px" }} aria-hidden />
      </div>
    </section>
  );
}
