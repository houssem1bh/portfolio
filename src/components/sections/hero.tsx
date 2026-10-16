"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";
import { AuroraBackground } from "@/components/aurora-background";
import { TiltCard } from "@/components/interactive/tilt-card";
import { Magnetic } from "@/components/interactive/magnetic";
import { Ripple } from "@/components/interactive/ripple";

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16 pb-20 lg:pt-24"
    >
      <AuroraBackground variant="hero" />

      <div
        aria-hidden
        className="animate-aurora-2 absolute top-24 right-[8%] size-2 rounded-full bg-brand opacity-70 blur-[1px]"
      />
      <div
        aria-hidden
        className="animate-aurora-3 absolute top-[45%] left-[6%] size-1.5 rounded-full bg-[color:var(--glow-2)] opacity-60 blur-[1px]"
      />
      <div
        aria-hidden
        className="animate-aurora-1 absolute bottom-[15%] right-[20%] size-1 rounded-full bg-[color:var(--glow-3)] opacity-70"
      />

      <MotionStagger className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <MotionStaggerItem>
            <p className="text-sm font-medium text-brand">{t("name")}</p>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <span className="text-gradient animate-gradient bg-[length:200%_100%]">
                Frontend Technical Lead
              </span>{" "}
              for teams building products that scale.
            </h1>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <p className="mt-6 max-w-[52ch] text-lg text-muted-foreground">
              {t("subtext")}
            </p>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.25}>
                <Ripple className="rounded-lg">
                  <Button
                    size="lg"
                    asChild
                    className="shadow-[0_6px_28px_-6px_oklch(from_var(--brand)_l_c_h_/_45%)] transition-shadow duration-300 hover:shadow-[0_10px_36px_-6px_oklch(from_var(--brand)_l_c_h_/_60%)]"
                  >
                    <a href="#projects">
                      {t("ctaPrimary")}
                      <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
                    </a>
                  </Button>
                </Ripple>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Ripple className="rounded-lg">
                  <Button size="lg" variant="outline" asChild>
                    <a href={`/cv/houssem-ben-hassen-cv-${locale}.pdf`} download>
                      <Download className="size-4" />
                      {t("ctaSecondary")}
                    </a>
                  </Button>
                </Ripple>
              </Magnetic>
            </div>
          </MotionStaggerItem>
        </div>

        <MotionStaggerItem className="mx-auto w-full max-w-[260px]">
          <TiltCard className="aspect-4/5">
            <div className="relative h-full w-full">
              <Image
                src="/portrait.png"
                alt={t("photoAlt")}
                fill
                priority
                sizes="260px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--glow-1)_0%,transparent_45%),radial-gradient(circle_at_80%_80%,var(--glow-3)_0%,transparent_50%)] opacity-25 mix-blend-overlay"
              />
            </div>
          </TiltCard>
        </MotionStaggerItem>
      </MotionStagger>
    </section>
  );
}
