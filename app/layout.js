import Providers from "@/components/Providers";
import { GlobalChoppedAnimation } from "@/components/GlobalChoppedAnimation";
import "./globals.css";

export const metadata = {
  title: "Aventure - Japan Reimagined by Youth",
  description: "Experience Tokyo through casual walks and conversations with Japanese students.",
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
