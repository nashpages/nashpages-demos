"use client";

import { DEBORA_DATA } from "../data";
import { FadeUp } from "../motion";

export function Footer() {
  const { footer } = DEBORA_DATA;

  return (
    <footer className="w-full" style={{ backgroundColor: "var(--c-footer-bg)" }}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ===== DESKTOP ===== */}
        <div className="hidden lg:block pt-[80px] pb-[60px] px-[80px]">
          <div className="grid grid-cols-[260px_320px_180px_280px] gap-x-4">
            <FadeUp>
              <p
                className="block"
                style={{
                  fontFamily: "var(--font-geist)",
                  fontWeight: 500,
                  fontSize: "32px",
                  letterSpacing: "-0.031em",
                  color: "var(--c-pedra)",
                }}
              >
                {footer.logo}
              </p>
              <div className="h-[12px]" />
              <p
                className="text-[10px] tracking-[0.15em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-footer-muted)" }}
              >
                {footer.logoSub}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p
                className="text-[11px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
              >
                /  DADOS
              </p>
              <div className="h-[20px]" />
              <ul className="space-y-2">
                {footer.dados.map((line, i) => (
                  <li
                    key={i}
                    className="text-[10px] tracking-[0.08em] leading-[1.8]"
                    style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-pedra)" }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p
                className="text-[11px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
              >
                /  NAVEGAR
              </p>
              <div className="h-[20px]" />
              <ul className="space-y-2">
                {footer.navegar.map((label) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase()}`}
                      className="text-[10px] tracking-[0.11em] leading-[1.8] transition-opacity hover:opacity-70"
                      style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-pedra)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p
                className="text-[11px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
              >
                /  REDES
              </p>
              <div className="h-[20px]" />
              <ul className="space-y-2">
                {footer.redes.map((line, i) => (
                  <li
                    key={i}
                    className="text-[10px] tracking-[0.08em] leading-[1.8]"
                    style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-pedra)" }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
          <div className="h-[60px]" />
          <div className="h-px w-full" style={{ backgroundColor: "var(--c-footer-divider)" }} />
          <div className="h-[36px]" />
          <div className="flex justify-between items-center">
            <p
              className="text-[10px] tracking-[0.11em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-footer-muted)" }}
            >
              {footer.copyright}
            </p>
            <p
              className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              {footer.credit}
            </p>
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="lg:hidden px-6 pt-[60px] pb-[40px]">
          <FadeUp>
            <p
              className="block"
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 500,
                fontSize: "28px",
                letterSpacing: "-0.028em",
                color: "var(--c-pedra)",
              }}
            >
              {footer.logo}
            </p>
            <div className="h-[8px]" />
            <p
              className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-footer-muted)" }}
            >
              {footer.logoSub}
            </p>
          </FadeUp>
          <div className="h-[40px]" />
          <FadeUp delay={0.1}>
            <p
              className="text-[11px] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
            >
              /  DADOS
            </p>
            <div className="h-[16px]" />
            <ul className="space-y-1.5">
              {footer.dadosMobile.map((line, i) => (
                <li
                  key={i}
                  className="text-[9px] tracking-[0.08em] leading-[1.8]"
                  style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-pedra)" }}
                >
                  {line}
                </li>
              ))}
            </ul>
          </FadeUp>
          <div className="h-[40px]" />
          <div className="grid grid-cols-2 gap-x-8">
            <FadeUp delay={0.2}>
              <p
                className="text-[11px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
              >
                /  NAVEGAR
              </p>
              <div className="h-[14px]" />
              <ul className="space-y-1.5">
                {footer.navegarMobile.map((label) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase()}`}
                      className="text-[9px] tracking-[0.11em] leading-[1.8] transition-opacity hover:opacity-70"
                      style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-pedra)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p
                className="text-[11px] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
              >
                /  REDES
              </p>
              <div className="h-[14px]" />
              <ul className="space-y-1.5">
                {footer.redesMobile.map((line, i) => (
                  <li
                    key={i}
                    className="text-[9px] tracking-[0.08em] leading-[1.8]"
                    style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-pedra)" }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
          <div className="h-[40px]" />
          <div className="h-px w-full" style={{ backgroundColor: "var(--c-footer-divider)" }} />
          <div className="h-[28px]" />
          <ul className="space-y-1.5">
            {footer.copyrightMobile.map((line, i) => (
              <li
                key={i}
                className="text-[9px] tracking-[0.09em] leading-[1.6]"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 400, color: "var(--c-footer-muted)" }}
              >
                {line}
              </li>
            ))}
          </ul>
          <div className="h-[16px]" />
          <p
            className="text-[9px] tracking-[0.13em]"
            style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, color: "var(--c-musgo)" }}
          >
            {footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
