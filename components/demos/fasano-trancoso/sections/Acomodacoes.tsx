"use client";

import Image from "next/image";
import { FadeUp } from "../motion";
import { ParallaxImage } from "../ParallaxImage";
import { FASANO_DATA } from "../data";

const a = FASANO_DATA.acomodacoes;

function Eyebrow() {
  return (
    <p
      style={{
        fontFamily: "var(--font-inter)",
        fontWeight: 500,
        fontSize: "12px",
        letterSpacing: "2.6px",
        color: "var(--c-madeira)",
      }}
    >
      {a.eyebrow}
    </p>
  );
}

export function Acomodacoes() {
  return (
    <section
      id="acomodacoes"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--c-areia)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-24 lg:pt-[110px] pb-24 lg:pb-[80px]">
        {/* Header — headline esquerda, parágrafo direita */}
        <div className="grid grid-cols-1 lg:grid-cols-[680px_1fr] lg:gap-16 items-start">
          <FadeUp>
            <Eyebrow />
            <h2
              className="mt-5"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontWeight: 500,
                fontSize: "clamp(34px, 4.4vw, 56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.5px",
                color: "var(--c-tinta)",
                margin: "20px 0 0",
                maxWidth: "560px",
              }}
            >
              {a.headline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p
              className="mt-6 lg:mt-2"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.75,
                color: "var(--c-fumaca)",
                margin: 0,
                maxWidth: "520px",
              }}
            >
              {a.body}
            </p>
          </FadeUp>
        </div>

        {/* Foto grande casa com piscina — parallax */}
        <FadeUp delay={0.05} y={36}>
          <div className="relative overflow-hidden w-full aspect-[1240/660] mt-14 lg:mt-[120px]">
            <ParallaxImage
              src={a.casaPiscina.src}
              alt={a.casaPiscina.alt}
              sizes="(min-width: 1024px) 1240px, 100vw"
              amount={7}
            />
          </div>
        </FadeUp>

        {/* Bangalô (retrato) + Sala — hover, sem parallax */}
        <div className="grid grid-cols-1 sm:grid-cols-[500fr_716fr] gap-4 lg:gap-6 mt-4 lg:mt-6 sm:h-[clamp(440px,43vw,620px)]">
          <FadeUp delay={0.05} y={36} className="sm:h-full">
            <div className="group relative overflow-hidden aspect-[500/620] sm:aspect-auto sm:h-full">
              <Image
                src={a.bangalo.src}
                alt={a.bangalo.alt}
                fill
                loading="eager"
                quality={95}
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.12} y={36} className="sm:h-full">
            <div className="group relative overflow-hidden aspect-[716/620] sm:aspect-auto sm:h-full">
              <Image
                src={a.sala.src}
                alt={a.sala.alt}
                fill
                loading="eager"
                quality={95}
                sizes="(min-width: 1024px) 716px, 100vw"
                className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
