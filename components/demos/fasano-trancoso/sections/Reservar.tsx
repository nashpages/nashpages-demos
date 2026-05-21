"use client";

import { FadeUp } from "../motion";
import { FASANO_DATA } from "../data";

const r = FASANO_DATA.reservar;
const f = FASANO_DATA.footer;

export function Reservar() {
  return (
    <section
      id="reservar"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-noite)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        <div className="pt-28 lg:pt-[120px] pb-20 lg:pb-[100px] flex flex-col items-center text-center">
          <FadeUp>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "3px",
                color: "var(--c-madeira-light)",
                marginBottom: "22px",
              }}
            >
              {r.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={0.1} duration={1.1}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontWeight: 500,
                fontSize: "clamp(48px, 7vw, 88px)",
                lineHeight: 1,
                letterSpacing: "-1px",
                color: "var(--c-areia)",
                margin: 0,
              }}
            >
              {r.headline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <button
              type="button"
              className="group mt-10 inline-flex items-center justify-center border transition-colors duration-300 hover:bg-[var(--c-madeira-light)]"
              style={{ width: "224px", height: "58px", borderColor: "var(--c-madeira-light)" }}
            >
              <span
                className="text-[color:var(--c-madeira-light)] group-hover:text-[color:var(--c-noite)] transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "2.4px",
                }}
              >
                {r.cta}
              </span>
            </button>
          </FadeUp>
        </div>

        {/* Rodapé */}
        <div
          className="py-7 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(242,236,225,0.14)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 500,
              fontSize: "22px",
              color: "var(--c-areia)",
            }}
          >
            {f.brand}
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "0.5px",
              color: "var(--c-fumaca)",
            }}
          >
            {f.credit}
          </span>
        </div>
      </div>
    </section>
  );
}
