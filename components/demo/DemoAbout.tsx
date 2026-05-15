import { Reveal } from "@/components/Reveal";
import type { DemoConfig } from "@/lib/types";

export function DemoAbout({ config }: { config: DemoConfig }) {
  return (
    <section
      id="sobre"
      className="border-b"
      style={{ borderColor: "var(--demo-hair)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-32">
        <Reveal>
          <p
            className="font-mono text-[10px] uppercase tracking-[0.08em] md:text-[11px]"
            style={{ color: "var(--demo-accent-soft)" }}
          >
            § 02 / SOBRE
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="mt-6 font-sans text-[36px] font-semibold tracking-[-0.03em] leading-[1.02] md:mt-10 md:text-[72px]"
            style={{ color: "var(--demo-fg)" }}
          >
            {config.about.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-16">
          <Reveal delay={0.16} className="md:col-span-8">
            <div className="flex flex-col gap-5">
              {config.about.body.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-[1.7] md:text-base"
                  style={{ color: "var(--demo-muted)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {config.about.credentials && config.about.credentials.length > 0 ? (
            <Reveal delay={0.24} className="md:col-span-4">
              <div
                className="h-px w-full border-t md:hidden"
                style={{ borderColor: "var(--demo-hair)" }}
              />
              <p
                className="mt-8 font-mono text-[9px] uppercase tracking-[0.08em] md:mt-0"
                style={{ color: "var(--demo-accent-soft)" }}
              >
                CREDENCIAIS
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {config.about.credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "var(--demo-fg)" }}
                  >
                    <span aria-hidden style={{ color: "var(--demo-accent)" }}>
                      ·
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
