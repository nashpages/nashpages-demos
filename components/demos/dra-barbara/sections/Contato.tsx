import { BARBARA_DATA } from "../data";
import { FadeUp, WordReveal, Stagger, StaggerItem } from "../motion";

export function Contato() {
  const c = BARBARA_DATA.contato;
  return (
    <section id="contato" className="relative w-full bg-[#F2E4DD]">
      {/* ============================================================
          DESKTOP — Figma 43:2
          - bg #F2E4DD
          - row absolute left=80 top=120 w=1280, gap 80, 2 cols: 760 + 440
          - col-left: eyebrow + 48 + headline 128px + 40 + accent italic 24px
          - col-right: body 17 + 40 + CTA pill + 56 + divider 60 + 40 + phone 32 +
            12 + label + 56 + REDES + 20 + 3 socials Playfair italic 20
          ============================================================ */}
      <div className="hidden lg:block">
        <div className="max-w-[1440px] mx-auto relative">
          <div className="pt-[120px] pb-[120px] pl-[80px] pr-[80px]">
            <div className="grid grid-cols-[760px_440px] gap-[80px] items-start max-w-[1280px]">
              {/* col-left */}
              <div className="flex flex-col items-start w-[760px]">
                <FadeUp>
                  <p
                    className="text-[#6B5F5A] text-[11px]"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 500,
                      letterSpacing: "0.88px",
                    }}
                  >
                    § 06  /  CONTATO
                  </p>
                </FadeUp>
                <div className="h-[48px]" />
                <WordReveal
                  lines={c.headlineLines}
                  delay={0.15}
                  stagger={0.11}
                  className="block text-[#2A2520] text-[128px]"
                  lineClassName="leading-none"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 400,
                    letterSpacing: "-3.84px",
                  }}
                />
                <div className="h-[40px]" />
                <FadeUp delay={0.75}>
                  <p
                    className="italic text-[#C4998A] text-[24px] whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {c.accent}
                  </p>
                </FadeUp>
              </div>

              {/* col-right */}
              <div className="flex flex-col items-start w-[440px]">
                <ContatoInfo />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE — Figma 50:2
          - bg #F2E4DD
          - content absolute left=24 top=80 w=327
          ============================================================ */}
      <div className="lg:hidden">
        <div className="pt-[80px] pb-[80px] pl-[24px] pr-[24px]">
          <div className="flex flex-col items-start w-[327px] max-w-full">
            <FadeUp>
              <p
                className="text-[#6B5F5A] text-[10px]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.8px",
                }}
              >
                § 06  /  CONTATO
              </p>
            </FadeUp>
            <div className="h-[28px]" />
            <WordReveal
              lines={c.headlineLines}
              delay={0.15}
              stagger={0.09}
              className="block text-[#2A2520] text-[64px]"
              lineClassName="leading-none"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 400,
                letterSpacing: "-1.92px",
              }}
            />
            <div className="h-[20px]" />
            <FadeUp delay={0.7}>
              <p
                className="italic text-[#C4998A] text-[18px] whitespace-nowrap"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
              >
                {c.accent}
              </p>
            </FadeUp>
            <div className="h-[40px]" />
            <ContatoInfo mobile />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ContatoInfo — col-right (desktop) ou continuation (mobile)
   - body Inter 17/15px leading 1.6 #2A2520
   - CTA pill bg #C4998A, py 18/20, px 32/full, JetBrains Mono Medium 12px tracking 1.2px cream
   - divider #C4998A w=60/40
   - phone Playfair 32/28px #2A2520 tracking -0.32px (desktop)
   - phone label JetBrains Mono Medium 10px tracking 1px/0.8px #6B5F5A
   - "/ REDES" mono 11/10px tracking 0.88/0.8px #6B5F5A
   - socials Playfair Italic 20/18px #2A2520 leading 1.4
*/
function ContatoInfo({ mobile = false }: { mobile?: boolean }) {
  const c = BARBARA_DATA.contato;
  return (
    <>
      <FadeUp delay={0.2}>
        <p
          className="text-[#2A2520]"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: mobile ? 15 : 17,
            lineHeight: 1.6,
          }}
        >
          {c.body}
        </p>
      </FadeUp>
      <div className={mobile ? "h-[32px]" : "h-[40px]"} />
      <FadeUp delay={0.3}>
        <a
          href={c.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center justify-center rounded-full bg-[#C4998A] text-[#F8F2EA] whitespace-pre hover:opacity-90 transition-all duration-500 hover:shadow-[0_8px_24px_-8px_rgba(196,153,138,0.5)] ${
            mobile ? "w-full py-[20px]" : "px-[32px] py-[18px]"
          }`}
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "1.2px",
          }}
        >
          {c.cta.label}  →
        </a>
      </FadeUp>
      <div className={mobile ? "h-[48px]" : "h-[56px]"} />
      <FadeUp delay={0.45}>
        <div
          className="h-px bg-[#C4998A]"
          style={{ width: mobile ? 40 : 60 }}
        />
      </FadeUp>
      <div className={mobile ? "h-[32px]" : "h-[40px]"} />
      <FadeUp delay={0.55}>
        <p
          className="text-[#2A2520] whitespace-nowrap"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            fontSize: mobile ? 28 : 32,
            letterSpacing: mobile ? "0" : "-0.32px",
          }}
        >
          {c.phoneLine}
        </p>
      </FadeUp>
      <div className={mobile ? "h-[10px]" : "h-[12px]"} />
      <FadeUp delay={0.62}>
        <p
          className="text-[#6B5F5A] whitespace-nowrap"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: mobile ? "0.8px" : "1px",
          }}
        >
          {c.phoneLabel}
        </p>
      </FadeUp>
      <div className={mobile ? "h-[48px]" : "h-[56px]"} />
      <FadeUp delay={0.72}>
        <p
          className="text-[#6B5F5A] whitespace-pre"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: mobile ? 10 : 11,
            letterSpacing: mobile ? "0.8px" : "0.88px",
          }}
        >
          /  REDES
        </p>
      </FadeUp>
      <div className={mobile ? "h-[16px]" : "h-[20px]"} />
      <Stagger delay={0.82} staggerChildren={0.1} className="flex flex-col items-start">
        {c.socials.map((s, i) => (
          <StaggerItem key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-[#2A2520] hover:text-[#C4998A] transition-colors duration-300 inline-block whitespace-nowrap"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 400,
                fontSize: mobile ? 18 : 20,
                lineHeight: 1.4,
                marginTop: i === 0 ? 0 : 4,
              }}
            >
              {s.label}
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </>
  );
}
