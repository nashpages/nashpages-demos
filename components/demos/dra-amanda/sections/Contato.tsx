"use client";

import { AMANDA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

export function Contato() {
  const { contato } = AMANDA_DATA;
  return (
    <section id="contato" className="w-full lg:px-16 px-6 lg:py-24 py-16">
      <FadeUp>
        <p className="text-[11px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          {contato.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.15}>
        <h2 className="mt-5 lg:text-[104px] text-[64px] leading-[1.04]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-3.5px", color: "var(--c-tinta)" }}>
          <span className="block">{contato.headlineLines[0]}</span>
          <span className="block">{contato.headlineLines[1]}</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.4}>
        <p className="mt-8 italic lg:text-[22px] text-[18px]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, color: "var(--c-carmim)" }}>
          {contato.accent}
        </p>
      </FadeUp>
      <FadeUp delay={0.5}>
        <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
      </FadeUp>

      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div>
          <FadeUp delay={0.55}>
            <p className="text-[17px] leading-[1.65]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--c-tinta)" }}>
              {contato.body}
            </p>
          </FadeUp>
          <FadeUp delay={0.65}>
            <a href={contato.cta.href} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full lg:w-auto w-full py-[20px] px-8 text-[13px] tracking-[0.16em] transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, backgroundColor: "var(--c-carmim)", color: "var(--c-papel)" }}>
              {contato.cta.label}  →
            </a>
          </FadeUp>
          <FadeUp delay={0.75}>
            <div className="mt-10 h-px w-[60px]" style={{ backgroundColor: "var(--c-carmim)" }} />
            <p className="mt-5 lg:text-[32px] text-[28px]"
              style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "-1px", color: "var(--c-tinta)" }}>
              {contato.phoneLine}
            </p>
            <p className="mt-2 text-[11px] tracking-[0.13em]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
              {contato.phoneLabel}
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.55}>
          <p className="text-[13px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
            /  REDES
          </p>
          <Stagger delay={0.1} staggerChildren={0.08} className="mt-5 space-y-2">
            {contato.socials.map((s) => (
              <StaggerItem key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer"
                  className="italic text-[20px] transition-opacity hover:opacity-70"
                  style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, color: "var(--c-tinta)" }}>
                  {s.label}
                </a>
              </StaggerItem>
            ))}
            <StaggerItem>
              <p className="mt-2 text-[11px] tracking-[0.13em]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-neblina)" }}>
                {contato.fixedNote}
              </p>
            </StaggerItem>
          </Stagger>
        </FadeUp>
      </div>
    </section>
  );
}
