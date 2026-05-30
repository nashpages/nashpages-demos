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
  return <div className={`mx-auto w-full max-w-[1440px] px-[clamp(28px,7vw,100px)] ${className}`}>{children}</div>;
}

function Eyebrow({ children, color = C.bronze, size = 13, tracking = "0.2em" }: { children: ReactNode; color?: string; size?: number; tracking?: string }) {
  return (
    <span style={{ fontFamily: M, fontWeight: 500, fontSize: size, letterSpacing: tracking, textTransform: "uppercase", color }}>
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
            <span style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(22px,2vw,26px)" }}>Gero</span>
            <div className="hidden items-center gap-[34px] md:flex" style={{ fontFamily: IN, fontWeight: 500, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              {NAV.map((n, i) => (
                <a key={n} href="#" style={{ color: i === NAV.length - 1 ? C.bronze : C.linho }}>{n}</a>
              ))}
            </div>
            <div className="flex flex-col gap-[5px] md:hidden">
              <span style={{ width: 24, height: 1.5, backgroundColor: C.linho }} />
              <span style={{ width: 24, height: 1.5, backgroundColor: C.linho }} />
              <span style={{ width: 24, height: 1.5, backgroundColor: C.linho }} />
            </div>
          </nav>
        </FadeUp>
        <FadeUp delay={1.98}>
          <div className="mt-[22px] h-px w-full" style={{ backgroundColor: "rgba(244,237,225,0.2)" }} />
        </FadeUp>

        <div className="mt-auto">
          <div className="flex max-w-[700px] flex-col gap-[22px]">
            <FadeUp delay={2.0}>
              <p className="text-[11px] tracking-[1.6px] md:text-[14px] md:tracking-[2px]" style={{ fontFamily: M, fontWeight: 500, textTransform: "uppercase", color: C.bronze }}>
                <span className="md:hidden">Cucina Italiana · Ipanema</span>
                <span className="hidden md:inline">{HERO.eyebrow}</span>
              </p>
            </FadeUp>
            <FadeUp delay={2.12}><h1 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(58px,9vw,120px)", lineHeight: 0.98, letterSpacing: "-0.01em", margin: 0 }}>{HERO.name}</h1></FadeUp>
            <FadeUp delay={2.3}><div style={{ width: 64, height: 2, backgroundColor: C.bronze }} /></FadeUp>
            <FadeUp delay={2.4}>
              <p style={{ fontFamily: IN, fontSize: "clamp(15px,1.3vw,18px)", lineHeight: 1.5, maxWidth: 700, opacity: 0.92 }}>
                <span className="md:hidden">Clássicos italianos à beira-mar de Ipanema, no Hotel Fasano.</span>
                <span className="hidden md:inline">{HERO.tagline}</span>
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={2.55}>
            <div className="mt-[clamp(32px,5vh,60px)] h-px w-full" style={{ backgroundColor: "rgba(244,237,225,0.2)" }} />
          </FadeUp>
          <FadeUp delay={2.6}>
            <div className="mt-[22px] flex items-center justify-between" style={{ fontFamily: M, fontSize: "clamp(10px,0.85vw,12px)", letterSpacing: "1.2px", textTransform: "uppercase" }}>
              <span style={{ opacity: 0.8 }}>
                <span className="md:hidden">Av. Vieira Souto, 80</span>
                <span className="hidden md:inline">{HERO.address}</span>
              </span>
              <span style={{ color: C.bronze }}>
                <span className="md:hidden">Role ↓</span>
                <span className="hidden md:inline">Role para explorar ↓</span>
              </span>
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
          className="mt-10"
          style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,4vw,54px)", lineHeight: 1.1, maxWidth: 1080 }}
          lines={[<>{GASTRONOMIA.lead[0]}<em>{GASTRONOMIA.lead[1]}</em>{GASTRONOMIA.lead[2]}</>]}
        />
        <FadeUp delay={0.1}>
          <p className="mt-10" style={{ fontFamily: IN, fontSize: "clamp(15px,1.2vw,17px)", lineHeight: 1.6, color: C.para, maxWidth: 720 }}>{GASTRONOMIA.para}</p>
        </FadeUp>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- DEGUSTAÇÃO (a tela TRAVA e o scroll percorre os pratos) */
export function Degustacao() {
  const reduce = useReducedMotion();
  const outerRef = useRef<HTMLElement | null>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Desktop: a seção TRAVA (position:sticky nativo, sem tranco) e o scroll percorre os 7 pratos.
  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });

  useEffect(() => {
    if (reduce) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    const unsub = scrollYProgress.on("change", (p) => {
      if (!desktop.matches) return;
      const i = Math.min(DISHES.length - 1, Math.floor(p * DISHES.length));
      if (i !== activeRef.current) {
        activeRef.current = i;
        setActive(i);
      }
    });
    // Mobile: foto sticky no topo + lista rola; troca por IntersectionObserver.
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
    <>
      {/* ===== MOBILE: cardápio visual — cada prato com a sua foto, scroll natural ===== */}
      <section className="md:hidden py-[80px]" style={{ backgroundColor: C.espresso, color: C.linho }}>
        <Container>
          <div className="flex items-center gap-5">
            <span className="whitespace-nowrap"><Eyebrow size={12}>A Carta — Degustação</Eyebrow></span>
            <span className="h-px flex-1" style={{ backgroundColor: "rgba(181,137,78,0.4)" }} />
          </div>
          <h2 className="mt-5" style={{ fontFamily: F, fontWeight: 600, fontSize: 30, lineHeight: 1.08 }}>
            Os clássicos da casa, <em>prato a prato</em>.
          </h2>

          <div className="mt-10 flex flex-col gap-[44px]">
            {DISHES.map((d, i) => (
              <article key={d.name}>
                <div className="relative w-full overflow-hidden rounded-[3px] aspect-[3/2]" style={{ boxShadow: "0 24px 60px -34px rgba(0,0,0,0.8)" }}>
                  <Image src={d.img} alt={d.name} fill quality={95} sizes="calc(100vw - 56px)" className="object-cover" loading="eager" />
                </div>
                <div className="mt-4 flex items-center gap-3" style={{ fontFamily: M, textTransform: "uppercase" }}>
                  <span style={{ fontSize: 12, color: C.bronze }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: 11, letterSpacing: "2.2px", color: C.camel }}>{d.course}</span>
                </div>
                <h3 className="mt-[7px]" style={{ fontFamily: F, fontWeight: 600, fontSize: 23, lineHeight: 1.1 }}>{d.name}</h3>
                <div className="mt-[5px]" style={{ fontFamily: F, fontStyle: "italic", fontSize: 16, color: C.camel }}>{d.it}</div>
                <p className="mt-[9px]" style={{ fontFamily: IN, fontSize: 15, lineHeight: 1.58, color: C.creme }}>{d.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== DESKTOP: a tela TRAVA e o scroll percorre os pratos ===== */}
      <section ref={outerRef} style={{ backgroundColor: C.espresso, color: C.linho }} className={`relative hidden md:block ${reduce ? "" : "md:h-[520vh]"}`}>
        <div className={`flex flex-col py-0 ${reduce ? "" : "md:sticky md:top-0 md:h-screen md:justify-center md:overflow-hidden"}`}>
          <Container>
            <div className="flex items-center gap-6">
              <span className="whitespace-nowrap"><Eyebrow>A Carta — Degustação</Eyebrow></span>
              <span className="h-px flex-1" style={{ backgroundColor: "rgba(181,137,78,0.4)" }} />
            </div>
            <h2 className="mt-5" style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(26px,3vw,42px)", lineHeight: 1.06 }}>
              Os clássicos da casa, <em>prato a prato</em>.
            </h2>

            <div className="mt-[clamp(24px,3vh,40px)] flex flex-row items-start gap-[clamp(40px,5vw,72px)]">
              <div className="shrink-0">
                {/* RETRATO — altura manda (clamp vh) + largura deriva de 56/70. */}
                <div className="relative overflow-hidden rounded-[3px]" style={{ height: "clamp(320px,54vh,560px)", aspectRatio: "56 / 70", boxShadow: "0 30px 70px -34px rgba(0,0,0,0.85)" }}>
                  {DISHES.map((d, i) => (
                    <Image
                      key={d.img}
                      src={d.img}
                      alt={d.name}
                      fill
                      quality={95}
                      sizes="448px"
                      className="object-cover transition-opacity duration-[800ms] ease-out"
                      style={{ opacity: i === active ? 1 : 0 }}
                      priority={i === 0}
                      loading={i === 0 ? "eager" : undefined}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2" style={{ fontFamily: M, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase" }}>
                  <span style={{ color: C.bronze }}>{dish.course}</span>
                  <span style={{ color: C.camel }}>· {String(active + 1).padStart(2, "0")} / 0{DISHES.length}</span>
                </div>
              </div>

              <div className="flex-1">
                {DISHES.map((d, i) => (
                  <div
                    key={d.name}
                    className="relative border-t py-[clamp(8px,1.15vh,13px)] pl-[22px]"
                    style={{ borderColor: "rgba(201,187,166,0.14)", opacity: i === active ? 1 : 0.4, transition: "opacity 0.5s ease" }}
                  >
                    <span className="absolute bottom-[12px] left-0 top-[12px] w-[2px]" style={{ backgroundColor: i === active ? C.bronze : "transparent", transition: "background-color 0.4s ease" }} />
                    <div className="flex items-center gap-3" style={{ fontFamily: M, textTransform: "uppercase" }}>
                      <span style={{ fontSize: 12, color: C.bronze }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ fontSize: 11, letterSpacing: "2.2px", color: C.camel }}>{d.course}</span>
                    </div>
                    <h3 className="mt-[6px]" style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(19px,1.7vw,23px)", lineHeight: 1.1, color: i === active ? C.linho : C.creme, transition: "color 0.4s ease" }}>{d.name}</h3>
                    <div className="mt-[4px]" style={{ fontFamily: F, fontStyle: "italic", fontSize: 16, color: C.camel }}>{d.it}</div>
                    <div className="overflow-hidden" style={{ maxHeight: i === active ? 76 : 0, opacity: i === active ? 1 : 0, transition: "max-height 0.5s ease, opacity 0.5s ease" }}>
                      <p className="pt-[8px]" style={{ fontFamily: IN, fontSize: 15, lineHeight: 1.55, color: C.creme, maxWidth: 520 }}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
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
  const [idx, setIdx] = useState(0);

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
    const unsub = scrollYProgress.on("change", (p) => {
      setIdx(Math.min(ESPACO.length - 1, Math.max(0, Math.floor(p * ESPACO.length))));
    });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      unsub();
    };
  }, [reduce, scrollYProgress]);

  const innerCls = reduce
    ? "flex items-center overflow-x-auto"
    : "flex items-center overflow-x-auto md:sticky md:top-0 md:h-screen md:overflow-hidden";

  return (
    <section ref={outerRef} className="relative overflow-x-clip" style={{ backgroundColor: C.linho, color: C.espresso, height: outerH ? `${outerH}px` : undefined }}>
      {/* MOBILE: carrossel de ARRASTAR (scroll-snap nativo) — mantém a seção curta */}
      <div className="py-[80px] md:hidden">
        <div className="flex flex-col gap-2 px-[28px]">
          <Eyebrow>O Espaço</Eyebrow>
          <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: 30, lineHeight: 1.06, color: C.espresso }}>Um passeio pela casa.</h2>
          <div className="mt-1 flex items-center gap-2" style={{ fontFamily: M, fontSize: 12, letterSpacing: "1.8px", textTransform: "uppercase", color: C.camel }}>
            Arraste para o lado <span style={{ color: C.bronze }}>→</span>
          </div>
        </div>
        <div
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[28px] pb-2 scroll-px-[28px] [-webkit-overflow-scrolling:touch] [scrollbar-width:none]"
        >
          {ESPACO.map((e) => (
            <figure key={e.img} className="shrink-0 snap-start" style={{ width: "82vw", maxWidth: 360 }}>
              <div className="relative w-full overflow-hidden rounded-[3px]" style={{ aspectRatio: "334 / 300", boxShadow: "0 24px 60px -34px rgba(0,0,0,0.4)" }}>
                <Image src={e.img} alt={e.name} fill quality={95} sizes="82vw" className="object-cover" loading="eager" />
              </div>
              <figcaption className="mt-[14px]">
                <Eyebrow size={12} tracking="2.2px">{e.label}</Eyebrow>
                <div style={{ fontFamily: F, fontWeight: 600, fontSize: 22, marginTop: 6 }}>{e.name}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* DESKTOP: galeria HORIZONTAL pinada (sticky nativo) */}
      <div className="hidden md:block">
        <div className={innerCls} style={{ scrollbarWidth: "none" }}>
          <motion.div ref={trackRef} style={reduce ? undefined : { x }} className="flex h-full w-max items-center gap-[clamp(26px,3vw,46px)] px-[clamp(28px,6vw,80px)] py-20 md:py-0">
            <div className="flex shrink-0 flex-col gap-[22px]" style={{ width: "min(82vw,430px)" }}>
              <Eyebrow>O Espaço</Eyebrow>
              <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(36px,3.6vw,48px)", lineHeight: 1.04, letterSpacing: "-0.01em", color: C.espresso }}>
                Um passeio pela casa.
              </h2>
              <div style={{ fontFamily: M, fontSize: 12, letterSpacing: "1.8px", textTransform: "uppercase", color: C.camel }}>
                Role para o lado →
              </div>
            </div>

            {ESPACO.map((e) => (
              <figure key={e.img} className="shrink-0">
                <div className="relative overflow-hidden rounded-[3px]" style={{ height: "clamp(320px,58vh,470px)", aspectRatio: `${e.w} / ${e.h}`, boxShadow: "0 30px 70px -34px rgba(0,0,0,0.55)" }}>
                  <Image src={e.img} alt={e.name} fill quality={95} sizes="700px" className="object-cover" loading="eager" />
                </div>
                <figcaption className="mt-[18px]">
                  <Eyebrow size={12} tracking="2.2px">{e.label}</Eyebrow>
                  <div style={{ fontFamily: F, fontWeight: 600, fontSize: 23, marginTop: 7 }}>{e.name}</div>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
        {!reduce && (
          <div className="absolute inset-x-0 bottom-[6vh] z-10 hidden items-center gap-[18px] px-[clamp(28px,6vw,80px)] md:flex" style={{ fontFamily: M }}>
            <span style={{ fontSize: 12, letterSpacing: "1.5px", color: C.para }}>{String(idx + 1).padStart(2, "0")} / 0{ESPACO.length}</span>
            <span className="h-px flex-1" style={{ backgroundColor: "rgba(181,137,78,0.35)" }} />
            <span style={{ fontSize: 11, letterSpacing: "2px", color: C.bronze, textTransform: "uppercase" }}>O Espaço</span>
          </div>
        )}
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
      <div className="relative h-[56vh] w-full overflow-hidden md:absolute md:left-0 md:top-0 md:h-full md:w-[43vw]">
        <motion.div className="absolute inset-0 will-change-transform" style={{ y, scale: 1.12 }}>
          <Image src={BAR.img} alt="O bar do Gero Rio" fill quality={95} sizes="(max-width:880px) 100vw, 44vw" className="object-cover" loading="eager" />
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[150px] md:block" style={{ background: "linear-gradient(to right, rgba(30,22,16,0), var(--c-espresso))" }} />
      </div>
      <Container className="relative flex md:min-h-[clamp(620px,86vh,860px)] md:items-center">
        <div className="w-full md:ml-[50%] md:w-[46%]">
          <div className="max-w-[520px] py-[clamp(52px,8vw,96px)] md:py-0">
            <FadeUp><Eyebrow>{BAR.eyebrow}</Eyebrow></FadeUp>
            <RevealLines
              className="mt-4"
              style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(30px,3.6vw,52px)", lineHeight: 1.06 }}
              lines={[<>{BAR.headline[0]}<em>{BAR.headline[1]}</em>{BAR.headline[2]}</>]}
            />
            <FadeUp delay={0.1}><div className="my-6" style={{ width: 56, height: 2, backgroundColor: C.bronze }} /></FadeUp>
            <FadeUp delay={0.15}><p style={{ fontFamily: IN, fontSize: "clamp(15px,1.2vw,17px)", lineHeight: 1.65, color: C.creme }}>{BAR.para}</p></FadeUp>
            <FadeUp delay={0.25}><div className="mt-7" style={{ fontFamily: M, color: C.bronze, letterSpacing: "2px", textTransform: "uppercase", fontSize: 12 }}>{BAR.drinks}</div></FadeUp>
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
          <h2 className="mt-[clamp(28px,4vw,46px)]" style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.6vw,50px)", lineHeight: 1.06, maxWidth: 1000 }}>{LOCAL.headline}</h2>
        </FadeUp>

        <div className="mt-[clamp(36px,4vw,46px)] flex flex-col gap-12 md:flex-row md:gap-24">
          <FadeUp delay={0.1} className="md:w-[42%]">
            <Eyebrow size={12} tracking="2.4px">O Endereço</Eyebrow>
            <div className="mt-3" style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(22px,2.2vw,28px)" }}>{LOCAL.address[0]}</div>
            <div className="mt-2" style={{ fontFamily: IN, fontSize: 17, color: C.para }}>{LOCAL.address[1]}</div>
            <div style={{ fontFamily: IN, fontSize: 17, color: C.para }}>{LOCAL.address[2]}</div>
            <a href={LOCAL.mapsHref} target="_blank" rel="noreferrer" className="mt-4 inline-block" style={{ fontFamily: M, color: C.bronze, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12 }}>Ver no mapa →</a>
          </FadeUp>

          <FadeUp delay={0.15} className="md:flex-1">
            <Eyebrow size={12} tracking="2.4px">Horários</Eyebrow>
            <div className="mt-4">
              {LOCAL.hours.map(([day, time]) => (
                <div key={day} className="flex flex-col gap-1 border-t py-[15px] md:flex-row md:items-center md:gap-5" style={{ borderColor: "rgba(30,22,16,0.13)" }}>
                  <span className="md:w-[180px]" style={{ fontFamily: IN, fontSize: 16, color: C.espresso }}>{day}</span>
                  <span style={{ fontFamily: M, fontSize: 14, color: C.para }}>{time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6" style={{ fontFamily: M, color: C.bronze, fontSize: 13, letterSpacing: "1.2px" }}>{LOCAL.phone}</div>
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
          <FadeUp delay={0.08}><h2 className="mt-6" style={{ fontFamily: F, fontWeight: 300, fontSize: "clamp(38px,5vw,62px)", lineHeight: 1.06, maxWidth: 780 }}>{RESERVA.headline}</h2></FadeUp>
          <FadeUp delay={0.16}><div className="mt-7" style={{ width: 56, height: 2, backgroundColor: C.bronze }} /></FadeUp>
          <FadeUp delay={0.22}>
            <a href={RESERVA.phoneHref} className="mt-8 inline-flex items-center rounded-[2px] px-[42px] py-[17px] transition-colors duration-300 hover:bg-[#B5894E] hover:text-[#1E1610]" style={{ border: "1px solid var(--c-bronze)", color: C.bronze, fontFamily: IN, fontWeight: 500, fontSize: 14, letterSpacing: "0.6px" }}>{RESERVA.cta}</a>
          </FadeUp>
          <FadeUp delay={0.3}><div className="mt-5" style={{ fontFamily: M, color: C.creme, fontSize: 13, opacity: 0.85 }}>{RESERVA.phone}</div></FadeUp>
        </div>

        <div className="mt-[clamp(80px,11vw,120px)] border-t pt-9" style={{ borderColor: "rgba(201,187,166,0.16)" }}>
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
            <span style={{ fontFamily: F, fontWeight: 600, fontSize: 24 }}>Gero</span>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2" style={{ fontFamily: M, fontWeight: 500, fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", color: C.creme, opacity: 0.85 }}>
              {NAV.map((n) => (<a key={n} href="#">{n}</a>))}
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">
            <span style={{ fontFamily: M, fontSize: 11, color: C.creme, opacity: 0.5, letterSpacing: "0.5px" }}>Avenida Vieira Souto, 80 · Ipanema · Rio de Janeiro</span>
            <span style={{ fontFamily: M, fontSize: 11, color: C.bronze, letterSpacing: "1.5px", textTransform: "uppercase", opacity: 0.8 }}>Site por Nashpages</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
