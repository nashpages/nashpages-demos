"use client";

import { MPL_DATA } from "../data";
import { FadeUp } from "../motion";

export function Contato() {
  const { contato } = MPL_DATA;

  return (
    <section
      id="contato"
      className="relative w-full"
      style={{ backgroundColor: "var(--c-pedra)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] py-24 lg:py-32">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-accent)",
            }}
          >
            {contato.eyebrow}
          </p>
          <span
            aria-hidden
            className="block mt-3"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent)" }}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-12 lg:mt-14"
            style={{
              fontFamily: "var(--font-source-serif)",
              fontWeight: 300,
              fontSize: "clamp(80px, 12vw, 156px)",
              lineHeight: 0.94,
              letterSpacing: "clamp(-2.2px, -0.3vw, -4.5px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span style={{ fontStyle: "italic" }}>{contato.headlineA}</span>
            <br />
            <span style={{ color: "var(--c-accent)" }}>{contato.headlineB}</span>
          </h2>
        </FadeUp>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {contato.cidades.map((c) => (
            <FadeUp key={c.label} delay={0.2}>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  color: "var(--c-accent)",
                }}
              >
                {c.label}
              </p>
              <a
                href={c.telHref}
                className="block mt-4 hover:opacity-80"
                style={{
                  fontFamily: "var(--font-source-serif)",
                  fontWeight: 300,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  letterSpacing: "clamp(-0.6px, -0.08vw, -1px)",
                  color: "var(--c-tinta)",
                }}
              >
                {c.tel}
              </a>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 400,
                  fontSize: "11px",
                  letterSpacing: "1.4px",
                  color: "var(--c-neblina)",
                }}
              >
                {c.endereco}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <span
            aria-hidden
            className="block mt-16"
            style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
          />
          <a
            href={contato.emailHref}
            className="block mt-8 hover:opacity-80"
            style={{
              fontFamily: "var(--font-source-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(22px, 2.5vw, 32px)",
              color: "var(--c-tinta)",
            }}
          >
            {contato.email}
          </a>
        </FadeUp>

        <FadeUp delay={0.4}>
          <span
            aria-hidden
            className="block mt-16"
            style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
          />
          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {contato.signature.map((sig) => (
              <p
                key={sig}
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.6px",
                  color: "var(--c-neblina)",
                }}
              >
                {sig}
              </p>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
