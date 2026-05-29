"use client";

import { useState } from "react";
import { PorticoMark } from "./PorticoMark";
import { PORTICO_DATA, PORTICO_WHATSAPP } from "./data";

export function PorticoNav() {
  const [open, setOpen] = useState(false);
  const { nav } = PORTICO_DATA;

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "var(--c-concreto)",
        borderBottom: "1px solid var(--c-linha)",
      }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#topo"
          className="flex items-center gap-2.5"
          style={{ color: "var(--c-grafite)" }}
        >
          <PorticoMark h={24} />
          <span
            className="text-[19px]"
            style={{ fontFamily: "var(--font-archivo)", fontWeight: 700 }}
          >
            PÓRTICO
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] transition-opacity hover:opacity-60"
              style={{ color: "var(--c-grafite)", fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={PORTICO_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-[5px] px-5 py-2.5 text-[15px] transition-opacity hover:opacity-90 md:inline-block"
          style={{ backgroundColor: "var(--c-ambar)", color: "#fff", fontWeight: 500 }}
        >
          {nav.cta}
        </a>

        <button
          type="button"
          className="flex flex-col gap-[5px] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ width: 24, height: 2, backgroundColor: "var(--c-grafite)" }}
            />
          ))}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid var(--c-linha)",
            backgroundColor: "var(--c-concreto)",
          }}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-[16px]"
                style={{ color: "var(--c-grafite)", fontWeight: 500 }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={PORTICO_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-[5px] px-5 py-3 text-center text-[15px]"
              style={{ backgroundColor: "var(--c-ambar)", color: "#fff", fontWeight: 500 }}
            >
              {nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
