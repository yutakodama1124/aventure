import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";
import { aventureJsonLd, siteConfig } from "@/app/seo";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aventure | Student-Led Cultural Exchange in Tokyo",
    template: "%s | Aventure",
  },
  description:
    `${siteConfig.description} ${siteConfig.descriptionJa}`,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google8e0e59ee9d2b4aa4",
  },
  openGraph: {
    title: "Aventure | Student-Led Cultural Exchange in Tokyo",
    description:
      "Walk Tokyo with local students and experience Japan through real conversation, everyday places, and youth perspectives. 東京を学生の視点から体験できる文化交流プロジェクトです。",
    url: siteConfig.url,
    siteName: "Aventure",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Aventure cultural exchange experience in Tokyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aventure | Student-Led Cultural Exchange in Tokyo",
    description:
      "Walk Tokyo with local students and experience Japan through real conversation, everyday places, and youth perspectives.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/aventure_logo.jpg" },
      { url: "/images/aventure_logo.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
    apple: "/images/aventure_logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;700&family=Gochi+Hand&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aventureJsonLd),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
