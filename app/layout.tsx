import type { Metadata } from 'next';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';
import { LangProvider } from '@/lib/LangContext';

export const metadata: Metadata = {
  title: '마음 탐구 — 종합 심리 유형 검사 | Mind Explorer',
  description: 'MBTI, Big Five, 에니어그램, 애착 유형을 한 번에 분석하는 종합 심리테스트 | A comprehensive personality test analyzing MBTI, Big Five, Enneagram, and Attachment Style.',
  keywords: ['심리테스트', 'MBTI', 'Big Five', '에니어그램', '애착유형', 'personality test', 'enneagram', 'attachment style'],
  authors: [{ name: '마음 탐구 / Mind Explorer' }],
  openGraph: {
    title: '마음 탐구 — 종합 심리 유형 검사',
    description: 'MBTI, Big Five, 에니어그램, 애착 유형을 한 번에 분석하는 종합 심리테스트',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50">
        <LangProvider>
          {children}
          <CookieBanner />
        </LangProvider>
      </body>
    </html>
  );
}
