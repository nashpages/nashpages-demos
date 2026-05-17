"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AMANDA_DATA } from "../data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Contato() {
  const { contato } = AMANDA_DATA;
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const accentRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const redesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      if (!sectionRef.current) return;
      const ctx = gsap.context(() => {
        gsap.set(
          [eyebrowRef.current, headlineRef.current, accentRef.current, bodyRef.current, ctaRef.current, phoneRef.current, redesRef.current],
          { opacity: 0, y: 32 }
        );
        gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });

        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=120%",
            invalidateOnRefresh: true,
          },
        })
          .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0)
          .to(headlineRef.current, { opacity: 1, y: 0, duration: 1.4 }, 0.2)
          .to(accentRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.4)
          .to(dividerRef.current, { scaleX: 1, duration: 0.5 }, 1.8)
          .to(bodyRef.current, { opacity: 1, y: 0, duration: 0.5 }, 2)
          .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, 2.3)
          .to(phoneRef.current, { opacity: 1, y: 0, duration: 0.5 }, 2.7)
          .to(redesRef.current, { opacity: 1, y: 0, duration: 0.5 }, 2.9);
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contato"
      className="relative w-full lg:min-h-screen lg:px-[120px] px-6 lg:py-[120px] py-16 overflow-hidden"
      style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        <p ref={eyebrowRef} className="text-[12px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {contato.eyebrow}
        </p>
        <h2 ref={headlineRef} className="mt-5 leading-[1.04]"
          style={{
            fontFamily: "var(--font-fraunces)", fontWeight: 400,
            fontSize: "clamp(64px, 9.5vw, 128px)",
            letterSpacing: "-0.031em", color: "var(--c-tinta)",
          }}>
          <span className="block">Vamos</span>
          <span className="block">conversar.</span>
        </h2>
        <p ref={accentRef} className="mt-8 italic lg:text-[24px] text-[20px]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-carmim)" }}>
          {contato.accent}
        </p>
        <div ref={dividerRef} className="mt-10 h-px w-[60px]"
          style={{ backgroundColor: "var(--c-carmim)" }} />
        <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div>
            <p ref={bodyRef} className="text-[17px] leading-[1.65] max-w-[560px]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
              {contato.body}
            </p>
            <a ref={ctaRef} href={contato.cta.href} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full lg:w-auto w-full py-[22px] px-8 text-[13px] tracking-[0.16em] transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, backgroundColor: "var(--c-carmim)", color: "var(--c-papel)" }}>
              {contato.cta.label}  →
            </a>
            <div ref={phoneRef} className="mt-10 pt-6 border-t inline-block" style={{ borderColor: "var(--c-carmim)" }}>
              <p className="lg:text-[36px] text-[28px]"
                style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.031em", color: "var(--c-tinta)" }}>
                {contato.phoneLine}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.13em]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
                {contato.phoneLabel}
              </p>
            </div>
          </div>
          <div ref={redesRef}>
            <p className="text-[13px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
              /  REDES
            </p>
            <div className="mt-5 space-y-2">
              {contato.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="block italic text-[22px] transition-opacity hover:opacity-70"
                  style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, color: "var(--c-tinta)" }}>
                  {s.label}
                </a>
              ))}
            </div>
            <p className="mt-3 text-[11px] tracking-[0.13em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
              {contato.fixedNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
