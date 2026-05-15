"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  haptic?: number | number[];
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function HapticLink({ children, haptic = 8, onClick, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(haptic);
      } catch {
        // ignore
      }
    }
    onClick?.(e);
  };

  return (
    <a onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
