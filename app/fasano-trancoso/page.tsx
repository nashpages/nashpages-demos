import type { Metadata } from "next";
import { FasanoLayout } from "@/components/demos/fasano-trancoso/FasanoLayout";

export const metadata: Metadata = {
  title: "Fasano Trancoso — Hotel à beira da Praia de Itapororoca",
  description:
    "Fasano Trancoso — quarenta bangalôs e vinte e três villas espalhados pela mata nativa à beira da Praia de Itapororoca, na Bahia. Arquitetura de Isay Weinfeld, gastronomia italiana e Mata Atlântica preservada.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <FasanoLayout />;
}
