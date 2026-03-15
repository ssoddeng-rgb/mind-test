'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TestResult } from '@/lib/types';
import ResultReport from '@/components/ResultReport';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('mindtest_result');
    if (!stored) {
      router.replace('/test');
      return;
    }
    setResult(JSON.parse(stored));
  }, [router]);

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
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 py-3">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <h1 className="font-bold text-gray-800">🔮 마음 탐구 — 종합 리포트</h1>
          <Link
            href="/"
            className="text-sm text-indigo-600 font-semibold hover:text-indigo-700"
          >
            다시 검사하기
          </Link>
        </div>
      </header>

      {/* Report */}
      <div className="max-w-xl mx-auto px-4 py-8">
        <ResultReport result={result} />

        {/* Retry Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <Link
            href="/"
            onClick={() => localStorage.removeItem('mindtest_result')}
            className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-indigo-200 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all"
          >
            ↩ 처음으로
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
