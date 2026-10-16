import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion-reveal";

type Role = {
  title: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

type Company = {
  id: string;
  name: string;
  location: string;
  period: string;
  roles: Role[];
};

export function Experience() {
  const t = useTranslations("experience");
  const companies = t.raw("companies") as Company[];

  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <MotionReveal>
        <SectionHeading heading={t("heading")} subheading={t("subheading")} />
      </MotionReveal>

      <MotionStagger
        as="ol"
        className="mt-12 space-y-14 border-l border-border pl-6 sm:pl-8"
      >
        {companies.map((company, ci) => (
          <MotionStaggerItem as="li" key={company.id} className="relative">
            {ci === 0 ? (
              <span className="animate-pulse-glow absolute top-1.5 -left-[calc(1.5rem+3.5px)] size-[7px] rounded-full bg-brand sm:-left-[calc(2rem+3.5px)]" />
            ) : (
              <span className="absolute top-1.5 -left-[calc(1.5rem+3.5px)] size-[7px] rounded-full bg-border sm:-left-[calc(2rem+3.5px)]" />
            )}
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-sm text-muted-foreground">
                {company.period}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {company.location}
            </p>

            <div className="mt-6 space-y-8">
              {company.roles.map((role) => (
                <div
                  key={role.title + role.period}
                  className="rounded-xl border border-transparent p-4 -m-4 transition-colors duration-300 hover:border-border hover:bg-card/60"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-medium">{role.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {role.period}
                    </p>
                  </div>
                  <p className="mt-2 max-w-[65ch] text-sm text-muted-foreground">
                    {role.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {role.achievements.map((a, i) => (
                      <li
                        key={i}
                        className="max-w-[65ch] text-sm leading-relaxed text-foreground/90"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {role.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="transition-colors hover:bg-brand/15 hover:text-brand"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </section>
  );
}
