import NewsPageServer from "@/components/NewsPageServer";
import { api } from "@/lib/api";
import { getNewsImage } from "@/lib/news-content";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

const title = "Medical News & Events | TTU School of Medicine";
const description =
  "Official news, academic activities, research, student achievements and events from the School of Medicine at Tan Tao University.";

export async function generateMetadata() {
  const items = await api.news.findAll().catch(() => []);
  const latest = items
    .filter((item) => item.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishedAt || 0).getTime() -
        new Date(a.publishedAt || 0).getTime(),
    )
    .find((item) => getNewsImage(item));

  return buildPageMetadata({
    locale: "en",
    title,
    description,
    path: "/en/news",
    alternatePath: "/vi/tin-tuc",
    image: latest ? getNewsImage(latest) : undefined,
  });
}

export default function NewsPage() {
  return <NewsPageServer locale="en" />;
}
