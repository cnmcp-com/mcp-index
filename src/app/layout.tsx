import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MCP中文网 - 微软认证专业人员中文社区",
  description: "MCP中文网为中文开发者提供微软认证专业知识、技术教程、认证指南及技术交流平台",
  authors: [{ name: "MCP中文网" }],
  keywords: ["MCP", "微软认证", "Microsoft Certified Professional", "Azure", "微软技术", "认证考试"],
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
