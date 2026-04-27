export const metadata = {
  title: "About",
  description:
    "Learn the story behind Aventure, a student-led cultural exchange in Tokyo created to share a more personal and honest experience of Japan.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Aventure",
    description:
      "Discover why Aventure was created and how its student team shares Tokyo through everyday human connection.",
    url: "https://aventure.jp/about",
    images: ["/images/aventure_1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Aventure",
    description:
      "Discover why Aventure was created and how its student team shares Tokyo through everyday human connection.",
    images: ["/images/aventure_1.jpg"],
  },
};

export default function AboutLayout({ children }) {
  return children;
}
