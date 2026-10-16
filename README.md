# Houssem Ben Hassen — Portfolio

Personal portfolio positioning Houssem as a Frontend Technical Lead. Built with Next.js 16 (App Router), TypeScript, Tailwind v4, shadcn/ui, Motion, and next-intl. Bilingual: French (default, served at `/`) and English (served at `/en`).

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 + shadcn/ui (Nova preset: Radix primitives, Lucide icons, Geist fonts)
- **i18n:** next-intl (`fr` default, `en` at `/en`, locale switch with no page reload)
- **Theme:** next-themes, dark mode by default with a light mode toggle
- **Animation:** Motion (`motion/react`), scroll reveals only, respects `prefers-reduced-motion`
- **Icons:** lucide-react, plus two inlined brand SVGs (GitHub, LinkedIn — Lucide v1 dropped brand logos)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
messages/            en.json / fr.json — all page copy, structured by section
src/i18n/            next-intl routing, navigation, request config
src/proxy.ts          locale-detection proxy (Next 16 renamed "middleware" to "proxy")
src/app/[locale]/     root layout + page (all sections assembled here)
src/app/sitemap.ts    sitemap.xml
src/app/robots.ts     robots.txt
src/app/opengraph-image.tsx   generated OG image
src/components/sections/      one file per page section (hero, about, experience, ...)
src/components/ui/            shadcn/ui primitives
public/cv/            CV PDF placeholders — replace with the real files
```

## Before shipping, replace these placeholders

- **`public/cv/houssem-ben-hassen-cv-en.pdf`** and **`houssem-ben-hassen-cv-fr.pdf`** — currently plain-text placeholder files. Swap in the real CV PDFs, one per language, same filenames.
- **Hero portrait** (`src/components/sections/hero.tsx`) — currently a monogram placeholder (no stock photo was used, since inventing a photo of a real person would be dishonest). Replace the placeholder `div` with a real `next/image` portrait when one is available.
- **GitHub link** — the CV had no GitHub profile, so the footer/contact GitHub icon is rendered disabled with a "coming soon" label. Wire it up once a profile exists (`src/components/site-footer.tsx`, `src/components/sections/contact.tsx`).
- **`siteUrl`** — currently `https://houssembenhassen.dev` as a placeholder domain, set in `src/app/[locale]/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts`. Update to the real deployed domain.

## Editing content

All copy lives in `messages/en.json` and `messages/fr.json`, organized by section (`hero`, `about`, `experience`, `skills`, `projects`, `architecture`, `aiJourney`, `education`, `languages`, `contact`, `nav`, `footer`, `meta`). Structured content (experience entries, projects, skill categories) is stored as arrays/objects inside these files and read via `useTranslations(...).raw(...)` in the corresponding section component — edit the JSON directly, no code changes needed for content updates.

## Deployment

Deploy on [Vercel](https://vercel.com/new) (zero config) or any Node host:

```bash
npm run build
npm run start
```

Both locale routes (`/` for French, `/en` for English) are statically prerendered at build time.
