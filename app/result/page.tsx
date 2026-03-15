'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TestResult } from '@/lib/types';
import ResultReport from '@/components/ResultReport';
import ShareButton, { decodeResult } from '@/components/ShareButton';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<TestResult | null>(null);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    // 공유 링크로 접근한 경우 URL 파라미터에서 결과 복원
    const d = searchParams.get('d');
    if (d) {
      const decoded = decodeResult(d);
      if (decoded) {
        setResult(decoded);
        setIsShared(true);
        return;
      }
    }

    // 일반 접근: localStorage에서 결과 로드
    const stored = localStorage.getItem('mindtest_result');
    if (!stored) {
      router.replace('/test');
      return;
    }
    setResult(JSON.parse(stored));
  }, [router, searchParams]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">⏳</div>
          <p className="text-gray-500">결과를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 py-3">
          <div className="max-w-xl mx-auto flex items-center justify-between">
            <h1 className="font-bold text-gray-800">🔮 마음 탐구 — 종합 리포트</h1>
            {isShared ? (
              <Link
                href="/test"
                className="text-sm text-indigo-600 font-semibold hover:text-indigo-700"
              >
                나도 해보기 →
              </Link>
            ) : (
              <Link
                href="/"
                className="text-sm text-indigo-600 font-semibold hover:text-indigo-700"
              >
                다시 검사하기
              </Link>
            )}
          </div>
        </header>

        {/* 공유받은 결과 배너 */}
        {isShared && (
          <div className="max-w-xl mx-auto px-4 pt-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center gap-2">
              <span className="text-lg">👀</span>
              <div>
                <p className="text-sm font-semibold text-amber-800">공유받은 결과를 보고 있어요</p>
                <p className="text-xs text-amber-600">나의 유형이 궁금하다면? →{' '}
                  <Link href="/test" className="underline font-semibold">테스트 시작</Link>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Report */}
        <div className="max-w-xl mx-auto px-4 py-8">
          <ResultReport result={result} />

          {/* Share + Retry */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="space-y-3 pb-4"
          >
            <ShareButton result={result} />

            {!isShared && (
              <div className="text-center">
                <Link
                  href="/"
                  onClick={() => localStorage.removeItem('mindtest_result')}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                >
                  ↩ 처음으로
                </Link>
              </div>
            )}

            {isShared && (
              <Link
                href="/test"
                className="flex items-center justify-center w-full py-3 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                나도 테스트 해보기 🔮
              </Link>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">⏳</div>
          <p className="text-gray-500">결과를 불러오는 중...</p>
        </div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
