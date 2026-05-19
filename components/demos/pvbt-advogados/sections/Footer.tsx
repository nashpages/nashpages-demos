"use client";

import { PVBT_DATA } from "../data";

export function Footer() {
  const { footer } = PVBT_DATA;
  const marquee = Array(8).fill("PVBT").join(" · ");

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-tinta-deep)" }}
    >
      {/* MARQUEE TOP — subtle */}
      <div className="pt-10 lg:pt-12 overflow-hidden whitespace-nowrap">
        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontWeight: 400,
            fontSize: "clamp(56px, 9vw, 88px)",
            lineHeight: 1,
            letterSpacing: "4px",
            color: "var(--c-dourado-deep)",
            opacity: 0.12,
            margin: 0,
            transform: "translateX(-3%)",
          }}
        >
          {marquee}
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] pt-10 lg:pt-12">
        <div
          aria-hidden
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-dourado)", opacity: 0.3 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-10 pb-10 lg:pb-12">
          {footer.cols.map((col) => (
            <div key={col.label}>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "var(--c-dourado)",
                  marginBottom: "16px",
                }}
              >
                {col.label}
              </p>
              {col.lines.map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.5,
                    letterSpacing: "-0.1px",
                    color: "var(--c-papel)",
                    opacity: 0.85,
                    margin: 0,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div
          aria-hidden
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-dourado)", opacity: 0.2 }}
        />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 py-6 lg:py-7">
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "9px",
              letterSpacing: "1.6px",
              color: "var(--c-papel)",
              opacity: 0.5,
              margin: 0,
            }}
          >
            {footer.copy}
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "12px",
              color: "var(--c-dourado)",
              opacity: 0.65,
              margin: 0,
            }}
          >
            {footer.site}
          </p>
        </div>
      </div>
    </footer>
  );
}
