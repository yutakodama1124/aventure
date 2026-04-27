export const siteConfig = {
  name: "Aventure",
  url: "https://aventure.jp",
  description:
    "Experience Tokyo through authentic connections with local students. Aventure is a student-led, volunteer-based cultural exchange initiative sharing everyday Japan through conversation and local perspective.",
  descriptionJa:
    "Aventureは、日本の学生との会話や散歩を通じて、日常の東京と日本を体験できる学生主導の文化交流プロジェクトです。",
  keywords: [
    "Aventure",
    "Tokyo cultural exchange",
    "student-led cultural exchange",
    "Japan cultural experience",
    "Tokyo with local students",
    "Tokyo student guides",
    "authentic Tokyo experience",
    "文化交流",
    "東京",
    "日本体験",
    "学生団体",
    "国際交流",
  ],
  ogImage: "/images/hero_group.png",
};

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  keywords = [],
}) {
  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: "en_US",
      alternateLocale: ["ja_JP"],
      type: "website",
      images: [image ?? siteConfig.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image ?? siteConfig.ogImage],
    },
  };
}

export const aventureJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/aventure_logo.jpg`,
      description: siteConfig.description,
      sameAs: [siteConfig.url],
      email: "hello@aventure.jp",
      areaServed: "Tokyo",
      inLanguage: ["en", "ja"],
      knowsAbout: [
        "Tokyo cultural exchange",
        "Japanese student hosts",
        "Local Tokyo experiences",
        "Youth-led travel experiences",
      ],
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: ["en", "ja"],
      description: siteConfig.description,
    },
  ],
};
