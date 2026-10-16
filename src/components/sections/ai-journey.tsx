"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MotionReveal } from "@/components/motion-reveal";

export function AiJourney() {
  const t = useTranslations("aiJourney");
  const paragraphs = t.raw("paragraphs") as string[];
  const areas = t.raw("areas") as string[];
  const reduce = useReducedMotion();

  return (
    <section
      id="ai-journey"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <MotionReveal>
        <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-brand/5 p-8 sm:p-12">
          <div
            aria-hidden
            className="animate-aurora-2 absolute -top-16 -left-16 size-64 rounded-full bg-[color:var(--glow-1)] opacity-25 blur-[80px]"
          />
          <div
            aria-hidden
            className="animate-aurora-3 absolute -right-10 -bottom-16 size-64 rounded-full bg-[color:var(--glow-3)] opacity-20 blur-[80px]"
          />

          <motion.div
            animate={reduce ? undefined : { rotate: [0, 12, 0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
            className="relative inline-flex"
          >
            <Sparkles className="size-5 text-brand" />
          </motion.div>

          <h2 className="relative mt-4 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("headline")}
          </h2>
          <div className="relative mt-5 max-w-[65ch] space-y-4">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-foreground/90"
              >
                {p}
              </p>
            ))}
          </div>
          <p className="relative mt-8 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {t("areasLabel")}
          </p>
          <div className="relative mt-3 flex flex-wrap gap-1.5">
            {areas.map((area) => (
              <Badge
                key={area}
                variant="outline"
                className="border-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand/15 hover:shadow-[0_4px_16px_-4px_oklch(from_var(--brand)_l_c_h_/_40%)]"
              >
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
