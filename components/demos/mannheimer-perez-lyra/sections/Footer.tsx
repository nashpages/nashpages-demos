"use client";

import { MPL_DATA } from "../data";

export function Footer() {
  const { footer } = MPL_DATA;

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-tinta-deep)" }}
    >
      {/* Marquee sutil bg */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-12 pointer-events-none whitespace-nowrap overflow-hidden"
        style={{
          fontFamily: "var(--font-source-serif)",
          fontWeight: 300,
          fontSize: "clamp(140px, 16vw, 220px)",
          lineHeight: 1,
          color: "#1A1410",
          letterSpacing: "-4px",
          opacity: 0.8,
        }}
      >
        {footer.marquee}
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-[80px] py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p
              style={{
                fontFamily: "var(--font-source-serif)",
                fontWeight: 300,
                fontSize: "56px",
                letterSpacing: "-1.4px",
                color: "var(--c-papel)",
                lineHeight: 1,
              }}
            >
              {footer.logo}
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-source-serif)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "18px",
                color: "var(--c-accent-light)",
              }}
            >
              {footer.sub}
            </p>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footer.cols.map((col) => (
              <div key={col.header}>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "1.6px",
                    color: "var(--c-accent)",
                  }}
                >
                  {col.header}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.items.map((it) => (
                    <li
                      key={it}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        fontSize: "12px",
                        lineHeight: 1.6,
                        color: "#C7BCA8",
                      }}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <span
          aria-hidden
          className="block mt-16 lg:mt-20"
          style={{ width: "100%", height: "1px", backgroundColor: "var(--c-footer-linha)" }}
        />
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 400,
              fontSize: "10px",
              letterSpacing: "1.4px",
              color: "var(--c-footer-muted)",
            }}
          >
            {footer.copyright}
          </p>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 400,
              fontSize: "10px",
              letterSpacing: "1.4px",
              color: "var(--c-footer-muted)",
            }}
          >
            {footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
