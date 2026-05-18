"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ELISANGELA_DATA } from "../data";

export function Footer() {
  const { footer } = ELISANGELA_DATA;
  const reduce = useReducedMotion();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--c-accent-deep)", color: "var(--c-papel)" }}
    >
      {/* Marquee animado ELISANGELA — infinite scroll */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 pointer-events-none select-none overflow-hidden"
        style={{
          fontFamily: "var(--font-cormorant-garamond)",
          fontWeight: 400,
          fontSize: "clamp(120px, 18vw, 220px)",
          lineHeight: 1,
          letterSpacing: "-6px",
          color: "rgba(244,244,238,0.06)",
          whiteSpace: "nowrap",
          padding: "20px 0 0",
          fontStyle: "italic",
        }}
      >
        <motion.div
          className="inline-block"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={reduce ? undefined : { duration: 40, ease: "linear", repeat: Infinity }}
        >
          {"Elisangela  ·  Elisangela  ·  Elisangela  ·  Elisangela  ·  Elisangela  ·  Elisangela  ·  "}
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] pt-32 lg:pt-[240px] pb-10 lg:pb-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {footer.blocks.map((b) => (
            <div key={b.label}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  color: "var(--c-footer-muted)",
                }}
              >
                {`/  ${b.label}`}
              </p>
              <div className="h-5" />
              <p
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "-0.2px",
                  color: "var(--c-papel)",
                }}
              >
                {b.title}
              </p>
              <div className="h-3" />
              <div className="space-y-1">
                {b.body.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 300,
                      fontSize: "12px",
                      lineHeight: "20px",
                      color: "var(--c-footer-muted)",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="h-10 lg:h-[60px]" />
        <div className="h-px w-full" style={{ backgroundColor: "var(--c-footer-linha)" }} />
        <div className="h-5" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-footer-muted)" }}>
            {footer.bottomLine}
          </p>
          <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, fontSize: "10px", letterSpacing: "1.5px", color: "var(--c-accent)" }}>
            {footer.bottomSignature}
          </p>
        </div>
      </div>
    </footer>
  );
}
