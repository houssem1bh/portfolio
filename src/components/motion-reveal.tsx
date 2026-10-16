"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function MotionReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 24 },
  },
};

type Tag = "div" | "ol" | "ul" | "li";

export function MotionStagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  if (reduce) return <Tag className={className}>{children}</Tag>;
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}

export function MotionStaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  if (reduce) return <Tag className={className}>{children}</Tag>;
  const MotionTag = motion[as];
  return (
    <MotionTag variants={staggerItem} className={className}>
      {children}
    </MotionTag>
  );
}
