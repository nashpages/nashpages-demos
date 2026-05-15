import { Reveal } from "@/components/Reveal";
import type { DemoConfig } from "@/lib/types";

export function DemoEspecialidades({ config }: { config: DemoConfig }) {
  return (
    <section
      id="especialidades"
      className="border-b"
      style={{ borderColor: "var(--demo-hair)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-32">
        <Reveal>
          <p
            className="font-mono text-[10px] uppercase tracking-[0.08em] md:text-[11px]"
            style={{ color: "var(--demo-accent-soft)" }}
          >
            § 03 / ESPECIALIDADES
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="mt-6 font-sans text-[36px] font-semibold tracking-[-0.03em] leading-[1.02] md:mt-10 md:text-[72px]"
            style={{ color: "var(--demo-fg)" }}
          >
            {config.specialties.title}
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-0 md:mt-16 md:grid-cols-2">
          {config.specialties.items.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <li
                className="flex flex-col gap-2 border-t py-6 md:py-8"
                style={{ borderColor: "var(--demo-hair)" }}
              >
                <span
                  className="font-mono text-[9px] tracking-[0.06em]"
                  style={{ color: "var(--demo-accent-soft)" }}
                >
                  § 03.{String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-sans text-xl font-semibold tracking-[-0.02em] md:text-2xl"
                  style={{ color: "var(--demo-fg)" }}
                >
                  {item.title}
                </h3>
                {item.description ? (
                  <p
                    className="text-sm leading-[1.55] md:text-[15px]"
                    style={{ color: "var(--demo-muted)" }}
                  >
                    {item.description}
                  </p>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
