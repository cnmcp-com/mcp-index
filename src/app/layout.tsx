import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next.js静态页面 | Cloudflare Pages",
  description: "使用Next.js构建的静态网站，部署在Cloudflare Pages上",
  authors: [{ name: "Your Name" }],
  keywords: ["Next.js", "Cloudflare", "静态网站", "前端开发"],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
