import Providers from "@/components/Providers";
import { GlobalChoppedAnimation } from "@/components/GlobalChoppedAnimation";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aventure.jp"),
  title: {
    default: "Aventure | Student-Led Cultural Exchange in Tokyo",
    template: "%s | Aventure",
  },
  description:
    "Experience Tokyo through authentic connections with local students. Aventure is a student-led, volunteer-based cultural exchange initiative sharing everyday Japan through conversation and local perspective.",
  keywords: [
    "Japan",
    "cultural exchange",
    "Tokyo",
    "student volunteer",
    "travel",
    "日本",
    "文化交流",
    "Tokyo locals",
    "student guides",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google8e0e59ee9d2b4aa4",
  },
  openGraph: {
    title: "Aventure | Student-Led Cultural Exchange in Tokyo",
    description:
      "Walk Tokyo with local students and experience Japan through real conversation, everyday places, and youth perspectives.",
    url: "https://aventure.jp",
    siteName: "Aventure",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_group.png",
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
    images: ["/images/hero_group.png"],
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
    icon: "/icon.jpg",
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
          <GlobalChoppedAnimation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
