"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RYO, CASA, OMAKASE, CHEF, GALERIA, VISITE } from "./data";
import { FadeUp, RevealLines } from "./motion";

const SHIPPORI = "'Shippori Mincho', serif";
const JOST = "var(--font-jost), sans-serif";

/* ---------------- 2 · A CASA ---------------- */
export function ACasa() {
  return (
    <section
      style={{ backgroundColor: RYO.washi, color: RYO.ink, padding: "clamp(90px,13vw,170px) clamp(28px,6vw,88px)" }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: 760 }}>
        <FadeUp>
          <div style={{ fontFamily: JOST, fontWeight: 500, fontSize: 13, letterSpacing: "0.44em", color: RYO.amber }}>
            {CASA.eyebrow}
          </div>
        </FadeUp>
        <RevealLines
          lines={CASA.manifesto}
          style={{ fontFamily: SHIPPORI, fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.24, marginTop: 30, textAlign: "center" }}
          delay={0.05}
        />
        <FadeUp delay={0.15}>
          <p style={{ fontFamily: JOST, fontWeight: 300, fontSize: 17, lineHeight: 1.72, color: RYO.inkSoft, maxWidth: 600, margin: "30px auto 0" }}>
            {CASA.para}
          </p>
        </FadeUp>
      </div>
      <FadeUp delay={0.1} style={{ maxWidth: 1000, margin: "clamp(52px,8vw,110px) auto 0" }}>
        <div className="relative w-full" style={{ aspectRatio: "1000 / 560", borderRadius: 2, overflow: "hidden" }}>
          <Image src={CASA.img} alt="O corte do mestre, no balcão do Ryo" fill sizes="(max-width:1040px) 92vw, 1000px" quality={92} style={{ objectFit: "cover" }} />
        </div>
      </FadeUp>
    </section>
  );
}

