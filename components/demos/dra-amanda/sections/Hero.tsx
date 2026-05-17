"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AMANDA_DATA } from "../data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      if (!sectionRef.current) return;
      const ctx = gsap.context(() => {
        gsap.set(
          [eyebrowRef.current, headlineRef.current, sublineRef.current, quoteRef.current, ctasRef.current],
          { opacity: 0, y: 32 }
        );
        gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(photoRef.current, { opacity: 0, scale: 1.06 });

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
          .to(photoRef.current, { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" }, 0)
          .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
          .to(headlineRef.current, { opacity: 1, y: 0, duration: 1.2 }, 0.4)
          .to(dividerRef.current, { scaleX: 1, duration: 0.6 }, 1.2)
          .to(sublineRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.4)
          .to(quoteRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.8)
          .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.5 }, 2.2);
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  const { hero } = AMANDA_DATA;

  return (
    <section ref={sectionRef} id="top" className="relative w-full min-h-screen lg:h-screen overflow-hidden"
      style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] h-full grid lg:grid-cols-[1fr_500px] grid-cols-1 lg:gap-12 gap-8 lg:px-[120px] px-6 lg:pt-[180px] pt-[100px] lg:pb-[100px] pb-12">
        {/* LEFT: text */}
        <div className="flex flex-col lg:justify-center">
          <p ref={eyebrowRef} className="text-[11px] tracking-[0.16em] lg:whitespace-nowrap"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            {hero.eyebrow}
          </p>
          <h1 ref={headlineRef} className="mt-6 leading-[1.04]"
            style={{
              fontFamily: "var(--font-fraunces)", fontWeight: 400,
              fontSize: "clamp(48px, 7.5vw, 96px)",
              letterSpacing: "-0.031em", color: "var(--c-tinta)",
            }}>
            <span className="block whitespace-nowrap">{hero.headlineLines[0]}</span>
            <span className="block whitespace-nowrap">{hero.headlineLines[1]}</span>
          </h1>
          <div ref={dividerRef} className="mt-8 h-px w-[60px]"
            style={{ backgroundColor: "var(--c-carmim)" }} />
          <p ref={sublineRef} className="mt-7 text-[17px] leading-[1.65] max-w-[560px]"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
            {hero.subline}
          </p>
          <p ref={quoteRef} className="mt-8 italic text-[20px] leading-[1.5] max-w-[560px]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
            {hero.quote}
          </p>
          <div ref={ctasRef} className="mt-10 flex items-center gap-8 flex-wrap">
            <a href={hero.primaryCta.href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full py-[18px] px-7 text-[12px] tracking-[0.16em] transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, backgroundColor: "var(--c-carmim)", color: "var(--c-papel)" }}>
              {hero.primaryCta.label}  →
            </a>
            <a href={hero.secondaryCta.href} className="group inline-flex flex-col gap-[10px]">
              <span className="text-[12px] tracking-[0.16em] transition-transform duration-300 group-hover:translate-x-1"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
                {hero.secondaryCta.label}  →
              </span>
              <span className="h-px w-[160px] origin-left transition-transform duration-500 group-hover:scale-x-110"
                style={{ backgroundColor: "var(--c-tinta)" }} />
            </a>
          </div>
        </div>

        {/* RIGHT: photo */}
        <div ref={photoRef} className="relative w-full lg:h-full h-[420px] overflow-hidden">
          <Image
            src={AMANDA_DATA.photoHero}
            alt="Dra. Amanda Fistarol"
            fill priority quality={100}
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover object-[center_15%]"
          />
        </div>
      </div>
    </section>
  );
}
