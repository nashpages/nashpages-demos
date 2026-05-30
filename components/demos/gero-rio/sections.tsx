"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeUp, RevealLines } from "./motion";
import { HERO, GASTRONOMIA, DISHES, ESPACO, BAR, LOCAL, RESERVA, NAV } from "./data";

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

/** Container central — texto/conteúdo alinhado ao "frame" de 1440 (estilo Apple/Figma). */
function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-[clamp(28px,6vw,80px)] ${className}`}>{children}</div>;
}

function Eyebrow({ children, color = C.bronze }: { children: ReactNode; color?: string }) {
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

      <div className="absolute inset-0 z-20 mx-auto flex h-full w-full max-w-[1440px] flex-col px-[clamp(24px,6vw,80px)] py-[clamp(26px,3.4vw,46px)]" style={{ color: C.linho }}>
        <FadeUp delay={1.95}>
          <nav className="flex items-center justify-between">
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
        </FadeUp>

        <div className="mt-auto">
          <div className="max-w-[640px]">
            <FadeUp delay={2.0}><Eyebrow>{HERO.eyebrow}</Eyebrow></FadeUp>
            <FadeUp delay={2.12}><h1 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(56px,8vw,118px)", lineHeight: 0.98, letterSpacing: "-0.01em", margin: "0.16em 0 0" }}>{HERO.name}</h1></FadeUp>
            <FadeUp delay={2.3}><div style={{ width: 64, height: 2, backgroundColor: C.bronze, margin: "clamp(18px,2vw,26px) 0 clamp(16px,1.6vw,22px)" }} /></FadeUp>
            <FadeUp delay={2.4}><p style={{ fontFamily: IN, fontSize: "clamp(15px,1.2vw,18px)", lineHeight: 1.5, maxWidth: 540, opacity: 0.92 }}>{HERO.tagline}</p></FadeUp>
          </div>
          <FadeUp delay={2.6}>
            <div className="mt-[clamp(34px,5vh,64px)] flex items-center justify-between" style={{ fontFamily: M, fontSize: "clamp(10px,0.85vw,12px)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              <span style={{ opacity: 0.8 }}>{HERO.address}</span>
              <span style={{ color: C.bronze }}>Role para explorar ↓</span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- GASTRONOMIA */
export function Gastronomia() {
  return (
    <section style={{ backgroundColor: C.linho, color: C.espresso }} className="py-[clamp(80px,11vw,132px)]">
      <Container>
        <FadeUp>
          <div className="flex items-center gap-6">
            <span className="whitespace-nowrap"><Eyebrow>{GASTRONOMIA.eyebrow}</Eyebrow></span>
            <span className="h-px flex-1" style={{ backgroundColor: "rgba(181,137,78,0.4)" }} />
          </div>
        </FadeUp>
        <RevealLines
          className="mt-9"
          style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,4vw,52px)", lineHeight: 1.12, maxWidth: 1040 }}
          lines={[<>{GASTRONOMIA.lead[0]}<em style={{ color: C.para }}>{GASTRONOMIA.lead[1]}</em>{GASTRONOMIA.lead[2]}</>]}
        />
        <FadeUp delay={0.1}>
          <p className="mt-7" style={{ fontFamily: IN, fontSize: "clamp(15px,1.2vw,17px)", lineHeight: 1.62, color: C.para, maxWidth: 680 }}>{GASTRONOMIA.para}</p>
        </FadeUp>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- DEGUSTAÇÃO (pin + scroll troca os pratos) */
export function Degustacao() {
  const reduce = useReducedMotion();
  const outerRef = useRef<HTMLElement | null>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Sem "pin" do GSAP: o conteúdo fica preso pelo position:sticky nativo do browser
  // (não há tranco/puxada ao grudar). O scroll só decide qual prato está ativo.
  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });

  useEffect(() => {
    if (reduce) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    // Desktop: o progresso do scroll na seção alta escolhe o prato.
    const unsub = scrollYProgress.on("change", (p) => {
      if (!desktop.matches) return;
      const i = Math.min(DISHES.length - 1, Math.floor(p * DISHES.length));
      if (i !== activeRef.current) {
        activeRef.current = i;
        setActive(i);
      }
    });
    // Mobile: troca por IntersectionObserver na lista (foto sticky no topo).
    let io: IntersectionObserver | null = null;
    if (!desktop.matches) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); }),
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      itemRefs.current.forEach((el) => el && io!.observe(el));
    }
    return () => {
      unsub();
      io?.disconnect();
    };
  }, [reduce, scrollYProgress]);

  const dish = DISHES[active];

  return (
    <section ref={outerRef} style={{ backgroundColor: C.espresso, color: C.linho }} className={`relative ${reduce ? "" : "md:h-[520vh]"}`}>
      <div className={`flex flex-col py-[clamp(72px,10vw,110px)] md:justify-center md:py-0 ${reduce ? "" : "md:sticky md:top-0 md:h-screen"}`}>
        <Container>
          <div className="flex items-center gap-6">
            <span className="whitespace-nowrap"><Eyebrow>A Carta — Degustação</Eyebrow></span>
            <span className="h-px flex-1" style={{ backgroundColor: "rgba(181,137,78,0.4)" }} />
          </div>
          <h2 className="mt-5" style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(26px,3vw,42px)", lineHeight: 1.08 }}>
            Os clássicos da casa, <em>prato a prato</em>.
          </h2>

          <div className="mt-[clamp(28px,3vw,44px)] flex flex-col gap-10 md:flex-row md:items-start md:gap-[64px]">
            <div className="md:w-[48%]">
              <div className="sticky top-[10vh] md:static">
                <div className="relative w-full overflow-hidden rounded-[3px]" style={{ height: "clamp(320px,50vh,500px)", boxShadow: "0 30px 70px -34px rgba(0,0,0,0.85)" }}>
                  {DISHES.map((d, i) => (
                    <Image
                      key={d.img}
                      src={d.img}
                      alt={d.name}
                      fill
                      quality={95}
                      sizes="(max-width:880px) 90vw, 600px"
                      className="object-cover transition-opacity duration-[900ms] ease-out"
                      style={{ opacity: i === active ? 1 : 0 }}
                      priority={i === 0}
                      loading={i === 0 ? "eager" : undefined}
                    />
                  ))}
                </div>
                {/* trilha de progresso contínua — move-se com o scroll durante o pin (desktop) */}
                <div className="mt-5 hidden h-px w-full md:block" style={{ backgroundColor: "rgba(201,187,166,0.16)" }}>
                  <motion.span className="block h-full origin-left will-change-transform" style={{ backgroundColor: C.bronze, scaleX: reduce ? 1 : scrollYProgress }} />
                </div>
                <motion.div
                  key={active}
                  initial={reduce ? undefined : { opacity: 0, y: 8 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5"
                >
                  <div style={{ fontFamily: M, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.bronze }}>{dish.course} · {String(active + 1).padStart(2, "0")} / 0{DISHES.length}</div>
                  <div style={{ fontFamily: F, fontStyle: "italic", fontSize: 17, color: C.camel, marginTop: 8 }}>{dish.it}</div>
                  <p style={{ fontFamily: IN, fontSize: 15, lineHeight: 1.6, color: C.creme, maxWidth: 460, marginTop: 6 }}>{dish.desc}</p>
                </motion.div>
              </div>
            </div>

            <div className="md:w-[52%]">
              {DISHES.map((d, i) => (
                <div
                  key={d.name}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  data-i={i}
                  className="relative border-t py-[clamp(13px,1.5vw,18px)] pl-7"
                  style={{ borderColor: "rgba(201,187,166,0.14)", opacity: i === active ? 1 : 0.4, transition: "opacity 0.5s ease" }}
                >
                  <span className="absolute left-0 top-1/2 h-[58%] w-[2px] -translate-y-1/2" style={{ backgroundColor: i === active ? C.bronze : "transparent", transition: "background-color 0.4s ease" }} />
                  <div className="flex items-baseline gap-3">
                    <span style={{ fontFamily: M, fontSize: 11, color: C.bronze }}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(19px,2vw,25px)", lineHeight: 1.15, color: i === active ? C.linho : C.creme, transition: "color 0.4s ease" }}>{d.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- O ESPAÇO (galeria horizontal full-bleed) */
export function OEspaco() {
  const reduce = useReducedMotion();
  const outerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const distRef = useRef(0);
  const isDesktopRef = useRef(false);
  const [outerH, setOuterH] = useState<number | null>(null);

  // Sem "pin" do GSAP: o trecho fica preso por position:sticky nativo (zero tranco)
  // e a faixa desliza na horizontal conforme o progresso do scroll.
  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (p) => (reduce || !isDesktopRef.current ? 0 : -p * distRef.current));

  useEffect(() => {
    if (reduce) return;
    const measure = () => {
      const desktop = window.matchMedia("(min-width: 768px)").matches;
      isDesktopRef.current = desktop;
      const track = trackRef.current;
      const d = track ? Math.max(0, track.scrollWidth - window.innerWidth) : 0;
      distRef.current = d;
      setOuterH(desktop ? window.innerHeight + d : null);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reduce]);

  const innerCls = reduce
    ? "flex items-center overflow-x-auto"
    : "flex items-center overflow-x-auto md:sticky md:top-0 md:h-screen md:overflow-hidden";

  return (
    <section ref={outerRef} className="relative overflow-x-clip" style={{ backgroundColor: C.linho, color: C.espresso, height: outerH ? `${outerH}px` : undefined }}>
      <div className={innerCls} style={{ scrollbarWidth: "none" }}>
        <motion.div ref={trackRef} style={reduce ? undefined : { x }} className="flex h-full w-max items-center gap-[clamp(26px,3vw,46px)] px-[clamp(28px,8vw,120px)] py-20 md:py-0">
          <div className="shrink-0" style={{ width: "min(82vw,460px)" }}>
            <Eyebrow>O Espaço</Eyebrow>
            <h2 className="mt-5" style={{ fontFamily: F, fontWeight: 300, fontSize: "clamp(40px,4.4vw,66px)", lineHeight: 1.04, letterSpacing: "-0.01em" }}>
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
        </motion.div>
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
    <section ref={ref} className="relative overflow-hidden md:min-h-[clamp(620px,86vh,860px)]" style={{ backgroundColor: C.espresso, color: C.linho }}>
      <div className="relative h-[56vh] w-full overflow-hidden md:absolute md:left-0 md:top-0 md:h-full md:w-[46vw]">
        <motion.div className="absolute inset-0 will-change-transform" style={{ y, scale: 1.12 }}>
          <Image src={BAR.img} alt="O bar do Gero Rio" fill quality={95} sizes="(max-width:880px) 100vw, 47vw" className="object-cover" loading="eager" />
        </motion.div>
      </div>
      <Container className="relative flex md:min-h-[clamp(620px,86vh,860px)] md:items-center">
        <div className="w-full md:ml-[50%] md:w-[46%]">
          <div className="max-w-[520px] py-[clamp(52px,8vw,96px)] md:py-0">
            <FadeUp><Eyebrow>{BAR.eyebrow}</Eyebrow></FadeUp>
            <RevealLines
              className="mt-4"
              style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(30px,3.4vw,50px)", lineHeight: 1.06 }}
              lines={[<>{BAR.headline[0]}<em>{BAR.headline[1]}</em>{BAR.headline[2]}</>]}
            />
            <FadeUp delay={0.1}><div className="my-6" style={{ width: 56, height: 2, backgroundColor: C.bronze }} /></FadeUp>
            <FadeUp delay={0.15}><p style={{ fontFamily: IN, fontSize: "clamp(15px,1.2vw,17px)", lineHeight: 1.65, color: C.creme }}>{BAR.para}</p></FadeUp>
            <FadeUp delay={0.25}><div className="mt-7" style={{ fontFamily: M, color: C.bronze, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12 }}>{BAR.drinks}</div></FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------- LOCALIZAÇÃO */
export function Localizacao() {
  return (
    <section style={{ backgroundColor: C.linho, color: C.espresso }} className="py-[clamp(80px,10vw,120px)]">
      <Container>
        <FadeUp>
          <div className="flex items-center gap-6">
            <span className="whitespace-nowrap"><Eyebrow>{LOCAL.eyebrow}</Eyebrow></span>
            <span className="h-px flex-1" style={{ backgroundColor: "rgba(181,137,78,0.4)" }} />
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-6" style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.6vw,50px)", lineHeight: 1.08, maxWidth: 1000 }}>{LOCAL.headline}</h2>
        </FadeUp>

        <div className="mt-[clamp(36px,5vw,60px)] flex flex-col gap-12 md:flex-row md:gap-24">
          <FadeUp delay={0.1} className="md:w-[42%]">
            <Eyebrow>O Endereço</Eyebrow>
            <div className="mt-3" style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(22px,2.2vw,28px)" }}>{LOCAL.address[0]}</div>
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
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- RESERVA */
export function Reserva() {
  return (
    <section style={{ backgroundColor: C.espresso, color: C.linho }} className="pb-[clamp(40px,5vw,48px)] pt-[clamp(96px,13vw,150px)]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <FadeUp><Eyebrow>{RESERVA.eyebrow}</Eyebrow></FadeUp>
          <FadeUp delay={0.08}><h2 className="mt-6" style={{ fontFamily: F, fontWeight: 300, fontSize: "clamp(38px,5vw,62px)", lineHeight: 1.08, maxWidth: 780 }}>{RESERVA.headline}</h2></FadeUp>
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
      </Container>
    </section>
  );
}
