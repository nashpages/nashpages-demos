import Image from "next/image";
import { BARBARA_DATA } from "../data";

export function Procedimentos() {
  const p = BARBARA_DATA.procedimentos;
  return (
    <section className="bg-[var(--c-rose)] py-20 px-6 lg:py-[100px] lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[10px] lg:text-[11px] tracking-[0.16em] font-medium text-[var(--c-grafite)] mb-6 lg:mb-10"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {p.eyebrow}
        </p>

        {/* Desktop: 2-col text-left + photo-right */}
        <div className="hidden lg:grid grid-cols-[560px_1fr] gap-20 items-start">
          <div>
            <h2
              className="font-normal text-[var(--c-tinta)] leading-[1] tracking-[-0.02em] text-[68px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {p.headlineLines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <div className="mt-10 h-px w-[80px] bg-[var(--c-nude)]" />
            <p className="mt-10 text-[var(--c-grafite)] text-[17px] leading-[1.65] max-w-[480px]">
              {p.body}
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] max-h-[480px]">
            <Image
              src={p.photo}
              alt="Procedimento dermatológico"
              fill
              quality={90}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Mobile: stack */}
        <div className="lg:hidden">
          <h2
            className="font-normal text-[var(--c-tinta)] leading-[1.05] tracking-[-0.02em] text-[40px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {p.headlineLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <div className="mt-6 h-px w-[60px] bg-[var(--c-nude)]" />
          <p className="mt-6 text-[var(--c-grafite)] text-[14px] leading-[1.65]">
            {p.body}
          </p>
          <div className="relative w-full aspect-[4/3] mt-10">
            <Image
              src={p.photo}
              alt="Procedimento dermatológico"
              fill
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Specs strip — desktop horizontal, mobile vertical */}
        <div className="mt-12 lg:mt-16 pt-7 border-t border-[var(--c-linha)]">
          {/* Desktop */}
          <div className="hidden lg:flex justify-between gap-12">
            {p.specs.map((s) => (
              <div key={s.num} className="flex flex-col gap-3">
                <p
                  className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-tinta)]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {s.num}   {s.label}
                </p>
                <p
                  className="text-[11px] tracking-[0.08em] text-[var(--c-grafite)]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
          {/* Mobile */}
          <div className="lg:hidden flex flex-col divide-y divide-[var(--c-linha)]">
            {p.specs.map((s, i) => (
              <div key={s.num} className={`flex flex-col gap-2 ${i > 0 ? "pt-5 mt-5" : ""}`}>
                <p
                  className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-tinta)]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {s.num}   {s.label}
                </p>
                <p
                  className="text-[11px] tracking-[0.08em] text-[var(--c-grafite)]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
