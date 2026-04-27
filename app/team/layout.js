export const metadata = {
  title: "Team",
  description:
    "Meet the student founders and volunteers behind Aventure, a youth-led cultural exchange initiative sharing everyday Tokyo with international visitors.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Team | Aventure",
    description:
      "Meet the student founders and volunteers behind Aventure and see the people shaping its cultural exchange experiences in Tokyo.",
    url: "https://aventure.jp/team",
    images: ["/images/chopped_leader.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team | Aventure",
    description:
      "Meet the student founders and volunteers behind Aventure and see the people shaping its cultural exchange experiences in Tokyo.",
    images: ["/images/chopped_leader.jpg"],
  },
};

export default function TeamLayout({ children }) {
  return children;
}
