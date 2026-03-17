'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LangContext';

export default function Footer() {
  const { lang } = useLang();
  const t = {
    ko: {
      tagline: 'MBTI · Big Five · 에니어그램 · 애착 유형 종합 심리테스트',
      home: '홈', test: '테스트 시작', guide: '심리학 가이드', about: '소개', contact: '문의하기',
      privacy: '개인정보처리방침', terms: '이용약관', disclaimer: '면책 조항',
      disclaimer2: '본 테스트는 심리학 이론을 기반으로 한 참고용 검사입니다. 전문적인 심리 진단을 대체하지 않습니다.',
      rights: '© 2026 마음 탐구. All rights reserved.',
    },
    en: {
      tagline: 'MBTI · Big Five · Enneagram · Attachment Style Personality Test',
      home: 'Home', test: 'Start Test', guide: 'Psychology Guide', about: 'About', contact: 'Contact',
      privacy: 'Privacy Policy', terms: 'Terms of Use', disclaimer: 'Disclaimer',
      disclaimer2: 'This test is for reference only, based on psychological theories. It does not replace professional psychological assessment.',
      rights: '© 2026 Mind Explorer. All rights reserved.',
    },
  }[lang];

  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors">
            🔮 {lang === 'ko' ? '마음 탐구' : 'Mind Explorer'}
          </Link>
          <p className="text-sm text-gray-500 text-center">{t.tagline}</p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-indigo-600 transition-colors">{t.home}</Link>
            <Link href="/test" className="text-gray-500 hover:text-indigo-600 transition-colors">{t.test}</Link>
            <Link href="/guide" className="text-gray-500 hover:text-indigo-600 transition-colors">{t.guide}</Link>
            <Link href="/about" className="text-gray-500 hover:text-indigo-600 transition-colors">{t.about}</Link>
            <Link href="/contact" className="text-gray-500 hover:text-indigo-600 transition-colors">{t.contact}</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-indigo-600 transition-colors">{t.privacy}</Link>
            <Link href="/terms" className="text-gray-500 hover:text-indigo-600 transition-colors">{t.terms}</Link>
            <Link href="/disclaimer" className="text-gray-500 hover:text-indigo-600 transition-colors">{t.disclaimer}</Link>
          </nav>
          <div className="text-center text-xs text-gray-400 space-y-1 max-w-sm">
            <p>{t.disclaimer2}</p>
            <p className="mt-2">{t.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
