import { Reveal } from "@/components/Reveal";
import type { DemoConfig } from "@/lib/types";

export function DemoDiferenciais({ config }: { config: DemoConfig }) {
  if (!config.differentials || config.differentials.items.length === 0)
    return null;

  return (
    <section
      id="diferenciais"
      className="border-b"
      style={{ borderColor: "var(--demo-hair)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-32">
        <Reveal>
          <p
            className="font-mono text-[10px] uppercase tracking-[0.08em] md:text-[11px]"
            style={{ color: "var(--demo-accent-soft)" }}
          >
            § 04 / DIFERENCIAIS
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-[40px] font-medium tracking-[-0.01em] leading-[1.02] md:mt-10 md:text-[64px]"
            style={{ color: "var(--demo-fg)" }}
          >
            {config.differentials.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {config.differentials.items.map((item, i) => (
            <Reveal key={item.title} delay={0.16 + i * 0.08}>
              <article
                className="flex h-full flex-col gap-4 rounded-sm border p-6 md:p-8"
                style={{ borderColor: "var(--demo-hair)" }}
              >
                <p
                  className="font-mono text-[9px] uppercase tracking-[0.08em]"
                  style={{ color: "var(--demo-accent)" }}
                >
                  {item.label}
                </p>
                <h3
                  className="font-[family-name:var(--font-display)] text-[22px] font-medium tracking-[-0.005em] leading-tight md:text-[28px]"
                  style={{ color: "var(--demo-fg)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-[1.6] md:text-[15px]"
                  style={{ color: "var(--demo-muted)" }}
                >
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
