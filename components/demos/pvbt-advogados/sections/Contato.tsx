"use client";

import { PVBT_DATA } from "../data";
import { FadeUp } from "../motion";

export function Contato() {
  const { contato } = PVBT_DATA;

  return (
    <section
      id="contato"
      className="relative w-full py-20 lg:py-[80px]"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <FadeUp>
          <div className="flex items-center justify-between mb-12 lg:mb-16">
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-dourado)",
              }}
            >
              {contato.eyebrow}
            </p>
            <p
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "var(--c-neblina)",
                opacity: 0.85,
              }}
            >
              {contato.eyebrowRight}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(80px, 14vw, 200px)",
              lineHeight: 1,
              letterSpacing: "clamp(-2px, -0.45vw, -6px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {contato.headlineA}
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(80px, 14vw, 200px)",
              lineHeight: 1,
              letterSpacing: "clamp(-2px, -0.45vw, -6px)",
              color: "var(--c-dourado-deep)",
              margin: 0,
            }}
          >
            {contato.headlineB}
          </h2>
        </FadeUp>

        <div
          aria-hidden
          className="my-12 lg:my-16"
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          {/* LEFT — telefone + email */}
          <FadeUp delay={0.05}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--c-dourado)",
                marginBottom: "12px",
              }}
            >
              TELEFONE
            </p>
            <a
              href={contato.telHref}
              className="block hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontWeight: 400,
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 1.15,
                letterSpacing: "2px",
                color: "var(--c-tinta)",
              }}
            >
              {contato.tel}
            </a>
            <p
              className="mt-10"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--c-dourado)",
                marginBottom: "12px",
              }}
            >
              EMAIL
            </p>
            <a
              href={contato.emailHref}
              className="block hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(24px, 2.5vw, 36px)",
                letterSpacing: "-0.5px",
                color: "var(--c-dourado-deep)",
              }}
            >
              {contato.email}
            </a>
          </FadeUp>

          {/* RIGHT — endereço + selos */}
          <FadeUp delay={0.1}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--c-dourado)",
                marginBottom: "12px",
              }}
            >
              ESCRITÓRIO
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontWeight: 400,
                fontSize: "22px",
                letterSpacing: "-0.3px",
                color: "var(--c-tinta)",
                margin: 0,
              }}
            >
              {contato.enderecoStreet}
            </p>
            <p
              className="mt-1.5"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "18px",
                letterSpacing: "-0.1px",
                color: "var(--c-neblina)",
                margin: 0,
              }}
            >
              {contato.enderecoUnit}
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "18px",
                letterSpacing: "-0.1px",
                color: "var(--c-neblina)",
                margin: 0,
              }}
            >
              {contato.enderecoCity}
            </p>
            <p
              className="mt-10"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--c-dourado)",
                opacity: 0.75,
                margin: 0,
              }}
            >
              PVBT LAW · DESDE 2016
            </p>
            <p
              className="mt-3"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "9px",
                letterSpacing: "1.6px",
                color: "var(--c-neblina)",
                opacity: 0.7,
                margin: 0,
              }}
            >
              {contato.selos}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
