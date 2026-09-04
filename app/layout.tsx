import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Usman Price Action Lab – Daily Free XAUUSD Signals & Account Management",
  description:
    "Join Usman Price Action Lab for daily free XAUUSD signals, expert account management, and premium forex trading insights. Your trusted Telegram channel for gold trading.",
  openGraph: {
    title: "Usman Price Action Lab – Daily Free XAUUSD Signals",
    description:
      "Daily free XAUUSD signals & professional account management. Join 10,000+ traders on Telegram.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07100d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
