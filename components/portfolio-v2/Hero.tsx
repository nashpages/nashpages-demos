"use client";

import Image from "next/image";
import { Float } from "./MouseParallax";
import { CrownBob } from "./CrownBob";
import { ParallaxImage, Eyebrow, ProjectName } from "./ui";
import { RYO, FONT_VAR } from "./data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col pb-[6vh]">
      {/* masthead */}
      <Float depth={18} className="pt-[clamp(26px,5vh,62px)]">
        <h1
          className="text-center"
          style={{
            fontFamily: "var(--font-geist)",
            fontWeight: 500,
            fontSize: "clamp(40px,7vw,72px)",
            letterSpacing: "-0.03em",
            color: "#0E0B0B",
          }}
        >
          Portfolio
        </h1>
      </Float>

      {/* Ryo em destaque: chef (P&B) à esquerda + kanji à direita */}
      <a
        href={`/${RYO.slug}`}
        target="_blank"
        rel="noreferrer"
        className="mx-auto mt-[clamp(72px,13vh,140px)] flex w-full max-w-[1440px] flex-col items-center gap-12 px-5 pb-[clamp(20px,4vh,48px)] md:mt-0 md:flex-1 md:flex-row md:items-center md:justify-between md:gap-8 md:px-14"
      >
        <Float depth={16} className="order-2 md:order-1">
          {/* coroa — marca o Ryo como projeto em destaque (acima do "01") */}
          <CrownBob className="mb-2 ml-[-15px] w-fit md:mb-3">
            <Image
              src="/portfolio-v2/crown.png"
              alt=""
              width={48}
              height={48}
              className="select-none"
              priority
            />
          </CrownBob>
          <Eyebrow>
            {RYO.index} · {RYO.category}
          </Eyebrow>
          <ProjectName>{RYO.name}</ProjectName>
          <ParallaxImage
            src={RYO.photo}
            alt={RYO.name}
            grayscale
            priority
            range={26}
            className="mt-4 aspect-[348/500] w-[clamp(176px,21vw,300px)]"
          />
        </Float>

        <Float depth={28} className="order-1 leading-none md:order-2">
          <span
            className="block transition-opacity duration-300 hover:opacity-80"
            style={{
              fontFamily: FONT_VAR.shippori,
              fontWeight: 500,
              fontSize: "clamp(150px,26vw,380px)",
              lineHeight: 0.9,
              color: "#000",
            }}
          >
            {RYO.kanji}
          </span>
        </Float>
      </a>
    </section>
  );
}
