import type { Metadata } from 'next';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';
import { LangProvider } from '@/lib/LangContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://mind-test.pages.dev'),
  title: {
    default: '마음 탐구 — 종합 심리 유형 검사 | Mind Explorer',
    template: '%s | Mind Explorer',
  },
  description: 'MBTI, Big Five, 에니어그램, 애착 유형을 40문항으로 한 번에 분석하는 무료 종합 심리테스트. A free comprehensive personality test analyzing MBTI, Big Five, Enneagram, and Attachment Style in one go.',
  keywords: ['심리테스트', 'MBTI', 'Big Five', '에니어그램', '애착유형', '성격유형검사', 'personality test', 'enneagram', 'attachment style', 'free personality test', 'mbti test'],
  authors: [{ name: '마음 탐구 / Mind Explorer' }],
  creator: 'Mind Explorer',
  publisher: 'Mind Explorer',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://mind-test.pages.dev',
  },
  openGraph: {
    title: '마음 탐구 — 종합 심리 유형 검사',
    description: 'MBTI, Big Five, 에니어그램, 애착 유형을 40문항으로 한 번에 분석하는 무료 심리테스트',
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: 'en_US',
    siteName: '마음 탐구 / Mind Explorer',
    url: 'https://mind-test.pages.dev',
  },
  twitter: {
    card: 'summary',
    title: '마음 탐구 — 종합 심리 유형 검사',
    description: 'MBTI, Big Five, 에니어그램, 애착 유형을 한 번에 분석하는 무료 심리테스트',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1826986557488960"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-gray-50">
        <LangProvider>
          {children}
          <CookieBanner />
        </LangProvider>
      </body>
    </html>
  );
}
