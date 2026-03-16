'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TestResult } from '@/lib/types';
import ResultReport from '@/components/ResultReport';
import ShareButton, { decodeResult } from '@/components/ShareButton';
import CommentBox from '@/components/CommentBox';
import LangToggle from '@/components/LangToggle';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { useLang } from '@/lib/LangContext';

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { lang } = useLang();
  const [result, setResult] = useState<TestResult | null>(null);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    const d = searchParams.get('d');
    if (d) {
      const decoded = decodeResult(d);
      if (decoded) { setResult(decoded); setIsShared(true); return; }
    }
    const stored = localStorage.getItem('mindtest_result');
    if (!stored) { router.replace('/test'); return; }
    const parsed: TestResult = JSON.parse(stored);
    setResult(parsed);

    // 통계 자동 제출 (중복 방지)
    const key = `stat_submitted_${stored.slice(0, 20)}`;
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, '1');
      fetch('/api/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mbti: parsed.mbti, enneagram: parsed.enneagram, attachment: parsed.attachment }),
      }).catch(() => {});
    }
  }, [router, searchParams]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">⏳</div>
          <p className="text-gray-500">{lang === 'ko' ? '결과를 불러오는 중...' : 'Loading results...'}</p>
        </div>
      </div>
    );
  }

  const t = {
    ko: {
      header: '🔮 마음 탐구 — 종합 리포트',
      retake: '다시 검사하기',
      tryIt: '나도 해보기 →',
      sharedBannerTitle: '공유받은 결과를 보고 있어요',
      sharedBannerSub: '나의 유형이 궁금하다면? →',
      startTest: '테스트 시작',
      back: '↩ 처음으로',
      tryTest: '나도 테스트 해보기 🔮',
    },
    en: {
      header: '🔮 Mind Explorer — Full Report',
      retake: 'Retake Test',
      tryIt: 'Try it yourself →',
      sharedBannerTitle: 'You\'re viewing a shared result',
      sharedBannerSub: 'Curious about your own type? →',
      startTest: 'Start Test',
      back: '↩ Back to Home',
      tryTest: 'Take the Test Yourself 🔮',
    },
  }[lang];

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 py-3">
          <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
            <h1 className="font-bold text-gray-800 text-sm">{t.header}</h1>
            <div className="flex items-center gap-2">
              <LangToggle />
              {isShared
                ? <Link href="/test" className="text-sm text-indigo-600 font-semibold hover:text-indigo-700">{t.tryIt}</Link>
                : <Link href="/" className="text-sm text-indigo-600 font-semibold hover:text-indigo-700">{t.retake}</Link>}
            </div>
          </div>
        </header>

        {isShared && (
          <div className="max-w-xl mx-auto px-4 pt-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center gap-2">
              <span className="text-lg">👀</span>
              <div>
                <p className="text-sm font-semibold text-amber-800">{t.sharedBannerTitle}</p>
                <p className="text-xs text-amber-600">{t.sharedBannerSub}{' '}
                  <Link href="/test" className="underline font-semibold">{t.startTest}</Link>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-xl mx-auto px-4 py-8">
          <ResultReport result={result} />

          {/* 댓글 */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mb-4">
            <CommentBox mbti={result.mbti} />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="space-y-3 pb-4">
            <ShareButton result={result} />
            {!isShared && (
              <div className="text-center">
                <Link href="/" onClick={() => localStorage.removeItem('mindtest_result')}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all">
                  {t.back}
                </Link>
              </div>
            )}
            {isShared && (
              <Link href="/test"
                className="flex items-center justify-center w-full py-3 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95">
                {t.tryTest}
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
        <div className="text-center"><div className="text-4xl mb-4 animate-spin">⏳</div></div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
