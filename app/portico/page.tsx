import type { Metadata } from "next";
import { PorticoLayout } from "@/components/demos/portico/PorticoLayout";

export const metadata: Metadata = {
  title: "Pórtico — Estruturas para Eventos",
  description:
    "Locação de toldos, tendas e tablados para casamentos, festas e eventos corporativos. Projeto, montagem e desmontagem por nossa conta. Serra Catarinense.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PorticoLayout />;
}
