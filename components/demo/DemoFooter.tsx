import type { DemoConfig } from "@/lib/types";

export function DemoFooter({ config }: { config: DemoConfig }) {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--demo-hair)" }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12 md:py-12">
        <p
          className="font-sans text-sm"
          style={{ color: "var(--demo-fg)" }}
        >
          {config.name}{" "}
          <span style={{ color: "var(--demo-muted)" }}>· {config.title}</span>
        </p>
        <p
          className="font-mono text-[10px] uppercase tracking-[0.08em]"
          style={{ color: "var(--demo-muted)" }}
        >
          Site por{" "}
          <a
            href="https://nashpages.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            style={{ color: "var(--demo-fg)" }}
          >
            nashpages.com.br
          </a>
        </p>
      </div>
    </footer>
  );
}
