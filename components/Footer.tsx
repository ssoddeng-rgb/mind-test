'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg font-bold text-gray-800">🔮 마음 탐구</p>
          <p className="text-sm text-gray-500 text-center">
            MBTI · Big Five · 에니어그램 · 애착 유형 종합 심리테스트
          </p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="text-gray-500 hover:text-indigo-600 transition-colors">홈</Link>
            <Link href="/test" className="text-gray-500 hover:text-indigo-600 transition-colors">테스트 시작</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-indigo-600 transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="text-gray-500 hover:text-indigo-600 transition-colors">이용약관</Link>
          </nav>
          <div className="text-center text-xs text-gray-400 space-y-1">
            <p>본 테스트는 심리학 이론(MBTI, Big Five, 에니어그램, 애착이론)을 기반으로 한 참고용 검사입니다.</p>
            <p>전문적인 심리 진단을 대체하지 않습니다.</p>
            <p className="mt-2">© {new Date().getFullYear()} 마음 탐구. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
