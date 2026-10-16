"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const t = useTranslations("nav");
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t("toggleTheme")}
          onClick={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
        >
          <span suppressHydrationWarning>
            {resolvedTheme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{t("toggleTheme")}</TooltipContent>
    </Tooltip>
  );
}
