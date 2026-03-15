import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '마음 탐구 — 종합 심리 유형 검사',
  description: 'MBTI, Big Five, 에니어그램, 애착 유형을 한 번에 분석하는 종합 심리테스트',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}