/* ---------------- 3 · O OMAKASE ---------------- */
export function Omakase() {
  return (
    <section style={{ backgroundColor: RYO.washi, color: RYO.ink, padding: "clamp(90px,13vw,170px) clamp(28px,6vw,88px)" }}>
      <div className="mx-auto text-center" style={{ maxWidth: 760 }}>
        <FadeUp>
          <div style={{ fontFamily: JOST, fontWeight: 500, fontSize: 13, letterSpacing: "0.44em", color: RYO.amber }}>
            {OMAKASE.eyebrow}
          </div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 style={{ fontFamily: SHIPPORI, fontWeight: 400, fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.2, marginTop: 26 }}>
            {OMAKASE.title}
          </h2>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p style={{ fontFamily: JOST, fontWeight: 300, fontSize: 17, lineHeight: 1.72, color: RYO.inkSoft, maxWidth: 620, margin: "28px auto 0" }}>
            {OMAKASE.para}
          </p>
        </FadeUp>
      </div>

      <FadeUp delay={0.1} style={{ maxWidth: 1000, margin: "clamp(48px,7vw,96px) auto 0" }}>
        <div className="relative w-full" style={{ aspectRatio: "1000 / 600", borderRadius: 2, overflow: "hidden" }}>
          <Image src={OMAKASE.img} alt="Sashimi de atum — omakase do Ryo" fill sizes="(max-width:1040px) 92vw, 1000px" quality={92} style={{ objectFit: "cover" }} />
        </div>
      </FadeUp>

      <FadeUp delay={0.1} style={{ marginTop: "clamp(44px,6vw,80px)" }}>
        <div className="flex flex-wrap items-start justify-center" style={{ gap: "clamp(48px,8vw,96px)" }}>
          {OMAKASE.stats.map(([n, l]) => (
            <div key={l} className="flex flex-col items-center" style={{ gap: 12 }}>
              <span style={{ fontFamily: SHIPPORI, fontSize: 50, lineHeight: 1 }}>{n}</span>
              <span style={{ fontFamily: JOST, fontWeight: 500, fontSize: 12, letterSpacing: "0.24em", color: RYO.inkSoft, textTransform: "uppercase" }}>{l}</span>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

/* ---------------- 4 · O CHEF ---------------- */
export function Chef() {
  return (
    <section style={{ backgroundColor: RYO.washi, color: RYO.ink, padding: "clamp(80px,11vw,150px) clamp(28px,6vw,88px)" }}>
      <div className="mx-auto flex flex-col md:flex-row md:items-center" style={{ maxWidth: 1264, gap: "clamp(40px,6vw,90px)" }}>
        <FadeUp className="md:w-[44%] w-full">
          <div className="relative w-full" style={{ aspectRatio: "500 / 720", borderRadius: 2, overflow: "hidden" }}>
            <Image src={CHEF.img} alt="Chef Edson Yamashita" fill sizes="(max-width:768px) 92vw, 500px" quality={92} style={{ objectFit: "cover" }} />
          </div>
        </FadeUp>
        <div className="md:w-[56%] w-full">
          <FadeUp>
            <div style={{ fontFamily: JOST, fontWeight: 500, fontSize: 13, letterSpacing: "0.44em", color: RYO.amber }}>{CHEF.eyebrow}</div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 style={{ fontFamily: SHIPPORI, fontWeight: 400, fontSize: "clamp(36px,4.4vw,48px)", lineHeight: 1.1, marginTop: 26 }}>{CHEF.name}</h2>
            <div style={{ fontFamily: JOST, fontWeight: 500, fontSize: 12, letterSpacing: "0.26em", color: RYO.gray, marginTop: 12 }}>{CHEF.role}</div>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p style={{ fontFamily: JOST, fontWeight: 300, fontSize: 17, lineHeight: 1.76, color: RYO.inkSoft, maxWidth: 580, marginTop: 28 }}>{CHEF.bio}</p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div style={{ width: 44, height: 2, background: RYO.amber, margin: "30px 0 18px" }} />
            <p style={{ fontFamily: SHIPPORI, fontSize: 25, color: RYO.ink }}>{CHEF.quote}</p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5 · GALERIA ---------------- */
export function Galeria() {
  return (
    <section style={{ backgroundColor: RYO.washi, color: RYO.ink, padding: "clamp(70px,10vw,130px) clamp(28px,6vw,88px)" }}>
      <div className="text-center" style={{ marginBottom: "clamp(40px,6vw,80px)" }}>
        <FadeUp>
          <div style={{ fontFamily: JOST, fontWeight: 500, fontSize: 13, letterSpacing: "0.44em", color: RYO.amber }}>{GALERIA.eyebrow}</div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 style={{ fontFamily: SHIPPORI, fontWeight: 400, fontSize: "clamp(30px,4vw,40px)", marginTop: 16 }}>{GALERIA.title}</h2>
        </FadeUp>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mx-auto" style={{ maxWidth: 1264, gap: "clamp(10px,1.6vw,24px)" }}>
        {GALERIA.photos.map((src, i) => (
          <FadeUp key={src + i} delay={(i % 3) * 0.08} y={20} duration={0.8}>
            <div className="relative w-full" style={{ aspectRatio: "1 / 1", borderRadius: 2, overflow: "hidden" }}>
              <Image src={src} alt="Prato do Ryo Gastronomia" fill sizes="(max-width:768px) 46vw, 30vw" quality={88} style={{ objectFit: "cover" }} />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

/* ---------------- 6 · VISITE / RESERVA ---------------- */
export function Visite() {
  return (
    <section style={{ position: "relative", backgroundColor: RYO.sumi, color: RYO.paper, overflow: "hidden", padding: "clamp(90px,12vw,150px) clamp(28px,6vw,88px) 40px" }}>
      {/* 良 marca d'água em ouro */}
      <span
        aria-hidden
        style={{
          position: "absolute", left: "50%", top: "44%", transform: "translate(-50%,-50%)",
          fontFamily: SHIPPORI, fontSize: "min(620px,62vw)", lineHeight: 1, color: RYO.amber, opacity: 0.07, pointerEvents: "none", userSelect: "none",
        }}
      >
        {VISITE.kanji}
      </span>

      <div className="relative" style={{ zIndex: 1 }}>
        <FadeUp className="text-center">
          <div style={{ fontFamily: JOST, fontWeight: 500, fontSize: 13, letterSpacing: "0.42em", color: RYO.amber }}>{VISITE.eyebrow}</div>
          <h2 style={{ fontFamily: SHIPPORI, fontWeight: 400, fontSize: "clamp(34px,5vw,50px)", marginTop: 26 }}>{VISITE.title}</h2>
          <div style={{ marginTop: 32 }}>
            <a
              href="https://ryo.meitre.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", fontFamily: JOST, fontWeight: 500, fontSize: 14, letterSpacing: "0.18em", color: RYO.amber, border: `1.5px solid ${RYO.amber}`, borderRadius: 2, padding: "16px 38px" }}
            >
              {VISITE.cta}
            </a>
          </div>
          <a href={VISITE.phoneHref} style={{ display: "block", fontFamily: JOST, fontWeight: 300, fontSize: 14, color: "rgba(247,243,234,.62)", marginTop: 22 }}>
            {VISITE.phone}
          </a>
        </FadeUp>

        <div style={{ width: 72, height: 1, background: RYO.amber, opacity: 0.55, margin: "clamp(56px,8vw,90px) auto clamp(40px,5vw,60px)" }} />

        <FadeUp className="flex flex-wrap justify-center" style={{ gap: "clamp(48px,9vw,110px)", textAlign: "left" }}>
          {[VISITE.endereco, VISITE.horarios].map((c) => (
            <div key={c.label} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ fontFamily: JOST, fontWeight: 500, fontSize: 12, letterSpacing: "0.30em", color: RYO.amber }}>{c.label}</div>
              <div style={{ fontFamily: JOST, fontWeight: 300, fontSize: 16, lineHeight: 1.62 }}>
                {c.lines.map((l) => (<div key={l}>{l}</div>))}
              </div>
            </div>
          ))}
        </FadeUp>
      </div>

      {/* rodapé */}
      <div className="relative" style={{ zIndex: 1, marginTop: "clamp(60px,9vw,120px)", borderTop: "1px solid rgba(247,243,234,.12)", paddingTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: SHIPPORI, fontSize: 24 }}>{VISITE.kanji}</span>
          <span style={{ fontFamily: JOST, fontWeight: 500, fontSize: 12, letterSpacing: "0.30em" }}>RYO&nbsp;GASTRONOMIA</span>
        </div>
        <span style={{ fontFamily: JOST, fontWeight: 500, fontSize: 11, letterSpacing: "0.24em", color: RYO.amber }}>SITE POR NASHPAGES</span>
      </div>
    </section>
  );
}
