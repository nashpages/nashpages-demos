"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { RevealLines } from "./motion";
import { MaskReveal } from "./MaskReveal";
import { CYRELA_DATA } from "./data";

const fInter = "var(--font-inter)";
const fBodoni = "var(--font-bodoni-moda)";

const eyebrowSt: React.CSSProperties = {
  fontFamily: fInter,
  fontWeight: 500,
  fontSize: "12px",
  letterSpacing: "0.16em",
  color: "var(--c-rosso)",
};
const labelSt: React.CSSProperties = {
  fontFamily: fInter,
  fontWeight: 500,
  fontSize: "11px",
  letterSpacing: "0.14em",
  color: "var(--c-fumo)",
};
const bodySt: React.CSSProperties = {
  fontFamily: fInter,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: 1.7,
  color: "var(--c-fumo)",
};
const headSt: React.CSSProperties = {
  fontFamily: fBodoni,
  fontWeight: 500,
  color: "var(--c-tinta)",
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
};
const serifValueSt: React.CSSProperties = {
  fontFamily: fBodoni,
  fontWeight: 400,
  color: "var(--c-tinta)",
};
const hair = "1px solid var(--c-linha)";
const tickSt: React.CSSProperties = {
  display: "block",
  width: 30,
  height: 2,
  backgroundColor: "var(--c-rosso)",
};

const Dot = () => <span style={{ color: "var(--c-rosso)" }}>.</span>;
const SHELL = "mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[100px]";

function CtaButton({ href, children }: { href: string; children: ReactNode }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      data-cursor
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="inline-flex items-center justify-center"
      style={{
        fontFamily: fInter,
        fontWeight: 500,
        fontSize: "13px",
        letterSpacing: "0.12em",
        color: h ? "var(--c-branco)" : "var(--c-rosso)",
        backgroundColor: h ? "var(--c-rosso)" : "transparent",
        border: "1.5px solid var(--c-rosso)",
        padding: "20px 44px",
        transition: "background-color .3s ease, color .3s ease",
      }}
    >
      {children}
    </a>
  );
}

/* ── 01 · HERO ──────────────────────────────────────────────────────────── */
export function Hero() {
  const d = CYRELA_DATA.hero;
  return (
    <section id="top" className="relative">
      <div className={`${SHELL} pt-36 pb-20 text-center md:pt-44 md:pb-28`}>
        <RevealFadeUp>
          <span style={eyebrowSt}>{d.eyebrow}</span>
        </RevealFadeUp>
        <RevealLines
          className="mt-6 text-[44px] leading-none sm:text-[64px] lg:text-[84px]"
          style={headSt}
          delay={0.05}
          lines={[
            <>
              Esculpido pelo vento
              <Dot />
            </>,
          ]}
        />
        <RevealFadeUp delay={0.15}>
          <p className="mx-auto mt-7 max-w-[640px]" style={bodySt}>
            {d.subtitle}
          </p>
        </RevealFadeUp>
        <MaskReveal
          delay={0.1}
          className="relative mx-auto mt-12 aspect-[3/2] w-full max-w-[1110px] overflow-hidden md:mt-16"
        >
          <Image
            src={d.photo}
            alt={d.alt}
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 92vw, 1110px"
            className="object-cover"
          />
        </MaskReveal>
        <div className="mx-auto mt-3 flex max-w-[1110px] items-center justify-between">
          <span style={labelSt}>{d.captionL}</span>
          <span style={labelSt}>{d.captionR}</span>
        </div>
      </div>
    </section>
  );
}

