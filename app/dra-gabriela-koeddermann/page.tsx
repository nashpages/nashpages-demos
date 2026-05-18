import type { Metadata } from "next";
import { GabrielaLayout } from "@/components/demos/dra-gabriela-koeddermann/GabrielaLayout";

export const metadata: Metadata = {
  title: "Dra. Gabriela Koeddermann — Dermatologia e Cirurgia de Mohs",
  description:
    "Cirurgia micrográfica de Mohs com fellowship UFSC. Dermatologia clínica, cirúrgica e pediátrica em Balneário Camboriú. CRM-SC 24.288 · RQE 22.794.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <GabrielaLayout />;
}
