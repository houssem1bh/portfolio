"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const LOCALES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
] as const;

export function LocaleSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center rounded-md border border-border p-0.5">
      {LOCALES.map(({ code, label }) => (
        <Tooltip key={code}>
          <TooltipTrigger asChild>
            <Button
              variant={locale === code ? "secondary" : "ghost"}
              size="sm"
              aria-current={locale === code}
              aria-label={t("switchLanguage")}
              className="h-7 px-2 text-xs font-medium"
              onClick={() => router.replace(pathname, { locale: code })}
            >
              {label}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t("switchLanguage")}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
