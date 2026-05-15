import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoLayout } from "@/components/demo/DemoLayout";
import { getDemoConfig, listDemoSlugs } from "@/lib/demos";

export const dynamicParams = false;

export function generateStaticParams() {
  return listDemoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = getDemoConfig(slug);
  if (!config) {
    return { title: "Demo não encontrada", robots: { index: false } };
  }
  return {
    title: config.meta.title,
    description: config.meta.description,
    robots: { index: false, follow: false },
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = getDemoConfig(slug);

  if (!config) {
    notFound();
  }

  return <DemoLayout config={config} />;
}
