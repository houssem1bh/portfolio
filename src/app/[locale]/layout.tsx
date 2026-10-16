import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkipLink } from "@/components/skip-link";
import { AuroraBackground } from "@/components/aurora-background";
import { NoiseOverlay } from "@/components/noise-overlay";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const siteUrl = "https://houssembenhassen.dev";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `%s · ${t("shortName")}`,
    },
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    authors: [{ name: "Houssem Ben Hassen", url: siteUrl }],
    creator: "Houssem Ben Hassen",
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        fr: "/",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: locale === routing.defaultLocale ? "/" : `/${locale}`,
      title: t("title"),
      description: t("description"),
      siteName: t("shortName"),
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-foreground">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={200}>
              <SkipLink />
              <AuroraBackground position="fixed" />
              <NoiseOverlay />
              <SiteHeader />
              <main id="main-content" className="relative flex-1">
                {children}
              </main>
              <SiteFooter />
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
