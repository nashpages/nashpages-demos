"use client";

import Image from "next/image";
import { FadeUp } from "../motion";
import { FRANCIONI_DATA } from "../data";

const v = FRANCIONI_DATA.vinhos;
const PHOTO_W = "clamp(360px, 40vw, 600px)";
const TEXT_LEFT = "calc(clamp(360px, 40vw, 600px) + 80px - max(0px, (100vw - 1440px) / 2))";

function IconRow({ icon }: { icon: (typeof v.icons)[number] }) {
  return (
    <div>
      <h3 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, fontSize: "clamp(20px, 2.1vw, 24px)", lineHeight: 1.1, color: "var(--c-giz)", margin: 0 }}>
        {icon.name}
      </h3>
      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "13px", lineHeight: 1.5, color: "var(--c-giz)", opacity: 0.66, margin: "8px 0 0" }}>
        {icon.desc}
      </p>
    </div>
  );
}

function Header() {
  return (
    <>
      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "13px", letterSpacing: "3px", color: "var(--c-giz)", opacity: 0.8, marginBottom: "20px" }}>
        {v.eyebrow}
      </p>
      <h2 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, fontSize: "clamp(34px, 4.2vw, 50px)", lineHeight: 1.06, letterSpacing: "-0.5px", color: "var(--c-giz)", margin: 0 }}>
        <span className="block">{v.headline[0]}</span>
        <span className="block" style={{ fontStyle: "italic" }}>{v.headline[1]}</span>
      </h2>
      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "15px", lineHeight: 1.72, color: "var(--c-giz)", opacity: 0.82, margin: "26px 0 0", maxWidth: "560px" }}>
        {v.body}
      </p>
    </>
  );
}

export function OsVinhos() {
  return (
    <section id="vinhos" className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--c-noite)" }}>
      {/* DESKTOP — split: garrafa full-height esquerda + conteúdo direita */}
      <div className="hidden lg:block relative w-full">
        <div className="absolute left-0 top-0 bottom-0 overflow-hidden" style={{ width: PHOTO_W }}>
          <Image src={v.photo.src} alt={v.photo.alt} fill loading="eager" quality={95} sizes="(min-width:1024px) 600px, 100vw" className="object-cover object-center" />
          <span className="absolute bottom-7 left-7 z-10" style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "11px", letterSpacing: "2.2px", color: "var(--c-giz)", opacity: 0.9, textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>
            {v.photo.caption}
          </span>
        </div>
        <div className="max-w-[1440px] mx-auto relative min-h-screen">
          <div className="absolute flex flex-col justify-center" style={{ left: TEXT_LEFT, right: "100px", top: 0, bottom: 0 }}>
            <FadeUp><Header /></FadeUp>
            <FadeUp delay={0.12}>
              <div className="mt-9 flex flex-col gap-6" style={{ borderTop: "1px solid rgba(239,237,230,0.16)", paddingTop: "28px" }}>
                {v.icons.map((ic) => <IconRow key={ic.name} icon={ic} />)}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden relative w-full h-[460px] overflow-hidden">
        <Image src={v.photo.src} alt={v.photo.alt} fill loading="eager" quality={95} sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="lg:hidden px-6 pt-14 pb-16">
        <Header />
        <div className="mt-8 pt-7 flex flex-col gap-6" style={{ borderTop: "1px solid rgba(239,237,230,0.16)" }}>
          {v.icons.map((ic) => <IconRow key={ic.name} icon={ic} />)}
        </div>
      </div>
    </section>
  );
}
