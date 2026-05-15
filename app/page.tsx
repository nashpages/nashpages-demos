import Link from "next/link";
import { listDemoSlugs, getDemoConfig } from "@/lib/demos";

// Index privado (noindex no layout) listando demos disponíveis. Útil só pra navegação interna.
export default function Home() {
  const slugs = listDemoSlugs();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-400">
          Nashpages / demos
        </p>
        <h1 className="mt-6 font-sans text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
          Demos disponíveis
        </h1>
        <p className="mt-4 text-sm text-neutral-400">
          Esta página é interna (noindex). Cada link abre a demo pública daquele
          prospect.
        </p>

        <ul className="mt-12 flex flex-col divide-y divide-neutral-800 border-y border-neutral-800">
          {slugs.map((slug) => {
            const cfg = getDemoConfig(slug);
            if (!cfg) return null;
            return (
              <li key={slug}>
                <Link
                  href={`/${slug}`}
                  className="flex items-baseline justify-between gap-6 py-5 transition-colors hover:bg-neutral-900"
                >
                  <span>
                    <span className="block font-sans text-base font-medium">
                      {cfg.name}
                    </span>
                    <span className="mt-1 block text-xs text-neutral-400">
                      {cfg.title}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-neutral-500">
                    /{slug}  →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
