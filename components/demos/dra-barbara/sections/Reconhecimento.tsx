import Image from "next/image";
import { BARBARA_DATA } from "../data";

export function Reconhecimento() {
  const r = BARBARA_DATA.reconhecimento;
  return (
    <section className="bg-[var(--c-rose)] relative">
      {/* Desktop: foto full-bleed left + content right */}
      <div className="hidden lg:flex relative min-h-[900px]">
        <div className="relative flex-[0_0_42%] self-stretch min-h-[900px]">
          <Image
            src={r.photo}
            alt="Dra. Bárbara Pimenta"
            fill
            quality={90}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 px-16 lg:pl-20 py-20 flex flex-col justify-center max-w-[760px]">
          <ReconContent />
        </div>
      </div>

      {/* Mobile: foto top + content stack */}
      <div className="lg:hidden">
        <div className="relative w-full h-[380px]">
          <Image
            src={r.photo}
            alt="Dra. Bárbara Pimenta"
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="px-6 py-12">
          <ReconContent mobile />
        </div>
      </div>
    </section>
  );
}

function ReconContent({ mobile = false }: { mobile?: boolean }) {
  const r = BARBARA_DATA.reconhecimento;
  return (
    <>
      <p
        className={`tracking-[0.16em] font-medium text-[var(--c-grafite)] ${
          mobile ? "text-[10px] mb-7" : "text-[11px] mb-12"
        }`}
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        /  {r.eyebrow}
      </p>
      <p
        className={`font-normal text-[var(--c-nude)] tracking-[-0.03em] leading-[1] ${
          mobile ? "text-[120px]" : "text-[180px]"
        }`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {r.stat}
      </p>
      <p
        className={`italic text-[var(--c-tinta)] ${
          mobile ? "text-[22px] mt-2" : "text-[28px] mt-5"
        }`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {r.statLabel}
      </p>
      <p className={`text-[var(--c-nude)] tracking-[0.2em] ${mobile ? "text-[18px] mt-5" : "text-[22px] mt-8"}`}>
        ★ ★ ★ ★ ★
      </p>
      <div className={`flex gap-3 ${mobile ? "mt-6" : "mt-9"}`}>
        {r.badges.map((badge) => (
          <span
            key={badge}
            className={`inline-flex items-center px-4 py-2 rounded-full border border-[var(--c-nude)] text-[var(--c-nude)] tracking-[0.18em] font-medium ${
              mobile ? "text-[9px]" : "text-[10px]"
            }`}
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {badge}
          </span>
        ))}
      </div>
      <div className={`h-px w-[40px] lg:w-[60px] bg-[var(--c-nude)] ${mobile ? "mt-8" : "mt-12"}`} />
      <p
        className={`italic text-[var(--c-tinta)] leading-[1.4] ${
          mobile ? "text-[18px] mt-6" : "text-[24px] mt-12"
        }`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {r.quote}
      </p>
      <p
        className={`tracking-[0.16em] font-medium text-[var(--c-grafite)] ${
          mobile ? "text-[10px] mt-3" : "text-[10px] mt-4"
        }`}
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        {r.attribution}
      </p>
      <a
        href={r.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex flex-col gap-2 ${mobile ? "mt-7" : "mt-10"}`}
      >
        <span
          className={`tracking-[0.16em] font-medium text-[var(--c-nude)] ${
            mobile ? "text-[11px]" : "text-[12px]"
          }`}
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {r.cta.label}  →
        </span>
        <span className="h-px w-[240px] lg:w-[300px] bg-[var(--c-nude)] origin-left group-hover:scale-x-105 transition-transform" />
      </a>
    </>
  );
}
