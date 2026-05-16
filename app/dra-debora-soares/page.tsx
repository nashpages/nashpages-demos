import type { Metadata } from "next";
import { DeboraLayout } from "@/components/demos/dra-debora/DeboraLayout";

export const metadata: Metadata = {
  title: "Dra. Débora Soares — Dermatologia em Blumenau",
  description:
    "Dermatologia clínica, estética e cirúrgica em Blumenau. UERJ — HUPE · CRM 17.319 SC · RQE 16.610.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DeboraLayout />;
}
