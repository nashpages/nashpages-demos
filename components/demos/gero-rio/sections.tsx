"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeUp, RevealLines } from "./motion";
import { HERO, GASTRONOMIA, DISHES, ESPACO, BAR, LOCAL, RESERVA, NAV } from "./data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const F = "var(--font-fraunces)";
const M = "var(--font-ibm-plex-mono)";
const IN = "var(--font-inter)";
const C = {
  linho: "var(--c-linho)",
  espresso: "var(--c-espresso)",
  salao: "var(--c-salao)",
  bronze: "var(--c-bronze)",
  camel: "var(--c-camel)",
  creme: "var(--c-creme)",
  para: "var(--c-para)",
};

function Eyebrow({ children, color = C.bronze }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{ fontFamily: M, fontWeight: 500, fontSize: 12.5, letterSpacing: "0.2em", textTransform: "uppercase", color }}>
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------- HERO */
export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden" style={{ backgroundColor: C.salao }}>
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={reduce ? undefined : { scale: 1.08 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1], delay: 1.9 }}
      >
        <Image src={HERO.img} alt="Salão do Gero Rio" fill priority quality={95} sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34%]" style={{ background: "linear-gradient(to bottom, rgba(23,17,11,0.62), transparent)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[74%]" style={{ background: "linear-gradient(to top, rgba(23,17,11,0.92), rgba(23,17,11,0.12) 52%, transparent)" }} />

      <nav className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-[clamp(24px,6vw,80px)] py-[clamp(26px,3.4vw,46px)]" style={{ color: C.linho }}>
        <span style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(22px,2vw,27px)" }}>Gero</span>
        <div className="hidden items-center gap-9 md:flex" style={{ fontFamily: IN, fontWeight: 500, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {NAV.map((n, i) => (
            <a key={n} href="#" style={{ color: i === NAV.length - 1 ? C.bronze : C.linho, opacity: i === NAV.length - 1 ? 1 : 0.92 }}>{n}</a>
          ))}
        </div>
        <div className="flex flex-col gap-[5px] md:hidden">
          <span style={{ width: 24, height: 1.5, backgroundColor: C.linho }} />
          <span style={{ width: 24, height: 1.5, backgroundColor: C.linho }} />
          <span style={{ width: 24, height: 1.5, backgroundColor: C.linho }} />
        </div>
      </nav>

      <div className="absolute bottom-[14%] left-[clamp(24px,6vw,80px)] z-20 max-w-[min(640px,86vw)]" style={{ color: C.linho }}>
        <FadeUp delay={2.0}><Eyebrow>{HERO.eyebrow}</Eyebrow></FadeUp>
        <FadeUp delay={2.12}><h1 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(56px,9vw,124px)", lineHeight: 0.98, letterSpacing: "-0.01em", margin: "0.16em 0 0" }}>{HERO.name}</h1></FadeUp>
        <FadeUp delay={2.3}><div style={{ width: 64, height: 2, backgroundColor: C.bronze, margin: "clamp(18px,2vw,26px) 0 clamp(16px,1.6vw,22px)" }} /></FadeUp>
        <FadeUp delay={2.4}><p style={{ fontFamily: IN, fontSize: "clamp(15px,1.3vw,18px)", lineHeight: 1.5, maxWidth: 560, opacity: 0.92 }}>{HERO.tagline}</p></FadeUp>
      </div>

      <FadeUp delay={2.6} className="absolute inset-x-[clamp(24px,6vw,80px)] bottom-[5%] z-20">
        <div className="flex items-center justify-between" style={{ fontFamily: M, fontSize: "clamp(10px,0.9vw,12px)", letterSpacing: "0.12em", textTransform: "uppercase", color: C.linho }}>
          <span style={{ opacity: 0.8 }}>{HERO.address}</span>
          <span style={{ color: C.bronze }}>Role para explorar ↓</span>
        </div>
      </FadeUp>
    </section>
  );
}

