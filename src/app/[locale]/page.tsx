import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Architecture } from "@/components/sections/architecture";
import { AiJourney } from "@/components/sections/ai-journey";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Architecture />
      <AiJourney />
      <Education />
      <Contact />
    </>
  );
}
