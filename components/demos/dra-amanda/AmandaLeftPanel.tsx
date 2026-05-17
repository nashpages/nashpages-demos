"use client";

import Image from "next/image";
import { AMANDA_DATA } from "./data";

/**
 * LEFT panel — sempre visível durante horizontal scroll desktop.
 * Mobile: não é renderizado (hidden via Tailwind no parent).
 */
export function AmandaLeftPanel({ activeIndex }: { activeIndex: number }) {
  const { identity, sections } = AMANDA_DATA;
  const active = sections[activeIndex] ?? sections[0];

  return (
    <aside
      className="flex flex-col w-[580px] h-full flex-shrink-0"
      style={{ backgroundColor: "var(--c-neve)" }}
    >
      {/* Foto top — proporção 580 x 500 */}
      <div className="relative w-full h-[500px] overflow-hidden flex-shrink-0">
        <Image
          src={AMANDA_DATA.photoHero}
          alt="Dra. Amanda Fistarol"
          fill priority quality={100} sizes="580px"
          className="object-cover object-[center_15%]"
        />
      </div>

      <div className="flex-1 px-12 py-6 flex flex-col min-h-0">
        <p
          className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}
        >
          {identity.eyebrow}
        </p>
        <h2
          className="mt-3 leading-[1.167]"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 400,
            fontSize: "32px",
            letterSpacing: "-0.8px",
            color: "var(--c-tinta)",
          }}
        >
          <span className="block">{identity.nameLines[0]}</span>
          <span className="block">{identity.nameLines[1]}</span>
        </h2>

        <p
          className="mt-4 text-[10px] tracking-[0.11em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}
        >
          {identity.crmRqe}
        </p>

        <div className="mt-3 h-px w-10" style={{ backgroundColor: "var(--c-carmim)" }} />

        <p
          className="mt-3 text-[9px] tracking-[0.11em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}
        >
          {identity.areas.join("  ·  ")}
        </p>

        {/* Section indicator bottom */}
        <div className="mt-auto pt-4">
          <div className="h-px w-full mb-3" style={{ backgroundColor: "var(--c-linha)" }} />
          <div className="flex justify-between items-center text-[10px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
            <span style={{ fontWeight: 500, color: "var(--c-carmim)" }}>
              § {String(activeIndex + 1).padStart(2, "0")} / 07  ·  {active.label}
            </span>
            <span style={{ fontWeight: 500, color: "var(--c-neblina)" }}>
              ←  →
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
