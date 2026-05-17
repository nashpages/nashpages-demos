"use client";

import type { ReactNode } from "react";

/**
 * Wrapper compartilhado pra todas sections:
 * - Desktop: 860w × h-full (parte da fita horizontal pinada GSAP)
 * - Mobile: full width × h-auto stacked vertical
 */
export function SectionWrapper({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="lg:w-[860px] lg:h-full lg:flex-shrink-0 lg:overflow-hidden w-full lg:px-16 px-6 lg:py-16 py-16 flex flex-col"
      style={{ backgroundColor: "var(--c-papel)" }}
    >
      <div className="flex flex-col flex-1 max-w-[700px] lg:mx-0 mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
