import type { Metadata } from "next";
import { AndradeGCLayout } from "@/components/demos/andrade-gc-advogados/AndradeGCLayout";

export const metadata: Metadata = {
  title: "Andrade GC Advogados — Manaus · Brasília",
  description:
    "Advocacia empresarial em Manaus/AM e Brasília/DF. Tributário, Empresarial, Imobiliário, Trabalhista, Cível e Criminal Empresarial. Chambers Band 1. Desde 1997.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AndradeGCLayout />;
}
