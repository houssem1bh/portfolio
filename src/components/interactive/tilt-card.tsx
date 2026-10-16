"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import type { ReactNode, PointerEvent } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 22, mass: 0.4 };
  const sx = useSpring(px, springConfig);
  const sy = useSpring(py, springConfig);

  const rotateX = useTransform(sy, [0, 1], [7, -7]);
  const rotateY = useTransform(sx, [0, 1], [-7, 7]);
  const spotX = useTransform(sx, (v) => `${v * 100}%`);
  const spotY = useTransform(sy, (v) => `${v * 100}%`);
  const spotlightBg = useTransform(
    [spotX, spotY],
    ([sxv, syv]) =>
      `radial-gradient(280px circle at ${sxv} ${syv}, oklch(from var(--brand) l c h / 12%), transparent 70%)`
  );

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={reduce ? undefined : handlePointerMove}
      onPointerLeave={reduce ? undefined : handlePointerLeave}
      style={
        reduce
          ? undefined
          : { rotateX, rotateY, transformPerspective: 800 }
      }
      whileHover={reduce ? undefined : { scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group/tilt relative overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40",
        className
      )}
    >
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{ background: spotlightBg }}
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-brand/25 transition-opacity duration-300 group-hover/tilt:opacity-100"
      />
      {children}
    </motion.div>
  );
}
