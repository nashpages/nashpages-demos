import type { Metadata } from "next";
import { VilaLayout } from "@/components/demos/villa-francioni/VilaLayout";

export const metadata: Metadata = {
  title: "Villa Francioni — Vinhos de altitude em São Joaquim",
  description:
    "Villa Francioni — vinícola de altitude a 1.260 metros na serra de São Joaquim, Santa Catarina. Cinco níveis de produção por gravidade, galeria de arte e os vinhos de altitude que nasceram de um sonho.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <VilaLayout />;
}
