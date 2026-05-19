import type { Metadata } from "next";
import { MPLLayout } from "@/components/demos/mannheimer-perez-lyra/MPLLayout";

export const metadata: Metadata = {
  title: "MPL Advogados — Mannheimer, Perez e Lyra · Rio · São Paulo",
  description:
    "Mannheimer, Perez e Lyra Advogados — boutique de contencioso judicial e arbitragem. Chambers Global. The Legal 500. Análise Advocacia Mais Admirados. Desde 2008.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <MPLLayout />;
}
