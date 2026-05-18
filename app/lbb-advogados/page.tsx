import type { Metadata } from "next";
import { LBBLayout } from "@/components/demos/lbb-advogados/LBBLayout";

export const metadata: Metadata = {
  title: "LBB Advogados — Lins, Bittencourt & Bellaver",
  description:
    "Escritório de advocacia em Balneário Camboriú/SC. Direito Empresarial, Tributário, Civil, Imobiliário, Trabalhista e Médico/Hospitalar. OAB/SC nº 592/2001. Desde 1989.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LBBLayout />;
}
