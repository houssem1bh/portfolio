"use client";

import { useTranslations } from "next-intl";
import { Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubGlyph, LinkedinGlyph } from "@/components/brand-icons";

export function SiteFooter() {
  const t = useTranslations("footer");
  const tc = useTranslations("contact");
  const year = 2026;

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-tight">
            Houssem Ben Hassen
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{t("tagline")}</p>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${tc("email")}`} aria-label={tc("emailLabel")}>
              <Mail className="size-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/houssem-ben-hassan"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={tc("linkedinLabel")}
            >
              <LinkedinGlyph className="size-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            disabled
            aria-label={`${tc("githubLabel")} (${tc("githubComingSoon")})`}
          >
            <GithubGlyph className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#top" aria-label={t("backToTop")}>
              <ArrowUp className="size-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {year} Houssem Ben Hassen. {t("rightsReserved")}
      </div>
    </footer>
  );
}
