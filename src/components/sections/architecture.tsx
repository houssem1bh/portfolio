"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";
import {
  Boxes,
  Component,
  GitBranch,
  Workflow,
  Layers,
  Cloud,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion-reveal";

const ICONS = [Boxes, Component, Workflow, GitBranch, Layers, Cloud, Users];

type Pillar = { name: string; description: string };

export function Architecture() {
  const t = useTranslations("architecture");
  const pillars = t.raw("pillars") as Pillar[];
  const reduce = useReducedMotion();

  return (
    <section
      id="architecture"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <MotionReveal>
        <SectionHeading heading={t("heading")} subheading={t("subheading")} />
      </MotionReveal>

      <MotionStagger className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = ICONS[i % ICONS.length];
          const accent = i === 0 || i === 4;
          return (
            <MotionStaggerItem key={pillar.name}>
              <div
                className={`group relative h-full overflow-hidden p-6 transition-colors duration-300 hover:bg-brand/[0.06] ${
                  accent ? "bg-brand/5" : "bg-background"
                }`}
              >
                {accent && (
                  <div
                    aria-hidden
                    className="animate-aurora-1 absolute -top-10 -right-10 size-32 rounded-full bg-[color:var(--glow-1)] opacity-20 blur-2xl"
                  />
                )}
                <motion.div
                  whileHover={
                    reduce ? undefined : { rotate: -8, scale: 1.1 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative inline-flex"
                >
                  <Icon className="size-5 text-brand" />
                </motion.div>
                <h3 className="relative mt-4 text-sm font-semibold">
                  {pillar.name}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </MotionStaggerItem>
          );
        })}
      </MotionStagger>
    </section>
  );
}
