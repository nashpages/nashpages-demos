import type { Metadata } from "next";
import { AmandaPage } from "@/components/demos/dra-amanda/AmandaPage";

export const metadata: Metadata = {
  title: "Dra. Amanda Fistarol — Dermatologia em Blumenau",
  description:
    "Dermatologia clínica, cirúrgica, estética e oncológica em Blumenau. CRM 24.614 SC · RQE 20.197.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AmandaPage />;
}
