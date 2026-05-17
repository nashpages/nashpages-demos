"use client";

import { AMANDA_DATA } from "../data";

/**
 * Footer aparece SÓ no mobile (no desktop horizontal scroll não tem footer no fim
 * porque seria horizontal — em vez disso é mostrado depois do scroll horizontal terminar).
 */
export function Footer() {
  const { footer } = AMANDA_DATA;
  return (
    <footer className="w-full lg:px-16 px-6 lg:py-16 py-14" style={{ backgroundColor: "var(--c-footer-bg)" }}>
      <div className="grid lg:grid-cols-[1fr_1.2fr_1fr_1.2fr] grid-cols-1 gap-8">
        <div>
          <p className="lg:text-[28px] text-[24px]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-0.8px", color: "var(--c-papel)" }}>
            {footer.logo}
          </p>
          <p className="mt-2 text-[10px] tracking-[0.15em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-footer-muted)" }}>
            {footer.logoSub}
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.13em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            /  DADOS
          </p>
          <ul className="mt-3 space-y-1">
            {footer.dados.map((l, i) => (
              <li key={i} className="text-[10px] tracking-[0.08em] leading-[1.8]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-papel)" }}>
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.13em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            /  NAVEGAR
          </p>
          <ul className="mt-3 space-y-1">
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
        </div>
        <div>
          <p className="text-[11px] tracking-[0.13em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
            /  REDES
          </p>
          <ul className="mt-3 space-y-1">
            {footer.redes.map((l, i) => (
              <li key={i} className="text-[10px] tracking-[0.08em] leading-[1.8]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-papel)" }}>
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 h-px w-full" style={{ backgroundColor: "var(--c-footer-divider)" }} />
      <div className="mt-6 flex flex-wrap justify-between gap-4">
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
