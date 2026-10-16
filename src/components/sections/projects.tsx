import { useTranslations } from "next-intl";
import { Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion-reveal";
import { TiltCard } from "@/components/interactive/tilt-card";

type Project = {
  id: string;
  name: string;
  company: string;
  period: string;
  problem: string;
  solution: string;
  highlights: string[];
  technologies: string[];
};

export function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as Project[];

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <MotionReveal>
        <SectionHeading heading={t("heading")} subheading={t("subheading")} />
      </MotionReveal>

      <MotionStagger className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((project) => (
          <MotionStaggerItem key={project.id}>
            <TiltCard className="h-full">
              <CardHeader className="px-5 pt-5 align-center">
                <p className="text-xs font-medium text-muted-foreground">
                  {project.company} · {project.period}
                </p>
                <CardTitle className="text-lg">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-5 pb-5">
                <div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {project.problem}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {project.solution}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {project.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Minus className="mt-1 size-3 shrink-0 text-brand" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </TiltCard>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </section>
  );
}
