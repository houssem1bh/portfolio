"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Magnetic } from "@/components/interactive/magnetic";
import { Ripple } from "@/components/interactive/ripple";

const NAV_ITEMS = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-panel sticky top-0 z-40 !rounded-none !border-x-0 !border-t-0">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group shrink-0 text-sm font-semibold tracking-tight transition-colors hover:text-brand"
        >
          Houssem{" "}
          <span className="text-muted-foreground transition-colors group-hover:text-brand/70">
            Ben Hassen
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.key)}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <Magnetic strength={0.35}>
            <Ripple className="rounded-lg">
              <Button
                asChild
                size="sm"
                className="shadow-[0_4px_20px_-4px_oklch(from_var(--brand)_l_c_h_/_35%)] transition-shadow duration-300 hover:shadow-[0_8px_28px_-4px_oklch(from_var(--brand)_l_c_h_/_55%)]"
              >
                <a href={`/cv/houssem-ben-hassen-cv-${locale}.pdf`} download>
                  {t("downloadCv")}
                </a>
              </Button>
            </Ripple>
          </Magnetic>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("openMenu")}
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
            <SheetContent side="right" className="glass-panel !border-l">
              <SheetHeader>
                <SheetTitle>Houssem Ben Hassen</SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Mobile"
                className="flex flex-col gap-1 px-4"
              >
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2.5 text-base text-foreground transition-colors hover:bg-brand/10 hover:text-brand"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <LocaleSwitcher />
                <Button asChild>
                  <a href={`/cv/houssem-ben-hassen-cv-${locale}.pdf`} download>
                    {t("downloadCv")}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
