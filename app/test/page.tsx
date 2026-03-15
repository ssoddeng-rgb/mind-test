'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/lib/questions';
import { computeResult } from '@/lib/scoring';
import { UserAnswers } from '@/lib/types';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const selectedOption = answers[currentQuestion.id];
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const handleSelect = (optionIndex: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: optionIndex };
    setAnswers(newAnswers);

    // 선택 즉시 자동 이동 (마지막 문항이면 결과로)
    setTimeout(() => {
      if (isLastQuestion) {
        const result = computeResult(newAnswers);
        localStorage.setItem('mindtest_result', JSON.stringify(result));
        router.push('/result');
      } else {
        setCurrentIndex((i) => i + 1);
      }
    }, 300); // 선택 피드백 애니메이션 후 이동
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 py-4">
        <div className="max-w-xl mx-auto">
          <ProgressBar current={currentIndex + 1} total={totalQuestions} />
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-xl">
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            selectedOption={selectedOption}
            onSelect={handleSelect}
          />

          {/* 이전 버튼만 남김 */}
          <div className="mt-6">
            <AnimatePresence>
              {currentIndex > 0 && (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={handlePrev}
                  className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all text-sm"
                >
                  ← 이전 문항으로
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
