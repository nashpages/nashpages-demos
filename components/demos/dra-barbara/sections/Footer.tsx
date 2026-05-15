import { BARBARA_DATA } from "../data";
import { FadeUp } from "../motion";

/* Footer — Figma 45:2 (desktop) / 50:28 (mobile)
   Desktop:
   - bg #1E1B17, content absolute left=80 top=80 w=1280
   - top-row flex justify-between:
     - logo-col gap-16: "Dra. Bárbara" Playfair Italic 32px tracking -0.32px #F8F2EA
       + "DERMATOLOGIA" Mono Medium 10px tracking 1px (10%) #9C8F87
     - col-dados gap-16: "/ DADOS" Mono Medium 10px tracking 1px #9C8F87
       + 5 lines Mono REGULAR 11px tracking 0.44px (4%) leading 1.7 #F8F2EA
     - col-navegar / col-redes similar
   - spacer 56 + divider #4A4138 + spacer 24
   - bottom flex justify-between:
     - copyright Mono Regular 10px tracking 0.6px (6%) #9C8F87
     - credit Mono Medium 10px tracking 1px (10%) #C4998A
*/
export function Footer() {
  const f = BARBARA_DATA.footer;
  return (
    <footer className="relative w-full bg-[#1E1B17]">
      <div className="max-w-[1440px] mx-auto">
        {/* DESKTOP */}
        <div className="hidden lg:block pt-[80px] pb-[80px] pl-[80px] pr-[80px]">
          <div className="w-[1280px] max-w-full flex flex-col items-start">
            <FadeUp className="w-full">
              <div className="w-full flex justify-between items-start">
                {/* logo-col */}
                <div className="flex flex-col gap-[16px] items-start">
                  <p
                    className="italic text-[#F8F2EA] whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 400,
                      fontSize: 32,
                      letterSpacing: "-0.32px",
                    }}
                  >
                    {f.logo}
                  </p>
                  <p
                    className="text-[#9C8F87]"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 500,
                      fontSize: 10,
                      letterSpacing: "1px",
                    }}
                  >
                    {f.logoSub}
                  </p>
                </div>
                <FtCol label="DADOS" items={f.dados} />
                <FtCol label="NAVEGAR" items={f.navegar} interactive />
                <FtCol label="REDES" items={f.redes} interactive />
              </div>
            </FadeUp>
            <div className="h-[56px]" />
            <FadeUp delay={0.2} className="w-full">
              <div className="w-full h-px bg-[#4A4138]" />
            </FadeUp>
            <div className="h-[24px]" />
            <FadeUp delay={0.3} className="w-full">
              <div className="w-full flex items-center justify-between">
                <p
                  className="text-[#9C8F87] whitespace-pre"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 400,
                    fontSize: 10,
                    letterSpacing: "0.6px",
                  }}
                >
                  {f.copyright}
                </p>
                <p
                  className="text-[#C4998A] whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 500,
                    fontSize: 10,
                    letterSpacing: "1px",
                  }}
                >
                  {f.credit}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* MOBILE — 50:28 */}
        <div className="lg:hidden pt-[56px] pb-[56px] pl-[24px] pr-[24px]">
          <div className="flex flex-col items-start w-[327px] max-w-full">
            <FadeUp className="w-full">
              <p
                className="italic text-[#F8F2EA]"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  fontSize: 26,
                  letterSpacing: "-0.26px",
                }}
              >
                {f.logo}
              </p>
              <div className="h-[8px]" />
              <p
                className="text-[#9C8F87]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "1px",
                }}
              >
                {f.logoSub}
              </p>
              <div className="h-[36px]" />
              <FtCol label="DADOS" items={f.dados} />
              <div className="h-[28px]" />
              <div className="grid grid-cols-2 gap-[32px]">
                <FtCol label="NAVEGAR" items={f.navegar} interactive />
                <FtCol label="REDES" items={f.redes} interactive />
              </div>
            </FadeUp>
            <div className="h-[36px]" />
            <FadeUp delay={0.2} className="w-full">
              <div className="w-full h-px bg-[#4A4138]" />
            </FadeUp>
            <div className="h-[20px]" />
            <FadeUp delay={0.3} className="w-full">
              <p
                className="text-[#9C8F87]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 400,
                  fontSize: 9,
                  letterSpacing: "0.54px",
                  lineHeight: 1.7,
                }}
              >
                {f.copyright}
              </p>
              <div className="h-[12px]" />
              <p
                className="text-[#C4998A] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "1px",
                }}
              >
                {f.credit}
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FtCol({
  label,
  items,
  interactive = false,
}: {
  label: string;
  items: readonly string[];
  interactive?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-[16px]">
      <p
        className="text-[#9C8F87] whitespace-pre"
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontWeight: 500,
          fontSize: 10,
          letterSpacing: "1px",
        }}
      >
        /  {label}
      </p>
      <ul className="flex flex-col items-start">
        {items.map((s) => (
          <li
            key={s}
            className={`text-[#F8F2EA] whitespace-nowrap transition-colors duration-300 ${
              interactive ? "hover:text-[#C4998A] cursor-default" : ""
            }`}
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: "0.44px",
              lineHeight: 1.7,
            }}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
