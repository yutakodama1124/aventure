import { buildPageMetadata } from "@/app/seo";

export const metadata = buildPageMetadata({
  title: "Team",
  description:
    "Meet the student founders and volunteers behind Aventure, a youth-led cultural exchange initiative sharing everyday Tokyo with international visitors. 国際交流を支える学生メンバーをご紹介します。",
  path: "/team",
  image: "/images/chopped_leader.jpg",
  keywords: ["Aventure team", "Tokyo student guides", "学生メンバー紹介"],
});

export default function TeamLayout({ children }) {
  return children;
}
