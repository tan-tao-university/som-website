import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Khoa Y - Trường Đại học Tân Tạo (TTU SOM)",
    short_name: "SOM - TTU",
    description:
      "Website chính thức của Khoa Y, Trường Đại học Tân Tạo (TTU School of Medicine).",
    start_url: "/vi",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#008045",
    lang: "vi",
    icons: [
      {
        src: "/assets/ttu-logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
