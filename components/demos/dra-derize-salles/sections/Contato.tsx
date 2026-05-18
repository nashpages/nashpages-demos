"use client";

import { DERIZE_DATA } from "../data";
import { FadeUp } from "../motion";

export function Contato() {
  const { contato, whatsappShort, phone } = DERIZE_DATA;

  return (
    <section id="contato" className="w-full" style={{ backgroundColor: "var(--c-pedra)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-20 lg:pt-[120px] pb-16 lg:pb-[80px]">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-accent)" }}>
            {`§ 06  ·  ${contato.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />
        <FadeUp delay={0.1} y={32} duration={0.9}>
          <h2 style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(60px, 9.4vw, 132px)", lineHeight: "1.06", letterSpacing: "clamp(-1.5px, -0.25vw, -3.5px)", color: "var(--c-tinta)", margin: 0 }}>
            {contato.headlineLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </FadeUp>
        <div className="h-10 lg:h-14" />
        <div className="h-[1px] w-[80px]" style={{ backgroundColor: "var(--c-accent)" }} />
        <div className="h-8" />

        <div className="grid lg:grid-cols-[1fr_560px] gap-12 lg:gap-[80px]">
          {/* LEFT */}
          <div>
            <FadeUp delay={0.2}>
              <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(17px, 1.55vw, 22px)", lineHeight: "1.55", color: "var(--c-neblina)", maxWidth: "560px", margin: 0 }}>
                {contato.subline}
              </p>
            </FadeUp>
            <div className="h-8 lg:h-12" />
            <FadeUp delay={0.35}>
              <a
                href={contato.ctaWhatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-90"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "2.5px",
                  backgroundColor: "var(--c-accent)",
                  color: "var(--c-papel)",
                  padding: "22px 36px",
                  minWidth: "380px",
                }}
              >
                {contato.ctaWhatsapp.label}  →
              </a>
            </FadeUp>
          </div>

          {/* RIGHT */}
          <FadeUp delay={0.25}>
            <div>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.8px", color: "var(--c-accent)" }}>
                {`/  ${contato.contatoLabel}`}
              </p>
              <div className="h-4" />
              <a
                href={DERIZE_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
                style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(28px, 2.8vw, 36px)", lineHeight: "44px", letterSpacing: "-0.8px", color: "var(--c-tinta)" }}
              >
                {whatsappShort}
              </a>
              <p className="mt-1" style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "13px", lineHeight: "20px", color: "var(--c-neblina)" }}>
                WhatsApp
              </p>
              <div className="h-6" />
              <p style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.4px", color: "var(--c-tinta)" }}>
                {phone}
              </p>
              <p className="mt-1" style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "13px", lineHeight: "20px", color: "var(--c-neblina)" }}>
                Telefone consultório
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="h-12 lg:h-16" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
        <div className="h-5" />
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
          <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 400, fontSize: "16px", color: "var(--c-tinta)" }}>
            {contato.signature}
          </p>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "2px", color: "var(--c-neblina)" }}>
            {contato.signatureNote}
          </p>
        </div>
      </div>
    </section>
  );
}
