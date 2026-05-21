"use client";

import { FadeUp } from "../motion";
import { FASANO_DATA } from "../data";

export function Manifesto() {
  const m = FASANO_DATA.manifesto;

  return (
    <section
      id="manifesto"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-areia)" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-[100px] py-28 lg:py-40 flex flex-col items-center text-center">
        <FadeUp>
          <span
            aria-hidden
            style={{
              display: "block",
              width: "44px",
              height: "2px",
              backgroundColor: "var(--c-madeira)",
              margin: "0 auto 26px",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "3px",
              color: "var(--c-madeira)",
            }}
          >
            {m.eyebrow}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontWeight: 500,
              fontSize: "clamp(34px, 5vw, 64px)",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              color: "var(--c-tinta)",
              margin: "26px 0 0",
            }}
          >
            {m.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: 1.75,
              color: "var(--c-fumaca)",
              margin: "32px auto 0",
              maxWidth: "720px",
            }}
          >
            {m.body}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
