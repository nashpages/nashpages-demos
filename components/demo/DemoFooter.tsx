import type { DemoConfig } from "@/lib/types";

type Props = {
  footer: DemoConfig["footer"];
  logoText: string;
};

export function DemoFooter({ footer, logoText }: Props) {
  return (
    <footer
      className="relative w-full border-t py-10 md:py-14"
      style={{ background: "var(--demo-bg)", borderColor: "var(--demo-hair)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
        {/* 3 cols */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20">
          {/* Col 1: Logo + dados */}
          <div>
            <p
              className="text-[12px] md:text-[14px] font-semibold tracking-[0.18em]"
              style={{ color: "var(--demo-fg)" }}
            >
              {logoText}
            </p>
            <div className="mt-5 space-y-1.5">
              {footer.dados.map((linha, i) => (
                <p
                  key={i}
                  className="text-[10px] md:text-[11px] tracking-[0.12em]"
                  style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {linha}
                </p>
              ))}
            </div>
          </div>

          {/* Col 2: Navegar */}
          <div>
            <p
              className="text-[10px] md:text-[11px] font-medium tracking-[0.18em]"
              style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
            >
              {footer.navHeader}
            </p>
            <div className="mt-5 space-y-2">
              {footer.navLinks.map((link) => (
                <p
                  key={link}
                  className="text-[10px] md:text-[11px] tracking-[0.14em]"
                  style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
                >
                  {link}
                </p>
              ))}
            </div>
          </div>

          {/* Col 3: Redes */}
          <div>
            <p
              className="text-[10px] md:text-[11px] font-medium tracking-[0.18em]"
              style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
            >
              {footer.redesHeader}
            </p>
            <div className="mt-5 space-y-2">
              {footer.redesLinks.map((link) => (
                <p
                  key={link}
                  className="text-[10px] md:text-[11px] tracking-[0.14em]"
                  style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
                >
                  {link}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 md:mt-16 flex flex-col items-start justify-between gap-1 md:flex-row md:items-center md:gap-0">
          <p
            className="text-[9px] md:text-[10px] tracking-[0.12em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            {footer.copyright} · {footer.cnpj}
          </p>
          <p
            className="text-[9px] md:text-[10px] tracking-[0.14em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            {footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
