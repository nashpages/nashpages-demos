"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Footer() {
  const { footer } = AMANDA_DATA;
  return (
    <footer className="w-full lg:px-16 px-6 lg:py-20 py-14" style={{ backgroundColor: "var(--c-footer-bg)" }}>
      <div className="grid lg:grid-cols-[1fr_1.2fr_1fr_1.2fr] grid-cols-1 gap-10">
        <FadeUp>
          <p className="lg:text-[32px] text-[28px]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-1px", color: "var(--c-papel)" }}>
            {footer.logo}
          </p>
          <p className="mt-2 text-[10px] tracking-[0.15em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-footer-muted)" }}>
            {footer.logoSub}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[11px] tracking-[0.13em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            /  DADOS
          </p>
          <ul className="mt-4 space-y-2">
            {footer.dados.map((l, i) => (
              <li key={i} className="text-[10px] tracking-[0.08em] leading-[1.8]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-papel)" }}>
                {l}
              </li>
            ))}
          </ul>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[11px] tracking-[0.13em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            /  NAVEGAR
          </p>
          <ul className="mt-4 space-y-2">
            {footer.navegar.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}
                  className="text-[10px] tracking-[0.11em] leading-[1.8] transition-opacity hover:opacity-70"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-papel)" }}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-[11px] tracking-[0.13em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            /  REDES
          </p>
          <ul className="mt-4 space-y-2">
            {footer.redes.map((l, i) => (
              <li key={i} className="text-[10px] tracking-[0.08em] leading-[1.8]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-papel)" }}>
                {l}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
      <div className="mt-14 h-px w-full" style={{ backgroundColor: "var(--c-footer-divider)" }} />
      <div className="mt-7 flex flex-wrap justify-between gap-4">
        <p className="text-[10px] tracking-[0.11em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-footer-muted)" }}>
          {footer.copyright}
        </p>
        <p className="text-[10px] tracking-[0.15em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {footer.credit}
        </p>
      </div>
    </footer>
  );
}
