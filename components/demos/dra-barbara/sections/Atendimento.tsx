import { BARBARA_DATA } from "../data";

export function Atendimento() {
  const a = BARBARA_DATA.atendimento;
  return (
    <section
      id="atendimento"
      className="bg-[var(--c-cream)] py-20 px-6 lg:py-[120px] lg:px-16"
    >
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[10px] lg:text-[11px] tracking-[0.16em] font-medium text-[var(--c-grafite)] mb-6 lg:mb-10"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {a.eyebrow}
        </p>
        <h2
          className="font-normal text-[var(--c-tinta)] leading-[1] tracking-[-0.02em] text-[56px] lg:text-[80px]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {a.headlineLines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>
        <div className="mt-8 lg:mt-14 h-px w-[60px] lg:w-[80px] bg-[var(--c-nude)]" />

        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <AtBlock label="ONDE" items={a.onde} />
          <AtBlock label="COMO" items={a.como} />
        </div>
      </div>
    </section>
  );
}

function AtBlock({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <p
        className="text-[11px] tracking-[0.16em] font-medium text-[var(--c-tinta)] mb-5 lg:mb-7"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        /  {label}
      </p>
      <ul className="space-y-2.5 lg:space-y-4 text-[var(--c-tinta)] text-[15px] lg:text-[17px] leading-[1.5]">
        {items.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
