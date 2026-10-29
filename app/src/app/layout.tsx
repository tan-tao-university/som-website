import type { Metadata } from "next";
import { Roboto_Mono, Be_Vietnam_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, absoluteUrl, truncateText } from "@/lib/seo";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Khoa Y - Đại học Tân Tạo (TTU SOM)",
  title: "Khoa Y - Trường Đại học Tân Tạo (TTU School of Medicine)",
  description:
    "Khoa Y Trường Đại học Tân Tạo đào tạo Bác sĩ Y khoa (MD chuẩn USMLE Hoa Kỳ), Cử nhân Điều dưỡng và Kỹ thuật Xét nghiệm Y học theo triết lý Y học Hoa Kỳ – Y đức Hải Thượng.",
  keywords:
    "Khoa Y Đại học Tân Tạo, School of Medicine TTU, Bác sĩ Đa khoa, USMLE, Điều dưỡng, Kỹ thuật Xét nghiệm Y học, GS Thạch Nguyễn, SOM, TTU",
  authors: [{ name: "Khoa Y - Trường Đại học Tân Tạo" }],
  creator: "Khoa Y - Trường Đại học Tân Tạo",
  publisher: "Khoa Y - Trường Đại học Tân Tạo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Khoa Y - Trường Đại học Tân Tạo",
    title: "Khoa Y - Trường Đại học Tân Tạo (TTU School of Medicine)",
    description: truncateText(
      "Khoa Y Trường Đại học Tân Tạo đào tạo Bác sĩ Y khoa (MD chuẩn USMLE Hoa Kỳ), Cử nhân Điều dưỡng và Kỹ thuật Xét nghiệm Y học theo triết lý Y học Hoa Kỳ – Y đức Hải Thượng.",
      125,
    ),
    images: [
      {
        url: absoluteUrl("/assets/som/hero-som-clinical.jpg"),
        width: 1200,
        height: 630,
        alt: "Khoa Y - Trường Đại học Tân Tạo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khoa Y - Trường Đại học Tân Tạo (TTU School of Medicine)",
    description:
      "Đào tạo Bác sĩ Y khoa (MD chuẩn USMLE), Cử nhân Điều dưỡng và Kỹ thuật Xét nghiệm Y học tại Trường Đại học Tân Tạo.",
    images: [absoluteUrl("/assets/som/hero-som-clinical.jpg")],
  },
  icons: {
    icon: [
      {
        url: "/assets/ttu-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/ttu-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/ttu-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  category: "education",
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        suppressHydrationWarning
        className={`${beVietnamPro.className} ${robotoMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
