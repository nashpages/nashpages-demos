"use client";

import { TROJAN_DATA } from "../data";

export function Footer() {
  const { footer } = TROJAN_DATA;

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-footer-bg)" }}
    >
      {/* Marquee top */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-6 pointer-events-none whitespace-nowrap overflow-hidden"
        style={{
          fontFamily: "var(--font-newsreader)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "clamp(56px, 8vw, 96px)",
          lineHeight: 1,
          color: "var(--c-cinabrio)",
          letterSpacing: "-1.5px",
          opacity: 0.22,
        }}
      >
        {footer.marquee}
        {footer.marquee}
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-[80px] pt-[120px] lg:pt-[140px] pb-12">
        <span
          aria-hidden
          className="block mb-12"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(250,250,251,0.15)",
          }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8">
          {footer.cols.map((col, idx) => (
            <div key={col.header}>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.6px",
                  color: "rgba(250,250,251,0.45)",
                }}
              >
                {col.header}
              </p>
              {idx === 0 ? (
                <div className="mt-5">
                  <p
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "26px",
                      letterSpacing: "-0.4px",
                      color: "var(--c-papel)",
                    }}
                  >
                    {col.items[0]}
                  </p>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "rgba(250,250,251,0.7)",
                    }}
                  >
                    {col.items[1]}
                  </p>
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "1.6px",
                      color: "rgba(250,250,251,0.55)",
                    }}
                  >
                    {col.items[2]}
                  </p>
                </div>
              ) : (
                <ul className="mt-5 space-y-2">
                  {col.items.map((it) => (
                    <li
                      key={it}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "rgba(250,250,251,0.85)",
                      }}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <span
          aria-hidden
          className="block mt-16"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(250,250,251,0.15)",
          }}
        />

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "1.6px",
              color: "rgba(250,250,251,0.5)",
            }}
          >
            {footer.copyrightLeft}
          </p>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "1.6px",
              color: "rgba(250,250,251,0.5)",
            }}
          >
            {footer.copyrightRight}
          </p>
        </div>
      </div>
    </footer>
  );
}
