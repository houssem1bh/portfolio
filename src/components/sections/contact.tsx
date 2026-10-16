import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkedinGlyph } from "@/components/brand-icons";
import { MotionReveal } from "@/components/motion-reveal";
import { Magnetic } from "@/components/interactive/magnetic";
import { Ripple } from "@/components/interactive/ripple";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <MotionReveal>
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div
            aria-hidden
            className="animate-aurora-1 absolute -top-24 right-0 size-72 rounded-full bg-[color:var(--glow-1)] opacity-25 blur-[100px]"
          />
          <div
            aria-hidden
            className="animate-aurora-3 absolute bottom-0 left-0 size-72 rounded-full bg-[color:var(--glow-3)] opacity-15 blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("headline")}
              </h2>
              <p className="mt-4 max-w-[50ch] text-muted-foreground">
                {t("subtext")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic strength={0.25}>
                  <Ripple className="rounded-lg">
                    <Button
                      size="lg"
                      asChild
                      className="shadow-[0_6px_28px_-6px_oklch(from_var(--brand)_l_c_h_/_45%)] transition-shadow duration-300 hover:shadow-[0_10px_36px_-6px_oklch(from_var(--brand)_l_c_h_/_60%)]"
                    >
                      <a href={`mailto:${t("email")}`}>
                        <Mail className="size-4" />
                        {t("sendEmail")}
                      </a>
                    </Button>
                  </Ripple>
                </Magnetic>
                <Button size="lg" variant="outline" asChild>
                  <a href={`/cv/houssem-ben-hassen-cv-${locale}.pdf`} download>
                    {t("downloadCv")}
                  </a>
                </Button>
              </div>
            </div>

            <dl className="grid content-start gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium text-muted-foreground">
                  {t("emailLabel")}
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${t("email")}`}
                    className="group inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand"
                  >
                    {t("email")}
                    <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-muted-foreground">
                  {t("linkedinLabel")}
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://linkedin.com/in/houssem-ben-hassan"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand"
                  >
                    <LinkedinGlyph className="size-3.5" />
                    houssem-ben-hassan
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-muted-foreground">
                  {t("githubLabel")}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground/70">
                  {t("githubComingSoon")}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-muted-foreground">
                  {t("locationLabel")}
                </dt>
                <dd className="mt-1 inline-flex items-center gap-1 text-sm font-medium">
                  <MapPin className="size-3.5" />
                  {t("location")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
