import type { Metadata } from "next";
import { PvbtLayout } from "@/components/demos/pvbt-advogados/PvbtLayout";

export const metadata: Metadata = {
  title: "PVBT Law — Pássaro, Vieira, Botelho & Torres · Boutique do mercado do futebol",
  description:
    "PVBT Law — Pássaro, Vieira, Botelho & Torres Sociedade de Advogados. Boutique jurídica especializada no mercado do futebol. Atletas, clubes, intermediários e marcas. FIFA · CBF · CBMA · CAS. Chambers Band 3 Sports Law Brazil. Desde 2016.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PvbtLayout />;
}
