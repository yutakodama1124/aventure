import { buildPageMetadata } from "@/app/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Aventure to request a cultural exchange session in Tokyo, ask about partnerships, or join the student volunteer team. 東京での文化交流参加や学生ボランティア応募についてお問い合わせいただけます。",
  path: "/contact",
  image: "/images/aventure_2.jpg",
  keywords: ["Tokyo cultural exchange contact", "student volunteer Tokyo", "お問い合わせ 東京 文化交流"],
});

export default function ContactLayout({ children }) {
  return children;
}
