import { Reveal } from "@/components/Reveal";
import { HapticLink } from "@/components/HapticLink";
import type { DemoConfig } from "@/lib/types";

export function DemoContato({ config }: { config: DemoConfig }) {
  return (
    <section id="contato">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-32">
        <Reveal>
          <p
            className="font-mono text-[10px] uppercase tracking-[0.08em] md:text-[11px]"
            style={{ color: "var(--demo-accent-soft)" }}
          >
            § 05 / CONTATO
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="mt-6 font-sans text-[48px] font-semibold tracking-[-0.03em] leading-[1.02] md:mt-10 md:text-[112px]"
            style={{ color: "var(--demo-fg)" }}
          >
            {config.contact.title}
          </h2>
        </Reveal>

        {config.contact.subline ? (
          <Reveal delay={0.16}>
            <p
              className="mt-8 max-w-2xl text-base leading-[1.55] md:mt-12 md:text-lg"
              style={{ color: "var(--demo-muted)" }}
            >
              {config.contact.subline}
            </p>
          </Reveal>
        ) : null}

        <Reveal delay={0.24}>
          <div className="mt-10 md:mt-16">
            <HapticLink
              href={config.contact.primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              haptic={[8, 30, 8]}
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 font-sans text-base font-semibold tracking-[-0.01em] transition-opacity hover:opacity-90 active:scale-[0.98] md:px-10 md:py-6 md:text-lg"
              style={{
                backgroundColor: "var(--demo-accent)",
                color: "var(--demo-bg)",
              }}
            >
              {config.contact.primaryCtaLabel}
              <span aria-hidden>→</span>
            </HapticLink>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div
            className="mt-16 grid grid-cols-1 gap-x-12 gap-y-8 border-t pt-10 md:mt-24 md:grid-cols-3 md:pt-12"
            style={{ borderColor: "var(--demo-hair)" }}
          >
            {config.contact.items.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <p
                  className="font-mono text-[9px] uppercase tracking-[0.08em]"
                  style={{ color: "var(--demo-accent-soft)" }}
                >
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="font-sans text-base transition-opacity hover:opacity-70 md:text-lg"
                    style={{ color: "var(--demo-fg)" }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    className="font-sans text-base md:text-lg"
                    style={{ color: "var(--demo-fg)" }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
