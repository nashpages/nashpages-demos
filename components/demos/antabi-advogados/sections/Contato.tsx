"use client";

import { ANTABI_DATA } from "../data";
import { FadeUp } from "../motion";

export function Contato() {
  const { contato } = ANTABI_DATA;

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
              fontFamily: "var(--font-lora)",
              fontWeight: 500,
              fontSize: "clamp(80px, 11vw, 148px)",
              lineHeight: 0.96,
              letterSpacing: "clamp(-2.2px, -0.3vw, -3.8px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>{contato.headlineA}</span>
            <br />
            <span style={{ color: "var(--c-accent)" }}>{contato.headlineB}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <span
            aria-hidden
            className="block mt-16"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent)" }}
          />
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-accent)",
            }}
          >
            {contato.cidade.label}
          </p>
          <a
            href={contato.cidade.telHref}
            className="block mt-4 hover:opacity-80"
            style={{
              fontFamily: "var(--font-lora)",
              fontWeight: 500,
              fontSize: "clamp(32px, 4vw, 48px)",
              letterSpacing: "clamp(-0.6px, -0.08vw, -0.8px)",
              color: "var(--c-tinta)",
            }}
          >
            {contato.cidade.tel}
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
            {contato.cidade.endereco}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <span
            aria-hidden
            className="block mt-12"
            style={{ width: "100%", height: "1px", backgroundColor: "var(--c-linha)" }}
          />
          <a
            href={contato.emailHref}
            className="block mt-8 hover:opacity-80"
            style={{
              fontFamily: "var(--font-lora)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(22px, 2.5vw, 30px)",
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