/* ---------------------------------------------------------- GASTRONOMIA */
export function Gastronomia() {
  return (
    <section style={{ backgroundColor: C.linho, color: C.espresso }} className="px-[clamp(28px,7vw,100px)] py-[clamp(80px,11vw,132px)]">
      <FadeUp>
        <div className="flex items-center gap-6">
          <span className="whitespace-nowrap"><Eyebrow>{GASTRONOMIA.eyebrow}</Eyebrow></span>
          <span className="h-px flex-1" style={{ backgroundColor: "rgba(181,137,78,0.4)" }} />
        </div>
      </FadeUp>
      <RevealLines
        className="mt-9"
        style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,4.4vw,54px)", lineHeight: 1.12, maxWidth: 1080 }}
        lines={[<>{GASTRONOMIA.lead[0]}<em style={{ color: C.para }}>{GASTRONOMIA.lead[1]}</em>{GASTRONOMIA.lead[2]}</>]}
      />
      <FadeUp delay={0.1}>
        <p className="mt-7" style={{ fontFamily: IN, fontSize: "clamp(15px,1.3vw,17px)", lineHeight: 1.62, color: C.para, maxWidth: 680 }}>{GASTRONOMIA.para}</p>
      </FadeUp>
    </section>
  );
}

/* ----------------------------------------------------------- DEGUSTAÇÃO */
export function Degustacao() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: C.espresso, color: C.linho }} className="px-[clamp(28px,7vw,100px)] py-[clamp(80px,10vw,120px)]">
      <FadeUp>
        <div className="flex items-center gap-6">
          <span className="whitespace-nowrap"><Eyebrow>A Carta — Degustação</Eyebrow></span>
          <span className="h-px flex-1" style={{ backgroundColor: "rgba(181,137,78,0.4)" }} />
        </div>
      </FadeUp>
      <RevealLines
        className="mt-6"
        style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(26px,3.4vw,46px)", lineHeight: 1.08, maxWidth: 940 }}
        lines={[<>Os clássicos da casa, <em>prato a prato</em>.</>]}
      />

      <div className="mt-[clamp(40px,5vw,64px)] flex flex-col gap-12 md:flex-row md:gap-[72px]">
        <div className="md:w-[46%]">
          <div className="md:sticky md:top-[12vh]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px]" style={{ boxShadow: "0 30px 70px -34px rgba(0,0,0,0.85)" }}>
              {DISHES.map((d, i) => (
                <Image
                  key={d.img}
                  src={d.img}
                  alt={d.name}
                  fill
                  quality={95}
                  sizes="(max-width:880px) 90vw, 600px"
                  className="object-cover transition-opacity duration-700 ease-out"
                  style={{ opacity: i === active ? 1 : 0 }}
                  priority={i === 0}
                  loading={i === 0 ? "eager" : undefined}
                />
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%]" style={{ background: "linear-gradient(to top, rgba(23,17,11,0.72), transparent)" }} />
              <div className="absolute bottom-5 left-6 flex items-center gap-3" style={{ fontFamily: M, fontSize: 12 }}>
                <span style={{ color: C.bronze, letterSpacing: "0.2em", textTransform: "uppercase" }}>{DISHES[active].course}</span>
                <span style={{ width: 28, height: 1, backgroundColor: C.bronze }} />
                <span style={{ color: C.creme }}>{String(active + 1).padStart(2, "0")} / 0{DISHES.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[54%]">
          {DISHES.map((d, i) => (
            <div
              key={d.name}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-i={i}
              onMouseEnter={() => setActive(i)}
              className="relative border-t py-[clamp(18px,2.2vw,26px)] pl-7"
              style={{ borderColor: "rgba(201,187,166,0.14)", opacity: i === active ? 1 : 0.42, transition: "opacity 0.5s ease" }}
            >
              <span className="absolute left-0 top-5 bottom-5 w-[2px]" style={{ backgroundColor: i === active ? C.bronze : "transparent", transition: "background-color 0.4s ease" }} />
              <div className="flex items-center gap-3" style={{ fontFamily: M }}>
                <span style={{ color: C.bronze, fontSize: 12 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ color: C.camel, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>{d.course}</span>
              </div>
              <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(22px,2.4vw,28px)", lineHeight: 1.1, marginTop: 10, color: i === active ? C.linho : C.creme, transition: "color 0.4s ease" }}>{d.name}</h3>
              <div style={{ fontFamily: F, fontStyle: "italic", fontSize: 16, color: C.camel, marginTop: 5 }}>{d.it}</div>
              {i === active && (
                <p style={{ fontFamily: IN, fontSize: 15, lineHeight: 1.6, color: C.creme, maxWidth: 520, marginTop: 14 }}>{d.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- O ESPAÇO */
export function OEspaco() {
  const reduce = useReducedMotion();
  const pinRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 880px)", () => {
        const track = trackRef.current;
        if (!track) return;
        const dist = () => track.scrollWidth - window.innerWidth;
        const tween = gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current!,
            start: "top top",
            end: () => "+=" + dist(),
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        return () => { tween.scrollTrigger?.kill(); tween.kill(); };
      });
    }, pinRef);
    return () => ctx.revert();
  }, [reduce]);

  const outerCls = reduce
    ? "flex items-center overflow-x-auto"
    : "flex items-center overflow-x-auto md:h-screen md:overflow-hidden";

  return (
    <section ref={pinRef} className="relative overflow-hidden" style={{ backgroundColor: C.linho, color: C.espresso }}>
      <div className={outerCls} style={{ scrollbarWidth: "none" }}>
        <div ref={trackRef} className="flex h-full w-max items-center gap-[clamp(26px,3vw,46px)] px-[clamp(28px,8vw,120px)] py-20 md:py-0">
          <div className="shrink-0" style={{ width: "min(82vw,460px)" }}>
            <Eyebrow>O Espaço</Eyebrow>
            <h2 className="mt-5" style={{ fontFamily: F, fontWeight: 300, fontSize: "clamp(40px,4.6vw,66px)", lineHeight: 1.04, letterSpacing: "-0.01em" }}>
              Um passeio <em style={{ color: C.para }}>pela casa</em>.
            </h2>
            <div className="mt-7 flex items-center gap-2" style={{ fontFamily: M, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: C.camel }}>
              Role para o lado <span style={{ color: C.bronze }}>→</span>
            </div>
          </div>

          {ESPACO.map((e) => (
            <figure key={e.img} className="shrink-0">
              <div className="relative overflow-hidden rounded-[3px]" style={{ height: "clamp(320px,58vh,470px)", aspectRatio: `${e.w} / ${e.h}`, boxShadow: "0 30px 70px -34px rgba(0,0,0,0.55)" }}>
                <Image src={e.img} alt={e.name} fill quality={95} sizes="(max-width:880px) 72vw, 700px" className="object-cover" loading="eager" />
              </div>
              <figcaption className="mt-4">
                <Eyebrow>{e.label}</Eyebrow>
                <div style={{ fontFamily: F, fontWeight: 600, fontSize: 22, marginTop: 7 }}>{e.name}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- O BAR */
export function OBar() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative flex flex-col overflow-hidden md:flex-row md:items-stretch" style={{ backgroundColor: C.espresso, color: C.linho }}>
      <div className="relative h-[56vh] w-full overflow-hidden md:h-auto md:min-h-[clamp(620px,86vh,860px)] md:w-[46%]">
        <motion.div className="absolute inset-0 will-change-transform" style={{ y, scale: 1.12 }}>
          <Image src={BAR.img} alt="O bar do Gero Rio" fill quality={95} sizes="(max-width:880px) 100vw, 48vw" className="object-cover" loading="eager" />
        </motion.div>
      </div>
      <div className="flex w-full items-center md:w-[54%]">
        <div className="max-w-[600px] px-[clamp(28px,6vw,90px)] py-[clamp(56px,8vw,90px)]">
          <FadeUp><Eyebrow>{BAR.eyebrow}</Eyebrow></FadeUp>
          <RevealLines
            className="mt-4"
            style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(30px,3.6vw,52px)", lineHeight: 1.06 }}
            lines={[<>{BAR.headline[0]}<em>{BAR.headline[1]}</em>{BAR.headline[2]}</>]}
          />
          <FadeUp delay={0.1}><div className="my-6" style={{ width: 56, height: 2, backgroundColor: C.bronze }} /></FadeUp>
          <FadeUp delay={0.15}><p style={{ fontFamily: IN, fontSize: "clamp(15px,1.3vw,17px)", lineHeight: 1.65, color: C.creme }}>{BAR.para}</p></FadeUp>
          <FadeUp delay={0.25}><div className="mt-7" style={{ fontFamily: M, color: C.bronze, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12 }}>{BAR.drinks}</div></FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- LOCALIZAÇÃO */
export function Localizacao() {
  return (
    <section style={{ backgroundColor: C.linho, color: C.espresso }} className="px-[clamp(28px,7vw,100px)] py-[clamp(80px,10vw,120px)]">
      <FadeUp>
        <div className="flex items-center gap-6">
          <span className="whitespace-nowrap"><Eyebrow>{LOCAL.eyebrow}</Eyebrow></span>
          <span className="h-px flex-1" style={{ backgroundColor: "rgba(181,137,78,0.4)" }} />
        </div>
      </FadeUp>
      <FadeUp delay={0.05}>
        <h2 className="mt-6" style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,4vw,50px)", lineHeight: 1.08, maxWidth: 1000 }}>{LOCAL.headline}</h2>
      </FadeUp>

      <div className="mt-[clamp(36px,5vw,60px)] flex flex-col gap-12 md:flex-row md:gap-24">
        <FadeUp delay={0.1} className="md:w-[42%]">
          <Eyebrow>O Endereço</Eyebrow>
          <div className="mt-3" style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(22px,2.4vw,28px)" }}>{LOCAL.address[0]}</div>
          <div className="mt-2" style={{ fontFamily: IN, fontSize: 17, color: C.para }}>{LOCAL.address[1]}</div>
          <div style={{ fontFamily: IN, fontSize: 17, color: C.para }}>{LOCAL.address[2]}</div>
          <a href={LOCAL.mapsHref} target="_blank" rel="noreferrer" className="mt-4 inline-block" style={{ fontFamily: M, color: C.bronze, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12 }}>Ver no mapa →</a>
        </FadeUp>

        <FadeUp delay={0.15} className="md:flex-1">
          <Eyebrow>Horários</Eyebrow>
          <div className="mt-4">
            {LOCAL.hours.map(([day, time]) => (
              <div key={day} className="flex flex-col gap-1 border-t py-[15px] md:flex-row md:items-center md:gap-5" style={{ borderColor: "rgba(30,22,16,0.13)" }}>
                <span className="md:w-[210px]" style={{ fontFamily: IN, fontSize: 16, color: C.espresso }}>{day}</span>
                <span style={{ fontFamily: M, fontSize: 14, color: C.para }}>{time}</span>
              </div>
            ))}
          </div>
          <div className="mt-6" style={{ fontFamily: M, color: C.bronze, fontSize: 13, letterSpacing: "0.04em" }}>{LOCAL.phone}</div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- RESERVA */
export function Reserva() {
  return (
    <section style={{ backgroundColor: C.espresso, color: C.linho }} className="px-[clamp(28px,7vw,100px)] pb-[clamp(40px,5vw,48px)] pt-[clamp(96px,13vw,150px)]">
      <div className="flex flex-col items-center text-center">
        <FadeUp><Eyebrow>{RESERVA.eyebrow}</Eyebrow></FadeUp>
        <FadeUp delay={0.08}><h2 className="mt-6" style={{ fontFamily: F, fontWeight: 300, fontSize: "clamp(38px,5.6vw,62px)", lineHeight: 1.08, maxWidth: 780 }}>{RESERVA.headline}</h2></FadeUp>
        <FadeUp delay={0.16}><div className="mt-7" style={{ width: 56, height: 2, backgroundColor: C.bronze }} /></FadeUp>
        <FadeUp delay={0.22}>
          <a href={RESERVA.phoneHref} className="mt-8 inline-flex items-center rounded-[2px] px-10 py-4 transition-colors duration-300 hover:bg-[#B5894E] hover:text-[#1E1610]" style={{ border: "1px solid var(--c-bronze)", color: C.bronze, fontFamily: IN, fontWeight: 500, fontSize: 14, letterSpacing: "0.02em" }}>{RESERVA.cta}</a>
        </FadeUp>
        <FadeUp delay={0.3}><div className="mt-5" style={{ fontFamily: M, color: C.creme, fontSize: 13, opacity: 0.85 }}>{RESERVA.phone}</div></FadeUp>
      </div>

      <div className="mt-[clamp(80px,11vw,120px)] border-t pt-9" style={{ borderColor: "rgba(201,187,166,0.16)" }}>
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <span style={{ fontFamily: F, fontWeight: 600, fontSize: 24 }}>Gero</span>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2" style={{ fontFamily: M, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.creme, opacity: 0.85 }}>
            {NAV.map((n) => (<a key={n} href="#">{n}</a>))}
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">
          <span style={{ fontFamily: M, fontSize: 10, color: C.creme, opacity: 0.5, letterSpacing: "0.05em" }}>Avenida Vieira Souto, 80 · Ipanema · Rio de Janeiro</span>
          <span style={{ fontFamily: M, fontSize: 10, color: C.bronze, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>Site por Nashpages</span>
        </div>
      </div>
    </section>
  );
}
