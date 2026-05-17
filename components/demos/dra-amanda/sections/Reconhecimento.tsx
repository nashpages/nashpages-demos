"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AMANDA_DATA } from "../data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Reconhecimento() {
  const { reconhecimento } = AMANDA_DATA;
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const photoPalestraRef = useRef<HTMLDivElement>(null);
  const captionPalestraRef = useRef<HTMLParagraphElement>(null);
  const photoCongressoRef = useRef<HTMLDivElement>(null);
  const captionCongressoRef = useRef<HTMLParagraphElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      if (!sectionRef.current) return;
      const ctx = gsap.context(() => {
        gsap.set(
          [
            eyebrowRef.current,
            headlineRef.current,
            captionPalestraRef.current,
            captionCongressoRef.current,
            paragraphRef.current,
            noteRef.current,
          ],
          { opacity: 0, y: 32 }
        );
        gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.set([photoPalestraRef.current, photoCongressoRef.current], { opacity: 0, scale: 1.06 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: "+=160%",
              invalidateOnRefresh: true,
            },
          })
          .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0)
          .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.15)
          .to(dividerRef.current, { scaleX: 1, duration: 0.5 }, 0.9)
          // Foto palestra emerge primeiro — duração longa pra sensação calma de "câmera focando"
          .to(photoPalestraRef.current, { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" }, 1.1)
          .to(captionPalestraRef.current, { opacity: 1, y: 0, duration: 0.5 }, 1.6)
          // Pequeno gap, depois foto congresso emerge igual
          .to(photoCongressoRef.current, { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" }, 2.0)
          .to(captionCongressoRef.current, { opacity: 1, y: 0, duration: 0.5 }, 2.5)
          // Texto + quote no fim
          .to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.6 }, 3.0)
          .to(noteRef.current, { opacity: 1, y: 0, duration: 0.6 }, 3.4);
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reconhecimento"
      className="w-full lg:min-h-screen lg:py-[120px] py-16 overflow-hidden"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[120px]">
        <p
          ref={eyebrowRef}
          className="text-[12px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}
        >
          {reconhecimento.eyebrow}
        </p>
        <h2
          ref={headlineRef}
          className="mt-5 lg:text-[64px] text-[40px] leading-[1.125]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.028em", color: "var(--c-tinta)" }}
        >
          <span className="block">Em palco.</span>
          <span className="block">Em congresso.</span>
        </h2>
        <div ref={dividerRef} className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
        <div className="mt-12 grid grid-cols-2 gap-6">
          <div>
            <div ref={photoPalestraRef} className="relative w-full lg:h-[440px] h-[220px] overflow-hidden">
              <Image
                src={AMANDA_DATA.photoPalestra}
                alt="Palestra Congresso Brasileiro de Dermatologia"
                fill
                quality={100}
                sizes="(min-width: 1024px) 50vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <p
              ref={captionPalestraRef}
              className="mt-3 text-[9px] tracking-[0.11em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}
            >
              PALESTRA  ·  CONGRESSO BRASILEIRO DE DERMATOLOGIA
            </p>
          </div>
          <div>
            <div ref={photoCongressoRef} className="relative w-full lg:h-[440px] h-[220px] overflow-hidden">
              <Image
                src={AMANDA_DATA.photoCongresso}
                alt="Congresso Brasileiro de Dermatologia"
                fill
                quality={100}
                sizes="(min-width: 1024px) 50vw, 50vw"
                className="object-cover object-[center_top]"
              />
            </div>
            <p
              ref={captionCongressoRef}
              className="mt-3 text-[9px] tracking-[0.11em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}
            >
              CONGRESSO BRASILEIRO DE DERMATOLOGIA
            </p>
          </div>
        </div>
        <p
          ref={paragraphRef}
          className="mt-10 text-[17px] leading-[1.65] max-w-[900px]"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}
        >
          {reconhecimento.paragraph}
        </p>
        <p
          ref={noteRef}
          className="mt-6 italic text-[18px] leading-[1.55] max-w-[900px]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}
        >
          “{reconhecimento.note}”
        </p>
      </div>
    </section>
  );
}
