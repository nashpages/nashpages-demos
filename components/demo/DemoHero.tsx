import { Reveal } from "@/components/Reveal";
import { HapticLink } from "@/components/HapticLink";
import type { DemoConfig } from "@/lib/types";

export function DemoHero({ config }: { config: DemoConfig }) {
  return (
    <section
      id="hero"
      className="border-b"
      style={{ borderColor: "var(--demo-hair)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 pb-16 pt-12 md:px-12 md:pb-28 md:pt-20">
        {config.taglineEyebrow ? (
          <Reveal>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.08em] md:text-[11px]"
              style={{ color: "var(--demo-accent-soft)" }}
            >
              {config.taglineEyebrow}
            </p>
          </Reveal>
        ) : null}

        <Reveal delay={0.08}>
          <h1
            className="mt-8 font-sans font-semibold tracking-[-0.03em] leading-[1.02] md:mt-12"
            style={{ color: "var(--demo-fg)" }}
          >
            <span className="block text-[40px] md:text-[72px] lg:text-[88px]">
              {config.hero.headline}
            </span>
            {config.hero.sublineMuted ? (
              <span
                className="mt-1 block text-[40px] md:text-[72px] lg:text-[88px]"
                style={{ color: "var(--demo-muted)" }}
              >
                {config.hero.sublineMuted}
              </span>
            ) : null}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p
            className="mt-10 max-w-3xl text-base leading-[1.55] md:mt-14 md:text-lg"
            style={{ color: "var(--demo-muted)" }}
          >
            {config.hero.description}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col gap-3 md:mt-14 md:flex-row md:gap-4">
            <HapticLink
              href={config.contact.primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-sans text-sm font-medium transition-opacity hover:opacity-90 active:scale-[0.98] md:text-[15px]"
              style={{
                backgroundColor: "var(--demo-accent)",
                color: "var(--demo-bg)",
              }}
            >
              {config.contact.primaryCtaLabel}
              <span aria-hidden>→</span>
            </HapticLink>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-4 font-sans text-sm font-medium transition-colors active:scale-[0.98] md:text-[15px]"
              style={{
                borderColor: "var(--demo-hair)",
                color: "var(--demo-fg)",
              }}
            >
              Conhecer o profissional <span aria-hidden>↓</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
