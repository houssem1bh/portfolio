import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { MotionReveal } from "@/components/motion-reveal";
import { Separator } from "@/components/ui/separator";

type School = { name: string; degree: string; detail: string; period: string };
type Recognition = {
  name: string;
  result: string;
  detail?: string;
  period: string;
};
type LanguageItem = { name: string; level: string };

export function Education() {
  const t = useTranslations("education");
  const tl = useTranslations("languages");
  const schools = t.raw("schools") as School[];
  const recognition = t.raw("recognition") as Recognition[];
  const languages = tl.raw("items") as LanguageItem[];

  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <MotionReveal>
        <SectionHeading heading={t("heading")} />
      </MotionReveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-3">
        <MotionReveal className="lg:col-span-2">
          <div className="space-y-6">
            {schools.map((school) => (
              <div key={school.name}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-medium">{school.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {school.period}
                  </p>
                </div>
                <p className="text-sm text-foreground/90">{school.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {school.detail}
                </p>
              </div>
            ))}
          </div>

          <Separator className="my-8" />

          <div>
            <h3 className="text-sm font-semibold">
              {t("foundationsHeading")}
            </h3>
            <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-muted-foreground">
              {t("foundations")}
            </p>
          </div>

          <Separator className="my-8" />

          <div>
            <h3 className="text-sm font-semibold">
              {t("recognitionHeading")}
            </h3>
            <ul className="mt-3 space-y-3">
              {recognition.map((r) => (
                <li key={r.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <p className="text-sm font-medium">
                      {r.name} · {r.result}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {r.period}
                    </p>
                  </div>
                  {r.detail ? (
                    <p className="text-sm text-muted-foreground">
                      {r.detail}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <h3 className="text-sm font-semibold">{tl("heading")}</h3>
          <ul className="mt-3 space-y-3 border-t border-border pt-4">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-baseline justify-between gap-4 transition-colors hover:text-brand"
              >
                <span className="text-sm font-medium">{lang.name}</span>
                <span className="text-sm text-muted-foreground">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </MotionReveal>
      </div>
    </section>
  );
}
