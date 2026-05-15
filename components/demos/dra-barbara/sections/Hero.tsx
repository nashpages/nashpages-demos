import Image from "next/image";
import { BARBARA_DATA } from "../data";

export function Hero() {
  const { hero } = BARBARA_DATA;
  return (
    <section
      id="top"
      className="relative w-full"
      style={{
        background:
          "linear-gradient(to right, #BE9989 0%, #EBD9D1 60%, #F9F4EF 100%)",
      }}
    >
      {/* Desktop: split com gradient + foto à direita */}
      <div className="hidden lg:flex relative min-h-[720px] items-center">
        <div className="flex-1 px-16 lg:pl-[64px] lg:pr-12 py-24">
          <p
            className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-cream)] mb-6"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            /  {hero.eyebrow}
          </p>
          <h1
            className="font-normal text-[var(--c-cream)] leading-[1.02] tracking-[-0.02em] text-[88px] xl:text-[108px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {hero.headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 text-[var(--c-cream)]/90 text-[17px] leading-relaxed max-w-md">
            {hero.subline}
          </p>
          <div className="mt-12 flex gap-12">
            <CtaUnderline
              href={hero.primaryCta.href}
              label={hero.primaryCta.label}
              opacity={1}
            />
            <CtaUnderline
              href={hero.secondaryCta.href}
              label={hero.secondaryCta.label}
              opacity={0.7}
            />
          </div>
        </div>
        <div className="relative flex-[0_0_34%] self-stretch min-h-[720px]">
          <Image
            src={hero.photo}
            alt="Dra. Bárbara Pimenta"
            fill
            priority
            quality={90}
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Mobile: foto full-bleed topo + content abaixo */}
      <div className="lg:hidden relative">
        <div className="relative w-full h-[440px]">
          <Image
            src={hero.photo}
            alt="Dra. Bárbara Pimenta"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="px-6 pt-10 pb-16">
          <p
            className="text-[10px] tracking-[0.16em] font-medium text-[var(--c-cream)] mb-5"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            /  {hero.eyebrow}
          </p>
          <h1
            className="font-normal text-[var(--c-cream)] leading-[1.05] tracking-[-0.02em] text-[40px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {hero.headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 text-[var(--c-cream)]/90 text-[14px] leading-relaxed">
            {hero.subline}
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <CtaUnderline href={hero.primaryCta.href} label={hero.primaryCta.label} opacity={1} />
            <CtaUnderline href={hero.secondaryCta.href} label={hero.secondaryCta.label} opacity={0.7} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaUnderline({
  href,
  label,
  opacity,
}: {
  href: string;
  label: string;
  opacity: number;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex flex-col gap-2 group"
      style={{ opacity }}
    >
      <span
        className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-cream)]"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        {label}  →
      </span>
      <span className="h-px w-full bg-[var(--c-cream)] origin-left group-hover:scale-x-105 transition-transform" />
    </a>
  );
}
