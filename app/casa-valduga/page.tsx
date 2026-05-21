import type { Metadata } from "next";
import { ValdugaLayout } from "@/components/demos/casa-valduga/ValdugaLayout";

export const metadata: Metadata = {
  title: "Casa Valduga — Enoturismo no Vale dos Vinhedos desde 1875",
  description:
    "Casa Valduga — o primeiro complexo enoturístico do Brasil, no coração do Vale dos Vinhedos. Vinhos premiados, restaurante Maria Valduga, Lui Wine Bar, pousadas boutique e a maior cave de espumantes da América Latina. Desde 1875.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ValdugaLayout />;
}
