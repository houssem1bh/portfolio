import type { MetadataRoute } from "next";

const siteUrl = "https://houssembenhassen.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(2026, 7, 1),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(2026, 7, 1),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
