import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DITAB - Vision AI 기반 데이터 분석 및 기체 탐지 솔루션",
  description: "세상을 바라보는 또 다른 눈, DITAB. Vision AI 기반의 데이터 분석 및 기체 탐지 솔루션으로, 다양한 산업 환경에서 실시간 데이터 분석과 안전 감시 기능을 제공합니다.",
  keywords: "Vision AI, 데이터 분석, 기체 탐지, 안전 관리, AI 솔루션, 산업 안전, 실시간 모니터링",
  authors: [{ name: "DITAB", url: "https://ditab.io" }],
  creator: "DITAB",
  publisher: "DITAB",
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon.png',
    apple: '/favicon/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ditab.io",
    title: "DITAB - Vision AI 기반 데이터 분석 및 기체 탐지 솔루션",
    description: "세상을 바라보는 또 다른 눈, DITAB. Vision AI 기반의 데이터 분석 및 기체 탐지 솔루션으로, 다양한 산업 환경에서 실시간 데이터 분석과 안전 감시 기능을 제공합니다.",
    siteName: "DITAB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DITAB - Vision AI Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DITAB - Vision AI 기반 데이터 분석 및 기체 탐지 솔루션",
    description: "세상을 바라보는 또 다른 눈, DITAB. Vision AI 기반의 데이터 분석 및 기체 탐지 솔루션",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console 인증 코드
    other: {
      "naver-site-verification": "naver-site-verification-code" // 네이버 웹마스터 도구 인증 코드
    }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
