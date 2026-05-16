"use client";

import Image from "next/image";
import { AMANDA_DATA } from "../data";
import { FadeUp } from "../motion";

const NAV_LINKS = AMANDA_DATA.nav.links;

function MobileTopNav() {
  return (
    <div className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
      style={{ backgroundColor: "rgba(252, 244, 237, 0.92)" }}>
      <a href="#top" className="text-[14px] tracking-[0.16em]"
        style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, color: "var(--c-tinta)" }}>
        Dra. Amanda Fistarol.
      </a>
      <a href={AMANDA_DATA.hero.primaryCta.href} target="_blank" rel="noopener noreferrer"
        className="text-[10px] tracking-[0.16em]"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
        MENU
      </a>
    </div>
  );
}

function DesktopTopNav() {
  return (
    <div className="hidden lg:flex justify-between items-center px-16 pt-10 pb-6">
      <p className="text-[10px] tracking-[0.16em]"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
        {AMANDA_DATA.nav.logo}
      </p>
      <nav className="flex items-center gap-9">
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href}
            className="text-[10px] tracking-[0.16em] transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export function Hero() {
  const { hero } = AMANDA_DATA;
  return (
    <>
      <MobileTopNav />
      <section id="top" className="w-full relative">
        {/* MOBILE only — foto top + content abaixo */}
        <div className="lg:hidden">
          <div className="relative w-full h-[440px] overflow-hidden">
            <Image
              src="/demos/dra-amanda-fistarol/retrato-hero.jpg"
              alt="Dra. Amanda Fistarol"
              fill priority quality={100} sizes="100vw"
              className="object-cover object-[center_15%]"
            />
          </div>
          <div className="px-6 pt-10 pb-14">
            <p className="text-[10px] tracking-[0.16em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
              {hero.eyebrow}
            </p>
            <FadeUp delay={0.1}>
              <h1 className="mt-5 leading-[1.05]"
                style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, fontSize: "52px", letterSpacing: "-1.5px", color: "var(--c-tinta)" }}>
                <span className="block">{hero.headlineLines[0]}</span>
                <span className="block">{hero.headlineLines[1]}</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="mt-6 text-[14px] leading-[1.57]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                {hero.subline}
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="mt-8 italic text-[18px] leading-[1.55]"
                style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
                {hero.quote}
              </p>
              <p className="mt-3 text-[10px] tracking-[0.13em]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
                {hero.quoteAttribution}
              </p>
            </FadeUp>
            <FadeUp delay={0.5}>
              <a href={hero.primaryCta.href} target="_blank" rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center rounded-full py-4 px-6 text-[11px] tracking-[0.16em] transition-opacity hover:opacity-90"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, backgroundColor: "var(--c-carmim)", color: "var(--c-papel)" }}>
                {hero.primaryCta.label}  →
              </a>
              <a href={hero.secondaryCta.href}
                className="mt-4 inline-block text-[11px] tracking-[0.16em]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
                {hero.secondaryCta.label}  →
              </a>
            </FadeUp>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <DesktopTopNav />
          <div className="px-16 pb-20">
            <div className="h-px w-full mb-12" style={{ backgroundColor: "var(--c-linha)" }} />
            <FadeUp>
              <p className="text-[11px] tracking-[0.16em]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
                {hero.eyebrow}
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h1 className="mt-5 leading-[1.042]"
                style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, fontSize: "96px", letterSpacing: "-3px", color: "var(--c-tinta)" }}>
                <span className="block">{hero.headlineLines[0]}</span>
                <span className="block">{hero.headlineLines[1]}</span>
              </h1>
            </FadeUp>
            <div className="mt-12 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
            <FadeUp delay={0.4}>
              <p className="mt-7 text-[17px] leading-[1.65] max-w-[640px]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
                {hero.subline}
              </p>
            </FadeUp>
            <FadeUp delay={0.55}>
              <p className="mt-10 italic text-[24px] leading-[1.5] max-w-[640px]"
                style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-neblina)" }}>
                {hero.quote}
              </p>
              <p className="mt-4 text-[10px] tracking-[0.13em]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
                {hero.quoteAttribution}
              </p>
            </FadeUp>
            <FadeUp delay={0.7}>
              <div className="mt-12 flex items-center gap-12">
                <a href={hero.primaryCta.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full py-[18px] px-8 text-[12px] tracking-[0.16em] transition-opacity hover:opacity-90"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, backgroundColor: "var(--c-carmim)", color: "var(--c-papel)" }}>
                  {hero.primaryCta.label}  →
                </a>
                <a href={hero.secondaryCta.href} className="group inline-flex flex-col gap-[10px]">
                  <span className="text-[12px] tracking-[0.16em] transition-transform duration-300 group-hover:translate-x-1"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
                    {hero.secondaryCta.label}  →
                  </span>
                  <span className="h-px w-[180px] origin-left transition-transform duration-500 group-hover:scale-x-110"
                    style={{ backgroundColor: "var(--c-tinta)" }} />
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.85}>
              <div className="mt-16 pt-6 border-t flex justify-between text-[10px] tracking-[0.11em] flex-wrap gap-y-2"
                style={{ borderColor: "var(--c-linha)", fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 400, color: "var(--c-neblina)" }}>
                {hero.meta.map((m) => <span key={m}>{m}</span>)}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
