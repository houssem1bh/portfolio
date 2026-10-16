import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion-reveal";

export function About() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 -z-10 size-72 rounded-full bg-brand/10 blur-[100px]"
      />
      <MotionReveal>
        <SectionHeading heading={t("heading")} />
      </MotionReveal>
      <MotionStagger className="mt-8 max-w-[68ch] space-y-5">
        {paragraphs.map((p, i) => (
          <MotionStaggerItem key={i}>
            <p className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </section>
  );
}
