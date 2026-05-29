import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { PorticoMark } from "./PorticoMark";
import { PORTICO_DATA, PORTICO_WHATSAPP } from "./data";

const MONO = { fontFamily: "var(--font-ibm-plex-mono)" } as const;
const DISPLAY = { fontFamily: "var(--font-archivo)" } as const;

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <p
        className="text-[12px] tracking-[0.16em]"
        style={{ ...MONO, color: "var(--c-ambar)" }}
      >
        {eyebrow}
      </p>
      <h2
        className="mt-3 text-[30px] tracking-[-0.015em] md:text-[40px]"
        style={{ ...DISPLAY, fontWeight: 700, color: "var(--c-grafite)" }}
      >
        {title}
      </h2>
    </Reveal>
  );
}

export function Hero() {
  const d = PORTICO_DATA.hero;
  return (
    <section id="topo" style={{ backgroundColor: "var(--c-concreto)" }}>
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-20">
        <Reveal>
          <div className="max-w-[560px]">
            <p className="text-[12px] tracking-[0.16em]" style={{ ...MONO, color: "var(--c-ambar)" }}>
              {d.eyebrow}
            </p>
            <h1
              className="mt-5 text-[40px] leading-[1.06] tracking-[-0.02em] md:text-[56px]"
              style={{ ...DISPLAY, fontWeight: 700, color: "var(--c-grafite)" }}
            >
              {d.title}
            </h1>
            <p className="mt-5 text-[17px] leading-[1.55] md:text-[18px]" style={{ color: "var(--c-aco)" }}>
              {d.subtitle}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={PORTICO_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[6px] px-6 py-3.5 text-center text-[16px] transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--c-ambar)", color: "#fff", fontWeight: 500 }}
              >
                {d.ctaPrimary}
              </a>
              <a
                href="#trabalhos"
                className="rounded-[6px] px-6 py-3.5 text-center text-[16px] transition-colors hover:bg-black/[0.04]"
                style={{
                  border: "1.5px solid var(--c-grafite)",
                  color: "var(--c-grafite)",
                  fontWeight: 500,
                }}
              >
                {d.ctaSecondary}
              </a>
            </div>
            <p className="mt-7 text-[12.5px] tracking-[0.02em]" style={{ ...MONO, color: "var(--c-aco)" }}>
              {d.credentials}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] md:aspect-[3/3.4]">
            <Image
              src={d.image}
              alt={d.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Alugamos() {
  const d = PORTICO_DATA.alugamos;
  return (
    <section id="estruturas" style={{ backgroundColor: "var(--c-branco)" }}>
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-24">
        <SectionHead eyebrow={d.eyebrow} title={d.title} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-7">
          {d.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div
                className="h-full overflow-hidden rounded-[8px]"
                style={{ border: "1px solid var(--c-linha)", backgroundColor: "var(--c-branco)" }}
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-[21px] md:text-[23px]" style={{ ...DISPLAY, fontWeight: 600, color: "var(--c-grafite)" }}>
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.5]" style={{ color: "var(--c-aco)" }}>
                    {c.desc}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-[14.5px]" style={{ color: "var(--c-grafite)" }}>
                        <span style={{ width: 16, height: 2, backgroundColor: "var(--c-ambar)", flexShrink: 0 }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trabalhos() {
  const d = PORTICO_DATA.trabalhos;
  const topo = d.photos.slice(0, 3);
  const base = d.photos.slice(3);
  return (
    <section id="trabalhos" style={{ backgroundColor: "var(--c-concreto)" }}>
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-24">
        <SectionHead eyebrow={d.eyebrow} title={d.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {topo.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.06}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px]">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 33vw" quality={90} className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {base.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.06}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[6px]">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  const d = PORTICO_DATA.comoFunciona;
  return (
    <section id="como-funciona" style={{ backgroundColor: "var(--c-branco)" }}>
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-24">
        <SectionHead eyebrow={d.eyebrow} title={d.title} />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-7">
          {d.steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div>
                <span className="block" style={{ width: 40, height: 3, backgroundColor: "var(--c-ambar)" }} />
                <div className="mt-5 text-[44px] leading-none" style={{ ...DISPLAY, fontWeight: 700, color: "var(--c-grafite)" }}>
                  {s.num}
                </div>
                <h3 className="mt-3 text-[19px]" style={{ ...DISPLAY, fontWeight: 600, color: "var(--c-grafite)" }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.5]" style={{ color: "var(--c-aco)" }}>
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contato() {
  const d = PORTICO_DATA.contato;
  return (
    <section id="contato" style={{ backgroundColor: "var(--c-grafite)" }}>
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
        <Reveal>
          <div>
            <p className="text-[12px] tracking-[0.16em]" style={{ ...MONO, color: "var(--c-ambar)" }}>
              {d.eyebrow}
            </p>
            <h2
              className="mt-4 text-[30px] leading-[1.1] tracking-[-0.02em] md:text-[44px]"
              style={{ ...DISPLAY, fontWeight: 700, color: "var(--c-branco)" }}
            >
              {d.title}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.55] md:text-[17px]" style={{ color: "var(--c-nevoa)" }}>
              {d.subtitle}
            </p>
            <div className="mt-7 flex flex-col gap-4">
              {d.contacts.map((c) => (
                <div key={c.label}>
                  <p className="text-[11px] tracking-[0.12em]" style={{ ...MONO, color: "var(--c-ambar)" }}>
                    {c.label}
                  </p>
                  <p className="mt-1 text-[16px] md:text-[17px]" style={{ color: "var(--c-branco)", fontWeight: 500 }}>
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-[10px] p-7 md:p-10" style={{ backgroundColor: "var(--c-branco)" }}>
            <h3 className="text-[20px] md:text-[23px]" style={{ ...DISPLAY, fontWeight: 600, color: "var(--c-grafite)" }}>
              {d.card.title}
            </h3>
            <p className="mt-3.5 text-[15px] leading-[1.55]" style={{ color: "var(--c-aco)" }}>
              {d.card.text}
            </p>
            <a
              href={PORTICO_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block rounded-[8px] py-4 text-center text-[16px] transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--c-ambar)", color: "#fff", fontWeight: 500 }}
            >
              {d.card.button}
            </a>
            <p className="mt-3.5 text-[11.5px]" style={{ ...MONO, color: "var(--c-aco)" }}>
              {d.card.detail}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const d = PORTICO_DATA.footer;
  return (
    <footer
      style={{ backgroundColor: "var(--c-grafite)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="mx-auto max-w-[1240px] px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5" style={{ color: "var(--c-branco)" }}>
            <PorticoMark h={22} />
            <span className="text-[18px]" style={{ ...DISPLAY, fontWeight: 700 }}>
              PÓRTICO
            </span>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {PORTICO_DATA.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] transition-opacity hover:opacity-100"
                style={{ color: "rgba(255,255,255,0.62)", fontWeight: 500 }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-7 flex flex-col gap-1 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-[12px]" style={{ ...MONO, color: "rgba(255,255,255,0.55)" }}>
            {d.copyright}
          </p>
          <p className="text-[12px]" style={{ ...MONO, color: "rgba(255,255,255,0.55)" }}>
            {d.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
