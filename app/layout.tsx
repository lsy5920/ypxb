import type { Metadata } from "next";
import { Ma_Shan_Zheng, Noto_Serif_SC } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AmbientToggle } from "@/components/ui/ambient-toggle";
import { CursorBloom } from "@/components/ui/cursor-bloom";
import { FloatingPetals } from "@/components/ui/floating-petals";
import { PosterShare } from "@/components/ui/poster-share";
import { withBasePath } from "@/lib/asset-path";
import "./globals.css";

const serifCn = Noto_Serif_SC({
  variable: "--font-serif-cn",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const brushCn = Ma_Shan_Zheng({
  variable: "--font-brush-cn",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "蓝诗亦 | 沐谦的江湖名帖",
    template: "%s | 蓝诗亦",
  },
  description:
    "一座以 Next.js 15 打造的国风个人主页：园林诗意、幽默风趣、互动丰富，写给温暖与清醒并存的自由探索者。",
  keywords: [
    "蓝诗亦",
    "沐谦",
    "个人主页",
    "国风网站",
    "Next.js 15",
    "Tailwind CSS",
  ],
  icons: {
    icon: withBasePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${serifCn.variable} ${brushCn.variable} bg-background text-foreground antialiased`}
      >
        <CursorBloom />
        <FloatingPetals />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
        <PosterShare />
        <AmbientToggle />
      </body>
    </html>
  );
}
