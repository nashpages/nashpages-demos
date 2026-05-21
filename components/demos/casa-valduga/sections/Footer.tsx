"use client";

import { VALDUGA_DATA } from "../data";

export function Footer() {
  const f = VALDUGA_DATA.footer;
  return (
    <footer className="relative w-full overflow-hidden pt-16 lg:pt-24 pb-10" style={{ backgroundColor: "var(--c-footer-bg)" }}>
      <div aria-hidden className="whitespace-nowrap overflow-hidden mb-12 lg:mb-16 select-none">
        <span style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(40px, 6vw, 72px)", color: "var(--c-pergaminho)", opacity: 0.07, letterSpacing: "2px" }}>
          {f.marquee.repeat(4)}
        </span>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "26px", color: "var(--c-pergaminho)", margin: 0 }}>{f.brand}</p>
            <p className="mt-3" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "13px", lineHeight: 1.5, color: "var(--c-muted)", margin: 0, maxWidth: "260px" }}>{f.brandSub}</p>
          </div>
          {f.cols.map((col) => (
            <div key={col.label}>
              <p style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "11px", letterSpacing: "2px", color: "var(--c-dourado-light)", margin: 0 }}>{col.label}</p>
              <div className="mt-5 flex flex-col gap-2.5">
                {col.items.map((it) => (
                  <span key={it} style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", color: "var(--c-pergaminho)", opacity: 0.72 }}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 400, fontSize: "11px", letterSpacing: "0.5px", color: "var(--c-muted)" }}>{f.copyright}</span>
          <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 400, fontSize: "11px", letterSpacing: "0.5px", color: "var(--c-muted)" }}>{f.credit}</span>
        </div>
      </div>
    </footer>
  );
}
