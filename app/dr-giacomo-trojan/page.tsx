import type { Metadata } from "next";
import { TrojanLayout } from "@/components/demos/dr-giacomo-trojan/TrojanLayout";

export const metadata: Metadata = {
  title: "Dr. Giácomo Trojan — Instituto IOVI · Implantes complexos · Balneário Camboriú",
  description:
    "Cirurgião-Dentista. Implantes em casos complexos com carga imediata. Atendimento exclusivo no Instituto IOVI, Balneário Camboriú/SC.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <TrojanLayout />;
}
