import { HapticLink } from "@/components/HapticLink";
import type { DemoConfig } from "@/lib/types";

export function DemoNav({ config }: { config: DemoConfig }) {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-sm"
      style={{
        borderColor: "var(--demo-hair)",
        backgroundColor: "color-mix(in srgb, var(--demo-bg) 92%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12 md:py-5">
        <a
          href="#hero"
          className="font-sans text-sm font-semibold tracking-[-0.02em] md:text-base"
          style={{ color: "var(--demo-fg)" }}
        >
          {config.name}
        </a>
        <HapticLink
          href={config.contact.primaryCtaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-2 font-sans text-xs font-medium transition-opacity hover:opacity-90 active:scale-[0.97] md:px-5 md:py-2.5 md:text-sm"
          style={{
            backgroundColor: "var(--demo-accent)",
            color: "var(--demo-bg)",
          }}
        >
          {config.contact.primaryCtaLabel}
        </HapticLink>
      </div>
    </header>
  );
}
