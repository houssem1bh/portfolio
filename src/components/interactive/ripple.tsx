"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import type { ReactNode, PointerEvent } from "react";
import { cn } from "@/lib/utils";

type RippleDot = { id: number; x: number; y: number; size: number };

export function Ripple({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [ripples, setRipples] = useState<RippleDot[]>([]);
  const idRef = useRef(0);
  const reduce = useReducedMotion();

  function handlePointerDown(e: PointerEvent<HTMLSpanElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;
    const id = idRef.current++;
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top, size },
    ]);
    setTimeout(() => {
      setRipples((r) => r.filter((ripple) => ripple.id !== id));
    }, 650);
  }

  return (
    <span
      onPointerDown={handlePointerDown}
      className={cn(
        "relative inline-flex overflow-hidden rounded-[inherit]",
        className
      )}
    >
      {children}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ opacity: 0.35, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute rounded-full bg-white mix-blend-overlay"
            style={{
              left: r.x - r.size / 2,
              top: r.y - r.size / 2,
              width: r.size,
              height: r.size,
            }}
          />
        ))}
      </AnimatePresence>
    </span>
  );
}
