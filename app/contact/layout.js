export const metadata = {
  title: "Contact",
  description:
    "Contact Aventure to request a cultural exchange session in Tokyo, ask about partnerships, or join the student volunteer team.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Aventure",
    description:
      "Get in touch with Aventure for visitor requests, student volunteer applications, and partnership inquiries.",
    url: "https://aventure.jp/contact",
    images: ["/images/aventure_2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Aventure",
    description:
      "Get in touch with Aventure for visitor requests, student volunteer applications, and partnership inquiries.",
    images: ["/images/aventure_2.jpg"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
