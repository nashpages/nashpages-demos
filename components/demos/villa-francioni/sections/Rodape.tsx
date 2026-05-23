"use client";

import { FRANCIONI_DATA } from "../data";

const f = FRANCIONI_DATA.footer;

export function Rodape() {
  return (
    <footer id="rodape" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-noite)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-20 pb-10">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <div>
            {/* assinatura: hairline sálvia + quadrado terracota */}
            <span aria-hidden className="block" style={{ width: "2px", height: "36px", backgroundColor: "var(--c-salvia)", marginLeft: "4px" }} />
            <span aria-hidden className="block" style={{ width: "10px", height: "10px", backgroundColor: "var(--c-terracota)", marginTop: "8px" }} />
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500, fontSize: "clamp(32px, 3.4vw, 40px)", lineHeight: 1, color: "var(--c-giz)", margin: "24px 0 0" }}>
              {f.wordmark}
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", color: "var(--c-giz)", opacity: 0.6, margin: "18px 0 0" }}>
              {f.tagline}
            </p>
            <p style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", fontWeight: 400, fontSize: "17px", color: "var(--c-giz)", opacity: 0.72, margin: "8px 0 0" }}>
              {f.lema}
            </p>
          </div>

          <div className="flex flex-wrap gap-12 lg:gap-16 mt-12 lg:mt-2">
            {f.cols.map((col) => (
              <div key={col.head}>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "11px", letterSpacing: "1.8px", color: "var(--c-giz)", opacity: 0.45, margin: 0 }}>
                  {col.head}
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  {col.items.map((it) => (
                    <span key={it} style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", color: "var(--c-giz)", opacity: 0.78 }}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-16 pt-6 flex flex-col sm:flex-row sm:justify-between gap-3"
          style={{ borderTop: "1px solid rgba(239,237,230,0.12)" }}
        >
          <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "12px", color: "var(--c-giz)", opacity: 0.45 }}>
            {f.copyright}
          </span>
          <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "12px", color: "var(--c-giz)", opacity: 0.5 }}>
            {f.credit}
          </span>
        </div>
      </div>
    </footer>
  );
}
