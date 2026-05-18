"use client";

import { BERMUDES_DATA } from "../data";
import { FadeUp } from "../motion";

export function Contato() {
  const { contato, phone, phoneHref, email } = BERMUDES_DATA;

  return (
    <section id="contato" data-snap-section className="w-full" style={{ backgroundColor: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-24 lg:pt-[120px] pb-16 lg:pb-[80px]">
        <FadeUp>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--c-tinta)",
            }}
          >
            {`§ 08  ·  ${contato.eyebrow}`}
          </p>
        </FadeUp>
        <div className="h-6 lg:h-10" />

        <FadeUp delay={0.1} y={32}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(72px, 11vw, 132px)",
              lineHeight: "1.05",
              letterSpacing: "clamp(-1.6px, -0.25vw, -3.5px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            <span className="block">{contato.headlineLines[0]}</span>
            <span className="block">{contato.headlineLines[1]}</span>
          </h2>
        </FadeUp>

        <div className="h-10 lg:h-14" />
        <div className="h-px w-20" style={{ backgroundColor: "var(--c-tinta)" }} />
        <div className="h-7" />

        <div className="grid lg:grid-cols-[1fr_560px] gap-12 lg:gap-[80px]">
          {/* LEFT: subline + phone + email */}
          <div>
            <FadeUp delay={0.2}>
              <p
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(17px, 1.55vw, 22px)",
                  lineHeight: "1.55",
                  color: "var(--c-neblina)",
                  maxWidth: "560px",
                  margin: 0,
                }}
              >
                {contato.subline}
              </p>
            </FadeUp>

            <div className="h-10 lg:h-14" />

            <FadeUp delay={0.3}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-tinta)",
                }}
              >
                /  TELEFONE
              </p>
              <div className="h-3" />
              <a
                href={phoneHref}
                className="inline-block transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 4.3vw, 56px)",
                  lineHeight: "1.1",
                  letterSpacing: "clamp(-0.6px, -0.1vw, -1.5px)",
                  color: "var(--c-tinta)",
                }}
              >
                {phone}
              </a>
            </FadeUp>

            <div className="h-8 lg:h-10" />

            <FadeUp delay={0.4}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-tinta)",
                }}
              >
                /  EMAIL
              </p>
              <div className="h-2" />
              <a
                href={`mailto:${email}`}
                className="inline-block pb-1 transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(22px, 2.2vw, 28px)",
                  lineHeight: "1.3",
                  letterSpacing: "-0.4px",
                  color: "var(--c-tinta)",
                  borderBottom: "1px solid rgba(50,76,91,0.45)",
                }}
              >
                {email}
              </a>
            </FadeUp>
          </div>

          {/* RIGHT: 4 endereços */}
          <FadeUp delay={0.25}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-tinta)",
                }}
              >
                {`/  ${contato.addressesLabel}`}
              </p>
              <div className="h-5 lg:h-7" />
              {contato.addresses.map((a, i) => (
                <div
                  key={a.label}
                  className="py-5 lg:py-6 relative"
                  style={i > 0 ? { borderTop: "1px solid var(--c-linha)" } : undefined}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono)",
                        fontWeight: 500,
                        fontSize: "11px",
                        letterSpacing: "1.5px",
                        color: "var(--c-tinta)",
                      }}
                    >
                      {a.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono)",
                        fontWeight: 500,
                        fontSize: "9px",
                        letterSpacing: "1.5px",
                        color: "var(--c-neblina)",
                      }}
                    >
                      {a.badge}
                    </p>
                  </div>
                  <div className="h-2" />
                  <p
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 1.6vw, 22px)",
                      lineHeight: "1.35",
                      letterSpacing: "-0.3px",
                      color: "var(--c-tinta)",
                      margin: 0,
                    }}
                  >
                    {a.title}
                  </p>
                  <div className="h-1" />
                  {a.lines.map((line, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        fontSize: "13px",
                        lineHeight: "20px",
                        color: "var(--c-neblina)",
                        margin: 0,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <div className="h-12 lg:h-16" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-linha)" }} />
        <div className="h-5" />
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
          <p
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "16px",
              color: "var(--c-tinta)",
            }}
          >
            {contato.signature}
          </p>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "2px",
              color: "var(--c-neblina)",
            }}
          >
            {contato.signatureNote}
          </p>
        </div>
      </div>
    </section>
  );
}
