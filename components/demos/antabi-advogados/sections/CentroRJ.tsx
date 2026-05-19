"use client";

import Image from "next/image";
import { ANTABI_DATA } from "../data";
import { FadeUp } from "../motion";

export function CentroRJ() {
  const { centroRJ } = ANTABI_DATA;

  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "var(--c-tinta-deep)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] pt-20 lg:pt-28">
        <FadeUp y={12}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "1.8px",
              color: "var(--c-accent-light)",
            }}
          >
            {centroRJ.eyebrow}
          </p>
          <span
            aria-hidden
            className="block mt-3"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--c-accent-light)" }}
          />
        </FadeUp>
      </div>

      {/* Foto Rio full-bleed */}
      <div className="relative w-full h-[260px] md:h-[320px] mt-12 lg:mt-16 overflow-hidden">
        <Image
          src={centroRJ.photo}
          alt=""
          fill
          loading="eager"
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,13,9,0.78) 0%, rgba(15,13,9,0.18) 45%, rgba(27,68,133,0.22) 100%)",
          }}
        />

        <div className="relative max-w-[1440px] mx-auto h-full px-6 lg:px-[80px] flex items-center justify-between gap-6">
          <div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "1.6px",
                color: "var(--c-accent-light)",
              }}
            >
              {centroRJ.label}
            </p>
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--font-lora)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 42px)",
                letterSpacing: "clamp(-0.6px, -0.08vw, -1px)",
                color: "var(--c-papel)",
                lineHeight: 1.1,
              }}
            >
              {centroRJ.nome}
            </p>
            <p
              className="mt-3 hidden md:block"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "1.4px",
                color: "#C8D2E5",
              }}
            >
              {centroRJ.enderecoFull}
            </p>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href={centroRJ.telHref}
              className="hidden md:block hover:opacity-80"
              style={{
                fontFamily: "var(--font-lora)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "22px",
                color: "var(--c-papel)",
              }}
            >
              {centroRJ.tel}
            </a>
            <span
              aria-hidden
              style={{
                fontFamily: "var(--font-lora)",
                fontWeight: 400,
                fontSize: "28px",
                color: "var(--c-accent-light)",
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
