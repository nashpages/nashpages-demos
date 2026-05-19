"use client";

import Image from "next/image";
import { MPL_DATA } from "../data";
import { FadeUp } from "../motion";

export function Sergio() {
  const { sergio } = MPL_DATA;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-pedra)" }}
    >
      {/* Photo right (desktop) / top (mobile) */}
      <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[36%] max-w-[540px]">
        <Image
          src={sergio.photo}
          alt=""
          fill
          loading="eager"
          quality={92}
          sizes="(min-width: 1024px) 36vw, 100vw"
          className="object-cover object-center"
        />
        {/* Horizontal gradient LEFT → CENTER → RIGHT */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(232,224,210,0.55) 0%, rgba(232,224,210,0.10) 45%, rgba(232,224,210,0) 100%)",
          }}
        />
      </div>

      {/* Mobile: photo top */}
      <div className="lg:hidden relative w-full h-[360px]">
        <Image
          src={sergio.photo}
          alt=""
          fill
          loading="eager"
          quality={92}
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[80px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(232,224,210,0) 0%, rgba(232,224,210,1) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-[80px] py-16 lg:py-32">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-accent)",
            }}
          >
            {sergio.eyebrow}
          </p>
          <span
            aria-hidden
            className="block mt-3"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent)" }}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-8 max-w-[740px]"
            style={{
              fontFamily: "var(--font-source-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(38px, 6vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "clamp(-1px, -0.14vw, -1.8px)",
              color: "var(--c-tinta)",
              margin: 0,
            }}
          >
            {sergio.nameLine1}
            <br />
            {sergio.nameLine2}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="mt-8 max-w-[740px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(14px, 1.3vw, 18px)",
              lineHeight: 1.65,
              color: "var(--c-neblina)",
            }}
          >
            {sergio.body}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <span
            aria-hidden
            className="block mt-12"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-linha)" }}
          />
          <div className="mt-6 flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
            {sergio.chambers.map((c) => (
              <div key={c.dept}>
                <p
                  style={{
                    fontFamily: "var(--font-source-serif)",
                    fontWeight: 500,
                    fontSize: "18px",
                    letterSpacing: "0.5px",
                    color: "var(--c-accent)",
                  }}
                >
                  {c.band}
                </p>
                <p
                  className="mt-1.5"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 400,
                    fontSize: "10px",
                    letterSpacing: "1.4px",
                    color: "var(--c-neblina)",
                  }}
                >
                  {c.dept}
                </p>
              </div>
            ))}
          </div>
          <p
            className="mt-10"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-tinta)",
            }}
          >
            {sergio.chambersFooter}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
