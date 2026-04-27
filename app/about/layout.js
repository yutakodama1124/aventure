import { buildPageMetadata } from "@/app/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn the story behind Aventure, a bilingual student-led cultural exchange in Tokyo created to share a more personal and honest experience of Japan. Aventureの成り立ちと、日本を若者の視点から伝える想いをご紹介します。",
  path: "/about",
  image: "/images/aventure_1.jpg",
  keywords: ["About Aventure", "Tokyo cultural exchange story", "学生主導 文化交流"],
});

export default function AboutLayout({ children }) {
  return children;
}
