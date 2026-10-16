"use client";

import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("nav");
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {t("skipToContent")}
    </a>
  );
}
