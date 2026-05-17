"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AMANDA_DATA } from "../data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Tratamentos() {
  const { tratamentos } = AMANDA_DATA;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      if (!sectionRef.current) return;
      const ctx = gsap.context(() => {
        gsap.set(".trat-card", { opacity: 0, y: 32 });

        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=100%",
            invalidateOnRefresh: true,
          },
        })
          .to(".trat-card:nth-child(1)", { opacity: 1, y: 0, duration: 0.5 }, 0)
          .to(".trat-card:nth-child(2)", { opacity: 1, y: 0, duration: 0.5 }, 0.3)
          .to(".trat-card:nth-child(3)", { opacity: 1, y: 0, duration: 0.5 }, 0.6)
          .to(".trat-card:nth-child(4)", { opacity: 1, y: 0, duration: 0.5 }, 0.9);
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="tratamentos"
      className="w-full lg:min-h-screen lg:py-[120px] py-16 overflow-hidden"
      style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[120px]">
        <p className="text-[12px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {tratamentos.eyebrow}
        </p>
        <h2 className="mt-5 lg:text-[80px] text-[44px] leading-[1.1]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.031em", color: "var(--c-tinta)" }}>
          <span className="block">Quatro frentes</span>
          <span className="block">da pele.</span>
        </h2>
        <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
        <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {tratamentos.cards.map((c) => (
            <div key={c.num} className="trat-card">
              <div className="h-px w-full mb-6" style={{ backgroundColor: "var(--c-carmim)" }} />
              <p className="leading-[1.04]"
                style={{
                  fontFamily: "var(--font-fraunces)", fontWeight: 300,
                  fontSize: "clamp(64px, 8vw, 96px)",
                  letterSpacing: "-0.031em", color: "var(--c-carmim)",
                }}>
                {c.num}
              </p>
              <p className="mt-6 text-[13px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
                {c.label}
              </p>
              <p className="mt-3 text-[15px] leading-[1.6] max-w-[520px]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
