"use client";

import { GABRIELA_DATA } from "../data";

export function Footer() {
  const { footer } = GABRIELA_DATA;

  return (
    <footer style={{ backgroundColor: "var(--c-accent-deep)", color: "var(--c-papel)" }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-16 lg:pt-[100px] pb-10 lg:pb-[60px]">
        <div className="hidden lg:grid grid-cols-4 gap-x-10">
          {footer.blocks.map((b) => (
            <div key={b.label}>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "1.76px", color: "var(--c-footer-muted)" }}>
                {b.label}
              </p>
              <div className="h-6" />
              <div className="space-y-2">
                {b.lines.map((line, i) =>
                  ("bold" in line && line.bold) ? (
                    <p key={i} style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.3px", color: "var(--c-papel)" }}>
                      {line.text}
                    </p>
                  ) : (
                    <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "var(--c-papel)" }}>
                      {line.text}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-10">
          {footer.blocks.map((b, idx) => (
            <div key={b.label}>
              <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-footer-muted)" }}>
                {b.label}
              </p>
              <div className="h-4" />
              <div className="space-y-1.5">
                {b.lines.map((line, i) =>
                  ("bold" in line && line.bold) ? (
                    <p key={i} style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "18px", lineHeight: "26px", letterSpacing: "-0.3px", color: "var(--c-papel)" }}>
                      {line.text}
                    </p>
                  ) : (
                    <p key={i} style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "13px", lineHeight: "20px", color: "var(--c-papel)" }}>
                      {line.text}
                    </p>
                  )
                )}
              </div>
              {idx < footer.blocks.length - 1 && (
                <div className="h-px w-full mt-10" style={{ backgroundColor: "var(--c-footer-linha)" }} />
              )}
            </div>
          ))}
        </div>

        <div className="h-10 lg:h-[60px]" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-footer-linha)" }} />
        <div className="h-6 lg:h-8" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
          <p style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontSize: "clamp(18px, 1.5vw, 22px)", letterSpacing: "-0.3px", color: "var(--c-papel)" }}>
            {footer.bottomLogo}
          </p>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "clamp(9px, 0.7vw, 10px)", letterSpacing: "1.3px", color: "var(--c-footer-muted)" }}>
            {footer.bottomTag}
          </p>
        </div>
      </div>
    </footer>
  );
}
