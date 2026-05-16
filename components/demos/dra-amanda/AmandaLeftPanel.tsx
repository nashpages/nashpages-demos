"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AMANDA_DATA } from "./data";

/**
 * LEFT panel FIXED (desktop only — sticky position).
 * Mobile: este component não é renderizado.
 *
 * Contém: foto Amanda (640h) + identificação (nome / CRM / 4 áreas) + section indicator
 * que atualiza dinamicamente conforme o scroll (IntersectionObserver).
 */
export function AmandaLeftPanel() {
  const { identity, sectionLabels } = AMANDA_DATA;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionLabels.forEach((s, i) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(i);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sectionLabels]);

  const active = sectionLabels[activeIndex];

  return (
    <aside
      className="hidden lg:flex flex-col sticky top-0 h-screen w-[580px] flex-shrink-0"
      style={{ backgroundColor: "var(--c-neve)" }}
    >
      {/* Foto top — 640h fixa */}
      <div className="relative w-full h-[640px] overflow-hidden flex-shrink-0">
        <Image
          src="/demos/dra-amanda-fistarol/retrato-hero.jpg"
          alt="Dra. Amanda Fistarol"
          fill
          priority
          quality={100}
          sizes="580px"
          className="object-cover object-[center_15%]"
        />
      </div>

      {/* Identity area — abaixo da foto */}
      <div className="flex-1 px-12 pt-10 pb-6 flex flex-col">
        <p
          className="text-[11px] tracking-[0.16em]"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            color: "var(--c-carmim)",
          }}
        >
          {identity.eyebrow}
        </p>
        <h2
          className="mt-3 leading-[1.167]"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 400,
            fontSize: "36px",
            letterSpacing: "-1px",
            color: "var(--c-tinta)",
          }}
        >
          <span className="block">{identity.nameLines[0]}</span>
          <span className="block">{identity.nameLines[1]}</span>
        </h2>

        <p
          className="mt-6 text-[10px] tracking-[0.11em]"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            color: "var(--c-neblina)",
          }}
        >
          {identity.crmRqe}
        </p>

        <div className="mt-4 h-px w-10" style={{ backgroundColor: "var(--c-carmim)" }} />

        <ul className="mt-4 space-y-1">
          {identity.areas.map((area) => (
            <li
              key={area}
              className="text-[10px] tracking-[0.12em]"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                color: "var(--c-tinta)",
              }}
            >
              {area}
            </li>
          ))}
        </ul>

        {/* Section indicator bottom */}
        <div className="mt-auto pt-6">
          <div className="h-px w-full mb-3" style={{ backgroundColor: "var(--c-linha)" }} />
          <div className="flex justify-between items-center text-[10px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
            <span style={{ fontWeight: 500, color: "var(--c-carmim)" }}>
              § {String(activeIndex + 1).padStart(2, "0")} / 07
            </span>
            <span style={{ fontWeight: 400, color: "var(--c-neblina)" }}>
              {active.label}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