/* ── 02 · DNA PININFARINA ───────────────────────────────────────────────── */
export function Dna() {
  const d = CYRELA_DATA.dna;
  return (
    <section id="dna" className="relative">
      <div className={`${SHELL} pt-20 pb-14 md:pt-28 md:pb-16`}>
        <RevealFadeUp>
          <span style={eyebrowSt}>{d.eyebrow}</span>
        </RevealFadeUp>
        <div className="mt-9 grid items-start gap-10 md:grid-cols-[1fr_460px] md:gap-16">
          <RevealLines
            className="text-[32px] leading-[1.08] sm:text-[44px] lg:text-[52px]"
            style={headSt}
            lines={["O estúdio da Ferrari", "desde 1930 — agora,", <>um edifício<Dot /></>]}
          />
          <RevealFadeUp delay={0.1}>
            <p style={bodySt}>{d.body}</p>
          </RevealFadeUp>
        </div>
      </div>
      <div style={{ backgroundColor: "var(--c-pedra)" }}>
        <div className={`${SHELL} grid grid-cols-1 gap-8 py-12 sm:grid-cols-3 md:py-16`}>
          {d.facts.map((f, i) => (
            <RevealFadeUp key={f.label} delay={i * 0.08}>
              <div className="text-[40px] lg:text-[46px]" style={headSt}>
                {f.value}
              </div>
              <div className="mt-3" style={labelSt}>
                {f.label}
              </div>
            </RevealFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 03 · A FORMA ───────────────────────────────────────────────────────── */
export function Forma() {
  const d = CYRELA_DATA.forma;
  return (
    <section id="forma" className="relative">
      <div className={`${SHELL} grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28`}>
        <div>
          <RevealFadeUp>
            <span style={eyebrowSt}>{d.eyebrow}</span>
          </RevealFadeUp>
          <RevealLines
            className="mt-6 text-[42px] leading-[1.05] sm:text-[56px] lg:text-[60px]"
            style={headSt}
            lines={["Sem frente", <>nem fundo<Dot /></>]}
          />
          <RevealFadeUp delay={0.1}>
            <p className="mt-7 max-w-[460px]" style={bodySt}>
              {d.body}
            </p>
          </RevealFadeUp>
          <RevealFadeUp delay={0.18}>
            <div className="mt-10 flex items-center gap-4">
              <span style={tickSt} />
              <span style={labelSt}>{d.tickLabel}</span>
            </div>
          </RevealFadeUp>
        </div>
        <div>
          <MaskReveal className="relative aspect-square w-full overflow-hidden">
            <Image
              src={d.photo}
              alt={d.alt}
              fill
              quality={95}
              sizes="(max-width: 768px) 92vw, 660px"
              className="object-cover"
            />
          </MaskReveal>
          <div className="mt-3" style={labelSt}>
            {d.caption}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 04 · VARANDAS / PRIVACIDADE ────────────────────────────────────────── */
export function Varandas() {
  const d = CYRELA_DATA.varandas;
  return (
    <section id="varandas" className="relative">
      <div className={`${SHELL} grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28`}>
        <div className="order-2 md:order-1">
          <MaskReveal className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              src={d.photo}
              alt={d.alt}
              fill
              quality={95}
              sizes="(max-width: 768px) 92vw, 800px"
              className="object-cover"
            />
          </MaskReveal>
          <div className="mt-3" style={labelSt}>
            {d.caption}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <RevealFadeUp>
            <span style={eyebrowSt}>{d.eyebrow}</span>
          </RevealFadeUp>
          <RevealLines
            className="mt-6 text-[36px] leading-[1.08] sm:text-[44px]"
            style={headSt}
            lines={["Curvas que nunca", <>se encontram<Dot /></>]}
          />
          <RevealFadeUp delay={0.1}>
            <p className="mt-7 max-w-[420px]" style={bodySt}>
              {d.body}
            </p>
          </RevealFadeUp>
          <RevealFadeUp delay={0.18}>
            <div className="mt-10 flex items-center gap-4">
              <span style={tickSt} />
              <span style={labelSt}>{d.tickLabel}</span>
            </div>
          </RevealFadeUp>
        </div>
      </div>
    </section>
  );
}

/* ── 05 · PREMIADO PELO MUNDO ───────────────────────────────────────────── */
export function Premiado() {
  const d = CYRELA_DATA.premiado;
  return (
    <section id="premiado" className="relative" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className={`${SHELL} py-24 text-center md:py-32`}>
        <RevealFadeUp>
          <span style={eyebrowSt}>{d.eyebrow}</span>
        </RevealFadeUp>
        <RevealLines
          className="mt-6 text-[44px] sm:text-[60px] lg:text-[64px]"
          style={headSt}
          lines={[<>Premiado pelo mundo<Dot /></>]}
        />
        <RevealFadeUp delay={0.12}>
          <p className="mx-auto mt-7 max-w-[680px]" style={bodySt}>
            {d.body}
          </p>
        </RevealFadeUp>
        <RevealFadeUp delay={0.2}>
          <span className="mx-auto mt-10 block" style={{ width: 40, height: 2, backgroundColor: "var(--c-rosso)" }} />
        </RevealFadeUp>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-8">
          {d.awards.map((a, i) => (
            <RevealFadeUp key={a.year} delay={i * 0.1}>
              <div className="text-[40px] lg:text-[46px]" style={headSt}>
                {a.year}
              </div>
              <div className="mt-2 text-[22px] lg:text-[24px]" style={serifValueSt}>
                {a.name}
              </div>
              <div className="mt-4" style={labelSt}>
                {a.issuer}
              </div>
            </RevealFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 06 · INTERIORES ────────────────────────────────────────────────────── */
export function Interiores() {
  const d = CYRELA_DATA.interiores;
  return (
    <section id="interiores" className="relative">
      <div className={`${SHELL} py-20 md:py-28`}>
        <RevealFadeUp>
          <span style={eyebrowSt}>{d.eyebrow}</span>
        </RevealFadeUp>
        <div className="mt-9 grid items-end gap-8 md:grid-cols-[1fr_560px] md:gap-16">
          <RevealLines
            className="text-[32px] leading-[1.08] sm:text-[44px] lg:text-[48px]"
            style={headSt}
            lines={["As curvas continuam", <>por dentro<Dot /></>]}
          />
          <RevealFadeUp delay={0.1}>
            <p style={bodySt}>{d.body}</p>
          </RevealFadeUp>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-[1.5fr_1fr] md:gap-8">
          <div>
            <MaskReveal className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src={d.photoA.src}
                alt={d.photoA.alt}
                fill
                quality={95}
                sizes="(max-width: 768px) 92vw, 760px"
                className="object-cover"
              />
            </MaskReveal>
            <div className="mt-3" style={labelSt}>
              {d.photoA.caption}
            </div>
          </div>
          <div>
            <MaskReveal delay={0.12} className="relative aspect-square w-full overflow-hidden">
              <Image
                src={d.photoB.src}
                alt={d.photoB.alt}
                fill
                quality={95}
                sizes="(max-width: 768px) 92vw, 480px"
                className="object-cover"
              />
            </MaskReveal>
            <div className="mt-3" style={labelSt}>
              {d.photoB.caption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 07 · LAZER ─────────────────────────────────────────────────────────── */
export function Lazer() {
  const d = CYRELA_DATA.lazer;
  return (
    <section id="lazer" className="relative">
      <div className={`${SHELL} py-20 md:py-28`}>
        <RevealFadeUp>
          <span style={eyebrowSt}>{d.eyebrow}</span>
        </RevealFadeUp>
        <RevealLines
          className="mt-6 text-[40px] sm:text-[52px]"
          style={headSt}
          lines={[<>Bem-estar à beira d’água<Dot /></>]}
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <MaskReveal className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src={d.photo}
                alt={d.alt}
                fill
                quality={95}
                sizes="(max-width: 768px) 92vw, 720px"
                className="object-cover"
              />
            </MaskReveal>
            <div className="mt-3" style={labelSt}>
              {d.caption}
            </div>
          </div>
          <div>
            <div style={labelSt}>{d.listTitle}</div>
            <ul className="mt-2">
              {d.amenities.map((a, i) => (
                <RevealFadeUp key={a} delay={i * 0.05} as="li">
                  <div className="flex items-baseline gap-5 py-4" style={{ borderTop: hair }}>
                    <span style={labelSt}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ fontFamily: fInter, fontWeight: 500, fontSize: "17px", color: "var(--c-tinta)" }}>
                      {a}
                    </span>
                  </div>
                </RevealFadeUp>
              ))}
              <li style={{ borderTop: hair }} aria-hidden />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 08 · LOCALIZAÇÃO ───────────────────────────────────────────────────── */
export function Localizacao() {
  const d = CYRELA_DATA.localizacao;
  return (
    <section id="localizacao" className="relative">
      <div className={`${SHELL} py-20 md:py-28`}>
        <RevealFadeUp>
          <span style={eyebrowSt}>{d.eyebrow}</span>
        </RevealFadeUp>
        <div className="mt-9 grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <RevealLines
              className="text-[36px] leading-[1.08] sm:text-[48px] lg:text-[56px]"
              style={headSt}
              lines={["No coração da", <>Vila Olímpia<Dot /></>]}
            />
            <RevealFadeUp delay={0.14}>
              <div className="mt-9 flex items-center gap-4">
                <span style={tickSt} />
                <span style={labelSt}>{d.address}</span>
              </div>
            </RevealFadeUp>
          </div>
          <RevealFadeUp delay={0.1}>
            <p className="max-w-[520px] md:pt-2" style={bodySt}>
              {d.body}
            </p>
          </RevealFadeUp>
        </div>
        <div
          className="mt-16 grid grid-cols-2 gap-y-10 md:grid-cols-4"
          style={{ borderTop: hair, paddingTop: "40px" }}
        >
          {d.anchors.map((a, i) => (
            <RevealFadeUp key={a.name} delay={i * 0.07}>
              <div className="text-[24px] lg:text-[26px]" style={serifValueSt}>
                {a.name}
              </div>
              <div className="mt-2" style={labelSt}>
                {a.desc}
              </div>
            </RevealFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 09 · FICHA TÉCNICA ─────────────────────────────────────────────────── */
export function Ficha() {
  const d = CYRELA_DATA.ficha;
  return (
    <section id="ficha" className="relative" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className={`${SHELL} py-20 md:py-28`}>
        <RevealFadeUp>
          <span style={eyebrowSt}>{d.eyebrow}</span>
        </RevealFadeUp>
        <RevealLines
          className="mt-6 text-[40px] sm:text-[52px]"
          style={headSt}
          lines={[<>O projeto, em números<Dot /></>]}
        />
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {d.rows.map((r, i) => (
            <RevealFadeUp key={r.label} delay={(i % 4) * 0.06}>
              <div style={{ borderTop: hair, paddingTop: "18px" }}>
                <div style={labelSt}>{r.label}</div>
                <div className="mt-3 text-[24px] lg:text-[26px]" style={serifValueSt}>
                  {r.value}
                </div>
              </div>
            </RevealFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 10 · CONTATO / CTA ─────────────────────────────────────────────────── */
export function Contato() {
  const d = CYRELA_DATA.contato;
  return (
    <section id="contato" className="relative">
      <div className={`${SHELL} pt-24 text-center md:pt-32`}>
        <RevealFadeUp>
          <span style={{ ...labelSt, letterSpacing: "0.22em" }}>{d.eyebrow}</span>
        </RevealFadeUp>
        <RevealLines
          className="mt-6 text-[44px] sm:text-[60px] lg:text-[64px]"
          style={headSt}
          lines={[<>Viva uma obra de design<Dot /></>]}
        />
        <RevealFadeUp delay={0.12}>
          <p className="mx-auto mt-7 max-w-[640px]" style={bodySt}>
            {d.body}
          </p>
        </RevealFadeUp>
        <RevealFadeUp delay={0.2} className="mt-12">
          <CtaButton href="#top">{d.cta}</CtaButton>
        </RevealFadeUp>
      </div>
      <div className={`${SHELL} mt-20 md:mt-28`}>
        <div
          className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: hair }}
        >
          <div className="flex items-center gap-3">
            <span style={{ display: "block", width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--c-rosso)" }} />
            <span style={labelSt}>{d.footerBrand}</span>
          </div>
          <span style={labelSt}>{d.footerCredit}</span>
        </div>
      </div>
    </section>
  );
}
