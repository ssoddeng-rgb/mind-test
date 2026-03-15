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
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  const handleNext = () => {
    if (selectedOption === undefined) return;
    if (isLastQuestion) {
      const result = computeResult(answers);
      localStorage.setItem('mindtest_result', JSON.stringify(result));
      router.push('/result');
    } else {
      setCurrentIndex((i) => i + 1);
    }
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

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            <AnimatePresence>
              {currentIndex > 0 && (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={handlePrev}
                  className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  ← 이전
                </motion.button>
              )}
            </AnimatePresence>
            <button
              onClick={handleNext}
              disabled={selectedOption === undefined}
              className={`flex-1 py-3 rounded-xl font-bold text-base transition-all duration-200 ${
                selectedOption !== undefined
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg active:scale-[0.98]'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isLastQuestion ? '결과 보기 ✨' : '다음 →'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
