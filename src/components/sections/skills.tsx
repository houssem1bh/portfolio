import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion-reveal";

type Category = {
  name: string;
  note?: string;
  items: string[];
};

export function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Category[];

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <MotionReveal>
        <SectionHeading heading={t("heading")} subheading={t("subheading")} />
      </MotionReveal>

      <MotionStagger className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <MotionStaggerItem key={cat.name}>
            <div className="relative pt-4">
              <div className="absolute top-0 left-0 h-px w-12 bg-gradient-to-r from-brand to-transparent" />
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold">{cat.name}</h3>
                {cat.note ? (
                  <span className="text-xs text-brand">{cat.note}</span>
                ) : null}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand/10 hover:text-brand hover:shadow-[0_4px_16px_-4px_oklch(from_var(--brand)_l_c_h_/_40%)]"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </section>
  );
}
