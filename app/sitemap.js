const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/team", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `https://aventure.jp${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
