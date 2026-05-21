"use client";

import { VALDUGA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Contato() {
  const c = VALDUGA_DATA.contato;
  return (
    <section id="contato" className="relative w-full py-28 lg:py-[140px]" style={{ backgroundColor: "var(--c-vinho-deep)" }}>
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "3px", color: "var(--c-dourado-light)", margin: 0 }}>{c.eyebrow}</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(56px, 10vw, 120px)", lineHeight: 1, letterSpacing: "-1px", color: "var(--c-pergaminho)", margin: "26px 0 0" }}>{c.headline}</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mx-auto" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(18px, 2.2vw, 24px)", lineHeight: 1.4, color: "var(--c-pergaminho)", opacity: 0.9, margin: "28px auto 0", maxWidth: "720px" }}>{c.invite}</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <a href="mailto:reservas@casavalduga.com.br" className="inline-flex items-center gap-3 mt-10">
            <span style={{ width: "24px", height: "2px", backgroundColor: "var(--c-dourado-light)" }} />
            <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-dourado-light)" }}>{c.cta}  →</span>
            <span style={{ width: "24px", height: "2px", backgroundColor: "var(--c-dourado-light)" }} />
          </a>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-12" style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 400, fontSize: "12px", letterSpacing: "0.5px", color: "var(--c-pergaminho)", opacity: 0.55, margin: "48px 0 0" }}>{c.contact}</p>
        </FadeUp>
      </div>
    </section>
  );
}
